/*
 * This file is part of rasdaman community.
 *
 * Rasdaman community is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Rasdaman community is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU  General Public License for more details.
 *
 * You should have received a copy of the GNU  General Public License
 * along with rasdaman community.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Copyright 2003 - 2016 Peter Baumann / rasdaman GmbH.
 *
 * For more information please see <http://www.rasdaman.org>
 * or contact Peter Baumann via <baumann@rasdaman.com>.
 */
 /**
 * Grammar definition for the WCPS 2.0 standard draft.
 * The parser rules are written using the grammar provided by ANTLR4. Please refer to the documentation here <insert antlr4 docs>
 *
 * to understand the syntax and rules of it.
 *
 * If adding new grammar rules, please follow the next rules so that the grammar is kept consistent:
 *  1. Add any tokens in the wcpsLexer.g4 file, use the instructions there to define new ones.
 *  2. For each new rule added, please mention a valid expression that is targetted, and if possible a full wcps query
 *     that can be used to test it.
 *  3. Do not use inline java code, all the logic should go into the Java class called WcpsEvaluator. Please check the ANTLR4
 *     documentation if you need to understand the visitor pattern better.
 *
 * @author Alex Dumitru <alex@flanche.net>
 * @author Vlad Merticariu <vlad@flanche.net>
 */
grammar wcps;
import wcpsLexerTokens;

// NOTE: Comments are ignored in WCPS

LINE_COMMENT
    : '--' ~[\r\n]* -> skip;

MULTILINE_COMMENT
    : '/*' .*? '*/' -> skip
;

wcpsQuery : (forClauseList) 
            (letClauseList)? 
            (whereClause)? 
            (returnClause)
;

/**
 * Example:
 * for $c in (cov1),
 *     $c2 in (cov2)
 *
 * Query:
 * for $c in (cov1)
 * for $c2 in (cov2)
 * return encode($c1 + $c2, "image/png")
 */
forClauseList: FOR (forClause) (COMMA forClause)*;

coverageIdForClause : COVERAGE_VARIABLE_NAME | decodeCoverageExpression | qualifiedCoverageIdentifier;

/**
 * Example:
 * $c in (cov1)
 */
forClause:  coverageVariableName IN
           (LEFT_PARENTHESIS)? coverageIdForClause (COMMA coverageIdForClause)* (RIGHT_PARENTHESIS)?;


/**
 * Example:
 * Let $a := $c[Lat(20:30), Long(40:45)],
 *     $b := $c + 2
 * return encode($a + $b, "png")
 *
*/
letClauseList: LET (letClause) (COMMA letClause)*;

letClause: letClauseWithDimensionIntervalList | letClauseWithCoverageExpression;

letClauseWithDimensionIntervalList: coverageVariableName COLON EQUAL LEFT_BRACKET dimensionIntervalList RIGHT_BRACKET;
letClauseWithCoverageExpression: coverageVariableName COLON EQUAL ( coverageExpression | wktExpression );

/**
 * Example:
 *  where ($c.red > 100)
 *
 * Query:
 *  for $c in (cov1, cov2, cov3) where ($c.red + ($c.blue / 3) <= 163) return encode($c, "image/png")
 */
whereClause: WHERE (LEFT_PARENTHESIS)? coverageExpression (RIGHT_PARENTHESIS)?;

/**
 * Example
 *   return 42;
 * | return encode($c, "image/png")
 *
 * Query:
 *  for $c in (someCoverage) return encode($c * 2.5, "image/tiff")
 */
returnClause: RETURN (LEFT_PARENTHESIS)? processingExpression (RIGHT_PARENTHESIS)?;


/**
e.g: imageCrsdomain(c) returns (0:5,0:20,0:60)
imageCrsdomain(c, ansi) returns (0:5)
imageCrsdomain(c, Lat).lo returns 0
imageCrsdomain(c, Long).hi returns 60
domain($c, Lat).resolution returns 15.5
**/
domainPropertyValueExtraction: LOWER_BOUND | UPPER_BOUND | RESOLUTION;

domainIntervals: (domainExpression | imageCrsDomainExpression | imageCrsDomainByDimensionExpression) (DOT domainPropertyValueExtraction)?;

/**
Workaround for crsTransform($c, ... {Lat:domain($c, Lat).resolution, ...})
**/

geoXYAxisLabelAndDomainResolution: COVERAGE_NAME  LEFT_PARENTHESIS coverageExpression COMMA axisName (COMMA crsName)?  RIGHT_PARENTHESIS (DOT domainPropertyValueExtraction);

/**
 * Example
 * $coverageName;
 *
 * Query:
 * for $coverageName in someCoverage return encode($coverageName, "csv");
 *
 */
coverageVariableName: COVERAGE_VARIABLE_NAME;


/**
 * Example:
 *   (1+1)
 * | encode($c, "image/png")
 */
processingExpression: getComponentExpression
                    | scalarExpression
                    | encodedCoverageExpression
		                | scalarValueCoverageExpression
                    | describeCoverageExpression;


/**
*  Only valid if the Rasql return value which is "Number" or "True/False" (e.g: 0, -3, 2.5345, t, f)
*
*  Example:
*
*     for $c in (mr) return c[i(0), j(0)] + avg(c) - 5 + 20 + 30 - 25 * 10 + count(c > 20)
*  or
*     for $c in (mr) return (c[i(0), j(0)] = 25 + 30 - 50)
*/
scalarValueCoverageExpression: (LEFT_PARENTHESIS)?  coverageExpression (RIGHT_PARENTHESIS)?;


/**
 * Example:
 *  See the examples for each of the subclasses.
 */
scalarExpression: 
                  geoXYAxisLabelAndDomainResolution 
                | booleanScalarExpression
                | numericalScalarExpression
                | stringScalarExpression
                | starExpression
                | domainIntervals 
                | cellCountExpression
;

/**
 *  Example:
 *   NOT(true)
 * | 1 >= 2
 * | "stringA" = "stringB"
 * Query:
 *   for $c in (someCoverage) return (not(TRUE))
 * | for $c in (someCoverage) return ( 1+3 > 2-1 )
 */
booleanScalarExpression:  reduceBooleanExpression

                        | booleanConstant

                        | booleanUnaryOperator LEFT_PARENTHESIS? booleanScalarExpression RIGHT_PARENTHESIS?

                        | booleanScalarExpression booleanOperator booleanScalarExpression

                        | numericalScalarExpression numericalComparissonOperator  numericalScalarExpression

                        | reduceBooleanExpression

                        | stringScalarExpression stringOperator stringScalarExpression;

booleanUnaryOperator: NOT;

booleanConstant: TRUE | FALSE;

booleanOperator: AND | XOR | OR;

numericalComparissonOperator: GREATER_THAN | GREATER_OR_EQUAL_THAN | LOWER_THAN | LOWER_OR_EQUAL_THAN | EQUAL | NOT_EQUAL;

stringOperator: EQUAL | NOT_EQUAL;

stringScalarExpression: STRING_LITERAL;

starExpression: MULTIPLICATION;


/**
Not as booleanScalarExpression need both sides of boolean expression is scalar.
Boolean switch case allow both cases are coverage expression.
e.g:
for c in (rgb) return encode(switch case c > 1000 return {red: c.0, green: c.1, blue: c.2}, "png")
*/

/*
 (coverageExpression booleanOperator coverageExpression)
 e.g: (c > 2), (c > avg(c)), ( 3 = avg(c))
*/
booleanSwitchCaseCoverageExpression: (LEFT_PARENTHESIS)* coverageExpression (RIGHT_PARENTHESIS)*
						numericalComparissonOperator
				     (LEFT_PARENTHESIS)* coverageExpression (RIGHT_PARENTHESIS)*
                    | coverageExpression IS (NOT)? NULL;

/*
 Combine multiple booleanSwitchCaseCoverageExpression
 e.g: (c > 2) and ( (c > 5 ) or ( 2 > 0))
*/
booleanSwitchCaseCombinedExpression:  booleanSwitchCaseCoverageExpression booleanOperator booleanSwitchCaseCoverageExpression
				    | booleanSwitchCaseCoverageExpression
				    | booleanSwitchCaseCombinedExpression booleanOperator booleanSwitchCaseCombinedExpression;

/**
 * Example:
 *   1 + 2
 * | avg(a) / avg(b)
 *
 * Query:
 * for c in (someCoverage) return ((avg(a) / avg(b) * 9/5) + 32)
 */
numericalScalarExpression: numericalUnaryOperation LEFT_PARENTHESIS numericalScalarExpression RIGHT_PARENTHESIS
                         | trigonometricOperator LEFT_PARENTHESIS numericalScalarExpression RIGHT_PARENTHESIS
                         | numericalScalarExpression numericalOperator numericalScalarExpression
                         | condenseExpression
                         | number

                         | NAN_NUMBER_CONSTANT

                         | complexNumberConstant

;
/**
 * Example:
 *  (2,5)  //the equivalent of 2 + 5i
 */
complexNumberConstant: LEFT_PARENTHESIS REAL_NUMBER_CONSTANT COMMA REAL_NUMBER_CONSTANT RIGHT_PARENTHESIS;
numericalOperator: PLUS | MINUS | MULTIPLICATION | DIVISION;
numericalUnaryOperation: ABSOLUTE_VALUE | SQUARE_ROOT |  REAL_PART | IMAGINARY_PART | ROUND | MINUS | PLUS | CEIL | FLOOR;
trigonometricOperator: SIN | COS | TAN | SINH | COSH | TANH | ARCSIN | ARCCOS | ARCTAN | ATAN2 | ARCTAN2;



/**
 * Example:
 *  See the rules below;
 */
getComponentExpression: coverageIdentifierExpression
          	          | coverageCrsSetExpression
		                  | domainExpression
		                  | imageCrsDomainExpression
		                  | imageCrsDomainByDimensionExpression
		                  | imageCrsExpression
                      | cellCountExpression

                      | coverageExpressionNullSetRetrieving // -- rasdaman enterprise

;



// -- rasdaman enterprise begin

// nullset(X)
coverageExpressionNullSetRetrieving: NULLSET LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;

// -- rasdaman enterprise end

/**
identifier()
Return the coverage name from coverage variable name

for $c in (someCov) return identifier($c)
return someCov
*/
coverageIdentifierExpression: IDENTIFIER LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;

cellCountExpression: CELLCOUNT LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;


/**
crrSet()
Return the list of dimensions and their supported CRSs (e.g: time Crs/geo-referenced CRS and GridCRS)

for $c in (eobstest) return crsset($c)
return t:http://.../Temporal?epoch="1950-01-01T00:00:00"&uom="d" http://.../Index3D,
Long:http://.../4326 http://.../Index3D,
Lat:http://.../4326 http://.../Index3D
*/
coverageCrsSetExpression: CRSSET LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS;

/*
domain()
The domain of coverage with the specific axis and its CRS (geo-referenced CRS or grid CRS)

for $c in (eobstest) return domain(c, Lat, "http://.../Index2D")
return (-25:75)
*/
domainExpression: DOMAIN LEFT_PARENTHESIS coverageExpression ( COMMA axisName (COMMA crsName)? )? RIGHT_PARENTHESIS
;


/*
imageCrsdomain($c, $axisName)
The domain of given axis in the coverage in grid interval (used with coverage iterator)
e.g: $px x(imageCrsdomain(c[Lat(0:20)], Lat)

for $c in (eobstest) return imageCrsdomain(c[Lat(0:20), Lat)
return (111:151)
*/
imageCrsDomainByDimensionExpression: IMAGECRSDOMAIN LEFT_PARENTHESIS coverageExpression COMMA axisName RIGHT_PARENTHESIS
;


/*
imageCrsdomain($c)
The domain of each axis in the coverage in grid interval (used with scale, extend)
e.g: scale( c[i(120:150), j(120:150)],
            imageCrsDomain(c[i(10:20), j(10:20)]) )

for $c in (eobstest) return imageCrsdomain(c)
return (0:5, 0:100, 0:231) (time, long, lat) respectively
*/
imageCrsDomainExpression: IMAGECRSDOMAIN LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;


/*
imageCrs()
The grid CRS which is depent on the axes of coverage

for $c in (mr) return imageCrs(c)
return "http://.../Index2D"
*/
imageCrsExpression: IMAGECRS LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;



/**
 * Example:
 * describe($c);
 *
 * Query:
 * for $c in (someCov) return describe($c + 5, "gml", "{\"outputType\":\"GeneralGridCoverage\"}")
 */
describeCoverageExpression: DESCRIBE_COVERAGE LEFT_PARENTHESIS
                            coverageExpression COMMA STRING_LITERAL (COMMA extraParams)?
                            RIGHT_PARENTHESIS
;

positionalParamater: POSITIONAL_PARAMETER;
extraParams: STRING_LITERAL | EXTRA_PARAMS;

/**
 * Example:
 *   encode($c, "image/tiff")
 * | encode($c, "image/png", "NODATA=0")
 */
encodedCoverageExpression: ENCODE LEFT_PARENTHESIS
                           coverageExpression COMMA STRING_LITERAL (COMMA extraParams)?
                           RIGHT_PARENTHESIS;

/**
 * Example:
 *   decode("1,2,3,4", "csv")
 * Query:
 *   ?!
 */
decodeCoverageExpression: DECODE LEFT_PARENTHESIS
                          positionalParamater (COMMA extraParams)?
                          RIGHT_PARENTHESIS;

/**
 * See subclauses
 */

coverageExpressionInParenthesis: LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS;

coverageExpression: 
                  udfExpression 
                  |coverageExpression booleanOperator coverageExpression
                  | coverageExpression LEFT_BRACKET dimensionPointList RIGHT_BRACKET
                  | SLICE LEFT_PARENTHESIS coverageExpression COMMA LEFT_BRACE dimensionPointList RIGHT_BRACE RIGHT_PARENTHESIS
                  | coverageExpression LEFT_BRACKET dimensionIntervalList RIGHT_BRACKET
                  | coverageExpression LEFT_BRACKET coverageVariableName RIGHT_BRACKET
                  | TRIM LEFT_PARENTHESIS coverageExpression COMMA LEFT_BRACE dimensionIntervalList RIGHT_BRACE
                    RIGHT_PARENTHESIS

                  | coverageExpressionInParenthesis
                  | scalarExpression
		              | domainIntervals
                  | timeExtractorElement
                  | timeTruncatorElement
                  | geoXYAxisLabelAndDomainResolution
                  | coverageExpression DOT fieldName
  	              | coverageConstructorExpression
                  | coverageVariableName
                  | coverageExpression numericalComparissonOperator coverageExpression
                  | coverageExpression coverageArithmeticOperator coverageExpression
                  | coverageConstantExpression
                  | decodeCoverageExpression
                  | EXTEND LEFT_PARENTHESIS coverageExpression COMMA LEFT_BRACE ( dimensionIntervalList  | coverageVariableName )  RIGHT_BRACE
                    RIGHT_PARENTHESIS

                  | EXTEND LEFT_PARENTHESIS coverageExpression COMMA LEFT_BRACE ( domainIntervals  | coverageVariableName )  RIGHT_BRACE
                    RIGHT_PARENTHESIS

                  | unaryArithmeticExpression
                  | trigonometricExpression
                  | exponentialExpression
                  | minBinaryExpression
                  | maxBinaryExpression
    		          | unaryPowerExpression
    		          | unaryModExpression
                  | unaryBooleanExpression
                  | castExpression
                  | rangeConstructorExpression
                  | clipWKTExpression
                  | clipCurtainExpression
                  | clipCorridorExpression
                  | crsTransformExpression
                  | crsTransformShorthandExpression
    		          | switchCaseExpression
    		          | SCALE LEFT_PARENTHESIS
		                coverageExpression COMMA LEFT_BRACE ( domainIntervals | coverageVariableName ) RIGHT_BRACE
                    RIGHT_PARENTHESIS

                  | SCALE LEFT_PARENTHESIS
                        coverageExpression COMMA LEFT_BRACE? ( scalarExpression | coverageVariableName ) RIGHT_BRACE?
                    RIGHT_PARENTHESIS

                  | SCALE LEFT_PARENTHESIS
                        coverageExpression COMMA LEFT_BRACE ( scaleDimensionPointList | coverageVariableName ) RIGHT_BRACE
                    RIGHT_PARENTHESIS

                  | SCALE LEFT_PARENTHESIS
                        coverageExpression COMMA LEFT_BRACE ( dimensionIntervalList | coverageVariableName ) RIGHT_BRACE
                    RIGHT_PARENTHESIS


    		          | coverageExpression IS (NOT)? NULL
		
                  // -- enterprise begin

                  // mddExp null values nullClause
                  | coverageExpression nullClause

                  // mddExp null values nullset(mddExp2)
                  | coverageExpression nullSetFrom


                  // mddExp null mask boolMddExp
                  | coverageExpression nullMask

                  // mddExp null mask discard
                  | coverageExpression nullMaskDiscard


                  // -- enterprise end

                  | coverageExpression OVERLAY coverageExpression

                  | flipExpression

                  | sortExpression

                  | polygonizeExpression
;
/**
 * Example:
 *   $c1 AND $c2
 * Query:
 *   for $c1 in cov1
     for $c2 in cov2
     return encode($c1 OR $c2, "csv")

          for c in (irr_cube_2) return encode (
             scale(
                slice(
                  (c[ansi("2008-01-01T00Z":"2008-01-01T12Z")]).b2,
                  ansi:"CRS:1"(0)
                ),
                { N:"CRS:1"(0:1), E:"CRS:1"(0:2) }
              )
          , "csv")

               for c in (irr_cube_2) return encode (
                     slice(
                       c[ansi("2008-01-01T00Z":"2008-01-01T12Z")].b2,
                       ansi:"CRS:1"(0)
                     )
               , "csv")
 */


coverageArithmeticOperator: PLUS | MULTIPLICATION | DIVISION | MINUS;

/**
 * Example:
 *   $c1 + $c2
 * Query:
 *   for $c1 in cov1
     for $c2 in cov2
     return encode($c1 * $c2, "csv")
 */




unaryArithmeticExpressionOperator: MINUS | ABSOLUTE_VALUE | SQUARE_ROOT | REAL_PART | IMAGINARY_PART;

/**
 * Example
 *  -($coverage)
 *  sqrt($coverage)
 * Query:
 *   for $c in cov return encode(sqrt(abs($c)), "csv")
 */
unaryArithmeticExpression:  unaryArithmeticExpressionOperator  LEFT_PARENTHESIS? coverageExpression RIGHT_PARENTHESIS?;

/**
 * Example
 *  sin($coverage)
 * Query:
 *   for $c in cov return encode(sin(cos($c)), "csv")
 */
trigonometricExpression: trigonometricOperator LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;

exponentialExpressionOperator: EXP | LOG | LN;

/**
 * Example
 *  exp($coverage)
 * Query:
 *   for $c in cov return encode(ln(exp($c)), "csv")
 */
exponentialExpression: exponentialExpressionOperator LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;

/**
 *
 * Example
 *   pow($coverage, 3)
 * Query:
 *   for c in (mr) return encode( pow( c[i(100:110),j(100:110)], -0.5 ), "csv" )
*/
unaryPowerExpression: POWER LEFT_PARENTHESIS coverageExpression COMMA ( numericalScalarExpression | coverageVariableName ) RIGHT_PARENTHESIS
;

unaryModExpression: MOD LEFT_PARENTHESIS coverageExpression COMMA ( numericalScalarExpression | coverageVariableName ) RIGHT_PARENTHESIS
;

/**
encode(max(c, c1), "csv") from test_mr as c, test_mr as c1
**/
minBinaryExpression: MIN LEFT_PARENTHESIS coverageExpression COMMA coverageExpression RIGHT_PARENTHESIS
;

maxBinaryExpression: MAX LEFT_PARENTHESIS coverageExpression COMMA coverageExpression RIGHT_PARENTHESIS
;


/**
 * Example
 *  NOT($coverage)
 * Query:
 *   for $c in cov return encode(NOT(BIT($c, 2)), "csv")
 */
unaryBooleanExpression: NOT LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS

                      | BIT LEFT_PARENTHESIS coverageExpression COMMA ( numericalScalarExpression | coverageVariableName ) RIGHT_PARENTHESIS
;


/**
 * We allow any value here so we do not pollute the parser with business logic.
 * The existence of the rangeType should be checked in the code, not here.
 */
rangeType: COVERAGE_VARIABLE_NAME (COVERAGE_VARIABLE_NAME)*;

/**
 * Example
 *  (boolean) $coverage
 * Query:
 *   for $c in cov return encode((char) $c, "csv")
 */
castExpression: LEFT_PARENTHESIS rangeType RIGHT_PARENTHESIS coverageExpression
;


fieldName: COVERAGE_VARIABLE_NAME | INTEGER;

/**
 This is used for only range constructor not in switch case
 * Example
 *  struct {red: $c.blue; blue: $c.red; green: $c.green}
 * Query:
 *   for $c in cov return encode(struct {red: $c.blue; blue: $c.red; green: $c.green}, "csv")

 it is translated to:
      select  { c.red, c.green, c.blue } from COV as c
 */
rangeConstructorExpression: LEFT_BRACE
                                  rangeConstructorElementList
                            RIGHT_BRACE;

rangeConstructorElement: fieldName COLON coverageExpression
;

rangeConstructorElementList: rangeConstructorElement (SEMICOLON rangeConstructorElement)*
;


/**
 This is used in switch case which return range constructor
 e.g: for c in (mr) return encode(switch
      case c > 1000 return """"{red: 107; green:17; blue:68}""""
      default return {red: 150; green:103; blue:14, r1:20, r2:50}, "png")

 it is translated to:
       ((107) * {1c,0c,0c} + (17) * {0c,1c,0c} + (68) * {0c,0c,1c})
*/
rangeConstructorSwitchCaseExpression: LEFT_BRACE
                              (fieldName COLON coverageExpression) (SEMICOLON fieldName COLON coverageExpression)*
                            RIGHT_BRACE;



dimensionPointList: dimensionPointElement (COMMA dimensionPointElement)*
;

dimensionPointElement: axisName (COLON crsName)? LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;


dimensionIntervalList: dimensionIntervalElement (COMMA dimensionIntervalElement)*;


/*
e.g: i(0.5)
used for scaleaxes, scalesize
*/

scaleDimensionPointElement: axisName LEFT_PARENTHESIS scalarExpression
                            RIGHT_PARENTHESIS
;



/*
 Used by WCS scaling extension, e.g: GetCoverage&coverageId=test_mr&scaleaxes=i(0.5),j(0.5)
 then the grid pixels of i and j axes are: number / 0.5
 WCPS: scale(c, [i(0.5), j(0.5)])
*/
scaleDimensionPointList: scaleDimensionPointElement (COMMA scaleDimensionPointElement)*
;


scaleDimensionIntervalList: scaleDimensionIntervalElement (COMMA scaleDimensionIntervalElement)*;

/*
e.g: i(20:30)
which means scale to the grid interval 20:30
used only for scaleextent
*/
scaleDimensionIntervalElement: axisName LEFT_PARENTHESIS
                               scalarExpression COLON scalarExpression
                               RIGHT_PARENTHESIS
;



dimensionBoundConcatenationElement: LEFT_PARENTHESIS? coverageExpression RIGHT_PARENTHESIS? ( DOT LEFT_PARENTHESIS? coverageExpression RIGHT_PARENTHESIS? ) *
;



/*
Use for trimming, slicing of coverage (e.g: Lat:"CRS:1"(0:20))
*/
dimensionIntervalElement: axisName (COLON crsName)? LEFT_PARENTHESIS
                            dimensionBoundConcatenationElement COLON dimensionBoundConcatenationElement
                          RIGHT_PARENTHESIS



                        | axisName (COLON crsName)? LEFT_PARENTHESIS
                           imageCrsDomainByDimensionExpression
                          RIGHT_PARENTHESIS




                        | axisName (COLON crsName)? LEFT_PARENTHESIS dimensionBoundConcatenationElement
                          RIGHT_PARENTHESIS;


// Calendar features

// Time extractors

timeIntervalElement:

                        dimensionBoundConcatenationElement ( COLON dimensionBoundConcatenationElement )?
                        | domainExpression;


timeExtractorElement:  YEARS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | MONTHS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | DAYS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | HOURS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | MINUTES LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | SECONDS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS;

// Time truncators

timeTruncatorElement:  ALL_YEARS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | ALL_MONTHS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | ALL_DAYS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | ALL_HOURS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | ALL_MINUTES LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS
                     | ALL_SECONDS LEFT_PARENTHESIS timeIntervalElement RIGHT_PARENTHESIS;


/* e.g: 20 30, 30 40, 50 60 */
wktPoints: (constant (constant)*) (COMMA constant (constant)*)*
;

/* e.g: (20 30, 30 40, 50 60), (20 30, 30 40, 50 60) */
wktPointElementList: LEFT_PARENTHESIS wktPoints RIGHT_PARENTHESIS (COMMA LEFT_PARENTHESIS wktPoints RIGHT_PARENTHESIS)*
;

/* e.g: Linestring (20 30, 30 40, 50 60) */
wktLineString: LINESTRING wktPointElementList
;

/* e.g: Polygon ( (20 30, 30 40, 50 60) -- exterior, (20 30, 30 40, 50 60) --interior ) */
wktPolygon: POLYGON LEFT_PARENTHESIS wktPointElementList RIGHT_PARENTHESIS
;

/* e.g: Multipolygon ( ((20 30, 30 40, 50 60)) --polygon 1, ((20 30, 30 40, 50 60), (20 30, 30 40, 50 60)) --polygon 2 )   */
wktMultipolygon: MULTIPOLYGON LEFT_PARENTHESIS LEFT_PARENTHESIS wktPointElementList RIGHT_PARENTHESIS (COMMA LEFT_PARENTHESIS wktPointElementList RIGHT_PARENTHESIS)* RIGHT_PARENTHESIS
;

/* Used only for LET clause, e.g. let $wkt := POLYGON((...))), then here clip($c, $wkt) */
wktCoverageExpression: coverageExpression
;

wktExpression: (coverageExpression | wktPolygon | wktLineString | wktMultipolygon)
;


curtainProjectionAxisLabel1: COVERAGE_VARIABLE_NAME;
curtainProjectionAxisLabel2: COVERAGE_VARIABLE_NAME;

/*
  clip( coverageExpression, curtain( project(axis1, axis2), WKT), CRS ) 
*/
clipCurtainExpression: CLIP LEFT_PARENTHESIS coverageExpression
                                             COMMA CURTAIN LEFT_PARENTHESIS
                                                PROJECTION LEFT_PARENTHESIS curtainProjectionAxisLabel1 COMMA curtainProjectionAxisLabel2 RIGHT_PARENTHESIS
                                                COMMA wktExpression 
                                             RIGHT_PARENTHESIS
					                    (COMMA crsName)?
			                RIGHT_PARENTHESIS
;


corridorProjectionAxisLabel1: COVERAGE_VARIABLE_NAME;
corridorProjectionAxisLabel2: COVERAGE_VARIABLE_NAME;


corridorWKTLabel1: wktExpression;
corridorWKTLabel2: wktExpression;

/*
  clip( coverageExpression, corridor( project(axis1, axis2), LineString, WKT, discrete), CRS ) 
*/
clipCorridorExpression: CLIP LEFT_PARENTHESIS coverageExpression
                                              COMMA CORRIDOR LEFT_PARENTHESIS
                                                   PROJECTION LEFT_PARENTHESIS corridorProjectionAxisLabel1 COMMA corridorProjectionAxisLabel2 RIGHT_PARENTHESIS
                                                   COMMA corridorWKTLabel1 
                                                   COMMA corridorWKTLabel2 
                                                   (COMMA DISCRETE)?
                                                RIGHT_PARENTHESIS
					                          (COMMA crsName)?
			                 RIGHT_PARENTHESIS
;

/*
  clip(coverageExpression, WKT) is used to clip a coverage with 1D (linestring), 2D (polygon, multipolygons), 3D+ (curtain queries)
  example:  for c in (test_rgb) return encode(clip(c[i(0:20), j(0:20)], Polygon((0 10, 20 20, 20 10, 0 10)), "png")
  Only support 1 clip operator for each query and it should be applied second last before crsTransform() when parsing a WCPS queries.
  invalid query, e.g: for c in (test_rgb) return encode (clip(clip(c[i(0:20), j(0:20)], Polygon((0 10, 20 20, 20 10, 0 10)), Polygon((0 10, 20 20, 20 10, 0 10)), "png")

  A geo CRS (e.g: http://opengis.net/def/CRS/EPSG/0/4326) can be input parameter for clip operator and the XY coordinates in WKT will be transformed 
  from this CRS to coverage's native CRS for XY axes (e.g: EPSG:3857). The output clipped coverage will keep native CRS EPSG:3857.
*/
clipWKTExpression: CLIP LEFT_PARENTHESIS coverageExpression COMMA wktExpression (COMMA crsName)? RIGHT_PARENTHESIS (WITH_COORDINATES)?
;




/**
 * crsTransform (Use to project a coverage from CRS:A to CRS:B). Require coverage was geo-referenced, not grid.
 * and only project with 2D.
 * Syntax: crsTransform($COVERAGE_EXPRESSION, {AXIS1:"CRS", AXIS2:"CRS"}, {$INTERPOLATION}, $FORMAT_NAME)
 * $INTERPOLATION has syntax $RANGE_NAME($INTERPOLATION_TYPE, "$NODATA_VALUES"))
 *
 * Example:
 *
 * for c in (mean_summer_airtemp) return encode(crsTransform(c,
 * {Lat:"www.opengis.net/def/area/EPSG/0/4326", Long:"www.opengis.net/def/area/EPSG/0/4326"},
 * {near}), "tiff")
 *
 * NOTE: if mean_summer_airtemp has multiple ranges (bands), e.g: b1, b2, b3 then b2 and b3 which are not
 * passed in $INTERPOLATION then will use default interpolation of Rasdaman and "NODATA=..." in encoding.
*/
crsTransformExpression: CRS_TRANSFORM LEFT_PARENTHESIS
                          coverageExpression COMMA dimensionCrsList
                          (COMMA LEFT_BRACE interpolationType? RIGHT_BRACE)?
                          (COMMA LEFT_BRACE dimensionGeoXYResolutionsList RIGHT_BRACE)?
                          (COMMA LEFT_BRACE ( dimensionIntervalList | domainExpression ) RIGHT_BRACE)?

                        RIGHT_PARENTHESIS
;

crsTransformShorthandExpression: CRS_TRANSFORM LEFT_PARENTHESIS
                              coverageExpression COMMA crsName
                          (COMMA LEFT_BRACE interpolationType? RIGHT_BRACE)?
                          (COMMA LEFT_BRACE dimensionGeoXYResolutionsList RIGHT_BRACE)?
                          (COMMA LEFT_BRACE ( dimensionIntervalList | domainExpression ) RIGHT_BRACE)?
                        RIGHT_PARENTHESIS
;



polygonizeExpression: POLYGONIZE LEFT_PARENTHESIS coverageExpression COMMA STRING_LITERAL ( COMMA INTEGER )?
;


/*
 * e.g: { Lat:"http://localhost:8080/def/crs/EPSG/0/4326", Long:"http://localhost:8080/def/crs/EPSG/0/4326"}
*/
dimensionCrsList: LEFT_BRACE dimensionCrsElement (COMMA dimensionCrsElement)* RIGHT_BRACE
;


dimensionGeoXYResolutionsList: dimensionGeoXYResolution (COMMA dimensionGeoXYResolution)*
;


/*
 * e.g: Lat:3/5 or Lat:domain($c, Lat).resolution
*/

dimensionGeoXYResolution:
COVERAGE_VARIABLE_NAME COLON coverageExpression
|     coverageExpression;


/*
 * e.g: Lat:"http://localhost:8080/def/crs/EPSG/0/4326"
*/
dimensionCrsElement: axisName COLON crsName
;


/*
 * GDAL supported interpolation methods (near, bilinear, cubic, average,...)
*/
interpolationType: COVERAGE_VARIABLE_NAME
;


coverageConstructorExpression: COVERAGE COVERAGE_VARIABLE_NAME
                               OVER axisIterator (COMMA axisIterator)*
                               VALUES coverageExpression
;

/**
* $px x (Lat(0:20))
AxisIteratorLabel
* or
* $px x (imageCrsdomain(c[Lat(0:20), Long(0:20)], Lat))
AxisIteratorImageCrsDomainByDimensionLabel
* or
* $px x (imageCrsdomain(c[Long(0), Lat(0:20)))
AxisIteratorImageCrsDomainLabel
*/
axisIterator:   coverageVariableName axisName LEFT_PARENTHESIS  domainIntervals (COLON  regularTimeStep) ? RIGHT_PARENTHESIS (ASC|DESC)?

		          | coverageVariableName axisName LEFT_PARENTHESIS dimensionBoundConcatenationElement COLON dimensionBoundConcatenationElement (COLON regularTimeStep) ? RIGHT_PARENTHESIS (ASC|DESC)?

		          | coverageVariableName axisName LEFT_PARENTHESIS dimensionBoundConcatenationElement (COMMA dimensionBoundConcatenationElement)* RIGHT_PARENTHESIS (ASC|DESC)?
		;

regularTimeStep: STRING_LITERAL;


intervalExpression: scalarExpression COLON scalarExpression
;

coverageConstantExpression: COVERAGE COVERAGE_VARIABLE_NAME
                            OVER axisIterator (COMMA axisIterator)*
                            VALUE LIST LOWER_THAN constant (SEMICOLON constant)* GREATER_THAN
;

axisSpec: dimensionIntervalElement
;

condenseExpression: reduceExpression
                  | generalCondenseExpression;

reduceBooleanExpressionOperator: ALL | SOME;

reduceNumericalExpressionOperator: COUNT | ADD | SUM | AVG | MIN | MAX;

reduceBooleanExpression: reduceBooleanExpressionOperator LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS
;

reduceNumericalExpression: reduceNumericalExpressionOperator LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS;

reduceExpression: reduceBooleanExpression
                | reduceNumericalExpression;

condenseExpressionOperator: PLUS | MULTIPLICATION | MIN | MAX | AND | OR | OVERLAY;


generalCondenseExpression: CONDENSE condenseExpressionOperator
                           OVER axisIterator (COMMA axisIterator)*
                           (whereClause)?
                           USING coverageExpression
;


flipExpression: FLIP coverageExpression ALONG axisName
;

// e.g. SORT $c ALONG ansi BY min($c[Long(30:30)])
sortExpression: SORT coverageExpression ALONG axisName sortingOrder? BY coverageExpression
;


/*
* Switch - Case
1. Return range constructor
* e.g: for c in (mr) return encode(
		switch case c > 1000 return {red: 107; green:17; blue:68}
		default return {red: 150; green:103; blue:14}
       , "png")
2. Return single value
* e.g: for c in (mr) return encode(
		switch case c > 10 and c < 20 return (char)5
		       case c > 30 and c < 50 return (char)12
		       case c > 70 and c < 100 return (char)5
                default return 2, "csv")
*/

switchCaseExpression: SWITCH switchCaseElementList
  		              switchCaseDefaultElement
;


switchCaseElement: CASE booleanSwitchCaseCombinedExpression RETURN coverageExpression;
switchCaseElementList: switchCaseElement (switchCaseElement)*;
switchCaseDefaultElement: DEFAULT RETURN  coverageExpression;


/**
 * Validate in code, no point to validate URIs here
 */
crsName: STRING_LITERAL;

axisName: COVERAGE_VARIABLE_NAME;

number:   (MINUS)? INTEGER
        | (MINUS)? REAL_NUMBER_CONSTANT
        | (MINUS)? SCIENTIFIC_NUMBER_CONSTANT;

constant: STRING_LITERAL
        | TRUE | FALSE
        | (MINUS)? number
        | complexNumberConstant;

sortingOrder: ASC | DESC;

// --enterprise only --
coverageExpressionList: coverageExpression (COMMA coverageExpression)*;

udfName: COVERAGE_VARIABLE_NAME (DOT COVERAGE_VARIABLE_NAME)+;

udfExpression: udfName LEFT_PARENTHESIS (coverageExpressionList)? RIGHT_PARENTHESIS;
// --enterprise only end --

// e.g: test_abc
// e.g: localhost:test_abc
// e.g: fz-juelich.rasdaman.com:test_abc
// e.g: awi.rasdaman.com:7000:test_abc
 
// NOTE: Problem with ANTLR4 grammar ambiguity and rules for lexers and parsers https://stackoverflow.com/q/46267980/2028440 
qualifiedCoverageIdentifier: COVERAGE_NAME;


// -- enterprise begin

nullClause:
   NULL VALUES nullSetMemberList
   | NULL VALUES LEFT_BRACE nullSetMemberList (COMMA nullSetMemberList)+ RIGHT_BRACE;

nullSetFrom:
   NULL VALUES NULLSET LEFT_PARENTHESIS coverageExpression RIGHT_PARENTHESIS;


nullSetMemberList: LEFT_BRACKET nullSetMember (COMMA nullSetMember)* RIGHT_BRACKET;

nullSetMember: 
       nullSetMemberValue (COLON nullSetMemberValue)?;

nullSetMemberValue:
        number 
        | MULTIPLICATION;


nullMask:
    NULL MASK coverageExpression;

nullMaskDiscard:
    NULL MASK DISCARD;

// -- enterprise end


 

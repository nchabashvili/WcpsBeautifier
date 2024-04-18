// Generated from wcps.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import wcpsListener from "./wcpsListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class wcpsParser extends Parser {
	public static readonly LINE_COMMENT = 1;
	public static readonly MULTILINE_COMMENT = 2;
	public static readonly UPPER_BOUND = 3;
	public static readonly LOWER_BOUND = 4;
	public static readonly FOR = 5;
	public static readonly ABSOLUTE_VALUE = 6;
	public static readonly ADD = 7;
	public static readonly ATAN2 = 8;
	public static readonly ARCTAN2 = 9;
	public static readonly ALL = 10;
	public static readonly ALONG = 11;
	public static readonly AND = 12;
	public static readonly ARCSIN = 13;
	public static readonly ARCCOS = 14;
	public static readonly ARCTAN = 15;
	public static readonly ASC = 16;
	public static readonly AVG = 17;
	public static readonly BIT = 18;
	public static readonly BY = 19;
	public static readonly CASE = 20;
	public static readonly CEIL = 21;
	public static readonly CELLCOUNT = 22;
	public static readonly CLIP = 23;
	public static readonly COLON = 24;
	public static readonly COMMA = 25;
	public static readonly CONDENSE = 26;
	public static readonly COS = 27;
	public static readonly COSH = 28;
	public static readonly COUNT = 29;
	public static readonly CURTAIN = 30;
	public static readonly CORRIDOR = 31;
	public static readonly COVERAGE = 32;
	public static readonly COVERAGE_VARIABLE_NAME_PREFIX = 33;
	public static readonly DECODE = 34;
	public static readonly DEFAULT = 35;
	public static readonly DISCRETE = 36;
	public static readonly DESCRIBE_COVERAGE = 37;
	public static readonly DESC = 38;
	public static readonly DIVISION = 39;
	public static readonly DOT = 40;
	public static readonly ENCODE = 41;
	public static readonly EQUAL = 42;
	public static readonly EXP = 43;
	public static readonly EXTEND = 44;
	public static readonly FALSE = 45;
	public static readonly FLIP = 46;
	public static readonly FLOOR = 47;
	public static readonly GREATER_THAN = 48;
	public static readonly GREATER_OR_EQUAL_THAN = 49;
	public static readonly IMAGINARY_PART = 50;
	public static readonly IDENTIFIER = 51;
	public static readonly CRSSET = 52;
	public static readonly IMAGECRSDOMAIN = 53;
	public static readonly IMAGECRS = 54;
	public static readonly IS = 55;
	public static readonly DOMAIN = 56;
	public static readonly IN = 57;
	public static readonly LEFT_BRACE = 58;
	public static readonly LEFT_BRACKET = 59;
	public static readonly LEFT_PARENTHESIS = 60;
	public static readonly LET = 61;
	public static readonly LN = 62;
	public static readonly LIST = 63;
	public static readonly LOG = 64;
	public static readonly LOWER_THAN = 65;
	public static readonly LOWER_OR_EQUAL_THAN = 66;
	public static readonly MASK = 67;
	public static readonly DISCARD = 68;
	public static readonly NULLSET = 69;
	public static readonly MAX = 70;
	public static readonly MIN = 71;
	public static readonly MOD = 72;
	public static readonly MINUS = 73;
	public static readonly MULTIPLICATION = 74;
	public static readonly NOT = 75;
	public static readonly NOT_EQUAL = 76;
	public static readonly NAN_NUMBER_CONSTANT = 77;
	public static readonly NULL = 78;
	public static readonly OR = 79;
	public static readonly OVER = 80;
	public static readonly OVERLAY = 81;
	public static readonly QUOTE = 82;
	public static readonly ESCAPED_QUOTE = 83;
	public static readonly PLUS = 84;
	public static readonly POWER = 85;
	public static readonly POLYGONIZE = 86;
	public static readonly REAL_PART = 87;
	public static readonly ROUND = 88;
	public static readonly RETURN = 89;
	public static readonly RESOLUTION = 90;
	public static readonly RIGHT_BRACE = 91;
	public static readonly RIGHT_BRACKET = 92;
	public static readonly RIGHT_PARENTHESIS = 93;
	public static readonly SCALE = 94;
	public static readonly SCALE_FACTOR = 95;
	public static readonly SCALE_AXES = 96;
	public static readonly SCALE_SIZE = 97;
	public static readonly SCALE_EXTENT = 98;
	public static readonly SEMICOLON = 99;
	public static readonly SIN = 100;
	public static readonly SINH = 101;
	public static readonly SLICE = 102;
	public static readonly SOME = 103;
	public static readonly SORT = 104;
	public static readonly SQUARE_ROOT = 105;
	public static readonly STRUCT = 106;
	public static readonly SUM = 107;
	public static readonly SWITCH = 108;
	public static readonly TAN = 109;
	public static readonly TANH = 110;
	public static readonly TRIM = 111;
	public static readonly TRUE = 112;
	public static readonly USING = 113;
	public static readonly VALUE = 114;
	public static readonly VALUES = 115;
	public static readonly WHERE = 116;
	public static readonly XOR = 117;
	public static readonly CRS_TRANSFORM = 118;
	public static readonly POLYGON = 119;
	public static readonly LINESTRING = 120;
	public static readonly MULTIPOLYGON = 121;
	public static readonly PROJECTION = 122;
	public static readonly WITH_COORDINATES = 123;
	public static readonly VERTICAL_BAR = 124;
	public static readonly YEARS = 125;
	public static readonly MONTHS = 126;
	public static readonly DAYS = 127;
	public static readonly HOURS = 128;
	public static readonly MINUTES = 129;
	public static readonly SECONDS = 130;
	public static readonly ALL_YEARS = 131;
	public static readonly ALL_MONTHS = 132;
	public static readonly ALL_DAYS = 133;
	public static readonly ALL_HOURS = 134;
	public static readonly ALL_MINUTES = 135;
	public static readonly ALL_SECONDS = 136;
	public static readonly INTEGER = 137;
	public static readonly REAL_NUMBER_CONSTANT = 138;
	public static readonly SCIENTIFIC_NUMBER_CONSTANT = 139;
	public static readonly POSITIONAL_PARAMETER = 140;
	public static readonly COVERAGE_VARIABLE_NAME = 141;
	public static readonly COVERAGE_NAME = 142;
	public static readonly STRING_LITERAL = 143;
	public static readonly WS = 144;
	public static readonly EXTRA_PARAMS = 145;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_wcpsQuery = 0;
	public static readonly RULE_forClauseList = 1;
	public static readonly RULE_coverageIdForClause = 2;
	public static readonly RULE_forClause = 3;
	public static readonly RULE_letClauseList = 4;
	public static readonly RULE_letClause = 5;
	public static readonly RULE_letClauseWithDimensionIntervalList = 6;
	public static readonly RULE_letClauseWithCoverageExpression = 7;
	public static readonly RULE_whereClause = 8;
	public static readonly RULE_returnClause = 9;
	public static readonly RULE_domainPropertyValueExtraction = 10;
	public static readonly RULE_domainIntervals = 11;
	public static readonly RULE_geoXYAxisLabelAndDomainResolution = 12;
	public static readonly RULE_coverageVariableName = 13;
	public static readonly RULE_processingExpression = 14;
	public static readonly RULE_scalarValueCoverageExpression = 15;
	public static readonly RULE_scalarExpression = 16;
	public static readonly RULE_booleanScalarExpression = 17;
	public static readonly RULE_booleanUnaryOperator = 18;
	public static readonly RULE_booleanConstant = 19;
	public static readonly RULE_booleanOperator = 20;
	public static readonly RULE_numericalComparissonOperator = 21;
	public static readonly RULE_stringOperator = 22;
	public static readonly RULE_stringScalarExpression = 23;
	public static readonly RULE_starExpression = 24;
	public static readonly RULE_booleanSwitchCaseCoverageExpression = 25;
	public static readonly RULE_booleanSwitchCaseCombinedExpression = 26;
	public static readonly RULE_numericalScalarExpression = 27;
	public static readonly RULE_complexNumberConstant = 28;
	public static readonly RULE_numericalOperator = 29;
	public static readonly RULE_numericalUnaryOperation = 30;
	public static readonly RULE_trigonometricOperator = 31;
	public static readonly RULE_getComponentExpression = 32;
	public static readonly RULE_coverageExpressionNullSetRetrieving = 33;
	public static readonly RULE_coverageIdentifierExpression = 34;
	public static readonly RULE_cellCountExpression = 35;
	public static readonly RULE_coverageCrsSetExpression = 36;
	public static readonly RULE_domainExpression = 37;
	public static readonly RULE_imageCrsDomainByDimensionExpression = 38;
	public static readonly RULE_imageCrsDomainExpression = 39;
	public static readonly RULE_imageCrsExpression = 40;
	public static readonly RULE_describeCoverageExpression = 41;
	public static readonly RULE_positionalParamater = 42;
	public static readonly RULE_extraParams = 43;
	public static readonly RULE_encodedCoverageExpression = 44;
	public static readonly RULE_decodeCoverageExpression = 45;
	public static readonly RULE_coverageExpressionInParenthesis = 46;
	public static readonly RULE_coverageExpression = 47;
	public static readonly RULE_coverageArithmeticOperator = 48;
	public static readonly RULE_unaryArithmeticExpressionOperator = 49;
	public static readonly RULE_unaryArithmeticExpression = 50;
	public static readonly RULE_trigonometricExpression = 51;
	public static readonly RULE_exponentialExpressionOperator = 52;
	public static readonly RULE_exponentialExpression = 53;
	public static readonly RULE_unaryPowerExpression = 54;
	public static readonly RULE_unaryModExpression = 55;
	public static readonly RULE_minBinaryExpression = 56;
	public static readonly RULE_maxBinaryExpression = 57;
	public static readonly RULE_unaryBooleanExpression = 58;
	public static readonly RULE_rangeType = 59;
	public static readonly RULE_castExpression = 60;
	public static readonly RULE_fieldName = 61;
	public static readonly RULE_rangeConstructorExpression = 62;
	public static readonly RULE_rangeConstructorElement = 63;
	public static readonly RULE_rangeConstructorElementList = 64;
	public static readonly RULE_rangeConstructorSwitchCaseExpression = 65;
	public static readonly RULE_dimensionPointList = 66;
	public static readonly RULE_dimensionPointElement = 67;
	public static readonly RULE_dimensionIntervalList = 68;
	public static readonly RULE_scaleDimensionPointElement = 69;
	public static readonly RULE_scaleDimensionPointList = 70;
	public static readonly RULE_scaleDimensionIntervalList = 71;
	public static readonly RULE_scaleDimensionIntervalElement = 72;
	public static readonly RULE_dimensionBoundConcatenationElement = 73;
	public static readonly RULE_dimensionIntervalElement = 74;
	public static readonly RULE_timeIntervalElement = 75;
	public static readonly RULE_timeExtractorElement = 76;
	public static readonly RULE_timeTruncatorElement = 77;
	public static readonly RULE_wktPoints = 78;
	public static readonly RULE_wktPointElementList = 79;
	public static readonly RULE_wktLineString = 80;
	public static readonly RULE_wktPolygon = 81;
	public static readonly RULE_wktMultipolygon = 82;
	public static readonly RULE_wktCoverageExpression = 83;
	public static readonly RULE_wktExpression = 84;
	public static readonly RULE_curtainProjectionAxisLabel1 = 85;
	public static readonly RULE_curtainProjectionAxisLabel2 = 86;
	public static readonly RULE_clipCurtainExpression = 87;
	public static readonly RULE_corridorProjectionAxisLabel1 = 88;
	public static readonly RULE_corridorProjectionAxisLabel2 = 89;
	public static readonly RULE_corridorWKTLabel1 = 90;
	public static readonly RULE_corridorWKTLabel2 = 91;
	public static readonly RULE_clipCorridorExpression = 92;
	public static readonly RULE_clipWKTExpression = 93;
	public static readonly RULE_crsTransformExpression = 94;
	public static readonly RULE_crsTransformShorthandExpression = 95;
	public static readonly RULE_polygonizeExpression = 96;
	public static readonly RULE_dimensionCrsList = 97;
	public static readonly RULE_dimensionGeoXYResolutionsList = 98;
	public static readonly RULE_dimensionGeoXYResolution = 99;
	public static readonly RULE_dimensionCrsElement = 100;
	public static readonly RULE_interpolationType = 101;
	public static readonly RULE_coverageConstructorExpression = 102;
	public static readonly RULE_axisIterator = 103;
	public static readonly RULE_regularTimeStep = 104;
	public static readonly RULE_intervalExpression = 105;
	public static readonly RULE_coverageConstantExpression = 106;
	public static readonly RULE_axisSpec = 107;
	public static readonly RULE_condenseExpression = 108;
	public static readonly RULE_reduceBooleanExpressionOperator = 109;
	public static readonly RULE_reduceNumericalExpressionOperator = 110;
	public static readonly RULE_reduceBooleanExpression = 111;
	public static readonly RULE_reduceNumericalExpression = 112;
	public static readonly RULE_reduceExpression = 113;
	public static readonly RULE_condenseExpressionOperator = 114;
	public static readonly RULE_generalCondenseExpression = 115;
	public static readonly RULE_flipExpression = 116;
	public static readonly RULE_sortExpression = 117;
	public static readonly RULE_switchCaseExpression = 118;
	public static readonly RULE_switchCaseElement = 119;
	public static readonly RULE_switchCaseElementList = 120;
	public static readonly RULE_switchCaseDefaultElement = 121;
	public static readonly RULE_crsName = 122;
	public static readonly RULE_axisName = 123;
	public static readonly RULE_number = 124;
	public static readonly RULE_constant = 125;
	public static readonly RULE_sortingOrder = 126;
	public static readonly RULE_coverageExpressionList = 127;
	public static readonly RULE_udfName = 128;
	public static readonly RULE_udfExpression = 129;
	public static readonly RULE_qualifiedCoverageIdentifier = 130;
	public static readonly RULE_nullClause = 131;
	public static readonly RULE_nullSetFrom = 132;
	public static readonly RULE_nullSetMemberList = 133;
	public static readonly RULE_nullSetMember = 134;
	public static readonly RULE_nullSetMemberValue = 135;
	public static readonly RULE_nullMask = 136;
	public static readonly RULE_nullMaskDiscard = 137;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "':'", "','", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'$'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'/'", 
                                                            "'.'", null, 
                                                            "'='", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'>'", "'>='", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'{'", "'['", 
                                                            "'('", null, 
                                                            null, null, 
                                                            null, "'<'", 
                                                            "'<='", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'-'", 
                                                            "'*'", null, 
                                                            "'!='", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'\"'", "'\\\"'", 
                                                            "'+'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'}'", 
                                                            "']'", "')'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LINE_COMMENT", 
                                                             "MULTILINE_COMMENT", 
                                                             "UPPER_BOUND", 
                                                             "LOWER_BOUND", 
                                                             "FOR", "ABSOLUTE_VALUE", 
                                                             "ADD", "ATAN2", 
                                                             "ARCTAN2", 
                                                             "ALL", "ALONG", 
                                                             "AND", "ARCSIN", 
                                                             "ARCCOS", "ARCTAN", 
                                                             "ASC", "AVG", 
                                                             "BIT", "BY", 
                                                             "CASE", "CEIL", 
                                                             "CELLCOUNT", 
                                                             "CLIP", "COLON", 
                                                             "COMMA", "CONDENSE", 
                                                             "COS", "COSH", 
                                                             "COUNT", "CURTAIN", 
                                                             "CORRIDOR", 
                                                             "COVERAGE", 
                                                             "COVERAGE_VARIABLE_NAME_PREFIX", 
                                                             "DECODE", "DEFAULT", 
                                                             "DISCRETE", 
                                                             "DESCRIBE_COVERAGE", 
                                                             "DESC", "DIVISION", 
                                                             "DOT", "ENCODE", 
                                                             "EQUAL", "EXP", 
                                                             "EXTEND", "FALSE", 
                                                             "FLIP", "FLOOR", 
                                                             "GREATER_THAN", 
                                                             "GREATER_OR_EQUAL_THAN", 
                                                             "IMAGINARY_PART", 
                                                             "IDENTIFIER", 
                                                             "CRSSET", "IMAGECRSDOMAIN", 
                                                             "IMAGECRS", 
                                                             "IS", "DOMAIN", 
                                                             "IN", "LEFT_BRACE", 
                                                             "LEFT_BRACKET", 
                                                             "LEFT_PARENTHESIS", 
                                                             "LET", "LN", 
                                                             "LIST", "LOG", 
                                                             "LOWER_THAN", 
                                                             "LOWER_OR_EQUAL_THAN", 
                                                             "MASK", "DISCARD", 
                                                             "NULLSET", 
                                                             "MAX", "MIN", 
                                                             "MOD", "MINUS", 
                                                             "MULTIPLICATION", 
                                                             "NOT", "NOT_EQUAL", 
                                                             "NAN_NUMBER_CONSTANT", 
                                                             "NULL", "OR", 
                                                             "OVER", "OVERLAY", 
                                                             "QUOTE", "ESCAPED_QUOTE", 
                                                             "PLUS", "POWER", 
                                                             "POLYGONIZE", 
                                                             "REAL_PART", 
                                                             "ROUND", "RETURN", 
                                                             "RESOLUTION", 
                                                             "RIGHT_BRACE", 
                                                             "RIGHT_BRACKET", 
                                                             "RIGHT_PARENTHESIS", 
                                                             "SCALE", "SCALE_FACTOR", 
                                                             "SCALE_AXES", 
                                                             "SCALE_SIZE", 
                                                             "SCALE_EXTENT", 
                                                             "SEMICOLON", 
                                                             "SIN", "SINH", 
                                                             "SLICE", "SOME", 
                                                             "SORT", "SQUARE_ROOT", 
                                                             "STRUCT", "SUM", 
                                                             "SWITCH", "TAN", 
                                                             "TANH", "TRIM", 
                                                             "TRUE", "USING", 
                                                             "VALUE", "VALUES", 
                                                             "WHERE", "XOR", 
                                                             "CRS_TRANSFORM", 
                                                             "POLYGON", 
                                                             "LINESTRING", 
                                                             "MULTIPOLYGON", 
                                                             "PROJECTION", 
                                                             "WITH_COORDINATES", 
                                                             "VERTICAL_BAR", 
                                                             "YEARS", "MONTHS", 
                                                             "DAYS", "HOURS", 
                                                             "MINUTES", 
                                                             "SECONDS", 
                                                             "ALL_YEARS", 
                                                             "ALL_MONTHS", 
                                                             "ALL_DAYS", 
                                                             "ALL_HOURS", 
                                                             "ALL_MINUTES", 
                                                             "ALL_SECONDS", 
                                                             "INTEGER", 
                                                             "REAL_NUMBER_CONSTANT", 
                                                             "SCIENTIFIC_NUMBER_CONSTANT", 
                                                             "POSITIONAL_PARAMETER", 
                                                             "COVERAGE_VARIABLE_NAME", 
                                                             "COVERAGE_NAME", 
                                                             "STRING_LITERAL", 
                                                             "WS", "EXTRA_PARAMS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"wcpsQuery", "forClauseList", "coverageIdForClause", "forClause", "letClauseList", 
		"letClause", "letClauseWithDimensionIntervalList", "letClauseWithCoverageExpression", 
		"whereClause", "returnClause", "domainPropertyValueExtraction", "domainIntervals", 
		"geoXYAxisLabelAndDomainResolution", "coverageVariableName", "processingExpression", 
		"scalarValueCoverageExpression", "scalarExpression", "booleanScalarExpression", 
		"booleanUnaryOperator", "booleanConstant", "booleanOperator", "numericalComparissonOperator", 
		"stringOperator", "stringScalarExpression", "starExpression", "booleanSwitchCaseCoverageExpression", 
		"booleanSwitchCaseCombinedExpression", "numericalScalarExpression", "complexNumberConstant", 
		"numericalOperator", "numericalUnaryOperation", "trigonometricOperator", 
		"getComponentExpression", "coverageExpressionNullSetRetrieving", "coverageIdentifierExpression", 
		"cellCountExpression", "coverageCrsSetExpression", "domainExpression", 
		"imageCrsDomainByDimensionExpression", "imageCrsDomainExpression", "imageCrsExpression", 
		"describeCoverageExpression", "positionalParamater", "extraParams", "encodedCoverageExpression", 
		"decodeCoverageExpression", "coverageExpressionInParenthesis", "coverageExpression", 
		"coverageArithmeticOperator", "unaryArithmeticExpressionOperator", "unaryArithmeticExpression", 
		"trigonometricExpression", "exponentialExpressionOperator", "exponentialExpression", 
		"unaryPowerExpression", "unaryModExpression", "minBinaryExpression", "maxBinaryExpression", 
		"unaryBooleanExpression", "rangeType", "castExpression", "fieldName", 
		"rangeConstructorExpression", "rangeConstructorElement", "rangeConstructorElementList", 
		"rangeConstructorSwitchCaseExpression", "dimensionPointList", "dimensionPointElement", 
		"dimensionIntervalList", "scaleDimensionPointElement", "scaleDimensionPointList", 
		"scaleDimensionIntervalList", "scaleDimensionIntervalElement", "dimensionBoundConcatenationElement", 
		"dimensionIntervalElement", "timeIntervalElement", "timeExtractorElement", 
		"timeTruncatorElement", "wktPoints", "wktPointElementList", "wktLineString", 
		"wktPolygon", "wktMultipolygon", "wktCoverageExpression", "wktExpression", 
		"curtainProjectionAxisLabel1", "curtainProjectionAxisLabel2", "clipCurtainExpression", 
		"corridorProjectionAxisLabel1", "corridorProjectionAxisLabel2", "corridorWKTLabel1", 
		"corridorWKTLabel2", "clipCorridorExpression", "clipWKTExpression", "crsTransformExpression", 
		"crsTransformShorthandExpression", "polygonizeExpression", "dimensionCrsList", 
		"dimensionGeoXYResolutionsList", "dimensionGeoXYResolution", "dimensionCrsElement", 
		"interpolationType", "coverageConstructorExpression", "axisIterator", 
		"regularTimeStep", "intervalExpression", "coverageConstantExpression", 
		"axisSpec", "condenseExpression", "reduceBooleanExpressionOperator", "reduceNumericalExpressionOperator", 
		"reduceBooleanExpression", "reduceNumericalExpression", "reduceExpression", 
		"condenseExpressionOperator", "generalCondenseExpression", "flipExpression", 
		"sortExpression", "switchCaseExpression", "switchCaseElement", "switchCaseElementList", 
		"switchCaseDefaultElement", "crsName", "axisName", "number", "constant", 
		"sortingOrder", "coverageExpressionList", "udfName", "udfExpression", 
		"qualifiedCoverageIdentifier", "nullClause", "nullSetFrom", "nullSetMemberList", 
		"nullSetMember", "nullSetMemberValue", "nullMask", "nullMaskDiscard",
	];
	public get grammarFileName(): string { return "wcps.g4"; }
	public get literalNames(): (string | null)[] { return wcpsParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return wcpsParser.symbolicNames; }
	public get ruleNames(): string[] { return wcpsParser.ruleNames; }
	public get serializedATN(): number[] { return wcpsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, wcpsParser._ATN, wcpsParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public wcpsQuery(): WcpsQueryContext {
		let localctx: WcpsQueryContext = new WcpsQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, wcpsParser.RULE_wcpsQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 276;
			this.forClauseList();
			}
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 277;
				this.letClauseList();
				}
			}

			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===116) {
				{
				this.state = 280;
				this.whereClause();
				}
			}

			{
			this.state = 283;
			this.returnClause();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forClauseList(): ForClauseListContext {
		let localctx: ForClauseListContext = new ForClauseListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, wcpsParser.RULE_forClauseList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 285;
			this.match(wcpsParser.FOR);
			{
			this.state = 286;
			this.forClause();
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 287;
				this.match(wcpsParser.COMMA);
				this.state = 288;
				this.forClause();
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageIdForClause(): CoverageIdForClauseContext {
		let localctx: CoverageIdForClauseContext = new CoverageIdForClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, wcpsParser.RULE_coverageIdForClause);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 141:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 294;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 295;
				this.decodeCoverageExpression();
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 296;
				this.qualifiedCoverageIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forClause(): ForClauseContext {
		let localctx: ForClauseContext = new ForClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, wcpsParser.RULE_forClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this.coverageVariableName();
			this.state = 300;
			this.match(wcpsParser.IN);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 301;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
			}

			this.state = 304;
			this.coverageIdForClause();
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 305;
					this.match(wcpsParser.COMMA);
					this.state = 306;
					this.coverageIdForClause();
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 312;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letClauseList(): LetClauseListContext {
		let localctx: LetClauseListContext = new LetClauseListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, wcpsParser.RULE_letClauseList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.match(wcpsParser.LET);
			{
			this.state = 316;
			this.letClause();
			}
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 317;
				this.match(wcpsParser.COMMA);
				this.state = 318;
				this.letClause();
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letClause(): LetClauseContext {
		let localctx: LetClauseContext = new LetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, wcpsParser.RULE_letClause);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 324;
				this.letClauseWithDimensionIntervalList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.letClauseWithCoverageExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letClauseWithDimensionIntervalList(): LetClauseWithDimensionIntervalListContext {
		let localctx: LetClauseWithDimensionIntervalListContext = new LetClauseWithDimensionIntervalListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, wcpsParser.RULE_letClauseWithDimensionIntervalList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			this.coverageVariableName();
			this.state = 329;
			this.match(wcpsParser.COLON);
			this.state = 330;
			this.match(wcpsParser.EQUAL);
			this.state = 331;
			this.match(wcpsParser.LEFT_BRACKET);
			this.state = 332;
			this.dimensionIntervalList();
			this.state = 333;
			this.match(wcpsParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public letClauseWithCoverageExpression(): LetClauseWithCoverageExpressionContext {
		let localctx: LetClauseWithCoverageExpressionContext = new LetClauseWithCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, wcpsParser.RULE_letClauseWithCoverageExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 335;
			this.coverageVariableName();
			this.state = 336;
			this.match(wcpsParser.COLON);
			this.state = 337;
			this.match(wcpsParser.EQUAL);
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 338;
				this.coverageExpression(0);
				}
				break;
			case 2:
				{
				this.state = 339;
				this.wktExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, wcpsParser.RULE_whereClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this.match(wcpsParser.WHERE);
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 343;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 346;
			this.coverageExpression(0);
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 347;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnClause(): ReturnClauseContext {
		let localctx: ReturnClauseContext = new ReturnClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, wcpsParser.RULE_returnClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.match(wcpsParser.RETURN);
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 351;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 354;
			this.processingExpression();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 355;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domainPropertyValueExtraction(): DomainPropertyValueExtractionContext {
		let localctx: DomainPropertyValueExtractionContext = new DomainPropertyValueExtractionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, wcpsParser.RULE_domainPropertyValueExtraction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===4 || _la===90)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domainIntervals(): DomainIntervalsContext {
		let localctx: DomainIntervalsContext = new DomainIntervalsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, wcpsParser.RULE_domainIntervals);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				this.domainExpression();
				}
				break;
			case 2:
				{
				this.state = 361;
				this.imageCrsDomainExpression();
				}
				break;
			case 3:
				{
				this.state = 362;
				this.imageCrsDomainByDimensionExpression();
				}
				break;
			}
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.match(wcpsParser.DOT);
				this.state = 366;
				this.domainPropertyValueExtraction();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public geoXYAxisLabelAndDomainResolution(): GeoXYAxisLabelAndDomainResolutionContext {
		let localctx: GeoXYAxisLabelAndDomainResolutionContext = new GeoXYAxisLabelAndDomainResolutionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, wcpsParser.RULE_geoXYAxisLabelAndDomainResolution);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.match(wcpsParser.COVERAGE_NAME);
			this.state = 370;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 371;
			this.coverageExpression(0);
			this.state = 372;
			this.match(wcpsParser.COMMA);
			this.state = 373;
			this.axisName();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 374;
				this.match(wcpsParser.COMMA);
				this.state = 375;
				this.crsName();
				}
			}

			this.state = 378;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			{
			this.state = 379;
			this.match(wcpsParser.DOT);
			this.state = 380;
			this.domainPropertyValueExtraction();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageVariableName(): CoverageVariableNameContext {
		let localctx: CoverageVariableNameContext = new CoverageVariableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, wcpsParser.RULE_coverageVariableName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public processingExpression(): ProcessingExpressionContext {
		let localctx: ProcessingExpressionContext = new ProcessingExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, wcpsParser.RULE_processingExpression);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 384;
				this.getComponentExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 385;
				this.scalarExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 386;
				this.encodedCoverageExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 387;
				this.scalarValueCoverageExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 388;
				this.describeCoverageExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scalarValueCoverageExpression(): ScalarValueCoverageExpressionContext {
		let localctx: ScalarValueCoverageExpressionContext = new ScalarValueCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, wcpsParser.RULE_scalarValueCoverageExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 391;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 394;
			this.coverageExpression(0);
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 395;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scalarExpression(): ScalarExpressionContext {
		let localctx: ScalarExpressionContext = new ScalarExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, wcpsParser.RULE_scalarExpression);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 398;
				this.geoXYAxisLabelAndDomainResolution();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 399;
				this.booleanScalarExpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 400;
				this.numericalScalarExpression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 401;
				this.stringScalarExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 402;
				this.starExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 403;
				this.domainIntervals();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 404;
				this.cellCountExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public booleanScalarExpression(): BooleanScalarExpressionContext;
	public booleanScalarExpression(_p: number): BooleanScalarExpressionContext;
	// @RuleVersion(0)
	public booleanScalarExpression(_p?: number): BooleanScalarExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BooleanScalarExpressionContext = new BooleanScalarExpressionContext(this, this._ctx, _parentState);
		let _prevctx: BooleanScalarExpressionContext = localctx;
		let _startState: number = 34;
		this.enterRecursionRule(localctx, 34, wcpsParser.RULE_booleanScalarExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 408;
				this.reduceBooleanExpression();
				}
				break;
			case 2:
				{
				this.state = 409;
				this.booleanConstant();
				}
				break;
			case 3:
				{
				this.state = 410;
				this.booleanUnaryOperator();
				this.state = 412;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 411;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					break;
				}
				this.state = 414;
				this.booleanScalarExpression(0);
				this.state = 416;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 415;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				break;
			case 4:
				{
				this.state = 418;
				this.numericalScalarExpression(0);
				this.state = 419;
				this.numericalComparissonOperator();
				this.state = 420;
				this.numericalScalarExpression(0);
				}
				break;
			case 5:
				{
				this.state = 422;
				this.reduceBooleanExpression();
				}
				break;
			case 6:
				{
				this.state = 423;
				this.stringScalarExpression();
				this.state = 424;
				this.stringOperator();
				this.state = 425;
				this.stringScalarExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 435;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new BooleanScalarExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_booleanScalarExpression);
					this.state = 429;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 430;
					this.booleanOperator();
					this.state = 431;
					this.booleanScalarExpression(5);
					}
					}
				}
				this.state = 437;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanUnaryOperator(): BooleanUnaryOperatorContext {
		let localctx: BooleanUnaryOperatorContext = new BooleanUnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, wcpsParser.RULE_booleanUnaryOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 438;
			this.match(wcpsParser.NOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanConstant(): BooleanConstantContext {
		let localctx: BooleanConstantContext = new BooleanConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, wcpsParser.RULE_booleanConstant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if(!(_la===45 || _la===112)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanOperator(): BooleanOperatorContext {
		let localctx: BooleanOperatorContext = new BooleanOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, wcpsParser.RULE_booleanOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 442;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===79 || _la===117)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		let localctx: NumericalComparissonOperatorContext = new NumericalComparissonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, wcpsParser.RULE_numericalComparissonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			_la = this._input.LA(1);
			if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 25166017) !== 0) || _la===76)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringOperator(): StringOperatorContext {
		let localctx: StringOperatorContext = new StringOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, wcpsParser.RULE_stringOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 446;
			_la = this._input.LA(1);
			if(!(_la===42 || _la===76)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringScalarExpression(): StringScalarExpressionContext {
		let localctx: StringScalarExpressionContext = new StringScalarExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, wcpsParser.RULE_stringScalarExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.match(wcpsParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public starExpression(): StarExpressionContext {
		let localctx: StarExpressionContext = new StarExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, wcpsParser.RULE_starExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 450;
			this.match(wcpsParser.MULTIPLICATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanSwitchCaseCoverageExpression(): BooleanSwitchCaseCoverageExpressionContext {
		let localctx: BooleanSwitchCaseCoverageExpressionContext = new BooleanSwitchCaseCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, wcpsParser.RULE_booleanSwitchCaseCoverageExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 486;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 452;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 457;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 458;
				this.coverageExpression(0);
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===93) {
					{
					{
					this.state = 459;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
					this.state = 464;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 465;
				this.numericalComparissonOperator();
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 466;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 471;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 472;
				this.coverageExpression(0);
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 473;
						this.match(wcpsParser.RIGHT_PARENTHESIS);
						}
						}
					}
					this.state = 478;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 479;
				this.coverageExpression(0);
				this.state = 480;
				this.match(wcpsParser.IS);
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===75) {
					{
					this.state = 481;
					this.match(wcpsParser.NOT);
					}
				}

				this.state = 484;
				this.match(wcpsParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext;
	public booleanSwitchCaseCombinedExpression(_p: number): BooleanSwitchCaseCombinedExpressionContext;
	// @RuleVersion(0)
	public booleanSwitchCaseCombinedExpression(_p?: number): BooleanSwitchCaseCombinedExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BooleanSwitchCaseCombinedExpressionContext = new BooleanSwitchCaseCombinedExpressionContext(this, this._ctx, _parentState);
		let _prevctx: BooleanSwitchCaseCombinedExpressionContext = localctx;
		let _startState: number = 52;
		this.enterRecursionRule(localctx, 52, wcpsParser.RULE_booleanSwitchCaseCombinedExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 494;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 489;
				this.booleanSwitchCaseCoverageExpression();
				this.state = 490;
				this.booleanOperator();
				this.state = 491;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;
			case 2:
				{
				this.state = 493;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 502;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new BooleanSwitchCaseCombinedExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_booleanSwitchCaseCombinedExpression);
					this.state = 496;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 497;
					this.booleanOperator();
					this.state = 498;
					this.booleanSwitchCaseCombinedExpression(2);
					}
					}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public numericalScalarExpression(): NumericalScalarExpressionContext;
	public numericalScalarExpression(_p: number): NumericalScalarExpressionContext;
	// @RuleVersion(0)
	public numericalScalarExpression(_p?: number): NumericalScalarExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: NumericalScalarExpressionContext = new NumericalScalarExpressionContext(this, this._ctx, _parentState);
		let _prevctx: NumericalScalarExpressionContext = localctx;
		let _startState: number = 54;
		this.enterRecursionRule(localctx, 54, wcpsParser.RULE_numericalScalarExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 506;
				this.numericalUnaryOperation();
				this.state = 507;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 508;
				this.numericalScalarExpression(0);
				this.state = 509;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				{
				this.state = 511;
				this.trigonometricOperator();
				this.state = 512;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 513;
				this.numericalScalarExpression(0);
				this.state = 514;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				{
				this.state = 516;
				this.condenseExpression();
				}
				break;
			case 4:
				{
				this.state = 517;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 518;
				this.match(wcpsParser.NAN_NUMBER_CONSTANT);
				}
				break;
			case 6:
				{
				this.state = 519;
				this.complexNumberConstant();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 528;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new NumericalScalarExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_numericalScalarExpression);
					this.state = 522;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 523;
					this.numericalOperator();
					this.state = 524;
					this.numericalScalarExpression(6);
					}
					}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public complexNumberConstant(): ComplexNumberConstantContext {
		let localctx: ComplexNumberConstantContext = new ComplexNumberConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, wcpsParser.RULE_complexNumberConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 532;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 533;
			this.match(wcpsParser.COMMA);
			this.state = 534;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 535;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericalOperator(): NumericalOperatorContext {
		let localctx: NumericalOperatorContext = new NumericalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, wcpsParser.RULE_numericalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 537;
			_la = this._input.LA(1);
			if(!(_la===39 || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 2051) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericalUnaryOperation(): NumericalUnaryOperationContext {
		let localctx: NumericalUnaryOperationContext = new NumericalUnaryOperationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, wcpsParser.RULE_numericalUnaryOperation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 539;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===21 || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 67108873) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 2097177) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trigonometricOperator(): TrigonometricOperatorContext {
		let localctx: TrigonometricOperatorContext = new TrigonometricOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, wcpsParser.RULE_trigonometricOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 541;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402711296) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1539) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getComponentExpression(): GetComponentExpressionContext {
		let localctx: GetComponentExpressionContext = new GetComponentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, wcpsParser.RULE_getComponentExpression);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 543;
				this.coverageIdentifierExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 544;
				this.coverageCrsSetExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 545;
				this.domainExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 546;
				this.imageCrsDomainExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 547;
				this.imageCrsDomainByDimensionExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 548;
				this.imageCrsExpression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 549;
				this.cellCountExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 550;
				this.coverageExpressionNullSetRetrieving();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageExpressionNullSetRetrieving(): CoverageExpressionNullSetRetrievingContext {
		let localctx: CoverageExpressionNullSetRetrievingContext = new CoverageExpressionNullSetRetrievingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, wcpsParser.RULE_coverageExpressionNullSetRetrieving);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 553;
			this.match(wcpsParser.NULLSET);
			this.state = 554;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 555;
			this.coverageExpression(0);
			this.state = 556;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageIdentifierExpression(): CoverageIdentifierExpressionContext {
		let localctx: CoverageIdentifierExpressionContext = new CoverageIdentifierExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, wcpsParser.RULE_coverageIdentifierExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			this.match(wcpsParser.IDENTIFIER);
			this.state = 559;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 560;
			this.coverageExpression(0);
			this.state = 561;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cellCountExpression(): CellCountExpressionContext {
		let localctx: CellCountExpressionContext = new CellCountExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, wcpsParser.RULE_cellCountExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 563;
			this.match(wcpsParser.CELLCOUNT);
			this.state = 564;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 565;
			this.coverageExpression(0);
			this.state = 566;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageCrsSetExpression(): CoverageCrsSetExpressionContext {
		let localctx: CoverageCrsSetExpressionContext = new CoverageCrsSetExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, wcpsParser.RULE_coverageCrsSetExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this.match(wcpsParser.CRSSET);
			this.state = 569;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 570;
			this.coverageExpression(0);
			this.state = 571;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public domainExpression(): DomainExpressionContext {
		let localctx: DomainExpressionContext = new DomainExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, wcpsParser.RULE_domainExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this.match(wcpsParser.DOMAIN);
			this.state = 574;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 575;
			this.coverageExpression(0);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 576;
				this.match(wcpsParser.COMMA);
				this.state = 577;
				this.axisName();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 578;
					this.match(wcpsParser.COMMA);
					this.state = 579;
					this.crsName();
					}
				}

				}
			}

			this.state = 584;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		let localctx: ImageCrsDomainByDimensionExpressionContext = new ImageCrsDomainByDimensionExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, wcpsParser.RULE_imageCrsDomainByDimensionExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 587;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 588;
			this.coverageExpression(0);
			this.state = 589;
			this.match(wcpsParser.COMMA);
			this.state = 590;
			this.axisName();
			this.state = 591;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext {
		let localctx: ImageCrsDomainExpressionContext = new ImageCrsDomainExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, wcpsParser.RULE_imageCrsDomainExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 593;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 594;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 595;
			this.coverageExpression(0);
			this.state = 596;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imageCrsExpression(): ImageCrsExpressionContext {
		let localctx: ImageCrsExpressionContext = new ImageCrsExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, wcpsParser.RULE_imageCrsExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
			this.match(wcpsParser.IMAGECRS);
			this.state = 599;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 600;
			this.coverageExpression(0);
			this.state = 601;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public describeCoverageExpression(): DescribeCoverageExpressionContext {
		let localctx: DescribeCoverageExpressionContext = new DescribeCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, wcpsParser.RULE_describeCoverageExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this.match(wcpsParser.DESCRIBE_COVERAGE);
			this.state = 604;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 605;
			this.coverageExpression(0);
			this.state = 606;
			this.match(wcpsParser.COMMA);
			this.state = 607;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 608;
				this.match(wcpsParser.COMMA);
				this.state = 609;
				this.extraParams();
				}
			}

			this.state = 612;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public positionalParamater(): PositionalParamaterContext {
		let localctx: PositionalParamaterContext = new PositionalParamaterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, wcpsParser.RULE_positionalParamater);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.match(wcpsParser.POSITIONAL_PARAMETER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extraParams(): ExtraParamsContext {
		let localctx: ExtraParamsContext = new ExtraParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, wcpsParser.RULE_extraParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 616;
			_la = this._input.LA(1);
			if(!(_la===143 || _la===145)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public encodedCoverageExpression(): EncodedCoverageExpressionContext {
		let localctx: EncodedCoverageExpressionContext = new EncodedCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, wcpsParser.RULE_encodedCoverageExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(wcpsParser.ENCODE);
			this.state = 619;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 620;
			this.coverageExpression(0);
			this.state = 621;
			this.match(wcpsParser.COMMA);
			this.state = 622;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 623;
				this.match(wcpsParser.COMMA);
				this.state = 624;
				this.extraParams();
				}
			}

			this.state = 627;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		let localctx: DecodeCoverageExpressionContext = new DecodeCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, wcpsParser.RULE_decodeCoverageExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			this.match(wcpsParser.DECODE);
			this.state = 630;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 631;
			this.positionalParamater();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 632;
				this.match(wcpsParser.COMMA);
				this.state = 633;
				this.extraParams();
				}
			}

			this.state = 636;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageExpressionInParenthesis(): CoverageExpressionInParenthesisContext {
		let localctx: CoverageExpressionInParenthesisContext = new CoverageExpressionInParenthesisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, wcpsParser.RULE_coverageExpressionInParenthesis);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 638;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 639;
			this.coverageExpression(0);
			this.state = 640;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public coverageExpression(): CoverageExpressionContext;
	public coverageExpression(_p: number): CoverageExpressionContext;
	// @RuleVersion(0)
	public coverageExpression(_p?: number): CoverageExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: CoverageExpressionContext = new CoverageExpressionContext(this, this._ctx, _parentState);
		let _prevctx: CoverageExpressionContext = localctx;
		let _startState: number = 94;
		this.enterRecursionRule(localctx, 94, wcpsParser.RULE_coverageExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 767;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 643;
				this.udfExpression();
				}
				break;
			case 2:
				{
				this.state = 644;
				this.match(wcpsParser.SLICE);
				this.state = 645;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 646;
				this.coverageExpression(0);
				this.state = 647;
				this.match(wcpsParser.COMMA);
				this.state = 648;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 649;
				this.dimensionPointList();
				this.state = 650;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 651;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				{
				this.state = 653;
				this.match(wcpsParser.TRIM);
				this.state = 654;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 655;
				this.coverageExpression(0);
				this.state = 656;
				this.match(wcpsParser.COMMA);
				this.state = 657;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 658;
				this.dimensionIntervalList();
				this.state = 659;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 660;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 4:
				{
				this.state = 662;
				this.coverageExpressionInParenthesis();
				}
				break;
			case 5:
				{
				this.state = 663;
				this.scalarExpression();
				}
				break;
			case 6:
				{
				this.state = 664;
				this.domainIntervals();
				}
				break;
			case 7:
				{
				this.state = 665;
				this.timeExtractorElement();
				}
				break;
			case 8:
				{
				this.state = 666;
				this.timeTruncatorElement();
				}
				break;
			case 9:
				{
				this.state = 667;
				this.geoXYAxisLabelAndDomainResolution();
				}
				break;
			case 10:
				{
				this.state = 668;
				this.coverageConstructorExpression();
				}
				break;
			case 11:
				{
				this.state = 669;
				this.coverageVariableName();
				}
				break;
			case 12:
				{
				this.state = 670;
				this.coverageConstantExpression();
				}
				break;
			case 13:
				{
				this.state = 671;
				this.decodeCoverageExpression();
				}
				break;
			case 14:
				{
				this.state = 672;
				this.match(wcpsParser.EXTEND);
				this.state = 673;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 674;
				this.coverageExpression(0);
				this.state = 675;
				this.match(wcpsParser.COMMA);
				this.state = 676;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 679;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 677;
					this.dimensionIntervalList();
					}
					break;
				case 2:
					{
					this.state = 678;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 681;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 682;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 15:
				{
				this.state = 684;
				this.match(wcpsParser.EXTEND);
				this.state = 685;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 686;
				this.coverageExpression(0);
				this.state = 687;
				this.match(wcpsParser.COMMA);
				this.state = 688;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 691;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 53:
				case 56:
					{
					this.state = 689;
					this.domainIntervals();
					}
					break;
				case 141:
					{
					this.state = 690;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 693;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 694;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 16:
				{
				this.state = 696;
				this.unaryArithmeticExpression();
				}
				break;
			case 17:
				{
				this.state = 697;
				this.trigonometricExpression();
				}
				break;
			case 18:
				{
				this.state = 698;
				this.exponentialExpression();
				}
				break;
			case 19:
				{
				this.state = 699;
				this.minBinaryExpression();
				}
				break;
			case 20:
				{
				this.state = 700;
				this.maxBinaryExpression();
				}
				break;
			case 21:
				{
				this.state = 701;
				this.unaryPowerExpression();
				}
				break;
			case 22:
				{
				this.state = 702;
				this.unaryModExpression();
				}
				break;
			case 23:
				{
				this.state = 703;
				this.unaryBooleanExpression();
				}
				break;
			case 24:
				{
				this.state = 704;
				this.castExpression();
				}
				break;
			case 25:
				{
				this.state = 705;
				this.rangeConstructorExpression();
				}
				break;
			case 26:
				{
				this.state = 706;
				this.clipWKTExpression();
				}
				break;
			case 27:
				{
				this.state = 707;
				this.clipCurtainExpression();
				}
				break;
			case 28:
				{
				this.state = 708;
				this.clipCorridorExpression();
				}
				break;
			case 29:
				{
				this.state = 709;
				this.crsTransformExpression();
				}
				break;
			case 30:
				{
				this.state = 710;
				this.crsTransformShorthandExpression();
				}
				break;
			case 31:
				{
				this.state = 711;
				this.switchCaseExpression();
				}
				break;
			case 32:
				{
				this.state = 712;
				this.match(wcpsParser.SCALE);
				this.state = 713;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 714;
				this.coverageExpression(0);
				this.state = 715;
				this.match(wcpsParser.COMMA);
				this.state = 716;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 719;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 53:
				case 56:
					{
					this.state = 717;
					this.domainIntervals();
					}
					break;
				case 141:
					{
					this.state = 718;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 721;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 722;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 33:
				{
				this.state = 724;
				this.match(wcpsParser.SCALE);
				this.state = 725;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 726;
				this.coverageExpression(0);
				this.state = 727;
				this.match(wcpsParser.COMMA);
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 728;
					this.match(wcpsParser.LEFT_BRACE);
					}
				}

				this.state = 733;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 13:
				case 14:
				case 15:
				case 17:
				case 21:
				case 22:
				case 26:
				case 27:
				case 28:
				case 29:
				case 45:
				case 47:
				case 50:
				case 53:
				case 56:
				case 60:
				case 70:
				case 71:
				case 73:
				case 74:
				case 75:
				case 77:
				case 84:
				case 87:
				case 88:
				case 100:
				case 101:
				case 103:
				case 105:
				case 107:
				case 109:
				case 110:
				case 112:
				case 137:
				case 138:
				case 139:
				case 142:
				case 143:
					{
					this.state = 731;
					this.scalarExpression();
					}
					break;
				case 141:
					{
					this.state = 732;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 735;
					this.match(wcpsParser.RIGHT_BRACE);
					}
				}

				this.state = 738;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 34:
				{
				this.state = 740;
				this.match(wcpsParser.SCALE);
				this.state = 741;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 742;
				this.coverageExpression(0);
				this.state = 743;
				this.match(wcpsParser.COMMA);
				this.state = 744;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 747;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 745;
					this.scaleDimensionPointList();
					}
					break;
				case 2:
					{
					this.state = 746;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 749;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 750;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 35:
				{
				this.state = 752;
				this.match(wcpsParser.SCALE);
				this.state = 753;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 754;
				this.coverageExpression(0);
				this.state = 755;
				this.match(wcpsParser.COMMA);
				this.state = 756;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 759;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.dimensionIntervalList();
					}
					break;
				case 2:
					{
					this.state = 758;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 761;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 762;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 36:
				{
				this.state = 764;
				this.flipExpression();
				}
				break;
			case 37:
				{
				this.state = 765;
				this.sortExpression();
				}
				break;
			case 38:
				{
				this.state = 766;
				this.polygonizeExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 818;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 816;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 769;
						if (!(this.precpred(this._ctx, 50))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 50)");
						}
						this.state = 770;
						this.booleanOperator();
						this.state = 771;
						this.coverageExpression(51);
						}
						break;
					case 2:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 773;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 774;
						this.numericalComparissonOperator();
						this.state = 775;
						this.coverageExpression(36);
						}
						break;
					case 3:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 777;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 778;
						this.coverageArithmeticOperator();
						this.state = 779;
						this.coverageExpression(35);
						}
						break;
					case 4:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 781;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 782;
						this.match(wcpsParser.OVERLAY);
						this.state = 783;
						this.coverageExpression(5);
						}
						break;
					case 5:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 784;
						if (!(this.precpred(this._ctx, 49))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 49)");
						}
						this.state = 785;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 786;
						this.dimensionPointList();
						this.state = 787;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 6:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 789;
						if (!(this.precpred(this._ctx, 47))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 47)");
						}
						this.state = 790;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 791;
						this.dimensionIntervalList();
						this.state = 792;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 7:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 794;
						if (!(this.precpred(this._ctx, 46))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 46)");
						}
						this.state = 795;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 796;
						this.coverageVariableName();
						this.state = 797;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 8:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 799;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 800;
						this.match(wcpsParser.DOT);
						this.state = 801;
						this.fieldName();
						}
						break;
					case 9:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 802;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 803;
						this.match(wcpsParser.IS);
						this.state = 805;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===75) {
							{
							this.state = 804;
							this.match(wcpsParser.NOT);
							}
						}

						this.state = 807;
						this.match(wcpsParser.NULL);
						}
						break;
					case 10:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 808;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 809;
						this.nullClause();
						}
						break;
					case 11:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 810;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 811;
						this.nullSetFrom();
						}
						break;
					case 12:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 812;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 813;
						this.nullMask();
						}
						break;
					case 13:
						{
						localctx = new CoverageExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 814;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 815;
						this.nullMaskDiscard();
						}
						break;
					}
					}
				}
				this.state = 820;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
		let localctx: CoverageArithmeticOperatorContext = new CoverageArithmeticOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, wcpsParser.RULE_coverageArithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 821;
			_la = this._input.LA(1);
			if(!(_la===39 || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 2051) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
		let localctx: UnaryArithmeticExpressionOperatorContext = new UnaryArithmeticExpressionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, wcpsParser.RULE_unaryArithmeticExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 823;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===50 || _la===73 || _la===87 || _la===105)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
		let localctx: UnaryArithmeticExpressionContext = new UnaryArithmeticExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, wcpsParser.RULE_unaryArithmeticExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 825;
			this.unaryArithmeticExpressionOperator();
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 826;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 829;
			this.coverageExpression(0);
			this.state = 831;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 830;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trigonometricExpression(): TrigonometricExpressionContext {
		let localctx: TrigonometricExpressionContext = new TrigonometricExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, wcpsParser.RULE_trigonometricExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 833;
			this.trigonometricOperator();
			this.state = 834;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 835;
			this.coverageExpression(0);
			this.state = 836;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
		let localctx: ExponentialExpressionOperatorContext = new ExponentialExpressionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, wcpsParser.RULE_exponentialExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 838;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 2621441) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exponentialExpression(): ExponentialExpressionContext {
		let localctx: ExponentialExpressionContext = new ExponentialExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, wcpsParser.RULE_exponentialExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 840;
			this.exponentialExpressionOperator();
			this.state = 841;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 842;
			this.coverageExpression(0);
			this.state = 843;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryPowerExpression(): UnaryPowerExpressionContext {
		let localctx: UnaryPowerExpressionContext = new UnaryPowerExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, wcpsParser.RULE_unaryPowerExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.match(wcpsParser.POWER);
			this.state = 846;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 847;
			this.coverageExpression(0);
			this.state = 848;
			this.match(wcpsParser.COMMA);
			this.state = 851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 13:
			case 14:
			case 15:
			case 17:
			case 21:
			case 26:
			case 27:
			case 28:
			case 29:
			case 47:
			case 50:
			case 60:
			case 70:
			case 71:
			case 73:
			case 77:
			case 84:
			case 87:
			case 88:
			case 100:
			case 101:
			case 103:
			case 105:
			case 107:
			case 109:
			case 110:
			case 137:
			case 138:
			case 139:
				{
				this.state = 849;
				this.numericalScalarExpression(0);
				}
				break;
			case 141:
				{
				this.state = 850;
				this.coverageVariableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 853;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryModExpression(): UnaryModExpressionContext {
		let localctx: UnaryModExpressionContext = new UnaryModExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, wcpsParser.RULE_unaryModExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this.match(wcpsParser.MOD);
			this.state = 856;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 857;
			this.coverageExpression(0);
			this.state = 858;
			this.match(wcpsParser.COMMA);
			this.state = 861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 13:
			case 14:
			case 15:
			case 17:
			case 21:
			case 26:
			case 27:
			case 28:
			case 29:
			case 47:
			case 50:
			case 60:
			case 70:
			case 71:
			case 73:
			case 77:
			case 84:
			case 87:
			case 88:
			case 100:
			case 101:
			case 103:
			case 105:
			case 107:
			case 109:
			case 110:
			case 137:
			case 138:
			case 139:
				{
				this.state = 859;
				this.numericalScalarExpression(0);
				}
				break;
			case 141:
				{
				this.state = 860;
				this.coverageVariableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 863;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public minBinaryExpression(): MinBinaryExpressionContext {
		let localctx: MinBinaryExpressionContext = new MinBinaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, wcpsParser.RULE_minBinaryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 865;
			this.match(wcpsParser.MIN);
			this.state = 866;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 867;
			this.coverageExpression(0);
			this.state = 868;
			this.match(wcpsParser.COMMA);
			this.state = 869;
			this.coverageExpression(0);
			this.state = 870;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public maxBinaryExpression(): MaxBinaryExpressionContext {
		let localctx: MaxBinaryExpressionContext = new MaxBinaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, wcpsParser.RULE_maxBinaryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 872;
			this.match(wcpsParser.MAX);
			this.state = 873;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 874;
			this.coverageExpression(0);
			this.state = 875;
			this.match(wcpsParser.COMMA);
			this.state = 876;
			this.coverageExpression(0);
			this.state = 877;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryBooleanExpression(): UnaryBooleanExpressionContext {
		let localctx: UnaryBooleanExpressionContext = new UnaryBooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, wcpsParser.RULE_unaryBooleanExpression);
		try {
			this.state = 894;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 75:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 879;
				this.match(wcpsParser.NOT);
				this.state = 880;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 881;
				this.coverageExpression(0);
				this.state = 882;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 884;
				this.match(wcpsParser.BIT);
				this.state = 885;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 886;
				this.coverageExpression(0);
				this.state = 887;
				this.match(wcpsParser.COMMA);
				this.state = 890;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 13:
				case 14:
				case 15:
				case 17:
				case 21:
				case 26:
				case 27:
				case 28:
				case 29:
				case 47:
				case 50:
				case 60:
				case 70:
				case 71:
				case 73:
				case 77:
				case 84:
				case 87:
				case 88:
				case 100:
				case 101:
				case 103:
				case 105:
				case 107:
				case 109:
				case 110:
				case 137:
				case 138:
				case 139:
					{
					this.state = 888;
					this.numericalScalarExpression(0);
					}
					break;
				case 141:
					{
					this.state = 889;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 892;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeType(): RangeTypeContext {
		let localctx: RangeTypeContext = new RangeTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, wcpsParser.RULE_rangeType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 896;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===141) {
				{
				{
				this.state = 897;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, wcpsParser.RULE_castExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 903;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 904;
			this.rangeType();
			this.state = 905;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 906;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let localctx: FieldNameContext = new FieldNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, wcpsParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 908;
			_la = this._input.LA(1);
			if(!(_la===137 || _la===141)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorExpression(): RangeConstructorExpressionContext {
		let localctx: RangeConstructorExpressionContext = new RangeConstructorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, wcpsParser.RULE_rangeConstructorExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 910;
			this.match(wcpsParser.LEFT_BRACE);
			this.state = 911;
			this.rangeConstructorElementList();
			this.state = 912;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorElement(): RangeConstructorElementContext {
		let localctx: RangeConstructorElementContext = new RangeConstructorElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, wcpsParser.RULE_rangeConstructorElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 914;
			this.fieldName();
			this.state = 915;
			this.match(wcpsParser.COLON);
			this.state = 916;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorElementList(): RangeConstructorElementListContext {
		let localctx: RangeConstructorElementListContext = new RangeConstructorElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, wcpsParser.RULE_rangeConstructorElementList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 918;
			this.rangeConstructorElement();
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 919;
				this.match(wcpsParser.SEMICOLON);
				this.state = 920;
				this.rangeConstructorElement();
				}
				}
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorSwitchCaseExpression(): RangeConstructorSwitchCaseExpressionContext {
		let localctx: RangeConstructorSwitchCaseExpressionContext = new RangeConstructorSwitchCaseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, wcpsParser.RULE_rangeConstructorSwitchCaseExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 926;
			this.match(wcpsParser.LEFT_BRACE);
			{
			this.state = 927;
			this.fieldName();
			this.state = 928;
			this.match(wcpsParser.COLON);
			this.state = 929;
			this.coverageExpression(0);
			}
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 931;
				this.match(wcpsParser.SEMICOLON);
				this.state = 932;
				this.fieldName();
				this.state = 933;
				this.match(wcpsParser.COLON);
				this.state = 934;
				this.coverageExpression(0);
				}
				}
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 941;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionPointList(): DimensionPointListContext {
		let localctx: DimensionPointListContext = new DimensionPointListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, wcpsParser.RULE_dimensionPointList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 943;
			this.dimensionPointElement();
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 944;
				this.match(wcpsParser.COMMA);
				this.state = 945;
				this.dimensionPointElement();
				}
				}
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionPointElement(): DimensionPointElementContext {
		let localctx: DimensionPointElementContext = new DimensionPointElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, wcpsParser.RULE_dimensionPointElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 951;
			this.axisName();
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 952;
				this.match(wcpsParser.COLON);
				this.state = 953;
				this.crsName();
				}
			}

			this.state = 956;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 957;
			this.coverageExpression(0);
			this.state = 958;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionIntervalList(): DimensionIntervalListContext {
		let localctx: DimensionIntervalListContext = new DimensionIntervalListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, wcpsParser.RULE_dimensionIntervalList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 960;
			this.dimensionIntervalElement();
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 961;
				this.match(wcpsParser.COMMA);
				this.state = 962;
				this.dimensionIntervalElement();
				}
				}
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionPointElement(): ScaleDimensionPointElementContext {
		let localctx: ScaleDimensionPointElementContext = new ScaleDimensionPointElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, wcpsParser.RULE_scaleDimensionPointElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 968;
			this.axisName();
			this.state = 969;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 970;
			this.scalarExpression();
			this.state = 971;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionPointList(): ScaleDimensionPointListContext {
		let localctx: ScaleDimensionPointListContext = new ScaleDimensionPointListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, wcpsParser.RULE_scaleDimensionPointList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.scaleDimensionPointElement();
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 974;
				this.match(wcpsParser.COMMA);
				this.state = 975;
				this.scaleDimensionPointElement();
				}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionIntervalList(): ScaleDimensionIntervalListContext {
		let localctx: ScaleDimensionIntervalListContext = new ScaleDimensionIntervalListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, wcpsParser.RULE_scaleDimensionIntervalList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 981;
			this.scaleDimensionIntervalElement();
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 982;
				this.match(wcpsParser.COMMA);
				this.state = 983;
				this.scaleDimensionIntervalElement();
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionIntervalElement(): ScaleDimensionIntervalElementContext {
		let localctx: ScaleDimensionIntervalElementContext = new ScaleDimensionIntervalElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, wcpsParser.RULE_scaleDimensionIntervalElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 989;
			this.axisName();
			this.state = 990;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 991;
			this.scalarExpression();
			this.state = 992;
			this.match(wcpsParser.COLON);
			this.state = 993;
			this.scalarExpression();
			this.state = 994;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionBoundConcatenationElement(): DimensionBoundConcatenationElementContext {
		let localctx: DimensionBoundConcatenationElementContext = new DimensionBoundConcatenationElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, wcpsParser.RULE_dimensionBoundConcatenationElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 996;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 999;
			this.coverageExpression(0);
			this.state = 1001;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 1000;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this.state = 1013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 1003;
				this.match(wcpsParser.DOT);
				this.state = 1005;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 1004;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					break;
				}
				this.state = 1007;
				this.coverageExpression(0);
				this.state = 1009;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 1008;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				}
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		let localctx: DimensionIntervalElementContext = new DimensionIntervalElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, wcpsParser.RULE_dimensionIntervalElement);
		let _la: number;
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1016;
				this.axisName();
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1017;
					this.match(wcpsParser.COLON);
					this.state = 1018;
					this.crsName();
					}
				}

				this.state = 1021;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1022;
				this.dimensionBoundConcatenationElement();
				this.state = 1023;
				this.match(wcpsParser.COLON);
				this.state = 1024;
				this.dimensionBoundConcatenationElement();
				this.state = 1025;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1027;
				this.axisName();
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1028;
					this.match(wcpsParser.COLON);
					this.state = 1029;
					this.crsName();
					}
				}

				this.state = 1032;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1033;
				this.imageCrsDomainByDimensionExpression();
				this.state = 1034;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1036;
				this.axisName();
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1037;
					this.match(wcpsParser.COLON);
					this.state = 1038;
					this.crsName();
					}
				}

				this.state = 1041;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1042;
				this.dimensionBoundConcatenationElement();
				this.state = 1043;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeIntervalElement(): TimeIntervalElementContext {
		let localctx: TimeIntervalElementContext = new TimeIntervalElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, wcpsParser.RULE_timeIntervalElement);
		let _la: number;
		try {
			this.state = 1053;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1047;
				this.dimensionBoundConcatenationElement();
				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1048;
					this.match(wcpsParser.COLON);
					this.state = 1049;
					this.dimensionBoundConcatenationElement();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1052;
				this.domainExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeExtractorElement(): TimeExtractorElementContext {
		let localctx: TimeExtractorElementContext = new TimeExtractorElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, wcpsParser.RULE_timeExtractorElement);
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 125:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1055;
				this.match(wcpsParser.YEARS);
				this.state = 1056;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1057;
				this.timeIntervalElement();
				this.state = 1058;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 126:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1060;
				this.match(wcpsParser.MONTHS);
				this.state = 1061;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1062;
				this.timeIntervalElement();
				this.state = 1063;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1065;
				this.match(wcpsParser.DAYS);
				this.state = 1066;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1067;
				this.timeIntervalElement();
				this.state = 1068;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 128:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1070;
				this.match(wcpsParser.HOURS);
				this.state = 1071;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1072;
				this.timeIntervalElement();
				this.state = 1073;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 129:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1075;
				this.match(wcpsParser.MINUTES);
				this.state = 1076;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1077;
				this.timeIntervalElement();
				this.state = 1078;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 130:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1080;
				this.match(wcpsParser.SECONDS);
				this.state = 1081;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1082;
				this.timeIntervalElement();
				this.state = 1083;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeTruncatorElement(): TimeTruncatorElementContext {
		let localctx: TimeTruncatorElementContext = new TimeTruncatorElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, wcpsParser.RULE_timeTruncatorElement);
		try {
			this.state = 1117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1087;
				this.match(wcpsParser.ALL_YEARS);
				this.state = 1088;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1089;
				this.timeIntervalElement();
				this.state = 1090;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 132:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1092;
				this.match(wcpsParser.ALL_MONTHS);
				this.state = 1093;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1094;
				this.timeIntervalElement();
				this.state = 1095;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 133:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1097;
				this.match(wcpsParser.ALL_DAYS);
				this.state = 1098;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1099;
				this.timeIntervalElement();
				this.state = 1100;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 134:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1102;
				this.match(wcpsParser.ALL_HOURS);
				this.state = 1103;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1104;
				this.timeIntervalElement();
				this.state = 1105;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 135:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1107;
				this.match(wcpsParser.ALL_MINUTES);
				this.state = 1108;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1109;
				this.timeIntervalElement();
				this.state = 1110;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 136:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1112;
				this.match(wcpsParser.ALL_SECONDS);
				this.state = 1113;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1114;
				this.timeIntervalElement();
				this.state = 1115;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktPoints(): WktPointsContext {
		let localctx: WktPointsContext = new WktPointsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, wcpsParser.RULE_wktPoints);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1119;
			this.constant();
			this.state = 1123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 268468225) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2382364673) !== 0)) {
				{
				{
				this.state = 1120;
				this.constant();
				}
				}
				this.state = 1125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1126;
				this.match(wcpsParser.COMMA);
				this.state = 1127;
				this.constant();
				this.state = 1131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 268468225) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2382364673) !== 0)) {
					{
					{
					this.state = 1128;
					this.constant();
					}
					}
					this.state = 1133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktPointElementList(): WktPointElementListContext {
		let localctx: WktPointElementListContext = new WktPointElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, wcpsParser.RULE_wktPointElementList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1139;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1140;
			this.wktPoints();
			this.state = 1141;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1149;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1142;
					this.match(wcpsParser.COMMA);
					this.state = 1143;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					this.state = 1144;
					this.wktPoints();
					this.state = 1145;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
				}
				this.state = 1151;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktLineString(): WktLineStringContext {
		let localctx: WktLineStringContext = new WktLineStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, wcpsParser.RULE_wktLineString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1152;
			this.match(wcpsParser.LINESTRING);
			this.state = 1153;
			this.wktPointElementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktPolygon(): WktPolygonContext {
		let localctx: WktPolygonContext = new WktPolygonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, wcpsParser.RULE_wktPolygon);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1155;
			this.match(wcpsParser.POLYGON);
			this.state = 1156;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1157;
			this.wktPointElementList();
			this.state = 1158;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktMultipolygon(): WktMultipolygonContext {
		let localctx: WktMultipolygonContext = new WktMultipolygonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, wcpsParser.RULE_wktMultipolygon);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1160;
			this.match(wcpsParser.MULTIPOLYGON);
			this.state = 1161;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1162;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1163;
			this.wktPointElementList();
			this.state = 1164;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1165;
				this.match(wcpsParser.COMMA);
				this.state = 1166;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1167;
				this.wktPointElementList();
				this.state = 1168;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				}
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1175;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktCoverageExpression(): WktCoverageExpressionContext {
		let localctx: WktCoverageExpressionContext = new WktCoverageExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, wcpsParser.RULE_wktCoverageExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1177;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wktExpression(): WktExpressionContext {
		let localctx: WktExpressionContext = new WktExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, wcpsParser.RULE_wktExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 13:
			case 14:
			case 15:
			case 17:
			case 18:
			case 21:
			case 22:
			case 23:
			case 26:
			case 27:
			case 28:
			case 29:
			case 32:
			case 34:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 50:
			case 53:
			case 56:
			case 58:
			case 60:
			case 62:
			case 64:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 77:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 94:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 118:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 141:
			case 142:
			case 143:
				{
				this.state = 1179;
				this.coverageExpression(0);
				}
				break;
			case 119:
				{
				this.state = 1180;
				this.wktPolygon();
				}
				break;
			case 120:
				{
				this.state = 1181;
				this.wktLineString();
				}
				break;
			case 121:
				{
				this.state = 1182;
				this.wktMultipolygon();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public curtainProjectionAxisLabel1(): CurtainProjectionAxisLabel1Context {
		let localctx: CurtainProjectionAxisLabel1Context = new CurtainProjectionAxisLabel1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 170, wcpsParser.RULE_curtainProjectionAxisLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1185;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public curtainProjectionAxisLabel2(): CurtainProjectionAxisLabel2Context {
		let localctx: CurtainProjectionAxisLabel2Context = new CurtainProjectionAxisLabel2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 172, wcpsParser.RULE_curtainProjectionAxisLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1187;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clipCurtainExpression(): ClipCurtainExpressionContext {
		let localctx: ClipCurtainExpressionContext = new ClipCurtainExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, wcpsParser.RULE_clipCurtainExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1189;
			this.match(wcpsParser.CLIP);
			this.state = 1190;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1191;
			this.coverageExpression(0);
			this.state = 1192;
			this.match(wcpsParser.COMMA);
			this.state = 1193;
			this.match(wcpsParser.CURTAIN);
			this.state = 1194;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1195;
			this.match(wcpsParser.PROJECTION);
			this.state = 1196;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1197;
			this.curtainProjectionAxisLabel1();
			this.state = 1198;
			this.match(wcpsParser.COMMA);
			this.state = 1199;
			this.curtainProjectionAxisLabel2();
			this.state = 1200;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1201;
			this.match(wcpsParser.COMMA);
			this.state = 1202;
			this.wktExpression();
			this.state = 1203;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1204;
				this.match(wcpsParser.COMMA);
				this.state = 1205;
				this.crsName();
				}
			}

			this.state = 1208;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public corridorProjectionAxisLabel1(): CorridorProjectionAxisLabel1Context {
		let localctx: CorridorProjectionAxisLabel1Context = new CorridorProjectionAxisLabel1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 176, wcpsParser.RULE_corridorProjectionAxisLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1210;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public corridorProjectionAxisLabel2(): CorridorProjectionAxisLabel2Context {
		let localctx: CorridorProjectionAxisLabel2Context = new CorridorProjectionAxisLabel2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 178, wcpsParser.RULE_corridorProjectionAxisLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1212;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public corridorWKTLabel1(): CorridorWKTLabel1Context {
		let localctx: CorridorWKTLabel1Context = new CorridorWKTLabel1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 180, wcpsParser.RULE_corridorWKTLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1214;
			this.wktExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public corridorWKTLabel2(): CorridorWKTLabel2Context {
		let localctx: CorridorWKTLabel2Context = new CorridorWKTLabel2Context(this, this._ctx, this.state);
		this.enterRule(localctx, 182, wcpsParser.RULE_corridorWKTLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1216;
			this.wktExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clipCorridorExpression(): ClipCorridorExpressionContext {
		let localctx: ClipCorridorExpressionContext = new ClipCorridorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, wcpsParser.RULE_clipCorridorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1218;
			this.match(wcpsParser.CLIP);
			this.state = 1219;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1220;
			this.coverageExpression(0);
			this.state = 1221;
			this.match(wcpsParser.COMMA);
			this.state = 1222;
			this.match(wcpsParser.CORRIDOR);
			this.state = 1223;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1224;
			this.match(wcpsParser.PROJECTION);
			this.state = 1225;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1226;
			this.corridorProjectionAxisLabel1();
			this.state = 1227;
			this.match(wcpsParser.COMMA);
			this.state = 1228;
			this.corridorProjectionAxisLabel2();
			this.state = 1229;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1230;
			this.match(wcpsParser.COMMA);
			this.state = 1231;
			this.corridorWKTLabel1();
			this.state = 1232;
			this.match(wcpsParser.COMMA);
			this.state = 1233;
			this.corridorWKTLabel2();
			this.state = 1236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1234;
				this.match(wcpsParser.COMMA);
				this.state = 1235;
				this.match(wcpsParser.DISCRETE);
				}
			}

			this.state = 1238;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1239;
				this.match(wcpsParser.COMMA);
				this.state = 1240;
				this.crsName();
				}
			}

			this.state = 1243;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clipWKTExpression(): ClipWKTExpressionContext {
		let localctx: ClipWKTExpressionContext = new ClipWKTExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, wcpsParser.RULE_clipWKTExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.match(wcpsParser.CLIP);
			this.state = 1246;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1247;
			this.coverageExpression(0);
			this.state = 1248;
			this.match(wcpsParser.COMMA);
			this.state = 1249;
			this.wktExpression();
			this.state = 1252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1250;
				this.match(wcpsParser.COMMA);
				this.state = 1251;
				this.crsName();
				}
			}

			this.state = 1254;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1256;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 1255;
				this.match(wcpsParser.WITH_COORDINATES);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public crsTransformExpression(): CrsTransformExpressionContext {
		let localctx: CrsTransformExpressionContext = new CrsTransformExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, wcpsParser.RULE_crsTransformExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1258;
			this.match(wcpsParser.CRS_TRANSFORM);
			this.state = 1259;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1260;
			this.coverageExpression(0);
			this.state = 1261;
			this.match(wcpsParser.COMMA);
			this.state = 1262;
			this.dimensionCrsList();
			this.state = 1269;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1263;
				this.match(wcpsParser.COMMA);
				this.state = 1264;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141) {
					{
					this.state = 1265;
					this.interpolationType();
					}
				}

				this.state = 1268;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1276;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1271;
				this.match(wcpsParser.COMMA);
				this.state = 1272;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1273;
				this.dimensionGeoXYResolutionsList();
				this.state = 1274;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1278;
				this.match(wcpsParser.COMMA);
				this.state = 1279;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1282;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 141:
					{
					this.state = 1280;
					this.dimensionIntervalList();
					}
					break;
				case 56:
					{
					this.state = 1281;
					this.domainExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1284;
				this.match(wcpsParser.RIGHT_BRACE);
				}
			}

			this.state = 1288;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public crsTransformShorthandExpression(): CrsTransformShorthandExpressionContext {
		let localctx: CrsTransformShorthandExpressionContext = new CrsTransformShorthandExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, wcpsParser.RULE_crsTransformShorthandExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1290;
			this.match(wcpsParser.CRS_TRANSFORM);
			this.state = 1291;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1292;
			this.coverageExpression(0);
			this.state = 1293;
			this.match(wcpsParser.COMMA);
			this.state = 1294;
			this.crsName();
			this.state = 1301;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1295;
				this.match(wcpsParser.COMMA);
				this.state = 1296;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141) {
					{
					this.state = 1297;
					this.interpolationType();
					}
				}

				this.state = 1300;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1308;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1303;
				this.match(wcpsParser.COMMA);
				this.state = 1304;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1305;
				this.dimensionGeoXYResolutionsList();
				this.state = 1306;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1310;
				this.match(wcpsParser.COMMA);
				this.state = 1311;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1314;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 141:
					{
					this.state = 1312;
					this.dimensionIntervalList();
					}
					break;
				case 56:
					{
					this.state = 1313;
					this.domainExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1316;
				this.match(wcpsParser.RIGHT_BRACE);
				}
			}

			this.state = 1320;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public polygonizeExpression(): PolygonizeExpressionContext {
		let localctx: PolygonizeExpressionContext = new PolygonizeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, wcpsParser.RULE_polygonizeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1322;
			this.match(wcpsParser.POLYGONIZE);
			this.state = 1323;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1324;
			this.coverageExpression(0);
			this.state = 1325;
			this.match(wcpsParser.COMMA);
			this.state = 1326;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 1329;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1327;
				this.match(wcpsParser.COMMA);
				this.state = 1328;
				this.match(wcpsParser.INTEGER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionCrsList(): DimensionCrsListContext {
		let localctx: DimensionCrsListContext = new DimensionCrsListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, wcpsParser.RULE_dimensionCrsList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1331;
			this.match(wcpsParser.LEFT_BRACE);
			this.state = 1332;
			this.dimensionCrsElement();
			this.state = 1337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1333;
				this.match(wcpsParser.COMMA);
				this.state = 1334;
				this.dimensionCrsElement();
				}
				}
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1340;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionGeoXYResolutionsList(): DimensionGeoXYResolutionsListContext {
		let localctx: DimensionGeoXYResolutionsListContext = new DimensionGeoXYResolutionsListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, wcpsParser.RULE_dimensionGeoXYResolutionsList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1342;
			this.dimensionGeoXYResolution();
			this.state = 1347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1343;
				this.match(wcpsParser.COMMA);
				this.state = 1344;
				this.dimensionGeoXYResolution();
				}
				}
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionGeoXYResolution(): DimensionGeoXYResolutionContext {
		let localctx: DimensionGeoXYResolutionContext = new DimensionGeoXYResolutionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, wcpsParser.RULE_dimensionGeoXYResolution);
		try {
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1350;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				this.state = 1351;
				this.match(wcpsParser.COLON);
				this.state = 1352;
				this.coverageExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1353;
				this.coverageExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimensionCrsElement(): DimensionCrsElementContext {
		let localctx: DimensionCrsElementContext = new DimensionCrsElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, wcpsParser.RULE_dimensionCrsElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			this.axisName();
			this.state = 1357;
			this.match(wcpsParser.COLON);
			this.state = 1358;
			this.crsName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interpolationType(): InterpolationTypeContext {
		let localctx: InterpolationTypeContext = new InterpolationTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, wcpsParser.RULE_interpolationType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1360;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageConstructorExpression(): CoverageConstructorExpressionContext {
		let localctx: CoverageConstructorExpressionContext = new CoverageConstructorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, wcpsParser.RULE_coverageConstructorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1362;
			this.match(wcpsParser.COVERAGE);
			this.state = 1363;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1364;
			this.match(wcpsParser.OVER);
			this.state = 1365;
			this.axisIterator();
			this.state = 1370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1366;
				this.match(wcpsParser.COMMA);
				this.state = 1367;
				this.axisIterator();
				}
				}
				this.state = 1372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1373;
			this.match(wcpsParser.VALUES);
			this.state = 1374;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public axisIterator(): AxisIteratorContext {
		let localctx: AxisIteratorContext = new AxisIteratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, wcpsParser.RULE_axisIterator);
		let _la: number;
		try {
			this.state = 1417;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1376;
				this.coverageVariableName();
				this.state = 1377;
				this.axisName();
				this.state = 1378;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1379;
				this.domainIntervals();
				this.state = 1382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1380;
					this.match(wcpsParser.COLON);
					this.state = 1381;
					this.regularTimeStep();
					}
				}

				this.state = 1384;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1385;
					_la = this._input.LA(1);
					if(!(_la===16 || _la===38)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1388;
				this.coverageVariableName();
				this.state = 1389;
				this.axisName();
				this.state = 1390;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1391;
				this.dimensionBoundConcatenationElement();
				this.state = 1392;
				this.match(wcpsParser.COLON);
				this.state = 1393;
				this.dimensionBoundConcatenationElement();
				this.state = 1396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1394;
					this.match(wcpsParser.COLON);
					this.state = 1395;
					this.regularTimeStep();
					}
				}

				this.state = 1398;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1399;
					_la = this._input.LA(1);
					if(!(_la===16 || _la===38)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1402;
				this.coverageVariableName();
				this.state = 1403;
				this.axisName();
				this.state = 1404;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1405;
				this.dimensionBoundConcatenationElement();
				this.state = 1410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===25) {
					{
					{
					this.state = 1406;
					this.match(wcpsParser.COMMA);
					this.state = 1407;
					this.dimensionBoundConcatenationElement();
					}
					}
					this.state = 1412;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1413;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1414;
					_la = this._input.LA(1);
					if(!(_la===16 || _la===38)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regularTimeStep(): RegularTimeStepContext {
		let localctx: RegularTimeStepContext = new RegularTimeStepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, wcpsParser.RULE_regularTimeStep);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1419;
			this.match(wcpsParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intervalExpression(): IntervalExpressionContext {
		let localctx: IntervalExpressionContext = new IntervalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, wcpsParser.RULE_intervalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1421;
			this.scalarExpression();
			this.state = 1422;
			this.match(wcpsParser.COLON);
			this.state = 1423;
			this.scalarExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageConstantExpression(): CoverageConstantExpressionContext {
		let localctx: CoverageConstantExpressionContext = new CoverageConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, wcpsParser.RULE_coverageConstantExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1425;
			this.match(wcpsParser.COVERAGE);
			this.state = 1426;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1427;
			this.match(wcpsParser.OVER);
			this.state = 1428;
			this.axisIterator();
			this.state = 1433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1429;
				this.match(wcpsParser.COMMA);
				this.state = 1430;
				this.axisIterator();
				}
				}
				this.state = 1435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1436;
			this.match(wcpsParser.VALUE);
			this.state = 1437;
			this.match(wcpsParser.LIST);
			this.state = 1438;
			this.match(wcpsParser.LOWER_THAN);
			this.state = 1439;
			this.constant();
			this.state = 1444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 1440;
				this.match(wcpsParser.SEMICOLON);
				this.state = 1441;
				this.constant();
				}
				}
				this.state = 1446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1447;
			this.match(wcpsParser.GREATER_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public axisSpec(): AxisSpecContext {
		let localctx: AxisSpecContext = new AxisSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, wcpsParser.RULE_axisSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1449;
			this.dimensionIntervalElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condenseExpression(): CondenseExpressionContext {
		let localctx: CondenseExpressionContext = new CondenseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, wcpsParser.RULE_condenseExpression);
		try {
			this.state = 1453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 10:
			case 17:
			case 29:
			case 70:
			case 71:
			case 103:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1451;
				this.reduceExpression();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1452;
				this.generalCondenseExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
		let localctx: ReduceBooleanExpressionOperatorContext = new ReduceBooleanExpressionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, wcpsParser.RULE_reduceBooleanExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1455;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===103)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
		let localctx: ReduceNumericalExpressionOperatorContext = new ReduceNumericalExpressionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, wcpsParser.RULE_reduceNumericalExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1457;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 537002112) !== 0) || _la===70 || _la===71 || _la===107)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		let localctx: ReduceBooleanExpressionContext = new ReduceBooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, wcpsParser.RULE_reduceBooleanExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1459;
			this.reduceBooleanExpressionOperator();
			this.state = 1460;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1461;
			this.coverageExpression(0);
			this.state = 1462;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceNumericalExpression(): ReduceNumericalExpressionContext {
		let localctx: ReduceNumericalExpressionContext = new ReduceNumericalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, wcpsParser.RULE_reduceNumericalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1464;
			this.reduceNumericalExpressionOperator();
			this.state = 1465;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1466;
			this.coverageExpression(0);
			this.state = 1467;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceExpression(): ReduceExpressionContext {
		let localctx: ReduceExpressionContext = new ReduceExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, wcpsParser.RULE_reduceExpression);
		try {
			this.state = 1471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1469;
				this.reduceBooleanExpression();
				}
				break;
			case 7:
			case 17:
			case 29:
			case 70:
			case 71:
			case 107:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1470;
				this.reduceNumericalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condenseExpressionOperator(): CondenseExpressionOperatorContext {
		let localctx: CondenseExpressionOperatorContext = new CondenseExpressionOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, wcpsParser.RULE_condenseExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1473;
			_la = this._input.LA(1);
			if(!(_la===12 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 18963) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generalCondenseExpression(): GeneralCondenseExpressionContext {
		let localctx: GeneralCondenseExpressionContext = new GeneralCondenseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, wcpsParser.RULE_generalCondenseExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1475;
			this.match(wcpsParser.CONDENSE);
			this.state = 1476;
			this.condenseExpressionOperator();
			this.state = 1477;
			this.match(wcpsParser.OVER);
			this.state = 1478;
			this.axisIterator();
			this.state = 1483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1479;
				this.match(wcpsParser.COMMA);
				this.state = 1480;
				this.axisIterator();
				}
				}
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===116) {
				{
				this.state = 1486;
				this.whereClause();
				}
			}

			this.state = 1489;
			this.match(wcpsParser.USING);
			this.state = 1490;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public flipExpression(): FlipExpressionContext {
		let localctx: FlipExpressionContext = new FlipExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, wcpsParser.RULE_flipExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1492;
			this.match(wcpsParser.FLIP);
			this.state = 1493;
			this.coverageExpression(0);
			this.state = 1494;
			this.match(wcpsParser.ALONG);
			this.state = 1495;
			this.axisName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortExpression(): SortExpressionContext {
		let localctx: SortExpressionContext = new SortExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, wcpsParser.RULE_sortExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1497;
			this.match(wcpsParser.SORT);
			this.state = 1498;
			this.coverageExpression(0);
			this.state = 1499;
			this.match(wcpsParser.ALONG);
			this.state = 1500;
			this.axisName();
			this.state = 1502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16 || _la===38) {
				{
				this.state = 1501;
				this.sortingOrder();
				}
			}

			this.state = 1504;
			this.match(wcpsParser.BY);
			this.state = 1505;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchCaseExpression(): SwitchCaseExpressionContext {
		let localctx: SwitchCaseExpressionContext = new SwitchCaseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, wcpsParser.RULE_switchCaseExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1507;
			this.match(wcpsParser.SWITCH);
			this.state = 1508;
			this.switchCaseElementList();
			this.state = 1509;
			this.switchCaseDefaultElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchCaseElement(): SwitchCaseElementContext {
		let localctx: SwitchCaseElementContext = new SwitchCaseElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, wcpsParser.RULE_switchCaseElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1511;
			this.match(wcpsParser.CASE);
			this.state = 1512;
			this.booleanSwitchCaseCombinedExpression(0);
			this.state = 1513;
			this.match(wcpsParser.RETURN);
			this.state = 1514;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchCaseElementList(): SwitchCaseElementListContext {
		let localctx: SwitchCaseElementListContext = new SwitchCaseElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, wcpsParser.RULE_switchCaseElementList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1516;
			this.switchCaseElement();
			this.state = 1520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 1517;
				this.switchCaseElement();
				}
				}
				this.state = 1522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchCaseDefaultElement(): SwitchCaseDefaultElementContext {
		let localctx: SwitchCaseDefaultElementContext = new SwitchCaseDefaultElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, wcpsParser.RULE_switchCaseDefaultElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1523;
			this.match(wcpsParser.DEFAULT);
			this.state = 1524;
			this.match(wcpsParser.RETURN);
			this.state = 1525;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public crsName(): CrsNameContext {
		let localctx: CrsNameContext = new CrsNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, wcpsParser.RULE_crsName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1527;
			this.match(wcpsParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public axisName(): AxisNameContext {
		let localctx: AxisNameContext = new AxisNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, wcpsParser.RULE_axisName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1529;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, wcpsParser.RULE_number);
		let _la: number;
		try {
			this.state = 1543;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1531;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1534;
				this.match(wcpsParser.INTEGER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1535;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1538;
				this.match(wcpsParser.REAL_NUMBER_CONSTANT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1539;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1542;
				this.match(wcpsParser.SCIENTIFIC_NUMBER_CONSTANT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, wcpsParser.RULE_constant);
		try {
			this.state = 1553;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 143:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1545;
				this.match(wcpsParser.STRING_LITERAL);
				}
				break;
			case 112:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1546;
				this.match(wcpsParser.TRUE);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1547;
				this.match(wcpsParser.FALSE);
				}
				break;
			case 73:
			case 137:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1549;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1548;
					this.match(wcpsParser.MINUS);
					}
					break;
				}
				this.state = 1551;
				this.number_();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1552;
				this.complexNumberConstant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortingOrder(): SortingOrderContext {
		let localctx: SortingOrderContext = new SortingOrderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, wcpsParser.RULE_sortingOrder);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1555;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===38)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coverageExpressionList(): CoverageExpressionListContext {
		let localctx: CoverageExpressionListContext = new CoverageExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, wcpsParser.RULE_coverageExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1557;
			this.coverageExpression(0);
			this.state = 1562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1558;
				this.match(wcpsParser.COMMA);
				this.state = 1559;
				this.coverageExpression(0);
				}
				}
				this.state = 1564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public udfName(): UdfNameContext {
		let localctx: UdfNameContext = new UdfNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, wcpsParser.RULE_udfName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1565;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1566;
				this.match(wcpsParser.DOT);
				this.state = 1567;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				}
				this.state = 1570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public udfExpression(): UdfExpressionContext {
		let localctx: UdfExpressionContext = new UdfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, wcpsParser.RULE_udfExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1572;
			this.udfName();
			this.state = 1573;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1021765568) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1428486149) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1106259905) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 4261683135) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 3839) !== 0)) {
				{
				this.state = 1574;
				this.coverageExpressionList();
				}
			}

			this.state = 1577;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedCoverageIdentifier(): QualifiedCoverageIdentifierContext {
		let localctx: QualifiedCoverageIdentifierContext = new QualifiedCoverageIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, wcpsParser.RULE_qualifiedCoverageIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1579;
			this.match(wcpsParser.COVERAGE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullClause(): NullClauseContext {
		let localctx: NullClauseContext = new NullClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, wcpsParser.RULE_nullClause);
		let _la: number;
		try {
			this.state = 1596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1581;
				this.match(wcpsParser.NULL);
				this.state = 1582;
				this.match(wcpsParser.VALUES);
				this.state = 1583;
				this.nullSetMemberList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1584;
				this.match(wcpsParser.NULL);
				this.state = 1585;
				this.match(wcpsParser.VALUES);
				this.state = 1586;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1587;
				this.nullSetMemberList();
				this.state = 1590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1588;
					this.match(wcpsParser.COMMA);
					this.state = 1589;
					this.nullSetMemberList();
					}
					}
					this.state = 1592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===25);
				this.state = 1594;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullSetFrom(): NullSetFromContext {
		let localctx: NullSetFromContext = new NullSetFromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, wcpsParser.RULE_nullSetFrom);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1598;
			this.match(wcpsParser.NULL);
			this.state = 1599;
			this.match(wcpsParser.VALUES);
			this.state = 1600;
			this.match(wcpsParser.NULLSET);
			this.state = 1601;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1602;
			this.coverageExpression(0);
			this.state = 1603;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullSetMemberList(): NullSetMemberListContext {
		let localctx: NullSetMemberListContext = new NullSetMemberListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, wcpsParser.RULE_nullSetMemberList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1605;
			this.match(wcpsParser.LEFT_BRACKET);
			this.state = 1606;
			this.nullSetMember();
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1607;
				this.match(wcpsParser.COMMA);
				this.state = 1608;
				this.nullSetMember();
				}
				}
				this.state = 1613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1614;
			this.match(wcpsParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullSetMember(): NullSetMemberContext {
		let localctx: NullSetMemberContext = new NullSetMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, wcpsParser.RULE_nullSetMember);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1616;
			this.nullSetMemberValue();
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 1617;
				this.match(wcpsParser.COLON);
				this.state = 1618;
				this.nullSetMemberValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullSetMemberValue(): NullSetMemberValueContext {
		let localctx: NullSetMemberValueContext = new NullSetMemberValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, wcpsParser.RULE_nullSetMemberValue);
		try {
			this.state = 1623;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
			case 137:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1621;
				this.number_();
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1622;
				this.match(wcpsParser.MULTIPLICATION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullMask(): NullMaskContext {
		let localctx: NullMaskContext = new NullMaskContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, wcpsParser.RULE_nullMask);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1625;
			this.match(wcpsParser.NULL);
			this.state = 1626;
			this.match(wcpsParser.MASK);
			this.state = 1627;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullMaskDiscard(): NullMaskDiscardContext {
		let localctx: NullMaskDiscardContext = new NullMaskDiscardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, wcpsParser.RULE_nullMaskDiscard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1629;
			this.match(wcpsParser.NULL);
			this.state = 1630;
			this.match(wcpsParser.MASK);
			this.state = 1631;
			this.match(wcpsParser.DISCARD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 17:
			return this.booleanScalarExpression_sempred(localctx as BooleanScalarExpressionContext, predIndex);
		case 26:
			return this.booleanSwitchCaseCombinedExpression_sempred(localctx as BooleanSwitchCaseCombinedExpressionContext, predIndex);
		case 27:
			return this.numericalScalarExpression_sempred(localctx as NumericalScalarExpressionContext, predIndex);
		case 47:
			return this.coverageExpression_sempred(localctx as CoverageExpressionContext, predIndex);
		}
		return true;
	}
	private booleanScalarExpression_sempred(localctx: BooleanScalarExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanSwitchCaseCombinedExpression_sempred(localctx: BooleanSwitchCaseCombinedExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private numericalScalarExpression_sempred(localctx: NumericalScalarExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private coverageExpression_sempred(localctx: CoverageExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 50);
		case 4:
			return this.precpred(this._ctx, 35);
		case 5:
			return this.precpred(this._ctx, 34);
		case 6:
			return this.precpred(this._ctx, 4);
		case 7:
			return this.precpred(this._ctx, 49);
		case 8:
			return this.precpred(this._ctx, 47);
		case 9:
			return this.precpred(this._ctx, 46);
		case 10:
			return this.precpred(this._ctx, 38);
		case 11:
			return this.precpred(this._ctx, 9);
		case 12:
			return this.precpred(this._ctx, 8);
		case 13:
			return this.precpred(this._ctx, 7);
		case 14:
			return this.precpred(this._ctx, 6);
		case 15:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,145,1634,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,1,0,1,0,3,0,279,8,
	0,1,0,3,0,282,8,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,290,8,1,10,1,12,1,293,9,1,
	1,2,1,2,1,2,3,2,298,8,2,1,3,1,3,1,3,3,3,303,8,3,1,3,1,3,1,3,5,3,308,8,3,
	10,3,12,3,311,9,3,1,3,3,3,314,8,3,1,4,1,4,1,4,1,4,5,4,320,8,4,10,4,12,4,
	323,9,4,1,5,1,5,3,5,327,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
	1,7,3,7,341,8,7,1,8,1,8,3,8,345,8,8,1,8,1,8,3,8,349,8,8,1,9,1,9,3,9,353,
	8,9,1,9,1,9,3,9,357,8,9,1,10,1,10,1,11,1,11,1,11,3,11,364,8,11,1,11,1,11,
	3,11,368,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,377,8,12,1,12,1,12,
	1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,390,8,14,1,15,3,15,393,
	8,15,1,15,1,15,3,15,397,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,406,
	8,16,1,17,1,17,1,17,1,17,1,17,3,17,413,8,17,1,17,1,17,3,17,417,8,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,428,8,17,1,17,1,17,1,17,1,
	17,5,17,434,8,17,10,17,12,17,437,9,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,
	1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,5,25,454,8,25,10,25,12,25,457,9,
	25,1,25,1,25,5,25,461,8,25,10,25,12,25,464,9,25,1,25,1,25,5,25,468,8,25,
	10,25,12,25,471,9,25,1,25,1,25,5,25,475,8,25,10,25,12,25,478,9,25,1,25,
	1,25,1,25,3,25,483,8,25,1,25,1,25,3,25,487,8,25,1,26,1,26,1,26,1,26,1,26,
	1,26,3,26,495,8,26,1,26,1,26,1,26,1,26,5,26,501,8,26,10,26,12,26,504,9,
	26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,3,27,521,8,27,1,27,1,27,1,27,1,27,5,27,527,8,27,10,27,12,27,530,9,
	27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,3,32,552,8,32,1,33,1,33,1,33,1,33,1,33,1,
	34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,581,8,37,3,37,583,8,37,1,37,1,37,
	1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,
	40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,611,8,41,1,41,1,41,
	1,42,1,42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,626,8,44,1,
	44,1,44,1,45,1,45,1,45,1,45,1,45,3,45,635,8,45,1,45,1,45,1,46,1,46,1,46,
	1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,680,8,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,692,8,47,1,47,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,720,8,47,1,47,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,3,47,730,8,47,1,47,1,47,3,47,734,8,47,1,47,3,47,737,
	8,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,748,8,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,760,8,47,1,47,1,47,1,47,
	1,47,1,47,1,47,3,47,768,8,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,806,
	8,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,5,47,817,8,47,10,47,12,
	47,820,9,47,1,48,1,48,1,49,1,49,1,50,1,50,3,50,828,8,50,1,50,1,50,3,50,
	832,8,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,
	54,1,54,1,54,1,54,1,54,1,54,3,54,852,8,54,1,54,1,54,1,55,1,55,1,55,1,55,
	1,55,1,55,3,55,862,8,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
	57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,
	1,58,1,58,1,58,3,58,891,8,58,1,58,1,58,3,58,895,8,58,1,59,1,59,5,59,899,
	8,59,10,59,12,59,902,9,59,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,62,1,62,
	1,62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,5,64,922,8,64,10,64,12,64,
	925,9,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,5,65,937,8,65,
	10,65,12,65,940,9,65,1,65,1,65,1,66,1,66,1,66,5,66,947,8,66,10,66,12,66,
	950,9,66,1,67,1,67,1,67,3,67,955,8,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,
	5,68,964,8,68,10,68,12,68,967,9,68,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,
	70,5,70,977,8,70,10,70,12,70,980,9,70,1,71,1,71,1,71,5,71,985,8,71,10,71,
	12,71,988,9,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,3,73,998,8,73,1,
	73,1,73,3,73,1002,8,73,1,73,1,73,3,73,1006,8,73,1,73,1,73,3,73,1010,8,73,
	5,73,1012,8,73,10,73,12,73,1015,9,73,1,74,1,74,1,74,3,74,1020,8,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1031,8,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,74,3,74,1040,8,74,1,74,1,74,1,74,1,74,3,74,1046,8,74,1,75,
	1,75,1,75,3,75,1051,8,75,1,75,3,75,1054,8,75,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1086,8,76,1,77,1,
	77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
	1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,
	77,1118,8,77,1,78,1,78,5,78,1122,8,78,10,78,12,78,1125,9,78,1,78,1,78,1,
	78,5,78,1130,8,78,10,78,12,78,1133,9,78,5,78,1135,8,78,10,78,12,78,1138,
	9,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,5,79,1148,8,79,10,79,12,79,
	1151,9,79,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,
	82,1,82,1,82,1,82,1,82,1,82,5,82,1171,8,82,10,82,12,82,1174,9,82,1,82,1,
	82,1,83,1,83,1,84,1,84,1,84,1,84,3,84,1184,8,84,1,85,1,85,1,86,1,86,1,87,
	1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,
	87,1,87,3,87,1207,8,87,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,
	1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
	92,1,92,1,92,1,92,3,92,1237,8,92,1,92,1,92,1,92,3,92,1242,8,92,1,92,1,92,
	1,93,1,93,1,93,1,93,1,93,1,93,1,93,3,93,1253,8,93,1,93,1,93,3,93,1257,8,
	93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,3,94,1267,8,94,1,94,3,94,1270,
	8,94,1,94,1,94,1,94,1,94,1,94,3,94,1277,8,94,1,94,1,94,1,94,1,94,3,94,1283,
	8,94,1,94,1,94,3,94,1287,8,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,
	95,1,95,3,95,1299,8,95,1,95,3,95,1302,8,95,1,95,1,95,1,95,1,95,1,95,3,95,
	1309,8,95,1,95,1,95,1,95,1,95,3,95,1315,8,95,1,95,1,95,3,95,1319,8,95,1,
	95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,3,96,1330,8,96,1,97,1,97,1,97,
	1,97,5,97,1336,8,97,10,97,12,97,1339,9,97,1,97,1,97,1,98,1,98,1,98,5,98,
	1346,8,98,10,98,12,98,1349,9,98,1,99,1,99,1,99,1,99,3,99,1355,8,99,1,100,
	1,100,1,100,1,100,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,5,102,
	1369,8,102,10,102,12,102,1372,9,102,1,102,1,102,1,102,1,103,1,103,1,103,
	1,103,1,103,1,103,3,103,1383,8,103,1,103,1,103,3,103,1387,8,103,1,103,1,
	103,1,103,1,103,1,103,1,103,1,103,1,103,3,103,1397,8,103,1,103,1,103,3,
	103,1401,8,103,1,103,1,103,1,103,1,103,1,103,1,103,5,103,1409,8,103,10,
	103,12,103,1412,9,103,1,103,1,103,3,103,1416,8,103,3,103,1418,8,103,1,104,
	1,104,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,106,5,106,
	1432,8,106,10,106,12,106,1435,9,106,1,106,1,106,1,106,1,106,1,106,1,106,
	5,106,1443,8,106,10,106,12,106,1446,9,106,1,106,1,106,1,107,1,107,1,108,
	1,108,3,108,1454,8,108,1,109,1,109,1,110,1,110,1,111,1,111,1,111,1,111,
	1,111,1,112,1,112,1,112,1,112,1,112,1,113,1,113,3,113,1472,8,113,1,114,
	1,114,1,115,1,115,1,115,1,115,1,115,1,115,5,115,1482,8,115,10,115,12,115,
	1485,9,115,1,115,3,115,1488,8,115,1,115,1,115,1,115,1,116,1,116,1,116,1,
	116,1,116,1,117,1,117,1,117,1,117,1,117,3,117,1503,8,117,1,117,1,117,1,
	117,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,120,1,120,5,
	120,1519,8,120,10,120,12,120,1522,9,120,1,121,1,121,1,121,1,121,1,122,1,
	122,1,123,1,123,1,124,3,124,1533,8,124,1,124,1,124,3,124,1537,8,124,1,124,
	1,124,3,124,1541,8,124,1,124,3,124,1544,8,124,1,125,1,125,1,125,1,125,3,
	125,1550,8,125,1,125,1,125,3,125,1554,8,125,1,126,1,126,1,127,1,127,1,127,
	5,127,1561,8,127,10,127,12,127,1564,9,127,1,128,1,128,1,128,4,128,1569,
	8,128,11,128,12,128,1570,1,129,1,129,1,129,3,129,1576,8,129,1,129,1,129,
	1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,4,131,
	1591,8,131,11,131,12,131,1592,1,131,1,131,3,131,1597,8,131,1,132,1,132,
	1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,5,133,1610,8,133,
	10,133,12,133,1613,9,133,1,133,1,133,1,134,1,134,1,134,3,134,1620,8,134,
	1,135,1,135,3,135,1624,8,135,1,136,1,136,1,136,1,136,1,137,1,137,1,137,
	1,137,1,137,0,4,34,52,54,94,138,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
	78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
	120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,
	156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,
	192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,
	228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,
	264,266,268,270,272,274,0,16,2,0,3,4,90,90,2,0,45,45,112,112,3,0,12,12,
	79,79,117,117,4,0,42,42,48,49,65,66,76,76,2,0,42,42,76,76,3,0,39,39,73,
	74,84,84,8,0,6,6,21,21,47,47,50,50,73,73,84,84,87,88,105,105,5,0,8,9,13,
	15,27,28,100,101,109,110,2,0,143,143,145,145,5,0,6,6,50,50,73,73,87,87,
	105,105,3,0,43,43,62,62,64,64,2,0,137,137,141,141,2,0,16,16,38,38,2,0,10,
	10,103,103,5,0,7,7,17,17,29,29,70,71,107,107,6,0,12,12,70,71,74,74,79,79,
	81,81,84,84,1717,0,276,1,0,0,0,2,285,1,0,0,0,4,297,1,0,0,0,6,299,1,0,0,
	0,8,315,1,0,0,0,10,326,1,0,0,0,12,328,1,0,0,0,14,335,1,0,0,0,16,342,1,0,
	0,0,18,350,1,0,0,0,20,358,1,0,0,0,22,363,1,0,0,0,24,369,1,0,0,0,26,382,
	1,0,0,0,28,389,1,0,0,0,30,392,1,0,0,0,32,405,1,0,0,0,34,427,1,0,0,0,36,
	438,1,0,0,0,38,440,1,0,0,0,40,442,1,0,0,0,42,444,1,0,0,0,44,446,1,0,0,0,
	46,448,1,0,0,0,48,450,1,0,0,0,50,486,1,0,0,0,52,494,1,0,0,0,54,520,1,0,
	0,0,56,531,1,0,0,0,58,537,1,0,0,0,60,539,1,0,0,0,62,541,1,0,0,0,64,551,
	1,0,0,0,66,553,1,0,0,0,68,558,1,0,0,0,70,563,1,0,0,0,72,568,1,0,0,0,74,
	573,1,0,0,0,76,586,1,0,0,0,78,593,1,0,0,0,80,598,1,0,0,0,82,603,1,0,0,0,
	84,614,1,0,0,0,86,616,1,0,0,0,88,618,1,0,0,0,90,629,1,0,0,0,92,638,1,0,
	0,0,94,767,1,0,0,0,96,821,1,0,0,0,98,823,1,0,0,0,100,825,1,0,0,0,102,833,
	1,0,0,0,104,838,1,0,0,0,106,840,1,0,0,0,108,845,1,0,0,0,110,855,1,0,0,0,
	112,865,1,0,0,0,114,872,1,0,0,0,116,894,1,0,0,0,118,896,1,0,0,0,120,903,
	1,0,0,0,122,908,1,0,0,0,124,910,1,0,0,0,126,914,1,0,0,0,128,918,1,0,0,0,
	130,926,1,0,0,0,132,943,1,0,0,0,134,951,1,0,0,0,136,960,1,0,0,0,138,968,
	1,0,0,0,140,973,1,0,0,0,142,981,1,0,0,0,144,989,1,0,0,0,146,997,1,0,0,0,
	148,1045,1,0,0,0,150,1053,1,0,0,0,152,1085,1,0,0,0,154,1117,1,0,0,0,156,
	1119,1,0,0,0,158,1139,1,0,0,0,160,1152,1,0,0,0,162,1155,1,0,0,0,164,1160,
	1,0,0,0,166,1177,1,0,0,0,168,1183,1,0,0,0,170,1185,1,0,0,0,172,1187,1,0,
	0,0,174,1189,1,0,0,0,176,1210,1,0,0,0,178,1212,1,0,0,0,180,1214,1,0,0,0,
	182,1216,1,0,0,0,184,1218,1,0,0,0,186,1245,1,0,0,0,188,1258,1,0,0,0,190,
	1290,1,0,0,0,192,1322,1,0,0,0,194,1331,1,0,0,0,196,1342,1,0,0,0,198,1354,
	1,0,0,0,200,1356,1,0,0,0,202,1360,1,0,0,0,204,1362,1,0,0,0,206,1417,1,0,
	0,0,208,1419,1,0,0,0,210,1421,1,0,0,0,212,1425,1,0,0,0,214,1449,1,0,0,0,
	216,1453,1,0,0,0,218,1455,1,0,0,0,220,1457,1,0,0,0,222,1459,1,0,0,0,224,
	1464,1,0,0,0,226,1471,1,0,0,0,228,1473,1,0,0,0,230,1475,1,0,0,0,232,1492,
	1,0,0,0,234,1497,1,0,0,0,236,1507,1,0,0,0,238,1511,1,0,0,0,240,1516,1,0,
	0,0,242,1523,1,0,0,0,244,1527,1,0,0,0,246,1529,1,0,0,0,248,1543,1,0,0,0,
	250,1553,1,0,0,0,252,1555,1,0,0,0,254,1557,1,0,0,0,256,1565,1,0,0,0,258,
	1572,1,0,0,0,260,1579,1,0,0,0,262,1596,1,0,0,0,264,1598,1,0,0,0,266,1605,
	1,0,0,0,268,1616,1,0,0,0,270,1623,1,0,0,0,272,1625,1,0,0,0,274,1629,1,0,
	0,0,276,278,3,2,1,0,277,279,3,8,4,0,278,277,1,0,0,0,278,279,1,0,0,0,279,
	281,1,0,0,0,280,282,3,16,8,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,
	0,0,0,283,284,3,18,9,0,284,1,1,0,0,0,285,286,5,5,0,0,286,291,3,6,3,0,287,
	288,5,25,0,0,288,290,3,6,3,0,289,287,1,0,0,0,290,293,1,0,0,0,291,289,1,
	0,0,0,291,292,1,0,0,0,292,3,1,0,0,0,293,291,1,0,0,0,294,298,5,141,0,0,295,
	298,3,90,45,0,296,298,3,260,130,0,297,294,1,0,0,0,297,295,1,0,0,0,297,296,
	1,0,0,0,298,5,1,0,0,0,299,300,3,26,13,0,300,302,5,57,0,0,301,303,5,60,0,
	0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,309,3,4,2,0,305,306,
	5,25,0,0,306,308,3,4,2,0,307,305,1,0,0,0,308,311,1,0,0,0,309,307,1,0,0,
	0,309,310,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,312,314,5,93,0,0,313,
	312,1,0,0,0,313,314,1,0,0,0,314,7,1,0,0,0,315,316,5,61,0,0,316,321,3,10,
	5,0,317,318,5,25,0,0,318,320,3,10,5,0,319,317,1,0,0,0,320,323,1,0,0,0,321,
	319,1,0,0,0,321,322,1,0,0,0,322,9,1,0,0,0,323,321,1,0,0,0,324,327,3,12,
	6,0,325,327,3,14,7,0,326,324,1,0,0,0,326,325,1,0,0,0,327,11,1,0,0,0,328,
	329,3,26,13,0,329,330,5,24,0,0,330,331,5,42,0,0,331,332,5,59,0,0,332,333,
	3,136,68,0,333,334,5,92,0,0,334,13,1,0,0,0,335,336,3,26,13,0,336,337,5,
	24,0,0,337,340,5,42,0,0,338,341,3,94,47,0,339,341,3,168,84,0,340,338,1,
	0,0,0,340,339,1,0,0,0,341,15,1,0,0,0,342,344,5,116,0,0,343,345,5,60,0,0,
	344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,348,3,94,47,0,347,349,
	5,93,0,0,348,347,1,0,0,0,348,349,1,0,0,0,349,17,1,0,0,0,350,352,5,89,0,
	0,351,353,5,60,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,
	356,3,28,14,0,355,357,5,93,0,0,356,355,1,0,0,0,356,357,1,0,0,0,357,19,1,
	0,0,0,358,359,7,0,0,0,359,21,1,0,0,0,360,364,3,74,37,0,361,364,3,78,39,
	0,362,364,3,76,38,0,363,360,1,0,0,0,363,361,1,0,0,0,363,362,1,0,0,0,364,
	367,1,0,0,0,365,366,5,40,0,0,366,368,3,20,10,0,367,365,1,0,0,0,367,368,
	1,0,0,0,368,23,1,0,0,0,369,370,5,142,0,0,370,371,5,60,0,0,371,372,3,94,
	47,0,372,373,5,25,0,0,373,376,3,246,123,0,374,375,5,25,0,0,375,377,3,244,
	122,0,376,374,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,379,5,93,0,0,
	379,380,5,40,0,0,380,381,3,20,10,0,381,25,1,0,0,0,382,383,5,141,0,0,383,
	27,1,0,0,0,384,390,3,64,32,0,385,390,3,32,16,0,386,390,3,88,44,0,387,390,
	3,30,15,0,388,390,3,82,41,0,389,384,1,0,0,0,389,385,1,0,0,0,389,386,1,0,
	0,0,389,387,1,0,0,0,389,388,1,0,0,0,390,29,1,0,0,0,391,393,5,60,0,0,392,
	391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,396,3,94,47,0,395,397,5,
	93,0,0,396,395,1,0,0,0,396,397,1,0,0,0,397,31,1,0,0,0,398,406,3,24,12,0,
	399,406,3,34,17,0,400,406,3,54,27,0,401,406,3,46,23,0,402,406,3,48,24,0,
	403,406,3,22,11,0,404,406,3,70,35,0,405,398,1,0,0,0,405,399,1,0,0,0,405,
	400,1,0,0,0,405,401,1,0,0,0,405,402,1,0,0,0,405,403,1,0,0,0,405,404,1,0,
	0,0,406,33,1,0,0,0,407,408,6,17,-1,0,408,428,3,222,111,0,409,428,3,38,19,
	0,410,412,3,36,18,0,411,413,5,60,0,0,412,411,1,0,0,0,412,413,1,0,0,0,413,
	414,1,0,0,0,414,416,3,34,17,0,415,417,5,93,0,0,416,415,1,0,0,0,416,417,
	1,0,0,0,417,428,1,0,0,0,418,419,3,54,27,0,419,420,3,42,21,0,420,421,3,54,
	27,0,421,428,1,0,0,0,422,428,3,222,111,0,423,424,3,46,23,0,424,425,3,44,
	22,0,425,426,3,46,23,0,426,428,1,0,0,0,427,407,1,0,0,0,427,409,1,0,0,0,
	427,410,1,0,0,0,427,418,1,0,0,0,427,422,1,0,0,0,427,423,1,0,0,0,428,435,
	1,0,0,0,429,430,10,4,0,0,430,431,3,40,20,0,431,432,3,34,17,5,432,434,1,
	0,0,0,433,429,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,
	35,1,0,0,0,437,435,1,0,0,0,438,439,5,75,0,0,439,37,1,0,0,0,440,441,7,1,
	0,0,441,39,1,0,0,0,442,443,7,2,0,0,443,41,1,0,0,0,444,445,7,3,0,0,445,43,
	1,0,0,0,446,447,7,4,0,0,447,45,1,0,0,0,448,449,5,143,0,0,449,47,1,0,0,0,
	450,451,5,74,0,0,451,49,1,0,0,0,452,454,5,60,0,0,453,452,1,0,0,0,454,457,
	1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,458,1,0,0,0,457,455,1,0,0,0,
	458,462,3,94,47,0,459,461,5,93,0,0,460,459,1,0,0,0,461,464,1,0,0,0,462,
	460,1,0,0,0,462,463,1,0,0,0,463,465,1,0,0,0,464,462,1,0,0,0,465,469,3,42,
	21,0,466,468,5,60,0,0,467,466,1,0,0,0,468,471,1,0,0,0,469,467,1,0,0,0,469,
	470,1,0,0,0,470,472,1,0,0,0,471,469,1,0,0,0,472,476,3,94,47,0,473,475,5,
	93,0,0,474,473,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,476,477,1,0,0,0,
	477,487,1,0,0,0,478,476,1,0,0,0,479,480,3,94,47,0,480,482,5,55,0,0,481,
	483,5,75,0,0,482,481,1,0,0,0,482,483,1,0,0,0,483,484,1,0,0,0,484,485,5,
	78,0,0,485,487,1,0,0,0,486,455,1,0,0,0,486,479,1,0,0,0,487,51,1,0,0,0,488,
	489,6,26,-1,0,489,490,3,50,25,0,490,491,3,40,20,0,491,492,3,50,25,0,492,
	495,1,0,0,0,493,495,3,50,25,0,494,488,1,0,0,0,494,493,1,0,0,0,495,502,1,
	0,0,0,496,497,10,1,0,0,497,498,3,40,20,0,498,499,3,52,26,2,499,501,1,0,
	0,0,500,496,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,503,1,0,0,0,503,
	53,1,0,0,0,504,502,1,0,0,0,505,506,6,27,-1,0,506,507,3,60,30,0,507,508,
	5,60,0,0,508,509,3,54,27,0,509,510,5,93,0,0,510,521,1,0,0,0,511,512,3,62,
	31,0,512,513,5,60,0,0,513,514,3,54,27,0,514,515,5,93,0,0,515,521,1,0,0,
	0,516,521,3,216,108,0,517,521,3,248,124,0,518,521,5,77,0,0,519,521,3,56,
	28,0,520,505,1,0,0,0,520,511,1,0,0,0,520,516,1,0,0,0,520,517,1,0,0,0,520,
	518,1,0,0,0,520,519,1,0,0,0,521,528,1,0,0,0,522,523,10,5,0,0,523,524,3,
	58,29,0,524,525,3,54,27,6,525,527,1,0,0,0,526,522,1,0,0,0,527,530,1,0,0,
	0,528,526,1,0,0,0,528,529,1,0,0,0,529,55,1,0,0,0,530,528,1,0,0,0,531,532,
	5,60,0,0,532,533,5,138,0,0,533,534,5,25,0,0,534,535,5,138,0,0,535,536,5,
	93,0,0,536,57,1,0,0,0,537,538,7,5,0,0,538,59,1,0,0,0,539,540,7,6,0,0,540,
	61,1,0,0,0,541,542,7,7,0,0,542,63,1,0,0,0,543,552,3,68,34,0,544,552,3,72,
	36,0,545,552,3,74,37,0,546,552,3,78,39,0,547,552,3,76,38,0,548,552,3,80,
	40,0,549,552,3,70,35,0,550,552,3,66,33,0,551,543,1,0,0,0,551,544,1,0,0,
	0,551,545,1,0,0,0,551,546,1,0,0,0,551,547,1,0,0,0,551,548,1,0,0,0,551,549,
	1,0,0,0,551,550,1,0,0,0,552,65,1,0,0,0,553,554,5,69,0,0,554,555,5,60,0,
	0,555,556,3,94,47,0,556,557,5,93,0,0,557,67,1,0,0,0,558,559,5,51,0,0,559,
	560,5,60,0,0,560,561,3,94,47,0,561,562,5,93,0,0,562,69,1,0,0,0,563,564,
	5,22,0,0,564,565,5,60,0,0,565,566,3,94,47,0,566,567,5,93,0,0,567,71,1,0,
	0,0,568,569,5,52,0,0,569,570,5,60,0,0,570,571,3,94,47,0,571,572,5,93,0,
	0,572,73,1,0,0,0,573,574,5,56,0,0,574,575,5,60,0,0,575,582,3,94,47,0,576,
	577,5,25,0,0,577,580,3,246,123,0,578,579,5,25,0,0,579,581,3,244,122,0,580,
	578,1,0,0,0,580,581,1,0,0,0,581,583,1,0,0,0,582,576,1,0,0,0,582,583,1,0,
	0,0,583,584,1,0,0,0,584,585,5,93,0,0,585,75,1,0,0,0,586,587,5,53,0,0,587,
	588,5,60,0,0,588,589,3,94,47,0,589,590,5,25,0,0,590,591,3,246,123,0,591,
	592,5,93,0,0,592,77,1,0,0,0,593,594,5,53,0,0,594,595,5,60,0,0,595,596,3,
	94,47,0,596,597,5,93,0,0,597,79,1,0,0,0,598,599,5,54,0,0,599,600,5,60,0,
	0,600,601,3,94,47,0,601,602,5,93,0,0,602,81,1,0,0,0,603,604,5,37,0,0,604,
	605,5,60,0,0,605,606,3,94,47,0,606,607,5,25,0,0,607,610,5,143,0,0,608,609,
	5,25,0,0,609,611,3,86,43,0,610,608,1,0,0,0,610,611,1,0,0,0,611,612,1,0,
	0,0,612,613,5,93,0,0,613,83,1,0,0,0,614,615,5,140,0,0,615,85,1,0,0,0,616,
	617,7,8,0,0,617,87,1,0,0,0,618,619,5,41,0,0,619,620,5,60,0,0,620,621,3,
	94,47,0,621,622,5,25,0,0,622,625,5,143,0,0,623,624,5,25,0,0,624,626,3,86,
	43,0,625,623,1,0,0,0,625,626,1,0,0,0,626,627,1,0,0,0,627,628,5,93,0,0,628,
	89,1,0,0,0,629,630,5,34,0,0,630,631,5,60,0,0,631,634,3,84,42,0,632,633,
	5,25,0,0,633,635,3,86,43,0,634,632,1,0,0,0,634,635,1,0,0,0,635,636,1,0,
	0,0,636,637,5,93,0,0,637,91,1,0,0,0,638,639,5,60,0,0,639,640,3,94,47,0,
	640,641,5,93,0,0,641,93,1,0,0,0,642,643,6,47,-1,0,643,768,3,258,129,0,644,
	645,5,102,0,0,645,646,5,60,0,0,646,647,3,94,47,0,647,648,5,25,0,0,648,649,
	5,58,0,0,649,650,3,132,66,0,650,651,5,91,0,0,651,652,5,93,0,0,652,768,1,
	0,0,0,653,654,5,111,0,0,654,655,5,60,0,0,655,656,3,94,47,0,656,657,5,25,
	0,0,657,658,5,58,0,0,658,659,3,136,68,0,659,660,5,91,0,0,660,661,5,93,0,
	0,661,768,1,0,0,0,662,768,3,92,46,0,663,768,3,32,16,0,664,768,3,22,11,0,
	665,768,3,152,76,0,666,768,3,154,77,0,667,768,3,24,12,0,668,768,3,204,102,
	0,669,768,3,26,13,0,670,768,3,212,106,0,671,768,3,90,45,0,672,673,5,44,
	0,0,673,674,5,60,0,0,674,675,3,94,47,0,675,676,5,25,0,0,676,679,5,58,0,
	0,677,680,3,136,68,0,678,680,3,26,13,0,679,677,1,0,0,0,679,678,1,0,0,0,
	680,681,1,0,0,0,681,682,5,91,0,0,682,683,5,93,0,0,683,768,1,0,0,0,684,685,
	5,44,0,0,685,686,5,60,0,0,686,687,3,94,47,0,687,688,5,25,0,0,688,691,5,
	58,0,0,689,692,3,22,11,0,690,692,3,26,13,0,691,689,1,0,0,0,691,690,1,0,
	0,0,692,693,1,0,0,0,693,694,5,91,0,0,694,695,5,93,0,0,695,768,1,0,0,0,696,
	768,3,100,50,0,697,768,3,102,51,0,698,768,3,106,53,0,699,768,3,112,56,0,
	700,768,3,114,57,0,701,768,3,108,54,0,702,768,3,110,55,0,703,768,3,116,
	58,0,704,768,3,120,60,0,705,768,3,124,62,0,706,768,3,186,93,0,707,768,3,
	174,87,0,708,768,3,184,92,0,709,768,3,188,94,0,710,768,3,190,95,0,711,768,
	3,236,118,0,712,713,5,94,0,0,713,714,5,60,0,0,714,715,3,94,47,0,715,716,
	5,25,0,0,716,719,5,58,0,0,717,720,3,22,11,0,718,720,3,26,13,0,719,717,1,
	0,0,0,719,718,1,0,0,0,720,721,1,0,0,0,721,722,5,91,0,0,722,723,5,93,0,0,
	723,768,1,0,0,0,724,725,5,94,0,0,725,726,5,60,0,0,726,727,3,94,47,0,727,
	729,5,25,0,0,728,730,5,58,0,0,729,728,1,0,0,0,729,730,1,0,0,0,730,733,1,
	0,0,0,731,734,3,32,16,0,732,734,3,26,13,0,733,731,1,0,0,0,733,732,1,0,0,
	0,734,736,1,0,0,0,735,737,5,91,0,0,736,735,1,0,0,0,736,737,1,0,0,0,737,
	738,1,0,0,0,738,739,5,93,0,0,739,768,1,0,0,0,740,741,5,94,0,0,741,742,5,
	60,0,0,742,743,3,94,47,0,743,744,5,25,0,0,744,747,5,58,0,0,745,748,3,140,
	70,0,746,748,3,26,13,0,747,745,1,0,0,0,747,746,1,0,0,0,748,749,1,0,0,0,
	749,750,5,91,0,0,750,751,5,93,0,0,751,768,1,0,0,0,752,753,5,94,0,0,753,
	754,5,60,0,0,754,755,3,94,47,0,755,756,5,25,0,0,756,759,5,58,0,0,757,760,
	3,136,68,0,758,760,3,26,13,0,759,757,1,0,0,0,759,758,1,0,0,0,760,761,1,
	0,0,0,761,762,5,91,0,0,762,763,5,93,0,0,763,768,1,0,0,0,764,768,3,232,116,
	0,765,768,3,234,117,0,766,768,3,192,96,0,767,642,1,0,0,0,767,644,1,0,0,
	0,767,653,1,0,0,0,767,662,1,0,0,0,767,663,1,0,0,0,767,664,1,0,0,0,767,665,
	1,0,0,0,767,666,1,0,0,0,767,667,1,0,0,0,767,668,1,0,0,0,767,669,1,0,0,0,
	767,670,1,0,0,0,767,671,1,0,0,0,767,672,1,0,0,0,767,684,1,0,0,0,767,696,
	1,0,0,0,767,697,1,0,0,0,767,698,1,0,0,0,767,699,1,0,0,0,767,700,1,0,0,0,
	767,701,1,0,0,0,767,702,1,0,0,0,767,703,1,0,0,0,767,704,1,0,0,0,767,705,
	1,0,0,0,767,706,1,0,0,0,767,707,1,0,0,0,767,708,1,0,0,0,767,709,1,0,0,0,
	767,710,1,0,0,0,767,711,1,0,0,0,767,712,1,0,0,0,767,724,1,0,0,0,767,740,
	1,0,0,0,767,752,1,0,0,0,767,764,1,0,0,0,767,765,1,0,0,0,767,766,1,0,0,0,
	768,818,1,0,0,0,769,770,10,50,0,0,770,771,3,40,20,0,771,772,3,94,47,51,
	772,817,1,0,0,0,773,774,10,35,0,0,774,775,3,42,21,0,775,776,3,94,47,36,
	776,817,1,0,0,0,777,778,10,34,0,0,778,779,3,96,48,0,779,780,3,94,47,35,
	780,817,1,0,0,0,781,782,10,4,0,0,782,783,5,81,0,0,783,817,3,94,47,5,784,
	785,10,49,0,0,785,786,5,59,0,0,786,787,3,132,66,0,787,788,5,92,0,0,788,
	817,1,0,0,0,789,790,10,47,0,0,790,791,5,59,0,0,791,792,3,136,68,0,792,793,
	5,92,0,0,793,817,1,0,0,0,794,795,10,46,0,0,795,796,5,59,0,0,796,797,3,26,
	13,0,797,798,5,92,0,0,798,817,1,0,0,0,799,800,10,38,0,0,800,801,5,40,0,
	0,801,817,3,122,61,0,802,803,10,9,0,0,803,805,5,55,0,0,804,806,5,75,0,0,
	805,804,1,0,0,0,805,806,1,0,0,0,806,807,1,0,0,0,807,817,5,78,0,0,808,809,
	10,8,0,0,809,817,3,262,131,0,810,811,10,7,0,0,811,817,3,264,132,0,812,813,
	10,6,0,0,813,817,3,272,136,0,814,815,10,5,0,0,815,817,3,274,137,0,816,769,
	1,0,0,0,816,773,1,0,0,0,816,777,1,0,0,0,816,781,1,0,0,0,816,784,1,0,0,0,
	816,789,1,0,0,0,816,794,1,0,0,0,816,799,1,0,0,0,816,802,1,0,0,0,816,808,
	1,0,0,0,816,810,1,0,0,0,816,812,1,0,0,0,816,814,1,0,0,0,817,820,1,0,0,0,
	818,816,1,0,0,0,818,819,1,0,0,0,819,95,1,0,0,0,820,818,1,0,0,0,821,822,
	7,5,0,0,822,97,1,0,0,0,823,824,7,9,0,0,824,99,1,0,0,0,825,827,3,98,49,0,
	826,828,5,60,0,0,827,826,1,0,0,0,827,828,1,0,0,0,828,829,1,0,0,0,829,831,
	3,94,47,0,830,832,5,93,0,0,831,830,1,0,0,0,831,832,1,0,0,0,832,101,1,0,
	0,0,833,834,3,62,31,0,834,835,5,60,0,0,835,836,3,94,47,0,836,837,5,93,0,
	0,837,103,1,0,0,0,838,839,7,10,0,0,839,105,1,0,0,0,840,841,3,104,52,0,841,
	842,5,60,0,0,842,843,3,94,47,0,843,844,5,93,0,0,844,107,1,0,0,0,845,846,
	5,85,0,0,846,847,5,60,0,0,847,848,3,94,47,0,848,851,5,25,0,0,849,852,3,
	54,27,0,850,852,3,26,13,0,851,849,1,0,0,0,851,850,1,0,0,0,852,853,1,0,0,
	0,853,854,5,93,0,0,854,109,1,0,0,0,855,856,5,72,0,0,856,857,5,60,0,0,857,
	858,3,94,47,0,858,861,5,25,0,0,859,862,3,54,27,0,860,862,3,26,13,0,861,
	859,1,0,0,0,861,860,1,0,0,0,862,863,1,0,0,0,863,864,5,93,0,0,864,111,1,
	0,0,0,865,866,5,71,0,0,866,867,5,60,0,0,867,868,3,94,47,0,868,869,5,25,
	0,0,869,870,3,94,47,0,870,871,5,93,0,0,871,113,1,0,0,0,872,873,5,70,0,0,
	873,874,5,60,0,0,874,875,3,94,47,0,875,876,5,25,0,0,876,877,3,94,47,0,877,
	878,5,93,0,0,878,115,1,0,0,0,879,880,5,75,0,0,880,881,5,60,0,0,881,882,
	3,94,47,0,882,883,5,93,0,0,883,895,1,0,0,0,884,885,5,18,0,0,885,886,5,60,
	0,0,886,887,3,94,47,0,887,890,5,25,0,0,888,891,3,54,27,0,889,891,3,26,13,
	0,890,888,1,0,0,0,890,889,1,0,0,0,891,892,1,0,0,0,892,893,5,93,0,0,893,
	895,1,0,0,0,894,879,1,0,0,0,894,884,1,0,0,0,895,117,1,0,0,0,896,900,5,141,
	0,0,897,899,5,141,0,0,898,897,1,0,0,0,899,902,1,0,0,0,900,898,1,0,0,0,900,
	901,1,0,0,0,901,119,1,0,0,0,902,900,1,0,0,0,903,904,5,60,0,0,904,905,3,
	118,59,0,905,906,5,93,0,0,906,907,3,94,47,0,907,121,1,0,0,0,908,909,7,11,
	0,0,909,123,1,0,0,0,910,911,5,58,0,0,911,912,3,128,64,0,912,913,5,91,0,
	0,913,125,1,0,0,0,914,915,3,122,61,0,915,916,5,24,0,0,916,917,3,94,47,0,
	917,127,1,0,0,0,918,923,3,126,63,0,919,920,5,99,0,0,920,922,3,126,63,0,
	921,919,1,0,0,0,922,925,1,0,0,0,923,921,1,0,0,0,923,924,1,0,0,0,924,129,
	1,0,0,0,925,923,1,0,0,0,926,927,5,58,0,0,927,928,3,122,61,0,928,929,5,24,
	0,0,929,930,3,94,47,0,930,938,1,0,0,0,931,932,5,99,0,0,932,933,3,122,61,
	0,933,934,5,24,0,0,934,935,3,94,47,0,935,937,1,0,0,0,936,931,1,0,0,0,937,
	940,1,0,0,0,938,936,1,0,0,0,938,939,1,0,0,0,939,941,1,0,0,0,940,938,1,0,
	0,0,941,942,5,91,0,0,942,131,1,0,0,0,943,948,3,134,67,0,944,945,5,25,0,
	0,945,947,3,134,67,0,946,944,1,0,0,0,947,950,1,0,0,0,948,946,1,0,0,0,948,
	949,1,0,0,0,949,133,1,0,0,0,950,948,1,0,0,0,951,954,3,246,123,0,952,953,
	5,24,0,0,953,955,3,244,122,0,954,952,1,0,0,0,954,955,1,0,0,0,955,956,1,
	0,0,0,956,957,5,60,0,0,957,958,3,94,47,0,958,959,5,93,0,0,959,135,1,0,0,
	0,960,965,3,148,74,0,961,962,5,25,0,0,962,964,3,148,74,0,963,961,1,0,0,
	0,964,967,1,0,0,0,965,963,1,0,0,0,965,966,1,0,0,0,966,137,1,0,0,0,967,965,
	1,0,0,0,968,969,3,246,123,0,969,970,5,60,0,0,970,971,3,32,16,0,971,972,
	5,93,0,0,972,139,1,0,0,0,973,978,3,138,69,0,974,975,5,25,0,0,975,977,3,
	138,69,0,976,974,1,0,0,0,977,980,1,0,0,0,978,976,1,0,0,0,978,979,1,0,0,
	0,979,141,1,0,0,0,980,978,1,0,0,0,981,986,3,144,72,0,982,983,5,25,0,0,983,
	985,3,144,72,0,984,982,1,0,0,0,985,988,1,0,0,0,986,984,1,0,0,0,986,987,
	1,0,0,0,987,143,1,0,0,0,988,986,1,0,0,0,989,990,3,246,123,0,990,991,5,60,
	0,0,991,992,3,32,16,0,992,993,5,24,0,0,993,994,3,32,16,0,994,995,5,93,0,
	0,995,145,1,0,0,0,996,998,5,60,0,0,997,996,1,0,0,0,997,998,1,0,0,0,998,
	999,1,0,0,0,999,1001,3,94,47,0,1000,1002,5,93,0,0,1001,1000,1,0,0,0,1001,
	1002,1,0,0,0,1002,1013,1,0,0,0,1003,1005,5,40,0,0,1004,1006,5,60,0,0,1005,
	1004,1,0,0,0,1005,1006,1,0,0,0,1006,1007,1,0,0,0,1007,1009,3,94,47,0,1008,
	1010,5,93,0,0,1009,1008,1,0,0,0,1009,1010,1,0,0,0,1010,1012,1,0,0,0,1011,
	1003,1,0,0,0,1012,1015,1,0,0,0,1013,1011,1,0,0,0,1013,1014,1,0,0,0,1014,
	147,1,0,0,0,1015,1013,1,0,0,0,1016,1019,3,246,123,0,1017,1018,5,24,0,0,
	1018,1020,3,244,122,0,1019,1017,1,0,0,0,1019,1020,1,0,0,0,1020,1021,1,0,
	0,0,1021,1022,5,60,0,0,1022,1023,3,146,73,0,1023,1024,5,24,0,0,1024,1025,
	3,146,73,0,1025,1026,5,93,0,0,1026,1046,1,0,0,0,1027,1030,3,246,123,0,1028,
	1029,5,24,0,0,1029,1031,3,244,122,0,1030,1028,1,0,0,0,1030,1031,1,0,0,0,
	1031,1032,1,0,0,0,1032,1033,5,60,0,0,1033,1034,3,76,38,0,1034,1035,5,93,
	0,0,1035,1046,1,0,0,0,1036,1039,3,246,123,0,1037,1038,5,24,0,0,1038,1040,
	3,244,122,0,1039,1037,1,0,0,0,1039,1040,1,0,0,0,1040,1041,1,0,0,0,1041,
	1042,5,60,0,0,1042,1043,3,146,73,0,1043,1044,5,93,0,0,1044,1046,1,0,0,0,
	1045,1016,1,0,0,0,1045,1027,1,0,0,0,1045,1036,1,0,0,0,1046,149,1,0,0,0,
	1047,1050,3,146,73,0,1048,1049,5,24,0,0,1049,1051,3,146,73,0,1050,1048,
	1,0,0,0,1050,1051,1,0,0,0,1051,1054,1,0,0,0,1052,1054,3,74,37,0,1053,1047,
	1,0,0,0,1053,1052,1,0,0,0,1054,151,1,0,0,0,1055,1056,5,125,0,0,1056,1057,
	5,60,0,0,1057,1058,3,150,75,0,1058,1059,5,93,0,0,1059,1086,1,0,0,0,1060,
	1061,5,126,0,0,1061,1062,5,60,0,0,1062,1063,3,150,75,0,1063,1064,5,93,0,
	0,1064,1086,1,0,0,0,1065,1066,5,127,0,0,1066,1067,5,60,0,0,1067,1068,3,
	150,75,0,1068,1069,5,93,0,0,1069,1086,1,0,0,0,1070,1071,5,128,0,0,1071,
	1072,5,60,0,0,1072,1073,3,150,75,0,1073,1074,5,93,0,0,1074,1086,1,0,0,0,
	1075,1076,5,129,0,0,1076,1077,5,60,0,0,1077,1078,3,150,75,0,1078,1079,5,
	93,0,0,1079,1086,1,0,0,0,1080,1081,5,130,0,0,1081,1082,5,60,0,0,1082,1083,
	3,150,75,0,1083,1084,5,93,0,0,1084,1086,1,0,0,0,1085,1055,1,0,0,0,1085,
	1060,1,0,0,0,1085,1065,1,0,0,0,1085,1070,1,0,0,0,1085,1075,1,0,0,0,1085,
	1080,1,0,0,0,1086,153,1,0,0,0,1087,1088,5,131,0,0,1088,1089,5,60,0,0,1089,
	1090,3,150,75,0,1090,1091,5,93,0,0,1091,1118,1,0,0,0,1092,1093,5,132,0,
	0,1093,1094,5,60,0,0,1094,1095,3,150,75,0,1095,1096,5,93,0,0,1096,1118,
	1,0,0,0,1097,1098,5,133,0,0,1098,1099,5,60,0,0,1099,1100,3,150,75,0,1100,
	1101,5,93,0,0,1101,1118,1,0,0,0,1102,1103,5,134,0,0,1103,1104,5,60,0,0,
	1104,1105,3,150,75,0,1105,1106,5,93,0,0,1106,1118,1,0,0,0,1107,1108,5,135,
	0,0,1108,1109,5,60,0,0,1109,1110,3,150,75,0,1110,1111,5,93,0,0,1111,1118,
	1,0,0,0,1112,1113,5,136,0,0,1113,1114,5,60,0,0,1114,1115,3,150,75,0,1115,
	1116,5,93,0,0,1116,1118,1,0,0,0,1117,1087,1,0,0,0,1117,1092,1,0,0,0,1117,
	1097,1,0,0,0,1117,1102,1,0,0,0,1117,1107,1,0,0,0,1117,1112,1,0,0,0,1118,
	155,1,0,0,0,1119,1123,3,250,125,0,1120,1122,3,250,125,0,1121,1120,1,0,0,
	0,1122,1125,1,0,0,0,1123,1121,1,0,0,0,1123,1124,1,0,0,0,1124,1136,1,0,0,
	0,1125,1123,1,0,0,0,1126,1127,5,25,0,0,1127,1131,3,250,125,0,1128,1130,
	3,250,125,0,1129,1128,1,0,0,0,1130,1133,1,0,0,0,1131,1129,1,0,0,0,1131,
	1132,1,0,0,0,1132,1135,1,0,0,0,1133,1131,1,0,0,0,1134,1126,1,0,0,0,1135,
	1138,1,0,0,0,1136,1134,1,0,0,0,1136,1137,1,0,0,0,1137,157,1,0,0,0,1138,
	1136,1,0,0,0,1139,1140,5,60,0,0,1140,1141,3,156,78,0,1141,1149,5,93,0,0,
	1142,1143,5,25,0,0,1143,1144,5,60,0,0,1144,1145,3,156,78,0,1145,1146,5,
	93,0,0,1146,1148,1,0,0,0,1147,1142,1,0,0,0,1148,1151,1,0,0,0,1149,1147,
	1,0,0,0,1149,1150,1,0,0,0,1150,159,1,0,0,0,1151,1149,1,0,0,0,1152,1153,
	5,120,0,0,1153,1154,3,158,79,0,1154,161,1,0,0,0,1155,1156,5,119,0,0,1156,
	1157,5,60,0,0,1157,1158,3,158,79,0,1158,1159,5,93,0,0,1159,163,1,0,0,0,
	1160,1161,5,121,0,0,1161,1162,5,60,0,0,1162,1163,5,60,0,0,1163,1164,3,158,
	79,0,1164,1172,5,93,0,0,1165,1166,5,25,0,0,1166,1167,5,60,0,0,1167,1168,
	3,158,79,0,1168,1169,5,93,0,0,1169,1171,1,0,0,0,1170,1165,1,0,0,0,1171,
	1174,1,0,0,0,1172,1170,1,0,0,0,1172,1173,1,0,0,0,1173,1175,1,0,0,0,1174,
	1172,1,0,0,0,1175,1176,5,93,0,0,1176,165,1,0,0,0,1177,1178,3,94,47,0,1178,
	167,1,0,0,0,1179,1184,3,94,47,0,1180,1184,3,162,81,0,1181,1184,3,160,80,
	0,1182,1184,3,164,82,0,1183,1179,1,0,0,0,1183,1180,1,0,0,0,1183,1181,1,
	0,0,0,1183,1182,1,0,0,0,1184,169,1,0,0,0,1185,1186,5,141,0,0,1186,171,1,
	0,0,0,1187,1188,5,141,0,0,1188,173,1,0,0,0,1189,1190,5,23,0,0,1190,1191,
	5,60,0,0,1191,1192,3,94,47,0,1192,1193,5,25,0,0,1193,1194,5,30,0,0,1194,
	1195,5,60,0,0,1195,1196,5,122,0,0,1196,1197,5,60,0,0,1197,1198,3,170,85,
	0,1198,1199,5,25,0,0,1199,1200,3,172,86,0,1200,1201,5,93,0,0,1201,1202,
	5,25,0,0,1202,1203,3,168,84,0,1203,1206,5,93,0,0,1204,1205,5,25,0,0,1205,
	1207,3,244,122,0,1206,1204,1,0,0,0,1206,1207,1,0,0,0,1207,1208,1,0,0,0,
	1208,1209,5,93,0,0,1209,175,1,0,0,0,1210,1211,5,141,0,0,1211,177,1,0,0,
	0,1212,1213,5,141,0,0,1213,179,1,0,0,0,1214,1215,3,168,84,0,1215,181,1,
	0,0,0,1216,1217,3,168,84,0,1217,183,1,0,0,0,1218,1219,5,23,0,0,1219,1220,
	5,60,0,0,1220,1221,3,94,47,0,1221,1222,5,25,0,0,1222,1223,5,31,0,0,1223,
	1224,5,60,0,0,1224,1225,5,122,0,0,1225,1226,5,60,0,0,1226,1227,3,176,88,
	0,1227,1228,5,25,0,0,1228,1229,3,178,89,0,1229,1230,5,93,0,0,1230,1231,
	5,25,0,0,1231,1232,3,180,90,0,1232,1233,5,25,0,0,1233,1236,3,182,91,0,1234,
	1235,5,25,0,0,1235,1237,5,36,0,0,1236,1234,1,0,0,0,1236,1237,1,0,0,0,1237,
	1238,1,0,0,0,1238,1241,5,93,0,0,1239,1240,5,25,0,0,1240,1242,3,244,122,
	0,1241,1239,1,0,0,0,1241,1242,1,0,0,0,1242,1243,1,0,0,0,1243,1244,5,93,
	0,0,1244,185,1,0,0,0,1245,1246,5,23,0,0,1246,1247,5,60,0,0,1247,1248,3,
	94,47,0,1248,1249,5,25,0,0,1249,1252,3,168,84,0,1250,1251,5,25,0,0,1251,
	1253,3,244,122,0,1252,1250,1,0,0,0,1252,1253,1,0,0,0,1253,1254,1,0,0,0,
	1254,1256,5,93,0,0,1255,1257,5,123,0,0,1256,1255,1,0,0,0,1256,1257,1,0,
	0,0,1257,187,1,0,0,0,1258,1259,5,118,0,0,1259,1260,5,60,0,0,1260,1261,3,
	94,47,0,1261,1262,5,25,0,0,1262,1269,3,194,97,0,1263,1264,5,25,0,0,1264,
	1266,5,58,0,0,1265,1267,3,202,101,0,1266,1265,1,0,0,0,1266,1267,1,0,0,0,
	1267,1268,1,0,0,0,1268,1270,5,91,0,0,1269,1263,1,0,0,0,1269,1270,1,0,0,
	0,1270,1276,1,0,0,0,1271,1272,5,25,0,0,1272,1273,5,58,0,0,1273,1274,3,196,
	98,0,1274,1275,5,91,0,0,1275,1277,1,0,0,0,1276,1271,1,0,0,0,1276,1277,1,
	0,0,0,1277,1286,1,0,0,0,1278,1279,5,25,0,0,1279,1282,5,58,0,0,1280,1283,
	3,136,68,0,1281,1283,3,74,37,0,1282,1280,1,0,0,0,1282,1281,1,0,0,0,1283,
	1284,1,0,0,0,1284,1285,5,91,0,0,1285,1287,1,0,0,0,1286,1278,1,0,0,0,1286,
	1287,1,0,0,0,1287,1288,1,0,0,0,1288,1289,5,93,0,0,1289,189,1,0,0,0,1290,
	1291,5,118,0,0,1291,1292,5,60,0,0,1292,1293,3,94,47,0,1293,1294,5,25,0,
	0,1294,1301,3,244,122,0,1295,1296,5,25,0,0,1296,1298,5,58,0,0,1297,1299,
	3,202,101,0,1298,1297,1,0,0,0,1298,1299,1,0,0,0,1299,1300,1,0,0,0,1300,
	1302,5,91,0,0,1301,1295,1,0,0,0,1301,1302,1,0,0,0,1302,1308,1,0,0,0,1303,
	1304,5,25,0,0,1304,1305,5,58,0,0,1305,1306,3,196,98,0,1306,1307,5,91,0,
	0,1307,1309,1,0,0,0,1308,1303,1,0,0,0,1308,1309,1,0,0,0,1309,1318,1,0,0,
	0,1310,1311,5,25,0,0,1311,1314,5,58,0,0,1312,1315,3,136,68,0,1313,1315,
	3,74,37,0,1314,1312,1,0,0,0,1314,1313,1,0,0,0,1315,1316,1,0,0,0,1316,1317,
	5,91,0,0,1317,1319,1,0,0,0,1318,1310,1,0,0,0,1318,1319,1,0,0,0,1319,1320,
	1,0,0,0,1320,1321,5,93,0,0,1321,191,1,0,0,0,1322,1323,5,86,0,0,1323,1324,
	5,60,0,0,1324,1325,3,94,47,0,1325,1326,5,25,0,0,1326,1329,5,143,0,0,1327,
	1328,5,25,0,0,1328,1330,5,137,0,0,1329,1327,1,0,0,0,1329,1330,1,0,0,0,1330,
	193,1,0,0,0,1331,1332,5,58,0,0,1332,1337,3,200,100,0,1333,1334,5,25,0,0,
	1334,1336,3,200,100,0,1335,1333,1,0,0,0,1336,1339,1,0,0,0,1337,1335,1,0,
	0,0,1337,1338,1,0,0,0,1338,1340,1,0,0,0,1339,1337,1,0,0,0,1340,1341,5,91,
	0,0,1341,195,1,0,0,0,1342,1347,3,198,99,0,1343,1344,5,25,0,0,1344,1346,
	3,198,99,0,1345,1343,1,0,0,0,1346,1349,1,0,0,0,1347,1345,1,0,0,0,1347,1348,
	1,0,0,0,1348,197,1,0,0,0,1349,1347,1,0,0,0,1350,1351,5,141,0,0,1351,1352,
	5,24,0,0,1352,1355,3,94,47,0,1353,1355,3,94,47,0,1354,1350,1,0,0,0,1354,
	1353,1,0,0,0,1355,199,1,0,0,0,1356,1357,3,246,123,0,1357,1358,5,24,0,0,
	1358,1359,3,244,122,0,1359,201,1,0,0,0,1360,1361,5,141,0,0,1361,203,1,0,
	0,0,1362,1363,5,32,0,0,1363,1364,5,141,0,0,1364,1365,5,80,0,0,1365,1370,
	3,206,103,0,1366,1367,5,25,0,0,1367,1369,3,206,103,0,1368,1366,1,0,0,0,
	1369,1372,1,0,0,0,1370,1368,1,0,0,0,1370,1371,1,0,0,0,1371,1373,1,0,0,0,
	1372,1370,1,0,0,0,1373,1374,5,115,0,0,1374,1375,3,94,47,0,1375,205,1,0,
	0,0,1376,1377,3,26,13,0,1377,1378,3,246,123,0,1378,1379,5,60,0,0,1379,1382,
	3,22,11,0,1380,1381,5,24,0,0,1381,1383,3,208,104,0,1382,1380,1,0,0,0,1382,
	1383,1,0,0,0,1383,1384,1,0,0,0,1384,1386,5,93,0,0,1385,1387,7,12,0,0,1386,
	1385,1,0,0,0,1386,1387,1,0,0,0,1387,1418,1,0,0,0,1388,1389,3,26,13,0,1389,
	1390,3,246,123,0,1390,1391,5,60,0,0,1391,1392,3,146,73,0,1392,1393,5,24,
	0,0,1393,1396,3,146,73,0,1394,1395,5,24,0,0,1395,1397,3,208,104,0,1396,
	1394,1,0,0,0,1396,1397,1,0,0,0,1397,1398,1,0,0,0,1398,1400,5,93,0,0,1399,
	1401,7,12,0,0,1400,1399,1,0,0,0,1400,1401,1,0,0,0,1401,1418,1,0,0,0,1402,
	1403,3,26,13,0,1403,1404,3,246,123,0,1404,1405,5,60,0,0,1405,1410,3,146,
	73,0,1406,1407,5,25,0,0,1407,1409,3,146,73,0,1408,1406,1,0,0,0,1409,1412,
	1,0,0,0,1410,1408,1,0,0,0,1410,1411,1,0,0,0,1411,1413,1,0,0,0,1412,1410,
	1,0,0,0,1413,1415,5,93,0,0,1414,1416,7,12,0,0,1415,1414,1,0,0,0,1415,1416,
	1,0,0,0,1416,1418,1,0,0,0,1417,1376,1,0,0,0,1417,1388,1,0,0,0,1417,1402,
	1,0,0,0,1418,207,1,0,0,0,1419,1420,5,143,0,0,1420,209,1,0,0,0,1421,1422,
	3,32,16,0,1422,1423,5,24,0,0,1423,1424,3,32,16,0,1424,211,1,0,0,0,1425,
	1426,5,32,0,0,1426,1427,5,141,0,0,1427,1428,5,80,0,0,1428,1433,3,206,103,
	0,1429,1430,5,25,0,0,1430,1432,3,206,103,0,1431,1429,1,0,0,0,1432,1435,
	1,0,0,0,1433,1431,1,0,0,0,1433,1434,1,0,0,0,1434,1436,1,0,0,0,1435,1433,
	1,0,0,0,1436,1437,5,114,0,0,1437,1438,5,63,0,0,1438,1439,5,65,0,0,1439,
	1444,3,250,125,0,1440,1441,5,99,0,0,1441,1443,3,250,125,0,1442,1440,1,0,
	0,0,1443,1446,1,0,0,0,1444,1442,1,0,0,0,1444,1445,1,0,0,0,1445,1447,1,0,
	0,0,1446,1444,1,0,0,0,1447,1448,5,48,0,0,1448,213,1,0,0,0,1449,1450,3,148,
	74,0,1450,215,1,0,0,0,1451,1454,3,226,113,0,1452,1454,3,230,115,0,1453,
	1451,1,0,0,0,1453,1452,1,0,0,0,1454,217,1,0,0,0,1455,1456,7,13,0,0,1456,
	219,1,0,0,0,1457,1458,7,14,0,0,1458,221,1,0,0,0,1459,1460,3,218,109,0,1460,
	1461,5,60,0,0,1461,1462,3,94,47,0,1462,1463,5,93,0,0,1463,223,1,0,0,0,1464,
	1465,3,220,110,0,1465,1466,5,60,0,0,1466,1467,3,94,47,0,1467,1468,5,93,
	0,0,1468,225,1,0,0,0,1469,1472,3,222,111,0,1470,1472,3,224,112,0,1471,1469,
	1,0,0,0,1471,1470,1,0,0,0,1472,227,1,0,0,0,1473,1474,7,15,0,0,1474,229,
	1,0,0,0,1475,1476,5,26,0,0,1476,1477,3,228,114,0,1477,1478,5,80,0,0,1478,
	1483,3,206,103,0,1479,1480,5,25,0,0,1480,1482,3,206,103,0,1481,1479,1,0,
	0,0,1482,1485,1,0,0,0,1483,1481,1,0,0,0,1483,1484,1,0,0,0,1484,1487,1,0,
	0,0,1485,1483,1,0,0,0,1486,1488,3,16,8,0,1487,1486,1,0,0,0,1487,1488,1,
	0,0,0,1488,1489,1,0,0,0,1489,1490,5,113,0,0,1490,1491,3,94,47,0,1491,231,
	1,0,0,0,1492,1493,5,46,0,0,1493,1494,3,94,47,0,1494,1495,5,11,0,0,1495,
	1496,3,246,123,0,1496,233,1,0,0,0,1497,1498,5,104,0,0,1498,1499,3,94,47,
	0,1499,1500,5,11,0,0,1500,1502,3,246,123,0,1501,1503,3,252,126,0,1502,1501,
	1,0,0,0,1502,1503,1,0,0,0,1503,1504,1,0,0,0,1504,1505,5,19,0,0,1505,1506,
	3,94,47,0,1506,235,1,0,0,0,1507,1508,5,108,0,0,1508,1509,3,240,120,0,1509,
	1510,3,242,121,0,1510,237,1,0,0,0,1511,1512,5,20,0,0,1512,1513,3,52,26,
	0,1513,1514,5,89,0,0,1514,1515,3,94,47,0,1515,239,1,0,0,0,1516,1520,3,238,
	119,0,1517,1519,3,238,119,0,1518,1517,1,0,0,0,1519,1522,1,0,0,0,1520,1518,
	1,0,0,0,1520,1521,1,0,0,0,1521,241,1,0,0,0,1522,1520,1,0,0,0,1523,1524,
	5,35,0,0,1524,1525,5,89,0,0,1525,1526,3,94,47,0,1526,243,1,0,0,0,1527,1528,
	5,143,0,0,1528,245,1,0,0,0,1529,1530,5,141,0,0,1530,247,1,0,0,0,1531,1533,
	5,73,0,0,1532,1531,1,0,0,0,1532,1533,1,0,0,0,1533,1534,1,0,0,0,1534,1544,
	5,137,0,0,1535,1537,5,73,0,0,1536,1535,1,0,0,0,1536,1537,1,0,0,0,1537,1538,
	1,0,0,0,1538,1544,5,138,0,0,1539,1541,5,73,0,0,1540,1539,1,0,0,0,1540,1541,
	1,0,0,0,1541,1542,1,0,0,0,1542,1544,5,139,0,0,1543,1532,1,0,0,0,1543,1536,
	1,0,0,0,1543,1540,1,0,0,0,1544,249,1,0,0,0,1545,1554,5,143,0,0,1546,1554,
	5,112,0,0,1547,1554,5,45,0,0,1548,1550,5,73,0,0,1549,1548,1,0,0,0,1549,
	1550,1,0,0,0,1550,1551,1,0,0,0,1551,1554,3,248,124,0,1552,1554,3,56,28,
	0,1553,1545,1,0,0,0,1553,1546,1,0,0,0,1553,1547,1,0,0,0,1553,1549,1,0,0,
	0,1553,1552,1,0,0,0,1554,251,1,0,0,0,1555,1556,7,12,0,0,1556,253,1,0,0,
	0,1557,1562,3,94,47,0,1558,1559,5,25,0,0,1559,1561,3,94,47,0,1560,1558,
	1,0,0,0,1561,1564,1,0,0,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,255,
	1,0,0,0,1564,1562,1,0,0,0,1565,1568,5,141,0,0,1566,1567,5,40,0,0,1567,1569,
	5,141,0,0,1568,1566,1,0,0,0,1569,1570,1,0,0,0,1570,1568,1,0,0,0,1570,1571,
	1,0,0,0,1571,257,1,0,0,0,1572,1573,3,256,128,0,1573,1575,5,60,0,0,1574,
	1576,3,254,127,0,1575,1574,1,0,0,0,1575,1576,1,0,0,0,1576,1577,1,0,0,0,
	1577,1578,5,93,0,0,1578,259,1,0,0,0,1579,1580,5,142,0,0,1580,261,1,0,0,
	0,1581,1582,5,78,0,0,1582,1583,5,115,0,0,1583,1597,3,266,133,0,1584,1585,
	5,78,0,0,1585,1586,5,115,0,0,1586,1587,5,58,0,0,1587,1590,3,266,133,0,1588,
	1589,5,25,0,0,1589,1591,3,266,133,0,1590,1588,1,0,0,0,1591,1592,1,0,0,0,
	1592,1590,1,0,0,0,1592,1593,1,0,0,0,1593,1594,1,0,0,0,1594,1595,5,91,0,
	0,1595,1597,1,0,0,0,1596,1581,1,0,0,0,1596,1584,1,0,0,0,1597,263,1,0,0,
	0,1598,1599,5,78,0,0,1599,1600,5,115,0,0,1600,1601,5,69,0,0,1601,1602,5,
	60,0,0,1602,1603,3,94,47,0,1603,1604,5,93,0,0,1604,265,1,0,0,0,1605,1606,
	5,59,0,0,1606,1611,3,268,134,0,1607,1608,5,25,0,0,1608,1610,3,268,134,0,
	1609,1607,1,0,0,0,1610,1613,1,0,0,0,1611,1609,1,0,0,0,1611,1612,1,0,0,0,
	1612,1614,1,0,0,0,1613,1611,1,0,0,0,1614,1615,5,92,0,0,1615,267,1,0,0,0,
	1616,1619,3,270,135,0,1617,1618,5,24,0,0,1618,1620,3,270,135,0,1619,1617,
	1,0,0,0,1619,1620,1,0,0,0,1620,269,1,0,0,0,1621,1624,3,248,124,0,1622,1624,
	5,74,0,0,1623,1621,1,0,0,0,1623,1622,1,0,0,0,1624,271,1,0,0,0,1625,1626,
	5,78,0,0,1626,1627,5,67,0,0,1627,1628,3,94,47,0,1628,273,1,0,0,0,1629,1630,
	5,78,0,0,1630,1631,5,67,0,0,1631,1632,5,68,0,0,1632,275,1,0,0,0,135,278,
	281,291,297,302,309,313,321,326,340,344,348,352,356,363,367,376,389,392,
	396,405,412,416,427,435,455,462,469,476,482,486,494,502,520,528,551,580,
	582,610,625,634,679,691,719,729,733,736,747,759,767,805,816,818,827,831,
	851,861,890,894,900,923,938,948,954,965,978,986,997,1001,1005,1009,1013,
	1019,1030,1039,1045,1050,1053,1085,1117,1123,1131,1136,1149,1172,1183,1206,
	1236,1241,1252,1256,1266,1269,1276,1282,1286,1298,1301,1308,1314,1318,1329,
	1337,1347,1354,1370,1382,1386,1396,1400,1410,1415,1417,1433,1444,1453,1471,
	1483,1487,1502,1520,1532,1536,1540,1543,1549,1553,1562,1570,1575,1592,1596,
	1611,1619,1623];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wcpsParser.__ATN) {
			wcpsParser.__ATN = new ATNDeserializer().deserialize(wcpsParser._serializedATN);
		}

		return wcpsParser.__ATN;
	}


	static DecisionsToDFA = wcpsParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class WcpsQueryContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public forClauseList(): ForClauseListContext {
		return this.getTypedRuleContext(ForClauseListContext, 0) as ForClauseListContext;
	}
	public returnClause(): ReturnClauseContext {
		return this.getTypedRuleContext(ReturnClauseContext, 0) as ReturnClauseContext;
	}
	public letClauseList(): LetClauseListContext {
		return this.getTypedRuleContext(LetClauseListContext, 0) as LetClauseListContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wcpsQuery;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWcpsQuery) {
	 		listener.enterWcpsQuery(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWcpsQuery) {
	 		listener.exitWcpsQuery(this);
		}
	}
}


export class ForClauseListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(wcpsParser.FOR, 0);
	}
	public forClause_list(): ForClauseContext[] {
		return this.getTypedRuleContexts(ForClauseContext) as ForClauseContext[];
	}
	public forClause(i: number): ForClauseContext {
		return this.getTypedRuleContext(ForClauseContext, i) as ForClauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_forClauseList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterForClauseList) {
	 		listener.enterForClauseList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitForClauseList) {
	 		listener.exitForClauseList(this);
		}
	}
}


export class CoverageIdForClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		return this.getTypedRuleContext(DecodeCoverageExpressionContext, 0) as DecodeCoverageExpressionContext;
	}
	public qualifiedCoverageIdentifier(): QualifiedCoverageIdentifierContext {
		return this.getTypedRuleContext(QualifiedCoverageIdentifierContext, 0) as QualifiedCoverageIdentifierContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageIdForClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageIdForClause) {
	 		listener.enterCoverageIdForClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageIdForClause) {
	 		listener.exitCoverageIdForClause(this);
		}
	}
}


export class ForClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public IN(): TerminalNode {
		return this.getToken(wcpsParser.IN, 0);
	}
	public coverageIdForClause_list(): CoverageIdForClauseContext[] {
		return this.getTypedRuleContexts(CoverageIdForClauseContext) as CoverageIdForClauseContext[];
	}
	public coverageIdForClause(i: number): CoverageIdForClauseContext {
		return this.getTypedRuleContext(CoverageIdForClauseContext, i) as CoverageIdForClauseContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_forClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterForClause) {
	 		listener.enterForClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitForClause) {
	 		listener.exitForClause(this);
		}
	}
}


export class LetClauseListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LET(): TerminalNode {
		return this.getToken(wcpsParser.LET, 0);
	}
	public letClause_list(): LetClauseContext[] {
		return this.getTypedRuleContexts(LetClauseContext) as LetClauseContext[];
	}
	public letClause(i: number): LetClauseContext {
		return this.getTypedRuleContext(LetClauseContext, i) as LetClauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_letClauseList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterLetClauseList) {
	 		listener.enterLetClauseList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitLetClauseList) {
	 		listener.exitLetClauseList(this);
		}
	}
}


export class LetClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public letClauseWithDimensionIntervalList(): LetClauseWithDimensionIntervalListContext {
		return this.getTypedRuleContext(LetClauseWithDimensionIntervalListContext, 0) as LetClauseWithDimensionIntervalListContext;
	}
	public letClauseWithCoverageExpression(): LetClauseWithCoverageExpressionContext {
		return this.getTypedRuleContext(LetClauseWithCoverageExpressionContext, 0) as LetClauseWithCoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_letClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterLetClause) {
	 		listener.enterLetClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitLetClause) {
	 		listener.exitLetClause(this);
		}
	}
}


export class LetClauseWithDimensionIntervalListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.EQUAL, 0);
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACKET, 0);
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_letClauseWithDimensionIntervalList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterLetClauseWithDimensionIntervalList) {
	 		listener.enterLetClauseWithDimensionIntervalList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitLetClauseWithDimensionIntervalList) {
	 		listener.exitLetClauseWithDimensionIntervalList(this);
		}
	}
}


export class LetClauseWithCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.EQUAL, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public wktExpression(): WktExpressionContext {
		return this.getTypedRuleContext(WktExpressionContext, 0) as WktExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_letClauseWithCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterLetClauseWithCoverageExpression) {
	 		listener.enterLetClauseWithCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitLetClauseWithCoverageExpression) {
	 		listener.exitLetClauseWithCoverageExpression(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(wcpsParser.WHERE, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_whereClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWhereClause) {
	 		listener.enterWhereClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWhereClause) {
	 		listener.exitWhereClause(this);
		}
	}
}


export class ReturnClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(wcpsParser.RETURN, 0);
	}
	public processingExpression(): ProcessingExpressionContext {
		return this.getTypedRuleContext(ProcessingExpressionContext, 0) as ProcessingExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_returnClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReturnClause) {
	 		listener.enterReturnClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReturnClause) {
	 		listener.exitReturnClause(this);
		}
	}
}


export class DomainPropertyValueExtractionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOWER_BOUND(): TerminalNode {
		return this.getToken(wcpsParser.LOWER_BOUND, 0);
	}
	public UPPER_BOUND(): TerminalNode {
		return this.getToken(wcpsParser.UPPER_BOUND, 0);
	}
	public RESOLUTION(): TerminalNode {
		return this.getToken(wcpsParser.RESOLUTION, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_domainPropertyValueExtraction;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDomainPropertyValueExtraction) {
	 		listener.enterDomainPropertyValueExtraction(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDomainPropertyValueExtraction) {
	 		listener.exitDomainPropertyValueExtraction(this);
		}
	}
}


export class DomainIntervalsContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public domainExpression(): DomainExpressionContext {
		return this.getTypedRuleContext(DomainExpressionContext, 0) as DomainExpressionContext;
	}
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainExpressionContext, 0) as ImageCrsDomainExpressionContext;
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainByDimensionExpressionContext, 0) as ImageCrsDomainByDimensionExpressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(wcpsParser.DOT, 0);
	}
	public domainPropertyValueExtraction(): DomainPropertyValueExtractionContext {
		return this.getTypedRuleContext(DomainPropertyValueExtractionContext, 0) as DomainPropertyValueExtractionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_domainIntervals;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDomainIntervals) {
	 		listener.enterDomainIntervals(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDomainIntervals) {
	 		listener.exitDomainIntervals(this);
		}
	}
}


export class GeoXYAxisLabelAndDomainResolutionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_NAME, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(wcpsParser.DOT, 0);
	}
	public domainPropertyValueExtraction(): DomainPropertyValueExtractionContext {
		return this.getTypedRuleContext(DomainPropertyValueExtractionContext, 0) as DomainPropertyValueExtractionContext;
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_geoXYAxisLabelAndDomainResolution;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterGeoXYAxisLabelAndDomainResolution) {
	 		listener.enterGeoXYAxisLabelAndDomainResolution(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitGeoXYAxisLabelAndDomainResolution) {
	 		listener.exitGeoXYAxisLabelAndDomainResolution(this);
		}
	}
}


export class CoverageVariableNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageVariableName;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageVariableName) {
	 		listener.enterCoverageVariableName(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageVariableName) {
	 		listener.exitCoverageVariableName(this);
		}
	}
}


export class ProcessingExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public getComponentExpression(): GetComponentExpressionContext {
		return this.getTypedRuleContext(GetComponentExpressionContext, 0) as GetComponentExpressionContext;
	}
	public scalarExpression(): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, 0) as ScalarExpressionContext;
	}
	public encodedCoverageExpression(): EncodedCoverageExpressionContext {
		return this.getTypedRuleContext(EncodedCoverageExpressionContext, 0) as EncodedCoverageExpressionContext;
	}
	public scalarValueCoverageExpression(): ScalarValueCoverageExpressionContext {
		return this.getTypedRuleContext(ScalarValueCoverageExpressionContext, 0) as ScalarValueCoverageExpressionContext;
	}
	public describeCoverageExpression(): DescribeCoverageExpressionContext {
		return this.getTypedRuleContext(DescribeCoverageExpressionContext, 0) as DescribeCoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_processingExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterProcessingExpression) {
	 		listener.enterProcessingExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitProcessingExpression) {
	 		listener.exitProcessingExpression(this);
		}
	}
}


export class ScalarValueCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scalarValueCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScalarValueCoverageExpression) {
	 		listener.enterScalarValueCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScalarValueCoverageExpression) {
	 		listener.exitScalarValueCoverageExpression(this);
		}
	}
}


export class ScalarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public geoXYAxisLabelAndDomainResolution(): GeoXYAxisLabelAndDomainResolutionContext {
		return this.getTypedRuleContext(GeoXYAxisLabelAndDomainResolutionContext, 0) as GeoXYAxisLabelAndDomainResolutionContext;
	}
	public booleanScalarExpression(): BooleanScalarExpressionContext {
		return this.getTypedRuleContext(BooleanScalarExpressionContext, 0) as BooleanScalarExpressionContext;
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public stringScalarExpression(): StringScalarExpressionContext {
		return this.getTypedRuleContext(StringScalarExpressionContext, 0) as StringScalarExpressionContext;
	}
	public starExpression(): StarExpressionContext {
		return this.getTypedRuleContext(StarExpressionContext, 0) as StarExpressionContext;
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public cellCountExpression(): CellCountExpressionContext {
		return this.getTypedRuleContext(CellCountExpressionContext, 0) as CellCountExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scalarExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScalarExpression) {
	 		listener.enterScalarExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScalarExpression) {
	 		listener.exitScalarExpression(this);
		}
	}
}


export class BooleanScalarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		return this.getTypedRuleContext(ReduceBooleanExpressionContext, 0) as ReduceBooleanExpressionContext;
	}
	public booleanConstant(): BooleanConstantContext {
		return this.getTypedRuleContext(BooleanConstantContext, 0) as BooleanConstantContext;
	}
	public booleanUnaryOperator(): BooleanUnaryOperatorContext {
		return this.getTypedRuleContext(BooleanUnaryOperatorContext, 0) as BooleanUnaryOperatorContext;
	}
	public booleanScalarExpression_list(): BooleanScalarExpressionContext[] {
		return this.getTypedRuleContexts(BooleanScalarExpressionContext) as BooleanScalarExpressionContext[];
	}
	public booleanScalarExpression(i: number): BooleanScalarExpressionContext {
		return this.getTypedRuleContext(BooleanScalarExpressionContext, i) as BooleanScalarExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public numericalScalarExpression_list(): NumericalScalarExpressionContext[] {
		return this.getTypedRuleContexts(NumericalScalarExpressionContext) as NumericalScalarExpressionContext[];
	}
	public numericalScalarExpression(i: number): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, i) as NumericalScalarExpressionContext;
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getTypedRuleContext(NumericalComparissonOperatorContext, 0) as NumericalComparissonOperatorContext;
	}
	public stringScalarExpression_list(): StringScalarExpressionContext[] {
		return this.getTypedRuleContexts(StringScalarExpressionContext) as StringScalarExpressionContext[];
	}
	public stringScalarExpression(i: number): StringScalarExpressionContext {
		return this.getTypedRuleContext(StringScalarExpressionContext, i) as StringScalarExpressionContext;
	}
	public stringOperator(): StringOperatorContext {
		return this.getTypedRuleContext(StringOperatorContext, 0) as StringOperatorContext;
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getTypedRuleContext(BooleanOperatorContext, 0) as BooleanOperatorContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanScalarExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanScalarExpression) {
	 		listener.enterBooleanScalarExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanScalarExpression) {
	 		listener.exitBooleanScalarExpression(this);
		}
	}
}


export class BooleanUnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(wcpsParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanUnaryOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanUnaryOperator) {
	 		listener.enterBooleanUnaryOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanUnaryOperator) {
	 		listener.exitBooleanUnaryOperator(this);
		}
	}
}


export class BooleanConstantContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(wcpsParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(wcpsParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanConstant;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanConstant) {
	 		listener.enterBooleanConstant(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanConstant) {
	 		listener.exitBooleanConstant(this);
		}
	}
}


export class BooleanOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(wcpsParser.AND, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(wcpsParser.XOR, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(wcpsParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanOperator) {
	 		listener.enterBooleanOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanOperator) {
	 		listener.exitBooleanOperator(this);
		}
	}
}


export class NumericalComparissonOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(wcpsParser.GREATER_THAN, 0);
	}
	public GREATER_OR_EQUAL_THAN(): TerminalNode {
		return this.getToken(wcpsParser.GREATER_OR_EQUAL_THAN, 0);
	}
	public LOWER_THAN(): TerminalNode {
		return this.getToken(wcpsParser.LOWER_THAN, 0);
	}
	public LOWER_OR_EQUAL_THAN(): TerminalNode {
		return this.getToken(wcpsParser.LOWER_OR_EQUAL_THAN, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.NOT_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_numericalComparissonOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalComparissonOperator) {
	 		listener.enterNumericalComparissonOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalComparissonOperator) {
	 		listener.exitNumericalComparissonOperator(this);
		}
	}
}


export class StringOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(wcpsParser.NOT_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_stringOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterStringOperator) {
	 		listener.enterStringOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitStringOperator) {
	 		listener.exitStringOperator(this);
		}
	}
}


export class StringScalarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_stringScalarExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterStringScalarExpression) {
	 		listener.enterStringScalarExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitStringScalarExpression) {
	 		listener.exitStringScalarExpression(this);
		}
	}
}


export class StarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_starExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterStarExpression) {
	 		listener.enterStarExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitStarExpression) {
	 		listener.exitStarExpression(this);
		}
	}
}


export class BooleanSwitchCaseCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getTypedRuleContext(NumericalComparissonOperatorContext, 0) as NumericalComparissonOperatorContext;
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public IS(): TerminalNode {
		return this.getToken(wcpsParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(wcpsParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanSwitchCaseCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanSwitchCaseCoverageExpression) {
	 		listener.enterBooleanSwitchCaseCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanSwitchCaseCoverageExpression) {
	 		listener.exitBooleanSwitchCaseCoverageExpression(this);
		}
	}
}


export class BooleanSwitchCaseCombinedExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanSwitchCaseCoverageExpression_list(): BooleanSwitchCaseCoverageExpressionContext[] {
		return this.getTypedRuleContexts(BooleanSwitchCaseCoverageExpressionContext) as BooleanSwitchCaseCoverageExpressionContext[];
	}
	public booleanSwitchCaseCoverageExpression(i: number): BooleanSwitchCaseCoverageExpressionContext {
		return this.getTypedRuleContext(BooleanSwitchCaseCoverageExpressionContext, i) as BooleanSwitchCaseCoverageExpressionContext;
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getTypedRuleContext(BooleanOperatorContext, 0) as BooleanOperatorContext;
	}
	public booleanSwitchCaseCombinedExpression_list(): BooleanSwitchCaseCombinedExpressionContext[] {
		return this.getTypedRuleContexts(BooleanSwitchCaseCombinedExpressionContext) as BooleanSwitchCaseCombinedExpressionContext[];
	}
	public booleanSwitchCaseCombinedExpression(i: number): BooleanSwitchCaseCombinedExpressionContext {
		return this.getTypedRuleContext(BooleanSwitchCaseCombinedExpressionContext, i) as BooleanSwitchCaseCombinedExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanSwitchCaseCombinedExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanSwitchCaseCombinedExpression) {
	 		listener.enterBooleanSwitchCaseCombinedExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanSwitchCaseCombinedExpression) {
	 		listener.exitBooleanSwitchCaseCombinedExpression(this);
		}
	}
}


export class NumericalScalarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericalUnaryOperation(): NumericalUnaryOperationContext {
		return this.getTypedRuleContext(NumericalUnaryOperationContext, 0) as NumericalUnaryOperationContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public numericalScalarExpression_list(): NumericalScalarExpressionContext[] {
		return this.getTypedRuleContexts(NumericalScalarExpressionContext) as NumericalScalarExpressionContext[];
	}
	public numericalScalarExpression(i: number): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, i) as NumericalScalarExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public trigonometricOperator(): TrigonometricOperatorContext {
		return this.getTypedRuleContext(TrigonometricOperatorContext, 0) as TrigonometricOperatorContext;
	}
	public condenseExpression(): CondenseExpressionContext {
		return this.getTypedRuleContext(CondenseExpressionContext, 0) as CondenseExpressionContext;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public NAN_NUMBER_CONSTANT(): TerminalNode {
		return this.getToken(wcpsParser.NAN_NUMBER_CONSTANT, 0);
	}
	public complexNumberConstant(): ComplexNumberConstantContext {
		return this.getTypedRuleContext(ComplexNumberConstantContext, 0) as ComplexNumberConstantContext;
	}
	public numericalOperator(): NumericalOperatorContext {
		return this.getTypedRuleContext(NumericalOperatorContext, 0) as NumericalOperatorContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_numericalScalarExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalScalarExpression) {
	 		listener.enterNumericalScalarExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalScalarExpression) {
	 		listener.exitNumericalScalarExpression(this);
		}
	}
}


export class ComplexNumberConstantContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public REAL_NUMBER_CONSTANT_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.REAL_NUMBER_CONSTANT);
	}
	public REAL_NUMBER_CONSTANT(i: number): TerminalNode {
		return this.getToken(wcpsParser.REAL_NUMBER_CONSTANT, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_complexNumberConstant;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterComplexNumberConstant) {
	 		listener.enterComplexNumberConstant(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitComplexNumberConstant) {
	 		listener.exitComplexNumberConstant(this);
		}
	}
}


export class NumericalOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(wcpsParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
	public DIVISION(): TerminalNode {
		return this.getToken(wcpsParser.DIVISION, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_numericalOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalOperator) {
	 		listener.enterNumericalOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalOperator) {
	 		listener.exitNumericalOperator(this);
		}
	}
}


export class NumericalUnaryOperationContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSOLUTE_VALUE(): TerminalNode {
		return this.getToken(wcpsParser.ABSOLUTE_VALUE, 0);
	}
	public SQUARE_ROOT(): TerminalNode {
		return this.getToken(wcpsParser.SQUARE_ROOT, 0);
	}
	public REAL_PART(): TerminalNode {
		return this.getToken(wcpsParser.REAL_PART, 0);
	}
	public IMAGINARY_PART(): TerminalNode {
		return this.getToken(wcpsParser.IMAGINARY_PART, 0);
	}
	public ROUND(): TerminalNode {
		return this.getToken(wcpsParser.ROUND, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(wcpsParser.PLUS, 0);
	}
	public CEIL(): TerminalNode {
		return this.getToken(wcpsParser.CEIL, 0);
	}
	public FLOOR(): TerminalNode {
		return this.getToken(wcpsParser.FLOOR, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_numericalUnaryOperation;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalUnaryOperation) {
	 		listener.enterNumericalUnaryOperation(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalUnaryOperation) {
	 		listener.exitNumericalUnaryOperation(this);
		}
	}
}


export class TrigonometricOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SIN(): TerminalNode {
		return this.getToken(wcpsParser.SIN, 0);
	}
	public COS(): TerminalNode {
		return this.getToken(wcpsParser.COS, 0);
	}
	public TAN(): TerminalNode {
		return this.getToken(wcpsParser.TAN, 0);
	}
	public SINH(): TerminalNode {
		return this.getToken(wcpsParser.SINH, 0);
	}
	public COSH(): TerminalNode {
		return this.getToken(wcpsParser.COSH, 0);
	}
	public TANH(): TerminalNode {
		return this.getToken(wcpsParser.TANH, 0);
	}
	public ARCSIN(): TerminalNode {
		return this.getToken(wcpsParser.ARCSIN, 0);
	}
	public ARCCOS(): TerminalNode {
		return this.getToken(wcpsParser.ARCCOS, 0);
	}
	public ARCTAN(): TerminalNode {
		return this.getToken(wcpsParser.ARCTAN, 0);
	}
	public ATAN2(): TerminalNode {
		return this.getToken(wcpsParser.ATAN2, 0);
	}
	public ARCTAN2(): TerminalNode {
		return this.getToken(wcpsParser.ARCTAN2, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_trigonometricOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrigonometricOperator) {
	 		listener.enterTrigonometricOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrigonometricOperator) {
	 		listener.exitTrigonometricOperator(this);
		}
	}
}


export class GetComponentExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageIdentifierExpression(): CoverageIdentifierExpressionContext {
		return this.getTypedRuleContext(CoverageIdentifierExpressionContext, 0) as CoverageIdentifierExpressionContext;
	}
	public coverageCrsSetExpression(): CoverageCrsSetExpressionContext {
		return this.getTypedRuleContext(CoverageCrsSetExpressionContext, 0) as CoverageCrsSetExpressionContext;
	}
	public domainExpression(): DomainExpressionContext {
		return this.getTypedRuleContext(DomainExpressionContext, 0) as DomainExpressionContext;
	}
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainExpressionContext, 0) as ImageCrsDomainExpressionContext;
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainByDimensionExpressionContext, 0) as ImageCrsDomainByDimensionExpressionContext;
	}
	public imageCrsExpression(): ImageCrsExpressionContext {
		return this.getTypedRuleContext(ImageCrsExpressionContext, 0) as ImageCrsExpressionContext;
	}
	public cellCountExpression(): CellCountExpressionContext {
		return this.getTypedRuleContext(CellCountExpressionContext, 0) as CellCountExpressionContext;
	}
	public coverageExpressionNullSetRetrieving(): CoverageExpressionNullSetRetrievingContext {
		return this.getTypedRuleContext(CoverageExpressionNullSetRetrievingContext, 0) as CoverageExpressionNullSetRetrievingContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_getComponentExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterGetComponentExpression) {
	 		listener.enterGetComponentExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitGetComponentExpression) {
	 		listener.exitGetComponentExpression(this);
		}
	}
}


export class CoverageExpressionNullSetRetrievingContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULLSET(): TerminalNode {
		return this.getToken(wcpsParser.NULLSET, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpressionNullSetRetrieving;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionNullSetRetrieving) {
	 		listener.enterCoverageExpressionNullSetRetrieving(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionNullSetRetrieving) {
	 		listener.exitCoverageExpressionNullSetRetrieving(this);
		}
	}
}


export class CoverageIdentifierExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(wcpsParser.IDENTIFIER, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageIdentifierExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageIdentifierExpression) {
	 		listener.enterCoverageIdentifierExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageIdentifierExpression) {
	 		listener.exitCoverageIdentifierExpression(this);
		}
	}
}


export class CellCountExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CELLCOUNT(): TerminalNode {
		return this.getToken(wcpsParser.CELLCOUNT, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_cellCountExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCellCountExpression) {
	 		listener.enterCellCountExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCellCountExpression) {
	 		listener.exitCellCountExpression(this);
		}
	}
}


export class CoverageCrsSetExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CRSSET(): TerminalNode {
		return this.getToken(wcpsParser.CRSSET, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageCrsSetExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageCrsSetExpression) {
	 		listener.enterCoverageCrsSetExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageCrsSetExpression) {
	 		listener.exitCoverageCrsSetExpression(this);
		}
	}
}


export class DomainExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOMAIN(): TerminalNode {
		return this.getToken(wcpsParser.DOMAIN, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_domainExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDomainExpression) {
	 		listener.enterDomainExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDomainExpression) {
	 		listener.exitDomainExpression(this);
		}
	}
}


export class ImageCrsDomainByDimensionExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMAGECRSDOMAIN(): TerminalNode {
		return this.getToken(wcpsParser.IMAGECRSDOMAIN, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsDomainByDimensionExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsDomainByDimensionExpression) {
	 		listener.enterImageCrsDomainByDimensionExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsDomainByDimensionExpression) {
	 		listener.exitImageCrsDomainByDimensionExpression(this);
		}
	}
}


export class ImageCrsDomainExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMAGECRSDOMAIN(): TerminalNode {
		return this.getToken(wcpsParser.IMAGECRSDOMAIN, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsDomainExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsDomainExpression) {
	 		listener.enterImageCrsDomainExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsDomainExpression) {
	 		listener.exitImageCrsDomainExpression(this);
		}
	}
}


export class ImageCrsExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMAGECRS(): TerminalNode {
		return this.getToken(wcpsParser.IMAGECRS, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsExpression) {
	 		listener.enterImageCrsExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsExpression) {
	 		listener.exitImageCrsExpression(this);
		}
	}
}


export class DescribeCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DESCRIBE_COVERAGE(): TerminalNode {
		return this.getToken(wcpsParser.DESCRIBE_COVERAGE, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public extraParams(): ExtraParamsContext {
		return this.getTypedRuleContext(ExtraParamsContext, 0) as ExtraParamsContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_describeCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDescribeCoverageExpression) {
	 		listener.enterDescribeCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDescribeCoverageExpression) {
	 		listener.exitDescribeCoverageExpression(this);
		}
	}
}


export class PositionalParamaterContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POSITIONAL_PARAMETER(): TerminalNode {
		return this.getToken(wcpsParser.POSITIONAL_PARAMETER, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_positionalParamater;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterPositionalParamater) {
	 		listener.enterPositionalParamater(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitPositionalParamater) {
	 		listener.exitPositionalParamater(this);
		}
	}
}


export class ExtraParamsContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public EXTRA_PARAMS(): TerminalNode {
		return this.getToken(wcpsParser.EXTRA_PARAMS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_extraParams;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterExtraParams) {
	 		listener.enterExtraParams(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitExtraParams) {
	 		listener.exitExtraParams(this);
		}
	}
}


export class EncodedCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENCODE(): TerminalNode {
		return this.getToken(wcpsParser.ENCODE, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public extraParams(): ExtraParamsContext {
		return this.getTypedRuleContext(ExtraParamsContext, 0) as ExtraParamsContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_encodedCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterEncodedCoverageExpression) {
	 		listener.enterEncodedCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitEncodedCoverageExpression) {
	 		listener.exitEncodedCoverageExpression(this);
		}
	}
}


export class DecodeCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DECODE(): TerminalNode {
		return this.getToken(wcpsParser.DECODE, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public positionalParamater(): PositionalParamaterContext {
		return this.getTypedRuleContext(PositionalParamaterContext, 0) as PositionalParamaterContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public extraParams(): ExtraParamsContext {
		return this.getTypedRuleContext(ExtraParamsContext, 0) as ExtraParamsContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_decodeCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDecodeCoverageExpression) {
	 		listener.enterDecodeCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDecodeCoverageExpression) {
	 		listener.exitDecodeCoverageExpression(this);
		}
	}
}


export class CoverageExpressionInParenthesisContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpressionInParenthesis;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionInParenthesis) {
	 		listener.enterCoverageExpressionInParenthesis(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionInParenthesis) {
	 		listener.exitCoverageExpressionInParenthesis(this);
		}
	}
}


export class CoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public udfExpression(): UdfExpressionContext {
		return this.getTypedRuleContext(UdfExpressionContext, 0) as UdfExpressionContext;
	}
	public SLICE(): TerminalNode {
		return this.getToken(wcpsParser.SLICE, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public dimensionPointList(): DimensionPointListContext {
		return this.getTypedRuleContext(DimensionPointListContext, 0) as DimensionPointListContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public TRIM(): TerminalNode {
		return this.getToken(wcpsParser.TRIM, 0);
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public coverageExpressionInParenthesis(): CoverageExpressionInParenthesisContext {
		return this.getTypedRuleContext(CoverageExpressionInParenthesisContext, 0) as CoverageExpressionInParenthesisContext;
	}
	public scalarExpression(): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, 0) as ScalarExpressionContext;
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public timeExtractorElement(): TimeExtractorElementContext {
		return this.getTypedRuleContext(TimeExtractorElementContext, 0) as TimeExtractorElementContext;
	}
	public timeTruncatorElement(): TimeTruncatorElementContext {
		return this.getTypedRuleContext(TimeTruncatorElementContext, 0) as TimeTruncatorElementContext;
	}
	public geoXYAxisLabelAndDomainResolution(): GeoXYAxisLabelAndDomainResolutionContext {
		return this.getTypedRuleContext(GeoXYAxisLabelAndDomainResolutionContext, 0) as GeoXYAxisLabelAndDomainResolutionContext;
	}
	public coverageConstructorExpression(): CoverageConstructorExpressionContext {
		return this.getTypedRuleContext(CoverageConstructorExpressionContext, 0) as CoverageConstructorExpressionContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public coverageConstantExpression(): CoverageConstantExpressionContext {
		return this.getTypedRuleContext(CoverageConstantExpressionContext, 0) as CoverageConstantExpressionContext;
	}
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		return this.getTypedRuleContext(DecodeCoverageExpressionContext, 0) as DecodeCoverageExpressionContext;
	}
	public EXTEND(): TerminalNode {
		return this.getToken(wcpsParser.EXTEND, 0);
	}
	public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
		return this.getTypedRuleContext(UnaryArithmeticExpressionContext, 0) as UnaryArithmeticExpressionContext;
	}
	public trigonometricExpression(): TrigonometricExpressionContext {
		return this.getTypedRuleContext(TrigonometricExpressionContext, 0) as TrigonometricExpressionContext;
	}
	public exponentialExpression(): ExponentialExpressionContext {
		return this.getTypedRuleContext(ExponentialExpressionContext, 0) as ExponentialExpressionContext;
	}
	public minBinaryExpression(): MinBinaryExpressionContext {
		return this.getTypedRuleContext(MinBinaryExpressionContext, 0) as MinBinaryExpressionContext;
	}
	public maxBinaryExpression(): MaxBinaryExpressionContext {
		return this.getTypedRuleContext(MaxBinaryExpressionContext, 0) as MaxBinaryExpressionContext;
	}
	public unaryPowerExpression(): UnaryPowerExpressionContext {
		return this.getTypedRuleContext(UnaryPowerExpressionContext, 0) as UnaryPowerExpressionContext;
	}
	public unaryModExpression(): UnaryModExpressionContext {
		return this.getTypedRuleContext(UnaryModExpressionContext, 0) as UnaryModExpressionContext;
	}
	public unaryBooleanExpression(): UnaryBooleanExpressionContext {
		return this.getTypedRuleContext(UnaryBooleanExpressionContext, 0) as UnaryBooleanExpressionContext;
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public rangeConstructorExpression(): RangeConstructorExpressionContext {
		return this.getTypedRuleContext(RangeConstructorExpressionContext, 0) as RangeConstructorExpressionContext;
	}
	public clipWKTExpression(): ClipWKTExpressionContext {
		return this.getTypedRuleContext(ClipWKTExpressionContext, 0) as ClipWKTExpressionContext;
	}
	public clipCurtainExpression(): ClipCurtainExpressionContext {
		return this.getTypedRuleContext(ClipCurtainExpressionContext, 0) as ClipCurtainExpressionContext;
	}
	public clipCorridorExpression(): ClipCorridorExpressionContext {
		return this.getTypedRuleContext(ClipCorridorExpressionContext, 0) as ClipCorridorExpressionContext;
	}
	public crsTransformExpression(): CrsTransformExpressionContext {
		return this.getTypedRuleContext(CrsTransformExpressionContext, 0) as CrsTransformExpressionContext;
	}
	public crsTransformShorthandExpression(): CrsTransformShorthandExpressionContext {
		return this.getTypedRuleContext(CrsTransformShorthandExpressionContext, 0) as CrsTransformShorthandExpressionContext;
	}
	public switchCaseExpression(): SwitchCaseExpressionContext {
		return this.getTypedRuleContext(SwitchCaseExpressionContext, 0) as SwitchCaseExpressionContext;
	}
	public SCALE(): TerminalNode {
		return this.getToken(wcpsParser.SCALE, 0);
	}
	public scaleDimensionPointList(): ScaleDimensionPointListContext {
		return this.getTypedRuleContext(ScaleDimensionPointListContext, 0) as ScaleDimensionPointListContext;
	}
	public flipExpression(): FlipExpressionContext {
		return this.getTypedRuleContext(FlipExpressionContext, 0) as FlipExpressionContext;
	}
	public sortExpression(): SortExpressionContext {
		return this.getTypedRuleContext(SortExpressionContext, 0) as SortExpressionContext;
	}
	public polygonizeExpression(): PolygonizeExpressionContext {
		return this.getTypedRuleContext(PolygonizeExpressionContext, 0) as PolygonizeExpressionContext;
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getTypedRuleContext(BooleanOperatorContext, 0) as BooleanOperatorContext;
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getTypedRuleContext(NumericalComparissonOperatorContext, 0) as NumericalComparissonOperatorContext;
	}
	public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
		return this.getTypedRuleContext(CoverageArithmeticOperatorContext, 0) as CoverageArithmeticOperatorContext;
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(wcpsParser.OVERLAY, 0);
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACKET, 0);
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACKET, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(wcpsParser.DOT, 0);
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public IS(): TerminalNode {
		return this.getToken(wcpsParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(wcpsParser.NOT, 0);
	}
	public nullClause(): NullClauseContext {
		return this.getTypedRuleContext(NullClauseContext, 0) as NullClauseContext;
	}
	public nullSetFrom(): NullSetFromContext {
		return this.getTypedRuleContext(NullSetFromContext, 0) as NullSetFromContext;
	}
	public nullMask(): NullMaskContext {
		return this.getTypedRuleContext(NullMaskContext, 0) as NullMaskContext;
	}
	public nullMaskDiscard(): NullMaskDiscardContext {
		return this.getTypedRuleContext(NullMaskDiscardContext, 0) as NullMaskDiscardContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpression) {
	 		listener.enterCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpression) {
	 		listener.exitCoverageExpression(this);
		}
	}
}


export class CoverageArithmeticOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(wcpsParser.PLUS, 0);
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
	public DIVISION(): TerminalNode {
		return this.getToken(wcpsParser.DIVISION, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageArithmeticOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageArithmeticOperator) {
	 		listener.enterCoverageArithmeticOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageArithmeticOperator) {
	 		listener.exitCoverageArithmeticOperator(this);
		}
	}
}


export class UnaryArithmeticExpressionOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
	public ABSOLUTE_VALUE(): TerminalNode {
		return this.getToken(wcpsParser.ABSOLUTE_VALUE, 0);
	}
	public SQUARE_ROOT(): TerminalNode {
		return this.getToken(wcpsParser.SQUARE_ROOT, 0);
	}
	public REAL_PART(): TerminalNode {
		return this.getToken(wcpsParser.REAL_PART, 0);
	}
	public IMAGINARY_PART(): TerminalNode {
		return this.getToken(wcpsParser.IMAGINARY_PART, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryArithmeticExpressionOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryArithmeticExpressionOperator) {
	 		listener.enterUnaryArithmeticExpressionOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryArithmeticExpressionOperator) {
	 		listener.exitUnaryArithmeticExpressionOperator(this);
		}
	}
}


export class UnaryArithmeticExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
		return this.getTypedRuleContext(UnaryArithmeticExpressionOperatorContext, 0) as UnaryArithmeticExpressionOperatorContext;
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryArithmeticExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryArithmeticExpression) {
	 		listener.enterUnaryArithmeticExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryArithmeticExpression) {
	 		listener.exitUnaryArithmeticExpression(this);
		}
	}
}


export class TrigonometricExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public trigonometricOperator(): TrigonometricOperatorContext {
		return this.getTypedRuleContext(TrigonometricOperatorContext, 0) as TrigonometricOperatorContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_trigonometricExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrigonometricExpression) {
	 		listener.enterTrigonometricExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrigonometricExpression) {
	 		listener.exitTrigonometricExpression(this);
		}
	}
}


export class ExponentialExpressionOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXP(): TerminalNode {
		return this.getToken(wcpsParser.EXP, 0);
	}
	public LOG(): TerminalNode {
		return this.getToken(wcpsParser.LOG, 0);
	}
	public LN(): TerminalNode {
		return this.getToken(wcpsParser.LN, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_exponentialExpressionOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterExponentialExpressionOperator) {
	 		listener.enterExponentialExpressionOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitExponentialExpressionOperator) {
	 		listener.exitExponentialExpressionOperator(this);
		}
	}
}


export class ExponentialExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
		return this.getTypedRuleContext(ExponentialExpressionOperatorContext, 0) as ExponentialExpressionOperatorContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_exponentialExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterExponentialExpression) {
	 		listener.enterExponentialExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitExponentialExpression) {
	 		listener.exitExponentialExpression(this);
		}
	}
}


export class UnaryPowerExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POWER(): TerminalNode {
		return this.getToken(wcpsParser.POWER, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryPowerExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryPowerExpression) {
	 		listener.enterUnaryPowerExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryPowerExpression) {
	 		listener.exitUnaryPowerExpression(this);
		}
	}
}


export class UnaryModExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOD(): TerminalNode {
		return this.getToken(wcpsParser.MOD, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryModExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryModExpression) {
	 		listener.enterUnaryModExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryModExpression) {
	 		listener.exitUnaryModExpression(this);
		}
	}
}


export class MinBinaryExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MIN(): TerminalNode {
		return this.getToken(wcpsParser.MIN, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_minBinaryExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterMinBinaryExpression) {
	 		listener.enterMinBinaryExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitMinBinaryExpression) {
	 		listener.exitMinBinaryExpression(this);
		}
	}
}


export class MaxBinaryExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAX(): TerminalNode {
		return this.getToken(wcpsParser.MAX, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_maxBinaryExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterMaxBinaryExpression) {
	 		listener.enterMaxBinaryExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitMaxBinaryExpression) {
	 		listener.exitMaxBinaryExpression(this);
		}
	}
}


export class UnaryBooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(wcpsParser.NOT, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public BIT(): TerminalNode {
		return this.getToken(wcpsParser.BIT, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(wcpsParser.COMMA, 0);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryBooleanExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryBooleanExpression) {
	 		listener.enterUnaryBooleanExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryBooleanExpression) {
	 		listener.exitUnaryBooleanExpression(this);
		}
	}
}


export class RangeTypeContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COVERAGE_VARIABLE_NAME);
	}
	public COVERAGE_VARIABLE_NAME(i: number): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeType;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeType) {
	 		listener.enterRangeType(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeType) {
	 		listener.exitRangeType(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public rangeType(): RangeTypeContext {
		return this.getTypedRuleContext(RangeTypeContext, 0) as RangeTypeContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_castExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(wcpsParser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_fieldName;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterFieldName) {
	 		listener.enterFieldName(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitFieldName) {
	 		listener.exitFieldName(this);
		}
	}
}


export class RangeConstructorExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public rangeConstructorElementList(): RangeConstructorElementListContext {
		return this.getTypedRuleContext(RangeConstructorElementListContext, 0) as RangeConstructorElementListContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorExpression) {
	 		listener.enterRangeConstructorExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorExpression) {
	 		listener.exitRangeConstructorExpression(this);
		}
	}
}


export class RangeConstructorElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorElement) {
	 		listener.enterRangeConstructorElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorElement) {
	 		listener.exitRangeConstructorElement(this);
		}
	}
}


export class RangeConstructorElementListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rangeConstructorElement_list(): RangeConstructorElementContext[] {
		return this.getTypedRuleContexts(RangeConstructorElementContext) as RangeConstructorElementContext[];
	}
	public rangeConstructorElement(i: number): RangeConstructorElementContext {
		return this.getTypedRuleContext(RangeConstructorElementContext, i) as RangeConstructorElementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorElementList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorElementList) {
	 		listener.enterRangeConstructorElementList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorElementList) {
	 		listener.exitRangeConstructorElementList(this);
		}
	}
}


export class RangeConstructorSwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public fieldName_list(): FieldNameContext[] {
		return this.getTypedRuleContexts(FieldNameContext) as FieldNameContext[];
	}
	public fieldName(i: number): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, i) as FieldNameContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.COLON, i);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorSwitchCaseExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorSwitchCaseExpression) {
	 		listener.enterRangeConstructorSwitchCaseExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorSwitchCaseExpression) {
	 		listener.exitRangeConstructorSwitchCaseExpression(this);
		}
	}
}


export class DimensionPointListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimensionPointElement_list(): DimensionPointElementContext[] {
		return this.getTypedRuleContexts(DimensionPointElementContext) as DimensionPointElementContext[];
	}
	public dimensionPointElement(i: number): DimensionPointElementContext {
		return this.getTypedRuleContext(DimensionPointElementContext, i) as DimensionPointElementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionPointList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionPointList) {
	 		listener.enterDimensionPointList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionPointList) {
	 		listener.exitDimensionPointList(this);
		}
	}
}


export class DimensionPointElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionPointElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionPointElement) {
	 		listener.enterDimensionPointElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionPointElement) {
	 		listener.exitDimensionPointElement(this);
		}
	}
}


export class DimensionIntervalListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimensionIntervalElement_list(): DimensionIntervalElementContext[] {
		return this.getTypedRuleContexts(DimensionIntervalElementContext) as DimensionIntervalElementContext[];
	}
	public dimensionIntervalElement(i: number): DimensionIntervalElementContext {
		return this.getTypedRuleContext(DimensionIntervalElementContext, i) as DimensionIntervalElementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionIntervalList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionIntervalList) {
	 		listener.enterDimensionIntervalList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionIntervalList) {
	 		listener.exitDimensionIntervalList(this);
		}
	}
}


export class ScaleDimensionPointElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public scalarExpression(): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, 0) as ScalarExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionPointElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionPointElement) {
	 		listener.enterScaleDimensionPointElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionPointElement) {
	 		listener.exitScaleDimensionPointElement(this);
		}
	}
}


export class ScaleDimensionPointListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scaleDimensionPointElement_list(): ScaleDimensionPointElementContext[] {
		return this.getTypedRuleContexts(ScaleDimensionPointElementContext) as ScaleDimensionPointElementContext[];
	}
	public scaleDimensionPointElement(i: number): ScaleDimensionPointElementContext {
		return this.getTypedRuleContext(ScaleDimensionPointElementContext, i) as ScaleDimensionPointElementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionPointList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionPointList) {
	 		listener.enterScaleDimensionPointList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionPointList) {
	 		listener.exitScaleDimensionPointList(this);
		}
	}
}


export class ScaleDimensionIntervalListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scaleDimensionIntervalElement_list(): ScaleDimensionIntervalElementContext[] {
		return this.getTypedRuleContexts(ScaleDimensionIntervalElementContext) as ScaleDimensionIntervalElementContext[];
	}
	public scaleDimensionIntervalElement(i: number): ScaleDimensionIntervalElementContext {
		return this.getTypedRuleContext(ScaleDimensionIntervalElementContext, i) as ScaleDimensionIntervalElementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionIntervalList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionIntervalList) {
	 		listener.enterScaleDimensionIntervalList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionIntervalList) {
	 		listener.exitScaleDimensionIntervalList(this);
		}
	}
}


export class ScaleDimensionIntervalElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public scalarExpression_list(): ScalarExpressionContext[] {
		return this.getTypedRuleContexts(ScalarExpressionContext) as ScalarExpressionContext[];
	}
	public scalarExpression(i: number): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, i) as ScalarExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionIntervalElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionIntervalElement) {
	 		listener.enterScaleDimensionIntervalElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionIntervalElement) {
	 		listener.exitScaleDimensionIntervalElement(this);
		}
	}
}


export class DimensionBoundConcatenationElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(wcpsParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionBoundConcatenationElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionBoundConcatenationElement) {
	 		listener.enterDimensionBoundConcatenationElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionBoundConcatenationElement) {
	 		listener.exitDimensionBoundConcatenationElement(this);
		}
	}
}


export class DimensionIntervalElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public dimensionBoundConcatenationElement_list(): DimensionBoundConcatenationElementContext[] {
		return this.getTypedRuleContexts(DimensionBoundConcatenationElementContext) as DimensionBoundConcatenationElementContext[];
	}
	public dimensionBoundConcatenationElement(i: number): DimensionBoundConcatenationElementContext {
		return this.getTypedRuleContext(DimensionBoundConcatenationElementContext, i) as DimensionBoundConcatenationElementContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.COLON, i);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainByDimensionExpressionContext, 0) as ImageCrsDomainByDimensionExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionIntervalElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionIntervalElement) {
	 		listener.enterDimensionIntervalElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionIntervalElement) {
	 		listener.exitDimensionIntervalElement(this);
		}
	}
}


export class TimeIntervalElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimensionBoundConcatenationElement_list(): DimensionBoundConcatenationElementContext[] {
		return this.getTypedRuleContexts(DimensionBoundConcatenationElementContext) as DimensionBoundConcatenationElementContext[];
	}
	public dimensionBoundConcatenationElement(i: number): DimensionBoundConcatenationElementContext {
		return this.getTypedRuleContext(DimensionBoundConcatenationElementContext, i) as DimensionBoundConcatenationElementContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public domainExpression(): DomainExpressionContext {
		return this.getTypedRuleContext(DomainExpressionContext, 0) as DomainExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_timeIntervalElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTimeIntervalElement) {
	 		listener.enterTimeIntervalElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTimeIntervalElement) {
	 		listener.exitTimeIntervalElement(this);
		}
	}
}


export class TimeExtractorElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YEARS(): TerminalNode {
		return this.getToken(wcpsParser.YEARS, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public timeIntervalElement(): TimeIntervalElementContext {
		return this.getTypedRuleContext(TimeIntervalElementContext, 0) as TimeIntervalElementContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public MONTHS(): TerminalNode {
		return this.getToken(wcpsParser.MONTHS, 0);
	}
	public DAYS(): TerminalNode {
		return this.getToken(wcpsParser.DAYS, 0);
	}
	public HOURS(): TerminalNode {
		return this.getToken(wcpsParser.HOURS, 0);
	}
	public MINUTES(): TerminalNode {
		return this.getToken(wcpsParser.MINUTES, 0);
	}
	public SECONDS(): TerminalNode {
		return this.getToken(wcpsParser.SECONDS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_timeExtractorElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTimeExtractorElement) {
	 		listener.enterTimeExtractorElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTimeExtractorElement) {
	 		listener.exitTimeExtractorElement(this);
		}
	}
}


export class TimeTruncatorElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL_YEARS(): TerminalNode {
		return this.getToken(wcpsParser.ALL_YEARS, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public timeIntervalElement(): TimeIntervalElementContext {
		return this.getTypedRuleContext(TimeIntervalElementContext, 0) as TimeIntervalElementContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public ALL_MONTHS(): TerminalNode {
		return this.getToken(wcpsParser.ALL_MONTHS, 0);
	}
	public ALL_DAYS(): TerminalNode {
		return this.getToken(wcpsParser.ALL_DAYS, 0);
	}
	public ALL_HOURS(): TerminalNode {
		return this.getToken(wcpsParser.ALL_HOURS, 0);
	}
	public ALL_MINUTES(): TerminalNode {
		return this.getToken(wcpsParser.ALL_MINUTES, 0);
	}
	public ALL_SECONDS(): TerminalNode {
		return this.getToken(wcpsParser.ALL_SECONDS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_timeTruncatorElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTimeTruncatorElement) {
	 		listener.enterTimeTruncatorElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTimeTruncatorElement) {
	 		listener.exitTimeTruncatorElement(this);
		}
	}
}


export class WktPointsContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPoints;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktPoints) {
	 		listener.enterWktPoints(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktPoints) {
	 		listener.exitWktPoints(this);
		}
	}
}


export class WktPointElementListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public wktPoints_list(): WktPointsContext[] {
		return this.getTypedRuleContexts(WktPointsContext) as WktPointsContext[];
	}
	public wktPoints(i: number): WktPointsContext {
		return this.getTypedRuleContext(WktPointsContext, i) as WktPointsContext;
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPointElementList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktPointElementList) {
	 		listener.enterWktPointElementList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktPointElementList) {
	 		listener.exitWktPointElementList(this);
		}
	}
}


export class WktLineStringContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LINESTRING(): TerminalNode {
		return this.getToken(wcpsParser.LINESTRING, 0);
	}
	public wktPointElementList(): WktPointElementListContext {
		return this.getTypedRuleContext(WktPointElementListContext, 0) as WktPointElementListContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktLineString;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktLineString) {
	 		listener.enterWktLineString(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktLineString) {
	 		listener.exitWktLineString(this);
		}
	}
}


export class WktPolygonContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POLYGON(): TerminalNode {
		return this.getToken(wcpsParser.POLYGON, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public wktPointElementList(): WktPointElementListContext {
		return this.getTypedRuleContext(WktPointElementListContext, 0) as WktPointElementListContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPolygon;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktPolygon) {
	 		listener.enterWktPolygon(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktPolygon) {
	 		listener.exitWktPolygon(this);
		}
	}
}


export class WktMultipolygonContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MULTIPOLYGON(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPOLYGON, 0);
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public wktPointElementList_list(): WktPointElementListContext[] {
		return this.getTypedRuleContexts(WktPointElementListContext) as WktPointElementListContext[];
	}
	public wktPointElementList(i: number): WktPointElementListContext {
		return this.getTypedRuleContext(WktPointElementListContext, i) as WktPointElementListContext;
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktMultipolygon;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktMultipolygon) {
	 		listener.enterWktMultipolygon(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktMultipolygon) {
	 		listener.exitWktMultipolygon(this);
		}
	}
}


export class WktCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktCoverageExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktCoverageExpression) {
	 		listener.enterWktCoverageExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktCoverageExpression) {
	 		listener.exitWktCoverageExpression(this);
		}
	}
}


export class WktExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public wktPolygon(): WktPolygonContext {
		return this.getTypedRuleContext(WktPolygonContext, 0) as WktPolygonContext;
	}
	public wktLineString(): WktLineStringContext {
		return this.getTypedRuleContext(WktLineStringContext, 0) as WktLineStringContext;
	}
	public wktMultipolygon(): WktMultipolygonContext {
		return this.getTypedRuleContext(WktMultipolygonContext, 0) as WktMultipolygonContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktExpression) {
	 		listener.enterWktExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktExpression) {
	 		listener.exitWktExpression(this);
		}
	}
}


export class CurtainProjectionAxisLabel1Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_curtainProjectionAxisLabel1;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCurtainProjectionAxisLabel1) {
	 		listener.enterCurtainProjectionAxisLabel1(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCurtainProjectionAxisLabel1) {
	 		listener.exitCurtainProjectionAxisLabel1(this);
		}
	}
}


export class CurtainProjectionAxisLabel2Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_curtainProjectionAxisLabel2;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCurtainProjectionAxisLabel2) {
	 		listener.enterCurtainProjectionAxisLabel2(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCurtainProjectionAxisLabel2) {
	 		listener.exitCurtainProjectionAxisLabel2(this);
		}
	}
}


export class ClipCurtainExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLIP(): TerminalNode {
		return this.getToken(wcpsParser.CLIP, 0);
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public CURTAIN(): TerminalNode {
		return this.getToken(wcpsParser.CURTAIN, 0);
	}
	public PROJECTION(): TerminalNode {
		return this.getToken(wcpsParser.PROJECTION, 0);
	}
	public curtainProjectionAxisLabel1(): CurtainProjectionAxisLabel1Context {
		return this.getTypedRuleContext(CurtainProjectionAxisLabel1Context, 0) as CurtainProjectionAxisLabel1Context;
	}
	public curtainProjectionAxisLabel2(): CurtainProjectionAxisLabel2Context {
		return this.getTypedRuleContext(CurtainProjectionAxisLabel2Context, 0) as CurtainProjectionAxisLabel2Context;
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public wktExpression(): WktExpressionContext {
		return this.getTypedRuleContext(WktExpressionContext, 0) as WktExpressionContext;
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipCurtainExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipCurtainExpression) {
	 		listener.enterClipCurtainExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipCurtainExpression) {
	 		listener.exitClipCurtainExpression(this);
		}
	}
}


export class CorridorProjectionAxisLabel1Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_corridorProjectionAxisLabel1;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCorridorProjectionAxisLabel1) {
	 		listener.enterCorridorProjectionAxisLabel1(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCorridorProjectionAxisLabel1) {
	 		listener.exitCorridorProjectionAxisLabel1(this);
		}
	}
}


export class CorridorProjectionAxisLabel2Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_corridorProjectionAxisLabel2;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCorridorProjectionAxisLabel2) {
	 		listener.enterCorridorProjectionAxisLabel2(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCorridorProjectionAxisLabel2) {
	 		listener.exitCorridorProjectionAxisLabel2(this);
		}
	}
}


export class CorridorWKTLabel1Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wktExpression(): WktExpressionContext {
		return this.getTypedRuleContext(WktExpressionContext, 0) as WktExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_corridorWKTLabel1;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCorridorWKTLabel1) {
	 		listener.enterCorridorWKTLabel1(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCorridorWKTLabel1) {
	 		listener.exitCorridorWKTLabel1(this);
		}
	}
}


export class CorridorWKTLabel2Context extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wktExpression(): WktExpressionContext {
		return this.getTypedRuleContext(WktExpressionContext, 0) as WktExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_corridorWKTLabel2;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCorridorWKTLabel2) {
	 		listener.enterCorridorWKTLabel2(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCorridorWKTLabel2) {
	 		listener.exitCorridorWKTLabel2(this);
		}
	}
}


export class ClipCorridorExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLIP(): TerminalNode {
		return this.getToken(wcpsParser.CLIP, 0);
	}
	public LEFT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
	}
	public LEFT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public CORRIDOR(): TerminalNode {
		return this.getToken(wcpsParser.CORRIDOR, 0);
	}
	public PROJECTION(): TerminalNode {
		return this.getToken(wcpsParser.PROJECTION, 0);
	}
	public corridorProjectionAxisLabel1(): CorridorProjectionAxisLabel1Context {
		return this.getTypedRuleContext(CorridorProjectionAxisLabel1Context, 0) as CorridorProjectionAxisLabel1Context;
	}
	public corridorProjectionAxisLabel2(): CorridorProjectionAxisLabel2Context {
		return this.getTypedRuleContext(CorridorProjectionAxisLabel2Context, 0) as CorridorProjectionAxisLabel2Context;
	}
	public RIGHT_PARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
	}
	public RIGHT_PARENTHESIS(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
	}
	public corridorWKTLabel1(): CorridorWKTLabel1Context {
		return this.getTypedRuleContext(CorridorWKTLabel1Context, 0) as CorridorWKTLabel1Context;
	}
	public corridorWKTLabel2(): CorridorWKTLabel2Context {
		return this.getTypedRuleContext(CorridorWKTLabel2Context, 0) as CorridorWKTLabel2Context;
	}
	public DISCRETE(): TerminalNode {
		return this.getToken(wcpsParser.DISCRETE, 0);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipCorridorExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipCorridorExpression) {
	 		listener.enterClipCorridorExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipCorridorExpression) {
	 		listener.exitClipCorridorExpression(this);
		}
	}
}


export class ClipWKTExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLIP(): TerminalNode {
		return this.getToken(wcpsParser.CLIP, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public wktExpression(): WktExpressionContext {
		return this.getTypedRuleContext(WktExpressionContext, 0) as WktExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
	public WITH_COORDINATES(): TerminalNode {
		return this.getToken(wcpsParser.WITH_COORDINATES, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipWKTExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipWKTExpression) {
	 		listener.enterClipWKTExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipWKTExpression) {
	 		listener.exitClipWKTExpression(this);
		}
	}
}


export class CrsTransformExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CRS_TRANSFORM(): TerminalNode {
		return this.getToken(wcpsParser.CRS_TRANSFORM, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public dimensionCrsList(): DimensionCrsListContext {
		return this.getTypedRuleContext(DimensionCrsListContext, 0) as DimensionCrsListContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public LEFT_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_BRACE);
	}
	public LEFT_BRACE(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, i);
	}
	public RIGHT_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_BRACE);
	}
	public RIGHT_BRACE(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, i);
	}
	public dimensionGeoXYResolutionsList(): DimensionGeoXYResolutionsListContext {
		return this.getTypedRuleContext(DimensionGeoXYResolutionsListContext, 0) as DimensionGeoXYResolutionsListContext;
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public domainExpression(): DomainExpressionContext {
		return this.getTypedRuleContext(DomainExpressionContext, 0) as DomainExpressionContext;
	}
	public interpolationType(): InterpolationTypeContext {
		return this.getTypedRuleContext(InterpolationTypeContext, 0) as InterpolationTypeContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_crsTransformExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCrsTransformExpression) {
	 		listener.enterCrsTransformExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCrsTransformExpression) {
	 		listener.exitCrsTransformExpression(this);
		}
	}
}


export class CrsTransformShorthandExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CRS_TRANSFORM(): TerminalNode {
		return this.getToken(wcpsParser.CRS_TRANSFORM, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public LEFT_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.LEFT_BRACE);
	}
	public LEFT_BRACE(i: number): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, i);
	}
	public RIGHT_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.RIGHT_BRACE);
	}
	public RIGHT_BRACE(i: number): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, i);
	}
	public dimensionGeoXYResolutionsList(): DimensionGeoXYResolutionsListContext {
		return this.getTypedRuleContext(DimensionGeoXYResolutionsListContext, 0) as DimensionGeoXYResolutionsListContext;
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public domainExpression(): DomainExpressionContext {
		return this.getTypedRuleContext(DomainExpressionContext, 0) as DomainExpressionContext;
	}
	public interpolationType(): InterpolationTypeContext {
		return this.getTypedRuleContext(InterpolationTypeContext, 0) as InterpolationTypeContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_crsTransformShorthandExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCrsTransformShorthandExpression) {
	 		listener.enterCrsTransformShorthandExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCrsTransformShorthandExpression) {
	 		listener.exitCrsTransformShorthandExpression(this);
		}
	}
}


export class PolygonizeExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POLYGONIZE(): TerminalNode {
		return this.getToken(wcpsParser.POLYGONIZE, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(wcpsParser.INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_polygonizeExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterPolygonizeExpression) {
	 		listener.enterPolygonizeExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitPolygonizeExpression) {
	 		listener.exitPolygonizeExpression(this);
		}
	}
}


export class DimensionCrsListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public dimensionCrsElement_list(): DimensionCrsElementContext[] {
		return this.getTypedRuleContexts(DimensionCrsElementContext) as DimensionCrsElementContext[];
	}
	public dimensionCrsElement(i: number): DimensionCrsElementContext {
		return this.getTypedRuleContext(DimensionCrsElementContext, i) as DimensionCrsElementContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionCrsList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionCrsList) {
	 		listener.enterDimensionCrsList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionCrsList) {
	 		listener.exitDimensionCrsList(this);
		}
	}
}


export class DimensionGeoXYResolutionsListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimensionGeoXYResolution_list(): DimensionGeoXYResolutionContext[] {
		return this.getTypedRuleContexts(DimensionGeoXYResolutionContext) as DimensionGeoXYResolutionContext[];
	}
	public dimensionGeoXYResolution(i: number): DimensionGeoXYResolutionContext {
		return this.getTypedRuleContext(DimensionGeoXYResolutionContext, i) as DimensionGeoXYResolutionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionGeoXYResolutionsList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionGeoXYResolutionsList) {
	 		listener.enterDimensionGeoXYResolutionsList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionGeoXYResolutionsList) {
	 		listener.exitDimensionGeoXYResolutionsList(this);
		}
	}
}


export class DimensionGeoXYResolutionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionGeoXYResolution;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionGeoXYResolution) {
	 		listener.enterDimensionGeoXYResolution(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionGeoXYResolution) {
	 		listener.exitDimensionGeoXYResolution(this);
		}
	}
}


export class DimensionCrsElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
	public crsName(): CrsNameContext {
		return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionCrsElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionCrsElement) {
	 		listener.enterDimensionCrsElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionCrsElement) {
	 		listener.exitDimensionCrsElement(this);
		}
	}
}


export class InterpolationTypeContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_interpolationType;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterInterpolationType) {
	 		listener.enterInterpolationType(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitInterpolationType) {
	 		listener.exitInterpolationType(this);
		}
	}
}


export class CoverageConstructorExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE, 0);
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(wcpsParser.OVER, 0);
	}
	public axisIterator_list(): AxisIteratorContext[] {
		return this.getTypedRuleContexts(AxisIteratorContext) as AxisIteratorContext[];
	}
	public axisIterator(i: number): AxisIteratorContext {
		return this.getTypedRuleContext(AxisIteratorContext, i) as AxisIteratorContext;
	}
	public VALUES(): TerminalNode {
		return this.getToken(wcpsParser.VALUES, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageConstructorExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageConstructorExpression) {
	 		listener.enterCoverageConstructorExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageConstructorExpression) {
	 		listener.exitCoverageConstructorExpression(this);
		}
	}
}


export class AxisIteratorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.COLON, i);
	}
	public regularTimeStep(): RegularTimeStepContext {
		return this.getTypedRuleContext(RegularTimeStepContext, 0) as RegularTimeStepContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(wcpsParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(wcpsParser.DESC, 0);
	}
	public dimensionBoundConcatenationElement_list(): DimensionBoundConcatenationElementContext[] {
		return this.getTypedRuleContexts(DimensionBoundConcatenationElementContext) as DimensionBoundConcatenationElementContext[];
	}
	public dimensionBoundConcatenationElement(i: number): DimensionBoundConcatenationElementContext {
		return this.getTypedRuleContext(DimensionBoundConcatenationElementContext, i) as DimensionBoundConcatenationElementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_axisIterator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisIterator) {
	 		listener.enterAxisIterator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisIterator) {
	 		listener.exitAxisIterator(this);
		}
	}
}


export class RegularTimeStepContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_regularTimeStep;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRegularTimeStep) {
	 		listener.enterRegularTimeStep(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRegularTimeStep) {
	 		listener.exitRegularTimeStep(this);
		}
	}
}


export class IntervalExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scalarExpression_list(): ScalarExpressionContext[] {
		return this.getTypedRuleContexts(ScalarExpressionContext) as ScalarExpressionContext[];
	}
	public scalarExpression(i: number): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, i) as ScalarExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_intervalExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterIntervalExpression) {
	 		listener.enterIntervalExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitIntervalExpression) {
	 		listener.exitIntervalExpression(this);
		}
	}
}


export class CoverageConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE, 0);
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public OVER(): TerminalNode {
		return this.getToken(wcpsParser.OVER, 0);
	}
	public axisIterator_list(): AxisIteratorContext[] {
		return this.getTypedRuleContexts(AxisIteratorContext) as AxisIteratorContext[];
	}
	public axisIterator(i: number): AxisIteratorContext {
		return this.getTypedRuleContext(AxisIteratorContext, i) as AxisIteratorContext;
	}
	public VALUE(): TerminalNode {
		return this.getToken(wcpsParser.VALUE, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(wcpsParser.LIST, 0);
	}
	public LOWER_THAN(): TerminalNode {
		return this.getToken(wcpsParser.LOWER_THAN, 0);
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(wcpsParser.GREATER_THAN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(wcpsParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageConstantExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageConstantExpression) {
	 		listener.enterCoverageConstantExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageConstantExpression) {
	 		listener.exitCoverageConstantExpression(this);
		}
	}
}


export class AxisSpecContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		return this.getTypedRuleContext(DimensionIntervalElementContext, 0) as DimensionIntervalElementContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_axisSpec;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisSpec) {
	 		listener.enterAxisSpec(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisSpec) {
	 		listener.exitAxisSpec(this);
		}
	}
}


export class CondenseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceExpression(): ReduceExpressionContext {
		return this.getTypedRuleContext(ReduceExpressionContext, 0) as ReduceExpressionContext;
	}
	public generalCondenseExpression(): GeneralCondenseExpressionContext {
		return this.getTypedRuleContext(GeneralCondenseExpressionContext, 0) as GeneralCondenseExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_condenseExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCondenseExpression) {
	 		listener.enterCondenseExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCondenseExpression) {
	 		listener.exitCondenseExpression(this);
		}
	}
}


export class ReduceBooleanExpressionOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(wcpsParser.ALL, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(wcpsParser.SOME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceBooleanExpressionOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceBooleanExpressionOperator) {
	 		listener.enterReduceBooleanExpressionOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceBooleanExpressionOperator) {
	 		listener.exitReduceBooleanExpressionOperator(this);
		}
	}
}


export class ReduceNumericalExpressionOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COUNT(): TerminalNode {
		return this.getToken(wcpsParser.COUNT, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(wcpsParser.ADD, 0);
	}
	public SUM(): TerminalNode {
		return this.getToken(wcpsParser.SUM, 0);
	}
	public AVG(): TerminalNode {
		return this.getToken(wcpsParser.AVG, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(wcpsParser.MIN, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(wcpsParser.MAX, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceNumericalExpressionOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceNumericalExpressionOperator) {
	 		listener.enterReduceNumericalExpressionOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceNumericalExpressionOperator) {
	 		listener.exitReduceNumericalExpressionOperator(this);
		}
	}
}


export class ReduceBooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
		return this.getTypedRuleContext(ReduceBooleanExpressionOperatorContext, 0) as ReduceBooleanExpressionOperatorContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceBooleanExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceBooleanExpression) {
	 		listener.enterReduceBooleanExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceBooleanExpression) {
	 		listener.exitReduceBooleanExpression(this);
		}
	}
}


export class ReduceNumericalExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
		return this.getTypedRuleContext(ReduceNumericalExpressionOperatorContext, 0) as ReduceNumericalExpressionOperatorContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceNumericalExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceNumericalExpression) {
	 		listener.enterReduceNumericalExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceNumericalExpression) {
	 		listener.exitReduceNumericalExpression(this);
		}
	}
}


export class ReduceExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		return this.getTypedRuleContext(ReduceBooleanExpressionContext, 0) as ReduceBooleanExpressionContext;
	}
	public reduceNumericalExpression(): ReduceNumericalExpressionContext {
		return this.getTypedRuleContext(ReduceNumericalExpressionContext, 0) as ReduceNumericalExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceExpression) {
	 		listener.enterReduceExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceExpression) {
	 		listener.exitReduceExpression(this);
		}
	}
}


export class CondenseExpressionOperatorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(wcpsParser.PLUS, 0);
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(wcpsParser.MIN, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(wcpsParser.MAX, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(wcpsParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(wcpsParser.OR, 0);
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(wcpsParser.OVERLAY, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_condenseExpressionOperator;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCondenseExpressionOperator) {
	 		listener.enterCondenseExpressionOperator(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCondenseExpressionOperator) {
	 		listener.exitCondenseExpressionOperator(this);
		}
	}
}


export class GeneralCondenseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONDENSE(): TerminalNode {
		return this.getToken(wcpsParser.CONDENSE, 0);
	}
	public condenseExpressionOperator(): CondenseExpressionOperatorContext {
		return this.getTypedRuleContext(CondenseExpressionOperatorContext, 0) as CondenseExpressionOperatorContext;
	}
	public OVER(): TerminalNode {
		return this.getToken(wcpsParser.OVER, 0);
	}
	public axisIterator_list(): AxisIteratorContext[] {
		return this.getTypedRuleContexts(AxisIteratorContext) as AxisIteratorContext[];
	}
	public axisIterator(i: number): AxisIteratorContext {
		return this.getTypedRuleContext(AxisIteratorContext, i) as AxisIteratorContext;
	}
	public USING(): TerminalNode {
		return this.getToken(wcpsParser.USING, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_generalCondenseExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterGeneralCondenseExpression) {
	 		listener.enterGeneralCondenseExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitGeneralCondenseExpression) {
	 		listener.exitGeneralCondenseExpression(this);
		}
	}
}


export class FlipExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLIP(): TerminalNode {
		return this.getToken(wcpsParser.FLIP, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public ALONG(): TerminalNode {
		return this.getToken(wcpsParser.ALONG, 0);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_flipExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterFlipExpression) {
	 		listener.enterFlipExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitFlipExpression) {
	 		listener.exitFlipExpression(this);
		}
	}
}


export class SortExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SORT(): TerminalNode {
		return this.getToken(wcpsParser.SORT, 0);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public ALONG(): TerminalNode {
		return this.getToken(wcpsParser.ALONG, 0);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public BY(): TerminalNode {
		return this.getToken(wcpsParser.BY, 0);
	}
	public sortingOrder(): SortingOrderContext {
		return this.getTypedRuleContext(SortingOrderContext, 0) as SortingOrderContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_sortExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSortExpression) {
	 		listener.enterSortExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSortExpression) {
	 		listener.exitSortExpression(this);
		}
	}
}


export class SwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(wcpsParser.SWITCH, 0);
	}
	public switchCaseElementList(): SwitchCaseElementListContext {
		return this.getTypedRuleContext(SwitchCaseElementListContext, 0) as SwitchCaseElementListContext;
	}
	public switchCaseDefaultElement(): SwitchCaseDefaultElementContext {
		return this.getTypedRuleContext(SwitchCaseDefaultElementContext, 0) as SwitchCaseDefaultElementContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_switchCaseExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSwitchCaseExpression) {
	 		listener.enterSwitchCaseExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSwitchCaseExpression) {
	 		listener.exitSwitchCaseExpression(this);
		}
	}
}


export class SwitchCaseElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(wcpsParser.CASE, 0);
	}
	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext {
		return this.getTypedRuleContext(BooleanSwitchCaseCombinedExpressionContext, 0) as BooleanSwitchCaseCombinedExpressionContext;
	}
	public RETURN(): TerminalNode {
		return this.getToken(wcpsParser.RETURN, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_switchCaseElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSwitchCaseElement) {
	 		listener.enterSwitchCaseElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSwitchCaseElement) {
	 		listener.exitSwitchCaseElement(this);
		}
	}
}


export class SwitchCaseElementListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchCaseElement_list(): SwitchCaseElementContext[] {
		return this.getTypedRuleContexts(SwitchCaseElementContext) as SwitchCaseElementContext[];
	}
	public switchCaseElement(i: number): SwitchCaseElementContext {
		return this.getTypedRuleContext(SwitchCaseElementContext, i) as SwitchCaseElementContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_switchCaseElementList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSwitchCaseElementList) {
	 		listener.enterSwitchCaseElementList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSwitchCaseElementList) {
	 		listener.exitSwitchCaseElementList(this);
		}
	}
}


export class SwitchCaseDefaultElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(wcpsParser.DEFAULT, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(wcpsParser.RETURN, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_switchCaseDefaultElement;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSwitchCaseDefaultElement) {
	 		listener.enterSwitchCaseDefaultElement(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSwitchCaseDefaultElement) {
	 		listener.exitSwitchCaseDefaultElement(this);
		}
	}
}


export class CrsNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_crsName;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCrsName) {
	 		listener.enterCrsName(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCrsName) {
	 		listener.exitCrsName(this);
		}
	}
}


export class AxisNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_axisName;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisName) {
	 		listener.enterAxisName(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisName) {
	 		listener.exitAxisName(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(wcpsParser.INTEGER, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
	public REAL_NUMBER_CONSTANT(): TerminalNode {
		return this.getToken(wcpsParser.REAL_NUMBER_CONSTANT, 0);
	}
	public SCIENTIFIC_NUMBER_CONSTANT(): TerminalNode {
		return this.getToken(wcpsParser.SCIENTIFIC_NUMBER_CONSTANT, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_number;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(wcpsParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(wcpsParser.FALSE, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(wcpsParser.MINUS, 0);
	}
	public complexNumberConstant(): ComplexNumberConstantContext {
		return this.getTypedRuleContext(ComplexNumberConstantContext, 0) as ComplexNumberConstantContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_constant;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
}


export class SortingOrderContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASC(): TerminalNode {
		return this.getToken(wcpsParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(wcpsParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_sortingOrder;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSortingOrder) {
	 		listener.enterSortingOrder(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSortingOrder) {
	 		listener.exitSortingOrder(this);
		}
	}
}


export class CoverageExpressionListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpressionList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionList) {
	 		listener.enterCoverageExpressionList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionList) {
	 		listener.exitCoverageExpressionList(this);
		}
	}
}


export class UdfNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_VARIABLE_NAME_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COVERAGE_VARIABLE_NAME);
	}
	public COVERAGE_VARIABLE_NAME(i: number): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(wcpsParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_udfName;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUdfName) {
	 		listener.enterUdfName(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUdfName) {
	 		listener.exitUdfName(this);
		}
	}
}


export class UdfExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public udfName(): UdfNameContext {
		return this.getTypedRuleContext(UdfNameContext, 0) as UdfNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public coverageExpressionList(): CoverageExpressionListContext {
		return this.getTypedRuleContext(CoverageExpressionListContext, 0) as CoverageExpressionListContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_udfExpression;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUdfExpression) {
	 		listener.enterUdfExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUdfExpression) {
	 		listener.exitUdfExpression(this);
		}
	}
}


export class QualifiedCoverageIdentifierContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COVERAGE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_NAME, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_qualifiedCoverageIdentifier;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterQualifiedCoverageIdentifier) {
	 		listener.enterQualifiedCoverageIdentifier(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitQualifiedCoverageIdentifier) {
	 		listener.exitQualifiedCoverageIdentifier(this);
		}
	}
}


export class NullClauseContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(wcpsParser.VALUES, 0);
	}
	public nullSetMemberList_list(): NullSetMemberListContext[] {
		return this.getTypedRuleContexts(NullSetMemberListContext) as NullSetMemberListContext[];
	}
	public nullSetMemberList(i: number): NullSetMemberListContext {
		return this.getTypedRuleContext(NullSetMemberListContext, i) as NullSetMemberListContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullClause;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullClause) {
	 		listener.enterNullClause(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullClause) {
	 		listener.exitNullClause(this);
		}
	}
}


export class NullSetFromContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public VALUES(): TerminalNode {
		return this.getToken(wcpsParser.VALUES, 0);
	}
	public NULLSET(): TerminalNode {
		return this.getToken(wcpsParser.NULLSET, 0);
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullSetFrom;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullSetFrom) {
	 		listener.enterNullSetFrom(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullSetFrom) {
	 		listener.exitNullSetFrom(this);
		}
	}
}


export class NullSetMemberListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACKET, 0);
	}
	public nullSetMember_list(): NullSetMemberContext[] {
		return this.getTypedRuleContexts(NullSetMemberContext) as NullSetMemberContext[];
	}
	public nullSetMember(i: number): NullSetMemberContext {
		return this.getTypedRuleContext(NullSetMemberContext, i) as NullSetMemberContext;
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(wcpsParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(wcpsParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullSetMemberList;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullSetMemberList) {
	 		listener.enterNullSetMemberList(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullSetMemberList) {
	 		listener.exitNullSetMemberList(this);
		}
	}
}


export class NullSetMemberContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nullSetMemberValue_list(): NullSetMemberValueContext[] {
		return this.getTypedRuleContexts(NullSetMemberValueContext) as NullSetMemberValueContext[];
	}
	public nullSetMemberValue(i: number): NullSetMemberValueContext {
		return this.getTypedRuleContext(NullSetMemberValueContext, i) as NullSetMemberValueContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullSetMember;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullSetMember) {
	 		listener.enterNullSetMember(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullSetMember) {
	 		listener.exitNullSetMember(this);
		}
	}
}


export class NullSetMemberValueContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullSetMemberValue;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullSetMemberValue) {
	 		listener.enterNullSetMemberValue(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullSetMemberValue) {
	 		listener.exitNullSetMemberValue(this);
		}
	}
}


export class NullMaskContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public MASK(): TerminalNode {
		return this.getToken(wcpsParser.MASK, 0);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullMask;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullMask) {
	 		listener.enterNullMask(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullMask) {
	 		listener.exitNullMask(this);
		}
	}
}


export class NullMaskDiscardContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(wcpsParser.NULL, 0);
	}
	public MASK(): TerminalNode {
		return this.getToken(wcpsParser.MASK, 0);
	}
	public DISCARD(): TerminalNode {
		return this.getToken(wcpsParser.DISCARD, 0);
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_nullMaskDiscard;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNullMaskDiscard) {
	 		listener.enterNullMaskDiscard(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNullMaskDiscard) {
	 		listener.exitNullMaskDiscard(this);
		}
	}
}

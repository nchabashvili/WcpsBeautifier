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
	public static readonly RULE_coverageExpression = 46;
	public static readonly RULE_coverageArithmeticOperator = 47;
	public static readonly RULE_unaryArithmeticExpressionOperator = 48;
	public static readonly RULE_unaryArithmeticExpression = 49;
	public static readonly RULE_trigonometricExpression = 50;
	public static readonly RULE_exponentialExpressionOperator = 51;
	public static readonly RULE_exponentialExpression = 52;
	public static readonly RULE_unaryPowerExpression = 53;
	public static readonly RULE_unaryModExpression = 54;
	public static readonly RULE_minBinaryExpression = 55;
	public static readonly RULE_maxBinaryExpression = 56;
	public static readonly RULE_unaryBooleanExpression = 57;
	public static readonly RULE_rangeType = 58;
	public static readonly RULE_castExpression = 59;
	public static readonly RULE_fieldName = 60;
	public static readonly RULE_rangeConstructorExpression = 61;
	public static readonly RULE_rangeConstructorElement = 62;
	public static readonly RULE_rangeConstructorElementList = 63;
	public static readonly RULE_rangeConstructorSwitchCaseExpression = 64;
	public static readonly RULE_dimensionPointList = 65;
	public static readonly RULE_dimensionPointElement = 66;
	public static readonly RULE_dimensionIntervalList = 67;
	public static readonly RULE_scaleDimensionPointElement = 68;
	public static readonly RULE_scaleDimensionPointList = 69;
	public static readonly RULE_scaleDimensionIntervalList = 70;
	public static readonly RULE_scaleDimensionIntervalElement = 71;
	public static readonly RULE_dimensionBoundConcatenationElement = 72;
	public static readonly RULE_dimensionIntervalElement = 73;
	public static readonly RULE_timeIntervalElement = 74;
	public static readonly RULE_timeExtractorElement = 75;
	public static readonly RULE_timeTruncatorElement = 76;
	public static readonly RULE_wktPoints = 77;
	public static readonly RULE_wktPointElementList = 78;
	public static readonly RULE_wktLineString = 79;
	public static readonly RULE_wktPolygon = 80;
	public static readonly RULE_wktMultipolygon = 81;
	public static readonly RULE_wktCoverageExpression = 82;
	public static readonly RULE_wktExpression = 83;
	public static readonly RULE_curtainProjectionAxisLabel1 = 84;
	public static readonly RULE_curtainProjectionAxisLabel2 = 85;
	public static readonly RULE_clipCurtainExpression = 86;
	public static readonly RULE_corridorProjectionAxisLabel1 = 87;
	public static readonly RULE_corridorProjectionAxisLabel2 = 88;
	public static readonly RULE_corridorWKTLabel1 = 89;
	public static readonly RULE_corridorWKTLabel2 = 90;
	public static readonly RULE_clipCorridorExpression = 91;
	public static readonly RULE_clipWKTExpression = 92;
	public static readonly RULE_crsTransformExpression = 93;
	public static readonly RULE_crsTransformShorthandExpression = 94;
	public static readonly RULE_polygonizeExpression = 95;
	public static readonly RULE_dimensionCrsList = 96;
	public static readonly RULE_dimensionGeoXYResolutionsList = 97;
	public static readonly RULE_dimensionGeoXYResolution = 98;
	public static readonly RULE_dimensionCrsElement = 99;
	public static readonly RULE_interpolationType = 100;
	public static readonly RULE_coverageConstructorExpression = 101;
	public static readonly RULE_axisIterator = 102;
	public static readonly RULE_regularTimeStep = 103;
	public static readonly RULE_intervalExpression = 104;
	public static readonly RULE_coverageConstantExpression = 105;
	public static readonly RULE_axisSpec = 106;
	public static readonly RULE_condenseExpression = 107;
	public static readonly RULE_reduceBooleanExpressionOperator = 108;
	public static readonly RULE_reduceNumericalExpressionOperator = 109;
	public static readonly RULE_reduceBooleanExpression = 110;
	public static readonly RULE_reduceNumericalExpression = 111;
	public static readonly RULE_reduceExpression = 112;
	public static readonly RULE_condenseExpressionOperator = 113;
	public static readonly RULE_generalCondenseExpression = 114;
	public static readonly RULE_flipExpression = 115;
	public static readonly RULE_sortExpression = 116;
	public static readonly RULE_switchCaseExpression = 117;
	public static readonly RULE_switchCaseElement = 118;
	public static readonly RULE_switchCaseElementList = 119;
	public static readonly RULE_switchCaseDefaultElement = 120;
	public static readonly RULE_crsName = 121;
	public static readonly RULE_axisName = 122;
	public static readonly RULE_number = 123;
	public static readonly RULE_constant = 124;
	public static readonly RULE_sortingOrder = 125;
	public static readonly RULE_coverageExpressionList = 126;
	public static readonly RULE_udfName = 127;
	public static readonly RULE_udfExpression = 128;
	public static readonly RULE_qualifiedCoverageIdentifier = 129;
	public static readonly RULE_nullClause = 130;
	public static readonly RULE_nullSetFrom = 131;
	public static readonly RULE_nullSetMemberList = 132;
	public static readonly RULE_nullSetMember = 133;
	public static readonly RULE_nullSetMemberValue = 134;
	public static readonly RULE_nullMask = 135;
	public static readonly RULE_nullMaskDiscard = 136;
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
		"decodeCoverageExpression", "coverageExpression", "coverageArithmeticOperator", 
		"unaryArithmeticExpressionOperator", "unaryArithmeticExpression", "trigonometricExpression", 
		"exponentialExpressionOperator", "exponentialExpression", "unaryPowerExpression", 
		"unaryModExpression", "minBinaryExpression", "maxBinaryExpression", "unaryBooleanExpression", 
		"rangeType", "castExpression", "fieldName", "rangeConstructorExpression", 
		"rangeConstructorElement", "rangeConstructorElementList", "rangeConstructorSwitchCaseExpression", 
		"dimensionPointList", "dimensionPointElement", "dimensionIntervalList", 
		"scaleDimensionPointElement", "scaleDimensionPointList", "scaleDimensionIntervalList", 
		"scaleDimensionIntervalElement", "dimensionBoundConcatenationElement", 
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
			localctx = new WcpsQueryLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 274;
			this.forClauseList();
			}
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 275;
				this.letClauseList();
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===116) {
				{
				this.state = 278;
				this.whereClause();
				}
			}

			{
			this.state = 281;
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
			this.state = 283;
			this.match(wcpsParser.FOR);
			{
			this.state = 284;
			this.forClause();
			}
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 285;
				this.match(wcpsParser.COMMA);
				this.state = 286;
				this.forClause();
				}
				}
				this.state = 291;
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
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 141:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 292;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 293;
				this.decodeCoverageExpression();
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 294;
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
			this.state = 297;
			this.coverageVariableName();
			this.state = 298;
			this.match(wcpsParser.IN);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 299;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
			}

			this.state = 302;
			this.coverageIdForClause();
			this.state = 307;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 303;
					this.match(wcpsParser.COMMA);
					this.state = 304;
					this.coverageIdForClause();
					}
					}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 310;
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
			this.state = 313;
			this.match(wcpsParser.LET);
			{
			this.state = 314;
			this.letClause();
			}
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 315;
				this.match(wcpsParser.COMMA);
				this.state = 316;
				this.letClause();
				}
				}
				this.state = 321;
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
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 322;
				this.letClauseWithDimensionIntervalList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 323;
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
			this.state = 326;
			this.coverageVariableName();
			this.state = 327;
			this.match(wcpsParser.COLON);
			this.state = 328;
			this.match(wcpsParser.EQUAL);
			this.state = 329;
			this.match(wcpsParser.LEFT_BRACKET);
			this.state = 330;
			this.dimensionIntervalList();
			this.state = 331;
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
			this.state = 333;
			this.coverageVariableName();
			this.state = 334;
			this.match(wcpsParser.COLON);
			this.state = 335;
			this.match(wcpsParser.EQUAL);
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 336;
				this.coverageExpression(0);
				}
				break;
			case 2:
				{
				this.state = 337;
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
			this.state = 340;
			this.match(wcpsParser.WHERE);
			this.state = 342;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 344;
			this.coverageExpression(0);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 345;
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
			this.state = 348;
			this.match(wcpsParser.RETURN);
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 349;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 352;
			this.processingExpression();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 353;
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
			this.state = 356;
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
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 358;
				this.domainExpression();
				}
				break;
			case 2:
				{
				this.state = 359;
				this.imageCrsDomainExpression();
				}
				break;
			case 3:
				{
				this.state = 360;
				this.imageCrsDomainByDimensionExpression();
				}
				break;
			}
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 363;
				this.match(wcpsParser.DOT);
				this.state = 364;
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
			localctx = new GeoXYAxisLabelAndDomainResolutionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 367;
			this.match(wcpsParser.COVERAGE_NAME);
			this.state = 368;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 369;
			this.coverageExpression(0);
			this.state = 370;
			this.match(wcpsParser.COMMA);
			this.state = 371;
			this.axisName();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 372;
				this.match(wcpsParser.COMMA);
				this.state = 373;
				this.crsName();
				}
			}

			this.state = 376;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			{
			this.state = 377;
			this.match(wcpsParser.DOT);
			this.state = 378;
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
			localctx = new CoverageVariableNameLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
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
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 382;
				this.getComponentExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 383;
				this.scalarExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 384;
				this.encodedCoverageExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 385;
				this.scalarValueCoverageExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 386;
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
			localctx = new ScalarValueCoverageExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 389;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 392;
			this.coverageExpression(0);
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 393;
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
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 396;
				this.geoXYAxisLabelAndDomainResolution();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 397;
				this.booleanScalarExpression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 398;
				this.numericalScalarExpression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 399;
				this.stringScalarExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 400;
				this.starExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 401;
				this.domainIntervals();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 402;
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
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				localctx = new BooleanReduceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 406;
				this.reduceBooleanExpression();
				}
				break;
			case 2:
				{
				localctx = new BooleanConstantLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 407;
				this.booleanConstant();
				}
				break;
			case 3:
				{
				localctx = new BooleanUnaryScalarLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 408;
				this.booleanUnaryOperator();
				this.state = 410;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 409;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					break;
				}
				this.state = 412;
				this.booleanScalarExpression(0);
				this.state = 414;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 413;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				break;
			case 4:
				{
				localctx = new BooleanNumericalComparisonScalarLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 416;
				this.numericalScalarExpression(0);
				this.state = 417;
				this.numericalComparissonOperator();
				this.state = 418;
				this.numericalScalarExpression(0);
				}
				break;
			case 5:
				{
				localctx = new BooleanReduceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 420;
				this.reduceBooleanExpression();
				}
				break;
			case 6:
				{
				localctx = new BooleanStringComparisonScalarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 421;
				this.stringScalarExpression();
				this.state = 422;
				this.stringOperator();
				this.state = 423;
				this.stringScalarExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 433;
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
					localctx = new BooleanBinaryScalarLabelContext(this, new BooleanScalarExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_booleanScalarExpression);
					this.state = 427;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 428;
					this.booleanOperator();
					this.state = 429;
					this.booleanScalarExpression(5);
					}
					}
				}
				this.state = 435;
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
			this.state = 436;
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
			this.state = 438;
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
			this.state = 440;
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
			this.state = 442;
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
			this.state = 444;
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
			localctx = new StringScalarExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 446;
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
			localctx = new StarExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
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
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 453;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 450;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 455;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 456;
				this.coverageExpression(0);
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===93) {
					{
					{
					this.state = 457;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
					this.state = 462;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 463;
				this.numericalComparissonOperator();
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 464;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 469;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 470;
				this.coverageExpression(0);
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 471;
						this.match(wcpsParser.RIGHT_PARENTHESIS);
						}
						}
					}
					this.state = 476;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 477;
				this.coverageExpression(0);
				this.state = 478;
				this.match(wcpsParser.IS);
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===75) {
					{
					this.state = 479;
					this.match(wcpsParser.NOT);
					}
				}

				this.state = 482;
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
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 487;
				this.booleanSwitchCaseCoverageExpression();
				this.state = 488;
				this.booleanOperator();
				this.state = 489;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;
			case 2:
				{
				this.state = 491;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 500;
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
					this.state = 494;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 495;
					this.booleanOperator();
					this.state = 496;
					this.booleanSwitchCaseCombinedExpression(2);
					}
					}
				}
				this.state = 502;
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
			this.state = 518;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				localctx = new NumericalUnaryScalarExpressionLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 504;
				this.numericalUnaryOperation();
				this.state = 505;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 506;
				this.numericalScalarExpression(0);
				this.state = 507;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				{
				localctx = new NumericalTrigonometricScalarExpressionLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 509;
				this.trigonometricOperator();
				this.state = 510;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 511;
				this.numericalScalarExpression(0);
				this.state = 512;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				{
				localctx = new NumericalCondenseExpressionLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 514;
				this.condenseExpression();
				}
				break;
			case 4:
				{
				localctx = new NumericalRealNumberExpressionLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 515;
				this.number_();
				}
				break;
			case 5:
				{
				localctx = new NumericalNanNumberExpressionLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 516;
				this.match(wcpsParser.NAN_NUMBER_CONSTANT);
				}
				break;
			case 6:
				{
				localctx = new NumericalComplexNumberConstantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 517;
				this.complexNumberConstant();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 526;
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
					localctx = new NumericalBinaryScalarExpressionLabelContext(this, new NumericalScalarExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_numericalScalarExpression);
					this.state = 520;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 521;
					this.numericalOperator();
					this.state = 522;
					this.numericalScalarExpression(6);
					}
					}
				}
				this.state = 528;
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
			localctx = new ComplexNumberConstantLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 529;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 530;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 531;
			this.match(wcpsParser.COMMA);
			this.state = 532;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 533;
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
			this.state = 535;
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
			this.state = 537;
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
			this.state = 539;
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
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 541;
				this.coverageIdentifierExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 542;
				this.coverageCrsSetExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 543;
				this.domainExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 544;
				this.imageCrsDomainExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 545;
				this.imageCrsDomainByDimensionExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 546;
				this.imageCrsExpression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 547;
				this.cellCountExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 548;
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
			localctx = new CoverageExpressionNullSetRetrievingLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 551;
			this.match(wcpsParser.NULLSET);
			this.state = 552;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 553;
			this.coverageExpression(0);
			this.state = 554;
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
			localctx = new CoverageIdentifierExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 556;
			this.match(wcpsParser.IDENTIFIER);
			this.state = 557;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 558;
			this.coverageExpression(0);
			this.state = 559;
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
			localctx = new CellCountExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this.match(wcpsParser.CELLCOUNT);
			this.state = 562;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 563;
			this.coverageExpression(0);
			this.state = 564;
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
			localctx = new CoverageCrsSetExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 566;
			this.match(wcpsParser.CRSSET);
			this.state = 567;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 568;
			this.coverageExpression(0);
			this.state = 569;
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
			localctx = new DomainExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			this.match(wcpsParser.DOMAIN);
			this.state = 572;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 573;
			this.coverageExpression(0);
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 574;
				this.match(wcpsParser.COMMA);
				this.state = 575;
				this.axisName();
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 576;
					this.match(wcpsParser.COMMA);
					this.state = 577;
					this.crsName();
					}
				}

				}
			}

			this.state = 582;
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
			localctx = new ImageCrsDomainByDimensionExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 584;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 585;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 586;
			this.coverageExpression(0);
			this.state = 587;
			this.match(wcpsParser.COMMA);
			this.state = 588;
			this.axisName();
			this.state = 589;
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
			localctx = new ImageCrsDomainExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 591;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 592;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 593;
			this.coverageExpression(0);
			this.state = 594;
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
			localctx = new ImageCrsExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this.match(wcpsParser.IMAGECRS);
			this.state = 597;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 598;
			this.coverageExpression(0);
			this.state = 599;
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
			localctx = new DescribeCoverageExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 601;
			this.match(wcpsParser.DESCRIBE_COVERAGE);
			this.state = 602;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 603;
			this.coverageExpression(0);
			this.state = 604;
			this.match(wcpsParser.COMMA);
			this.state = 605;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 606;
				this.match(wcpsParser.COMMA);
				this.state = 607;
				this.extraParams();
				}
			}

			this.state = 610;
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
			this.state = 612;
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
			this.state = 614;
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
			localctx = new EncodedCoverageExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 616;
			this.match(wcpsParser.ENCODE);
			this.state = 617;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 618;
			this.coverageExpression(0);
			this.state = 619;
			this.match(wcpsParser.COMMA);
			this.state = 620;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 621;
				this.match(wcpsParser.COMMA);
				this.state = 622;
				this.extraParams();
				}
			}

			this.state = 625;
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
			localctx = new DecodedCoverageExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 627;
			this.match(wcpsParser.DECODE);
			this.state = 628;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 629;
			this.positionalParamater();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 630;
				this.match(wcpsParser.COMMA);
				this.state = 631;
				this.extraParams();
				}
			}

			this.state = 634;
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
		let _startState: number = 92;
		this.enterRecursionRule(localctx, 92, wcpsParser.RULE_coverageExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				localctx = new CoverageExpressionUdfExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 637;
				this.udfExpression();
				}
				break;
			case 2:
				{
				localctx = new CoverageExpressionSliceLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 638;
				this.match(wcpsParser.SLICE);
				this.state = 639;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 640;
				this.coverageExpression(0);
				this.state = 641;
				this.match(wcpsParser.COMMA);
				this.state = 642;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 643;
				this.dimensionPointList();
				this.state = 644;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 645;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				{
				localctx = new CoverageExpressionTrimCoverageLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 647;
				this.match(wcpsParser.TRIM);
				this.state = 648;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 649;
				this.coverageExpression(0);
				this.state = 650;
				this.match(wcpsParser.COMMA);
				this.state = 651;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 652;
				this.dimensionIntervalList();
				this.state = 653;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 654;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 4:
				{
				localctx = new CoverageExpressionCoverageLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 656;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 657;
				this.coverageExpression(0);
				this.state = 658;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 5:
				{
				localctx = new CoverageExpressionScalarLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 660;
				this.scalarExpression();
				}
				break;
			case 6:
				{
				localctx = new CoverageExpressionDomainIntervalsLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 661;
				this.domainIntervals();
				}
				break;
			case 7:
				{
				localctx = new CoverageExpressionTimeExtractorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 662;
				this.timeExtractorElement();
				}
				break;
			case 8:
				{
				localctx = new CoverageExpressionTimeTruncatorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 663;
				this.timeTruncatorElement();
				}
				break;
			case 9:
				{
				localctx = new CoverageExpressionGeoXYAxisLabelAndDomainResolutionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 664;
				this.geoXYAxisLabelAndDomainResolution();
				}
				break;
			case 10:
				{
				localctx = new CoverageExpressionConstructorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 665;
				this.coverageConstructorExpression();
				}
				break;
			case 11:
				{
				localctx = new CoverageExpressionVariableNameLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 666;
				this.coverageVariableName();
				}
				break;
			case 12:
				{
				localctx = new CoverageExpressionConstantLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 667;
				this.coverageConstantExpression();
				}
				break;
			case 13:
				{
				localctx = new CoverageExpressionDecodeLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 668;
				this.decodeCoverageExpression();
				}
				break;
			case 14:
				{
				localctx = new CoverageExpressionExtendLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 669;
				this.match(wcpsParser.EXTEND);
				this.state = 670;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 671;
				this.coverageExpression(0);
				this.state = 672;
				this.match(wcpsParser.COMMA);
				this.state = 673;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 676;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 674;
					this.dimensionIntervalList();
					}
					break;
				case 2:
					{
					this.state = 675;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 678;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 679;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 15:
				{
				localctx = new CoverageExpressionExtendByDomainIntervalsLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 681;
				this.match(wcpsParser.EXTEND);
				this.state = 682;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 683;
				this.coverageExpression(0);
				this.state = 684;
				this.match(wcpsParser.COMMA);
				this.state = 685;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 688;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 53:
				case 56:
					{
					this.state = 686;
					this.domainIntervals();
					}
					break;
				case 141:
					{
					this.state = 687;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 690;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 691;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 16:
				{
				localctx = new CoverageExpressionUnaryArithmeticLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 693;
				this.unaryArithmeticExpression();
				}
				break;
			case 17:
				{
				localctx = new CoverageExpressionTrigonometricLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 694;
				this.trigonometricExpression();
				}
				break;
			case 18:
				{
				localctx = new CoverageExpressionExponentialLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 695;
				this.exponentialExpression();
				}
				break;
			case 19:
				{
				localctx = new CoverageExpressionMinBinaryLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 696;
				this.minBinaryExpression();
				}
				break;
			case 20:
				{
				localctx = new CoverageExpressionMaxBinaryLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 697;
				this.maxBinaryExpression();
				}
				break;
			case 21:
				{
				localctx = new CoverageExpressionPowerLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 698;
				this.unaryPowerExpression();
				}
				break;
			case 22:
				{
				localctx = new CoverageExpressionModLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 699;
				this.unaryModExpression();
				}
				break;
			case 23:
				{
				localctx = new CoverageExpressionUnaryBooleanLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 700;
				this.unaryBooleanExpression();
				}
				break;
			case 24:
				{
				localctx = new CoverageExpressionCastLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 701;
				this.castExpression();
				}
				break;
			case 25:
				{
				localctx = new CoverageExpressionRangeConstructorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 702;
				this.rangeConstructorExpression();
				}
				break;
			case 26:
				{
				localctx = new CoverageExpressionClipWKTLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 703;
				this.clipWKTExpression();
				}
				break;
			case 27:
				{
				localctx = new CoverageExpressionClipCurtainLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 704;
				this.clipCurtainExpression();
				}
				break;
			case 28:
				{
				localctx = new CoverageExpressionClipCorridorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 705;
				this.clipCorridorExpression();
				}
				break;
			case 29:
				{
				localctx = new CoverageExpressionCrsTransformLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 706;
				this.crsTransformExpression();
				}
				break;
			case 30:
				{
				localctx = new CoverageExpressionCrsTransformShorthandLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 707;
				this.crsTransformShorthandExpression();
				}
				break;
			case 31:
				{
				localctx = new CoverageExpressionSwitchCaseLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 708;
				this.switchCaseExpression();
				}
				break;
			case 32:
				{
				localctx = new CoverageExpressionScaleByImageCrsDomainLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 709;
				this.match(wcpsParser.SCALE);
				this.state = 710;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 711;
				this.coverageExpression(0);
				this.state = 712;
				this.match(wcpsParser.COMMA);
				this.state = 713;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 716;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 53:
				case 56:
					{
					this.state = 714;
					this.domainIntervals();
					}
					break;
				case 141:
					{
					this.state = 715;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 718;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 719;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 33:
				{
				localctx = new CoverageExpressionScaleByFactorLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 721;
				this.match(wcpsParser.SCALE);
				this.state = 722;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 723;
				this.coverageExpression(0);
				this.state = 724;
				this.match(wcpsParser.COMMA);
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===58) {
					{
					this.state = 725;
					this.match(wcpsParser.LEFT_BRACE);
					}
				}

				this.state = 730;
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
					this.state = 728;
					this.scalarExpression();
					}
					break;
				case 141:
					{
					this.state = 729;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91) {
					{
					this.state = 732;
					this.match(wcpsParser.RIGHT_BRACE);
					}
				}

				this.state = 735;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 34:
				{
				localctx = new CoverageExpressionScaleByFactorListLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 737;
				this.match(wcpsParser.SCALE);
				this.state = 738;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 739;
				this.coverageExpression(0);
				this.state = 740;
				this.match(wcpsParser.COMMA);
				this.state = 741;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 744;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 742;
					this.scaleDimensionPointList();
					}
					break;
				case 2:
					{
					this.state = 743;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 746;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 747;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 35:
				{
				localctx = new CoverageExpressionScaleByDimensionIntervalsLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 749;
				this.match(wcpsParser.SCALE);
				this.state = 750;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 751;
				this.coverageExpression(0);
				this.state = 752;
				this.match(wcpsParser.COMMA);
				this.state = 753;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 756;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 754;
					this.dimensionIntervalList();
					}
					break;
				case 2:
					{
					this.state = 755;
					this.coverageVariableName();
					}
					break;
				}
				this.state = 758;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 759;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 36:
				{
				localctx = new CoverageExpresisonFlipLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 761;
				this.flipExpression();
				}
				break;
			case 37:
				{
				localctx = new CoverageExpressionSortLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 762;
				this.sortExpression();
				}
				break;
			case 38:
				{
				localctx = new CoverageExpressionPolygonizeLabelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 763;
				this.polygonizeExpression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 813;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						localctx = new CoverageExpressionLogicLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 766;
						if (!(this.precpred(this._ctx, 50))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 50)");
						}
						this.state = 767;
						this.booleanOperator();
						this.state = 768;
						this.coverageExpression(51);
						}
						break;
					case 2:
						{
						localctx = new CoverageExpressionComparissonLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 770;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 771;
						this.numericalComparissonOperator();
						this.state = 772;
						this.coverageExpression(36);
						}
						break;
					case 3:
						{
						localctx = new CoverageExpressionArithmeticLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 774;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 775;
						this.coverageArithmeticOperator();
						this.state = 776;
						this.coverageExpression(35);
						}
						break;
					case 4:
						{
						localctx = new CoverageExpressionOverlayLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 778;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 779;
						this.match(wcpsParser.OVERLAY);
						this.state = 780;
						this.coverageExpression(5);
						}
						break;
					case 5:
						{
						localctx = new CoverageExpressionShorthandSliceLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 781;
						if (!(this.precpred(this._ctx, 49))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 49)");
						}
						this.state = 782;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 783;
						this.dimensionPointList();
						this.state = 784;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 6:
						{
						localctx = new CoverageExpressionShorthandSubsetLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 786;
						if (!(this.precpred(this._ctx, 47))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 47)");
						}
						this.state = 787;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 788;
						this.dimensionIntervalList();
						this.state = 789;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 7:
						{
						localctx = new CoverageExpressionShortHandSubsetWithLetClauseVariableLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 791;
						if (!(this.precpred(this._ctx, 46))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 46)");
						}
						this.state = 792;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 793;
						this.coverageVariableName();
						this.state = 794;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;
					case 8:
						{
						localctx = new CoverageExpressionRangeSubsettingLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 796;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 797;
						this.match(wcpsParser.DOT);
						this.state = 798;
						this.fieldName();
						}
						break;
					case 9:
						{
						localctx = new CoverageIsNullExpressionContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 799;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 800;
						this.match(wcpsParser.IS);
						this.state = 802;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===75) {
							{
							this.state = 801;
							this.match(wcpsParser.NOT);
							}
						}

						this.state = 804;
						this.match(wcpsParser.NULL);
						}
						break;
					case 10:
						{
						localctx = new CoverageExpressionDynamicallyChangingNullValuesLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 805;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 806;
						this.nullClause();
						}
						break;
					case 11:
						{
						localctx = new CoverageExpressionDynamicallyChangingNullValuesFromLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 807;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 808;
						this.nullSetFrom();
						}
						break;
					case 12:
						{
						localctx = new CoverageExpressionDynamicallyChangingNullMaskLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 809;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 810;
						this.nullMask();
						}
						break;
					case 13:
						{
						localctx = new CoverageExpressionDynamicallyChangingNullMaskDiscardLabelContext(this, new CoverageExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 811;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 812;
						this.nullMaskDiscard();
						}
						break;
					}
					}
				}
				this.state = 817;
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
		this.enterRule(localctx, 94, wcpsParser.RULE_coverageArithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 818;
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
		this.enterRule(localctx, 96, wcpsParser.RULE_unaryArithmeticExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 820;
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
		this.enterRule(localctx, 98, wcpsParser.RULE_unaryArithmeticExpression);
		try {
			localctx = new UnaryCoverageArithmeticExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			this.unaryArithmeticExpressionOperator();
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 823;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 826;
			this.coverageExpression(0);
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 827;
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
		this.enterRule(localctx, 100, wcpsParser.RULE_trigonometricExpression);
		try {
			localctx = new TrigonometricExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 830;
			this.trigonometricOperator();
			this.state = 831;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 832;
			this.coverageExpression(0);
			this.state = 833;
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
		this.enterRule(localctx, 102, wcpsParser.RULE_exponentialExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 835;
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
		this.enterRule(localctx, 104, wcpsParser.RULE_exponentialExpression);
		try {
			localctx = new ExponentialExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 837;
			this.exponentialExpressionOperator();
			this.state = 838;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 839;
			this.coverageExpression(0);
			this.state = 840;
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
		this.enterRule(localctx, 106, wcpsParser.RULE_unaryPowerExpression);
		try {
			localctx = new UnaryPowerExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(wcpsParser.POWER);
			this.state = 843;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 844;
			this.coverageExpression(0);
			this.state = 845;
			this.match(wcpsParser.COMMA);
			this.state = 848;
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
				this.state = 846;
				this.numericalScalarExpression(0);
				}
				break;
			case 141:
				{
				this.state = 847;
				this.coverageVariableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 850;
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
		this.enterRule(localctx, 108, wcpsParser.RULE_unaryModExpression);
		try {
			localctx = new UnaryModExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 852;
			this.match(wcpsParser.MOD);
			this.state = 853;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 854;
			this.coverageExpression(0);
			this.state = 855;
			this.match(wcpsParser.COMMA);
			this.state = 858;
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
				this.state = 856;
				this.numericalScalarExpression(0);
				}
				break;
			case 141:
				{
				this.state = 857;
				this.coverageVariableName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 860;
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
		this.enterRule(localctx, 110, wcpsParser.RULE_minBinaryExpression);
		try {
			localctx = new MinBinaryExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 862;
			this.match(wcpsParser.MIN);
			this.state = 863;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 864;
			this.coverageExpression(0);
			this.state = 865;
			this.match(wcpsParser.COMMA);
			this.state = 866;
			this.coverageExpression(0);
			this.state = 867;
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
		this.enterRule(localctx, 112, wcpsParser.RULE_maxBinaryExpression);
		try {
			localctx = new MaxBinaryExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 869;
			this.match(wcpsParser.MAX);
			this.state = 870;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 871;
			this.coverageExpression(0);
			this.state = 872;
			this.match(wcpsParser.COMMA);
			this.state = 873;
			this.coverageExpression(0);
			this.state = 874;
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
		this.enterRule(localctx, 114, wcpsParser.RULE_unaryBooleanExpression);
		try {
			this.state = 891;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 75:
				localctx = new NotUnaryBooleanExpressionLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 876;
				this.match(wcpsParser.NOT);
				this.state = 877;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 878;
				this.coverageExpression(0);
				this.state = 879;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 18:
				localctx = new BitUnaryBooleanExpressionLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 881;
				this.match(wcpsParser.BIT);
				this.state = 882;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 883;
				this.coverageExpression(0);
				this.state = 884;
				this.match(wcpsParser.COMMA);
				this.state = 887;
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
					this.state = 885;
					this.numericalScalarExpression(0);
					}
					break;
				case 141:
					{
					this.state = 886;
					this.coverageVariableName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 889;
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
		this.enterRule(localctx, 116, wcpsParser.RULE_rangeType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 893;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===141) {
				{
				{
				this.state = 894;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				}
				this.state = 899;
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
		this.enterRule(localctx, 118, wcpsParser.RULE_castExpression);
		try {
			localctx = new CastExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 900;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 901;
			this.rangeType();
			this.state = 902;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 903;
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
		this.enterRule(localctx, 120, wcpsParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 905;
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
		this.enterRule(localctx, 122, wcpsParser.RULE_rangeConstructorExpression);
		try {
			localctx = new RangeConstructorExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 907;
			this.match(wcpsParser.LEFT_BRACE);
			this.state = 908;
			this.rangeConstructorElementList();
			this.state = 909;
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
		this.enterRule(localctx, 124, wcpsParser.RULE_rangeConstructorElement);
		try {
			localctx = new RangeConstructorElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 911;
			this.fieldName();
			this.state = 912;
			this.match(wcpsParser.COLON);
			this.state = 913;
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
		this.enterRule(localctx, 126, wcpsParser.RULE_rangeConstructorElementList);
		let _la: number;
		try {
			localctx = new RangeConstructorElementListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 915;
			this.rangeConstructorElement();
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 916;
				this.match(wcpsParser.SEMICOLON);
				this.state = 917;
				this.rangeConstructorElement();
				}
				}
				this.state = 922;
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
		this.enterRule(localctx, 128, wcpsParser.RULE_rangeConstructorSwitchCaseExpression);
		let _la: number;
		try {
			localctx = new RangeConstructorSwitchCaseExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this.match(wcpsParser.LEFT_BRACE);
			{
			this.state = 924;
			this.fieldName();
			this.state = 925;
			this.match(wcpsParser.COLON);
			this.state = 926;
			this.coverageExpression(0);
			}
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 928;
				this.match(wcpsParser.SEMICOLON);
				this.state = 929;
				this.fieldName();
				this.state = 930;
				this.match(wcpsParser.COLON);
				this.state = 931;
				this.coverageExpression(0);
				}
				}
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 938;
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
		this.enterRule(localctx, 130, wcpsParser.RULE_dimensionPointList);
		let _la: number;
		try {
			localctx = new DimensionPointListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 940;
			this.dimensionPointElement();
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 941;
				this.match(wcpsParser.COMMA);
				this.state = 942;
				this.dimensionPointElement();
				}
				}
				this.state = 947;
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
		this.enterRule(localctx, 132, wcpsParser.RULE_dimensionPointElement);
		let _la: number;
		try {
			localctx = new DimensionPointElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 948;
			this.axisName();
			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 949;
				this.match(wcpsParser.COLON);
				this.state = 950;
				this.crsName();
				}
			}

			this.state = 953;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 954;
			this.coverageExpression(0);
			this.state = 955;
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
		this.enterRule(localctx, 134, wcpsParser.RULE_dimensionIntervalList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 957;
			this.dimensionIntervalElement();
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 958;
				this.match(wcpsParser.COMMA);
				this.state = 959;
				this.dimensionIntervalElement();
				}
				}
				this.state = 964;
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
		this.enterRule(localctx, 136, wcpsParser.RULE_scaleDimensionPointElement);
		try {
			localctx = new SliceScaleDimensionPointElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 965;
			this.axisName();
			this.state = 966;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 967;
			this.scalarExpression();
			this.state = 968;
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
		this.enterRule(localctx, 138, wcpsParser.RULE_scaleDimensionPointList);
		let _la: number;
		try {
			localctx = new ScaleDimensionPointListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 970;
			this.scaleDimensionPointElement();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 971;
				this.match(wcpsParser.COMMA);
				this.state = 972;
				this.scaleDimensionPointElement();
				}
				}
				this.state = 977;
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
		this.enterRule(localctx, 140, wcpsParser.RULE_scaleDimensionIntervalList);
		let _la: number;
		try {
			localctx = new ScaleDimensionIntervalListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this.scaleDimensionIntervalElement();
			this.state = 983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 979;
				this.match(wcpsParser.COMMA);
				this.state = 980;
				this.scaleDimensionIntervalElement();
				}
				}
				this.state = 985;
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
		this.enterRule(localctx, 142, wcpsParser.RULE_scaleDimensionIntervalElement);
		try {
			localctx = new TrimScaleDimensionIntervalElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 986;
			this.axisName();
			this.state = 987;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 988;
			this.scalarExpression();
			this.state = 989;
			this.match(wcpsParser.COLON);
			this.state = 990;
			this.scalarExpression();
			this.state = 991;
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
		this.enterRule(localctx, 144, wcpsParser.RULE_dimensionBoundConcatenationElement);
		let _la: number;
		try {
			localctx = new DimensionBoundConcatenationElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 994;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 993;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 996;
			this.coverageExpression(0);
			this.state = 998;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 997;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===40) {
				{
				{
				this.state = 1000;
				this.match(wcpsParser.DOT);
				this.state = 1002;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 1001;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					break;
				}
				this.state = 1004;
				this.coverageExpression(0);
				this.state = 1006;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 1005;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				}
				this.state = 1012;
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
		this.enterRule(localctx, 146, wcpsParser.RULE_dimensionIntervalElement);
		let _la: number;
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				localctx = new TrimDimensionIntervalElementLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1013;
				this.axisName();
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1014;
					this.match(wcpsParser.COLON);
					this.state = 1015;
					this.crsName();
					}
				}

				this.state = 1018;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1019;
				this.dimensionBoundConcatenationElement();
				this.state = 1020;
				this.match(wcpsParser.COLON);
				this.state = 1021;
				this.dimensionBoundConcatenationElement();
				this.state = 1022;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				localctx = new TrimDimensionIntervalByImageCrsDomainElementLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1024;
				this.axisName();
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1025;
					this.match(wcpsParser.COLON);
					this.state = 1026;
					this.crsName();
					}
				}

				this.state = 1029;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1030;
				this.imageCrsDomainByDimensionExpression();
				this.state = 1031;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				localctx = new SliceDimensionIntervalElementLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1033;
				this.axisName();
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1034;
					this.match(wcpsParser.COLON);
					this.state = 1035;
					this.crsName();
					}
				}

				this.state = 1038;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1039;
				this.dimensionBoundConcatenationElement();
				this.state = 1040;
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
		this.enterRule(localctx, 148, wcpsParser.RULE_timeIntervalElement);
		let _la: number;
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1044;
				this.dimensionBoundConcatenationElement();
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1045;
					this.match(wcpsParser.COLON);
					this.state = 1046;
					this.dimensionBoundConcatenationElement();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1049;
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
		this.enterRule(localctx, 150, wcpsParser.RULE_timeExtractorElement);
		try {
			this.state = 1082;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 125:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1052;
				this.match(wcpsParser.YEARS);
				this.state = 1053;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1054;
				this.timeIntervalElement();
				this.state = 1055;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 126:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1057;
				this.match(wcpsParser.MONTHS);
				this.state = 1058;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1059;
				this.timeIntervalElement();
				this.state = 1060;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1062;
				this.match(wcpsParser.DAYS);
				this.state = 1063;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1064;
				this.timeIntervalElement();
				this.state = 1065;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 128:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1067;
				this.match(wcpsParser.HOURS);
				this.state = 1068;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1069;
				this.timeIntervalElement();
				this.state = 1070;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 129:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1072;
				this.match(wcpsParser.MINUTES);
				this.state = 1073;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1074;
				this.timeIntervalElement();
				this.state = 1075;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 130:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1077;
				this.match(wcpsParser.SECONDS);
				this.state = 1078;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1079;
				this.timeIntervalElement();
				this.state = 1080;
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
		this.enterRule(localctx, 152, wcpsParser.RULE_timeTruncatorElement);
		try {
			this.state = 1114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 131:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1084;
				this.match(wcpsParser.ALL_YEARS);
				this.state = 1085;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1086;
				this.timeIntervalElement();
				this.state = 1087;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 132:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1089;
				this.match(wcpsParser.ALL_MONTHS);
				this.state = 1090;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1091;
				this.timeIntervalElement();
				this.state = 1092;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 133:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1094;
				this.match(wcpsParser.ALL_DAYS);
				this.state = 1095;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1096;
				this.timeIntervalElement();
				this.state = 1097;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 134:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1099;
				this.match(wcpsParser.ALL_HOURS);
				this.state = 1100;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1101;
				this.timeIntervalElement();
				this.state = 1102;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 135:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1104;
				this.match(wcpsParser.ALL_MINUTES);
				this.state = 1105;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1106;
				this.timeIntervalElement();
				this.state = 1107;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case 136:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1109;
				this.match(wcpsParser.ALL_SECONDS);
				this.state = 1110;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1111;
				this.timeIntervalElement();
				this.state = 1112;
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
		this.enterRule(localctx, 154, wcpsParser.RULE_wktPoints);
		let _la: number;
		try {
			localctx = new WktPointsLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1116;
			this.constant();
			this.state = 1120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 268468225) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2382364673) !== 0)) {
				{
				{
				this.state = 1117;
				this.constant();
				}
				}
				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1123;
				this.match(wcpsParser.COMMA);
				this.state = 1124;
				this.constant();
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 268468225) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2382364673) !== 0)) {
					{
					{
					this.state = 1125;
					this.constant();
					}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1135;
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
		this.enterRule(localctx, 156, wcpsParser.RULE_wktPointElementList);
		try {
			let _alt: number;
			localctx = new WKTPointElementListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1136;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1137;
			this.wktPoints();
			this.state = 1138;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1146;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1139;
					this.match(wcpsParser.COMMA);
					this.state = 1140;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					this.state = 1141;
					this.wktPoints();
					this.state = 1142;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
				}
				this.state = 1148;
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
		this.enterRule(localctx, 158, wcpsParser.RULE_wktLineString);
		try {
			localctx = new WKTLineStringLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1149;
			this.match(wcpsParser.LINESTRING);
			this.state = 1150;
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
		this.enterRule(localctx, 160, wcpsParser.RULE_wktPolygon);
		try {
			localctx = new WKTPolygonLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1152;
			this.match(wcpsParser.POLYGON);
			this.state = 1153;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1154;
			this.wktPointElementList();
			this.state = 1155;
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
		this.enterRule(localctx, 162, wcpsParser.RULE_wktMultipolygon);
		let _la: number;
		try {
			localctx = new WKTMultipolygonLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1157;
			this.match(wcpsParser.MULTIPOLYGON);
			this.state = 1158;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1159;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1160;
			this.wktPointElementList();
			this.state = 1161;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1162;
				this.match(wcpsParser.COMMA);
				this.state = 1163;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1164;
				this.wktPointElementList();
				this.state = 1165;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1172;
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
		this.enterRule(localctx, 164, wcpsParser.RULE_wktCoverageExpression);
		try {
			localctx = new WKTCoverageExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1174;
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
		this.enterRule(localctx, 166, wcpsParser.RULE_wktExpression);
		try {
			localctx = new WKTExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1180;
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
				this.state = 1176;
				this.coverageExpression(0);
				}
				break;
			case 119:
				{
				this.state = 1177;
				this.wktPolygon();
				}
				break;
			case 120:
				{
				this.state = 1178;
				this.wktLineString();
				}
				break;
			case 121:
				{
				this.state = 1179;
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
		this.enterRule(localctx, 168, wcpsParser.RULE_curtainProjectionAxisLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1182;
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
		this.enterRule(localctx, 170, wcpsParser.RULE_curtainProjectionAxisLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1184;
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
		this.enterRule(localctx, 172, wcpsParser.RULE_clipCurtainExpression);
		let _la: number;
		try {
			localctx = new ClipCurtainExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1186;
			this.match(wcpsParser.CLIP);
			this.state = 1187;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1188;
			this.coverageExpression(0);
			this.state = 1189;
			this.match(wcpsParser.COMMA);
			this.state = 1190;
			this.match(wcpsParser.CURTAIN);
			this.state = 1191;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1192;
			this.match(wcpsParser.PROJECTION);
			this.state = 1193;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1194;
			this.curtainProjectionAxisLabel1();
			this.state = 1195;
			this.match(wcpsParser.COMMA);
			this.state = 1196;
			this.curtainProjectionAxisLabel2();
			this.state = 1197;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1198;
			this.match(wcpsParser.COMMA);
			this.state = 1199;
			this.wktExpression();
			this.state = 1200;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1201;
				this.match(wcpsParser.COMMA);
				this.state = 1202;
				this.crsName();
				}
			}

			this.state = 1205;
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
		this.enterRule(localctx, 174, wcpsParser.RULE_corridorProjectionAxisLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1207;
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
		this.enterRule(localctx, 176, wcpsParser.RULE_corridorProjectionAxisLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1209;
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
		this.enterRule(localctx, 178, wcpsParser.RULE_corridorWKTLabel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1211;
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
		this.enterRule(localctx, 180, wcpsParser.RULE_corridorWKTLabel2);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1213;
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
		this.enterRule(localctx, 182, wcpsParser.RULE_clipCorridorExpression);
		let _la: number;
		try {
			localctx = new ClipCorridorExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1215;
			this.match(wcpsParser.CLIP);
			this.state = 1216;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1217;
			this.coverageExpression(0);
			this.state = 1218;
			this.match(wcpsParser.COMMA);
			this.state = 1219;
			this.match(wcpsParser.CORRIDOR);
			this.state = 1220;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1221;
			this.match(wcpsParser.PROJECTION);
			this.state = 1222;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1223;
			this.corridorProjectionAxisLabel1();
			this.state = 1224;
			this.match(wcpsParser.COMMA);
			this.state = 1225;
			this.corridorProjectionAxisLabel2();
			this.state = 1226;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1227;
			this.match(wcpsParser.COMMA);
			this.state = 1228;
			this.corridorWKTLabel1();
			this.state = 1229;
			this.match(wcpsParser.COMMA);
			this.state = 1230;
			this.corridorWKTLabel2();
			this.state = 1233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1231;
				this.match(wcpsParser.COMMA);
				this.state = 1232;
				this.match(wcpsParser.DISCRETE);
				}
			}

			this.state = 1235;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1236;
				this.match(wcpsParser.COMMA);
				this.state = 1237;
				this.crsName();
				}
			}

			this.state = 1240;
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
		this.enterRule(localctx, 184, wcpsParser.RULE_clipWKTExpression);
		let _la: number;
		try {
			localctx = new ClipWKTExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1242;
			this.match(wcpsParser.CLIP);
			this.state = 1243;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1244;
			this.coverageExpression(0);
			this.state = 1245;
			this.match(wcpsParser.COMMA);
			this.state = 1246;
			this.wktExpression();
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1247;
				this.match(wcpsParser.COMMA);
				this.state = 1248;
				this.crsName();
				}
			}

			this.state = 1251;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 1253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 1252;
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
		this.enterRule(localctx, 186, wcpsParser.RULE_crsTransformExpression);
		let _la: number;
		try {
			localctx = new CrsTransformExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1255;
			this.match(wcpsParser.CRS_TRANSFORM);
			this.state = 1256;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1257;
			this.coverageExpression(0);
			this.state = 1258;
			this.match(wcpsParser.COMMA);
			this.state = 1259;
			this.dimensionCrsList();
			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1260;
				this.match(wcpsParser.COMMA);
				this.state = 1261;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141) {
					{
					this.state = 1262;
					this.interpolationType();
					}
				}

				this.state = 1265;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1273;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1268;
				this.match(wcpsParser.COMMA);
				this.state = 1269;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1270;
				this.dimensionGeoXYResolutionsList();
				this.state = 1271;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1275;
				this.match(wcpsParser.COMMA);
				this.state = 1276;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1279;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 141:
					{
					this.state = 1277;
					this.dimensionIntervalList();
					}
					break;
				case 56:
					{
					this.state = 1278;
					this.domainExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1281;
				this.match(wcpsParser.RIGHT_BRACE);
				}
			}

			this.state = 1285;
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
		this.enterRule(localctx, 188, wcpsParser.RULE_crsTransformShorthandExpression);
		let _la: number;
		try {
			localctx = new CrsTransformShorthandExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1287;
			this.match(wcpsParser.CRS_TRANSFORM);
			this.state = 1288;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1289;
			this.coverageExpression(0);
			this.state = 1290;
			this.match(wcpsParser.COMMA);
			this.state = 1291;
			this.crsName();
			this.state = 1298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1292;
				this.match(wcpsParser.COMMA);
				this.state = 1293;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===141) {
					{
					this.state = 1294;
					this.interpolationType();
					}
				}

				this.state = 1297;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1305;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1300;
				this.match(wcpsParser.COMMA);
				this.state = 1301;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1302;
				this.dimensionGeoXYResolutionsList();
				this.state = 1303;
				this.match(wcpsParser.RIGHT_BRACE);
				}
				break;
			}
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1307;
				this.match(wcpsParser.COMMA);
				this.state = 1308;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1311;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 141:
					{
					this.state = 1309;
					this.dimensionIntervalList();
					}
					break;
				case 56:
					{
					this.state = 1310;
					this.domainExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1313;
				this.match(wcpsParser.RIGHT_BRACE);
				}
			}

			this.state = 1317;
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
		this.enterRule(localctx, 190, wcpsParser.RULE_polygonizeExpression);
		try {
			localctx = new PolygonizeExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1319;
			this.match(wcpsParser.POLYGONIZE);
			this.state = 1320;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1321;
			this.coverageExpression(0);
			this.state = 1322;
			this.match(wcpsParser.COMMA);
			this.state = 1323;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 1326;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1324;
				this.match(wcpsParser.COMMA);
				this.state = 1325;
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
		this.enterRule(localctx, 192, wcpsParser.RULE_dimensionCrsList);
		let _la: number;
		try {
			localctx = new DimensionCrsListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1328;
			this.match(wcpsParser.LEFT_BRACE);
			this.state = 1329;
			this.dimensionCrsElement();
			this.state = 1334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1330;
				this.match(wcpsParser.COMMA);
				this.state = 1331;
				this.dimensionCrsElement();
				}
				}
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1337;
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
		this.enterRule(localctx, 194, wcpsParser.RULE_dimensionGeoXYResolutionsList);
		let _la: number;
		try {
			localctx = new DimensionGeoXYResolutionsListLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1339;
			this.dimensionGeoXYResolution();
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1340;
				this.match(wcpsParser.COMMA);
				this.state = 1341;
				this.dimensionGeoXYResolution();
				}
				}
				this.state = 1346;
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
		this.enterRule(localctx, 196, wcpsParser.RULE_dimensionGeoXYResolution);
		try {
			this.state = 1351;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1347;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				this.state = 1348;
				this.match(wcpsParser.COLON);
				this.state = 1349;
				this.coverageExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1350;
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
		this.enterRule(localctx, 198, wcpsParser.RULE_dimensionCrsElement);
		try {
			localctx = new DimensionCrsElementLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1353;
			this.axisName();
			this.state = 1354;
			this.match(wcpsParser.COLON);
			this.state = 1355;
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
		this.enterRule(localctx, 200, wcpsParser.RULE_interpolationType);
		try {
			localctx = new InterpolationTypeLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1357;
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
		this.enterRule(localctx, 202, wcpsParser.RULE_coverageConstructorExpression);
		let _la: number;
		try {
			localctx = new CoverageConstructorExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1359;
			this.match(wcpsParser.COVERAGE);
			this.state = 1360;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1361;
			this.match(wcpsParser.OVER);
			this.state = 1362;
			this.axisIterator();
			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1363;
				this.match(wcpsParser.COMMA);
				this.state = 1364;
				this.axisIterator();
				}
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1370;
			this.match(wcpsParser.VALUES);
			this.state = 1371;
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
		this.enterRule(localctx, 204, wcpsParser.RULE_axisIterator);
		let _la: number;
		try {
			this.state = 1414;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				localctx = new AxisIteratorDomainIntervalsLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1373;
				this.coverageVariableName();
				this.state = 1374;
				this.axisName();
				this.state = 1375;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1376;
				this.domainIntervals();
				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1377;
					this.match(wcpsParser.COLON);
					this.state = 1378;
					this.regularTimeStep();
					}
				}

				this.state = 1381;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1382;
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
				localctx = new AxisIteratorLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1385;
				this.coverageVariableName();
				this.state = 1386;
				this.axisName();
				this.state = 1387;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1388;
				this.dimensionBoundConcatenationElement();
				this.state = 1389;
				this.match(wcpsParser.COLON);
				this.state = 1390;
				this.dimensionBoundConcatenationElement();
				this.state = 1393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 1391;
					this.match(wcpsParser.COLON);
					this.state = 1392;
					this.regularTimeStep();
					}
				}

				this.state = 1395;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1396;
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
				localctx = new AxisIteratorEnumerationListLabelContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1399;
				this.coverageVariableName();
				this.state = 1400;
				this.axisName();
				this.state = 1401;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1402;
				this.dimensionBoundConcatenationElement();
				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===25) {
					{
					{
					this.state = 1403;
					this.match(wcpsParser.COMMA);
					this.state = 1404;
					this.dimensionBoundConcatenationElement();
					}
					}
					this.state = 1409;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1410;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16 || _la===38) {
					{
					this.state = 1411;
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
		this.enterRule(localctx, 206, wcpsParser.RULE_regularTimeStep);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1416;
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
		this.enterRule(localctx, 208, wcpsParser.RULE_intervalExpression);
		try {
			localctx = new IntervalExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1418;
			this.scalarExpression();
			this.state = 1419;
			this.match(wcpsParser.COLON);
			this.state = 1420;
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
		this.enterRule(localctx, 210, wcpsParser.RULE_coverageConstantExpression);
		let _la: number;
		try {
			localctx = new CoverageConstantExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1422;
			this.match(wcpsParser.COVERAGE);
			this.state = 1423;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1424;
			this.match(wcpsParser.OVER);
			this.state = 1425;
			this.axisIterator();
			this.state = 1430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1426;
				this.match(wcpsParser.COMMA);
				this.state = 1427;
				this.axisIterator();
				}
				}
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1433;
			this.match(wcpsParser.VALUE);
			this.state = 1434;
			this.match(wcpsParser.LIST);
			this.state = 1435;
			this.match(wcpsParser.LOWER_THAN);
			this.state = 1436;
			this.constant();
			this.state = 1441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99) {
				{
				{
				this.state = 1437;
				this.match(wcpsParser.SEMICOLON);
				this.state = 1438;
				this.constant();
				}
				}
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1444;
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
		this.enterRule(localctx, 212, wcpsParser.RULE_axisSpec);
		try {
			localctx = new AxisSpecLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1446;
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
		this.enterRule(localctx, 214, wcpsParser.RULE_condenseExpression);
		try {
			this.state = 1450;
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
				this.state = 1448;
				this.reduceExpression();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1449;
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
		this.enterRule(localctx, 216, wcpsParser.RULE_reduceBooleanExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1452;
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
		this.enterRule(localctx, 218, wcpsParser.RULE_reduceNumericalExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1454;
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
		this.enterRule(localctx, 220, wcpsParser.RULE_reduceBooleanExpression);
		try {
			localctx = new ReduceBooleanExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1456;
			this.reduceBooleanExpressionOperator();
			this.state = 1457;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1458;
			this.coverageExpression(0);
			this.state = 1459;
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
		this.enterRule(localctx, 222, wcpsParser.RULE_reduceNumericalExpression);
		try {
			localctx = new ReduceNumericalExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1461;
			this.reduceNumericalExpressionOperator();
			this.state = 1462;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1463;
			this.coverageExpression(0);
			this.state = 1464;
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
		this.enterRule(localctx, 224, wcpsParser.RULE_reduceExpression);
		try {
			this.state = 1468;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1466;
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
				this.state = 1467;
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
		this.enterRule(localctx, 226, wcpsParser.RULE_condenseExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1470;
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
		this.enterRule(localctx, 228, wcpsParser.RULE_generalCondenseExpression);
		let _la: number;
		try {
			localctx = new GeneralCondenseExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1472;
			this.match(wcpsParser.CONDENSE);
			this.state = 1473;
			this.condenseExpressionOperator();
			this.state = 1474;
			this.match(wcpsParser.OVER);
			this.state = 1475;
			this.axisIterator();
			this.state = 1480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1476;
				this.match(wcpsParser.COMMA);
				this.state = 1477;
				this.axisIterator();
				}
				}
				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===116) {
				{
				this.state = 1483;
				this.whereClause();
				}
			}

			this.state = 1486;
			this.match(wcpsParser.USING);
			this.state = 1487;
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
		this.enterRule(localctx, 230, wcpsParser.RULE_flipExpression);
		try {
			localctx = new FlipExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1489;
			this.match(wcpsParser.FLIP);
			this.state = 1490;
			this.coverageExpression(0);
			this.state = 1491;
			this.match(wcpsParser.ALONG);
			this.state = 1492;
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
		this.enterRule(localctx, 232, wcpsParser.RULE_sortExpression);
		let _la: number;
		try {
			localctx = new SortExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1494;
			this.match(wcpsParser.SORT);
			this.state = 1495;
			this.coverageExpression(0);
			this.state = 1496;
			this.match(wcpsParser.ALONG);
			this.state = 1497;
			this.axisName();
			this.state = 1499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16 || _la===38) {
				{
				this.state = 1498;
				this.sortingOrder();
				}
			}

			this.state = 1501;
			this.match(wcpsParser.BY);
			this.state = 1502;
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
		this.enterRule(localctx, 234, wcpsParser.RULE_switchCaseExpression);
		try {
			localctx = new SwitchCaseExpressionLabelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1504;
			this.match(wcpsParser.SWITCH);
			this.state = 1505;
			this.switchCaseElementList();
			this.state = 1506;
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
		this.enterRule(localctx, 236, wcpsParser.RULE_switchCaseElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1508;
			this.match(wcpsParser.CASE);
			this.state = 1509;
			this.booleanSwitchCaseCombinedExpression(0);
			this.state = 1510;
			this.match(wcpsParser.RETURN);
			this.state = 1511;
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
		this.enterRule(localctx, 238, wcpsParser.RULE_switchCaseElementList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1513;
			this.switchCaseElement();
			this.state = 1517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 1514;
				this.switchCaseElement();
				}
				}
				this.state = 1519;
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
		this.enterRule(localctx, 240, wcpsParser.RULE_switchCaseDefaultElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1520;
			this.match(wcpsParser.DEFAULT);
			this.state = 1521;
			this.match(wcpsParser.RETURN);
			this.state = 1522;
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
		this.enterRule(localctx, 242, wcpsParser.RULE_crsName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1524;
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
		this.enterRule(localctx, 244, wcpsParser.RULE_axisName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1526;
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
		this.enterRule(localctx, 246, wcpsParser.RULE_number);
		let _la: number;
		try {
			this.state = 1540;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1528;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1531;
				this.match(wcpsParser.INTEGER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1532;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1535;
				this.match(wcpsParser.REAL_NUMBER_CONSTANT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 1536;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1539;
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
		this.enterRule(localctx, 248, wcpsParser.RULE_constant);
		try {
			this.state = 1550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 143:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1542;
				this.match(wcpsParser.STRING_LITERAL);
				}
				break;
			case 112:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1543;
				this.match(wcpsParser.TRUE);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1544;
				this.match(wcpsParser.FALSE);
				}
				break;
			case 73:
			case 137:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1546;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1545;
					this.match(wcpsParser.MINUS);
					}
					break;
				}
				this.state = 1548;
				this.number_();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1549;
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
		this.enterRule(localctx, 250, wcpsParser.RULE_sortingOrder);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1552;
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
		this.enterRule(localctx, 252, wcpsParser.RULE_coverageExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1554;
			this.coverageExpression(0);
			this.state = 1559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1555;
				this.match(wcpsParser.COMMA);
				this.state = 1556;
				this.coverageExpression(0);
				}
				}
				this.state = 1561;
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
		this.enterRule(localctx, 254, wcpsParser.RULE_udfName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1562;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1563;
				this.match(wcpsParser.DOT);
				this.state = 1564;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				}
				this.state = 1567;
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
		this.enterRule(localctx, 256, wcpsParser.RULE_udfExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1569;
			this.udfName();
			this.state = 1570;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1021765568) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1428486149) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1106259905) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 4261683135) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 3839) !== 0)) {
				{
				this.state = 1571;
				this.coverageExpressionList();
				}
			}

			this.state = 1574;
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
		this.enterRule(localctx, 258, wcpsParser.RULE_qualifiedCoverageIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1576;
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
		this.enterRule(localctx, 260, wcpsParser.RULE_nullClause);
		let _la: number;
		try {
			this.state = 1593;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1578;
				this.match(wcpsParser.NULL);
				this.state = 1579;
				this.match(wcpsParser.VALUES);
				this.state = 1580;
				this.nullSetMemberList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1581;
				this.match(wcpsParser.NULL);
				this.state = 1582;
				this.match(wcpsParser.VALUES);
				this.state = 1583;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 1584;
				this.nullSetMemberList();
				this.state = 1587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1585;
					this.match(wcpsParser.COMMA);
					this.state = 1586;
					this.nullSetMemberList();
					}
					}
					this.state = 1589;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===25);
				this.state = 1591;
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
		this.enterRule(localctx, 262, wcpsParser.RULE_nullSetFrom);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this.match(wcpsParser.NULL);
			this.state = 1596;
			this.match(wcpsParser.VALUES);
			this.state = 1597;
			this.match(wcpsParser.NULLSET);
			this.state = 1598;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1599;
			this.coverageExpression(0);
			this.state = 1600;
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
		this.enterRule(localctx, 264, wcpsParser.RULE_nullSetMemberList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1602;
			this.match(wcpsParser.LEFT_BRACKET);
			this.state = 1603;
			this.nullSetMember();
			this.state = 1608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 1604;
				this.match(wcpsParser.COMMA);
				this.state = 1605;
				this.nullSetMember();
				}
				}
				this.state = 1610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1611;
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
		this.enterRule(localctx, 266, wcpsParser.RULE_nullSetMember);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1613;
			this.nullSetMemberValue();
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 1614;
				this.match(wcpsParser.COLON);
				this.state = 1615;
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
		this.enterRule(localctx, 268, wcpsParser.RULE_nullSetMemberValue);
		try {
			this.state = 1620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
			case 137:
			case 138:
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1618;
				this.number_();
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1619;
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
		this.enterRule(localctx, 270, wcpsParser.RULE_nullMask);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1622;
			this.match(wcpsParser.NULL);
			this.state = 1623;
			this.match(wcpsParser.MASK);
			this.state = 1624;
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
		this.enterRule(localctx, 272, wcpsParser.RULE_nullMaskDiscard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1626;
			this.match(wcpsParser.NULL);
			this.state = 1627;
			this.match(wcpsParser.MASK);
			this.state = 1628;
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
		case 46:
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

	public static readonly _serializedATN: number[] = [4,1,145,1631,2,0,7,0,
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
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,1,0,1,0,3,0,277,8,0,1,0,3,0,280,
	8,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,288,8,1,10,1,12,1,291,9,1,1,2,1,2,1,2,3,
	2,296,8,2,1,3,1,3,1,3,3,3,301,8,3,1,3,1,3,1,3,5,3,306,8,3,10,3,12,3,309,
	9,3,1,3,3,3,312,8,3,1,4,1,4,1,4,1,4,5,4,318,8,4,10,4,12,4,321,9,4,1,5,1,
	5,3,5,325,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,339,8,
	7,1,8,1,8,3,8,343,8,8,1,8,1,8,3,8,347,8,8,1,9,1,9,3,9,351,8,9,1,9,1,9,3,
	9,355,8,9,1,10,1,10,1,11,1,11,1,11,3,11,362,8,11,1,11,1,11,3,11,366,8,11,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,375,8,12,1,12,1,12,1,12,1,12,1,
	13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,388,8,14,1,15,3,15,391,8,15,1,15,
	1,15,3,15,395,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,404,8,16,1,17,
	1,17,1,17,1,17,1,17,3,17,411,8,17,1,17,1,17,3,17,415,8,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,3,17,426,8,17,1,17,1,17,1,17,1,17,5,17,432,
	8,17,10,17,12,17,435,9,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,
	1,22,1,23,1,23,1,24,1,24,1,25,5,25,452,8,25,10,25,12,25,455,9,25,1,25,1,
	25,5,25,459,8,25,10,25,12,25,462,9,25,1,25,1,25,5,25,466,8,25,10,25,12,
	25,469,9,25,1,25,1,25,5,25,473,8,25,10,25,12,25,476,9,25,1,25,1,25,1,25,
	3,25,481,8,25,1,25,1,25,3,25,485,8,25,1,26,1,26,1,26,1,26,1,26,1,26,3,26,
	493,8,26,1,26,1,26,1,26,1,26,5,26,499,8,26,10,26,12,26,502,9,26,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,
	519,8,27,1,27,1,27,1,27,1,27,5,27,525,8,27,10,27,12,27,528,9,27,1,28,1,
	28,1,28,1,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,3,32,550,8,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,
	34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,37,1,37,
	1,37,1,37,1,37,1,37,1,37,3,37,579,8,37,3,37,581,8,37,1,37,1,37,1,38,1,38,
	1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,
	40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,609,8,41,1,41,1,41,1,42,1,42,
	1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,624,8,44,1,44,1,44,1,
	45,1,45,1,45,1,45,1,45,3,45,633,8,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,3,46,677,8,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,3,46,689,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,3,46,717,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,3,46,727,8,46,1,46,1,46,3,46,731,8,46,1,46,3,46,734,8,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,745,8,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,3,46,757,8,46,1,46,1,46,1,46,1,46,1,46,1,46,
	3,46,765,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,803,8,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,814,8,46,10,46,12,46,817,9,46,
	1,47,1,47,1,48,1,48,1,49,1,49,3,49,825,8,49,1,49,1,49,3,49,829,8,49,1,50,
	1,50,1,50,1,50,1,50,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,
	53,1,53,1,53,3,53,849,8,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,3,54,
	859,8,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,
	56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	3,57,888,8,57,1,57,1,57,3,57,892,8,57,1,58,1,58,5,58,896,8,58,10,58,12,
	58,899,9,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,61,1,61,1,61,1,61,1,62,
	1,62,1,62,1,62,1,63,1,63,1,63,5,63,919,8,63,10,63,12,63,922,9,63,1,64,1,
	64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,5,64,934,8,64,10,64,12,64,937,
	9,64,1,64,1,64,1,65,1,65,1,65,5,65,944,8,65,10,65,12,65,947,9,65,1,66,1,
	66,1,66,3,66,952,8,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,5,67,961,8,67,
	10,67,12,67,964,9,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,5,69,974,8,
	69,10,69,12,69,977,9,69,1,70,1,70,1,70,5,70,982,8,70,10,70,12,70,985,9,
	70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,3,72,995,8,72,1,72,1,72,3,72,
	999,8,72,1,72,1,72,3,72,1003,8,72,1,72,1,72,3,72,1007,8,72,5,72,1009,8,
	72,10,72,12,72,1012,9,72,1,73,1,73,1,73,3,73,1017,8,73,1,73,1,73,1,73,1,
	73,1,73,1,73,1,73,1,73,1,73,3,73,1028,8,73,1,73,1,73,1,73,1,73,1,73,1,73,
	1,73,3,73,1037,8,73,1,73,1,73,1,73,1,73,3,73,1043,8,73,1,74,1,74,1,74,3,
	74,1048,8,74,1,74,3,74,1051,8,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
	1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
	75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1083,8,75,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,1115,8,76,
	1,77,1,77,5,77,1119,8,77,10,77,12,77,1122,9,77,1,77,1,77,1,77,5,77,1127,
	8,77,10,77,12,77,1130,9,77,5,77,1132,8,77,10,77,12,77,1135,9,77,1,78,1,
	78,1,78,1,78,1,78,1,78,1,78,1,78,5,78,1145,8,78,10,78,12,78,1148,9,78,1,
	79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
	1,81,1,81,1,81,5,81,1168,8,81,10,81,12,81,1171,9,81,1,81,1,81,1,82,1,82,
	1,83,1,83,1,83,1,83,3,83,1181,8,83,1,84,1,84,1,85,1,85,1,86,1,86,1,86,1,
	86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,3,86,
	1204,8,86,1,86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,1,
	91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,
	1,91,3,91,1234,8,91,1,91,1,91,1,91,3,91,1239,8,91,1,91,1,91,1,92,1,92,1,
	92,1,92,1,92,1,92,1,92,3,92,1250,8,92,1,92,1,92,3,92,1254,8,92,1,93,1,93,
	1,93,1,93,1,93,1,93,1,93,1,93,3,93,1264,8,93,1,93,3,93,1267,8,93,1,93,1,
	93,1,93,1,93,1,93,3,93,1274,8,93,1,93,1,93,1,93,1,93,3,93,1280,8,93,1,93,
	1,93,3,93,1284,8,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,3,
	94,1296,8,94,1,94,3,94,1299,8,94,1,94,1,94,1,94,1,94,1,94,3,94,1306,8,94,
	1,94,1,94,1,94,1,94,3,94,1312,8,94,1,94,1,94,3,94,1316,8,94,1,94,1,94,1,
	95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1327,8,95,1,96,1,96,1,96,1,96,5,96,
	1333,8,96,10,96,12,96,1336,9,96,1,96,1,96,1,97,1,97,1,97,5,97,1343,8,97,
	10,97,12,97,1346,9,97,1,98,1,98,1,98,1,98,3,98,1352,8,98,1,99,1,99,1,99,
	1,99,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,5,101,1366,8,101,10,
	101,12,101,1369,9,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,
	102,3,102,1380,8,102,1,102,1,102,3,102,1384,8,102,1,102,1,102,1,102,1,102,
	1,102,1,102,1,102,1,102,3,102,1394,8,102,1,102,1,102,3,102,1398,8,102,1,
	102,1,102,1,102,1,102,1,102,1,102,5,102,1406,8,102,10,102,12,102,1409,9,
	102,1,102,1,102,3,102,1413,8,102,3,102,1415,8,102,1,103,1,103,1,104,1,104,
	1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1429,8,105,10,105,
	12,105,1432,9,105,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1440,8,105,
	10,105,12,105,1443,9,105,1,105,1,105,1,106,1,106,1,107,1,107,3,107,1451,
	8,107,1,108,1,108,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
	1,111,1,111,1,111,1,112,1,112,3,112,1469,8,112,1,113,1,113,1,114,1,114,
	1,114,1,114,1,114,1,114,5,114,1479,8,114,10,114,12,114,1482,9,114,1,114,
	3,114,1485,8,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,
	1,116,1,116,1,116,1,116,3,116,1500,8,116,1,116,1,116,1,116,1,117,1,117,
	1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,119,1,119,5,119,1516,8,119,
	10,119,12,119,1519,9,119,1,120,1,120,1,120,1,120,1,121,1,121,1,122,1,122,
	1,123,3,123,1530,8,123,1,123,1,123,3,123,1534,8,123,1,123,1,123,3,123,1538,
	8,123,1,123,3,123,1541,8,123,1,124,1,124,1,124,1,124,3,124,1547,8,124,1,
	124,1,124,3,124,1551,8,124,1,125,1,125,1,126,1,126,1,126,5,126,1558,8,126,
	10,126,12,126,1561,9,126,1,127,1,127,1,127,4,127,1566,8,127,11,127,12,127,
	1567,1,128,1,128,1,128,3,128,1573,8,128,1,128,1,128,1,129,1,129,1,130,1,
	130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,4,130,1588,8,130,11,130,12,
	130,1589,1,130,1,130,3,130,1594,8,130,1,131,1,131,1,131,1,131,1,131,1,131,
	1,131,1,132,1,132,1,132,1,132,5,132,1607,8,132,10,132,12,132,1610,9,132,
	1,132,1,132,1,133,1,133,1,133,3,133,1617,8,133,1,134,1,134,3,134,1621,8,
	134,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,0,4,34,52,54,
	92,137,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
	46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
	94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,
	132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,
	168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,
	204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,
	240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,0,16,
	2,0,3,4,90,90,2,0,45,45,112,112,3,0,12,12,79,79,117,117,4,0,42,42,48,49,
	65,66,76,76,2,0,42,42,76,76,3,0,39,39,73,74,84,84,8,0,6,6,21,21,47,47,50,
	50,73,73,84,84,87,88,105,105,5,0,8,9,13,15,27,28,100,101,109,110,2,0,143,
	143,145,145,5,0,6,6,50,50,73,73,87,87,105,105,3,0,43,43,62,62,64,64,2,0,
	137,137,141,141,2,0,16,16,38,38,2,0,10,10,103,103,5,0,7,7,17,17,29,29,70,
	71,107,107,6,0,12,12,70,71,74,74,79,79,81,81,84,84,1715,0,274,1,0,0,0,2,
	283,1,0,0,0,4,295,1,0,0,0,6,297,1,0,0,0,8,313,1,0,0,0,10,324,1,0,0,0,12,
	326,1,0,0,0,14,333,1,0,0,0,16,340,1,0,0,0,18,348,1,0,0,0,20,356,1,0,0,0,
	22,361,1,0,0,0,24,367,1,0,0,0,26,380,1,0,0,0,28,387,1,0,0,0,30,390,1,0,
	0,0,32,403,1,0,0,0,34,425,1,0,0,0,36,436,1,0,0,0,38,438,1,0,0,0,40,440,
	1,0,0,0,42,442,1,0,0,0,44,444,1,0,0,0,46,446,1,0,0,0,48,448,1,0,0,0,50,
	484,1,0,0,0,52,492,1,0,0,0,54,518,1,0,0,0,56,529,1,0,0,0,58,535,1,0,0,0,
	60,537,1,0,0,0,62,539,1,0,0,0,64,549,1,0,0,0,66,551,1,0,0,0,68,556,1,0,
	0,0,70,561,1,0,0,0,72,566,1,0,0,0,74,571,1,0,0,0,76,584,1,0,0,0,78,591,
	1,0,0,0,80,596,1,0,0,0,82,601,1,0,0,0,84,612,1,0,0,0,86,614,1,0,0,0,88,
	616,1,0,0,0,90,627,1,0,0,0,92,764,1,0,0,0,94,818,1,0,0,0,96,820,1,0,0,0,
	98,822,1,0,0,0,100,830,1,0,0,0,102,835,1,0,0,0,104,837,1,0,0,0,106,842,
	1,0,0,0,108,852,1,0,0,0,110,862,1,0,0,0,112,869,1,0,0,0,114,891,1,0,0,0,
	116,893,1,0,0,0,118,900,1,0,0,0,120,905,1,0,0,0,122,907,1,0,0,0,124,911,
	1,0,0,0,126,915,1,0,0,0,128,923,1,0,0,0,130,940,1,0,0,0,132,948,1,0,0,0,
	134,957,1,0,0,0,136,965,1,0,0,0,138,970,1,0,0,0,140,978,1,0,0,0,142,986,
	1,0,0,0,144,994,1,0,0,0,146,1042,1,0,0,0,148,1050,1,0,0,0,150,1082,1,0,
	0,0,152,1114,1,0,0,0,154,1116,1,0,0,0,156,1136,1,0,0,0,158,1149,1,0,0,0,
	160,1152,1,0,0,0,162,1157,1,0,0,0,164,1174,1,0,0,0,166,1180,1,0,0,0,168,
	1182,1,0,0,0,170,1184,1,0,0,0,172,1186,1,0,0,0,174,1207,1,0,0,0,176,1209,
	1,0,0,0,178,1211,1,0,0,0,180,1213,1,0,0,0,182,1215,1,0,0,0,184,1242,1,0,
	0,0,186,1255,1,0,0,0,188,1287,1,0,0,0,190,1319,1,0,0,0,192,1328,1,0,0,0,
	194,1339,1,0,0,0,196,1351,1,0,0,0,198,1353,1,0,0,0,200,1357,1,0,0,0,202,
	1359,1,0,0,0,204,1414,1,0,0,0,206,1416,1,0,0,0,208,1418,1,0,0,0,210,1422,
	1,0,0,0,212,1446,1,0,0,0,214,1450,1,0,0,0,216,1452,1,0,0,0,218,1454,1,0,
	0,0,220,1456,1,0,0,0,222,1461,1,0,0,0,224,1468,1,0,0,0,226,1470,1,0,0,0,
	228,1472,1,0,0,0,230,1489,1,0,0,0,232,1494,1,0,0,0,234,1504,1,0,0,0,236,
	1508,1,0,0,0,238,1513,1,0,0,0,240,1520,1,0,0,0,242,1524,1,0,0,0,244,1526,
	1,0,0,0,246,1540,1,0,0,0,248,1550,1,0,0,0,250,1552,1,0,0,0,252,1554,1,0,
	0,0,254,1562,1,0,0,0,256,1569,1,0,0,0,258,1576,1,0,0,0,260,1593,1,0,0,0,
	262,1595,1,0,0,0,264,1602,1,0,0,0,266,1613,1,0,0,0,268,1620,1,0,0,0,270,
	1622,1,0,0,0,272,1626,1,0,0,0,274,276,3,2,1,0,275,277,3,8,4,0,276,275,1,
	0,0,0,276,277,1,0,0,0,277,279,1,0,0,0,278,280,3,16,8,0,279,278,1,0,0,0,
	279,280,1,0,0,0,280,281,1,0,0,0,281,282,3,18,9,0,282,1,1,0,0,0,283,284,
	5,5,0,0,284,289,3,6,3,0,285,286,5,25,0,0,286,288,3,6,3,0,287,285,1,0,0,
	0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,3,1,0,0,0,291,289,
	1,0,0,0,292,296,5,141,0,0,293,296,3,90,45,0,294,296,3,258,129,0,295,292,
	1,0,0,0,295,293,1,0,0,0,295,294,1,0,0,0,296,5,1,0,0,0,297,298,3,26,13,0,
	298,300,5,57,0,0,299,301,5,60,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,302,
	1,0,0,0,302,307,3,4,2,0,303,304,5,25,0,0,304,306,3,4,2,0,305,303,1,0,0,
	0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,311,1,0,0,0,309,307,
	1,0,0,0,310,312,5,93,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,7,1,0,0,0,
	313,314,5,61,0,0,314,319,3,10,5,0,315,316,5,25,0,0,316,318,3,10,5,0,317,
	315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,9,1,0,0,
	0,321,319,1,0,0,0,322,325,3,12,6,0,323,325,3,14,7,0,324,322,1,0,0,0,324,
	323,1,0,0,0,325,11,1,0,0,0,326,327,3,26,13,0,327,328,5,24,0,0,328,329,5,
	42,0,0,329,330,5,59,0,0,330,331,3,134,67,0,331,332,5,92,0,0,332,13,1,0,
	0,0,333,334,3,26,13,0,334,335,5,24,0,0,335,338,5,42,0,0,336,339,3,92,46,
	0,337,339,3,166,83,0,338,336,1,0,0,0,338,337,1,0,0,0,339,15,1,0,0,0,340,
	342,5,116,0,0,341,343,5,60,0,0,342,341,1,0,0,0,342,343,1,0,0,0,343,344,
	1,0,0,0,344,346,3,92,46,0,345,347,5,93,0,0,346,345,1,0,0,0,346,347,1,0,
	0,0,347,17,1,0,0,0,348,350,5,89,0,0,349,351,5,60,0,0,350,349,1,0,0,0,350,
	351,1,0,0,0,351,352,1,0,0,0,352,354,3,28,14,0,353,355,5,93,0,0,354,353,
	1,0,0,0,354,355,1,0,0,0,355,19,1,0,0,0,356,357,7,0,0,0,357,21,1,0,0,0,358,
	362,3,74,37,0,359,362,3,78,39,0,360,362,3,76,38,0,361,358,1,0,0,0,361,359,
	1,0,0,0,361,360,1,0,0,0,362,365,1,0,0,0,363,364,5,40,0,0,364,366,3,20,10,
	0,365,363,1,0,0,0,365,366,1,0,0,0,366,23,1,0,0,0,367,368,5,142,0,0,368,
	369,5,60,0,0,369,370,3,92,46,0,370,371,5,25,0,0,371,374,3,244,122,0,372,
	373,5,25,0,0,373,375,3,242,121,0,374,372,1,0,0,0,374,375,1,0,0,0,375,376,
	1,0,0,0,376,377,5,93,0,0,377,378,5,40,0,0,378,379,3,20,10,0,379,25,1,0,
	0,0,380,381,5,141,0,0,381,27,1,0,0,0,382,388,3,64,32,0,383,388,3,32,16,
	0,384,388,3,88,44,0,385,388,3,30,15,0,386,388,3,82,41,0,387,382,1,0,0,0,
	387,383,1,0,0,0,387,384,1,0,0,0,387,385,1,0,0,0,387,386,1,0,0,0,388,29,
	1,0,0,0,389,391,5,60,0,0,390,389,1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,
	0,392,394,3,92,46,0,393,395,5,93,0,0,394,393,1,0,0,0,394,395,1,0,0,0,395,
	31,1,0,0,0,396,404,3,24,12,0,397,404,3,34,17,0,398,404,3,54,27,0,399,404,
	3,46,23,0,400,404,3,48,24,0,401,404,3,22,11,0,402,404,3,70,35,0,403,396,
	1,0,0,0,403,397,1,0,0,0,403,398,1,0,0,0,403,399,1,0,0,0,403,400,1,0,0,0,
	403,401,1,0,0,0,403,402,1,0,0,0,404,33,1,0,0,0,405,406,6,17,-1,0,406,426,
	3,220,110,0,407,426,3,38,19,0,408,410,3,36,18,0,409,411,5,60,0,0,410,409,
	1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,414,3,34,17,0,413,415,5,93,
	0,0,414,413,1,0,0,0,414,415,1,0,0,0,415,426,1,0,0,0,416,417,3,54,27,0,417,
	418,3,42,21,0,418,419,3,54,27,0,419,426,1,0,0,0,420,426,3,220,110,0,421,
	422,3,46,23,0,422,423,3,44,22,0,423,424,3,46,23,0,424,426,1,0,0,0,425,405,
	1,0,0,0,425,407,1,0,0,0,425,408,1,0,0,0,425,416,1,0,0,0,425,420,1,0,0,0,
	425,421,1,0,0,0,426,433,1,0,0,0,427,428,10,4,0,0,428,429,3,40,20,0,429,
	430,3,34,17,5,430,432,1,0,0,0,431,427,1,0,0,0,432,435,1,0,0,0,433,431,1,
	0,0,0,433,434,1,0,0,0,434,35,1,0,0,0,435,433,1,0,0,0,436,437,5,75,0,0,437,
	37,1,0,0,0,438,439,7,1,0,0,439,39,1,0,0,0,440,441,7,2,0,0,441,41,1,0,0,
	0,442,443,7,3,0,0,443,43,1,0,0,0,444,445,7,4,0,0,445,45,1,0,0,0,446,447,
	5,143,0,0,447,47,1,0,0,0,448,449,5,74,0,0,449,49,1,0,0,0,450,452,5,60,0,
	0,451,450,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,456,
	1,0,0,0,455,453,1,0,0,0,456,460,3,92,46,0,457,459,5,93,0,0,458,457,1,0,
	0,0,459,462,1,0,0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,462,
	460,1,0,0,0,463,467,3,42,21,0,464,466,5,60,0,0,465,464,1,0,0,0,466,469,
	1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,470,1,0,0,0,469,467,1,0,0,0,
	470,474,3,92,46,0,471,473,5,93,0,0,472,471,1,0,0,0,473,476,1,0,0,0,474,
	472,1,0,0,0,474,475,1,0,0,0,475,485,1,0,0,0,476,474,1,0,0,0,477,478,3,92,
	46,0,478,480,5,55,0,0,479,481,5,75,0,0,480,479,1,0,0,0,480,481,1,0,0,0,
	481,482,1,0,0,0,482,483,5,78,0,0,483,485,1,0,0,0,484,453,1,0,0,0,484,477,
	1,0,0,0,485,51,1,0,0,0,486,487,6,26,-1,0,487,488,3,50,25,0,488,489,3,40,
	20,0,489,490,3,50,25,0,490,493,1,0,0,0,491,493,3,50,25,0,492,486,1,0,0,
	0,492,491,1,0,0,0,493,500,1,0,0,0,494,495,10,1,0,0,495,496,3,40,20,0,496,
	497,3,52,26,2,497,499,1,0,0,0,498,494,1,0,0,0,499,502,1,0,0,0,500,498,1,
	0,0,0,500,501,1,0,0,0,501,53,1,0,0,0,502,500,1,0,0,0,503,504,6,27,-1,0,
	504,505,3,60,30,0,505,506,5,60,0,0,506,507,3,54,27,0,507,508,5,93,0,0,508,
	519,1,0,0,0,509,510,3,62,31,0,510,511,5,60,0,0,511,512,3,54,27,0,512,513,
	5,93,0,0,513,519,1,0,0,0,514,519,3,214,107,0,515,519,3,246,123,0,516,519,
	5,77,0,0,517,519,3,56,28,0,518,503,1,0,0,0,518,509,1,0,0,0,518,514,1,0,
	0,0,518,515,1,0,0,0,518,516,1,0,0,0,518,517,1,0,0,0,519,526,1,0,0,0,520,
	521,10,5,0,0,521,522,3,58,29,0,522,523,3,54,27,6,523,525,1,0,0,0,524,520,
	1,0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,55,1,0,0,0,
	528,526,1,0,0,0,529,530,5,60,0,0,530,531,5,138,0,0,531,532,5,25,0,0,532,
	533,5,138,0,0,533,534,5,93,0,0,534,57,1,0,0,0,535,536,7,5,0,0,536,59,1,
	0,0,0,537,538,7,6,0,0,538,61,1,0,0,0,539,540,7,7,0,0,540,63,1,0,0,0,541,
	550,3,68,34,0,542,550,3,72,36,0,543,550,3,74,37,0,544,550,3,78,39,0,545,
	550,3,76,38,0,546,550,3,80,40,0,547,550,3,70,35,0,548,550,3,66,33,0,549,
	541,1,0,0,0,549,542,1,0,0,0,549,543,1,0,0,0,549,544,1,0,0,0,549,545,1,0,
	0,0,549,546,1,0,0,0,549,547,1,0,0,0,549,548,1,0,0,0,550,65,1,0,0,0,551,
	552,5,69,0,0,552,553,5,60,0,0,553,554,3,92,46,0,554,555,5,93,0,0,555,67,
	1,0,0,0,556,557,5,51,0,0,557,558,5,60,0,0,558,559,3,92,46,0,559,560,5,93,
	0,0,560,69,1,0,0,0,561,562,5,22,0,0,562,563,5,60,0,0,563,564,3,92,46,0,
	564,565,5,93,0,0,565,71,1,0,0,0,566,567,5,52,0,0,567,568,5,60,0,0,568,569,
	3,92,46,0,569,570,5,93,0,0,570,73,1,0,0,0,571,572,5,56,0,0,572,573,5,60,
	0,0,573,580,3,92,46,0,574,575,5,25,0,0,575,578,3,244,122,0,576,577,5,25,
	0,0,577,579,3,242,121,0,578,576,1,0,0,0,578,579,1,0,0,0,579,581,1,0,0,0,
	580,574,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,583,5,93,0,0,583,75,
	1,0,0,0,584,585,5,53,0,0,585,586,5,60,0,0,586,587,3,92,46,0,587,588,5,25,
	0,0,588,589,3,244,122,0,589,590,5,93,0,0,590,77,1,0,0,0,591,592,5,53,0,
	0,592,593,5,60,0,0,593,594,3,92,46,0,594,595,5,93,0,0,595,79,1,0,0,0,596,
	597,5,54,0,0,597,598,5,60,0,0,598,599,3,92,46,0,599,600,5,93,0,0,600,81,
	1,0,0,0,601,602,5,37,0,0,602,603,5,60,0,0,603,604,3,92,46,0,604,605,5,25,
	0,0,605,608,5,143,0,0,606,607,5,25,0,0,607,609,3,86,43,0,608,606,1,0,0,
	0,608,609,1,0,0,0,609,610,1,0,0,0,610,611,5,93,0,0,611,83,1,0,0,0,612,613,
	5,140,0,0,613,85,1,0,0,0,614,615,7,8,0,0,615,87,1,0,0,0,616,617,5,41,0,
	0,617,618,5,60,0,0,618,619,3,92,46,0,619,620,5,25,0,0,620,623,5,143,0,0,
	621,622,5,25,0,0,622,624,3,86,43,0,623,621,1,0,0,0,623,624,1,0,0,0,624,
	625,1,0,0,0,625,626,5,93,0,0,626,89,1,0,0,0,627,628,5,34,0,0,628,629,5,
	60,0,0,629,632,3,84,42,0,630,631,5,25,0,0,631,633,3,86,43,0,632,630,1,0,
	0,0,632,633,1,0,0,0,633,634,1,0,0,0,634,635,5,93,0,0,635,91,1,0,0,0,636,
	637,6,46,-1,0,637,765,3,256,128,0,638,639,5,102,0,0,639,640,5,60,0,0,640,
	641,3,92,46,0,641,642,5,25,0,0,642,643,5,58,0,0,643,644,3,130,65,0,644,
	645,5,91,0,0,645,646,5,93,0,0,646,765,1,0,0,0,647,648,5,111,0,0,648,649,
	5,60,0,0,649,650,3,92,46,0,650,651,5,25,0,0,651,652,5,58,0,0,652,653,3,
	134,67,0,653,654,5,91,0,0,654,655,5,93,0,0,655,765,1,0,0,0,656,657,5,60,
	0,0,657,658,3,92,46,0,658,659,5,93,0,0,659,765,1,0,0,0,660,765,3,32,16,
	0,661,765,3,22,11,0,662,765,3,150,75,0,663,765,3,152,76,0,664,765,3,24,
	12,0,665,765,3,202,101,0,666,765,3,26,13,0,667,765,3,210,105,0,668,765,
	3,90,45,0,669,670,5,44,0,0,670,671,5,60,0,0,671,672,3,92,46,0,672,673,5,
	25,0,0,673,676,5,58,0,0,674,677,3,134,67,0,675,677,3,26,13,0,676,674,1,
	0,0,0,676,675,1,0,0,0,677,678,1,0,0,0,678,679,5,91,0,0,679,680,5,93,0,0,
	680,765,1,0,0,0,681,682,5,44,0,0,682,683,5,60,0,0,683,684,3,92,46,0,684,
	685,5,25,0,0,685,688,5,58,0,0,686,689,3,22,11,0,687,689,3,26,13,0,688,686,
	1,0,0,0,688,687,1,0,0,0,689,690,1,0,0,0,690,691,5,91,0,0,691,692,5,93,0,
	0,692,765,1,0,0,0,693,765,3,98,49,0,694,765,3,100,50,0,695,765,3,104,52,
	0,696,765,3,110,55,0,697,765,3,112,56,0,698,765,3,106,53,0,699,765,3,108,
	54,0,700,765,3,114,57,0,701,765,3,118,59,0,702,765,3,122,61,0,703,765,3,
	184,92,0,704,765,3,172,86,0,705,765,3,182,91,0,706,765,3,186,93,0,707,765,
	3,188,94,0,708,765,3,234,117,0,709,710,5,94,0,0,710,711,5,60,0,0,711,712,
	3,92,46,0,712,713,5,25,0,0,713,716,5,58,0,0,714,717,3,22,11,0,715,717,3,
	26,13,0,716,714,1,0,0,0,716,715,1,0,0,0,717,718,1,0,0,0,718,719,5,91,0,
	0,719,720,5,93,0,0,720,765,1,0,0,0,721,722,5,94,0,0,722,723,5,60,0,0,723,
	724,3,92,46,0,724,726,5,25,0,0,725,727,5,58,0,0,726,725,1,0,0,0,726,727,
	1,0,0,0,727,730,1,0,0,0,728,731,3,32,16,0,729,731,3,26,13,0,730,728,1,0,
	0,0,730,729,1,0,0,0,731,733,1,0,0,0,732,734,5,91,0,0,733,732,1,0,0,0,733,
	734,1,0,0,0,734,735,1,0,0,0,735,736,5,93,0,0,736,765,1,0,0,0,737,738,5,
	94,0,0,738,739,5,60,0,0,739,740,3,92,46,0,740,741,5,25,0,0,741,744,5,58,
	0,0,742,745,3,138,69,0,743,745,3,26,13,0,744,742,1,0,0,0,744,743,1,0,0,
	0,745,746,1,0,0,0,746,747,5,91,0,0,747,748,5,93,0,0,748,765,1,0,0,0,749,
	750,5,94,0,0,750,751,5,60,0,0,751,752,3,92,46,0,752,753,5,25,0,0,753,756,
	5,58,0,0,754,757,3,134,67,0,755,757,3,26,13,0,756,754,1,0,0,0,756,755,1,
	0,0,0,757,758,1,0,0,0,758,759,5,91,0,0,759,760,5,93,0,0,760,765,1,0,0,0,
	761,765,3,230,115,0,762,765,3,232,116,0,763,765,3,190,95,0,764,636,1,0,
	0,0,764,638,1,0,0,0,764,647,1,0,0,0,764,656,1,0,0,0,764,660,1,0,0,0,764,
	661,1,0,0,0,764,662,1,0,0,0,764,663,1,0,0,0,764,664,1,0,0,0,764,665,1,0,
	0,0,764,666,1,0,0,0,764,667,1,0,0,0,764,668,1,0,0,0,764,669,1,0,0,0,764,
	681,1,0,0,0,764,693,1,0,0,0,764,694,1,0,0,0,764,695,1,0,0,0,764,696,1,0,
	0,0,764,697,1,0,0,0,764,698,1,0,0,0,764,699,1,0,0,0,764,700,1,0,0,0,764,
	701,1,0,0,0,764,702,1,0,0,0,764,703,1,0,0,0,764,704,1,0,0,0,764,705,1,0,
	0,0,764,706,1,0,0,0,764,707,1,0,0,0,764,708,1,0,0,0,764,709,1,0,0,0,764,
	721,1,0,0,0,764,737,1,0,0,0,764,749,1,0,0,0,764,761,1,0,0,0,764,762,1,0,
	0,0,764,763,1,0,0,0,765,815,1,0,0,0,766,767,10,50,0,0,767,768,3,40,20,0,
	768,769,3,92,46,51,769,814,1,0,0,0,770,771,10,35,0,0,771,772,3,42,21,0,
	772,773,3,92,46,36,773,814,1,0,0,0,774,775,10,34,0,0,775,776,3,94,47,0,
	776,777,3,92,46,35,777,814,1,0,0,0,778,779,10,4,0,0,779,780,5,81,0,0,780,
	814,3,92,46,5,781,782,10,49,0,0,782,783,5,59,0,0,783,784,3,130,65,0,784,
	785,5,92,0,0,785,814,1,0,0,0,786,787,10,47,0,0,787,788,5,59,0,0,788,789,
	3,134,67,0,789,790,5,92,0,0,790,814,1,0,0,0,791,792,10,46,0,0,792,793,5,
	59,0,0,793,794,3,26,13,0,794,795,5,92,0,0,795,814,1,0,0,0,796,797,10,38,
	0,0,797,798,5,40,0,0,798,814,3,120,60,0,799,800,10,9,0,0,800,802,5,55,0,
	0,801,803,5,75,0,0,802,801,1,0,0,0,802,803,1,0,0,0,803,804,1,0,0,0,804,
	814,5,78,0,0,805,806,10,8,0,0,806,814,3,260,130,0,807,808,10,7,0,0,808,
	814,3,262,131,0,809,810,10,6,0,0,810,814,3,270,135,0,811,812,10,5,0,0,812,
	814,3,272,136,0,813,766,1,0,0,0,813,770,1,0,0,0,813,774,1,0,0,0,813,778,
	1,0,0,0,813,781,1,0,0,0,813,786,1,0,0,0,813,791,1,0,0,0,813,796,1,0,0,0,
	813,799,1,0,0,0,813,805,1,0,0,0,813,807,1,0,0,0,813,809,1,0,0,0,813,811,
	1,0,0,0,814,817,1,0,0,0,815,813,1,0,0,0,815,816,1,0,0,0,816,93,1,0,0,0,
	817,815,1,0,0,0,818,819,7,5,0,0,819,95,1,0,0,0,820,821,7,9,0,0,821,97,1,
	0,0,0,822,824,3,96,48,0,823,825,5,60,0,0,824,823,1,0,0,0,824,825,1,0,0,
	0,825,826,1,0,0,0,826,828,3,92,46,0,827,829,5,93,0,0,828,827,1,0,0,0,828,
	829,1,0,0,0,829,99,1,0,0,0,830,831,3,62,31,0,831,832,5,60,0,0,832,833,3,
	92,46,0,833,834,5,93,0,0,834,101,1,0,0,0,835,836,7,10,0,0,836,103,1,0,0,
	0,837,838,3,102,51,0,838,839,5,60,0,0,839,840,3,92,46,0,840,841,5,93,0,
	0,841,105,1,0,0,0,842,843,5,85,0,0,843,844,5,60,0,0,844,845,3,92,46,0,845,
	848,5,25,0,0,846,849,3,54,27,0,847,849,3,26,13,0,848,846,1,0,0,0,848,847,
	1,0,0,0,849,850,1,0,0,0,850,851,5,93,0,0,851,107,1,0,0,0,852,853,5,72,0,
	0,853,854,5,60,0,0,854,855,3,92,46,0,855,858,5,25,0,0,856,859,3,54,27,0,
	857,859,3,26,13,0,858,856,1,0,0,0,858,857,1,0,0,0,859,860,1,0,0,0,860,861,
	5,93,0,0,861,109,1,0,0,0,862,863,5,71,0,0,863,864,5,60,0,0,864,865,3,92,
	46,0,865,866,5,25,0,0,866,867,3,92,46,0,867,868,5,93,0,0,868,111,1,0,0,
	0,869,870,5,70,0,0,870,871,5,60,0,0,871,872,3,92,46,0,872,873,5,25,0,0,
	873,874,3,92,46,0,874,875,5,93,0,0,875,113,1,0,0,0,876,877,5,75,0,0,877,
	878,5,60,0,0,878,879,3,92,46,0,879,880,5,93,0,0,880,892,1,0,0,0,881,882,
	5,18,0,0,882,883,5,60,0,0,883,884,3,92,46,0,884,887,5,25,0,0,885,888,3,
	54,27,0,886,888,3,26,13,0,887,885,1,0,0,0,887,886,1,0,0,0,888,889,1,0,0,
	0,889,890,5,93,0,0,890,892,1,0,0,0,891,876,1,0,0,0,891,881,1,0,0,0,892,
	115,1,0,0,0,893,897,5,141,0,0,894,896,5,141,0,0,895,894,1,0,0,0,896,899,
	1,0,0,0,897,895,1,0,0,0,897,898,1,0,0,0,898,117,1,0,0,0,899,897,1,0,0,0,
	900,901,5,60,0,0,901,902,3,116,58,0,902,903,5,93,0,0,903,904,3,92,46,0,
	904,119,1,0,0,0,905,906,7,11,0,0,906,121,1,0,0,0,907,908,5,58,0,0,908,909,
	3,126,63,0,909,910,5,91,0,0,910,123,1,0,0,0,911,912,3,120,60,0,912,913,
	5,24,0,0,913,914,3,92,46,0,914,125,1,0,0,0,915,920,3,124,62,0,916,917,5,
	99,0,0,917,919,3,124,62,0,918,916,1,0,0,0,919,922,1,0,0,0,920,918,1,0,0,
	0,920,921,1,0,0,0,921,127,1,0,0,0,922,920,1,0,0,0,923,924,5,58,0,0,924,
	925,3,120,60,0,925,926,5,24,0,0,926,927,3,92,46,0,927,935,1,0,0,0,928,929,
	5,99,0,0,929,930,3,120,60,0,930,931,5,24,0,0,931,932,3,92,46,0,932,934,
	1,0,0,0,933,928,1,0,0,0,934,937,1,0,0,0,935,933,1,0,0,0,935,936,1,0,0,0,
	936,938,1,0,0,0,937,935,1,0,0,0,938,939,5,91,0,0,939,129,1,0,0,0,940,945,
	3,132,66,0,941,942,5,25,0,0,942,944,3,132,66,0,943,941,1,0,0,0,944,947,
	1,0,0,0,945,943,1,0,0,0,945,946,1,0,0,0,946,131,1,0,0,0,947,945,1,0,0,0,
	948,951,3,244,122,0,949,950,5,24,0,0,950,952,3,242,121,0,951,949,1,0,0,
	0,951,952,1,0,0,0,952,953,1,0,0,0,953,954,5,60,0,0,954,955,3,92,46,0,955,
	956,5,93,0,0,956,133,1,0,0,0,957,962,3,146,73,0,958,959,5,25,0,0,959,961,
	3,146,73,0,960,958,1,0,0,0,961,964,1,0,0,0,962,960,1,0,0,0,962,963,1,0,
	0,0,963,135,1,0,0,0,964,962,1,0,0,0,965,966,3,244,122,0,966,967,5,60,0,
	0,967,968,3,32,16,0,968,969,5,93,0,0,969,137,1,0,0,0,970,975,3,136,68,0,
	971,972,5,25,0,0,972,974,3,136,68,0,973,971,1,0,0,0,974,977,1,0,0,0,975,
	973,1,0,0,0,975,976,1,0,0,0,976,139,1,0,0,0,977,975,1,0,0,0,978,983,3,142,
	71,0,979,980,5,25,0,0,980,982,3,142,71,0,981,979,1,0,0,0,982,985,1,0,0,
	0,983,981,1,0,0,0,983,984,1,0,0,0,984,141,1,0,0,0,985,983,1,0,0,0,986,987,
	3,244,122,0,987,988,5,60,0,0,988,989,3,32,16,0,989,990,5,24,0,0,990,991,
	3,32,16,0,991,992,5,93,0,0,992,143,1,0,0,0,993,995,5,60,0,0,994,993,1,0,
	0,0,994,995,1,0,0,0,995,996,1,0,0,0,996,998,3,92,46,0,997,999,5,93,0,0,
	998,997,1,0,0,0,998,999,1,0,0,0,999,1010,1,0,0,0,1000,1002,5,40,0,0,1001,
	1003,5,60,0,0,1002,1001,1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,
	1006,3,92,46,0,1005,1007,5,93,0,0,1006,1005,1,0,0,0,1006,1007,1,0,0,0,1007,
	1009,1,0,0,0,1008,1000,1,0,0,0,1009,1012,1,0,0,0,1010,1008,1,0,0,0,1010,
	1011,1,0,0,0,1011,145,1,0,0,0,1012,1010,1,0,0,0,1013,1016,3,244,122,0,1014,
	1015,5,24,0,0,1015,1017,3,242,121,0,1016,1014,1,0,0,0,1016,1017,1,0,0,0,
	1017,1018,1,0,0,0,1018,1019,5,60,0,0,1019,1020,3,144,72,0,1020,1021,5,24,
	0,0,1021,1022,3,144,72,0,1022,1023,5,93,0,0,1023,1043,1,0,0,0,1024,1027,
	3,244,122,0,1025,1026,5,24,0,0,1026,1028,3,242,121,0,1027,1025,1,0,0,0,
	1027,1028,1,0,0,0,1028,1029,1,0,0,0,1029,1030,5,60,0,0,1030,1031,3,76,38,
	0,1031,1032,5,93,0,0,1032,1043,1,0,0,0,1033,1036,3,244,122,0,1034,1035,
	5,24,0,0,1035,1037,3,242,121,0,1036,1034,1,0,0,0,1036,1037,1,0,0,0,1037,
	1038,1,0,0,0,1038,1039,5,60,0,0,1039,1040,3,144,72,0,1040,1041,5,93,0,0,
	1041,1043,1,0,0,0,1042,1013,1,0,0,0,1042,1024,1,0,0,0,1042,1033,1,0,0,0,
	1043,147,1,0,0,0,1044,1047,3,144,72,0,1045,1046,5,24,0,0,1046,1048,3,144,
	72,0,1047,1045,1,0,0,0,1047,1048,1,0,0,0,1048,1051,1,0,0,0,1049,1051,3,
	74,37,0,1050,1044,1,0,0,0,1050,1049,1,0,0,0,1051,149,1,0,0,0,1052,1053,
	5,125,0,0,1053,1054,5,60,0,0,1054,1055,3,148,74,0,1055,1056,5,93,0,0,1056,
	1083,1,0,0,0,1057,1058,5,126,0,0,1058,1059,5,60,0,0,1059,1060,3,148,74,
	0,1060,1061,5,93,0,0,1061,1083,1,0,0,0,1062,1063,5,127,0,0,1063,1064,5,
	60,0,0,1064,1065,3,148,74,0,1065,1066,5,93,0,0,1066,1083,1,0,0,0,1067,1068,
	5,128,0,0,1068,1069,5,60,0,0,1069,1070,3,148,74,0,1070,1071,5,93,0,0,1071,
	1083,1,0,0,0,1072,1073,5,129,0,0,1073,1074,5,60,0,0,1074,1075,3,148,74,
	0,1075,1076,5,93,0,0,1076,1083,1,0,0,0,1077,1078,5,130,0,0,1078,1079,5,
	60,0,0,1079,1080,3,148,74,0,1080,1081,5,93,0,0,1081,1083,1,0,0,0,1082,1052,
	1,0,0,0,1082,1057,1,0,0,0,1082,1062,1,0,0,0,1082,1067,1,0,0,0,1082,1072,
	1,0,0,0,1082,1077,1,0,0,0,1083,151,1,0,0,0,1084,1085,5,131,0,0,1085,1086,
	5,60,0,0,1086,1087,3,148,74,0,1087,1088,5,93,0,0,1088,1115,1,0,0,0,1089,
	1090,5,132,0,0,1090,1091,5,60,0,0,1091,1092,3,148,74,0,1092,1093,5,93,0,
	0,1093,1115,1,0,0,0,1094,1095,5,133,0,0,1095,1096,5,60,0,0,1096,1097,3,
	148,74,0,1097,1098,5,93,0,0,1098,1115,1,0,0,0,1099,1100,5,134,0,0,1100,
	1101,5,60,0,0,1101,1102,3,148,74,0,1102,1103,5,93,0,0,1103,1115,1,0,0,0,
	1104,1105,5,135,0,0,1105,1106,5,60,0,0,1106,1107,3,148,74,0,1107,1108,5,
	93,0,0,1108,1115,1,0,0,0,1109,1110,5,136,0,0,1110,1111,5,60,0,0,1111,1112,
	3,148,74,0,1112,1113,5,93,0,0,1113,1115,1,0,0,0,1114,1084,1,0,0,0,1114,
	1089,1,0,0,0,1114,1094,1,0,0,0,1114,1099,1,0,0,0,1114,1104,1,0,0,0,1114,
	1109,1,0,0,0,1115,153,1,0,0,0,1116,1120,3,248,124,0,1117,1119,3,248,124,
	0,1118,1117,1,0,0,0,1119,1122,1,0,0,0,1120,1118,1,0,0,0,1120,1121,1,0,0,
	0,1121,1133,1,0,0,0,1122,1120,1,0,0,0,1123,1124,5,25,0,0,1124,1128,3,248,
	124,0,1125,1127,3,248,124,0,1126,1125,1,0,0,0,1127,1130,1,0,0,0,1128,1126,
	1,0,0,0,1128,1129,1,0,0,0,1129,1132,1,0,0,0,1130,1128,1,0,0,0,1131,1123,
	1,0,0,0,1132,1135,1,0,0,0,1133,1131,1,0,0,0,1133,1134,1,0,0,0,1134,155,
	1,0,0,0,1135,1133,1,0,0,0,1136,1137,5,60,0,0,1137,1138,3,154,77,0,1138,
	1146,5,93,0,0,1139,1140,5,25,0,0,1140,1141,5,60,0,0,1141,1142,3,154,77,
	0,1142,1143,5,93,0,0,1143,1145,1,0,0,0,1144,1139,1,0,0,0,1145,1148,1,0,
	0,0,1146,1144,1,0,0,0,1146,1147,1,0,0,0,1147,157,1,0,0,0,1148,1146,1,0,
	0,0,1149,1150,5,120,0,0,1150,1151,3,156,78,0,1151,159,1,0,0,0,1152,1153,
	5,119,0,0,1153,1154,5,60,0,0,1154,1155,3,156,78,0,1155,1156,5,93,0,0,1156,
	161,1,0,0,0,1157,1158,5,121,0,0,1158,1159,5,60,0,0,1159,1160,5,60,0,0,1160,
	1161,3,156,78,0,1161,1169,5,93,0,0,1162,1163,5,25,0,0,1163,1164,5,60,0,
	0,1164,1165,3,156,78,0,1165,1166,5,93,0,0,1166,1168,1,0,0,0,1167,1162,1,
	0,0,0,1168,1171,1,0,0,0,1169,1167,1,0,0,0,1169,1170,1,0,0,0,1170,1172,1,
	0,0,0,1171,1169,1,0,0,0,1172,1173,5,93,0,0,1173,163,1,0,0,0,1174,1175,3,
	92,46,0,1175,165,1,0,0,0,1176,1181,3,92,46,0,1177,1181,3,160,80,0,1178,
	1181,3,158,79,0,1179,1181,3,162,81,0,1180,1176,1,0,0,0,1180,1177,1,0,0,
	0,1180,1178,1,0,0,0,1180,1179,1,0,0,0,1181,167,1,0,0,0,1182,1183,5,141,
	0,0,1183,169,1,0,0,0,1184,1185,5,141,0,0,1185,171,1,0,0,0,1186,1187,5,23,
	0,0,1187,1188,5,60,0,0,1188,1189,3,92,46,0,1189,1190,5,25,0,0,1190,1191,
	5,30,0,0,1191,1192,5,60,0,0,1192,1193,5,122,0,0,1193,1194,5,60,0,0,1194,
	1195,3,168,84,0,1195,1196,5,25,0,0,1196,1197,3,170,85,0,1197,1198,5,93,
	0,0,1198,1199,5,25,0,0,1199,1200,3,166,83,0,1200,1203,5,93,0,0,1201,1202,
	5,25,0,0,1202,1204,3,242,121,0,1203,1201,1,0,0,0,1203,1204,1,0,0,0,1204,
	1205,1,0,0,0,1205,1206,5,93,0,0,1206,173,1,0,0,0,1207,1208,5,141,0,0,1208,
	175,1,0,0,0,1209,1210,5,141,0,0,1210,177,1,0,0,0,1211,1212,3,166,83,0,1212,
	179,1,0,0,0,1213,1214,3,166,83,0,1214,181,1,0,0,0,1215,1216,5,23,0,0,1216,
	1217,5,60,0,0,1217,1218,3,92,46,0,1218,1219,5,25,0,0,1219,1220,5,31,0,0,
	1220,1221,5,60,0,0,1221,1222,5,122,0,0,1222,1223,5,60,0,0,1223,1224,3,174,
	87,0,1224,1225,5,25,0,0,1225,1226,3,176,88,0,1226,1227,5,93,0,0,1227,1228,
	5,25,0,0,1228,1229,3,178,89,0,1229,1230,5,25,0,0,1230,1233,3,180,90,0,1231,
	1232,5,25,0,0,1232,1234,5,36,0,0,1233,1231,1,0,0,0,1233,1234,1,0,0,0,1234,
	1235,1,0,0,0,1235,1238,5,93,0,0,1236,1237,5,25,0,0,1237,1239,3,242,121,
	0,1238,1236,1,0,0,0,1238,1239,1,0,0,0,1239,1240,1,0,0,0,1240,1241,5,93,
	0,0,1241,183,1,0,0,0,1242,1243,5,23,0,0,1243,1244,5,60,0,0,1244,1245,3,
	92,46,0,1245,1246,5,25,0,0,1246,1249,3,166,83,0,1247,1248,5,25,0,0,1248,
	1250,3,242,121,0,1249,1247,1,0,0,0,1249,1250,1,0,0,0,1250,1251,1,0,0,0,
	1251,1253,5,93,0,0,1252,1254,5,123,0,0,1253,1252,1,0,0,0,1253,1254,1,0,
	0,0,1254,185,1,0,0,0,1255,1256,5,118,0,0,1256,1257,5,60,0,0,1257,1258,3,
	92,46,0,1258,1259,5,25,0,0,1259,1266,3,192,96,0,1260,1261,5,25,0,0,1261,
	1263,5,58,0,0,1262,1264,3,200,100,0,1263,1262,1,0,0,0,1263,1264,1,0,0,0,
	1264,1265,1,0,0,0,1265,1267,5,91,0,0,1266,1260,1,0,0,0,1266,1267,1,0,0,
	0,1267,1273,1,0,0,0,1268,1269,5,25,0,0,1269,1270,5,58,0,0,1270,1271,3,194,
	97,0,1271,1272,5,91,0,0,1272,1274,1,0,0,0,1273,1268,1,0,0,0,1273,1274,1,
	0,0,0,1274,1283,1,0,0,0,1275,1276,5,25,0,0,1276,1279,5,58,0,0,1277,1280,
	3,134,67,0,1278,1280,3,74,37,0,1279,1277,1,0,0,0,1279,1278,1,0,0,0,1280,
	1281,1,0,0,0,1281,1282,5,91,0,0,1282,1284,1,0,0,0,1283,1275,1,0,0,0,1283,
	1284,1,0,0,0,1284,1285,1,0,0,0,1285,1286,5,93,0,0,1286,187,1,0,0,0,1287,
	1288,5,118,0,0,1288,1289,5,60,0,0,1289,1290,3,92,46,0,1290,1291,5,25,0,
	0,1291,1298,3,242,121,0,1292,1293,5,25,0,0,1293,1295,5,58,0,0,1294,1296,
	3,200,100,0,1295,1294,1,0,0,0,1295,1296,1,0,0,0,1296,1297,1,0,0,0,1297,
	1299,5,91,0,0,1298,1292,1,0,0,0,1298,1299,1,0,0,0,1299,1305,1,0,0,0,1300,
	1301,5,25,0,0,1301,1302,5,58,0,0,1302,1303,3,194,97,0,1303,1304,5,91,0,
	0,1304,1306,1,0,0,0,1305,1300,1,0,0,0,1305,1306,1,0,0,0,1306,1315,1,0,0,
	0,1307,1308,5,25,0,0,1308,1311,5,58,0,0,1309,1312,3,134,67,0,1310,1312,
	3,74,37,0,1311,1309,1,0,0,0,1311,1310,1,0,0,0,1312,1313,1,0,0,0,1313,1314,
	5,91,0,0,1314,1316,1,0,0,0,1315,1307,1,0,0,0,1315,1316,1,0,0,0,1316,1317,
	1,0,0,0,1317,1318,5,93,0,0,1318,189,1,0,0,0,1319,1320,5,86,0,0,1320,1321,
	5,60,0,0,1321,1322,3,92,46,0,1322,1323,5,25,0,0,1323,1326,5,143,0,0,1324,
	1325,5,25,0,0,1325,1327,5,137,0,0,1326,1324,1,0,0,0,1326,1327,1,0,0,0,1327,
	191,1,0,0,0,1328,1329,5,58,0,0,1329,1334,3,198,99,0,1330,1331,5,25,0,0,
	1331,1333,3,198,99,0,1332,1330,1,0,0,0,1333,1336,1,0,0,0,1334,1332,1,0,
	0,0,1334,1335,1,0,0,0,1335,1337,1,0,0,0,1336,1334,1,0,0,0,1337,1338,5,91,
	0,0,1338,193,1,0,0,0,1339,1344,3,196,98,0,1340,1341,5,25,0,0,1341,1343,
	3,196,98,0,1342,1340,1,0,0,0,1343,1346,1,0,0,0,1344,1342,1,0,0,0,1344,1345,
	1,0,0,0,1345,195,1,0,0,0,1346,1344,1,0,0,0,1347,1348,5,141,0,0,1348,1349,
	5,24,0,0,1349,1352,3,92,46,0,1350,1352,3,92,46,0,1351,1347,1,0,0,0,1351,
	1350,1,0,0,0,1352,197,1,0,0,0,1353,1354,3,244,122,0,1354,1355,5,24,0,0,
	1355,1356,3,242,121,0,1356,199,1,0,0,0,1357,1358,5,141,0,0,1358,201,1,0,
	0,0,1359,1360,5,32,0,0,1360,1361,5,141,0,0,1361,1362,5,80,0,0,1362,1367,
	3,204,102,0,1363,1364,5,25,0,0,1364,1366,3,204,102,0,1365,1363,1,0,0,0,
	1366,1369,1,0,0,0,1367,1365,1,0,0,0,1367,1368,1,0,0,0,1368,1370,1,0,0,0,
	1369,1367,1,0,0,0,1370,1371,5,115,0,0,1371,1372,3,92,46,0,1372,203,1,0,
	0,0,1373,1374,3,26,13,0,1374,1375,3,244,122,0,1375,1376,5,60,0,0,1376,1379,
	3,22,11,0,1377,1378,5,24,0,0,1378,1380,3,206,103,0,1379,1377,1,0,0,0,1379,
	1380,1,0,0,0,1380,1381,1,0,0,0,1381,1383,5,93,0,0,1382,1384,7,12,0,0,1383,
	1382,1,0,0,0,1383,1384,1,0,0,0,1384,1415,1,0,0,0,1385,1386,3,26,13,0,1386,
	1387,3,244,122,0,1387,1388,5,60,0,0,1388,1389,3,144,72,0,1389,1390,5,24,
	0,0,1390,1393,3,144,72,0,1391,1392,5,24,0,0,1392,1394,3,206,103,0,1393,
	1391,1,0,0,0,1393,1394,1,0,0,0,1394,1395,1,0,0,0,1395,1397,5,93,0,0,1396,
	1398,7,12,0,0,1397,1396,1,0,0,0,1397,1398,1,0,0,0,1398,1415,1,0,0,0,1399,
	1400,3,26,13,0,1400,1401,3,244,122,0,1401,1402,5,60,0,0,1402,1407,3,144,
	72,0,1403,1404,5,25,0,0,1404,1406,3,144,72,0,1405,1403,1,0,0,0,1406,1409,
	1,0,0,0,1407,1405,1,0,0,0,1407,1408,1,0,0,0,1408,1410,1,0,0,0,1409,1407,
	1,0,0,0,1410,1412,5,93,0,0,1411,1413,7,12,0,0,1412,1411,1,0,0,0,1412,1413,
	1,0,0,0,1413,1415,1,0,0,0,1414,1373,1,0,0,0,1414,1385,1,0,0,0,1414,1399,
	1,0,0,0,1415,205,1,0,0,0,1416,1417,5,143,0,0,1417,207,1,0,0,0,1418,1419,
	3,32,16,0,1419,1420,5,24,0,0,1420,1421,3,32,16,0,1421,209,1,0,0,0,1422,
	1423,5,32,0,0,1423,1424,5,141,0,0,1424,1425,5,80,0,0,1425,1430,3,204,102,
	0,1426,1427,5,25,0,0,1427,1429,3,204,102,0,1428,1426,1,0,0,0,1429,1432,
	1,0,0,0,1430,1428,1,0,0,0,1430,1431,1,0,0,0,1431,1433,1,0,0,0,1432,1430,
	1,0,0,0,1433,1434,5,114,0,0,1434,1435,5,63,0,0,1435,1436,5,65,0,0,1436,
	1441,3,248,124,0,1437,1438,5,99,0,0,1438,1440,3,248,124,0,1439,1437,1,0,
	0,0,1440,1443,1,0,0,0,1441,1439,1,0,0,0,1441,1442,1,0,0,0,1442,1444,1,0,
	0,0,1443,1441,1,0,0,0,1444,1445,5,48,0,0,1445,211,1,0,0,0,1446,1447,3,146,
	73,0,1447,213,1,0,0,0,1448,1451,3,224,112,0,1449,1451,3,228,114,0,1450,
	1448,1,0,0,0,1450,1449,1,0,0,0,1451,215,1,0,0,0,1452,1453,7,13,0,0,1453,
	217,1,0,0,0,1454,1455,7,14,0,0,1455,219,1,0,0,0,1456,1457,3,216,108,0,1457,
	1458,5,60,0,0,1458,1459,3,92,46,0,1459,1460,5,93,0,0,1460,221,1,0,0,0,1461,
	1462,3,218,109,0,1462,1463,5,60,0,0,1463,1464,3,92,46,0,1464,1465,5,93,
	0,0,1465,223,1,0,0,0,1466,1469,3,220,110,0,1467,1469,3,222,111,0,1468,1466,
	1,0,0,0,1468,1467,1,0,0,0,1469,225,1,0,0,0,1470,1471,7,15,0,0,1471,227,
	1,0,0,0,1472,1473,5,26,0,0,1473,1474,3,226,113,0,1474,1475,5,80,0,0,1475,
	1480,3,204,102,0,1476,1477,5,25,0,0,1477,1479,3,204,102,0,1478,1476,1,0,
	0,0,1479,1482,1,0,0,0,1480,1478,1,0,0,0,1480,1481,1,0,0,0,1481,1484,1,0,
	0,0,1482,1480,1,0,0,0,1483,1485,3,16,8,0,1484,1483,1,0,0,0,1484,1485,1,
	0,0,0,1485,1486,1,0,0,0,1486,1487,5,113,0,0,1487,1488,3,92,46,0,1488,229,
	1,0,0,0,1489,1490,5,46,0,0,1490,1491,3,92,46,0,1491,1492,5,11,0,0,1492,
	1493,3,244,122,0,1493,231,1,0,0,0,1494,1495,5,104,0,0,1495,1496,3,92,46,
	0,1496,1497,5,11,0,0,1497,1499,3,244,122,0,1498,1500,3,250,125,0,1499,1498,
	1,0,0,0,1499,1500,1,0,0,0,1500,1501,1,0,0,0,1501,1502,5,19,0,0,1502,1503,
	3,92,46,0,1503,233,1,0,0,0,1504,1505,5,108,0,0,1505,1506,3,238,119,0,1506,
	1507,3,240,120,0,1507,235,1,0,0,0,1508,1509,5,20,0,0,1509,1510,3,52,26,
	0,1510,1511,5,89,0,0,1511,1512,3,92,46,0,1512,237,1,0,0,0,1513,1517,3,236,
	118,0,1514,1516,3,236,118,0,1515,1514,1,0,0,0,1516,1519,1,0,0,0,1517,1515,
	1,0,0,0,1517,1518,1,0,0,0,1518,239,1,0,0,0,1519,1517,1,0,0,0,1520,1521,
	5,35,0,0,1521,1522,5,89,0,0,1522,1523,3,92,46,0,1523,241,1,0,0,0,1524,1525,
	5,143,0,0,1525,243,1,0,0,0,1526,1527,5,141,0,0,1527,245,1,0,0,0,1528,1530,
	5,73,0,0,1529,1528,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1541,
	5,137,0,0,1532,1534,5,73,0,0,1533,1532,1,0,0,0,1533,1534,1,0,0,0,1534,1535,
	1,0,0,0,1535,1541,5,138,0,0,1536,1538,5,73,0,0,1537,1536,1,0,0,0,1537,1538,
	1,0,0,0,1538,1539,1,0,0,0,1539,1541,5,139,0,0,1540,1529,1,0,0,0,1540,1533,
	1,0,0,0,1540,1537,1,0,0,0,1541,247,1,0,0,0,1542,1551,5,143,0,0,1543,1551,
	5,112,0,0,1544,1551,5,45,0,0,1545,1547,5,73,0,0,1546,1545,1,0,0,0,1546,
	1547,1,0,0,0,1547,1548,1,0,0,0,1548,1551,3,246,123,0,1549,1551,3,56,28,
	0,1550,1542,1,0,0,0,1550,1543,1,0,0,0,1550,1544,1,0,0,0,1550,1546,1,0,0,
	0,1550,1549,1,0,0,0,1551,249,1,0,0,0,1552,1553,7,12,0,0,1553,251,1,0,0,
	0,1554,1559,3,92,46,0,1555,1556,5,25,0,0,1556,1558,3,92,46,0,1557,1555,
	1,0,0,0,1558,1561,1,0,0,0,1559,1557,1,0,0,0,1559,1560,1,0,0,0,1560,253,
	1,0,0,0,1561,1559,1,0,0,0,1562,1565,5,141,0,0,1563,1564,5,40,0,0,1564,1566,
	5,141,0,0,1565,1563,1,0,0,0,1566,1567,1,0,0,0,1567,1565,1,0,0,0,1567,1568,
	1,0,0,0,1568,255,1,0,0,0,1569,1570,3,254,127,0,1570,1572,5,60,0,0,1571,
	1573,3,252,126,0,1572,1571,1,0,0,0,1572,1573,1,0,0,0,1573,1574,1,0,0,0,
	1574,1575,5,93,0,0,1575,257,1,0,0,0,1576,1577,5,142,0,0,1577,259,1,0,0,
	0,1578,1579,5,78,0,0,1579,1580,5,115,0,0,1580,1594,3,264,132,0,1581,1582,
	5,78,0,0,1582,1583,5,115,0,0,1583,1584,5,58,0,0,1584,1587,3,264,132,0,1585,
	1586,5,25,0,0,1586,1588,3,264,132,0,1587,1585,1,0,0,0,1588,1589,1,0,0,0,
	1589,1587,1,0,0,0,1589,1590,1,0,0,0,1590,1591,1,0,0,0,1591,1592,5,91,0,
	0,1592,1594,1,0,0,0,1593,1578,1,0,0,0,1593,1581,1,0,0,0,1594,261,1,0,0,
	0,1595,1596,5,78,0,0,1596,1597,5,115,0,0,1597,1598,5,69,0,0,1598,1599,5,
	60,0,0,1599,1600,3,92,46,0,1600,1601,5,93,0,0,1601,263,1,0,0,0,1602,1603,
	5,59,0,0,1603,1608,3,266,133,0,1604,1605,5,25,0,0,1605,1607,3,266,133,0,
	1606,1604,1,0,0,0,1607,1610,1,0,0,0,1608,1606,1,0,0,0,1608,1609,1,0,0,0,
	1609,1611,1,0,0,0,1610,1608,1,0,0,0,1611,1612,5,92,0,0,1612,265,1,0,0,0,
	1613,1616,3,268,134,0,1614,1615,5,24,0,0,1615,1617,3,268,134,0,1616,1614,
	1,0,0,0,1616,1617,1,0,0,0,1617,267,1,0,0,0,1618,1621,3,246,123,0,1619,1621,
	5,74,0,0,1620,1618,1,0,0,0,1620,1619,1,0,0,0,1621,269,1,0,0,0,1622,1623,
	5,78,0,0,1623,1624,5,67,0,0,1624,1625,3,92,46,0,1625,271,1,0,0,0,1626,1627,
	5,78,0,0,1627,1628,5,67,0,0,1628,1629,5,68,0,0,1629,273,1,0,0,0,135,276,
	279,289,295,300,307,311,319,324,338,342,346,350,354,361,365,374,387,390,
	394,403,410,414,425,433,453,460,467,474,480,484,492,500,518,526,549,578,
	580,608,623,632,676,688,716,726,730,733,744,756,764,802,813,815,824,828,
	848,858,887,891,897,920,935,945,951,962,975,983,994,998,1002,1006,1010,
	1016,1027,1036,1042,1047,1050,1082,1114,1120,1128,1133,1146,1169,1180,1203,
	1233,1238,1249,1253,1263,1266,1273,1279,1283,1295,1298,1305,1311,1315,1326,
	1334,1344,1351,1367,1379,1383,1393,1397,1407,1412,1414,1430,1441,1450,1468,
	1480,1484,1499,1517,1529,1533,1537,1540,1546,1550,1559,1567,1572,1589,1593,
	1608,1616,1620];

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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wcpsQuery;
	}
	public copyFrom(ctx: WcpsQueryContext): void {
		super.copyFrom(ctx);
	}
}
export class WcpsQueryLabelContext extends WcpsQueryContext {
	constructor(parser: wcpsParser, ctx: WcpsQueryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWcpsQueryLabel) {
	 		listener.enterWcpsQueryLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWcpsQueryLabel) {
	 		listener.exitWcpsQueryLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_geoXYAxisLabelAndDomainResolution;
	}
	public copyFrom(ctx: GeoXYAxisLabelAndDomainResolutionContext): void {
		super.copyFrom(ctx);
	}
}
export class GeoXYAxisLabelAndDomainResolutionLabelContext extends GeoXYAxisLabelAndDomainResolutionContext {
	constructor(parser: wcpsParser, ctx: GeoXYAxisLabelAndDomainResolutionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterGeoXYAxisLabelAndDomainResolutionLabel) {
	 		listener.enterGeoXYAxisLabelAndDomainResolutionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitGeoXYAxisLabelAndDomainResolutionLabel) {
	 		listener.exitGeoXYAxisLabelAndDomainResolutionLabel(this);
		}
	}
}


export class CoverageVariableNameContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageVariableName;
	}
	public copyFrom(ctx: CoverageVariableNameContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageVariableNameLabelContext extends CoverageVariableNameContext {
	constructor(parser: wcpsParser, ctx: CoverageVariableNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageVariableNameLabel) {
	 		listener.enterCoverageVariableNameLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageVariableNameLabel) {
	 		listener.exitCoverageVariableNameLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scalarValueCoverageExpression;
	}
	public copyFrom(ctx: ScalarValueCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ScalarValueCoverageExpressionLabelContext extends ScalarValueCoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: ScalarValueCoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScalarValueCoverageExpressionLabel) {
	 		listener.enterScalarValueCoverageExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScalarValueCoverageExpressionLabel) {
	 		listener.exitScalarValueCoverageExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_booleanScalarExpression;
	}
	public copyFrom(ctx: BooleanScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanBinaryScalarLabelContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanScalarExpression_list(): BooleanScalarExpressionContext[] {
		return this.getTypedRuleContexts(BooleanScalarExpressionContext) as BooleanScalarExpressionContext[];
	}
	public booleanScalarExpression(i: number): BooleanScalarExpressionContext {
		return this.getTypedRuleContext(BooleanScalarExpressionContext, i) as BooleanScalarExpressionContext;
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getTypedRuleContext(BooleanOperatorContext, 0) as BooleanOperatorContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanBinaryScalarLabel) {
	 		listener.enterBooleanBinaryScalarLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanBinaryScalarLabel) {
	 		listener.exitBooleanBinaryScalarLabel(this);
		}
	}
}
export class BooleanReduceExpressionContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		return this.getTypedRuleContext(ReduceBooleanExpressionContext, 0) as ReduceBooleanExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanReduceExpression) {
	 		listener.enterBooleanReduceExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanReduceExpression) {
	 		listener.exitBooleanReduceExpression(this);
		}
	}
}
export class BooleanUnaryScalarLabelContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanUnaryOperator(): BooleanUnaryOperatorContext {
		return this.getTypedRuleContext(BooleanUnaryOperatorContext, 0) as BooleanUnaryOperatorContext;
	}
	public booleanScalarExpression(): BooleanScalarExpressionContext {
		return this.getTypedRuleContext(BooleanScalarExpressionContext, 0) as BooleanScalarExpressionContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanUnaryScalarLabel) {
	 		listener.enterBooleanUnaryScalarLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanUnaryScalarLabel) {
	 		listener.exitBooleanUnaryScalarLabel(this);
		}
	}
}
export class BooleanStringComparisonScalarContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanStringComparisonScalar) {
	 		listener.enterBooleanStringComparisonScalar(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanStringComparisonScalar) {
	 		listener.exitBooleanStringComparisonScalar(this);
		}
	}
}
export class BooleanConstantLabelContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanConstant(): BooleanConstantContext {
		return this.getTypedRuleContext(BooleanConstantContext, 0) as BooleanConstantContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanConstantLabel) {
	 		listener.enterBooleanConstantLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanConstantLabel) {
	 		listener.exitBooleanConstantLabel(this);
		}
	}
}
export class BooleanNumericalComparisonScalarLabelContext extends BooleanScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: BooleanScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBooleanNumericalComparisonScalarLabel) {
	 		listener.enterBooleanNumericalComparisonScalarLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBooleanNumericalComparisonScalarLabel) {
	 		listener.exitBooleanNumericalComparisonScalarLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_stringScalarExpression;
	}
	public copyFrom(ctx: StringScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class StringScalarExpressionLabelContext extends StringScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: StringScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(wcpsParser.STRING_LITERAL, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterStringScalarExpressionLabel) {
	 		listener.enterStringScalarExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitStringScalarExpressionLabel) {
	 		listener.exitStringScalarExpressionLabel(this);
		}
	}
}


export class StarExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_starExpression;
	}
	public copyFrom(ctx: StarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class StarExpressionLabelContext extends StarExpressionContext {
	constructor(parser: wcpsParser, ctx: StarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MULTIPLICATION(): TerminalNode {
		return this.getToken(wcpsParser.MULTIPLICATION, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterStarExpressionLabel) {
	 		listener.enterStarExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitStarExpressionLabel) {
	 		listener.exitStarExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_numericalScalarExpression;
	}
	public copyFrom(ctx: NumericalScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumericalTrigonometricScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public trigonometricOperator(): TrigonometricOperatorContext {
		return this.getTypedRuleContext(TrigonometricOperatorContext, 0) as TrigonometricOperatorContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalTrigonometricScalarExpressionLabel) {
	 		listener.enterNumericalTrigonometricScalarExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalTrigonometricScalarExpressionLabel) {
	 		listener.exitNumericalTrigonometricScalarExpressionLabel(this);
		}
	}
}
export class NumericalNanNumberExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NAN_NUMBER_CONSTANT(): TerminalNode {
		return this.getToken(wcpsParser.NAN_NUMBER_CONSTANT, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalNanNumberExpressionLabel) {
	 		listener.enterNumericalNanNumberExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalNanNumberExpressionLabel) {
	 		listener.exitNumericalNanNumberExpressionLabel(this);
		}
	}
}
export class NumericalRealNumberExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalRealNumberExpressionLabel) {
	 		listener.enterNumericalRealNumberExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalRealNumberExpressionLabel) {
	 		listener.exitNumericalRealNumberExpressionLabel(this);
		}
	}
}
export class NumericalCondenseExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public condenseExpression(): CondenseExpressionContext {
		return this.getTypedRuleContext(CondenseExpressionContext, 0) as CondenseExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalCondenseExpressionLabel) {
	 		listener.enterNumericalCondenseExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalCondenseExpressionLabel) {
	 		listener.exitNumericalCondenseExpressionLabel(this);
		}
	}
}
export class NumericalUnaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public numericalUnaryOperation(): NumericalUnaryOperationContext {
		return this.getTypedRuleContext(NumericalUnaryOperationContext, 0) as NumericalUnaryOperationContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, 0) as NumericalScalarExpressionContext;
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalUnaryScalarExpressionLabel) {
	 		listener.enterNumericalUnaryScalarExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalUnaryScalarExpressionLabel) {
	 		listener.exitNumericalUnaryScalarExpressionLabel(this);
		}
	}
}
export class NumericalBinaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public numericalScalarExpression_list(): NumericalScalarExpressionContext[] {
		return this.getTypedRuleContexts(NumericalScalarExpressionContext) as NumericalScalarExpressionContext[];
	}
	public numericalScalarExpression(i: number): NumericalScalarExpressionContext {
		return this.getTypedRuleContext(NumericalScalarExpressionContext, i) as NumericalScalarExpressionContext;
	}
	public numericalOperator(): NumericalOperatorContext {
		return this.getTypedRuleContext(NumericalOperatorContext, 0) as NumericalOperatorContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalBinaryScalarExpressionLabel) {
	 		listener.enterNumericalBinaryScalarExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalBinaryScalarExpressionLabel) {
	 		listener.exitNumericalBinaryScalarExpressionLabel(this);
		}
	}
}
export class NumericalComplexNumberConstantContext extends NumericalScalarExpressionContext {
	constructor(parser: wcpsParser, ctx: NumericalScalarExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public complexNumberConstant(): ComplexNumberConstantContext {
		return this.getTypedRuleContext(ComplexNumberConstantContext, 0) as ComplexNumberConstantContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNumericalComplexNumberConstant) {
	 		listener.enterNumericalComplexNumberConstant(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNumericalComplexNumberConstant) {
	 		listener.exitNumericalComplexNumberConstant(this);
		}
	}
}


export class ComplexNumberConstantContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_complexNumberConstant;
	}
	public copyFrom(ctx: ComplexNumberConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class ComplexNumberConstantLabelContext extends ComplexNumberConstantContext {
	constructor(parser: wcpsParser, ctx: ComplexNumberConstantContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterComplexNumberConstantLabel) {
	 		listener.enterComplexNumberConstantLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitComplexNumberConstantLabel) {
	 		listener.exitComplexNumberConstantLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpressionNullSetRetrieving;
	}
	public copyFrom(ctx: CoverageExpressionNullSetRetrievingContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageExpressionNullSetRetrievingLabelContext extends CoverageExpressionNullSetRetrievingContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionNullSetRetrievingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionNullSetRetrievingLabel) {
	 		listener.enterCoverageExpressionNullSetRetrievingLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionNullSetRetrievingLabel) {
	 		listener.exitCoverageExpressionNullSetRetrievingLabel(this);
		}
	}
}


export class CoverageIdentifierExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageIdentifierExpression;
	}
	public copyFrom(ctx: CoverageIdentifierExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageIdentifierExpressionLabelContext extends CoverageIdentifierExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageIdentifierExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageIdentifierExpressionLabel) {
	 		listener.enterCoverageIdentifierExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageIdentifierExpressionLabel) {
	 		listener.exitCoverageIdentifierExpressionLabel(this);
		}
	}
}


export class CellCountExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_cellCountExpression;
	}
	public copyFrom(ctx: CellCountExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CellCountExpressionLabelContext extends CellCountExpressionContext {
	constructor(parser: wcpsParser, ctx: CellCountExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCellCountExpressionLabel) {
	 		listener.enterCellCountExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCellCountExpressionLabel) {
	 		listener.exitCellCountExpressionLabel(this);
		}
	}
}


export class CoverageCrsSetExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageCrsSetExpression;
	}
	public copyFrom(ctx: CoverageCrsSetExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageCrsSetExpressionLabelContext extends CoverageCrsSetExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageCrsSetExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageCrsSetExpressionLabel) {
	 		listener.enterCoverageCrsSetExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageCrsSetExpressionLabel) {
	 		listener.exitCoverageCrsSetExpressionLabel(this);
		}
	}
}


export class DomainExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_domainExpression;
	}
	public copyFrom(ctx: DomainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DomainExpressionLabelContext extends DomainExpressionContext {
	constructor(parser: wcpsParser, ctx: DomainExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDomainExpressionLabel) {
	 		listener.enterDomainExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDomainExpressionLabel) {
	 		listener.exitDomainExpressionLabel(this);
		}
	}
}


export class ImageCrsDomainByDimensionExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsDomainByDimensionExpression;
	}
	public copyFrom(ctx: ImageCrsDomainByDimensionExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsDomainByDimensionExpressionLabelContext extends ImageCrsDomainByDimensionExpressionContext {
	constructor(parser: wcpsParser, ctx: ImageCrsDomainByDimensionExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsDomainByDimensionExpressionLabel) {
	 		listener.enterImageCrsDomainByDimensionExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsDomainByDimensionExpressionLabel) {
	 		listener.exitImageCrsDomainByDimensionExpressionLabel(this);
		}
	}
}


export class ImageCrsDomainExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsDomainExpression;
	}
	public copyFrom(ctx: ImageCrsDomainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsDomainExpressionLabelContext extends ImageCrsDomainExpressionContext {
	constructor(parser: wcpsParser, ctx: ImageCrsDomainExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsDomainExpressionLabel) {
	 		listener.enterImageCrsDomainExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsDomainExpressionLabel) {
	 		listener.exitImageCrsDomainExpressionLabel(this);
		}
	}
}


export class ImageCrsExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_imageCrsExpression;
	}
	public copyFrom(ctx: ImageCrsExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsExpressionLabelContext extends ImageCrsExpressionContext {
	constructor(parser: wcpsParser, ctx: ImageCrsExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterImageCrsExpressionLabel) {
	 		listener.enterImageCrsExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitImageCrsExpressionLabel) {
	 		listener.exitImageCrsExpressionLabel(this);
		}
	}
}


export class DescribeCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_describeCoverageExpression;
	}
	public copyFrom(ctx: DescribeCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DescribeCoverageExpressionLabelContext extends DescribeCoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: DescribeCoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDescribeCoverageExpressionLabel) {
	 		listener.enterDescribeCoverageExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDescribeCoverageExpressionLabel) {
	 		listener.exitDescribeCoverageExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_encodedCoverageExpression;
	}
	public copyFrom(ctx: EncodedCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class EncodedCoverageExpressionLabelContext extends EncodedCoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: EncodedCoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterEncodedCoverageExpressionLabel) {
	 		listener.enterEncodedCoverageExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitEncodedCoverageExpressionLabel) {
	 		listener.exitEncodedCoverageExpressionLabel(this);
		}
	}
}


export class DecodeCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_decodeCoverageExpression;
	}
	public copyFrom(ctx: DecodeCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DecodedCoverageExpressionLabelContext extends DecodeCoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: DecodeCoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDecodedCoverageExpressionLabel) {
	 		listener.enterDecodedCoverageExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDecodedCoverageExpressionLabel) {
	 		listener.exitDecodedCoverageExpressionLabel(this);
		}
	}
}


export class CoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageExpression;
	}
	public copyFrom(ctx: CoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageExpressionCrsTransformShorthandLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public crsTransformShorthandExpression(): CrsTransformShorthandExpressionContext {
		return this.getTypedRuleContext(CrsTransformShorthandExpressionContext, 0) as CrsTransformShorthandExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionCrsTransformShorthandLabel) {
	 		listener.enterCoverageExpressionCrsTransformShorthandLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionCrsTransformShorthandLabel) {
	 		listener.exitCoverageExpressionCrsTransformShorthandLabel(this);
		}
	}
}
export class CoverageExpressionDynamicallyChangingNullValuesLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public nullClause(): NullClauseContext {
		return this.getTypedRuleContext(NullClauseContext, 0) as NullClauseContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDynamicallyChangingNullValuesLabel) {
	 		listener.enterCoverageExpressionDynamicallyChangingNullValuesLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDynamicallyChangingNullValuesLabel) {
	 		listener.exitCoverageExpressionDynamicallyChangingNullValuesLabel(this);
		}
	}
}
export class CoverageExpressionUdfExpressionContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public udfExpression(): UdfExpressionContext {
		return this.getTypedRuleContext(UdfExpressionContext, 0) as UdfExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionUdfExpression) {
	 		listener.enterCoverageExpressionUdfExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionUdfExpression) {
	 		listener.exitCoverageExpressionUdfExpression(this);
		}
	}
}
export class CoverageExpressionScaleByImageCrsDomainLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCALE(): TerminalNode {
		return this.getToken(wcpsParser.SCALE, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionScaleByImageCrsDomainLabel) {
	 		listener.enterCoverageExpressionScaleByImageCrsDomainLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionScaleByImageCrsDomainLabel) {
	 		listener.exitCoverageExpressionScaleByImageCrsDomainLabel(this);
		}
	}
}
export class CoverageExpressionScaleByDimensionIntervalsLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCALE(): TerminalNode {
		return this.getToken(wcpsParser.SCALE, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionScaleByDimensionIntervalsLabel) {
	 		listener.enterCoverageExpressionScaleByDimensionIntervalsLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionScaleByDimensionIntervalsLabel) {
	 		listener.exitCoverageExpressionScaleByDimensionIntervalsLabel(this);
		}
	}
}
export class CoverageExpressionDynamicallyChangingNullMaskDiscardLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public nullMaskDiscard(): NullMaskDiscardContext {
		return this.getTypedRuleContext(NullMaskDiscardContext, 0) as NullMaskDiscardContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDynamicallyChangingNullMaskDiscardLabel) {
	 		listener.enterCoverageExpressionDynamicallyChangingNullMaskDiscardLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDynamicallyChangingNullMaskDiscardLabel) {
	 		listener.exitCoverageExpressionDynamicallyChangingNullMaskDiscardLabel(this);
		}
	}
}
export class CoverageExpressionOverlayLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public OVERLAY(): TerminalNode {
		return this.getToken(wcpsParser.OVERLAY, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionOverlayLabel) {
	 		listener.enterCoverageExpressionOverlayLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionOverlayLabel) {
	 		listener.exitCoverageExpressionOverlayLabel(this);
		}
	}
}
export class CoverageExpressionComparissonLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionComparissonLabel) {
	 		listener.enterCoverageExpressionComparissonLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionComparissonLabel) {
	 		listener.exitCoverageExpressionComparissonLabel(this);
		}
	}
}
export class CoverageExpressionShortHandSubsetWithLetClauseVariableLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACKET, 0);
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACKET, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionShortHandSubsetWithLetClauseVariableLabel) {
	 		listener.enterCoverageExpressionShortHandSubsetWithLetClauseVariableLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionShortHandSubsetWithLetClauseVariableLabel) {
	 		listener.exitCoverageExpressionShortHandSubsetWithLetClauseVariableLabel(this);
		}
	}
}
export class CoverageExpressionUnaryBooleanLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryBooleanExpression(): UnaryBooleanExpressionContext {
		return this.getTypedRuleContext(UnaryBooleanExpressionContext, 0) as UnaryBooleanExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionUnaryBooleanLabel) {
	 		listener.enterCoverageExpressionUnaryBooleanLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionUnaryBooleanLabel) {
	 		listener.exitCoverageExpressionUnaryBooleanLabel(this);
		}
	}
}
export class CoverageExpressionVariableNameLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionVariableNameLabel) {
	 		listener.enterCoverageExpressionVariableNameLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionVariableNameLabel) {
	 		listener.exitCoverageExpressionVariableNameLabel(this);
		}
	}
}
export class CoverageExpressionGeoXYAxisLabelAndDomainResolutionContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public geoXYAxisLabelAndDomainResolution(): GeoXYAxisLabelAndDomainResolutionContext {
		return this.getTypedRuleContext(GeoXYAxisLabelAndDomainResolutionContext, 0) as GeoXYAxisLabelAndDomainResolutionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionGeoXYAxisLabelAndDomainResolution) {
	 		listener.enterCoverageExpressionGeoXYAxisLabelAndDomainResolution(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionGeoXYAxisLabelAndDomainResolution) {
	 		listener.exitCoverageExpressionGeoXYAxisLabelAndDomainResolution(this);
		}
	}
}
export class CoverageExpressionRangeConstructorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public rangeConstructorExpression(): RangeConstructorExpressionContext {
		return this.getTypedRuleContext(RangeConstructorExpressionContext, 0) as RangeConstructorExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionRangeConstructorLabel) {
	 		listener.enterCoverageExpressionRangeConstructorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionRangeConstructorLabel) {
	 		listener.exitCoverageExpressionRangeConstructorLabel(this);
		}
	}
}
export class CoverageExpressionExtendByDomainIntervalsLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTEND(): TerminalNode {
		return this.getToken(wcpsParser.EXTEND, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionExtendByDomainIntervalsLabel) {
	 		listener.enterCoverageExpressionExtendByDomainIntervalsLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionExtendByDomainIntervalsLabel) {
	 		listener.exitCoverageExpressionExtendByDomainIntervalsLabel(this);
		}
	}
}
export class CoverageExpressionCastLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionCastLabel) {
	 		listener.enterCoverageExpressionCastLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionCastLabel) {
	 		listener.exitCoverageExpressionCastLabel(this);
		}
	}
}
export class CoverageExpressionPowerLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryPowerExpression(): UnaryPowerExpressionContext {
		return this.getTypedRuleContext(UnaryPowerExpressionContext, 0) as UnaryPowerExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionPowerLabel) {
	 		listener.enterCoverageExpressionPowerLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionPowerLabel) {
	 		listener.exitCoverageExpressionPowerLabel(this);
		}
	}
}
export class CoverageExpresisonFlipLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public flipExpression(): FlipExpressionContext {
		return this.getTypedRuleContext(FlipExpressionContext, 0) as FlipExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpresisonFlipLabel) {
	 		listener.enterCoverageExpresisonFlipLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpresisonFlipLabel) {
	 		listener.exitCoverageExpresisonFlipLabel(this);
		}
	}
}
export class CoverageExpressionDynamicallyChangingNullMaskLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public nullMask(): NullMaskContext {
		return this.getTypedRuleContext(NullMaskContext, 0) as NullMaskContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDynamicallyChangingNullMaskLabel) {
	 		listener.enterCoverageExpressionDynamicallyChangingNullMaskLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDynamicallyChangingNullMaskLabel) {
	 		listener.exitCoverageExpressionDynamicallyChangingNullMaskLabel(this);
		}
	}
}
export class CoverageExpressionExtendLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXTEND(): TerminalNode {
		return this.getToken(wcpsParser.EXTEND, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionExtendLabel) {
	 		listener.enterCoverageExpressionExtendLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionExtendLabel) {
	 		listener.exitCoverageExpressionExtendLabel(this);
		}
	}
}
export class CoverageExpressionSwitchCaseLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public switchCaseExpression(): SwitchCaseExpressionContext {
		return this.getTypedRuleContext(SwitchCaseExpressionContext, 0) as SwitchCaseExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionSwitchCaseLabel) {
	 		listener.enterCoverageExpressionSwitchCaseLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionSwitchCaseLabel) {
	 		listener.exitCoverageExpressionSwitchCaseLabel(this);
		}
	}
}
export class CoverageExpressionTimeTruncatorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public timeTruncatorElement(): TimeTruncatorElementContext {
		return this.getTypedRuleContext(TimeTruncatorElementContext, 0) as TimeTruncatorElementContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionTimeTruncatorLabel) {
	 		listener.enterCoverageExpressionTimeTruncatorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionTimeTruncatorLabel) {
	 		listener.exitCoverageExpressionTimeTruncatorLabel(this);
		}
	}
}
export class CoverageExpressionModLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryModExpression(): UnaryModExpressionContext {
		return this.getTypedRuleContext(UnaryModExpressionContext, 0) as UnaryModExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionModLabel) {
	 		listener.enterCoverageExpressionModLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionModLabel) {
	 		listener.exitCoverageExpressionModLabel(this);
		}
	}
}
export class CoverageExpressionTrigonometricLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public trigonometricExpression(): TrigonometricExpressionContext {
		return this.getTypedRuleContext(TrigonometricExpressionContext, 0) as TrigonometricExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionTrigonometricLabel) {
	 		listener.enterCoverageExpressionTrigonometricLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionTrigonometricLabel) {
	 		listener.exitCoverageExpressionTrigonometricLabel(this);
		}
	}
}
export class CoverageExpressionDynamicallyChangingNullValuesFromLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public nullSetFrom(): NullSetFromContext {
		return this.getTypedRuleContext(NullSetFromContext, 0) as NullSetFromContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDynamicallyChangingNullValuesFromLabel) {
	 		listener.enterCoverageExpressionDynamicallyChangingNullValuesFromLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDynamicallyChangingNullValuesFromLabel) {
	 		listener.exitCoverageExpressionDynamicallyChangingNullValuesFromLabel(this);
		}
	}
}
export class CoverageExpressionCoverageLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionCoverageLabel) {
	 		listener.enterCoverageExpressionCoverageLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionCoverageLabel) {
	 		listener.exitCoverageExpressionCoverageLabel(this);
		}
	}
}
export class CoverageExpressionConstantLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageConstantExpression(): CoverageConstantExpressionContext {
		return this.getTypedRuleContext(CoverageConstantExpressionContext, 0) as CoverageConstantExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionConstantLabel) {
	 		listener.enterCoverageExpressionConstantLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionConstantLabel) {
	 		listener.exitCoverageExpressionConstantLabel(this);
		}
	}
}
export class CoverageExpressionShorthandSliceLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACKET, 0);
	}
	public dimensionPointList(): DimensionPointListContext {
		return this.getTypedRuleContext(DimensionPointListContext, 0) as DimensionPointListContext;
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACKET, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionShorthandSliceLabel) {
	 		listener.enterCoverageExpressionShorthandSliceLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionShorthandSliceLabel) {
	 		listener.exitCoverageExpressionShorthandSliceLabel(this);
		}
	}
}
export class CoverageExpressionSortLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sortExpression(): SortExpressionContext {
		return this.getTypedRuleContext(SortExpressionContext, 0) as SortExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionSortLabel) {
	 		listener.enterCoverageExpressionSortLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionSortLabel) {
	 		listener.exitCoverageExpressionSortLabel(this);
		}
	}
}
export class CoverageExpressionShorthandSubsetLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionShorthandSubsetLabel) {
	 		listener.enterCoverageExpressionShorthandSubsetLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionShorthandSubsetLabel) {
	 		listener.exitCoverageExpressionShorthandSubsetLabel(this);
		}
	}
}
export class CoverageExpressionArithmeticLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
		return this.getTypedRuleContext(CoverageArithmeticOperatorContext, 0) as CoverageArithmeticOperatorContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionArithmeticLabel) {
	 		listener.enterCoverageExpressionArithmeticLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionArithmeticLabel) {
	 		listener.exitCoverageExpressionArithmeticLabel(this);
		}
	}
}
export class CoverageExpressionExponentialLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exponentialExpression(): ExponentialExpressionContext {
		return this.getTypedRuleContext(ExponentialExpressionContext, 0) as ExponentialExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionExponentialLabel) {
	 		listener.enterCoverageExpressionExponentialLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionExponentialLabel) {
	 		listener.exitCoverageExpressionExponentialLabel(this);
		}
	}
}
export class CoverageExpressionPolygonizeLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public polygonizeExpression(): PolygonizeExpressionContext {
		return this.getTypedRuleContext(PolygonizeExpressionContext, 0) as PolygonizeExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionPolygonizeLabel) {
	 		listener.enterCoverageExpressionPolygonizeLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionPolygonizeLabel) {
	 		listener.exitCoverageExpressionPolygonizeLabel(this);
		}
	}
}
export class CoverageExpressionLogicLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression_list(): CoverageExpressionContext[] {
		return this.getTypedRuleContexts(CoverageExpressionContext) as CoverageExpressionContext[];
	}
	public coverageExpression(i: number): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, i) as CoverageExpressionContext;
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getTypedRuleContext(BooleanOperatorContext, 0) as BooleanOperatorContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionLogicLabel) {
	 		listener.enterCoverageExpressionLogicLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionLogicLabel) {
	 		listener.exitCoverageExpressionLogicLabel(this);
		}
	}
}
export class CoverageExpressionSliceLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SLICE(): TerminalNode {
		return this.getToken(wcpsParser.SLICE, 0);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionSliceLabel) {
	 		listener.enterCoverageExpressionSliceLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionSliceLabel) {
	 		listener.exitCoverageExpressionSliceLabel(this);
		}
	}
}
export class CoverageExpressionClipCurtainLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public clipCurtainExpression(): ClipCurtainExpressionContext {
		return this.getTypedRuleContext(ClipCurtainExpressionContext, 0) as ClipCurtainExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionClipCurtainLabel) {
	 		listener.enterCoverageExpressionClipCurtainLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionClipCurtainLabel) {
	 		listener.exitCoverageExpressionClipCurtainLabel(this);
		}
	}
}
export class CoverageExpressionRangeSubsettingLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(wcpsParser.DOT, 0);
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionRangeSubsettingLabel) {
	 		listener.enterCoverageExpressionRangeSubsettingLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionRangeSubsettingLabel) {
	 		listener.exitCoverageExpressionRangeSubsettingLabel(this);
		}
	}
}
export class CoverageExpressionMaxBinaryLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public maxBinaryExpression(): MaxBinaryExpressionContext {
		return this.getTypedRuleContext(MaxBinaryExpressionContext, 0) as MaxBinaryExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionMaxBinaryLabel) {
	 		listener.enterCoverageExpressionMaxBinaryLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionMaxBinaryLabel) {
	 		listener.exitCoverageExpressionMaxBinaryLabel(this);
		}
	}
}
export class CoverageExpressionDomainIntervalsLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public domainIntervals(): DomainIntervalsContext {
		return this.getTypedRuleContext(DomainIntervalsContext, 0) as DomainIntervalsContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDomainIntervalsLabel) {
	 		listener.enterCoverageExpressionDomainIntervalsLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDomainIntervalsLabel) {
	 		listener.exitCoverageExpressionDomainIntervalsLabel(this);
		}
	}
}
export class CoverageExpressionScaleByFactorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCALE(): TerminalNode {
		return this.getToken(wcpsParser.SCALE, 0);
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
	public scalarExpression(): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, 0) as ScalarExpressionContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionScaleByFactorLabel) {
	 		listener.enterCoverageExpressionScaleByFactorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionScaleByFactorLabel) {
	 		listener.exitCoverageExpressionScaleByFactorLabel(this);
		}
	}
}
export class CoverageIsNullExpressionContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageIsNullExpression) {
	 		listener.enterCoverageIsNullExpression(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageIsNullExpression) {
	 		listener.exitCoverageIsNullExpression(this);
		}
	}
}
export class CoverageExpressionClipWKTLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public clipWKTExpression(): ClipWKTExpressionContext {
		return this.getTypedRuleContext(ClipWKTExpressionContext, 0) as ClipWKTExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionClipWKTLabel) {
	 		listener.enterCoverageExpressionClipWKTLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionClipWKTLabel) {
	 		listener.exitCoverageExpressionClipWKTLabel(this);
		}
	}
}
export class CoverageExpressionScalarLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scalarExpression(): ScalarExpressionContext {
		return this.getTypedRuleContext(ScalarExpressionContext, 0) as ScalarExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionScalarLabel) {
	 		listener.enterCoverageExpressionScalarLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionScalarLabel) {
	 		listener.exitCoverageExpressionScalarLabel(this);
		}
	}
}
export class CoverageExpressionTrimCoverageLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRIM(): TerminalNode {
		return this.getToken(wcpsParser.TRIM, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getTypedRuleContext(DimensionIntervalListContext, 0) as DimensionIntervalListContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionTrimCoverageLabel) {
	 		listener.enterCoverageExpressionTrimCoverageLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionTrimCoverageLabel) {
	 		listener.exitCoverageExpressionTrimCoverageLabel(this);
		}
	}
}
export class CoverageExpressionMinBinaryLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public minBinaryExpression(): MinBinaryExpressionContext {
		return this.getTypedRuleContext(MinBinaryExpressionContext, 0) as MinBinaryExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionMinBinaryLabel) {
	 		listener.enterCoverageExpressionMinBinaryLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionMinBinaryLabel) {
	 		listener.exitCoverageExpressionMinBinaryLabel(this);
		}
	}
}
export class CoverageExpressionConstructorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageConstructorExpression(): CoverageConstructorExpressionContext {
		return this.getTypedRuleContext(CoverageConstructorExpressionContext, 0) as CoverageConstructorExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionConstructorLabel) {
	 		listener.enterCoverageExpressionConstructorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionConstructorLabel) {
	 		listener.exitCoverageExpressionConstructorLabel(this);
		}
	}
}
export class CoverageExpressionCrsTransformLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public crsTransformExpression(): CrsTransformExpressionContext {
		return this.getTypedRuleContext(CrsTransformExpressionContext, 0) as CrsTransformExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionCrsTransformLabel) {
	 		listener.enterCoverageExpressionCrsTransformLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionCrsTransformLabel) {
	 		listener.exitCoverageExpressionCrsTransformLabel(this);
		}
	}
}
export class CoverageExpressionDecodeLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		return this.getTypedRuleContext(DecodeCoverageExpressionContext, 0) as DecodeCoverageExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionDecodeLabel) {
	 		listener.enterCoverageExpressionDecodeLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionDecodeLabel) {
	 		listener.exitCoverageExpressionDecodeLabel(this);
		}
	}
}
export class CoverageExpressionScaleByFactorListLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCALE(): TerminalNode {
		return this.getToken(wcpsParser.SCALE, 0);
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
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_BRACE, 0);
	}
	public RIGHT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0);
	}
	public scaleDimensionPointList(): ScaleDimensionPointListContext {
		return this.getTypedRuleContext(ScaleDimensionPointListContext, 0) as ScaleDimensionPointListContext;
	}
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getTypedRuleContext(CoverageVariableNameContext, 0) as CoverageVariableNameContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionScaleByFactorListLabel) {
	 		listener.enterCoverageExpressionScaleByFactorListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionScaleByFactorListLabel) {
	 		listener.exitCoverageExpressionScaleByFactorListLabel(this);
		}
	}
}
export class CoverageExpressionTimeExtractorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public timeExtractorElement(): TimeExtractorElementContext {
		return this.getTypedRuleContext(TimeExtractorElementContext, 0) as TimeExtractorElementContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionTimeExtractorLabel) {
	 		listener.enterCoverageExpressionTimeExtractorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionTimeExtractorLabel) {
	 		listener.exitCoverageExpressionTimeExtractorLabel(this);
		}
	}
}
export class CoverageExpressionUnaryArithmeticLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
		return this.getTypedRuleContext(UnaryArithmeticExpressionContext, 0) as UnaryArithmeticExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionUnaryArithmeticLabel) {
	 		listener.enterCoverageExpressionUnaryArithmeticLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionUnaryArithmeticLabel) {
	 		listener.exitCoverageExpressionUnaryArithmeticLabel(this);
		}
	}
}
export class CoverageExpressionClipCorridorLabelContext extends CoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public clipCorridorExpression(): ClipCorridorExpressionContext {
		return this.getTypedRuleContext(ClipCorridorExpressionContext, 0) as ClipCorridorExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageExpressionClipCorridorLabel) {
	 		listener.enterCoverageExpressionClipCorridorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageExpressionClipCorridorLabel) {
	 		listener.exitCoverageExpressionClipCorridorLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryArithmeticExpression;
	}
	public copyFrom(ctx: UnaryArithmeticExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryCoverageArithmeticExpressionLabelContext extends UnaryArithmeticExpressionContext {
	constructor(parser: wcpsParser, ctx: UnaryArithmeticExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryCoverageArithmeticExpressionLabel) {
	 		listener.enterUnaryCoverageArithmeticExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryCoverageArithmeticExpressionLabel) {
	 		listener.exitUnaryCoverageArithmeticExpressionLabel(this);
		}
	}
}


export class TrigonometricExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_trigonometricExpression;
	}
	public copyFrom(ctx: TrigonometricExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TrigonometricExpressionLabelContext extends TrigonometricExpressionContext {
	constructor(parser: wcpsParser, ctx: TrigonometricExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrigonometricExpressionLabel) {
	 		listener.enterTrigonometricExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrigonometricExpressionLabel) {
	 		listener.exitTrigonometricExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_exponentialExpression;
	}
	public copyFrom(ctx: ExponentialExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExponentialExpressionLabelContext extends ExponentialExpressionContext {
	constructor(parser: wcpsParser, ctx: ExponentialExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterExponentialExpressionLabel) {
	 		listener.enterExponentialExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitExponentialExpressionLabel) {
	 		listener.exitExponentialExpressionLabel(this);
		}
	}
}


export class UnaryPowerExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryPowerExpression;
	}
	public copyFrom(ctx: UnaryPowerExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryPowerExpressionLabelContext extends UnaryPowerExpressionContext {
	constructor(parser: wcpsParser, ctx: UnaryPowerExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryPowerExpressionLabel) {
	 		listener.enterUnaryPowerExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryPowerExpressionLabel) {
	 		listener.exitUnaryPowerExpressionLabel(this);
		}
	}
}


export class UnaryModExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryModExpression;
	}
	public copyFrom(ctx: UnaryModExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryModExpressionLabelContext extends UnaryModExpressionContext {
	constructor(parser: wcpsParser, ctx: UnaryModExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterUnaryModExpressionLabel) {
	 		listener.enterUnaryModExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitUnaryModExpressionLabel) {
	 		listener.exitUnaryModExpressionLabel(this);
		}
	}
}


export class MinBinaryExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_minBinaryExpression;
	}
	public copyFrom(ctx: MinBinaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MinBinaryExpressionLabelContext extends MinBinaryExpressionContext {
	constructor(parser: wcpsParser, ctx: MinBinaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterMinBinaryExpressionLabel) {
	 		listener.enterMinBinaryExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitMinBinaryExpressionLabel) {
	 		listener.exitMinBinaryExpressionLabel(this);
		}
	}
}


export class MaxBinaryExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_maxBinaryExpression;
	}
	public copyFrom(ctx: MaxBinaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MaxBinaryExpressionLabelContext extends MaxBinaryExpressionContext {
	constructor(parser: wcpsParser, ctx: MaxBinaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterMaxBinaryExpressionLabel) {
	 		listener.enterMaxBinaryExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitMaxBinaryExpressionLabel) {
	 		listener.exitMaxBinaryExpressionLabel(this);
		}
	}
}


export class UnaryBooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_unaryBooleanExpression;
	}
	public copyFrom(ctx: UnaryBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NotUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
	constructor(parser: wcpsParser, ctx: UnaryBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterNotUnaryBooleanExpressionLabel) {
	 		listener.enterNotUnaryBooleanExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitNotUnaryBooleanExpressionLabel) {
	 		listener.exitNotUnaryBooleanExpressionLabel(this);
		}
	}
}
export class BitUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
	constructor(parser: wcpsParser, ctx: UnaryBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BIT(): TerminalNode {
		return this.getToken(wcpsParser.BIT, 0);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterBitUnaryBooleanExpressionLabel) {
	 		listener.enterBitUnaryBooleanExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitBitUnaryBooleanExpressionLabel) {
	 		listener.exitBitUnaryBooleanExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_castExpression;
	}
	public copyFrom(ctx: CastExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CastExpressionLabelContext extends CastExpressionContext {
	constructor(parser: wcpsParser, ctx: CastExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCastExpressionLabel) {
	 		listener.enterCastExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCastExpressionLabel) {
	 		listener.exitCastExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorExpression;
	}
	public copyFrom(ctx: RangeConstructorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorExpressionLabelContext extends RangeConstructorExpressionContext {
	constructor(parser: wcpsParser, ctx: RangeConstructorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorExpressionLabel) {
	 		listener.enterRangeConstructorExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorExpressionLabel) {
	 		listener.exitRangeConstructorExpressionLabel(this);
		}
	}
}


export class RangeConstructorElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorElement;
	}
	public copyFrom(ctx: RangeConstructorElementContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorElementLabelContext extends RangeConstructorElementContext {
	constructor(parser: wcpsParser, ctx: RangeConstructorElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorElementLabel) {
	 		listener.enterRangeConstructorElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorElementLabel) {
	 		listener.exitRangeConstructorElementLabel(this);
		}
	}
}


export class RangeConstructorElementListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorElementList;
	}
	public copyFrom(ctx: RangeConstructorElementListContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorElementListLabelContext extends RangeConstructorElementListContext {
	constructor(parser: wcpsParser, ctx: RangeConstructorElementListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorElementListLabel) {
	 		listener.enterRangeConstructorElementListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorElementListLabel) {
	 		listener.exitRangeConstructorElementListLabel(this);
		}
	}
}


export class RangeConstructorSwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_rangeConstructorSwitchCaseExpression;
	}
	public copyFrom(ctx: RangeConstructorSwitchCaseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorSwitchCaseExpressionLabelContext extends RangeConstructorSwitchCaseExpressionContext {
	constructor(parser: wcpsParser, ctx: RangeConstructorSwitchCaseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterRangeConstructorSwitchCaseExpressionLabel) {
	 		listener.enterRangeConstructorSwitchCaseExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitRangeConstructorSwitchCaseExpressionLabel) {
	 		listener.exitRangeConstructorSwitchCaseExpressionLabel(this);
		}
	}
}


export class DimensionPointListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionPointList;
	}
	public copyFrom(ctx: DimensionPointListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionPointListLabelContext extends DimensionPointListContext {
	constructor(parser: wcpsParser, ctx: DimensionPointListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionPointListLabel) {
	 		listener.enterDimensionPointListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionPointListLabel) {
	 		listener.exitDimensionPointListLabel(this);
		}
	}
}


export class DimensionPointElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionPointElement;
	}
	public copyFrom(ctx: DimensionPointElementContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionPointElementLabelContext extends DimensionPointElementContext {
	constructor(parser: wcpsParser, ctx: DimensionPointElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionPointElementLabel) {
	 		listener.enterDimensionPointElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionPointElementLabel) {
	 		listener.exitDimensionPointElementLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionPointElement;
	}
	public copyFrom(ctx: ScaleDimensionPointElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceScaleDimensionPointElementLabelContext extends ScaleDimensionPointElementContext {
	constructor(parser: wcpsParser, ctx: ScaleDimensionPointElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSliceScaleDimensionPointElementLabel) {
	 		listener.enterSliceScaleDimensionPointElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSliceScaleDimensionPointElementLabel) {
	 		listener.exitSliceScaleDimensionPointElementLabel(this);
		}
	}
}


export class ScaleDimensionPointListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionPointList;
	}
	public copyFrom(ctx: ScaleDimensionPointListContext): void {
		super.copyFrom(ctx);
	}
}
export class ScaleDimensionPointListLabelContext extends ScaleDimensionPointListContext {
	constructor(parser: wcpsParser, ctx: ScaleDimensionPointListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionPointListLabel) {
	 		listener.enterScaleDimensionPointListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionPointListLabel) {
	 		listener.exitScaleDimensionPointListLabel(this);
		}
	}
}


export class ScaleDimensionIntervalListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionIntervalList;
	}
	public copyFrom(ctx: ScaleDimensionIntervalListContext): void {
		super.copyFrom(ctx);
	}
}
export class ScaleDimensionIntervalListLabelContext extends ScaleDimensionIntervalListContext {
	constructor(parser: wcpsParser, ctx: ScaleDimensionIntervalListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterScaleDimensionIntervalListLabel) {
	 		listener.enterScaleDimensionIntervalListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitScaleDimensionIntervalListLabel) {
	 		listener.exitScaleDimensionIntervalListLabel(this);
		}
	}
}


export class ScaleDimensionIntervalElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_scaleDimensionIntervalElement;
	}
	public copyFrom(ctx: ScaleDimensionIntervalElementContext): void {
		super.copyFrom(ctx);
	}
}
export class TrimScaleDimensionIntervalElementLabelContext extends ScaleDimensionIntervalElementContext {
	constructor(parser: wcpsParser, ctx: ScaleDimensionIntervalElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrimScaleDimensionIntervalElementLabel) {
	 		listener.enterTrimScaleDimensionIntervalElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrimScaleDimensionIntervalElementLabel) {
	 		listener.exitTrimScaleDimensionIntervalElementLabel(this);
		}
	}
}


export class DimensionBoundConcatenationElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionBoundConcatenationElement;
	}
	public copyFrom(ctx: DimensionBoundConcatenationElementContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionBoundConcatenationElementLabelContext extends DimensionBoundConcatenationElementContext {
	constructor(parser: wcpsParser, ctx: DimensionBoundConcatenationElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionBoundConcatenationElementLabel) {
	 		listener.enterDimensionBoundConcatenationElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionBoundConcatenationElementLabel) {
	 		listener.exitDimensionBoundConcatenationElementLabel(this);
		}
	}
}


export class DimensionIntervalElementContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionIntervalElement;
	}
	public copyFrom(ctx: DimensionIntervalElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
	constructor(parser: wcpsParser, ctx: DimensionIntervalElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public dimensionBoundConcatenationElement(): DimensionBoundConcatenationElementContext {
		return this.getTypedRuleContext(DimensionBoundConcatenationElementContext, 0) as DimensionBoundConcatenationElementContext;
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSliceDimensionIntervalElementLabel) {
	 		listener.enterSliceDimensionIntervalElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSliceDimensionIntervalElementLabel) {
	 		listener.exitSliceDimensionIntervalElementLabel(this);
		}
	}
}
export class TrimDimensionIntervalByImageCrsDomainElementLabelContext extends DimensionIntervalElementContext {
	constructor(parser: wcpsParser, ctx: DimensionIntervalElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public axisName(): AxisNameContext {
		return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
	}
	public LEFT_PARENTHESIS(): TerminalNode {
		return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0);
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		return this.getTypedRuleContext(ImageCrsDomainByDimensionExpressionContext, 0) as ImageCrsDomainByDimensionExpressionContext;
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrimDimensionIntervalByImageCrsDomainElementLabel) {
	 		listener.enterTrimDimensionIntervalByImageCrsDomainElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrimDimensionIntervalByImageCrsDomainElementLabel) {
	 		listener.exitTrimDimensionIntervalByImageCrsDomainElementLabel(this);
		}
	}
}
export class TrimDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
	constructor(parser: wcpsParser, ctx: DimensionIntervalElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterTrimDimensionIntervalElementLabel) {
	 		listener.enterTrimDimensionIntervalElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitTrimDimensionIntervalElementLabel) {
	 		listener.exitTrimDimensionIntervalElementLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPoints;
	}
	public copyFrom(ctx: WktPointsContext): void {
		super.copyFrom(ctx);
	}
}
export class WktPointsLabelContext extends WktPointsContext {
	constructor(parser: wcpsParser, ctx: WktPointsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWktPointsLabel) {
	 		listener.enterWktPointsLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWktPointsLabel) {
	 		listener.exitWktPointsLabel(this);
		}
	}
}


export class WktPointElementListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPointElementList;
	}
	public copyFrom(ctx: WktPointElementListContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTPointElementListLabelContext extends WktPointElementListContext {
	constructor(parser: wcpsParser, ctx: WktPointElementListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTPointElementListLabel) {
	 		listener.enterWKTPointElementListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTPointElementListLabel) {
	 		listener.exitWKTPointElementListLabel(this);
		}
	}
}


export class WktLineStringContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktLineString;
	}
	public copyFrom(ctx: WktLineStringContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTLineStringLabelContext extends WktLineStringContext {
	constructor(parser: wcpsParser, ctx: WktLineStringContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LINESTRING(): TerminalNode {
		return this.getToken(wcpsParser.LINESTRING, 0);
	}
	public wktPointElementList(): WktPointElementListContext {
		return this.getTypedRuleContext(WktPointElementListContext, 0) as WktPointElementListContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTLineStringLabel) {
	 		listener.enterWKTLineStringLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTLineStringLabel) {
	 		listener.exitWKTLineStringLabel(this);
		}
	}
}


export class WktPolygonContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktPolygon;
	}
	public copyFrom(ctx: WktPolygonContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTPolygonLabelContext extends WktPolygonContext {
	constructor(parser: wcpsParser, ctx: WktPolygonContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTPolygonLabel) {
	 		listener.enterWKTPolygonLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTPolygonLabel) {
	 		listener.exitWKTPolygonLabel(this);
		}
	}
}


export class WktMultipolygonContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktMultipolygon;
	}
	public copyFrom(ctx: WktMultipolygonContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTMultipolygonLabelContext extends WktMultipolygonContext {
	constructor(parser: wcpsParser, ctx: WktMultipolygonContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTMultipolygonLabel) {
	 		listener.enterWKTMultipolygonLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTMultipolygonLabel) {
	 		listener.exitWKTMultipolygonLabel(this);
		}
	}
}


export class WktCoverageExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktCoverageExpression;
	}
	public copyFrom(ctx: WktCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTCoverageExpressionLabelContext extends WktCoverageExpressionContext {
	constructor(parser: wcpsParser, ctx: WktCoverageExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getTypedRuleContext(CoverageExpressionContext, 0) as CoverageExpressionContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTCoverageExpressionLabel) {
	 		listener.enterWKTCoverageExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTCoverageExpressionLabel) {
	 		listener.exitWKTCoverageExpressionLabel(this);
		}
	}
}


export class WktExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_wktExpression;
	}
	public copyFrom(ctx: WktExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTExpressionLabelContext extends WktExpressionContext {
	constructor(parser: wcpsParser, ctx: WktExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterWKTExpressionLabel) {
	 		listener.enterWKTExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitWKTExpressionLabel) {
	 		listener.exitWKTExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipCurtainExpression;
	}
	public copyFrom(ctx: ClipCurtainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipCurtainExpressionLabelContext extends ClipCurtainExpressionContext {
	constructor(parser: wcpsParser, ctx: ClipCurtainExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipCurtainExpressionLabel) {
	 		listener.enterClipCurtainExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipCurtainExpressionLabel) {
	 		listener.exitClipCurtainExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipCorridorExpression;
	}
	public copyFrom(ctx: ClipCorridorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipCorridorExpressionLabelContext extends ClipCorridorExpressionContext {
	constructor(parser: wcpsParser, ctx: ClipCorridorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipCorridorExpressionLabel) {
	 		listener.enterClipCorridorExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipCorridorExpressionLabel) {
	 		listener.exitClipCorridorExpressionLabel(this);
		}
	}
}


export class ClipWKTExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_clipWKTExpression;
	}
	public copyFrom(ctx: ClipWKTExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipWKTExpressionLabelContext extends ClipWKTExpressionContext {
	constructor(parser: wcpsParser, ctx: ClipWKTExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterClipWKTExpressionLabel) {
	 		listener.enterClipWKTExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitClipWKTExpressionLabel) {
	 		listener.exitClipWKTExpressionLabel(this);
		}
	}
}


export class CrsTransformExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_crsTransformExpression;
	}
	public copyFrom(ctx: CrsTransformExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CrsTransformExpressionLabelContext extends CrsTransformExpressionContext {
	constructor(parser: wcpsParser, ctx: CrsTransformExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCrsTransformExpressionLabel) {
	 		listener.enterCrsTransformExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCrsTransformExpressionLabel) {
	 		listener.exitCrsTransformExpressionLabel(this);
		}
	}
}


export class CrsTransformShorthandExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_crsTransformShorthandExpression;
	}
	public copyFrom(ctx: CrsTransformShorthandExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CrsTransformShorthandExpressionLabelContext extends CrsTransformShorthandExpressionContext {
	constructor(parser: wcpsParser, ctx: CrsTransformShorthandExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCrsTransformShorthandExpressionLabel) {
	 		listener.enterCrsTransformShorthandExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCrsTransformShorthandExpressionLabel) {
	 		listener.exitCrsTransformShorthandExpressionLabel(this);
		}
	}
}


export class PolygonizeExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_polygonizeExpression;
	}
	public copyFrom(ctx: PolygonizeExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PolygonizeExpressionLabelContext extends PolygonizeExpressionContext {
	constructor(parser: wcpsParser, ctx: PolygonizeExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterPolygonizeExpressionLabel) {
	 		listener.enterPolygonizeExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitPolygonizeExpressionLabel) {
	 		listener.exitPolygonizeExpressionLabel(this);
		}
	}
}


export class DimensionCrsListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionCrsList;
	}
	public copyFrom(ctx: DimensionCrsListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionCrsListLabelContext extends DimensionCrsListContext {
	constructor(parser: wcpsParser, ctx: DimensionCrsListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionCrsListLabel) {
	 		listener.enterDimensionCrsListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionCrsListLabel) {
	 		listener.exitDimensionCrsListLabel(this);
		}
	}
}


export class DimensionGeoXYResolutionsListContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionGeoXYResolutionsList;
	}
	public copyFrom(ctx: DimensionGeoXYResolutionsListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionGeoXYResolutionsListLabelContext extends DimensionGeoXYResolutionsListContext {
	constructor(parser: wcpsParser, ctx: DimensionGeoXYResolutionsListContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionGeoXYResolutionsListLabel) {
	 		listener.enterDimensionGeoXYResolutionsListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionGeoXYResolutionsListLabel) {
	 		listener.exitDimensionGeoXYResolutionsListLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_dimensionCrsElement;
	}
	public copyFrom(ctx: DimensionCrsElementContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionCrsElementLabelContext extends DimensionCrsElementContext {
	constructor(parser: wcpsParser, ctx: DimensionCrsElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterDimensionCrsElementLabel) {
	 		listener.enterDimensionCrsElementLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitDimensionCrsElementLabel) {
	 		listener.exitDimensionCrsElementLabel(this);
		}
	}
}


export class InterpolationTypeContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_interpolationType;
	}
	public copyFrom(ctx: InterpolationTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class InterpolationTypeLabelContext extends InterpolationTypeContext {
	constructor(parser: wcpsParser, ctx: InterpolationTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COVERAGE_VARIABLE_NAME(): TerminalNode {
		return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterInterpolationTypeLabel) {
	 		listener.enterInterpolationTypeLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitInterpolationTypeLabel) {
	 		listener.exitInterpolationTypeLabel(this);
		}
	}
}


export class CoverageConstructorExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageConstructorExpression;
	}
	public copyFrom(ctx: CoverageConstructorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageConstructorExpressionLabelContext extends CoverageConstructorExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageConstructorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageConstructorExpressionLabel) {
	 		listener.enterCoverageConstructorExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageConstructorExpressionLabel) {
	 		listener.exitCoverageConstructorExpressionLabel(this);
		}
	}
}


export class AxisIteratorContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_axisIterator;
	}
	public copyFrom(ctx: AxisIteratorContext): void {
		super.copyFrom(ctx);
	}
}
export class AxisIteratorDomainIntervalsLabelContext extends AxisIteratorContext {
	constructor(parser: wcpsParser, ctx: AxisIteratorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public COLON(): TerminalNode {
		return this.getToken(wcpsParser.COLON, 0);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisIteratorDomainIntervalsLabel) {
	 		listener.enterAxisIteratorDomainIntervalsLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisIteratorDomainIntervalsLabel) {
	 		listener.exitAxisIteratorDomainIntervalsLabel(this);
		}
	}
}
export class AxisIteratorLabelContext extends AxisIteratorContext {
	constructor(parser: wcpsParser, ctx: AxisIteratorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public regularTimeStep(): RegularTimeStepContext {
		return this.getTypedRuleContext(RegularTimeStepContext, 0) as RegularTimeStepContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(wcpsParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(wcpsParser.DESC, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisIteratorLabel) {
	 		listener.enterAxisIteratorLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisIteratorLabel) {
	 		listener.exitAxisIteratorLabel(this);
		}
	}
}
export class AxisIteratorEnumerationListLabelContext extends AxisIteratorContext {
	constructor(parser: wcpsParser, ctx: AxisIteratorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public dimensionBoundConcatenationElement_list(): DimensionBoundConcatenationElementContext[] {
		return this.getTypedRuleContexts(DimensionBoundConcatenationElementContext) as DimensionBoundConcatenationElementContext[];
	}
	public dimensionBoundConcatenationElement(i: number): DimensionBoundConcatenationElementContext {
		return this.getTypedRuleContext(DimensionBoundConcatenationElementContext, i) as DimensionBoundConcatenationElementContext;
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
	public ASC(): TerminalNode {
		return this.getToken(wcpsParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(wcpsParser.DESC, 0);
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisIteratorEnumerationListLabel) {
	 		listener.enterAxisIteratorEnumerationListLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisIteratorEnumerationListLabel) {
	 		listener.exitAxisIteratorEnumerationListLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_intervalExpression;
	}
	public copyFrom(ctx: IntervalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntervalExpressionLabelContext extends IntervalExpressionContext {
	constructor(parser: wcpsParser, ctx: IntervalExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterIntervalExpressionLabel) {
	 		listener.enterIntervalExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitIntervalExpressionLabel) {
	 		listener.exitIntervalExpressionLabel(this);
		}
	}
}


export class CoverageConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_coverageConstantExpression;
	}
	public copyFrom(ctx: CoverageConstantExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageConstantExpressionLabelContext extends CoverageConstantExpressionContext {
	constructor(parser: wcpsParser, ctx: CoverageConstantExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterCoverageConstantExpressionLabel) {
	 		listener.enterCoverageConstantExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitCoverageConstantExpressionLabel) {
	 		listener.exitCoverageConstantExpressionLabel(this);
		}
	}
}


export class AxisSpecContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_axisSpec;
	}
	public copyFrom(ctx: AxisSpecContext): void {
		super.copyFrom(ctx);
	}
}
export class AxisSpecLabelContext extends AxisSpecContext {
	constructor(parser: wcpsParser, ctx: AxisSpecContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		return this.getTypedRuleContext(DimensionIntervalElementContext, 0) as DimensionIntervalElementContext;
	}
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterAxisSpecLabel) {
	 		listener.enterAxisSpecLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitAxisSpecLabel) {
	 		listener.exitAxisSpecLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceBooleanExpression;
	}
	public copyFrom(ctx: ReduceBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReduceBooleanExpressionLabelContext extends ReduceBooleanExpressionContext {
	constructor(parser: wcpsParser, ctx: ReduceBooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceBooleanExpressionLabel) {
	 		listener.enterReduceBooleanExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceBooleanExpressionLabel) {
	 		listener.exitReduceBooleanExpressionLabel(this);
		}
	}
}


export class ReduceNumericalExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_reduceNumericalExpression;
	}
	public copyFrom(ctx: ReduceNumericalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReduceNumericalExpressionLabelContext extends ReduceNumericalExpressionContext {
	constructor(parser: wcpsParser, ctx: ReduceNumericalExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterReduceNumericalExpressionLabel) {
	 		listener.enterReduceNumericalExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitReduceNumericalExpressionLabel) {
	 		listener.exitReduceNumericalExpressionLabel(this);
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
    public get ruleIndex(): number {
    	return wcpsParser.RULE_generalCondenseExpression;
	}
	public copyFrom(ctx: GeneralCondenseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class GeneralCondenseExpressionLabelContext extends GeneralCondenseExpressionContext {
	constructor(parser: wcpsParser, ctx: GeneralCondenseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterGeneralCondenseExpressionLabel) {
	 		listener.enterGeneralCondenseExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitGeneralCondenseExpressionLabel) {
	 		listener.exitGeneralCondenseExpressionLabel(this);
		}
	}
}


export class FlipExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_flipExpression;
	}
	public copyFrom(ctx: FlipExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FlipExpressionLabelContext extends FlipExpressionContext {
	constructor(parser: wcpsParser, ctx: FlipExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterFlipExpressionLabel) {
	 		listener.enterFlipExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitFlipExpressionLabel) {
	 		listener.exitFlipExpressionLabel(this);
		}
	}
}


export class SortExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_sortExpression;
	}
	public copyFrom(ctx: SortExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SortExpressionLabelContext extends SortExpressionContext {
	constructor(parser: wcpsParser, ctx: SortExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSortExpressionLabel) {
	 		listener.enterSortExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSortExpressionLabel) {
	 		listener.exitSortExpressionLabel(this);
		}
	}
}


export class SwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parser?: wcpsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return wcpsParser.RULE_switchCaseExpression;
	}
	public copyFrom(ctx: SwitchCaseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SwitchCaseExpressionLabelContext extends SwitchCaseExpressionContext {
	constructor(parser: wcpsParser, ctx: SwitchCaseExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: wcpsListener): void {
	    if(listener.enterSwitchCaseExpressionLabel) {
	 		listener.enterSwitchCaseExpressionLabel(this);
		}
	}
	public exitRule(listener: wcpsListener): void {
	    if(listener.exitSwitchCaseExpressionLabel) {
	 		listener.exitSwitchCaseExpressionLabel(this);
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

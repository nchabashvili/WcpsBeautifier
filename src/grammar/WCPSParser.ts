// Generated from WCPS.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  NoViableAltException,
  BailErrorStrategy,
  Parser,
  ParserATNSimulator,
  RuleContext,
  ParserRuleContext,
  PredictionMode,
  PredictionContextCache,
  TerminalNode,
  RuleNode,
  Token,
  TokenStream,
  Interval,
  IntervalSet,
} from 'antlr4';
import WCPSListener from './WCPSListener.js';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class WCPSParser extends Parser {
  public static readonly NodeType = 1;
  public static readonly AxisNameXpath = 2;
  public static readonly FOR = 3;
  public static readonly ABSOLUTE_VALUE = 4;
  public static readonly ADD = 5;
  public static readonly ALL = 6;
  public static readonly AND = 7;
  public static readonly AT = 8;
  public static readonly ARCSIN = 9;
  public static readonly ARCCOS = 10;
  public static readonly ARCTAN = 11;
  public static readonly ASC = 12;
  public static readonly AVG = 13;
  public static readonly BIT = 14;
  public static readonly COLON = 15;
  public static readonly COMMA = 16;
  public static readonly CONDENSE = 17;
  public static readonly COS = 18;
  public static readonly COSH = 19;
  public static readonly COUNT = 20;
  public static readonly COVERAGE = 21;
  public static readonly COVERAGE_VARIABLE_NAME_PREFIX = 22;
  public static readonly CRS_TRANSFORM = 23;
  public static readonly DECODE = 24;
  public static readonly DESC = 25;
  public static readonly DESCRIBE_COVERAGE = 26;
  public static readonly DIV = 27;
  public static readonly DIVISION = 28;
  public static readonly DOT = 29;
  public static readonly DOUBLE_COLON = 30;
  public static readonly ENCODE = 31;
  public static readonly EQUAL = 32;
  public static readonly EXP = 33;
  public static readonly EXTEND = 34;
  public static readonly FALSE = 35;
  public static readonly GREATER_THAN = 36;
  public static readonly GREATER_THAN_SLASH = 37;
  public static readonly GREATER_OR_EQUAL_THAN = 38;
  public static readonly IMAGINARY_PART = 39;
  public static readonly ID = 40;
  public static readonly IMGCRSDOMAIN = 41;
  public static readonly IN = 42;
  public static readonly LEFT_BRACE = 43;
  public static readonly LEFT_BRACKET = 44;
  public static readonly LEFT_PARANTHESIS = 45;
  public static readonly LET = 46;
  public static readonly LN = 47;
  public static readonly LIST = 48;
  public static readonly LOG = 49;
  public static readonly LOWER_THAN = 50;
  public static readonly LOWER_THAN_SLASH = 51;
  public static readonly LOWER_OR_EQUAL_THAN = 52;
  public static readonly MAX = 53;
  public static readonly METADATA = 54;
  public static readonly MIN = 55;
  public static readonly MINUS = 56;
  public static readonly MIXED = 57;
  public static readonly MOD = 58;
  public static readonly MULTIPLICATION = 59;
  public static readonly NOT = 60;
  public static readonly NOT_EQUAL = 61;
  public static readonly ORDERBY = 62;
  public static readonly OR = 63;
  public static readonly OVER = 64;
  public static readonly OVERLAY = 65;
  public static readonly PLUS = 66;
  public static readonly POWER = 67;
  public static readonly REAL_PART = 68;
  public static readonly ROUND = 69;
  public static readonly RETURN = 70;
  public static readonly RIGHT_BRACE = 71;
  public static readonly RIGHT_BRACKET = 72;
  public static readonly RIGHT_PARANTHESIS = 73;
  public static readonly SCALE = 74;
  public static readonly SEMICOLON = 75;
  public static readonly SIN = 76;
  public static readonly SINH = 77;
  public static readonly SLICE = 78;
  public static readonly SOME = 79;
  public static readonly SQUARE_ROOT = 80;
  public static readonly STRUCT = 81;
  public static readonly TAN = 82;
  public static readonly TANH = 83;
  public static readonly TRIM = 84;
  public static readonly TRUE = 85;
  public static readonly USING = 86;
  public static readonly VALUE = 87;
  public static readonly VALUES = 88;
  public static readonly WHERE = 89;
  public static readonly WRAP_RESULT = 90;
  public static readonly XOR = 91;
  public static readonly REAL_NUMBER_CONSTANT = 92;
  public static readonly SIMPLE_IDENTIFIER = 93;
  public static readonly SIMPLE_IDENTIFIER_WITH_NUMBERS = 94;
  public static readonly IDENTIFIER = 95;
  public static readonly NAME = 96;
  public static readonly STRING_LITERAL = 97;
  public static readonly WS = 98;
  public static readonly XPATH_LITERAL = 99;
  public static readonly NCName = 100;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_wcpsQuery = 0;
  public static readonly RULE_forClauseList = 1;
  public static readonly RULE_forClause = 2;
  public static readonly RULE_whereClause = 3;
  public static readonly RULE_returnClause = 4;
  public static readonly RULE_coverageVariableName = 5;
  public static readonly RULE_processingExpression = 6;
  public static readonly RULE_scalarExpression = 7;
  public static readonly RULE_booleanScalarExpression = 8;
  public static readonly RULE_booleanUnaryOperator = 9;
  public static readonly RULE_booleanConstant = 10;
  public static readonly RULE_booleanOperator = 11;
  public static readonly RULE_numericalComparissonOperator = 12;
  public static readonly RULE_stringOperator = 13;
  public static readonly RULE_stringScalarExpression = 14;
  public static readonly RULE_starExpression = 15;
  public static readonly RULE_numericalScalarExpression = 16;
  public static readonly RULE_complexNumberConstant = 17;
  public static readonly RULE_numericalOperator = 18;
  public static readonly RULE_numericalUnaryOperation = 19;
  public static readonly RULE_trigonometricOperator = 20;
  public static readonly RULE_getComponentExpression = 21;
  public static readonly RULE_coverageIdExpression = 22;
  public static readonly RULE_describeCoverageExpression = 23;
  public static readonly RULE_encodedCoverageExpression = 24;
  public static readonly RULE_decodeCoverageExpression = 25;
  public static readonly RULE_coverageExpression = 26;
  public static readonly RULE_coverageArithmeticOperator = 27;
  public static readonly RULE_unaryArithmeticExpressionOperator = 28;
  public static readonly RULE_unaryArithmeticExpression = 29;
  public static readonly RULE_trigonometricExpression = 30;
  public static readonly RULE_exponentialExpressionOperator = 31;
  public static readonly RULE_exponentialExpression = 32;
  public static readonly RULE_unaryBooleanExpression = 33;
  public static readonly RULE_rangeType = 34;
  public static readonly RULE_castExpression = 35;
  public static readonly RULE_fieldName = 36;
  public static readonly RULE_rangeConstructorExpression = 37;
  public static readonly RULE_crsTransformExpression = 38;
  public static readonly RULE_dimensionPointList = 39;
  public static readonly RULE_dimensionPointElement = 40;
  public static readonly RULE_dimensionIntervalList = 41;
  public static readonly RULE_dimensionIntervalElement = 42;
  public static readonly RULE_dimensionCrsList = 43;
  public static readonly RULE_dimensionCrsElement = 44;
  public static readonly RULE_fieldInterpolationList = 45;
  public static readonly RULE_fieldInterpolationListElement = 46;
  public static readonly RULE_interpolationMethod = 47;
  public static readonly RULE_nullResistance = 48;
  public static readonly RULE_interpolationType = 49;
  public static readonly RULE_coverageConstructorExpression = 50;
  public static readonly RULE_axisIterator = 51;
  public static readonly RULE_intervalExpression = 52;
  public static readonly RULE_coverageConstantExpression = 53;
  public static readonly RULE_axisSpec = 54;
  public static readonly RULE_condenseExpression = 55;
  public static readonly RULE_reduceBooleanExpressionOperator = 56;
  public static readonly RULE_reduceNumericalExpressionOperator = 57;
  public static readonly RULE_reduceBooleanExpression = 58;
  public static readonly RULE_reduceNumericalExpression = 59;
  public static readonly RULE_reduceExpression = 60;
  public static readonly RULE_condenseExpressionOperator = 61;
  public static readonly RULE_generalCondenseExpression = 62;
  public static readonly RULE_crsName = 63;
  public static readonly RULE_axisName = 64;
  public static readonly RULE_constant = 65;
  public static readonly RULE_identifier = 66;
  public static readonly literalNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'@'",
    null,
    null,
    null,
    null,
    null,
    null,
    "':'",
    "','",
    null,
    null,
    null,
    null,
    null,
    "'$'",
    null,
    null,
    null,
    null,
    null,
    "'/'",
    "'.'",
    "'::'",
    null,
    "'='",
    null,
    null,
    null,
    "'>'",
    "'/>'",
    "'>='",
    null,
    null,
    null,
    null,
    "'{'",
    "'['",
    "'('",
    null,
    null,
    null,
    null,
    "'<'",
    "'</'",
    "'<='",
    null,
    null,
    null,
    "'-'",
    null,
    null,
    "'*'",
    null,
    "'!='",
    null,
    null,
    null,
    null,
    "'+'",
    null,
    null,
    null,
    null,
    "'}'",
    "']'",
    "')'",
    null,
    "';'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    'NodeType',
    'AxisNameXpath',
    'FOR',
    'ABSOLUTE_VALUE',
    'ADD',
    'ALL',
    'AND',
    'AT',
    'ARCSIN',
    'ARCCOS',
    'ARCTAN',
    'ASC',
    'AVG',
    'BIT',
    'COLON',
    'COMMA',
    'CONDENSE',
    'COS',
    'COSH',
    'COUNT',
    'COVERAGE',
    'COVERAGE_VARIABLE_NAME_PREFIX',
    'CRS_TRANSFORM',
    'DECODE',
    'DESC',
    'DESCRIBE_COVERAGE',
    'DIV',
    'DIVISION',
    'DOT',
    'DOUBLE_COLON',
    'ENCODE',
    'EQUAL',
    'EXP',
    'EXTEND',
    'FALSE',
    'GREATER_THAN',
    'GREATER_THAN_SLASH',
    'GREATER_OR_EQUAL_THAN',
    'IMAGINARY_PART',
    'ID',
    'IMGCRSDOMAIN',
    'IN',
    'LEFT_BRACE',
    'LEFT_BRACKET',
    'LEFT_PARANTHESIS',
    'LET',
    'LN',
    'LIST',
    'LOG',
    'LOWER_THAN',
    'LOWER_THAN_SLASH',
    'LOWER_OR_EQUAL_THAN',
    'MAX',
    'METADATA',
    'MIN',
    'MINUS',
    'MIXED',
    'MOD',
    'MULTIPLICATION',
    'NOT',
    'NOT_EQUAL',
    'ORDERBY',
    'OR',
    'OVER',
    'OVERLAY',
    'PLUS',
    'POWER',
    'REAL_PART',
    'ROUND',
    'RETURN',
    'RIGHT_BRACE',
    'RIGHT_BRACKET',
    'RIGHT_PARANTHESIS',
    'SCALE',
    'SEMICOLON',
    'SIN',
    'SINH',
    'SLICE',
    'SOME',
    'SQUARE_ROOT',
    'STRUCT',
    'TAN',
    'TANH',
    'TRIM',
    'TRUE',
    'USING',
    'VALUE',
    'VALUES',
    'WHERE',
    'WRAP_RESULT',
    'XOR',
    'REAL_NUMBER_CONSTANT',
    'SIMPLE_IDENTIFIER',
    'SIMPLE_IDENTIFIER_WITH_NUMBERS',
    'IDENTIFIER',
    'NAME',
    'STRING_LITERAL',
    'WS',
    'XPATH_LITERAL',
    'NCName',
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'wcpsQuery',
    'forClauseList',
    'forClause',
    'whereClause',
    'returnClause',
    'coverageVariableName',
    'processingExpression',
    'scalarExpression',
    'booleanScalarExpression',
    'booleanUnaryOperator',
    'booleanConstant',
    'booleanOperator',
    'numericalComparissonOperator',
    'stringOperator',
    'stringScalarExpression',
    'starExpression',
    'numericalScalarExpression',
    'complexNumberConstant',
    'numericalOperator',
    'numericalUnaryOperation',
    'trigonometricOperator',
    'getComponentExpression',
    'coverageIdExpression',
    'describeCoverageExpression',
    'encodedCoverageExpression',
    'decodeCoverageExpression',
    'coverageExpression',
    'coverageArithmeticOperator',
    'unaryArithmeticExpressionOperator',
    'unaryArithmeticExpression',
    'trigonometricExpression',
    'exponentialExpressionOperator',
    'exponentialExpression',
    'unaryBooleanExpression',
    'rangeType',
    'castExpression',
    'fieldName',
    'rangeConstructorExpression',
    'crsTransformExpression',
    'dimensionPointList',
    'dimensionPointElement',
    'dimensionIntervalList',
    'dimensionIntervalElement',
    'dimensionCrsList',
    'dimensionCrsElement',
    'fieldInterpolationList',
    'fieldInterpolationListElement',
    'interpolationMethod',
    'nullResistance',
    'interpolationType',
    'coverageConstructorExpression',
    'axisIterator',
    'intervalExpression',
    'coverageConstantExpression',
    'axisSpec',
    'condenseExpression',
    'reduceBooleanExpressionOperator',
    'reduceNumericalExpressionOperator',
    'reduceBooleanExpression',
    'reduceNumericalExpression',
    'reduceExpression',
    'condenseExpressionOperator',
    'generalCondenseExpression',
    'crsName',
    'axisName',
    'constant',
    'identifier',
  ];
  public get grammarFileName(): string {
    return 'WCPS.g4';
  }
  public get literalNames(): (string | null)[] {
    return WCPSParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return WCPSParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return WCPSParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return WCPSParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      WCPSParser._ATN,
      WCPSParser.DecisionsToDFA,
      new PredictionContextCache(),
    );
  }
  // @RuleVersion(0)
  public wcpsQuery(): WcpsQueryContext {
    let localctx: WcpsQueryContext = new WcpsQueryContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 0, WCPSParser.RULE_wcpsQuery);
    let _la: number;
    try {
      localctx = new WcpsQueryLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 134;
          this.forClauseList();
        }
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 89) {
          {
            this.state = 135;
            this.whereClause();
          }
        }

        {
          this.state = 138;
          this.returnClause();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public forClauseList(): ForClauseListContext {
    let localctx: ForClauseListContext = new ForClauseListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 2, WCPSParser.RULE_forClauseList);
    let _la: number;
    try {
      localctx = new ForClauseListLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 140;
        this.match(WCPSParser.FOR);
        {
          this.state = 141;
          this.forClause();
        }
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 142;
              this.match(WCPSParser.COMMA);
              this.state = 143;
              this.forClause();
            }
          }
          this.state = 148;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public forClause(): ForClauseContext {
    let localctx: ForClauseContext = new ForClauseContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 4, WCPSParser.RULE_forClause);
    let _la: number;
    try {
      let _alt: number;
      localctx = new ForClauseLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 149;
        this.coverageVariableName();
        this.state = 150;
        this.match(WCPSParser.IN);
        this.state = 152;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 45) {
          {
            this.state = 151;
            this.match(WCPSParser.LEFT_PARANTHESIS);
          }
        }

        {
          this.state = 154;
          this.identifier();
        }
        this.state = 159;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 155;
                this.match(WCPSParser.COMMA);
                {
                  this.state = 156;
                  this.identifier();
                }
              }
            }
          }
          this.state = 161;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
        }
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 73) {
          {
            this.state = 162;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public whereClause(): WhereClauseContext {
    let localctx: WhereClauseContext = new WhereClauseContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 6, WCPSParser.RULE_whereClause);
    try {
      localctx = new WhereClauseLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 165;
        this.match(WCPSParser.WHERE);
        this.state = 166;
        this.booleanScalarExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public returnClause(): ReturnClauseContext {
    let localctx: ReturnClauseContext = new ReturnClauseContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 8, WCPSParser.RULE_returnClause);
    try {
      localctx = new ReturnClauseLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 168;
        this.match(WCPSParser.RETURN);
        this.state = 169;
        this.processingExpression();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public coverageVariableName(): CoverageVariableNameContext {
    let localctx: CoverageVariableNameContext = new CoverageVariableNameContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 10, WCPSParser.RULE_coverageVariableName);
    try {
      localctx = new CoverageVariableNameLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 171;
          this.identifier();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public processingExpression(): ProcessingExpressionContext {
    let localctx: ProcessingExpressionContext = new ProcessingExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 12, WCPSParser.RULE_processingExpression);
    try {
      this.state = 175;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 4:
        case 5:
        case 6:
        case 9:
        case 10:
        case 11:
        case 13:
        case 17:
        case 18:
        case 19:
        case 20:
        case 26:
        case 35:
        case 39:
        case 40:
        case 45:
        case 53:
        case 55:
        case 56:
        case 59:
        case 60:
        case 66:
        case 68:
        case 69:
        case 76:
        case 77:
        case 79:
        case 80:
        case 82:
        case 83:
        case 85:
        case 92:
        case 97:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 173;
            this.scalarExpression();
          }
          break;
        case 31:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 174;
            this.encodedCoverageExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public scalarExpression(): ScalarExpressionContext {
    let localctx: ScalarExpressionContext = new ScalarExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 14, WCPSParser.RULE_scalarExpression);
    try {
      this.state = 182;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 177;
            this.booleanScalarExpression(0);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 178;
            this.numericalScalarExpression(0);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 179;
            this.stringScalarExpression();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 180;
            this.getComponentExpression();
          }
          break;
        case 5:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 181;
            this.starExpression();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
    let localctx: BooleanScalarExpressionContext =
      new BooleanScalarExpressionContext(this, this._ctx, _parentState);
    let _prevctx: BooleanScalarExpressionContext = localctx;
    let _startState: number = 16;
    this.enterRecursionRule(
      localctx,
      16,
      WCPSParser.RULE_booleanScalarExpression,
      _p,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 204;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
          case 1:
            {
              localctx = new BooleanReduceExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 185;
              this.reduceBooleanExpression();
            }
            break;
          case 2:
            {
              localctx = new BooleanConstantLabelContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 186;
              this.booleanConstant();
            }
            break;
          case 3:
            {
              localctx = new BooleanUnaryScalarLabelContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 187;
              this.booleanUnaryOperator();
              this.state = 189;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                  {
                    this.state = 188;
                    this.match(WCPSParser.LEFT_PARANTHESIS);
                  }
                  break;
              }
              this.state = 191;
              this.booleanScalarExpression(0);
              this.state = 193;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                  {
                    this.state = 192;
                    this.match(WCPSParser.RIGHT_PARANTHESIS);
                  }
                  break;
              }
            }
            break;
          case 4:
            {
              localctx = new BooleanNumericalComparisonScalarLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 195;
              this.numericalScalarExpression(0);
              this.state = 196;
              this.numericalComparissonOperator();
              this.state = 197;
              this.numericalScalarExpression(0);
            }
            break;
          case 5:
            {
              localctx = new BooleanReduceExpressionContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 199;
              this.reduceBooleanExpression();
            }
            break;
          case 6:
            {
              localctx = new BooleanStringComparisonScalarContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 200;
              this.stringScalarExpression();
              this.state = 201;
              this.stringOperator();
              this.state = 202;
              this.stringScalarExpression();
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 212;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              {
                localctx = new BooleanBinaryScalarLabelContext(
                  this,
                  new BooleanScalarExpressionContext(
                    this,
                    _parentctx,
                    _parentState,
                  ),
                );
                this.pushNewRecursionContext(
                  localctx,
                  _startState,
                  WCPSParser.RULE_booleanScalarExpression,
                );
                this.state = 206;
                if (!this.precpred(this._ctx, 4)) {
                  throw this.createFailedPredicateException(
                    'this.precpred(this._ctx, 4)',
                  );
                }
                this.state = 207;
                this.booleanOperator();
                this.state = 208;
                this.booleanScalarExpression(5);
              }
            }
          }
          this.state = 214;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public booleanUnaryOperator(): BooleanUnaryOperatorContext {
    let localctx: BooleanUnaryOperatorContext = new BooleanUnaryOperatorContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 18, WCPSParser.RULE_booleanUnaryOperator);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 215;
        this.match(WCPSParser.NOT);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public booleanConstant(): BooleanConstantContext {
    let localctx: BooleanConstantContext = new BooleanConstantContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 20, WCPSParser.RULE_booleanConstant);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 217;
        _la = this._input.LA(1);
        if (!(_la === 35 || _la === 85)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public booleanOperator(): BooleanOperatorContext {
    let localctx: BooleanOperatorContext = new BooleanOperatorContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 22, WCPSParser.RULE_booleanOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 219;
        _la = this._input.LA(1);
        if (!(_la === 7 || _la === 63 || _la === 91)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public numericalComparissonOperator(): NumericalComparissonOperatorContext {
    let localctx: NumericalComparissonOperatorContext =
      new NumericalComparissonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, WCPSParser.RULE_numericalComparissonOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 221;
        _la = this._input.LA(1);
        if (
          !(((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 538181713) !== 0)
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public stringOperator(): StringOperatorContext {
    let localctx: StringOperatorContext = new StringOperatorContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 26, WCPSParser.RULE_stringOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 223;
        _la = this._input.LA(1);
        if (!(_la === 32 || _la === 61)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public stringScalarExpression(): StringScalarExpressionContext {
    let localctx: StringScalarExpressionContext =
      new StringScalarExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, WCPSParser.RULE_stringScalarExpression);
    try {
      localctx = new StringScalarExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 225;
        this.match(WCPSParser.STRING_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public starExpression(): StarExpressionContext {
    let localctx: StarExpressionContext = new StarExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 30, WCPSParser.RULE_starExpression);
    try {
      localctx = new StarExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 227;
        this.match(WCPSParser.MULTIPLICATION);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public numericalScalarExpression(): NumericalScalarExpressionContext;
  public numericalScalarExpression(
    _p: number,
  ): NumericalScalarExpressionContext;
  // @RuleVersion(0)
  public numericalScalarExpression(
    _p?: number,
  ): NumericalScalarExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: NumericalScalarExpressionContext =
      new NumericalScalarExpressionContext(this, this._ctx, _parentState);
    let _prevctx: NumericalScalarExpressionContext = localctx;
    let _startState: number = 32;
    this.enterRecursionRule(
      localctx,
      32,
      WCPSParser.RULE_numericalScalarExpression,
      _p,
    );
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 243;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 4:
          case 39:
          case 56:
          case 66:
          case 68:
          case 69:
          case 80:
            {
              localctx = new NumericalUnaryScalarExpressionLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 230;
              this.numericalUnaryOperation();
              this.state = 231;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 232;
              this.numericalScalarExpression(0);
              this.state = 233;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 9:
          case 10:
          case 11:
          case 18:
          case 19:
          case 76:
          case 77:
          case 82:
          case 83:
            {
              localctx = new NumericalTrigonometricScalarExpressionLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 235;
              this.trigonometricOperator();
              this.state = 236;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 237;
              this.numericalScalarExpression(0);
              this.state = 238;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 5:
          case 6:
          case 13:
          case 17:
          case 20:
          case 53:
          case 55:
          case 79:
            {
              localctx = new NumericalCondenseExpressionLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 240;
              this.condenseExpression();
            }
            break;
          case 92:
            {
              localctx = new NumericalRealNumberExpressionLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 241;
              this.match(WCPSParser.REAL_NUMBER_CONSTANT);
            }
            break;
          case 45:
            {
              localctx = new NumericalComplexNumberConstantContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 242;
              this.complexNumberConstant();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 251;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              {
                localctx = new NumericalBinaryScalarExpressionLabelContext(
                  this,
                  new NumericalScalarExpressionContext(
                    this,
                    _parentctx,
                    _parentState,
                  ),
                );
                this.pushNewRecursionContext(
                  localctx,
                  _startState,
                  WCPSParser.RULE_numericalScalarExpression,
                );
                this.state = 245;
                if (!this.precpred(this._ctx, 4)) {
                  throw this.createFailedPredicateException(
                    'this.precpred(this._ctx, 4)',
                  );
                }
                this.state = 246;
                this.numericalOperator();
                this.state = 247;
                this.numericalScalarExpression(5);
              }
            }
          }
          this.state = 253;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public complexNumberConstant(): ComplexNumberConstantContext {
    let localctx: ComplexNumberConstantContext =
      new ComplexNumberConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, WCPSParser.RULE_complexNumberConstant);
    try {
      localctx = new ComplexNumberConstantLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 254;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 255;
        this.match(WCPSParser.REAL_NUMBER_CONSTANT);
        this.state = 256;
        this.match(WCPSParser.COMMA);
        this.state = 257;
        this.match(WCPSParser.REAL_NUMBER_CONSTANT);
        this.state = 258;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public numericalOperator(): NumericalOperatorContext {
    let localctx: NumericalOperatorContext = new NumericalOperatorContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 36, WCPSParser.RULE_numericalOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 260;
        _la = this._input.LA(1);
        if (
          !(
            _la === 28 ||
            (((_la - 56) & ~0x1f) === 0 && ((1 << (_la - 56)) & 1033) !== 0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public numericalUnaryOperation(): NumericalUnaryOperationContext {
    let localctx: NumericalUnaryOperationContext =
      new NumericalUnaryOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, WCPSParser.RULE_numericalUnaryOperation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 262;
        _la = this._input.LA(1);
        if (
          !(
            _la === 4 ||
            (((_la - 39) & ~0x1f) === 0 &&
              ((1 << (_la - 39)) & 1744961537) !== 0) ||
            _la === 80
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public trigonometricOperator(): TrigonometricOperatorContext {
    let localctx: TrigonometricOperatorContext =
      new TrigonometricOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, WCPSParser.RULE_trigonometricOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 264;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 790016) !== 0) ||
            (((_la - 76) & ~0x1f) === 0 && ((1 << (_la - 76)) & 195) !== 0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public getComponentExpression(): GetComponentExpressionContext {
    let localctx: GetComponentExpressionContext =
      new GetComponentExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, WCPSParser.RULE_getComponentExpression);
    try {
      this.state = 268;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 40:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 266;
            this.coverageIdExpression();
          }
          break;
        case 26:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 267;
            this.describeCoverageExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public coverageIdExpression(): CoverageIdExpressionContext {
    let localctx: CoverageIdExpressionContext = new CoverageIdExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 44, WCPSParser.RULE_coverageIdExpression);
    try {
      localctx = new CoverageIdExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 270;
        this.match(WCPSParser.ID);
        this.state = 271;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 272;
        this.coverageVariableName();
        this.state = 273;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public describeCoverageExpression(): DescribeCoverageExpressionContext {
    let localctx: DescribeCoverageExpressionContext =
      new DescribeCoverageExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, WCPSParser.RULE_describeCoverageExpression);
    try {
      localctx = new DescribeCoverageExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 275;
        this.match(WCPSParser.DESCRIBE_COVERAGE);
        this.state = 276;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 277;
        this.coverageVariableName();
        this.state = 278;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public encodedCoverageExpression(): EncodedCoverageExpressionContext {
    let localctx: EncodedCoverageExpressionContext =
      new EncodedCoverageExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, WCPSParser.RULE_encodedCoverageExpression);
    let _la: number;
    try {
      localctx = new EncodedCoverageExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 280;
        this.match(WCPSParser.ENCODE);
        this.state = 281;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 282;
        this.coverageExpression(0);
        this.state = 283;
        this.match(WCPSParser.COMMA);
        this.state = 284;
        this.match(WCPSParser.STRING_LITERAL);
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 285;
              this.match(WCPSParser.COMMA);
              this.state = 286;
              this.match(WCPSParser.STRING_LITERAL);
            }
          }
          this.state = 291;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 292;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public decodeCoverageExpression(): DecodeCoverageExpressionContext {
    let localctx: DecodeCoverageExpressionContext =
      new DecodeCoverageExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, WCPSParser.RULE_decodeCoverageExpression);
    let _la: number;
    try {
      localctx = new DecodedCoverageExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 294;
        this.match(WCPSParser.DECODE);
        this.state = 295;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 296;
        this.match(WCPSParser.STRING_LITERAL);
        this.state = 297;
        this.match(WCPSParser.COMMA);
        this.state = 298;
        this.match(WCPSParser.STRING_LITERAL);
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 299;
              this.match(WCPSParser.COMMA);
              this.state = 300;
              this.match(WCPSParser.STRING_LITERAL);
            }
          }
          this.state = 305;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 306;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
    let localctx: CoverageExpressionContext = new CoverageExpressionContext(
      this,
      this._ctx,
      _parentState,
    );
    let _prevctx: CoverageExpressionContext = localctx;
    let _startState: number = 52;
    this.enterRecursionRule(
      localctx,
      52,
      WCPSParser.RULE_coverageExpression,
      _p,
    );
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 366;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
          case 1:
            {
              localctx = new CoverageExpressionVariableNameLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 309;
              this.coverageVariableName();
            }
            break;
          case 2:
            {
              localctx = new CoverageExpressionScalarLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 310;
              this.scalarExpression();
            }
            break;
          case 3:
            {
              localctx = new CoverageExpressionConstantLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 311;
              this.coverageConstantExpression();
            }
            break;
          case 4:
            {
              localctx = new CoverageExpressionConstructorLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 312;
              this.coverageConstructorExpression();
            }
            break;
          case 5:
            {
              localctx = new CoverageExpressionDecodeLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 313;
              this.decodeCoverageExpression();
            }
            break;
          case 6:
            {
              localctx = new CoverageExpressionTrimCoverageLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 314;
              this.match(WCPSParser.TRIM);
              this.state = 315;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 316;
              this.coverageExpression(0);
              this.state = 317;
              this.match(WCPSParser.COMMA);
              this.state = 318;
              this.dimensionIntervalList();
              this.state = 319;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 7:
            {
              localctx = new CoverageExpressionSliceLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 321;
              this.match(WCPSParser.SLICE);
              this.state = 322;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 323;
              this.coverageExpression(0);
              this.state = 324;
              this.match(WCPSParser.COMMA);
              this.state = 325;
              this.match(WCPSParser.LEFT_BRACE);
              this.state = 326;
              this.dimensionPointList();
              this.state = 327;
              this.match(WCPSParser.RIGHT_BRACE);
              this.state = 328;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 8:
            {
              localctx = new CoverageExpressionExtendLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 330;
              this.match(WCPSParser.EXTEND);
              this.state = 331;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 332;
              this.coverageExpression(0);
              this.state = 333;
              this.match(WCPSParser.COMMA);
              this.state = 334;
              this.match(WCPSParser.LEFT_BRACE);
              this.state = 335;
              this.dimensionIntervalList();
              this.state = 336;
              this.match(WCPSParser.RIGHT_BRACE);
              this.state = 337;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 9:
            {
              localctx = new CoverageExpressionUnaryArithmeticLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 339;
              this.unaryArithmeticExpression();
            }
            break;
          case 10:
            {
              localctx = new CoverageExpressionTrigonometricLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 340;
              this.trigonometricExpression();
            }
            break;
          case 11:
            {
              localctx = new CoverageExpressionExponentialLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 341;
              this.exponentialExpression();
            }
            break;
          case 12:
            {
              localctx = new CoverageExpressionUnaryBooleanLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 342;
              this.unaryBooleanExpression();
            }
            break;
          case 13:
            {
              localctx = new CoverageExpressionCastLabelContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 343;
              this.castExpression();
            }
            break;
          case 14:
            {
              localctx = new CoverageExpressionRangeConstructorLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 344;
              this.rangeConstructorExpression();
            }
            break;
          case 15:
            {
              localctx = new CoverageExpressionCrsTransformLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 345;
              this.crsTransformExpression();
            }
            break;
          case 16:
            {
              localctx = new CoverageExpressionScaleLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 346;
              this.match(WCPSParser.SCALE);
              this.state = 347;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 348;
              this.coverageExpression(0);
              this.state = 349;
              this.match(WCPSParser.COMMA);
              this.state = 350;
              this.match(WCPSParser.LEFT_BRACE);
              this.state = 351;
              this.dimensionIntervalList();
              this.state = 352;
              this.match(WCPSParser.RIGHT_BRACE);
              this.state = 357;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === 16) {
                {
                  {
                    this.state = 353;
                    this.match(WCPSParser.COMMA);
                    this.state = 354;
                    this.fieldInterpolationList();
                  }
                }
                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 360;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
          case 17:
            {
              localctx = new CoverageExpressionCoverageLabelContext(
                this,
                localctx,
              );
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 362;
              this.match(WCPSParser.LEFT_PARANTHESIS);
              this.state = 363;
              this.coverageExpression(0);
              this.state = 364;
              this.match(WCPSParser.RIGHT_PARANTHESIS);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 398;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 396;
              this._errHandler.sync(this);
              switch (
                this._interp.adaptivePredict(this._input, 18, this._ctx)
              ) {
                case 1:
                  {
                    localctx = new CoverageExpressionLogicLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 368;
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 24)',
                      );
                    }
                    this.state = 369;
                    this.booleanOperator();
                    this.state = 370;
                    this.coverageExpression(25);
                  }
                  break;
                case 2:
                  {
                    localctx = new CoverageExpressionArithmeticLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 372;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 23)',
                      );
                    }
                    this.state = 373;
                    this.coverageArithmeticOperator();
                    this.state = 374;
                    this.coverageExpression(24);
                  }
                  break;
                case 3:
                  {
                    localctx = new CoverageExpressionOverlayLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 376;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 22)',
                      );
                    }
                    this.state = 377;
                    this.match(WCPSParser.OVERLAY);
                    this.state = 378;
                    this.coverageExpression(23);
                  }
                  break;
                case 4:
                  {
                    localctx = new CoverageExpressionComparissonLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 379;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 21)',
                      );
                    }
                    this.state = 380;
                    this.numericalComparissonOperator();
                    this.state = 381;
                    this.coverageExpression(22);
                  }
                  break;
                case 5:
                  {
                    localctx = new CoverageExpressionShorthandTrimLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 383;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 15)',
                      );
                    }
                    this.state = 384;
                    this.match(WCPSParser.LEFT_BRACKET);
                    this.state = 385;
                    this.dimensionIntervalList();
                    this.state = 386;
                    this.match(WCPSParser.RIGHT_BRACKET);
                  }
                  break;
                case 6:
                  {
                    localctx = new CoverageExpressionShorthandSliceLabelContext(
                      this,
                      new CoverageExpressionContext(
                        this,
                        _parentctx,
                        _parentState,
                      ),
                    );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 388;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 13)',
                      );
                    }
                    this.state = 389;
                    this.match(WCPSParser.LEFT_BRACKET);
                    this.state = 390;
                    this.dimensionPointList();
                    this.state = 391;
                    this.match(WCPSParser.RIGHT_BRACKET);
                  }
                  break;
                case 7:
                  {
                    localctx =
                      new CoverageExpressionRangeSubsettingLabelContext(
                        this,
                        new CoverageExpressionContext(
                          this,
                          _parentctx,
                          _parentState,
                        ),
                      );
                    this.pushNewRecursionContext(
                      localctx,
                      _startState,
                      WCPSParser.RULE_coverageExpression,
                    );
                    this.state = 393;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 5)',
                      );
                    }
                    this.state = 394;
                    this.match(WCPSParser.DOT);
                    this.state = 395;
                    this.fieldName();
                  }
                  break;
              }
            }
          }
          this.state = 400;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
    let localctx: CoverageArithmeticOperatorContext =
      new CoverageArithmeticOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, WCPSParser.RULE_coverageArithmeticOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 401;
        _la = this._input.LA(1);
        if (
          !(
            _la === 28 ||
            (((_la - 56) & ~0x1f) === 0 && ((1 << (_la - 56)) & 1033) !== 0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
    let localctx: UnaryArithmeticExpressionOperatorContext =
      new UnaryArithmeticExpressionOperatorContext(this, this._ctx, this.state);
    this.enterRule(
      localctx,
      56,
      WCPSParser.RULE_unaryArithmeticExpressionOperator,
    );
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 403;
        _la = this._input.LA(1);
        if (
          !(
            _la === 4 ||
            (((_la - 39) & ~0x1f) === 0 &&
              ((1 << (_la - 39)) & 671219713) !== 0) ||
            _la === 80
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
    let localctx: UnaryArithmeticExpressionContext =
      new UnaryArithmeticExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, WCPSParser.RULE_unaryArithmeticExpression);
    try {
      localctx = new UnaryCoverageArithmeticExpressionLabelContext(
        this,
        localctx,
      );
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 405;
        this.unaryArithmeticExpressionOperator();
        this.state = 406;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 407;
        this.coverageExpression(0);
        this.state = 408;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public trigonometricExpression(): TrigonometricExpressionContext {
    let localctx: TrigonometricExpressionContext =
      new TrigonometricExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, WCPSParser.RULE_trigonometricExpression);
    try {
      localctx = new TrigonometricExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 410;
        this.trigonometricOperator();
        this.state = 411;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 412;
        this.coverageExpression(0);
        this.state = 413;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
    let localctx: ExponentialExpressionOperatorContext =
      new ExponentialExpressionOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, WCPSParser.RULE_exponentialExpressionOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 415;
        _la = this._input.LA(1);
        if (
          !(((_la - 33) & ~0x1f) === 0 && ((1 << (_la - 33)) & 81921) !== 0)
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exponentialExpression(): ExponentialExpressionContext {
    let localctx: ExponentialExpressionContext =
      new ExponentialExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, WCPSParser.RULE_exponentialExpression);
    try {
      localctx = new ExponentialExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 417;
        this.exponentialExpressionOperator();
        this.state = 418;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 419;
        this.coverageExpression(0);
        this.state = 420;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public unaryBooleanExpression(): UnaryBooleanExpressionContext {
    let localctx: UnaryBooleanExpressionContext =
      new UnaryBooleanExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, WCPSParser.RULE_unaryBooleanExpression);
    try {
      this.state = 434;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 60:
          localctx = new NotUnaryBooleanExpressionLabelContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 422;
            this.match(WCPSParser.NOT);
            this.state = 423;
            this.match(WCPSParser.LEFT_PARANTHESIS);
            this.state = 424;
            this.coverageExpression(0);
            this.state = 425;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
          break;
        case 14:
          localctx = new BitUnaryBooleanExpressionLabelContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 427;
            this.match(WCPSParser.BIT);
            this.state = 428;
            this.match(WCPSParser.LEFT_PARANTHESIS);
            this.state = 429;
            this.coverageExpression(0);
            this.state = 430;
            this.match(WCPSParser.COMMA);
            this.state = 431;
            this.numericalScalarExpression(0);
            this.state = 432;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public rangeType(): RangeTypeContext {
    let localctx: RangeTypeContext = new RangeTypeContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 68, WCPSParser.RULE_rangeType);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 436;
          this.identifier();
        }
        this.state = 440;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (((_la - 93) & ~0x1f) === 0 && ((1 << (_la - 93)) & 7) !== 0) {
          {
            {
              {
                this.state = 437;
                this.identifier();
              }
            }
          }
          this.state = 442;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public castExpression(): CastExpressionContext {
    let localctx: CastExpressionContext = new CastExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 70, WCPSParser.RULE_castExpression);
    try {
      localctx = new CastExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 443;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 444;
        this.rangeType();
        this.state = 445;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
        this.state = 446;
        this.coverageExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public fieldName(): FieldNameContext {
    let localctx: FieldNameContext = new FieldNameContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 72, WCPSParser.RULE_fieldName);
    try {
      this.state = 450;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 93:
        case 94:
        case 95:
          this.enterOuterAlt(localctx, 1);
          {
            {
              this.state = 448;
              this.identifier();
            }
          }
          break;
        case 92:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 449;
            this.match(WCPSParser.REAL_NUMBER_CONSTANT);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public rangeConstructorExpression(): RangeConstructorExpressionContext {
    let localctx: RangeConstructorExpressionContext =
      new RangeConstructorExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, WCPSParser.RULE_rangeConstructorExpression);
    let _la: number;
    try {
      localctx = new RangeConstructorExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 452;
        this.match(WCPSParser.LEFT_BRACE);
        {
          this.state = 453;
          this.fieldName();
          this.state = 454;
          this.match(WCPSParser.COLON);
          this.state = 455;
          this.coverageExpression(0);
        }
        this.state = 464;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 75) {
          {
            {
              this.state = 457;
              this.match(WCPSParser.SEMICOLON);
              this.state = 458;
              this.fieldName();
              this.state = 459;
              this.match(WCPSParser.COLON);
              this.state = 460;
              this.coverageExpression(0);
            }
          }
          this.state = 466;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 467;
        this.match(WCPSParser.RIGHT_BRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public crsTransformExpression(): CrsTransformExpressionContext {
    let localctx: CrsTransformExpressionContext =
      new CrsTransformExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, WCPSParser.RULE_crsTransformExpression);
    try {
      localctx = new CrsTransformExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 469;
        this.match(WCPSParser.CRS_TRANSFORM);
        this.state = 470;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 471;
        this.coverageExpression(0);
        this.state = 472;
        this.match(WCPSParser.COMMA);
        this.state = 473;
        this.dimensionCrsList();
        this.state = 474;
        this.match(WCPSParser.COMMA);
        this.state = 475;
        this.fieldInterpolationList();
        this.state = 476;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionPointList(): DimensionPointListContext {
    let localctx: DimensionPointListContext = new DimensionPointListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 78, WCPSParser.RULE_dimensionPointList);
    let _la: number;
    try {
      localctx = new DimensionPointListLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 478;
        this.dimensionPointElement();
        this.state = 483;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 479;
              this.match(WCPSParser.COMMA);
              this.state = 480;
              this.dimensionPointElement();
            }
          }
          this.state = 485;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionPointElement(): DimensionPointElementContext {
    let localctx: DimensionPointElementContext =
      new DimensionPointElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, WCPSParser.RULE_dimensionPointElement);
    let _la: number;
    try {
      localctx = new DimensionPointElementLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 486;
        this.axisName();
        this.state = 489;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 15) {
          {
            this.state = 487;
            this.match(WCPSParser.COLON);
            this.state = 488;
            this.crsName();
          }
        }

        this.state = 491;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 492;
        this.coverageExpression(0);
        this.state = 493;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionIntervalList(): DimensionIntervalListContext {
    let localctx: DimensionIntervalListContext =
      new DimensionIntervalListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, WCPSParser.RULE_dimensionIntervalList);
    let _la: number;
    try {
      localctx = new DimensionIntervalListLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 495;
        this.dimensionIntervalElement();
        this.state = 500;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 496;
              this.match(WCPSParser.COMMA);
              this.state = 497;
              this.dimensionIntervalElement();
            }
          }
          this.state = 502;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionIntervalElement(): DimensionIntervalElementContext {
    let localctx: DimensionIntervalElementContext =
      new DimensionIntervalElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, WCPSParser.RULE_dimensionIntervalElement);
    let _la: number;
    try {
      this.state = 523;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
        case 1:
          localctx = new TrimDimensionIntervalElementLabelContext(
            this,
            localctx,
          );
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 503;
            this.axisName();
            this.state = 506;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 15) {
              {
                this.state = 504;
                this.match(WCPSParser.COLON);
                this.state = 505;
                this.crsName();
              }
            }

            this.state = 508;
            this.match(WCPSParser.LEFT_PARANTHESIS);
            this.state = 509;
            this.coverageExpression(0);
            this.state = 510;
            this.match(WCPSParser.COLON);
            this.state = 511;
            this.coverageExpression(0);
            this.state = 512;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
          break;
        case 2:
          localctx = new SliceDimensionIntervalElementLabelContext(
            this,
            localctx,
          );
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 514;
            this.axisName();
            this.state = 517;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 15) {
              {
                this.state = 515;
                this.match(WCPSParser.COLON);
                this.state = 516;
                this.crsName();
              }
            }

            this.state = 519;
            this.match(WCPSParser.LEFT_PARANTHESIS);
            this.state = 520;
            this.coverageExpression(0);
            this.state = 521;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionCrsList(): DimensionCrsListContext {
    let localctx: DimensionCrsListContext = new DimensionCrsListContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 86, WCPSParser.RULE_dimensionCrsList);
    let _la: number;
    try {
      localctx = new DimensionCrsListLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 525;
        this.match(WCPSParser.LEFT_BRACE);
        this.state = 526;
        this.dimensionCrsElement();
        this.state = 531;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 527;
              this.match(WCPSParser.COMMA);
              this.state = 528;
              this.dimensionCrsElement();
            }
          }
          this.state = 533;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 534;
        this.match(WCPSParser.RIGHT_BRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public dimensionCrsElement(): DimensionCrsElementContext {
    let localctx: DimensionCrsElementContext = new DimensionCrsElementContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 88, WCPSParser.RULE_dimensionCrsElement);
    try {
      localctx = new DimensionCrsElementLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 536;
        this.axisName();
        this.state = 537;
        this.match(WCPSParser.COLON);
        this.state = 538;
        this.crsName();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public fieldInterpolationList(): FieldInterpolationListContext {
    let localctx: FieldInterpolationListContext =
      new FieldInterpolationListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, WCPSParser.RULE_fieldInterpolationList);
    let _la: number;
    try {
      localctx = new FieldInterpolationListLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 540;
        this.match(WCPSParser.LEFT_BRACE);
        this.state = 541;
        this.fieldInterpolationListElement();
        this.state = 546;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 542;
              this.match(WCPSParser.COMMA);
              this.state = 543;
              this.fieldInterpolationListElement();
            }
          }
          this.state = 548;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 549;
        this.match(WCPSParser.RIGHT_BRACE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public fieldInterpolationListElement(): FieldInterpolationListElementContext {
    let localctx: FieldInterpolationListElementContext =
      new FieldInterpolationListElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, WCPSParser.RULE_fieldInterpolationListElement);
    try {
      localctx = new FieldInterpolationListElementLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 551;
        this.fieldName();
        this.state = 552;
        this.interpolationMethod();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public interpolationMethod(): InterpolationMethodContext {
    let localctx: InterpolationMethodContext = new InterpolationMethodContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 94, WCPSParser.RULE_interpolationMethod);
    try {
      localctx = new InterpolationMethodLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 554;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 555;
        this.interpolationType();
        this.state = 556;
        this.match(WCPSParser.COLON);
        this.state = 557;
        this.nullResistance();
        this.state = 558;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public nullResistance(): NullResistanceContext {
    let localctx: NullResistanceContext = new NullResistanceContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 96, WCPSParser.RULE_nullResistance);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 560;
        _la = this._input.LA(1);
        if (!(_la === 35 || _la === 85)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public interpolationType(): InterpolationTypeContext {
    let localctx: InterpolationTypeContext = new InterpolationTypeContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 98, WCPSParser.RULE_interpolationType);
    try {
      localctx = new InterpolationTypeLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 562;
        this.match(WCPSParser.STRING_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public coverageConstructorExpression(): CoverageConstructorExpressionContext {
    let localctx: CoverageConstructorExpressionContext =
      new CoverageConstructorExpressionContext(this, this._ctx, this.state);
    this.enterRule(
      localctx,
      100,
      WCPSParser.RULE_coverageConstructorExpression,
    );
    let _la: number;
    try {
      localctx = new CoverageConstructorExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 564;
        this.match(WCPSParser.COVERAGE);
        {
          this.state = 565;
          this.identifier();
        }
        this.state = 566;
        this.match(WCPSParser.OVER);
        this.state = 567;
        this.axisIterator();
        this.state = 572;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 568;
              this.match(WCPSParser.COMMA);
              this.state = 569;
              this.axisIterator();
            }
          }
          this.state = 574;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 575;
        this.match(WCPSParser.VALUES);
        this.state = 576;
        this.coverageExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public axisIterator(): AxisIteratorContext {
    let localctx: AxisIteratorContext = new AxisIteratorContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 102, WCPSParser.RULE_axisIterator);
    try {
      localctx = new AxisIteratorLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 578;
        this.coverageVariableName();
        this.state = 579;
        this.dimensionIntervalElement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public intervalExpression(): IntervalExpressionContext {
    let localctx: IntervalExpressionContext = new IntervalExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 104, WCPSParser.RULE_intervalExpression);
    try {
      this.state = 592;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 4:
        case 5:
        case 6:
        case 9:
        case 10:
        case 11:
        case 13:
        case 17:
        case 18:
        case 19:
        case 20:
        case 26:
        case 35:
        case 39:
        case 40:
        case 45:
        case 53:
        case 55:
        case 56:
        case 59:
        case 60:
        case 66:
        case 68:
        case 69:
        case 76:
        case 77:
        case 79:
        case 80:
        case 82:
        case 83:
        case 85:
        case 92:
        case 97:
          localctx = new IntervalExpressionLabelContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 581;
            this.scalarExpression();
            this.state = 582;
            this.match(WCPSParser.COLON);
            this.state = 583;
            this.scalarExpression();
          }
          break;
        case 41:
          localctx = new CRSIntervalExpressionLabelContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 585;
            this.match(WCPSParser.IMGCRSDOMAIN);
            this.state = 586;
            this.match(WCPSParser.LEFT_PARANTHESIS);
            this.state = 587;
            this.coverageVariableName();
            this.state = 588;
            this.match(WCPSParser.COMMA);
            this.state = 589;
            this.axisName();
            this.state = 590;
            this.match(WCPSParser.RIGHT_PARANTHESIS);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public coverageConstantExpression(): CoverageConstantExpressionContext {
    let localctx: CoverageConstantExpressionContext =
      new CoverageConstantExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, WCPSParser.RULE_coverageConstantExpression);
    let _la: number;
    try {
      localctx = new CoverageConstantExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 594;
        this.match(WCPSParser.COVERAGE);
        {
          this.state = 595;
          this.identifier();
        }
        this.state = 596;
        this.match(WCPSParser.OVER);
        this.state = 597;
        this.axisIterator();
        this.state = 602;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 598;
              this.match(WCPSParser.COMMA);
              this.state = 599;
              this.axisIterator();
            }
          }
          this.state = 604;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 605;
        this.match(WCPSParser.VALUE);
        this.state = 606;
        this.match(WCPSParser.LIST);
        this.state = 607;
        this.match(WCPSParser.LOWER_THAN);
        this.state = 608;
        this.constant();
        this.state = 613;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 75) {
          {
            {
              this.state = 609;
              this.match(WCPSParser.SEMICOLON);
              this.state = 610;
              this.constant();
            }
          }
          this.state = 615;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 616;
        this.match(WCPSParser.GREATER_THAN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public axisSpec(): AxisSpecContext {
    let localctx: AxisSpecContext = new AxisSpecContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 108, WCPSParser.RULE_axisSpec);
    try {
      localctx = new AxisSpecLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 618;
        this.dimensionIntervalElement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public condenseExpression(): CondenseExpressionContext {
    let localctx: CondenseExpressionContext = new CondenseExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 110, WCPSParser.RULE_condenseExpression);
    try {
      this.state = 622;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 5:
        case 6:
        case 13:
        case 20:
        case 53:
        case 55:
        case 79:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 620;
            this.reduceExpression();
          }
          break;
        case 17:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 621;
            this.generalCondenseExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
    let localctx: ReduceBooleanExpressionOperatorContext =
      new ReduceBooleanExpressionOperatorContext(this, this._ctx, this.state);
    this.enterRule(
      localctx,
      112,
      WCPSParser.RULE_reduceBooleanExpressionOperator,
    );
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 624;
        _la = this._input.LA(1);
        if (!(_la === 6 || _la === 79)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
    let localctx: ReduceNumericalExpressionOperatorContext =
      new ReduceNumericalExpressionOperatorContext(this, this._ctx, this.state);
    this.enterRule(
      localctx,
      114,
      WCPSParser.RULE_reduceNumericalExpressionOperator,
    );
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 626;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 && ((1 << _la) & 1056800) !== 0) ||
            _la === 53 ||
            _la === 55
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public reduceBooleanExpression(): ReduceBooleanExpressionContext {
    let localctx: ReduceBooleanExpressionContext =
      new ReduceBooleanExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, WCPSParser.RULE_reduceBooleanExpression);
    try {
      localctx = new ReduceBooleanExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 628;
        this.reduceBooleanExpressionOperator();
        this.state = 629;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 630;
        this.coverageExpression(0);
        this.state = 631;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public reduceNumericalExpression(): ReduceNumericalExpressionContext {
    let localctx: ReduceNumericalExpressionContext =
      new ReduceNumericalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, WCPSParser.RULE_reduceNumericalExpression);
    try {
      localctx = new ReduceNumericalExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 633;
        this.reduceNumericalExpressionOperator();
        this.state = 634;
        this.match(WCPSParser.LEFT_PARANTHESIS);
        this.state = 635;
        this.coverageExpression(0);
        this.state = 636;
        this.match(WCPSParser.RIGHT_PARANTHESIS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public reduceExpression(): ReduceExpressionContext {
    let localctx: ReduceExpressionContext = new ReduceExpressionContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 120, WCPSParser.RULE_reduceExpression);
    try {
      this.state = 640;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 6:
        case 79:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 638;
            this.reduceBooleanExpression();
          }
          break;
        case 5:
        case 13:
        case 20:
        case 53:
        case 55:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 639;
            this.reduceNumericalExpression();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public condenseExpressionOperator(): CondenseExpressionOperatorContext {
    let localctx: CondenseExpressionOperatorContext =
      new CondenseExpressionOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, WCPSParser.RULE_condenseExpressionOperator);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 642;
        _la = this._input.LA(1);
        if (
          !(
            _la === 7 ||
            (((_la - 53) & ~0x1f) === 0 && ((1 << (_la - 53)) & 9285) !== 0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public generalCondenseExpression(): GeneralCondenseExpressionContext {
    let localctx: GeneralCondenseExpressionContext =
      new GeneralCondenseExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, WCPSParser.RULE_generalCondenseExpression);
    let _la: number;
    try {
      localctx = new GeneralCondenseExpressionLabelContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 644;
        this.match(WCPSParser.CONDENSE);
        this.state = 645;
        this.condenseExpressionOperator();
        this.state = 646;
        this.match(WCPSParser.OVER);
        this.state = 647;
        this.axisIterator();
        this.state = 652;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16) {
          {
            {
              this.state = 648;
              this.match(WCPSParser.COMMA);
              this.state = 649;
              this.axisIterator();
            }
          }
          this.state = 654;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 657;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 89) {
          {
            this.state = 655;
            this.match(WCPSParser.WHERE);
            this.state = 656;
            this.booleanScalarExpression(0);
          }
        }

        this.state = 659;
        this.match(WCPSParser.USING);
        this.state = 660;
        this.coverageExpression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public crsName(): CrsNameContext {
    let localctx: CrsNameContext = new CrsNameContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 126, WCPSParser.RULE_crsName);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 662;
        this.match(WCPSParser.STRING_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public axisName(): AxisNameContext {
    let localctx: AxisNameContext = new AxisNameContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 128, WCPSParser.RULE_axisName);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        {
          this.state = 664;
          this.identifier();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    let localctx: ConstantContext = new ConstantContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 130, WCPSParser.RULE_constant);
    try {
      this.state = 671;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 97:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 666;
            this.match(WCPSParser.STRING_LITERAL);
          }
          break;
        case 85:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 667;
            this.match(WCPSParser.TRUE);
          }
          break;
        case 35:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 668;
            this.match(WCPSParser.FALSE);
          }
          break;
        case 92:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 669;
            this.match(WCPSParser.REAL_NUMBER_CONSTANT);
          }
          break;
        case 45:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 670;
            this.complexNumberConstant();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let localctx: IdentifierContext = new IdentifierContext(
      this,
      this._ctx,
      this.state,
    );
    this.enterRule(localctx, 132, WCPSParser.RULE_identifier);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 673;
        _la = this._input.LA(1);
        if (!(((_la - 93) & ~0x1f) === 0 && ((1 << (_la - 93)) & 7) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public sempred(
    localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 8:
        return this.booleanScalarExpression_sempred(
          localctx as BooleanScalarExpressionContext,
          predIndex,
        );
      case 16:
        return this.numericalScalarExpression_sempred(
          localctx as NumericalScalarExpressionContext,
          predIndex,
        );
      case 26:
        return this.coverageExpression_sempred(
          localctx as CoverageExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private booleanScalarExpression_sempred(
    localctx: BooleanScalarExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4);
    }
    return true;
  }
  private numericalScalarExpression_sempred(
    localctx: NumericalScalarExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 4);
    }
    return true;
  }
  private coverageExpression_sempred(
    localctx: CoverageExpressionContext,
    predIndex: number,
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 24);
      case 3:
        return this.precpred(this._ctx, 23);
      case 4:
        return this.precpred(this._ctx, 22);
      case 5:
        return this.precpred(this._ctx, 21);
      case 6:
        return this.precpred(this._ctx, 15);
      case 7:
        return this.precpred(this._ctx, 13);
      case 8:
        return this.precpred(this._ctx, 5);
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 100, 676, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4,
    2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2,
    11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2,
    22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
    27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7,
    38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2,
    44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7,
    49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2,
    55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
    60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2,
    66, 7, 66, 1, 0, 1, 0, 3, 0, 137, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    5, 1, 145, 8, 1, 10, 1, 12, 1, 148, 9, 1, 1, 2, 1, 2, 1, 2, 3, 2, 153, 8, 2,
    1, 2, 1, 2, 1, 2, 5, 2, 158, 8, 2, 10, 2, 12, 2, 161, 9, 2, 1, 2, 3, 2, 164,
    8, 2, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 3, 6, 176,
    8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 183, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 8, 3, 8, 190, 8, 8, 1, 8, 1, 8, 3, 8, 194, 8, 8, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 205, 8, 8, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8,
    211, 8, 8, 10, 8, 12, 8, 214, 9, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11,
    1, 12, 1, 12, 1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    3, 16, 244, 8, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 250, 8, 16, 10, 16,
    12, 16, 253, 9, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18,
    1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 3, 21, 269, 8, 21, 1, 22, 1, 22,
    1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24,
    1, 24, 1, 24, 1, 24, 1, 24, 5, 24, 288, 8, 24, 10, 24, 12, 24, 291, 9, 24,
    1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 5, 25, 302,
    8, 25, 10, 25, 12, 25, 305, 9, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26,
    356, 8, 26, 10, 26, 12, 26, 359, 9, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 3, 26, 367, 8, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26,
    397, 8, 26, 10, 26, 12, 26, 400, 9, 26, 1, 27, 1, 27, 1, 28, 1, 28, 1, 29,
    1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31,
    1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33,
    1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 435, 8, 33, 1, 34, 1, 34,
    5, 34, 439, 8, 34, 10, 34, 12, 34, 442, 9, 34, 1, 35, 1, 35, 1, 35, 1, 35,
    1, 35, 1, 36, 1, 36, 3, 36, 451, 8, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37,
    1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 5, 37, 463, 8, 37, 10, 37, 12, 37, 466,
    9, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38,
    1, 38, 1, 39, 1, 39, 1, 39, 5, 39, 482, 8, 39, 10, 39, 12, 39, 485, 9, 39,
    1, 40, 1, 40, 1, 40, 3, 40, 490, 8, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 41,
    1, 41, 1, 41, 5, 41, 499, 8, 41, 10, 41, 12, 41, 502, 9, 41, 1, 42, 1, 42,
    1, 42, 3, 42, 507, 8, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42,
    1, 42, 1, 42, 3, 42, 518, 8, 42, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 524, 8,
    42, 1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 530, 8, 43, 10, 43, 12, 43, 533, 9,
    43, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 1, 45, 5,
    45, 545, 8, 45, 10, 45, 12, 45, 548, 9, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1,
    46, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 49, 1, 49, 1,
    50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 5, 50, 571, 8, 50, 10, 50, 12, 50,
    574, 9, 50, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52,
    1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 593, 8, 52,
    1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 5, 53, 601, 8, 53, 10, 53, 12, 53,
    604, 9, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 5, 53, 612, 8, 53, 10,
    53, 12, 53, 615, 9, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 55, 1, 55, 3, 55,
    623, 8, 55, 1, 56, 1, 56, 1, 57, 1, 57, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58,
    1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 3, 60, 641, 8, 60, 1, 61,
    1, 61, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 5, 62, 651, 8, 62, 10, 62,
    12, 62, 654, 9, 62, 1, 62, 1, 62, 3, 62, 658, 8, 62, 1, 62, 1, 62, 1, 62, 1,
    63, 1, 63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65, 672, 8,
    65, 1, 66, 1, 66, 1, 66, 0, 3, 16, 32, 52, 67, 0, 2, 4, 6, 8, 10, 12, 14,
    16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
    54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90,
    92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122,
    124, 126, 128, 130, 132, 0, 13, 2, 0, 35, 35, 85, 85, 3, 0, 7, 7, 63, 63,
    91, 91, 6, 0, 32, 32, 36, 36, 38, 38, 50, 50, 52, 52, 61, 61, 2, 0, 32, 32,
    61, 61, 4, 0, 28, 28, 56, 56, 59, 59, 66, 66, 6, 0, 4, 4, 39, 39, 56, 56,
    66, 66, 68, 69, 80, 80, 4, 0, 9, 11, 18, 19, 76, 77, 82, 83, 6, 0, 4, 4, 39,
    39, 56, 56, 66, 66, 68, 68, 80, 80, 3, 0, 33, 33, 47, 47, 49, 49, 2, 0, 6,
    6, 79, 79, 5, 0, 5, 5, 13, 13, 20, 20, 53, 53, 55, 55, 6, 0, 7, 7, 53, 53,
    55, 55, 59, 59, 63, 63, 66, 66, 1, 0, 93, 95, 682, 0, 134, 1, 0, 0, 0, 2,
    140, 1, 0, 0, 0, 4, 149, 1, 0, 0, 0, 6, 165, 1, 0, 0, 0, 8, 168, 1, 0, 0, 0,
    10, 171, 1, 0, 0, 0, 12, 175, 1, 0, 0, 0, 14, 182, 1, 0, 0, 0, 16, 204, 1,
    0, 0, 0, 18, 215, 1, 0, 0, 0, 20, 217, 1, 0, 0, 0, 22, 219, 1, 0, 0, 0, 24,
    221, 1, 0, 0, 0, 26, 223, 1, 0, 0, 0, 28, 225, 1, 0, 0, 0, 30, 227, 1, 0, 0,
    0, 32, 243, 1, 0, 0, 0, 34, 254, 1, 0, 0, 0, 36, 260, 1, 0, 0, 0, 38, 262,
    1, 0, 0, 0, 40, 264, 1, 0, 0, 0, 42, 268, 1, 0, 0, 0, 44, 270, 1, 0, 0, 0,
    46, 275, 1, 0, 0, 0, 48, 280, 1, 0, 0, 0, 50, 294, 1, 0, 0, 0, 52, 366, 1,
    0, 0, 0, 54, 401, 1, 0, 0, 0, 56, 403, 1, 0, 0, 0, 58, 405, 1, 0, 0, 0, 60,
    410, 1, 0, 0, 0, 62, 415, 1, 0, 0, 0, 64, 417, 1, 0, 0, 0, 66, 434, 1, 0, 0,
    0, 68, 436, 1, 0, 0, 0, 70, 443, 1, 0, 0, 0, 72, 450, 1, 0, 0, 0, 74, 452,
    1, 0, 0, 0, 76, 469, 1, 0, 0, 0, 78, 478, 1, 0, 0, 0, 80, 486, 1, 0, 0, 0,
    82, 495, 1, 0, 0, 0, 84, 523, 1, 0, 0, 0, 86, 525, 1, 0, 0, 0, 88, 536, 1,
    0, 0, 0, 90, 540, 1, 0, 0, 0, 92, 551, 1, 0, 0, 0, 94, 554, 1, 0, 0, 0, 96,
    560, 1, 0, 0, 0, 98, 562, 1, 0, 0, 0, 100, 564, 1, 0, 0, 0, 102, 578, 1, 0,
    0, 0, 104, 592, 1, 0, 0, 0, 106, 594, 1, 0, 0, 0, 108, 618, 1, 0, 0, 0, 110,
    622, 1, 0, 0, 0, 112, 624, 1, 0, 0, 0, 114, 626, 1, 0, 0, 0, 116, 628, 1, 0,
    0, 0, 118, 633, 1, 0, 0, 0, 120, 640, 1, 0, 0, 0, 122, 642, 1, 0, 0, 0, 124,
    644, 1, 0, 0, 0, 126, 662, 1, 0, 0, 0, 128, 664, 1, 0, 0, 0, 130, 671, 1, 0,
    0, 0, 132, 673, 1, 0, 0, 0, 134, 136, 3, 2, 1, 0, 135, 137, 3, 6, 3, 0, 136,
    135, 1, 0, 0, 0, 136, 137, 1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 139, 3, 8,
    4, 0, 139, 1, 1, 0, 0, 0, 140, 141, 5, 3, 0, 0, 141, 146, 3, 4, 2, 0, 142,
    143, 5, 16, 0, 0, 143, 145, 3, 4, 2, 0, 144, 142, 1, 0, 0, 0, 145, 148, 1,
    0, 0, 0, 146, 144, 1, 0, 0, 0, 146, 147, 1, 0, 0, 0, 147, 3, 1, 0, 0, 0,
    148, 146, 1, 0, 0, 0, 149, 150, 3, 10, 5, 0, 150, 152, 5, 42, 0, 0, 151,
    153, 5, 45, 0, 0, 152, 151, 1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 154, 1,
    0, 0, 0, 154, 159, 3, 132, 66, 0, 155, 156, 5, 16, 0, 0, 156, 158, 3, 132,
    66, 0, 157, 155, 1, 0, 0, 0, 158, 161, 1, 0, 0, 0, 159, 157, 1, 0, 0, 0,
    159, 160, 1, 0, 0, 0, 160, 163, 1, 0, 0, 0, 161, 159, 1, 0, 0, 0, 162, 164,
    5, 73, 0, 0, 163, 162, 1, 0, 0, 0, 163, 164, 1, 0, 0, 0, 164, 5, 1, 0, 0, 0,
    165, 166, 5, 89, 0, 0, 166, 167, 3, 16, 8, 0, 167, 7, 1, 0, 0, 0, 168, 169,
    5, 70, 0, 0, 169, 170, 3, 12, 6, 0, 170, 9, 1, 0, 0, 0, 171, 172, 3, 132,
    66, 0, 172, 11, 1, 0, 0, 0, 173, 176, 3, 14, 7, 0, 174, 176, 3, 48, 24, 0,
    175, 173, 1, 0, 0, 0, 175, 174, 1, 0, 0, 0, 176, 13, 1, 0, 0, 0, 177, 183,
    3, 16, 8, 0, 178, 183, 3, 32, 16, 0, 179, 183, 3, 28, 14, 0, 180, 183, 3,
    42, 21, 0, 181, 183, 3, 30, 15, 0, 182, 177, 1, 0, 0, 0, 182, 178, 1, 0, 0,
    0, 182, 179, 1, 0, 0, 0, 182, 180, 1, 0, 0, 0, 182, 181, 1, 0, 0, 0, 183,
    15, 1, 0, 0, 0, 184, 185, 6, 8, -1, 0, 185, 205, 3, 116, 58, 0, 186, 205, 3,
    20, 10, 0, 187, 189, 3, 18, 9, 0, 188, 190, 5, 45, 0, 0, 189, 188, 1, 0, 0,
    0, 189, 190, 1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 193, 3, 16, 8, 0, 192,
    194, 5, 73, 0, 0, 193, 192, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 205, 1,
    0, 0, 0, 195, 196, 3, 32, 16, 0, 196, 197, 3, 24, 12, 0, 197, 198, 3, 32,
    16, 0, 198, 205, 1, 0, 0, 0, 199, 205, 3, 116, 58, 0, 200, 201, 3, 28, 14,
    0, 201, 202, 3, 26, 13, 0, 202, 203, 3, 28, 14, 0, 203, 205, 1, 0, 0, 0,
    204, 184, 1, 0, 0, 0, 204, 186, 1, 0, 0, 0, 204, 187, 1, 0, 0, 0, 204, 195,
    1, 0, 0, 0, 204, 199, 1, 0, 0, 0, 204, 200, 1, 0, 0, 0, 205, 212, 1, 0, 0,
    0, 206, 207, 10, 4, 0, 0, 207, 208, 3, 22, 11, 0, 208, 209, 3, 16, 8, 5,
    209, 211, 1, 0, 0, 0, 210, 206, 1, 0, 0, 0, 211, 214, 1, 0, 0, 0, 212, 210,
    1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 17, 1, 0, 0, 0, 214, 212, 1, 0, 0, 0,
    215, 216, 5, 60, 0, 0, 216, 19, 1, 0, 0, 0, 217, 218, 7, 0, 0, 0, 218, 21,
    1, 0, 0, 0, 219, 220, 7, 1, 0, 0, 220, 23, 1, 0, 0, 0, 221, 222, 7, 2, 0, 0,
    222, 25, 1, 0, 0, 0, 223, 224, 7, 3, 0, 0, 224, 27, 1, 0, 0, 0, 225, 226, 5,
    97, 0, 0, 226, 29, 1, 0, 0, 0, 227, 228, 5, 59, 0, 0, 228, 31, 1, 0, 0, 0,
    229, 230, 6, 16, -1, 0, 230, 231, 3, 38, 19, 0, 231, 232, 5, 45, 0, 0, 232,
    233, 3, 32, 16, 0, 233, 234, 5, 73, 0, 0, 234, 244, 1, 0, 0, 0, 235, 236, 3,
    40, 20, 0, 236, 237, 5, 45, 0, 0, 237, 238, 3, 32, 16, 0, 238, 239, 5, 73,
    0, 0, 239, 244, 1, 0, 0, 0, 240, 244, 3, 110, 55, 0, 241, 244, 5, 92, 0, 0,
    242, 244, 3, 34, 17, 0, 243, 229, 1, 0, 0, 0, 243, 235, 1, 0, 0, 0, 243,
    240, 1, 0, 0, 0, 243, 241, 1, 0, 0, 0, 243, 242, 1, 0, 0, 0, 244, 251, 1, 0,
    0, 0, 245, 246, 10, 4, 0, 0, 246, 247, 3, 36, 18, 0, 247, 248, 3, 32, 16, 5,
    248, 250, 1, 0, 0, 0, 249, 245, 1, 0, 0, 0, 250, 253, 1, 0, 0, 0, 251, 249,
    1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252, 33, 1, 0, 0, 0, 253, 251, 1, 0, 0, 0,
    254, 255, 5, 45, 0, 0, 255, 256, 5, 92, 0, 0, 256, 257, 5, 16, 0, 0, 257,
    258, 5, 92, 0, 0, 258, 259, 5, 73, 0, 0, 259, 35, 1, 0, 0, 0, 260, 261, 7,
    4, 0, 0, 261, 37, 1, 0, 0, 0, 262, 263, 7, 5, 0, 0, 263, 39, 1, 0, 0, 0,
    264, 265, 7, 6, 0, 0, 265, 41, 1, 0, 0, 0, 266, 269, 3, 44, 22, 0, 267, 269,
    3, 46, 23, 0, 268, 266, 1, 0, 0, 0, 268, 267, 1, 0, 0, 0, 269, 43, 1, 0, 0,
    0, 270, 271, 5, 40, 0, 0, 271, 272, 5, 45, 0, 0, 272, 273, 3, 10, 5, 0, 273,
    274, 5, 73, 0, 0, 274, 45, 1, 0, 0, 0, 275, 276, 5, 26, 0, 0, 276, 277, 5,
    45, 0, 0, 277, 278, 3, 10, 5, 0, 278, 279, 5, 73, 0, 0, 279, 47, 1, 0, 0, 0,
    280, 281, 5, 31, 0, 0, 281, 282, 5, 45, 0, 0, 282, 283, 3, 52, 26, 0, 283,
    284, 5, 16, 0, 0, 284, 289, 5, 97, 0, 0, 285, 286, 5, 16, 0, 0, 286, 288, 5,
    97, 0, 0, 287, 285, 1, 0, 0, 0, 288, 291, 1, 0, 0, 0, 289, 287, 1, 0, 0, 0,
    289, 290, 1, 0, 0, 0, 290, 292, 1, 0, 0, 0, 291, 289, 1, 0, 0, 0, 292, 293,
    5, 73, 0, 0, 293, 49, 1, 0, 0, 0, 294, 295, 5, 24, 0, 0, 295, 296, 5, 45, 0,
    0, 296, 297, 5, 97, 0, 0, 297, 298, 5, 16, 0, 0, 298, 303, 5, 97, 0, 0, 299,
    300, 5, 16, 0, 0, 300, 302, 5, 97, 0, 0, 301, 299, 1, 0, 0, 0, 302, 305, 1,
    0, 0, 0, 303, 301, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 306, 1, 0, 0, 0,
    305, 303, 1, 0, 0, 0, 306, 307, 5, 73, 0, 0, 307, 51, 1, 0, 0, 0, 308, 309,
    6, 26, -1, 0, 309, 367, 3, 10, 5, 0, 310, 367, 3, 14, 7, 0, 311, 367, 3,
    106, 53, 0, 312, 367, 3, 100, 50, 0, 313, 367, 3, 50, 25, 0, 314, 315, 5,
    84, 0, 0, 315, 316, 5, 45, 0, 0, 316, 317, 3, 52, 26, 0, 317, 318, 5, 16, 0,
    0, 318, 319, 3, 82, 41, 0, 319, 320, 5, 73, 0, 0, 320, 367, 1, 0, 0, 0, 321,
    322, 5, 78, 0, 0, 322, 323, 5, 45, 0, 0, 323, 324, 3, 52, 26, 0, 324, 325,
    5, 16, 0, 0, 325, 326, 5, 43, 0, 0, 326, 327, 3, 78, 39, 0, 327, 328, 5, 71,
    0, 0, 328, 329, 5, 73, 0, 0, 329, 367, 1, 0, 0, 0, 330, 331, 5, 34, 0, 0,
    331, 332, 5, 45, 0, 0, 332, 333, 3, 52, 26, 0, 333, 334, 5, 16, 0, 0, 334,
    335, 5, 43, 0, 0, 335, 336, 3, 82, 41, 0, 336, 337, 5, 71, 0, 0, 337, 338,
    5, 73, 0, 0, 338, 367, 1, 0, 0, 0, 339, 367, 3, 58, 29, 0, 340, 367, 3, 60,
    30, 0, 341, 367, 3, 64, 32, 0, 342, 367, 3, 66, 33, 0, 343, 367, 3, 70, 35,
    0, 344, 367, 3, 74, 37, 0, 345, 367, 3, 76, 38, 0, 346, 347, 5, 74, 0, 0,
    347, 348, 5, 45, 0, 0, 348, 349, 3, 52, 26, 0, 349, 350, 5, 16, 0, 0, 350,
    351, 5, 43, 0, 0, 351, 352, 3, 82, 41, 0, 352, 357, 5, 71, 0, 0, 353, 354,
    5, 16, 0, 0, 354, 356, 3, 90, 45, 0, 355, 353, 1, 0, 0, 0, 356, 359, 1, 0,
    0, 0, 357, 355, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 360, 1, 0, 0, 0, 359,
    357, 1, 0, 0, 0, 360, 361, 5, 73, 0, 0, 361, 367, 1, 0, 0, 0, 362, 363, 5,
    45, 0, 0, 363, 364, 3, 52, 26, 0, 364, 365, 5, 73, 0, 0, 365, 367, 1, 0, 0,
    0, 366, 308, 1, 0, 0, 0, 366, 310, 1, 0, 0, 0, 366, 311, 1, 0, 0, 0, 366,
    312, 1, 0, 0, 0, 366, 313, 1, 0, 0, 0, 366, 314, 1, 0, 0, 0, 366, 321, 1, 0,
    0, 0, 366, 330, 1, 0, 0, 0, 366, 339, 1, 0, 0, 0, 366, 340, 1, 0, 0, 0, 366,
    341, 1, 0, 0, 0, 366, 342, 1, 0, 0, 0, 366, 343, 1, 0, 0, 0, 366, 344, 1, 0,
    0, 0, 366, 345, 1, 0, 0, 0, 366, 346, 1, 0, 0, 0, 366, 362, 1, 0, 0, 0, 367,
    398, 1, 0, 0, 0, 368, 369, 10, 24, 0, 0, 369, 370, 3, 22, 11, 0, 370, 371,
    3, 52, 26, 25, 371, 397, 1, 0, 0, 0, 372, 373, 10, 23, 0, 0, 373, 374, 3,
    54, 27, 0, 374, 375, 3, 52, 26, 24, 375, 397, 1, 0, 0, 0, 376, 377, 10, 22,
    0, 0, 377, 378, 5, 65, 0, 0, 378, 397, 3, 52, 26, 23, 379, 380, 10, 21, 0,
    0, 380, 381, 3, 24, 12, 0, 381, 382, 3, 52, 26, 22, 382, 397, 1, 0, 0, 0,
    383, 384, 10, 15, 0, 0, 384, 385, 5, 44, 0, 0, 385, 386, 3, 82, 41, 0, 386,
    387, 5, 72, 0, 0, 387, 397, 1, 0, 0, 0, 388, 389, 10, 13, 0, 0, 389, 390, 5,
    44, 0, 0, 390, 391, 3, 78, 39, 0, 391, 392, 5, 72, 0, 0, 392, 397, 1, 0, 0,
    0, 393, 394, 10, 5, 0, 0, 394, 395, 5, 29, 0, 0, 395, 397, 3, 72, 36, 0,
    396, 368, 1, 0, 0, 0, 396, 372, 1, 0, 0, 0, 396, 376, 1, 0, 0, 0, 396, 379,
    1, 0, 0, 0, 396, 383, 1, 0, 0, 0, 396, 388, 1, 0, 0, 0, 396, 393, 1, 0, 0,
    0, 397, 400, 1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 398, 399, 1, 0, 0, 0, 399,
    53, 1, 0, 0, 0, 400, 398, 1, 0, 0, 0, 401, 402, 7, 4, 0, 0, 402, 55, 1, 0,
    0, 0, 403, 404, 7, 7, 0, 0, 404, 57, 1, 0, 0, 0, 405, 406, 3, 56, 28, 0,
    406, 407, 5, 45, 0, 0, 407, 408, 3, 52, 26, 0, 408, 409, 5, 73, 0, 0, 409,
    59, 1, 0, 0, 0, 410, 411, 3, 40, 20, 0, 411, 412, 5, 45, 0, 0, 412, 413, 3,
    52, 26, 0, 413, 414, 5, 73, 0, 0, 414, 61, 1, 0, 0, 0, 415, 416, 7, 8, 0, 0,
    416, 63, 1, 0, 0, 0, 417, 418, 3, 62, 31, 0, 418, 419, 5, 45, 0, 0, 419,
    420, 3, 52, 26, 0, 420, 421, 5, 73, 0, 0, 421, 65, 1, 0, 0, 0, 422, 423, 5,
    60, 0, 0, 423, 424, 5, 45, 0, 0, 424, 425, 3, 52, 26, 0, 425, 426, 5, 73, 0,
    0, 426, 435, 1, 0, 0, 0, 427, 428, 5, 14, 0, 0, 428, 429, 5, 45, 0, 0, 429,
    430, 3, 52, 26, 0, 430, 431, 5, 16, 0, 0, 431, 432, 3, 32, 16, 0, 432, 433,
    5, 73, 0, 0, 433, 435, 1, 0, 0, 0, 434, 422, 1, 0, 0, 0, 434, 427, 1, 0, 0,
    0, 435, 67, 1, 0, 0, 0, 436, 440, 3, 132, 66, 0, 437, 439, 3, 132, 66, 0,
    438, 437, 1, 0, 0, 0, 439, 442, 1, 0, 0, 0, 440, 438, 1, 0, 0, 0, 440, 441,
    1, 0, 0, 0, 441, 69, 1, 0, 0, 0, 442, 440, 1, 0, 0, 0, 443, 444, 5, 45, 0,
    0, 444, 445, 3, 68, 34, 0, 445, 446, 5, 73, 0, 0, 446, 447, 3, 52, 26, 0,
    447, 71, 1, 0, 0, 0, 448, 451, 3, 132, 66, 0, 449, 451, 5, 92, 0, 0, 450,
    448, 1, 0, 0, 0, 450, 449, 1, 0, 0, 0, 451, 73, 1, 0, 0, 0, 452, 453, 5, 43,
    0, 0, 453, 454, 3, 72, 36, 0, 454, 455, 5, 15, 0, 0, 455, 456, 3, 52, 26, 0,
    456, 464, 1, 0, 0, 0, 457, 458, 5, 75, 0, 0, 458, 459, 3, 72, 36, 0, 459,
    460, 5, 15, 0, 0, 460, 461, 3, 52, 26, 0, 461, 463, 1, 0, 0, 0, 462, 457, 1,
    0, 0, 0, 463, 466, 1, 0, 0, 0, 464, 462, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0,
    465, 467, 1, 0, 0, 0, 466, 464, 1, 0, 0, 0, 467, 468, 5, 71, 0, 0, 468, 75,
    1, 0, 0, 0, 469, 470, 5, 23, 0, 0, 470, 471, 5, 45, 0, 0, 471, 472, 3, 52,
    26, 0, 472, 473, 5, 16, 0, 0, 473, 474, 3, 86, 43, 0, 474, 475, 5, 16, 0, 0,
    475, 476, 3, 90, 45, 0, 476, 477, 5, 73, 0, 0, 477, 77, 1, 0, 0, 0, 478,
    483, 3, 80, 40, 0, 479, 480, 5, 16, 0, 0, 480, 482, 3, 80, 40, 0, 481, 479,
    1, 0, 0, 0, 482, 485, 1, 0, 0, 0, 483, 481, 1, 0, 0, 0, 483, 484, 1, 0, 0,
    0, 484, 79, 1, 0, 0, 0, 485, 483, 1, 0, 0, 0, 486, 489, 3, 128, 64, 0, 487,
    488, 5, 15, 0, 0, 488, 490, 3, 126, 63, 0, 489, 487, 1, 0, 0, 0, 489, 490,
    1, 0, 0, 0, 490, 491, 1, 0, 0, 0, 491, 492, 5, 45, 0, 0, 492, 493, 3, 52,
    26, 0, 493, 494, 5, 73, 0, 0, 494, 81, 1, 0, 0, 0, 495, 500, 3, 84, 42, 0,
    496, 497, 5, 16, 0, 0, 497, 499, 3, 84, 42, 0, 498, 496, 1, 0, 0, 0, 499,
    502, 1, 0, 0, 0, 500, 498, 1, 0, 0, 0, 500, 501, 1, 0, 0, 0, 501, 83, 1, 0,
    0, 0, 502, 500, 1, 0, 0, 0, 503, 506, 3, 128, 64, 0, 504, 505, 5, 15, 0, 0,
    505, 507, 3, 126, 63, 0, 506, 504, 1, 0, 0, 0, 506, 507, 1, 0, 0, 0, 507,
    508, 1, 0, 0, 0, 508, 509, 5, 45, 0, 0, 509, 510, 3, 52, 26, 0, 510, 511, 5,
    15, 0, 0, 511, 512, 3, 52, 26, 0, 512, 513, 5, 73, 0, 0, 513, 524, 1, 0, 0,
    0, 514, 517, 3, 128, 64, 0, 515, 516, 5, 15, 0, 0, 516, 518, 3, 126, 63, 0,
    517, 515, 1, 0, 0, 0, 517, 518, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519, 520,
    5, 45, 0, 0, 520, 521, 3, 52, 26, 0, 521, 522, 5, 73, 0, 0, 522, 524, 1, 0,
    0, 0, 523, 503, 1, 0, 0, 0, 523, 514, 1, 0, 0, 0, 524, 85, 1, 0, 0, 0, 525,
    526, 5, 43, 0, 0, 526, 531, 3, 88, 44, 0, 527, 528, 5, 16, 0, 0, 528, 530,
    3, 88, 44, 0, 529, 527, 1, 0, 0, 0, 530, 533, 1, 0, 0, 0, 531, 529, 1, 0, 0,
    0, 531, 532, 1, 0, 0, 0, 532, 534, 1, 0, 0, 0, 533, 531, 1, 0, 0, 0, 534,
    535, 5, 71, 0, 0, 535, 87, 1, 0, 0, 0, 536, 537, 3, 128, 64, 0, 537, 538, 5,
    15, 0, 0, 538, 539, 3, 126, 63, 0, 539, 89, 1, 0, 0, 0, 540, 541, 5, 43, 0,
    0, 541, 546, 3, 92, 46, 0, 542, 543, 5, 16, 0, 0, 543, 545, 3, 92, 46, 0,
    544, 542, 1, 0, 0, 0, 545, 548, 1, 0, 0, 0, 546, 544, 1, 0, 0, 0, 546, 547,
    1, 0, 0, 0, 547, 549, 1, 0, 0, 0, 548, 546, 1, 0, 0, 0, 549, 550, 5, 71, 0,
    0, 550, 91, 1, 0, 0, 0, 551, 552, 3, 72, 36, 0, 552, 553, 3, 94, 47, 0, 553,
    93, 1, 0, 0, 0, 554, 555, 5, 45, 0, 0, 555, 556, 3, 98, 49, 0, 556, 557, 5,
    15, 0, 0, 557, 558, 3, 96, 48, 0, 558, 559, 5, 73, 0, 0, 559, 95, 1, 0, 0,
    0, 560, 561, 7, 0, 0, 0, 561, 97, 1, 0, 0, 0, 562, 563, 5, 97, 0, 0, 563,
    99, 1, 0, 0, 0, 564, 565, 5, 21, 0, 0, 565, 566, 3, 132, 66, 0, 566, 567, 5,
    64, 0, 0, 567, 572, 3, 102, 51, 0, 568, 569, 5, 16, 0, 0, 569, 571, 3, 102,
    51, 0, 570, 568, 1, 0, 0, 0, 571, 574, 1, 0, 0, 0, 572, 570, 1, 0, 0, 0,
    572, 573, 1, 0, 0, 0, 573, 575, 1, 0, 0, 0, 574, 572, 1, 0, 0, 0, 575, 576,
    5, 88, 0, 0, 576, 577, 3, 52, 26, 0, 577, 101, 1, 0, 0, 0, 578, 579, 3, 10,
    5, 0, 579, 580, 3, 84, 42, 0, 580, 103, 1, 0, 0, 0, 581, 582, 3, 14, 7, 0,
    582, 583, 5, 15, 0, 0, 583, 584, 3, 14, 7, 0, 584, 593, 1, 0, 0, 0, 585,
    586, 5, 41, 0, 0, 586, 587, 5, 45, 0, 0, 587, 588, 3, 10, 5, 0, 588, 589, 5,
    16, 0, 0, 589, 590, 3, 128, 64, 0, 590, 591, 5, 73, 0, 0, 591, 593, 1, 0, 0,
    0, 592, 581, 1, 0, 0, 0, 592, 585, 1, 0, 0, 0, 593, 105, 1, 0, 0, 0, 594,
    595, 5, 21, 0, 0, 595, 596, 3, 132, 66, 0, 596, 597, 5, 64, 0, 0, 597, 602,
    3, 102, 51, 0, 598, 599, 5, 16, 0, 0, 599, 601, 3, 102, 51, 0, 600, 598, 1,
    0, 0, 0, 601, 604, 1, 0, 0, 0, 602, 600, 1, 0, 0, 0, 602, 603, 1, 0, 0, 0,
    603, 605, 1, 0, 0, 0, 604, 602, 1, 0, 0, 0, 605, 606, 5, 87, 0, 0, 606, 607,
    5, 48, 0, 0, 607, 608, 5, 50, 0, 0, 608, 613, 3, 130, 65, 0, 609, 610, 5,
    75, 0, 0, 610, 612, 3, 130, 65, 0, 611, 609, 1, 0, 0, 0, 612, 615, 1, 0, 0,
    0, 613, 611, 1, 0, 0, 0, 613, 614, 1, 0, 0, 0, 614, 616, 1, 0, 0, 0, 615,
    613, 1, 0, 0, 0, 616, 617, 5, 36, 0, 0, 617, 107, 1, 0, 0, 0, 618, 619, 3,
    84, 42, 0, 619, 109, 1, 0, 0, 0, 620, 623, 3, 120, 60, 0, 621, 623, 3, 124,
    62, 0, 622, 620, 1, 0, 0, 0, 622, 621, 1, 0, 0, 0, 623, 111, 1, 0, 0, 0,
    624, 625, 7, 9, 0, 0, 625, 113, 1, 0, 0, 0, 626, 627, 7, 10, 0, 0, 627, 115,
    1, 0, 0, 0, 628, 629, 3, 112, 56, 0, 629, 630, 5, 45, 0, 0, 630, 631, 3, 52,
    26, 0, 631, 632, 5, 73, 0, 0, 632, 117, 1, 0, 0, 0, 633, 634, 3, 114, 57, 0,
    634, 635, 5, 45, 0, 0, 635, 636, 3, 52, 26, 0, 636, 637, 5, 73, 0, 0, 637,
    119, 1, 0, 0, 0, 638, 641, 3, 116, 58, 0, 639, 641, 3, 118, 59, 0, 640, 638,
    1, 0, 0, 0, 640, 639, 1, 0, 0, 0, 641, 121, 1, 0, 0, 0, 642, 643, 7, 11, 0,
    0, 643, 123, 1, 0, 0, 0, 644, 645, 5, 17, 0, 0, 645, 646, 3, 122, 61, 0,
    646, 647, 5, 64, 0, 0, 647, 652, 3, 102, 51, 0, 648, 649, 5, 16, 0, 0, 649,
    651, 3, 102, 51, 0, 650, 648, 1, 0, 0, 0, 651, 654, 1, 0, 0, 0, 652, 650, 1,
    0, 0, 0, 652, 653, 1, 0, 0, 0, 653, 657, 1, 0, 0, 0, 654, 652, 1, 0, 0, 0,
    655, 656, 5, 89, 0, 0, 656, 658, 3, 16, 8, 0, 657, 655, 1, 0, 0, 0, 657,
    658, 1, 0, 0, 0, 658, 659, 1, 0, 0, 0, 659, 660, 5, 86, 0, 0, 660, 661, 3,
    52, 26, 0, 661, 125, 1, 0, 0, 0, 662, 663, 5, 97, 0, 0, 663, 127, 1, 0, 0,
    0, 664, 665, 3, 132, 66, 0, 665, 129, 1, 0, 0, 0, 666, 672, 5, 97, 0, 0,
    667, 672, 5, 85, 0, 0, 668, 672, 5, 35, 0, 0, 669, 672, 5, 92, 0, 0, 670,
    672, 3, 34, 17, 0, 671, 666, 1, 0, 0, 0, 671, 667, 1, 0, 0, 0, 671, 668, 1,
    0, 0, 0, 671, 669, 1, 0, 0, 0, 671, 670, 1, 0, 0, 0, 672, 131, 1, 0, 0, 0,
    673, 674, 7, 12, 0, 0, 674, 133, 1, 0, 0, 0, 41, 136, 146, 152, 159, 163,
    175, 182, 189, 193, 204, 212, 243, 251, 268, 289, 303, 357, 366, 396, 398,
    434, 440, 450, 464, 483, 489, 500, 506, 517, 523, 531, 546, 572, 592, 602,
    613, 622, 640, 652, 657, 671,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!WCPSParser.__ATN) {
      WCPSParser.__ATN = new ATNDeserializer().deserialize(
        WCPSParser._serializedATN,
      );
    }

    return WCPSParser.__ATN;
  }

  static DecisionsToDFA = WCPSParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index),
  );
}

export class WcpsQueryContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_wcpsQuery;
  }
  public copyFrom(ctx: WcpsQueryContext): void {
    super.copyFrom(ctx);
  }
}
export class WcpsQueryLabelContext extends WcpsQueryContext {
  constructor(parser: WCPSParser, ctx: WcpsQueryContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public forClauseList(): ForClauseListContext {
    return this.getTypedRuleContext(
      ForClauseListContext,
      0,
    ) as ForClauseListContext;
  }
  public returnClause(): ReturnClauseContext {
    return this.getTypedRuleContext(
      ReturnClauseContext,
      0,
    ) as ReturnClauseContext;
  }
  public whereClause(): WhereClauseContext {
    return this.getTypedRuleContext(
      WhereClauseContext,
      0,
    ) as WhereClauseContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterWcpsQueryLabel) {
      listener.enterWcpsQueryLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitWcpsQueryLabel) {
      listener.exitWcpsQueryLabel(this);
    }
  }
}

export class ForClauseListContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_forClauseList;
  }
  public copyFrom(ctx: ForClauseListContext): void {
    super.copyFrom(ctx);
  }
}
export class ForClauseListLabelContext extends ForClauseListContext {
  constructor(parser: WCPSParser, ctx: ForClauseListContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public FOR(): TerminalNode {
    return this.getToken(WCPSParser.FOR, 0);
  }
  public forClause_list(): ForClauseContext[] {
    return this.getTypedRuleContexts(ForClauseContext) as ForClauseContext[];
  }
  public forClause(i: number): ForClauseContext {
    return this.getTypedRuleContext(ForClauseContext, i) as ForClauseContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterForClauseListLabel) {
      listener.enterForClauseListLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitForClauseListLabel) {
      listener.exitForClauseListLabel(this);
    }
  }
}

export class ForClauseContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_forClause;
  }
  public copyFrom(ctx: ForClauseContext): void {
    super.copyFrom(ctx);
  }
}
export class ForClauseLabelContext extends ForClauseContext {
  constructor(parser: WCPSParser, ctx: ForClauseContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public IN(): TerminalNode {
    return this.getToken(WCPSParser.IN, 0);
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterForClauseLabel) {
      listener.enterForClauseLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitForClauseLabel) {
      listener.exitForClauseLabel(this);
    }
  }
}

export class WhereClauseContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_whereClause;
  }
  public copyFrom(ctx: WhereClauseContext): void {
    super.copyFrom(ctx);
  }
}
export class WhereClauseLabelContext extends WhereClauseContext {
  constructor(parser: WCPSParser, ctx: WhereClauseContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public WHERE(): TerminalNode {
    return this.getToken(WCPSParser.WHERE, 0);
  }
  public booleanScalarExpression(): BooleanScalarExpressionContext {
    return this.getTypedRuleContext(
      BooleanScalarExpressionContext,
      0,
    ) as BooleanScalarExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterWhereClauseLabel) {
      listener.enterWhereClauseLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitWhereClauseLabel) {
      listener.exitWhereClauseLabel(this);
    }
  }
}

export class ReturnClauseContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_returnClause;
  }
  public copyFrom(ctx: ReturnClauseContext): void {
    super.copyFrom(ctx);
  }
}
export class ReturnClauseLabelContext extends ReturnClauseContext {
  constructor(parser: WCPSParser, ctx: ReturnClauseContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public RETURN(): TerminalNode {
    return this.getToken(WCPSParser.RETURN, 0);
  }
  public processingExpression(): ProcessingExpressionContext {
    return this.getTypedRuleContext(
      ProcessingExpressionContext,
      0,
    ) as ProcessingExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReturnClauseLabel) {
      listener.enterReturnClauseLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReturnClauseLabel) {
      listener.exitReturnClauseLabel(this);
    }
  }
}

export class CoverageVariableNameContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageVariableName;
  }
  public copyFrom(ctx: CoverageVariableNameContext): void {
    super.copyFrom(ctx);
  }
}
export class CoverageVariableNameLabelContext extends CoverageVariableNameContext {
  constructor(parser: WCPSParser, ctx: CoverageVariableNameContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageVariableNameLabel) {
      listener.enterCoverageVariableNameLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageVariableNameLabel) {
      listener.exitCoverageVariableNameLabel(this);
    }
  }
}

export class ProcessingExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public scalarExpression(): ScalarExpressionContext {
    return this.getTypedRuleContext(
      ScalarExpressionContext,
      0,
    ) as ScalarExpressionContext;
  }
  public encodedCoverageExpression(): EncodedCoverageExpressionContext {
    return this.getTypedRuleContext(
      EncodedCoverageExpressionContext,
      0,
    ) as EncodedCoverageExpressionContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_processingExpression;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterProcessingExpression) {
      listener.enterProcessingExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitProcessingExpression) {
      listener.exitProcessingExpression(this);
    }
  }
}

export class ScalarExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public booleanScalarExpression(): BooleanScalarExpressionContext {
    return this.getTypedRuleContext(
      BooleanScalarExpressionContext,
      0,
    ) as BooleanScalarExpressionContext;
  }
  public numericalScalarExpression(): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      0,
    ) as NumericalScalarExpressionContext;
  }
  public stringScalarExpression(): StringScalarExpressionContext {
    return this.getTypedRuleContext(
      StringScalarExpressionContext,
      0,
    ) as StringScalarExpressionContext;
  }
  public getComponentExpression(): GetComponentExpressionContext {
    return this.getTypedRuleContext(
      GetComponentExpressionContext,
      0,
    ) as GetComponentExpressionContext;
  }
  public starExpression(): StarExpressionContext {
    return this.getTypedRuleContext(
      StarExpressionContext,
      0,
    ) as StarExpressionContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_scalarExpression;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterScalarExpression) {
      listener.enterScalarExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitScalarExpression) {
      listener.exitScalarExpression(this);
    }
  }
}

export class BooleanScalarExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_booleanScalarExpression;
  }
  public copyFrom(ctx: BooleanScalarExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class BooleanBinaryScalarLabelContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public booleanScalarExpression_list(): BooleanScalarExpressionContext[] {
    return this.getTypedRuleContexts(
      BooleanScalarExpressionContext,
    ) as BooleanScalarExpressionContext[];
  }
  public booleanScalarExpression(i: number): BooleanScalarExpressionContext {
    return this.getTypedRuleContext(
      BooleanScalarExpressionContext,
      i,
    ) as BooleanScalarExpressionContext;
  }
  public booleanOperator(): BooleanOperatorContext {
    return this.getTypedRuleContext(
      BooleanOperatorContext,
      0,
    ) as BooleanOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanBinaryScalarLabel) {
      listener.enterBooleanBinaryScalarLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanBinaryScalarLabel) {
      listener.exitBooleanBinaryScalarLabel(this);
    }
  }
}
export class BooleanReduceExpressionContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public reduceBooleanExpression(): ReduceBooleanExpressionContext {
    return this.getTypedRuleContext(
      ReduceBooleanExpressionContext,
      0,
    ) as ReduceBooleanExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanReduceExpression) {
      listener.enterBooleanReduceExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanReduceExpression) {
      listener.exitBooleanReduceExpression(this);
    }
  }
}
export class BooleanUnaryScalarLabelContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public booleanUnaryOperator(): BooleanUnaryOperatorContext {
    return this.getTypedRuleContext(
      BooleanUnaryOperatorContext,
      0,
    ) as BooleanUnaryOperatorContext;
  }
  public booleanScalarExpression(): BooleanScalarExpressionContext {
    return this.getTypedRuleContext(
      BooleanScalarExpressionContext,
      0,
    ) as BooleanScalarExpressionContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanUnaryScalarLabel) {
      listener.enterBooleanUnaryScalarLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanUnaryScalarLabel) {
      listener.exitBooleanUnaryScalarLabel(this);
    }
  }
}
export class BooleanStringComparisonScalarContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public stringScalarExpression_list(): StringScalarExpressionContext[] {
    return this.getTypedRuleContexts(
      StringScalarExpressionContext,
    ) as StringScalarExpressionContext[];
  }
  public stringScalarExpression(i: number): StringScalarExpressionContext {
    return this.getTypedRuleContext(
      StringScalarExpressionContext,
      i,
    ) as StringScalarExpressionContext;
  }
  public stringOperator(): StringOperatorContext {
    return this.getTypedRuleContext(
      StringOperatorContext,
      0,
    ) as StringOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanStringComparisonScalar) {
      listener.enterBooleanStringComparisonScalar(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanStringComparisonScalar) {
      listener.exitBooleanStringComparisonScalar(this);
    }
  }
}
export class BooleanConstantLabelContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public booleanConstant(): BooleanConstantContext {
    return this.getTypedRuleContext(
      BooleanConstantContext,
      0,
    ) as BooleanConstantContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanConstantLabel) {
      listener.enterBooleanConstantLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanConstantLabel) {
      listener.exitBooleanConstantLabel(this);
    }
  }
}
export class BooleanNumericalComparisonScalarLabelContext extends BooleanScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: BooleanScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public numericalScalarExpression_list(): NumericalScalarExpressionContext[] {
    return this.getTypedRuleContexts(
      NumericalScalarExpressionContext,
    ) as NumericalScalarExpressionContext[];
  }
  public numericalScalarExpression(
    i: number,
  ): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      i,
    ) as NumericalScalarExpressionContext;
  }
  public numericalComparissonOperator(): NumericalComparissonOperatorContext {
    return this.getTypedRuleContext(
      NumericalComparissonOperatorContext,
      0,
    ) as NumericalComparissonOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanNumericalComparisonScalarLabel) {
      listener.enterBooleanNumericalComparisonScalarLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanNumericalComparisonScalarLabel) {
      listener.exitBooleanNumericalComparisonScalarLabel(this);
    }
  }
}

export class BooleanUnaryOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public NOT(): TerminalNode {
    return this.getToken(WCPSParser.NOT, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_booleanUnaryOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanUnaryOperator) {
      listener.enterBooleanUnaryOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanUnaryOperator) {
      listener.exitBooleanUnaryOperator(this);
    }
  }
}

export class BooleanConstantContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public TRUE(): TerminalNode {
    return this.getToken(WCPSParser.TRUE, 0);
  }
  public FALSE(): TerminalNode {
    return this.getToken(WCPSParser.FALSE, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_booleanConstant;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanConstant) {
      listener.enterBooleanConstant(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanConstant) {
      listener.exitBooleanConstant(this);
    }
  }
}

export class BooleanOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public AND(): TerminalNode {
    return this.getToken(WCPSParser.AND, 0);
  }
  public XOR(): TerminalNode {
    return this.getToken(WCPSParser.XOR, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(WCPSParser.OR, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_booleanOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBooleanOperator) {
      listener.enterBooleanOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBooleanOperator) {
      listener.exitBooleanOperator(this);
    }
  }
}

export class NumericalComparissonOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public GREATER_THAN(): TerminalNode {
    return this.getToken(WCPSParser.GREATER_THAN, 0);
  }
  public GREATER_OR_EQUAL_THAN(): TerminalNode {
    return this.getToken(WCPSParser.GREATER_OR_EQUAL_THAN, 0);
  }
  public LOWER_THAN(): TerminalNode {
    return this.getToken(WCPSParser.LOWER_THAN, 0);
  }
  public LOWER_OR_EQUAL_THAN(): TerminalNode {
    return this.getToken(WCPSParser.LOWER_OR_EQUAL_THAN, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(WCPSParser.EQUAL, 0);
  }
  public NOT_EQUAL(): TerminalNode {
    return this.getToken(WCPSParser.NOT_EQUAL, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_numericalComparissonOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalComparissonOperator) {
      listener.enterNumericalComparissonOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalComparissonOperator) {
      listener.exitNumericalComparissonOperator(this);
    }
  }
}

export class StringOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EQUAL(): TerminalNode {
    return this.getToken(WCPSParser.EQUAL, 0);
  }
  public NOT_EQUAL(): TerminalNode {
    return this.getToken(WCPSParser.NOT_EQUAL, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_stringOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterStringOperator) {
      listener.enterStringOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitStringOperator) {
      listener.exitStringOperator(this);
    }
  }
}

export class StringScalarExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_stringScalarExpression;
  }
  public copyFrom(ctx: StringScalarExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class StringScalarExpressionLabelContext extends StringScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: StringScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterStringScalarExpressionLabel) {
      listener.enterStringScalarExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitStringScalarExpressionLabel) {
      listener.exitStringScalarExpressionLabel(this);
    }
  }
}

export class StarExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_starExpression;
  }
  public copyFrom(ctx: StarExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class StarExpressionLabelContext extends StarExpressionContext {
  constructor(parser: WCPSParser, ctx: StarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public MULTIPLICATION(): TerminalNode {
    return this.getToken(WCPSParser.MULTIPLICATION, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterStarExpressionLabel) {
      listener.enterStarExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitStarExpressionLabel) {
      listener.exitStarExpressionLabel(this);
    }
  }
}

export class NumericalScalarExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_numericalScalarExpression;
  }
  public copyFrom(ctx: NumericalScalarExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class NumericalTrigonometricScalarExpressionLabelContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public trigonometricOperator(): TrigonometricOperatorContext {
    return this.getTypedRuleContext(
      TrigonometricOperatorContext,
      0,
    ) as TrigonometricOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public numericalScalarExpression(): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      0,
    ) as NumericalScalarExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalTrigonometricScalarExpressionLabel) {
      listener.enterNumericalTrigonometricScalarExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalTrigonometricScalarExpressionLabel) {
      listener.exitNumericalTrigonometricScalarExpressionLabel(this);
    }
  }
}
export class NumericalRealNumberExpressionLabelContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public REAL_NUMBER_CONSTANT(): TerminalNode {
    return this.getToken(WCPSParser.REAL_NUMBER_CONSTANT, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalRealNumberExpressionLabel) {
      listener.enterNumericalRealNumberExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalRealNumberExpressionLabel) {
      listener.exitNumericalRealNumberExpressionLabel(this);
    }
  }
}
export class NumericalCondenseExpressionLabelContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public condenseExpression(): CondenseExpressionContext {
    return this.getTypedRuleContext(
      CondenseExpressionContext,
      0,
    ) as CondenseExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalCondenseExpressionLabel) {
      listener.enterNumericalCondenseExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalCondenseExpressionLabel) {
      listener.exitNumericalCondenseExpressionLabel(this);
    }
  }
}
export class NumericalUnaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public numericalUnaryOperation(): NumericalUnaryOperationContext {
    return this.getTypedRuleContext(
      NumericalUnaryOperationContext,
      0,
    ) as NumericalUnaryOperationContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public numericalScalarExpression(): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      0,
    ) as NumericalScalarExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalUnaryScalarExpressionLabel) {
      listener.enterNumericalUnaryScalarExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalUnaryScalarExpressionLabel) {
      listener.exitNumericalUnaryScalarExpressionLabel(this);
    }
  }
}
export class NumericalBinaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public numericalScalarExpression_list(): NumericalScalarExpressionContext[] {
    return this.getTypedRuleContexts(
      NumericalScalarExpressionContext,
    ) as NumericalScalarExpressionContext[];
  }
  public numericalScalarExpression(
    i: number,
  ): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      i,
    ) as NumericalScalarExpressionContext;
  }
  public numericalOperator(): NumericalOperatorContext {
    return this.getTypedRuleContext(
      NumericalOperatorContext,
      0,
    ) as NumericalOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalBinaryScalarExpressionLabel) {
      listener.enterNumericalBinaryScalarExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalBinaryScalarExpressionLabel) {
      listener.exitNumericalBinaryScalarExpressionLabel(this);
    }
  }
}
export class NumericalComplexNumberConstantContext extends NumericalScalarExpressionContext {
  constructor(parser: WCPSParser, ctx: NumericalScalarExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public complexNumberConstant(): ComplexNumberConstantContext {
    return this.getTypedRuleContext(
      ComplexNumberConstantContext,
      0,
    ) as ComplexNumberConstantContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalComplexNumberConstant) {
      listener.enterNumericalComplexNumberConstant(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalComplexNumberConstant) {
      listener.exitNumericalComplexNumberConstant(this);
    }
  }
}

export class ComplexNumberConstantContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_complexNumberConstant;
  }
  public copyFrom(ctx: ComplexNumberConstantContext): void {
    super.copyFrom(ctx);
  }
}
export class ComplexNumberConstantLabelContext extends ComplexNumberConstantContext {
  constructor(parser: WCPSParser, ctx: ComplexNumberConstantContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public REAL_NUMBER_CONSTANT_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.REAL_NUMBER_CONSTANT);
  }
  public REAL_NUMBER_CONSTANT(i: number): TerminalNode {
    return this.getToken(WCPSParser.REAL_NUMBER_CONSTANT, i);
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterComplexNumberConstantLabel) {
      listener.enterComplexNumberConstantLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitComplexNumberConstantLabel) {
      listener.exitComplexNumberConstantLabel(this);
    }
  }
}

export class NumericalOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PLUS(): TerminalNode {
    return this.getToken(WCPSParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(WCPSParser.MINUS, 0);
  }
  public MULTIPLICATION(): TerminalNode {
    return this.getToken(WCPSParser.MULTIPLICATION, 0);
  }
  public DIVISION(): TerminalNode {
    return this.getToken(WCPSParser.DIVISION, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_numericalOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalOperator) {
      listener.enterNumericalOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalOperator) {
      listener.exitNumericalOperator(this);
    }
  }
}

export class NumericalUnaryOperationContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ABSOLUTE_VALUE(): TerminalNode {
    return this.getToken(WCPSParser.ABSOLUTE_VALUE, 0);
  }
  public SQUARE_ROOT(): TerminalNode {
    return this.getToken(WCPSParser.SQUARE_ROOT, 0);
  }
  public REAL_PART(): TerminalNode {
    return this.getToken(WCPSParser.REAL_PART, 0);
  }
  public IMAGINARY_PART(): TerminalNode {
    return this.getToken(WCPSParser.IMAGINARY_PART, 0);
  }
  public ROUND(): TerminalNode {
    return this.getToken(WCPSParser.ROUND, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(WCPSParser.MINUS, 0);
  }
  public PLUS(): TerminalNode {
    return this.getToken(WCPSParser.PLUS, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_numericalUnaryOperation;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNumericalUnaryOperation) {
      listener.enterNumericalUnaryOperation(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNumericalUnaryOperation) {
      listener.exitNumericalUnaryOperation(this);
    }
  }
}

export class TrigonometricOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public SIN(): TerminalNode {
    return this.getToken(WCPSParser.SIN, 0);
  }
  public COS(): TerminalNode {
    return this.getToken(WCPSParser.COS, 0);
  }
  public TAN(): TerminalNode {
    return this.getToken(WCPSParser.TAN, 0);
  }
  public SINH(): TerminalNode {
    return this.getToken(WCPSParser.SINH, 0);
  }
  public COSH(): TerminalNode {
    return this.getToken(WCPSParser.COSH, 0);
  }
  public TANH(): TerminalNode {
    return this.getToken(WCPSParser.TANH, 0);
  }
  public ARCSIN(): TerminalNode {
    return this.getToken(WCPSParser.ARCSIN, 0);
  }
  public ARCCOS(): TerminalNode {
    return this.getToken(WCPSParser.ARCCOS, 0);
  }
  public ARCTAN(): TerminalNode {
    return this.getToken(WCPSParser.ARCTAN, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_trigonometricOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterTrigonometricOperator) {
      listener.enterTrigonometricOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitTrigonometricOperator) {
      listener.exitTrigonometricOperator(this);
    }
  }
}

export class GetComponentExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public coverageIdExpression(): CoverageIdExpressionContext {
    return this.getTypedRuleContext(
      CoverageIdExpressionContext,
      0,
    ) as CoverageIdExpressionContext;
  }
  public describeCoverageExpression(): DescribeCoverageExpressionContext {
    return this.getTypedRuleContext(
      DescribeCoverageExpressionContext,
      0,
    ) as DescribeCoverageExpressionContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_getComponentExpression;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterGetComponentExpression) {
      listener.enterGetComponentExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitGetComponentExpression) {
      listener.exitGetComponentExpression(this);
    }
  }
}

export class CoverageIdExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageIdExpression;
  }
  public copyFrom(ctx: CoverageIdExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CoverageIdExpressionLabelContext extends CoverageIdExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageIdExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ID(): TerminalNode {
    return this.getToken(WCPSParser.ID, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageIdExpressionLabel) {
      listener.enterCoverageIdExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageIdExpressionLabel) {
      listener.exitCoverageIdExpressionLabel(this);
    }
  }
}

export class DescribeCoverageExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_describeCoverageExpression;
  }
  public copyFrom(ctx: DescribeCoverageExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class DescribeCoverageExpressionLabelContext extends DescribeCoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: DescribeCoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public DESCRIBE_COVERAGE(): TerminalNode {
    return this.getToken(WCPSParser.DESCRIBE_COVERAGE, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDescribeCoverageExpressionLabel) {
      listener.enterDescribeCoverageExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDescribeCoverageExpressionLabel) {
      listener.exitDescribeCoverageExpressionLabel(this);
    }
  }
}

export class EncodedCoverageExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_encodedCoverageExpression;
  }
  public copyFrom(ctx: EncodedCoverageExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class EncodedCoverageExpressionLabelContext extends EncodedCoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: EncodedCoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public ENCODE(): TerminalNode {
    return this.getToken(WCPSParser.ENCODE, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public STRING_LITERAL_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.STRING_LITERAL);
  }
  public STRING_LITERAL(i: number): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, i);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterEncodedCoverageExpressionLabel) {
      listener.enterEncodedCoverageExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitEncodedCoverageExpressionLabel) {
      listener.exitEncodedCoverageExpressionLabel(this);
    }
  }
}

export class DecodeCoverageExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_decodeCoverageExpression;
  }
  public copyFrom(ctx: DecodeCoverageExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class DecodedCoverageExpressionLabelContext extends DecodeCoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: DecodeCoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public DECODE(): TerminalNode {
    return this.getToken(WCPSParser.DECODE, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public STRING_LITERAL_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.STRING_LITERAL);
  }
  public STRING_LITERAL(i: number): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, i);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDecodedCoverageExpressionLabel) {
      listener.enterDecodedCoverageExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDecodedCoverageExpressionLabel) {
      listener.exitDecodedCoverageExpressionLabel(this);
    }
  }
}

export class CoverageExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageExpression;
  }
  public copyFrom(ctx: CoverageExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CoverageExpressionRangeSubsettingLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public DOT(): TerminalNode {
    return this.getToken(WCPSParser.DOT, 0);
  }
  public fieldName(): FieldNameContext {
    return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionRangeSubsettingLabel) {
      listener.enterCoverageExpressionRangeSubsettingLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionRangeSubsettingLabel) {
      listener.exitCoverageExpressionRangeSubsettingLabel(this);
    }
  }
}
export class CoverageExpressionTrigonometricLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public trigonometricExpression(): TrigonometricExpressionContext {
    return this.getTypedRuleContext(
      TrigonometricExpressionContext,
      0,
    ) as TrigonometricExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionTrigonometricLabel) {
      listener.enterCoverageExpressionTrigonometricLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionTrigonometricLabel) {
      listener.exitCoverageExpressionTrigonometricLabel(this);
    }
  }
}
export class CoverageExpressionUnaryBooleanLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public unaryBooleanExpression(): UnaryBooleanExpressionContext {
    return this.getTypedRuleContext(
      UnaryBooleanExpressionContext,
      0,
    ) as UnaryBooleanExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionUnaryBooleanLabel) {
      listener.enterCoverageExpressionUnaryBooleanLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionUnaryBooleanLabel) {
      listener.exitCoverageExpressionUnaryBooleanLabel(this);
    }
  }
}
export class CoverageExpressionShorthandTrimLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public LEFT_BRACKET(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACKET, 0);
  }
  public dimensionIntervalList(): DimensionIntervalListContext {
    return this.getTypedRuleContext(
      DimensionIntervalListContext,
      0,
    ) as DimensionIntervalListContext;
  }
  public RIGHT_BRACKET(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACKET, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionShorthandTrimLabel) {
      listener.enterCoverageExpressionShorthandTrimLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionShorthandTrimLabel) {
      listener.exitCoverageExpressionShorthandTrimLabel(this);
    }
  }
}
export class CoverageExpressionVariableNameLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionVariableNameLabel) {
      listener.enterCoverageExpressionVariableNameLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionVariableNameLabel) {
      listener.exitCoverageExpressionVariableNameLabel(this);
    }
  }
}
export class CoverageExpressionConstantLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageConstantExpression(): CoverageConstantExpressionContext {
    return this.getTypedRuleContext(
      CoverageConstantExpressionContext,
      0,
    ) as CoverageConstantExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionConstantLabel) {
      listener.enterCoverageExpressionConstantLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionConstantLabel) {
      listener.exitCoverageExpressionConstantLabel(this);
    }
  }
}
export class CoverageExpressionCoverageLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionCoverageLabel) {
      listener.enterCoverageExpressionCoverageLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionCoverageLabel) {
      listener.exitCoverageExpressionCoverageLabel(this);
    }
  }
}
export class CoverageExpressionShorthandSliceLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public LEFT_BRACKET(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACKET, 0);
  }
  public dimensionPointList(): DimensionPointListContext {
    return this.getTypedRuleContext(
      DimensionPointListContext,
      0,
    ) as DimensionPointListContext;
  }
  public RIGHT_BRACKET(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACKET, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionShorthandSliceLabel) {
      listener.enterCoverageExpressionShorthandSliceLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionShorthandSliceLabel) {
      listener.exitCoverageExpressionShorthandSliceLabel(this);
    }
  }
}
export class CoverageExpressionScalarLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public scalarExpression(): ScalarExpressionContext {
    return this.getTypedRuleContext(
      ScalarExpressionContext,
      0,
    ) as ScalarExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionScalarLabel) {
      listener.enterCoverageExpressionScalarLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionScalarLabel) {
      listener.exitCoverageExpressionScalarLabel(this);
    }
  }
}
export class CoverageExpressionRangeConstructorLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public rangeConstructorExpression(): RangeConstructorExpressionContext {
    return this.getTypedRuleContext(
      RangeConstructorExpressionContext,
      0,
    ) as RangeConstructorExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionRangeConstructorLabel) {
      listener.enterCoverageExpressionRangeConstructorLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionRangeConstructorLabel) {
      listener.exitCoverageExpressionRangeConstructorLabel(this);
    }
  }
}
export class CoverageExpressionScaleLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public SCALE(): TerminalNode {
    return this.getToken(WCPSParser.SCALE, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public dimensionIntervalList(): DimensionIntervalListContext {
    return this.getTypedRuleContext(
      DimensionIntervalListContext,
      0,
    ) as DimensionIntervalListContext;
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public fieldInterpolationList_list(): FieldInterpolationListContext[] {
    return this.getTypedRuleContexts(
      FieldInterpolationListContext,
    ) as FieldInterpolationListContext[];
  }
  public fieldInterpolationList(i: number): FieldInterpolationListContext {
    return this.getTypedRuleContext(
      FieldInterpolationListContext,
      i,
    ) as FieldInterpolationListContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionScaleLabel) {
      listener.enterCoverageExpressionScaleLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionScaleLabel) {
      listener.exitCoverageExpressionScaleLabel(this);
    }
  }
}
export class CoverageExpressionTrimCoverageLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public TRIM(): TerminalNode {
    return this.getToken(WCPSParser.TRIM, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public dimensionIntervalList(): DimensionIntervalListContext {
    return this.getTypedRuleContext(
      DimensionIntervalListContext,
      0,
    ) as DimensionIntervalListContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionTrimCoverageLabel) {
      listener.enterCoverageExpressionTrimCoverageLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionTrimCoverageLabel) {
      listener.exitCoverageExpressionTrimCoverageLabel(this);
    }
  }
}
export class CoverageExpressionCastLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public castExpression(): CastExpressionContext {
    return this.getTypedRuleContext(
      CastExpressionContext,
      0,
    ) as CastExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionCastLabel) {
      listener.enterCoverageExpressionCastLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionCastLabel) {
      listener.exitCoverageExpressionCastLabel(this);
    }
  }
}
export class CoverageExpressionArithmeticLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
    return this.getTypedRuleContext(
      CoverageArithmeticOperatorContext,
      0,
    ) as CoverageArithmeticOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionArithmeticLabel) {
      listener.enterCoverageExpressionArithmeticLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionArithmeticLabel) {
      listener.exitCoverageExpressionArithmeticLabel(this);
    }
  }
}
export class CoverageExpressionOverlayLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public OVERLAY(): TerminalNode {
    return this.getToken(WCPSParser.OVERLAY, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionOverlayLabel) {
      listener.enterCoverageExpressionOverlayLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionOverlayLabel) {
      listener.exitCoverageExpressionOverlayLabel(this);
    }
  }
}
export class CoverageExpressionConstructorLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageConstructorExpression(): CoverageConstructorExpressionContext {
    return this.getTypedRuleContext(
      CoverageConstructorExpressionContext,
      0,
    ) as CoverageConstructorExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionConstructorLabel) {
      listener.enterCoverageExpressionConstructorLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionConstructorLabel) {
      listener.exitCoverageExpressionConstructorLabel(this);
    }
  }
}
export class CoverageExpressionExponentialLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public exponentialExpression(): ExponentialExpressionContext {
    return this.getTypedRuleContext(
      ExponentialExpressionContext,
      0,
    ) as ExponentialExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionExponentialLabel) {
      listener.enterCoverageExpressionExponentialLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionExponentialLabel) {
      listener.exitCoverageExpressionExponentialLabel(this);
    }
  }
}
export class CoverageExpressionCrsTransformLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public crsTransformExpression(): CrsTransformExpressionContext {
    return this.getTypedRuleContext(
      CrsTransformExpressionContext,
      0,
    ) as CrsTransformExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionCrsTransformLabel) {
      listener.enterCoverageExpressionCrsTransformLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionCrsTransformLabel) {
      listener.exitCoverageExpressionCrsTransformLabel(this);
    }
  }
}
export class CoverageExpressionLogicLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public booleanOperator(): BooleanOperatorContext {
    return this.getTypedRuleContext(
      BooleanOperatorContext,
      0,
    ) as BooleanOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionLogicLabel) {
      listener.enterCoverageExpressionLogicLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionLogicLabel) {
      listener.exitCoverageExpressionLogicLabel(this);
    }
  }
}
export class CoverageExpressionComparissonLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public numericalComparissonOperator(): NumericalComparissonOperatorContext {
    return this.getTypedRuleContext(
      NumericalComparissonOperatorContext,
      0,
    ) as NumericalComparissonOperatorContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionComparissonLabel) {
      listener.enterCoverageExpressionComparissonLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionComparissonLabel) {
      listener.exitCoverageExpressionComparissonLabel(this);
    }
  }
}
export class CoverageExpressionDecodeLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public decodeCoverageExpression(): DecodeCoverageExpressionContext {
    return this.getTypedRuleContext(
      DecodeCoverageExpressionContext,
      0,
    ) as DecodeCoverageExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionDecodeLabel) {
      listener.enterCoverageExpressionDecodeLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionDecodeLabel) {
      listener.exitCoverageExpressionDecodeLabel(this);
    }
  }
}
export class CoverageExpressionExtendLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public EXTEND(): TerminalNode {
    return this.getToken(WCPSParser.EXTEND, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public dimensionIntervalList(): DimensionIntervalListContext {
    return this.getTypedRuleContext(
      DimensionIntervalListContext,
      0,
    ) as DimensionIntervalListContext;
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionExtendLabel) {
      listener.enterCoverageExpressionExtendLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionExtendLabel) {
      listener.exitCoverageExpressionExtendLabel(this);
    }
  }
}
export class CoverageExpressionUnaryArithmeticLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
    return this.getTypedRuleContext(
      UnaryArithmeticExpressionContext,
      0,
    ) as UnaryArithmeticExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionUnaryArithmeticLabel) {
      listener.enterCoverageExpressionUnaryArithmeticLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionUnaryArithmeticLabel) {
      listener.exitCoverageExpressionUnaryArithmeticLabel(this);
    }
  }
}
export class CoverageExpressionSliceLabelContext extends CoverageExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public SLICE(): TerminalNode {
    return this.getToken(WCPSParser.SLICE, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public dimensionPointList(): DimensionPointListContext {
    return this.getTypedRuleContext(
      DimensionPointListContext,
      0,
    ) as DimensionPointListContext;
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageExpressionSliceLabel) {
      listener.enterCoverageExpressionSliceLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageExpressionSliceLabel) {
      listener.exitCoverageExpressionSliceLabel(this);
    }
  }
}

export class CoverageArithmeticOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PLUS(): TerminalNode {
    return this.getToken(WCPSParser.PLUS, 0);
  }
  public MULTIPLICATION(): TerminalNode {
    return this.getToken(WCPSParser.MULTIPLICATION, 0);
  }
  public DIVISION(): TerminalNode {
    return this.getToken(WCPSParser.DIVISION, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(WCPSParser.MINUS, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageArithmeticOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageArithmeticOperator) {
      listener.enterCoverageArithmeticOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageArithmeticOperator) {
      listener.exitCoverageArithmeticOperator(this);
    }
  }
}

export class UnaryArithmeticExpressionOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PLUS(): TerminalNode {
    return this.getToken(WCPSParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(WCPSParser.MINUS, 0);
  }
  public ABSOLUTE_VALUE(): TerminalNode {
    return this.getToken(WCPSParser.ABSOLUTE_VALUE, 0);
  }
  public SQUARE_ROOT(): TerminalNode {
    return this.getToken(WCPSParser.SQUARE_ROOT, 0);
  }
  public REAL_PART(): TerminalNode {
    return this.getToken(WCPSParser.REAL_PART, 0);
  }
  public IMAGINARY_PART(): TerminalNode {
    return this.getToken(WCPSParser.IMAGINARY_PART, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_unaryArithmeticExpressionOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterUnaryArithmeticExpressionOperator) {
      listener.enterUnaryArithmeticExpressionOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitUnaryArithmeticExpressionOperator) {
      listener.exitUnaryArithmeticExpressionOperator(this);
    }
  }
}

export class UnaryArithmeticExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_unaryArithmeticExpression;
  }
  public copyFrom(ctx: UnaryArithmeticExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class UnaryCoverageArithmeticExpressionLabelContext extends UnaryArithmeticExpressionContext {
  constructor(parser: WCPSParser, ctx: UnaryArithmeticExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
    return this.getTypedRuleContext(
      UnaryArithmeticExpressionOperatorContext,
      0,
    ) as UnaryArithmeticExpressionOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterUnaryCoverageArithmeticExpressionLabel) {
      listener.enterUnaryCoverageArithmeticExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitUnaryCoverageArithmeticExpressionLabel) {
      listener.exitUnaryCoverageArithmeticExpressionLabel(this);
    }
  }
}

export class TrigonometricExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_trigonometricExpression;
  }
  public copyFrom(ctx: TrigonometricExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class TrigonometricExpressionLabelContext extends TrigonometricExpressionContext {
  constructor(parser: WCPSParser, ctx: TrigonometricExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public trigonometricOperator(): TrigonometricOperatorContext {
    return this.getTypedRuleContext(
      TrigonometricOperatorContext,
      0,
    ) as TrigonometricOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterTrigonometricExpressionLabel) {
      listener.enterTrigonometricExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitTrigonometricExpressionLabel) {
      listener.exitTrigonometricExpressionLabel(this);
    }
  }
}

export class ExponentialExpressionOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EXP(): TerminalNode {
    return this.getToken(WCPSParser.EXP, 0);
  }
  public LOG(): TerminalNode {
    return this.getToken(WCPSParser.LOG, 0);
  }
  public LN(): TerminalNode {
    return this.getToken(WCPSParser.LN, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_exponentialExpressionOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterExponentialExpressionOperator) {
      listener.enterExponentialExpressionOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitExponentialExpressionOperator) {
      listener.exitExponentialExpressionOperator(this);
    }
  }
}

export class ExponentialExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_exponentialExpression;
  }
  public copyFrom(ctx: ExponentialExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class ExponentialExpressionLabelContext extends ExponentialExpressionContext {
  constructor(parser: WCPSParser, ctx: ExponentialExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
    return this.getTypedRuleContext(
      ExponentialExpressionOperatorContext,
      0,
    ) as ExponentialExpressionOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterExponentialExpressionLabel) {
      listener.enterExponentialExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitExponentialExpressionLabel) {
      listener.exitExponentialExpressionLabel(this);
    }
  }
}

export class UnaryBooleanExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_unaryBooleanExpression;
  }
  public copyFrom(ctx: UnaryBooleanExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class NotUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
  constructor(parser: WCPSParser, ctx: UnaryBooleanExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public NOT(): TerminalNode {
    return this.getToken(WCPSParser.NOT, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNotUnaryBooleanExpressionLabel) {
      listener.enterNotUnaryBooleanExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNotUnaryBooleanExpressionLabel) {
      listener.exitNotUnaryBooleanExpressionLabel(this);
    }
  }
}
export class BitUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
  constructor(parser: WCPSParser, ctx: UnaryBooleanExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public BIT(): TerminalNode {
    return this.getToken(WCPSParser.BIT, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public numericalScalarExpression(): NumericalScalarExpressionContext {
    return this.getTypedRuleContext(
      NumericalScalarExpressionContext,
      0,
    ) as NumericalScalarExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterBitUnaryBooleanExpressionLabel) {
      listener.enterBitUnaryBooleanExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitBitUnaryBooleanExpressionLabel) {
      listener.exitBitUnaryBooleanExpressionLabel(this);
    }
  }
}

export class RangeTypeContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier_list(): IdentifierContext[] {
    return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
  }
  public identifier(i: number): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_rangeType;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterRangeType) {
      listener.enterRangeType(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitRangeType) {
      listener.exitRangeType(this);
    }
  }
}

export class CastExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_castExpression;
  }
  public copyFrom(ctx: CastExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CastExpressionLabelContext extends CastExpressionContext {
  constructor(parser: WCPSParser, ctx: CastExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public rangeType(): RangeTypeContext {
    return this.getTypedRuleContext(RangeTypeContext, 0) as RangeTypeContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCastExpressionLabel) {
      listener.enterCastExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCastExpressionLabel) {
      listener.exitCastExpressionLabel(this);
    }
  }
}

export class FieldNameContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public REAL_NUMBER_CONSTANT(): TerminalNode {
    return this.getToken(WCPSParser.REAL_NUMBER_CONSTANT, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_fieldName;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterFieldName) {
      listener.enterFieldName(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitFieldName) {
      listener.exitFieldName(this);
    }
  }
}

export class RangeConstructorExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_rangeConstructorExpression;
  }
  public copyFrom(ctx: RangeConstructorExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class RangeConstructorExpressionLabelContext extends RangeConstructorExpressionContext {
  constructor(parser: WCPSParser, ctx: RangeConstructorExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public fieldName_list(): FieldNameContext[] {
    return this.getTypedRuleContexts(FieldNameContext) as FieldNameContext[];
  }
  public fieldName(i: number): FieldNameContext {
    return this.getTypedRuleContext(FieldNameContext, i) as FieldNameContext;
  }
  public COLON_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COLON);
  }
  public COLON(i: number): TerminalNode {
    return this.getToken(WCPSParser.COLON, i);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public SEMICOLON_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.SEMICOLON);
  }
  public SEMICOLON(i: number): TerminalNode {
    return this.getToken(WCPSParser.SEMICOLON, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterRangeConstructorExpressionLabel) {
      listener.enterRangeConstructorExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitRangeConstructorExpressionLabel) {
      listener.exitRangeConstructorExpressionLabel(this);
    }
  }
}

export class CrsTransformExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_crsTransformExpression;
  }
  public copyFrom(ctx: CrsTransformExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CrsTransformExpressionLabelContext extends CrsTransformExpressionContext {
  constructor(parser: WCPSParser, ctx: CrsTransformExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public CRS_TRANSFORM(): TerminalNode {
    return this.getToken(WCPSParser.CRS_TRANSFORM, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public dimensionCrsList(): DimensionCrsListContext {
    return this.getTypedRuleContext(
      DimensionCrsListContext,
      0,
    ) as DimensionCrsListContext;
  }
  public fieldInterpolationList(): FieldInterpolationListContext {
    return this.getTypedRuleContext(
      FieldInterpolationListContext,
      0,
    ) as FieldInterpolationListContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCrsTransformExpressionLabel) {
      listener.enterCrsTransformExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCrsTransformExpressionLabel) {
      listener.exitCrsTransformExpressionLabel(this);
    }
  }
}

export class DimensionPointListContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionPointList;
  }
  public copyFrom(ctx: DimensionPointListContext): void {
    super.copyFrom(ctx);
  }
}
export class DimensionPointListLabelContext extends DimensionPointListContext {
  constructor(parser: WCPSParser, ctx: DimensionPointListContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dimensionPointElement_list(): DimensionPointElementContext[] {
    return this.getTypedRuleContexts(
      DimensionPointElementContext,
    ) as DimensionPointElementContext[];
  }
  public dimensionPointElement(i: number): DimensionPointElementContext {
    return this.getTypedRuleContext(
      DimensionPointElementContext,
      i,
    ) as DimensionPointElementContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDimensionPointListLabel) {
      listener.enterDimensionPointListLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDimensionPointListLabel) {
      listener.exitDimensionPointListLabel(this);
    }
  }
}

export class DimensionPointElementContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionPointElement;
  }
  public copyFrom(ctx: DimensionPointElementContext): void {
    super.copyFrom(ctx);
  }
}
export class DimensionPointElementLabelContext extends DimensionPointElementContext {
  constructor(parser: WCPSParser, ctx: DimensionPointElementContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public axisName(): AxisNameContext {
    return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(WCPSParser.COLON, 0);
  }
  public crsName(): CrsNameContext {
    return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDimensionPointElementLabel) {
      listener.enterDimensionPointElementLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDimensionPointElementLabel) {
      listener.exitDimensionPointElementLabel(this);
    }
  }
}

export class DimensionIntervalListContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionIntervalList;
  }
  public copyFrom(ctx: DimensionIntervalListContext): void {
    super.copyFrom(ctx);
  }
}
export class DimensionIntervalListLabelContext extends DimensionIntervalListContext {
  constructor(parser: WCPSParser, ctx: DimensionIntervalListContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dimensionIntervalElement_list(): DimensionIntervalElementContext[] {
    return this.getTypedRuleContexts(
      DimensionIntervalElementContext,
    ) as DimensionIntervalElementContext[];
  }
  public dimensionIntervalElement(i: number): DimensionIntervalElementContext {
    return this.getTypedRuleContext(
      DimensionIntervalElementContext,
      i,
    ) as DimensionIntervalElementContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDimensionIntervalListLabel) {
      listener.enterDimensionIntervalListLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDimensionIntervalListLabel) {
      listener.exitDimensionIntervalListLabel(this);
    }
  }
}

export class DimensionIntervalElementContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionIntervalElement;
  }
  public copyFrom(ctx: DimensionIntervalElementContext): void {
    super.copyFrom(ctx);
  }
}
export class SliceDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
  constructor(parser: WCPSParser, ctx: DimensionIntervalElementContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public axisName(): AxisNameContext {
    return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(WCPSParser.COLON, 0);
  }
  public crsName(): CrsNameContext {
    return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterSliceDimensionIntervalElementLabel) {
      listener.enterSliceDimensionIntervalElementLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitSliceDimensionIntervalElementLabel) {
      listener.exitSliceDimensionIntervalElementLabel(this);
    }
  }
}
export class TrimDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
  constructor(parser: WCPSParser, ctx: DimensionIntervalElementContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public axisName(): AxisNameContext {
    return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression_list(): CoverageExpressionContext[] {
    return this.getTypedRuleContexts(
      CoverageExpressionContext,
    ) as CoverageExpressionContext[];
  }
  public coverageExpression(i: number): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      i,
    ) as CoverageExpressionContext;
  }
  public COLON_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COLON);
  }
  public COLON(i: number): TerminalNode {
    return this.getToken(WCPSParser.COLON, i);
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public crsName(): CrsNameContext {
    return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterTrimDimensionIntervalElementLabel) {
      listener.enterTrimDimensionIntervalElementLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitTrimDimensionIntervalElementLabel) {
      listener.exitTrimDimensionIntervalElementLabel(this);
    }
  }
}

export class DimensionCrsListContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionCrsList;
  }
  public copyFrom(ctx: DimensionCrsListContext): void {
    super.copyFrom(ctx);
  }
}
export class DimensionCrsListLabelContext extends DimensionCrsListContext {
  constructor(parser: WCPSParser, ctx: DimensionCrsListContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public dimensionCrsElement_list(): DimensionCrsElementContext[] {
    return this.getTypedRuleContexts(
      DimensionCrsElementContext,
    ) as DimensionCrsElementContext[];
  }
  public dimensionCrsElement(i: number): DimensionCrsElementContext {
    return this.getTypedRuleContext(
      DimensionCrsElementContext,
      i,
    ) as DimensionCrsElementContext;
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDimensionCrsListLabel) {
      listener.enterDimensionCrsListLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDimensionCrsListLabel) {
      listener.exitDimensionCrsListLabel(this);
    }
  }
}

export class DimensionCrsElementContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_dimensionCrsElement;
  }
  public copyFrom(ctx: DimensionCrsElementContext): void {
    super.copyFrom(ctx);
  }
}
export class DimensionCrsElementLabelContext extends DimensionCrsElementContext {
  constructor(parser: WCPSParser, ctx: DimensionCrsElementContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public axisName(): AxisNameContext {
    return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(WCPSParser.COLON, 0);
  }
  public crsName(): CrsNameContext {
    return this.getTypedRuleContext(CrsNameContext, 0) as CrsNameContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterDimensionCrsElementLabel) {
      listener.enterDimensionCrsElementLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitDimensionCrsElementLabel) {
      listener.exitDimensionCrsElementLabel(this);
    }
  }
}

export class FieldInterpolationListContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_fieldInterpolationList;
  }
  public copyFrom(ctx: FieldInterpolationListContext): void {
    super.copyFrom(ctx);
  }
}
export class FieldInterpolationListLabelContext extends FieldInterpolationListContext {
  constructor(parser: WCPSParser, ctx: FieldInterpolationListContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_BRACE, 0);
  }
  public fieldInterpolationListElement_list(): FieldInterpolationListElementContext[] {
    return this.getTypedRuleContexts(
      FieldInterpolationListElementContext,
    ) as FieldInterpolationListElementContext[];
  }
  public fieldInterpolationListElement(
    i: number,
  ): FieldInterpolationListElementContext {
    return this.getTypedRuleContext(
      FieldInterpolationListElementContext,
      i,
    ) as FieldInterpolationListElementContext;
  }
  public RIGHT_BRACE(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_BRACE, 0);
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterFieldInterpolationListLabel) {
      listener.enterFieldInterpolationListLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitFieldInterpolationListLabel) {
      listener.exitFieldInterpolationListLabel(this);
    }
  }
}

export class FieldInterpolationListElementContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_fieldInterpolationListElement;
  }
  public copyFrom(ctx: FieldInterpolationListElementContext): void {
    super.copyFrom(ctx);
  }
}
export class FieldInterpolationListElementLabelContext extends FieldInterpolationListElementContext {
  constructor(parser: WCPSParser, ctx: FieldInterpolationListElementContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public fieldName(): FieldNameContext {
    return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
  }
  public interpolationMethod(): InterpolationMethodContext {
    return this.getTypedRuleContext(
      InterpolationMethodContext,
      0,
    ) as InterpolationMethodContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterFieldInterpolationListElementLabel) {
      listener.enterFieldInterpolationListElementLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitFieldInterpolationListElementLabel) {
      listener.exitFieldInterpolationListElementLabel(this);
    }
  }
}

export class InterpolationMethodContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_interpolationMethod;
  }
  public copyFrom(ctx: InterpolationMethodContext): void {
    super.copyFrom(ctx);
  }
}
export class InterpolationMethodLabelContext extends InterpolationMethodContext {
  constructor(parser: WCPSParser, ctx: InterpolationMethodContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public interpolationType(): InterpolationTypeContext {
    return this.getTypedRuleContext(
      InterpolationTypeContext,
      0,
    ) as InterpolationTypeContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(WCPSParser.COLON, 0);
  }
  public nullResistance(): NullResistanceContext {
    return this.getTypedRuleContext(
      NullResistanceContext,
      0,
    ) as NullResistanceContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterInterpolationMethodLabel) {
      listener.enterInterpolationMethodLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitInterpolationMethodLabel) {
      listener.exitInterpolationMethodLabel(this);
    }
  }
}

export class NullResistanceContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public TRUE(): TerminalNode {
    return this.getToken(WCPSParser.TRUE, 0);
  }
  public FALSE(): TerminalNode {
    return this.getToken(WCPSParser.FALSE, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_nullResistance;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterNullResistance) {
      listener.enterNullResistance(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitNullResistance) {
      listener.exitNullResistance(this);
    }
  }
}

export class InterpolationTypeContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_interpolationType;
  }
  public copyFrom(ctx: InterpolationTypeContext): void {
    super.copyFrom(ctx);
  }
}
export class InterpolationTypeLabelContext extends InterpolationTypeContext {
  constructor(parser: WCPSParser, ctx: InterpolationTypeContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterInterpolationTypeLabel) {
      listener.enterInterpolationTypeLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitInterpolationTypeLabel) {
      listener.exitInterpolationTypeLabel(this);
    }
  }
}

export class CoverageConstructorExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageConstructorExpression;
  }
  public copyFrom(ctx: CoverageConstructorExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CoverageConstructorExpressionLabelContext extends CoverageConstructorExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageConstructorExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public COVERAGE(): TerminalNode {
    return this.getToken(WCPSParser.COVERAGE, 0);
  }
  public OVER(): TerminalNode {
    return this.getToken(WCPSParser.OVER, 0);
  }
  public axisIterator_list(): AxisIteratorContext[] {
    return this.getTypedRuleContexts(
      AxisIteratorContext,
    ) as AxisIteratorContext[];
  }
  public axisIterator(i: number): AxisIteratorContext {
    return this.getTypedRuleContext(
      AxisIteratorContext,
      i,
    ) as AxisIteratorContext;
  }
  public VALUES(): TerminalNode {
    return this.getToken(WCPSParser.VALUES, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageConstructorExpressionLabel) {
      listener.enterCoverageConstructorExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageConstructorExpressionLabel) {
      listener.exitCoverageConstructorExpressionLabel(this);
    }
  }
}

export class AxisIteratorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_axisIterator;
  }
  public copyFrom(ctx: AxisIteratorContext): void {
    super.copyFrom(ctx);
  }
}
export class AxisIteratorLabelContext extends AxisIteratorContext {
  constructor(parser: WCPSParser, ctx: AxisIteratorContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public dimensionIntervalElement(): DimensionIntervalElementContext {
    return this.getTypedRuleContext(
      DimensionIntervalElementContext,
      0,
    ) as DimensionIntervalElementContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterAxisIteratorLabel) {
      listener.enterAxisIteratorLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitAxisIteratorLabel) {
      listener.exitAxisIteratorLabel(this);
    }
  }
}

export class IntervalExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_intervalExpression;
  }
  public copyFrom(ctx: IntervalExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class IntervalExpressionLabelContext extends IntervalExpressionContext {
  constructor(parser: WCPSParser, ctx: IntervalExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public scalarExpression_list(): ScalarExpressionContext[] {
    return this.getTypedRuleContexts(
      ScalarExpressionContext,
    ) as ScalarExpressionContext[];
  }
  public scalarExpression(i: number): ScalarExpressionContext {
    return this.getTypedRuleContext(
      ScalarExpressionContext,
      i,
    ) as ScalarExpressionContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(WCPSParser.COLON, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterIntervalExpressionLabel) {
      listener.enterIntervalExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitIntervalExpressionLabel) {
      listener.exitIntervalExpressionLabel(this);
    }
  }
}
export class CRSIntervalExpressionLabelContext extends IntervalExpressionContext {
  constructor(parser: WCPSParser, ctx: IntervalExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public IMGCRSDOMAIN(): TerminalNode {
    return this.getToken(WCPSParser.IMGCRSDOMAIN, 0);
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageVariableName(): CoverageVariableNameContext {
    return this.getTypedRuleContext(
      CoverageVariableNameContext,
      0,
    ) as CoverageVariableNameContext;
  }
  public COMMA(): TerminalNode {
    return this.getToken(WCPSParser.COMMA, 0);
  }
  public axisName(): AxisNameContext {
    return this.getTypedRuleContext(AxisNameContext, 0) as AxisNameContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCRSIntervalExpressionLabel) {
      listener.enterCRSIntervalExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCRSIntervalExpressionLabel) {
      listener.exitCRSIntervalExpressionLabel(this);
    }
  }
}

export class CoverageConstantExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_coverageConstantExpression;
  }
  public copyFrom(ctx: CoverageConstantExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class CoverageConstantExpressionLabelContext extends CoverageConstantExpressionContext {
  constructor(parser: WCPSParser, ctx: CoverageConstantExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public COVERAGE(): TerminalNode {
    return this.getToken(WCPSParser.COVERAGE, 0);
  }
  public OVER(): TerminalNode {
    return this.getToken(WCPSParser.OVER, 0);
  }
  public axisIterator_list(): AxisIteratorContext[] {
    return this.getTypedRuleContexts(
      AxisIteratorContext,
    ) as AxisIteratorContext[];
  }
  public axisIterator(i: number): AxisIteratorContext {
    return this.getTypedRuleContext(
      AxisIteratorContext,
      i,
    ) as AxisIteratorContext;
  }
  public VALUE(): TerminalNode {
    return this.getToken(WCPSParser.VALUE, 0);
  }
  public LIST(): TerminalNode {
    return this.getToken(WCPSParser.LIST, 0);
  }
  public LOWER_THAN(): TerminalNode {
    return this.getToken(WCPSParser.LOWER_THAN, 0);
  }
  public constant_list(): ConstantContext[] {
    return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
  }
  public constant(i: number): ConstantContext {
    return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
  }
  public GREATER_THAN(): TerminalNode {
    return this.getToken(WCPSParser.GREATER_THAN, 0);
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public SEMICOLON_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.SEMICOLON);
  }
  public SEMICOLON(i: number): TerminalNode {
    return this.getToken(WCPSParser.SEMICOLON, i);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCoverageConstantExpressionLabel) {
      listener.enterCoverageConstantExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCoverageConstantExpressionLabel) {
      listener.exitCoverageConstantExpressionLabel(this);
    }
  }
}

export class AxisSpecContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_axisSpec;
  }
  public copyFrom(ctx: AxisSpecContext): void {
    super.copyFrom(ctx);
  }
}
export class AxisSpecLabelContext extends AxisSpecContext {
  constructor(parser: WCPSParser, ctx: AxisSpecContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public dimensionIntervalElement(): DimensionIntervalElementContext {
    return this.getTypedRuleContext(
      DimensionIntervalElementContext,
      0,
    ) as DimensionIntervalElementContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterAxisSpecLabel) {
      listener.enterAxisSpecLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitAxisSpecLabel) {
      listener.exitAxisSpecLabel(this);
    }
  }
}

export class CondenseExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public reduceExpression(): ReduceExpressionContext {
    return this.getTypedRuleContext(
      ReduceExpressionContext,
      0,
    ) as ReduceExpressionContext;
  }
  public generalCondenseExpression(): GeneralCondenseExpressionContext {
    return this.getTypedRuleContext(
      GeneralCondenseExpressionContext,
      0,
    ) as GeneralCondenseExpressionContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_condenseExpression;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCondenseExpression) {
      listener.enterCondenseExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCondenseExpression) {
      listener.exitCondenseExpression(this);
    }
  }
}

export class ReduceBooleanExpressionOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ALL(): TerminalNode {
    return this.getToken(WCPSParser.ALL, 0);
  }
  public SOME(): TerminalNode {
    return this.getToken(WCPSParser.SOME, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_reduceBooleanExpressionOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReduceBooleanExpressionOperator) {
      listener.enterReduceBooleanExpressionOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReduceBooleanExpressionOperator) {
      listener.exitReduceBooleanExpressionOperator(this);
    }
  }
}

export class ReduceNumericalExpressionOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public COUNT(): TerminalNode {
    return this.getToken(WCPSParser.COUNT, 0);
  }
  public ADD(): TerminalNode {
    return this.getToken(WCPSParser.ADD, 0);
  }
  public AVG(): TerminalNode {
    return this.getToken(WCPSParser.AVG, 0);
  }
  public MIN(): TerminalNode {
    return this.getToken(WCPSParser.MIN, 0);
  }
  public MAX(): TerminalNode {
    return this.getToken(WCPSParser.MAX, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_reduceNumericalExpressionOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReduceNumericalExpressionOperator) {
      listener.enterReduceNumericalExpressionOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReduceNumericalExpressionOperator) {
      listener.exitReduceNumericalExpressionOperator(this);
    }
  }
}

export class ReduceBooleanExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_reduceBooleanExpression;
  }
  public copyFrom(ctx: ReduceBooleanExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class ReduceBooleanExpressionLabelContext extends ReduceBooleanExpressionContext {
  constructor(parser: WCPSParser, ctx: ReduceBooleanExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
    return this.getTypedRuleContext(
      ReduceBooleanExpressionOperatorContext,
      0,
    ) as ReduceBooleanExpressionOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReduceBooleanExpressionLabel) {
      listener.enterReduceBooleanExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReduceBooleanExpressionLabel) {
      listener.exitReduceBooleanExpressionLabel(this);
    }
  }
}

export class ReduceNumericalExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_reduceNumericalExpression;
  }
  public copyFrom(ctx: ReduceNumericalExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class ReduceNumericalExpressionLabelContext extends ReduceNumericalExpressionContext {
  constructor(parser: WCPSParser, ctx: ReduceNumericalExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
    return this.getTypedRuleContext(
      ReduceNumericalExpressionOperatorContext,
      0,
    ) as ReduceNumericalExpressionOperatorContext;
  }
  public LEFT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.LEFT_PARANTHESIS, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public RIGHT_PARANTHESIS(): TerminalNode {
    return this.getToken(WCPSParser.RIGHT_PARANTHESIS, 0);
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReduceNumericalExpressionLabel) {
      listener.enterReduceNumericalExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReduceNumericalExpressionLabel) {
      listener.exitReduceNumericalExpressionLabel(this);
    }
  }
}

export class ReduceExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public reduceBooleanExpression(): ReduceBooleanExpressionContext {
    return this.getTypedRuleContext(
      ReduceBooleanExpressionContext,
      0,
    ) as ReduceBooleanExpressionContext;
  }
  public reduceNumericalExpression(): ReduceNumericalExpressionContext {
    return this.getTypedRuleContext(
      ReduceNumericalExpressionContext,
      0,
    ) as ReduceNumericalExpressionContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_reduceExpression;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterReduceExpression) {
      listener.enterReduceExpression(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitReduceExpression) {
      listener.exitReduceExpression(this);
    }
  }
}

export class CondenseExpressionOperatorContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public PLUS(): TerminalNode {
    return this.getToken(WCPSParser.PLUS, 0);
  }
  public MULTIPLICATION(): TerminalNode {
    return this.getToken(WCPSParser.MULTIPLICATION, 0);
  }
  public MIN(): TerminalNode {
    return this.getToken(WCPSParser.MIN, 0);
  }
  public MAX(): TerminalNode {
    return this.getToken(WCPSParser.MAX, 0);
  }
  public AND(): TerminalNode {
    return this.getToken(WCPSParser.AND, 0);
  }
  public OR(): TerminalNode {
    return this.getToken(WCPSParser.OR, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_condenseExpressionOperator;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCondenseExpressionOperator) {
      listener.enterCondenseExpressionOperator(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCondenseExpressionOperator) {
      listener.exitCondenseExpressionOperator(this);
    }
  }
}

export class GeneralCondenseExpressionContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_generalCondenseExpression;
  }
  public copyFrom(ctx: GeneralCondenseExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class GeneralCondenseExpressionLabelContext extends GeneralCondenseExpressionContext {
  constructor(parser: WCPSParser, ctx: GeneralCondenseExpressionContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public CONDENSE(): TerminalNode {
    return this.getToken(WCPSParser.CONDENSE, 0);
  }
  public condenseExpressionOperator(): CondenseExpressionOperatorContext {
    return this.getTypedRuleContext(
      CondenseExpressionOperatorContext,
      0,
    ) as CondenseExpressionOperatorContext;
  }
  public OVER(): TerminalNode {
    return this.getToken(WCPSParser.OVER, 0);
  }
  public axisIterator_list(): AxisIteratorContext[] {
    return this.getTypedRuleContexts(
      AxisIteratorContext,
    ) as AxisIteratorContext[];
  }
  public axisIterator(i: number): AxisIteratorContext {
    return this.getTypedRuleContext(
      AxisIteratorContext,
      i,
    ) as AxisIteratorContext;
  }
  public USING(): TerminalNode {
    return this.getToken(WCPSParser.USING, 0);
  }
  public coverageExpression(): CoverageExpressionContext {
    return this.getTypedRuleContext(
      CoverageExpressionContext,
      0,
    ) as CoverageExpressionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(WCPSParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(WCPSParser.COMMA, i);
  }
  public WHERE(): TerminalNode {
    return this.getToken(WCPSParser.WHERE, 0);
  }
  public booleanScalarExpression(): BooleanScalarExpressionContext {
    return this.getTypedRuleContext(
      BooleanScalarExpressionContext,
      0,
    ) as BooleanScalarExpressionContext;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterGeneralCondenseExpressionLabel) {
      listener.enterGeneralCondenseExpressionLabel(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitGeneralCondenseExpressionLabel) {
      listener.exitGeneralCondenseExpressionLabel(this);
    }
  }
}

export class CrsNameContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_crsName;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterCrsName) {
      listener.enterCrsName(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitCrsName) {
      listener.exitCrsName(this);
    }
  }
}

export class AxisNameContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_axisName;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterAxisName) {
      listener.enterAxisName(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitAxisName) {
      listener.exitAxisName(this);
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(WCPSParser.STRING_LITERAL, 0);
  }
  public TRUE(): TerminalNode {
    return this.getToken(WCPSParser.TRUE, 0);
  }
  public FALSE(): TerminalNode {
    return this.getToken(WCPSParser.FALSE, 0);
  }
  public REAL_NUMBER_CONSTANT(): TerminalNode {
    return this.getToken(WCPSParser.REAL_NUMBER_CONSTANT, 0);
  }
  public complexNumberConstant(): ComplexNumberConstantContext {
    return this.getTypedRuleContext(
      ComplexNumberConstantContext,
      0,
    ) as ComplexNumberConstantContext;
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_constant;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterConstant) {
      listener.enterConstant(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitConstant) {
      listener.exitConstant(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  constructor(
    parser?: WCPSParser,
    parent?: ParserRuleContext,
    invokingState?: number,
  ) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public SIMPLE_IDENTIFIER(): TerminalNode {
    return this.getToken(WCPSParser.SIMPLE_IDENTIFIER, 0);
  }
  public SIMPLE_IDENTIFIER_WITH_NUMBERS(): TerminalNode {
    return this.getToken(WCPSParser.SIMPLE_IDENTIFIER_WITH_NUMBERS, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(WCPSParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    return WCPSParser.RULE_identifier;
  }
  public enterRule(listener: WCPSListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  public exitRule(listener: WCPSListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
}

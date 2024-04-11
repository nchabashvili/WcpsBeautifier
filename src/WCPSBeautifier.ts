import {
  CharStream,
  CommonTokenStream,
  ParseTreeListener,
  ParseTreeWalker,
  ParserRuleContext,
} from 'antlr4';
import WCPSLexer from './grammar/WCPSLexer';
import WCPSParser, {
  ForClauseListContext,
  LetClauseListContext,
  ReturnClauseContext,
  WhereClauseContext,
  AxisIteratorContext, 
  BooleanScalarExpressionContext, 
  BooleanSwitchCaseCombinedExpressionContext,
  BooleanSwitchCaseCoverageExpressionContext, 
  CellCountExpressionContext,
  ClipCorridorExpressionContext, 
  ClipCurtainExpressionContext,
  ClipWKTExpressionContext,
  CondenseExpressionContext, 
  CoverageConstantExpressionContext,
  CoverageConstructorExpressionContext,
  CoverageExpressionContext, 
  CrsTransformExpressionContext,
  CrsTransformShorthandExpressionContext,
  DecodeCoverageExpressionContext, 
  DescribeCoverageExpressionContext,
  DimensionBoundConcatenationElementContext,
  DimensionCrsElementContext, 
  DimensionCrsListContext,
  DimensionGeoXYResolutionContext,
  DimensionGeoXYResolutionsListContext,
  DimensionIntervalElementContext, 
  DimensionIntervalListContext,
  DimensionPointElementContext, 
  DimensionPointListContext, 
  DomainExpressionContext, 
  DomainIntervalsContext, 
  EncodedCoverageExpressionContext, 
  ForClauseContext,
  GeneralCondenseExpressionContext, 
  GeoXYAxisLabelAndDomainResolutionContext,
  GetComponentExpressionContext,
  ImageCrsDomainByDimensionExpressionContext,
  ImageCrsDomainExpressionContext, 
  LetClauseContext, 
  NumericalScalarExpressionContext,
  ProcessingExpressionContext, 
  RangeConstructorElementContext, 
  ReduceBooleanExpressionContext,
  ReduceExpressionContext, 
  ScalarExpressionContext,
  ScalarValueCoverageExpressionContext,
  ScaleDimensionPointElementContext, 
  ScaleDimensionPointListContext, 
  SwitchCaseDefaultElementContext, 
  SwitchCaseElementContext, 
  SwitchCaseExpressionContext, 
  TimeExtractorElementContext,
  TimeIntervalElementContext, 
  TimeTruncatorElementContext, 
  UdfExpressionContext, 
  UnaryArithmeticExpressionContext, 
  UnaryBooleanExpressionContext, 
  UnaryModExpressionContext,
  UnaryPowerExpressionContext, 
  WktExpressionContext, 
  WktPointElementListContext, 
  WktPointsContext,
  RangeConstructorExpressionContext
} from './grammar/WCPSParser';

import { CaseTransforms, indent, transformCase, indentNewLine } from './utils';


// ParseTreeBeautifier
export interface BeautifyOptions {
  tabSize: number;
  useTabs: boolean;
  caseTransform: CaseTransforms;
}

export class WCPSBeautifier extends ParseTreeListener {
  public output: Array<string> = [];
  public options: BeautifyOptions;

  private prefix: string;

  constructor(options: BeautifyOptions) {
    super();

    this.options = options;
    if (this.options.useTabs) {
      this.prefix = "\t";
    } else {
      this.prefix = " ".repeat(this.options.tabSize);
    }
  }

  enterEveryRule(node: ParserRuleContext): void {
    if (node instanceof ForClauseListContext) {
      const forClauseSet = node.forClause_list().map(this.beautifyForClause.bind(this));

      const forClauseList = forClauseSet.join(`,\n${this.prefix}`);
      this.output.push(`${transformCase(node.FOR().getText(), this.options.caseTransform)} ${forClauseList}`);
    }

    if (node instanceof LetClauseListContext) {
      const letClauseSet = node.letClause_list().map(this.BeautifyLetClause.bind(this));

      const letClauseList = letClauseSet.join(`,\n`);
      this.output.push(`${transformCase(node.LET().getText(), this.options.caseTransform)} ${indentNewLine(letClauseList, this.prefix)}`);
    }

    if (node instanceof WhereClauseContext) {
      const beautifiedWhere = this.BeautifyWhereClause(node);
      this.output.push(beautifiedWhere);
    }

    if (node instanceof ReturnClauseContext) {
      const beautifiedReturn = this.BeautifyReturnClause(node);
      this.output.push(beautifiedReturn);
    }
  }

  UnexpectedTokenException(context: string, node: any) {
    return new Error(`${context}: Unexpected token: ${node.getText()}`);
  }

  BeautifyEncodedCoverageExpression(node: EncodedCoverageExpressionContext): string {

    let output = transformCase(node.ENCODE().getText(), this.options.caseTransform);
    output += '(\n';
    // LUKA: indent example
    output += indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix);
    output += `,\n${indent(node.STRING_LITERAL().getText(), this.prefix)}`;
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
  }

  beautifyForClause(node: ForClauseContext): string {
    const coverageVariableName = node.coverageVariableName().getText();
    const coverageIdForClauseList = node.coverageIdForClause_list().map((node) => node.getText());
    const hasLeft = node.LEFT_PARENTHESIS() != null;
    const hasRight = node.RIGHT_PARENTHESIS() != null;

    let forClause = '';
    forClause += coverageVariableName;
    forClause += ' in ';
    if (hasLeft) forClause += '(';
    forClause += coverageIdForClauseList.join(", ");
    if (hasRight) forClause += ')';

    return forClause;
  }

  BeautifyLetClause(node: LetClauseContext): string {
    const DimensionIntervalList = node.letClauseWithDimensionIntervalList();
    const letClauseWithCoverageExpression = node.letClauseWithCoverageExpression();

    let letClause = '';

    if (DimensionIntervalList != null) {
      const coverageVariableName = DimensionIntervalList.coverageVariableName().getText();
      const dimensionIntervalList = this.BeautifyDimensionIntervalList(DimensionIntervalList.dimensionIntervalList());
      letClause += coverageVariableName;
      letClause += ' := ';
      letClause += '[';
      letClause += indentNewLine(dimensionIntervalList, this.prefix);
      letClause += ']';
    }

    if (letClauseWithCoverageExpression != null) {
      const coverageVariableName = letClauseWithCoverageExpression.coverageVariableName().getText();

      letClause += coverageVariableName;
      letClause += ' := ';
      if (letClauseWithCoverageExpression.coverageExpression() != null) {
        const coverageExpression = this.BeautifyCoverageExpression(letClauseWithCoverageExpression.coverageExpression());
        letClause += indentNewLine(coverageExpression, this.prefix);
      }
      if (letClauseWithCoverageExpression.wktExpression() != null) {
        const wktExpression = this.BeautifyWktExpression(letClauseWithCoverageExpression.wktExpression());
        letClause += indentNewLine(wktExpression, this.prefix);
      }
    }

    return letClause;
  }

  BeautifyWhereClause(node: WhereClauseContext): string {
    const hasLeft = node.LEFT_PARENTHESIS() != null;
    const hasRight = node.RIGHT_PARENTHESIS() != null;

    let whereClause = `${transformCase(node.WHERE().getText(), this.options.caseTransform)}`;
    if (hasLeft) {
      whereClause += '(';
    } else {
      whereClause += ' ';
    }
    if (this.BeautifyCoverageExpression(node.coverageExpression()).length > 35) {
      whereClause += '\n' + indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix) + '\n';
    } else {
      whereClause += this.BeautifyCoverageExpression(node.coverageExpression());
    }
    if (hasRight) whereClause += ')';

    return whereClause;
  }

  BeautifyReturnClause(node: ReturnClauseContext): string {
    const processingExpression = node.processingExpression();
    const hasLeft = node.LEFT_PARENTHESIS() !== null;
    const hasRight = node.RIGHT_PARENTHESIS() !== null;

    let result = `${transformCase(node.RETURN().getText(), this.options.caseTransform)}`;
    if (hasLeft) result += '(';
    result += '\n';
    result += indent(this.BeautifyProcessingExpression(processingExpression), this.prefix);
    if (hasRight) result += '\n)';

    return result;
  }

  BeautifyProcessingExpression(node: ProcessingExpressionContext): string {
    if (node.encodedCoverageExpression() != null) {
      return this.BeautifyEncodedCoverageExpression(node.encodedCoverageExpression());
    }
    if (node.describeCoverageExpression() != null) {
      return this.BeautifyDescribeCoverageExpression(node.describeCoverageExpression());
    }
    if (node.scalarValueCoverageExpression() != null) {

      return this.BeautifyScalarValueCoverageExpression(node.scalarValueCoverageExpression());
    }
    if (node.scalarExpression() != null) {

      return this.BeautifyScalarExpression(node.scalarExpression());
    }
    if (node.getComponentExpression() != null) {

      return this.BeautifyGetComponentExpression(node.getComponentExpression());
    }

    throw this.UnexpectedTokenException('ProcessingExpression', node);
  }

  BeautifyGetComponentExpression(node: GetComponentExpressionContext): string {
    if (node.coverageIdentifierExpression() != null) {

      return `${transformCase(node.coverageIdentifierExpression().IDENTIFIER().getText(), this.options.caseTransform)}(\n${this.BeautifyCoverageExpression(node.coverageIdentifierExpression().coverageExpression())}\n)`;
    }
    if (node.coverageCrsSetExpression() != null) {

      return `${transformCase(node.coverageCrsSetExpression().CRSSET().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageCrsSetExpression().coverageExpression())})`;
    }
    if (node.domainExpression() != null) {

      return this.BeautifyDomainExpression(node.domainExpression());
    }
    if (node.imageCrsDomainExpression() != null) {

      return this.BeautifyImageCrsDomainExpression(node.imageCrsDomainExpression());
    }
    if (node.imageCrsDomainByDimensionExpression() != null) {

      return this.BeautifyImageCrsDomainByDimensionExpression(node.imageCrsDomainByDimensionExpression());
    }
    if (node.imageCrsExpression() != null) {
      const covExp = node.imageCrsExpression().coverageExpression();


      return `${transformCase(node.imageCrsExpression().IMAGECRS().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(covExp)})`;
    }
    if (node.cellCountExpression() != null) {

      return `${transformCase(node.cellCountExpression().CELLCOUNT().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.cellCountExpression().coverageExpression())})`;
    }
    if (node.coverageExpressionNullSetRetrieving() != null) {

      return `${transformCase(node.coverageExpressionNullSetRetrieving().NULLSET().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpressionNullSetRetrieving().coverageExpression())})`;
    }

    throw this.UnexpectedTokenException('GetComponentExpression', node);
  }


  BeautifyDescribeCoverageExpression(node: DescribeCoverageExpressionContext): string {
    let output = `${transformCase(node.DESCRIBE_COVERAGE().getText(), this.options.caseTransform)}(\n`;
    output += indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix);
    output += `, ${node.STRING_LITERAL().getText()}`;
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
  }

  BeautifyScalarValueCoverageExpression(node: ScalarValueCoverageExpressionContext): string {
    let output = "";

    if (node.LEFT_PARENTHESIS != null) output += "(";
    if (this.BeautifyCoverageExpression(node.coverageExpression()).length > 25) {
      output += '\n' + indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix) + '\n';
    } else {
      output += this.BeautifyCoverageExpression(node.coverageExpression());
    }
    if (node.RIGHT_PARENTHESIS != null) output += ")";

    return output;
  }

  BeautifyScalarExpression(node: ScalarExpressionContext): string {
    if (node.geoXYAxisLabelAndDomainResolution() != null) {

      return this.BeautifyGeoXYAxisLabelAndDomainResolution(node.geoXYAxisLabelAndDomainResolution());
    }
    if (node.booleanScalarExpression() != null) {

      return this.BeautifyBooleanScalarExpression(node.booleanScalarExpression());
    }
    if (node.numericalScalarExpression() != null) {

      return this.BeautifyNumericalScalarExpression(node.numericalScalarExpression());
    }
    if (node.stringScalarExpression() != null) {
      return node.stringScalarExpression().getText();
    }
    if (node.starExpression() != null) {
      return node.starExpression().getText();
    }
    if (node.domainIntervals() != null) {

      return this.BeautifyDomainIntervals(node.domainIntervals());
    }
    if (node.cellCountExpression() != null) {

      return `${transformCase(node.cellCountExpression().CELLCOUNT().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.cellCountExpression().coverageExpression())})`;
    }

    throw this.UnexpectedTokenException('ScalarExpression', node);
  }

  BeautifyCellCountExpression(node: CellCountExpressionContext): string {
    if (this.BeautifyCoverageExpression(node.coverageExpression()).length > 25) {
      return `\n${transformCase(node.CELLCOUNT().getText(), this.options.caseTransform)}(${indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix)}\n)`;
    }
    return `${transformCase(node.CELLCOUNT().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpression())})`;
  }

  BeautifyDomainIntervals(node: DomainIntervalsContext): string {

    let output = '';

    if (node.domainExpression() != null) {
      output += this.BeautifyDomainExpression(node.domainExpression());
    }
    if (node.imageCrsDomainExpression() != null) {
      const imgCrsDom = node.imageCrsDomainExpression();
      output += transformCase(node.imageCrsDomainExpression().IMAGECRSDOMAIN().getText(), this.options.caseTransform)
      output += '(';
      output += `${this.BeautifyCoverageExpression(imgCrsDom.coverageExpression())})`;
    }
    if (node.imageCrsDomainByDimensionExpression() != null) {
      const imgCrsDomDim = node.imageCrsDomainByDimensionExpression();
      output += transformCase(node.imageCrsDomainByDimensionExpression().IMAGECRSDOMAIN().getText(), this.options.caseTransform);
      output += '(';
      output += `${this.BeautifyCoverageExpression(imgCrsDomDim.coverageExpression())}, ${imgCrsDomDim.axisName().getText()}`;
    }

    if (node.domainPropertyValueExtraction() != null) {
      output += `.${node.domainPropertyValueExtraction().getText()}`;
    }
    return output;
  }

  BeautifyImageCrsDomainByDimensionExpression(node: ImageCrsDomainByDimensionExpressionContext): string {
    return `${transformCase(node.IMAGECRSDOMAIN().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpression())})`;
  }

  BeautifyImageCrsDomainExpression(node: ImageCrsDomainExpressionContext): string {
    return `${transformCase(node.IMAGECRSDOMAIN().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpression())})`;
  }

  BeautifyDomainExpression(node: DomainExpressionContext): string {
    let output = '';
    output += transformCase(node.DOMAIN().getText(), this.options.caseTransform);
    output += '(';
    output += this.BeautifyCoverageExpression(node.coverageExpression());
    if (node.axisName() != null) {
      output += `, ${node.axisName().getText()}`
      if (node.crsName() != null) {
        output += `, ${node.crsName().getText()})`
      }
      output += ')';
    }
    return output;
  }


  BeautifyGeneralCondenseExpression(node: GeneralCondenseExpressionContext): string {
    const condenseExprOperator = node.condenseExpressionOperator().getText();
    const axisIteratorList = node.axisIterator_list().map(this.BeautifyAxisIterator.bind(this));
    const whereClause = node.whereClause();
    const covExpr = node.coverageExpression();

    const lines = [
      `${transformCase(node.CONDENSE().getText(), this.options.caseTransform)} ${condenseExprOperator}`,
      `${transformCase(node.OVER().getText(), this.options.caseTransform)} ${axisIteratorList.join(', ')}`,
    ];

    if (whereClause !== null) {
      lines.push(this.BeautifyWhereClause(whereClause));
    }

    lines.push(`${transformCase(node.USING().getText(), this.options.caseTransform)} ${this.BeautifyCoverageExpression(covExpr)}`);

    return lines.join('\n');
  }

  BeautifyAxisIterator(node: AxisIteratorContext): string {
    const covName = node.coverageVariableName().getText();
    const axisName = node.axisName().getText();
    const dimElements = node.dimensionBoundConcatenationElement_list().map(this.BeautifyDimensionBoundConcatenationElement.bind(this)).join(':');

    if (node.domainIntervals() != null) {
      const domInt = this.BeautifyDomainIntervals(node.domainIntervals());
      if (node.regularTimeStep() != null) {
        const regTimeStp = node.regularTimeStep().getText();
        if (node.ASC() != null) {
          return `${covName} ${axisName}(${domInt}:${regTimeStp}) ${transformCase(node.ASC().getText(), this.options.caseTransform)}`;
        }
        if (node.DESC() != null) {
          return `${covName} ${axisName}(${domInt}:${regTimeStp}) ${transformCase(node.DESC().getText(), this.options.caseTransform)}`;
        }
        return `${covName} ${axisName}(${domInt}:${regTimeStp})`;
      }
      if (node.ASC() != null) {
        return `${covName} ${axisName}(${domInt}) ${transformCase(node.ASC().getText(), this.options.caseTransform)}`;
      }
      if (node.DESC() != null) {
        return `${covName} ${axisName}(${domInt}) ${transformCase(node.DESC().getText(), this.options.caseTransform)}`;
      }
      return `${covName} ${axisName}(${domInt})`;
    }
    if (node.regularTimeStep() != null) {
      const regTimeStp = node.regularTimeStep().getText();
      if (node.ASC() != null) {
        return `${covName} ${axisName}(${dimElements}:${regTimeStp}) ${transformCase(node.ASC().getText(), this.options.caseTransform)}`;
      }
      if (node.DESC() != null) {
        return `${covName} ${axisName}(${dimElements}:${regTimeStp}) ${transformCase(node.DESC().getText(), this.options.caseTransform)}`;
      }
      return `${covName} ${axisName}(${dimElements}:${regTimeStp})`;
    }
    if (node.ASC() != null) {
      return `${covName} ${axisName}(${dimElements}) ${transformCase(node.ASC().getText(), this.options.caseTransform)}`;
    }
    if (node.DESC() != null) {
      return `${covName} ${axisName}(${dimElements}) ${transformCase(node.DESC().getText(), this.options.caseTransform)}`;
    }

    return `${covName} ${axisName}(${dimElements})`;
  }

  BeautifyReduceExpression(node: ReduceExpressionContext): string {
    if (node.reduceBooleanExpression() != null) {
      const redBool = node.reduceBooleanExpression();
      const operator = redBool.reduceBooleanExpressionOperator().getText();
      const covExpr = redBool.coverageExpression();

      return `${operator}(${this.BeautifyCoverageExpression(covExpr)})`;
    }
    if (node.reduceNumericalExpression() != null) {
      const redNum = node.reduceNumericalExpression();
      const operator = redNum.reduceNumericalExpressionOperator().getText();
      const covExpr = redNum.coverageExpression();

      return `${operator}(${this.BeautifyCoverageExpression(covExpr)})`;
    }

    throw this.UnexpectedTokenException('ReduceExpression', node);
  }

  BeautifyGeoXYAxisLabelAndDomainResolution(node: GeoXYAxisLabelAndDomainResolutionContext): string {
    let output = "";
    output += node.COVERAGE_NAME().getText();
    output += "(";
    output += this.BeautifyCoverageExpression(node.coverageExpression());
    output += `, ${node.axisName().getText()}`;
    if (node.crsName() != null) output += `, ${node.crsName().getText()}).`;
    output += node.domainPropertyValueExtraction().getText();
    return output;
  }

  BeautifyBooleanScalarExpression(node: BooleanScalarExpressionContext): string {
    if (node.reduceBooleanExpression() != null) {
      return this.BeautifyReduceBooleanExpression(node.reduceBooleanExpression());
    }

    if (node.booleanConstant() != null) {
      return node.booleanConstant().getText();
    }

    if (node.booleanUnaryOperator() != null) {

      let output = `${transformCase(node.booleanUnaryOperator().NOT().getText(), this.options.caseTransform)} `;

      if (node.LEFT_PARENTHESIS() != null) output += '(';
      output += this.BeautifyBooleanScalarExpression(node.booleanScalarExpression(0));
      if (node.RIGHT_PARENTHESIS() != null) output += ')';

      return output;
    }

    if (node.booleanOperator() != null) {
      const a = this.BeautifyBooleanScalarExpression(node.booleanScalarExpression(0));
      const operator = node.booleanOperator().getText();
      const b = this.BeautifyBooleanScalarExpression(node.booleanScalarExpression(1));
      return `${a} ${operator} ${b}`;
    }

    if (node.numericalComparissonOperator() != null) {
      let output = "";

      output += this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(0));
      output += node.numericalComparissonOperator().getText();
      output += this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(1));

      return output;
    }

    if (node.stringOperator != null) {
      let output = "";

      output += node.stringScalarExpression(0).getText();
      output += node.stringOperator().getText();
      output += node.stringScalarExpression(1);

      return output;
    }

    throw this.UnexpectedTokenException('BooleanScalarExpression', node);
  }

  BeautifyReduceBooleanExpression(node: ReduceBooleanExpressionContext): string {
    let output = '';

    output += node.reduceBooleanExpressionOperator().getText();
    output += `(${this.BeautifyCoverageExpression(node.coverageExpression())})`;

    return output;
  }

  BeautifyNumericalScalarExpression(node: NumericalScalarExpressionContext): string {
    let output = "";
    if (node.number_()) {
      return node.getText();
    }

    if (node.NAN_NUMBER_CONSTANT()) {
      return `${transformCase(node.NAN_NUMBER_CONSTANT().getText(), this.options.caseTransform)}`;
    }

    if (node.complexNumberConstant()) {
      return node.complexNumberConstant().getText().replace(',', ', ');
    }

    if (node.numericalUnaryOperation() != null) {
      const operator = node.numericalUnaryOperation().getText();
      return `${operator}(${this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(0))})`;
    }

    if (node.trigonometricOperator() != null) {
      const operator = node.trigonometricOperator().getText();
      return `${operator}(${this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(0))})`
    }

    if (node.numericalOperator() != null) {
      const a = this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(0));
      const op = node.numericalOperator().getText();
      const b = this.BeautifyNumericalScalarExpression(node.numericalScalarExpression(1));

      return `${a} ${op} ${b}`;
    }

    if (node.condenseExpression() != null) {
      return this.BeautifyCondenseExpression(node.condenseExpression());
    }

    return output;
  }

  BeautifyCondenseExpression(node: CondenseExpressionContext): string {
    if (node.reduceExpression() != null) {
      return this.BeautifyReduceExpression(node.reduceExpression());
    }
    if (node.generalCondenseExpression() != null) {
      return `${this.BeautifyGeneralCondenseExpression(node.generalCondenseExpression())}`;
    }

    throw this.UnexpectedTokenException('CondenseExpression', node);
  }

  BeautifyCoverageExpression(node: CoverageExpressionContext): string {

    if (node.coverageExpressionInParenthesis() != null) {
      return `(${this.BeautifyCoverageExpression(node.coverageExpressionInParenthesis().coverageExpression())})`;
    }

    if (node.fieldName() != null) {
      const fieldName = node.fieldName().getText();
      return `${this.BeautifyCoverageExpression(node.coverageExpression(0))}.${fieldName}`;
    }

    if (node.domainIntervals() != null) {
      return this.BeautifyDomainIntervals(node.domainIntervals());
    }

    if (node.scalarExpression() != null) {
      return this.BeautifyScalarExpression(node.scalarExpression());
    }

    if (node.booleanOperator() != null) {
      return `${this.BeautifyCoverageExpression(node.coverageExpression(0))} ${node.booleanOperator().getText()} ${this.BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.numericalComparissonOperator() != null) {
      return `${this.BeautifyCoverageExpression(node.coverageExpression(0))} ${node.numericalComparissonOperator().getText()} ${this.BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.coverageArithmeticOperator() != null) {
      return `${this.BeautifyCoverageExpression(node.coverageExpression(0))} ${node.coverageArithmeticOperator().getText()} ${this.BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.decodeCoverageExpression() != null) {
      return this.BeautifyDecodeCoverageExpression(node.decodeCoverageExpression());
    }

    if (node.trigonometricExpression() != null) {
      return `${node.trigonometricExpression().getText()}(${this.BeautifyCoverageExpression(node.coverageExpression(0))})`;
    }

    if (node.exponentialExpression() != null) {
      return `${node.exponentialExpression().exponentialExpressionOperator().getText()}(${this.BeautifyCoverageExpression(node.coverageExpression(0))})`;
    }

    if (node.minBinaryExpression() != null) {
      return `${transformCase(node.minBinaryExpression().MIN().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpression(0))}, ${this.BeautifyCoverageExpression(node.coverageExpression(1))})`;
    }

    if (node.maxBinaryExpression() != null) {
      return `${transformCase(node.maxBinaryExpression().MAX().getText(), this.options.caseTransform)}(${this.BeautifyCoverageExpression(node.coverageExpression(0))}, ${this.BeautifyCoverageExpression(node.coverageExpression(1))})`;
    }

    if (node.castExpression() != null) {
      return `(${node.castExpression().rangeType().getText()})${this.BeautifyCoverageExpression(node.castExpression().coverageExpression())}`;
    }

    if (node.rangeConstructorExpression() != null) {
      return `{\n${indent(this.BeautifyRangeConstructorExpression(node.rangeConstructorExpression()), this.prefix)}\n}`;
    }

    if (node.clipWKTExpression() != null) {
      return this.BeautifyClipWKTExpression(node.clipWKTExpression());
    }

    if (node.unaryArithmeticExpression() != null) {
      return `${this.BeautifyunaryArithmeticExpression(node.unaryArithmeticExpression())}`;
    }
    if (node.clipCurtainExpression() != null) {
      return this.BeautifyClipCurtainExpression(node.clipCurtainExpression());
    }
    if (node.clipCorridorExpression() != null) {
      return this.BeautifyClipCorridorExpression(node.clipCorridorExpression());
    }
    if (node.crsTransformExpression() != null) {
      return this.BeautifyCrsTransformExpression(node.crsTransformExpression());
    }
    if (node.crsTransformShorthandExpression() != null) {
      return this.BeautifyCrsTransformShorthandExpression(node.crsTransformShorthandExpression());
    }
    if (node.switchCaseExpression() != null) {
      return this.BeautifySwitchCaseExpression(node.switchCaseExpression());
    }
    if (node.unaryPowerExpression() != null) {
      return this.BeautifyUnaryPowerExpression(node.unaryPowerExpression());
    }
    if (node.unaryModExpression() != null) {
      return this.BeautifyUnaryModExpression(node.unaryModExpression());
    }
    if (node.unaryBooleanExpression() != null) {
      return this.BeautifyUnaryBooleanExpression(node.unaryBooleanExpression());
    }
    if (node.udfExpression() != null) {
      return this.BeautifyUdfExpression(node.udfExpression());
    }
    if (node.timeExtractorElement() != null) {
      return this.BeautifyTimeExtractorElement(node.timeExtractorElement());
    }
    if (node.timeTruncatorElement() != null) {
      return this.BeautifyTimeTruncatorElement(node.timeTruncatorElement());
    }
    if (node.geoXYAxisLabelAndDomainResolution() != null) {
      return this.BeautifyGeoXYAxisLabelAndDomainResolution(node.geoXYAxisLabelAndDomainResolution());
    }
    if (node.coverageConstructorExpression() != null) {
      return this.BeautifyCoverageConstructorExpression(node.coverageConstructorExpression());
    }
    if (node.coverageConstantExpression() != null) {
      return this.BeautifyCoverageConstantExpression(node.coverageConstantExpression());
    }
    if (node.dimensionPointList() != null) {
      if (node.SLICE() != null) {
        const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
        const dimPointList = this.BeautifyDimensionPointList(node.dimensionPointList());

        return `${transformCase(node.SLICE().getText(), this.options.caseTransform)}(${covExp}, {${dimPointList}})`;
      }
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      return `${covExp}[${this.BeautifyDimensionPointList(node.dimensionPointList())}]`
    }
    if (node.dimensionIntervalList() != null) {
      const dimIntList = this.BeautifyDimensionIntervalList(node.dimensionIntervalList());
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      if (node.TRIM() != null) {
        return `${transformCase(node.TRIM().getText(), this.options.caseTransform)}(${covExp}, [${dimIntList}])`;
      }
      if (node.EXTEND() != null) {
        return `${transformCase(node.EXTEND().getText(), this.options.caseTransform)}(${covExp}, [${dimIntList}])`;
      }
      if (node.SCALE() != null) {
        return `${transformCase(node.SCALE().getText(), this.options.caseTransform)}(${covExp}, [${dimIntList}])`;
      }

      return `${covExp}[${dimIntList}]`;
    }
    if (node.coverageVariableName() != null) {
      if (node.coverageExpression(0) != null) {
        const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
        const covName = node.coverageVariableName().getText();
        if (node.EXTEND() != null) {
          return `${transformCase(node.EXTEND().getText(), this.options.caseTransform)}(${covExp}, [${covName}])`;
        }
        if (node.SCALE() != null) {
          return `${transformCase(node.SCALE().getText(), this.options.caseTransform)}(${covExp}, [${covName}])`;
        }
        return `${covExp}[${covName}]`;
      }

      return node.coverageVariableName().getText();
    }
    if (node.EXTEND() != null) {

      if (node.domainIntervals() != null) {

        const dimIntList = this.BeautifyDimensionIntervalList(node.dimensionIntervalList());
        const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
        return `${transformCase(node.EXTEND().getText(), this.options.caseTransform)}(${covExp}, {${dimIntList}})`;
      }
    }

    if (node.SCALE() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));

      if (node.domainIntervals() != null) {
        const domInt = this.BeautifyDomainIntervals(node.domainIntervals());
        return `${transformCase(node.SCALE().getText(), this.options.caseTransform)}(${covExp}, {${domInt}})`;
      }

      if (node.scalarExpression() != null) {
        const scal = this.BeautifyScalarExpression(node.scalarExpression());
        return `${transformCase(node.SCALE().getText(), this.options.caseTransform)}(${covExp}, {${scal}})`;
      }

      if (node.scaleDimensionPointList() != null) {
        const scaDimenPts = this.BeautifyScaleDimensionPointList(node.scaleDimensionPointList());
        return `${transformCase(node.SCALE().getText(), this.options.caseTransform)}(${covExp}, {${scaDimenPts}})`;
      }
    }

    if (node.NULL() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));

      if (node.NOT() != null) {
        return `${covExp}  is not null`
      }

      return `${covExp} is null`
    }

    if (node.nullSetFrom() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const covExp2 = this.BeautifyCoverageExpression(node.nullSetFrom().coverageExpression());

      return `${covExp} null values nullset(${covExp2})`;
    }

    if (node.nullMask() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const covExp2 = this.BeautifyCoverageExpression(node.nullMask().coverageExpression());

      return `${covExp} null mask ${covExp2}`;
    }

    if (node.nullMaskDiscard() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));

      return `${covExp} null mask discard`;
    }

    if (node.nullClause() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const nullSetMemberList = node.nullClause().nullSetMemberList_list().map(node => `[${node}]`).join(', ');

      if (node.nullClause().LEFT_BRACE() != null) {
        return `${covExp} null values {${nullSetMemberList}}`;
      }

      return `${covExp} null values ${nullSetMemberList}`;
    }

    if (node.OVERLAY() != null) {
      const covExp1 = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const covExp2 = this.BeautifyCoverageExpression(node.coverageExpression(1));

      return `${covExp1} ${transformCase(node.OVERLAY().getText(), this.options.caseTransform)} ${covExp2}`;
    }

    if (node.flipExpression() != null) {
      const covExp1 = this.BeautifyCoverageExpression(node.coverageExpression(0));

      return `${transformCase(node.flipExpression().FLIP().getText(), this.options.caseTransform)} ${covExp1} ${transformCase(node.flipExpression().ALONG().getText(), this.options.caseTransform)} ${node.flipExpression().axisName().getText()}`;
    }

    if (node.sortExpression() != null) {
      const covExp1 = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const covExp2 = this.BeautifyCoverageExpression(node.coverageExpression(1));
      const axisName = node.flipExpression().axisName().getText();

      if (node.sortExpression().sortingOrder() != null) {
        return `${transformCase(node.sortExpression().SORT().getText(), this.options.caseTransform)} ${covExp1} ${transformCase(node.flipExpression().ALONG().getText(), this.options.caseTransform)} ${axisName} ${node.sortExpression().sortingOrder().getText()} by ${covExp2}`;
      }

      return `${transformCase(node.sortExpression().SORT().getText(), this.options.caseTransform)} ${covExp1} ${transformCase(node.flipExpression().ALONG().getText(), this.options.caseTransform)} ${axisName} by ${covExp2}`;
    }

    if (node.polygonizeExpression() != null) {
      const covExp = this.BeautifyCoverageExpression(node.coverageExpression(0));
      const string = node.polygonizeExpression().STRING_LITERAL().getText();

      if (node.polygonizeExpression().INTEGER() != null) {
        return `${transformCase(node.polygonizeExpression().POLYGONIZE().getText(), this.options.caseTransform)}(${covExp}, ${string} ${node.polygonizeExpression().INTEGER().getText()}`;
      }

      return `${transformCase(node.polygonizeExpression().POLYGONIZE().getText(), this.options.caseTransform)}(${covExp}, ${string}`;
    }

    throw this.UnexpectedTokenException("coverage", node);
  }

  BeautifyScaleDimensionPointList(node: ScaleDimensionPointListContext): string {
    let output = node.scaleDimensionPointElement_list().map(this.BeautifyScaleDimensionPointElement.bind(this)).join(', ');

    return output;
  }

  BeautifyScaleDimensionPointElement(node: ScaleDimensionPointElementContext): string {
    const scalExpr = this.BeautifyScalarExpression(node.scalarExpression());
    const axisName = node.axisName().getText();

    return `${axisName}(${scalExpr})`;
  }

  BeautifyDimensionPointList(node: DimensionPointListContext): string {
    const output = node.dimensionPointElement_list().map(this.BeautifyDimensionPointElement.bind(this)).join(', ');

    return output;
  }

  BeautifyDimensionPointElement(node: DimensionPointElementContext): string {
    const axisName = node.axisName().getText();
    const covExp = this.BeautifyCoverageExpression(node.coverageExpression());

    if (node.crsName() != null) {
      const crsName = node.crsName().getText();
      return `${axisName}:${crsName}(${covExp})`;
    }
    return `${axisName}(${covExp})`;
  }

  BeautifyCoverageConstantExpression(node: CoverageConstantExpressionContext): string {
    const covName = node.COVERAGE_VARIABLE_NAME().getText();
    const axises = node.axisIterator_list().map(this.BeautifyAxisIterator.bind(this)).join(', ');
    const constants = node.constant_list().map(node => node.getText()).join('; ');
    let output = `${transformCase(node.COVERAGE().getText(), this.options.caseTransform)} ${covName}\n`;
    output += `${transformCase(node.OVER().getText(), this.options.caseTransform)} ${axises}\n${transformCase(node.VALUE().getText(), this.options.caseTransform)} ${transformCase(node.LIST().getText(), this.options.caseTransform)} <${constants}>`;
    return output;
  }

  BeautifyCoverageConstructorExpression(node: CoverageConstructorExpressionContext): string {
    const covName = node.COVERAGE_VARIABLE_NAME().getText();
    const covExpr = this.BeautifyCoverageExpression(node.coverageExpression());
    const axises = node.axisIterator_list().map(this.BeautifyAxisIterator.bind(this)).join(', ');
    let output = '';
    output += `${transformCase(node.COVERAGE().getText(), this.options.caseTransform)} ${covName}\n${transformCase(node.OVER().getText(), this.options.caseTransform)} ${axises}\n${transformCase(node.VALUES().getText(), this.options.caseTransform)} ${indentNewLine(covExpr, this.prefix)}`;

    return output;
  }

  BeautifyTimeTruncatorElement(node: TimeTruncatorElementContext): string {
    if (node.ALL_YEARS() != null) {
      return `${transformCase(node.ALL_YEARS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.ALL_MONTHS() != null) {
      return `${transformCase(node.ALL_MONTHS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.ALL_DAYS() != null) {
      return `${transformCase(node.ALL_DAYS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.ALL_HOURS() != null) {
      return `${transformCase(node.ALL_HOURS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.ALL_MINUTES() != null) {
      return `${transformCase(node.ALL_MINUTES().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.ALL_SECONDS() != null) {
      return `${transformCase(node.ALL_SECONDS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    throw this.UnexpectedTokenException("timeTruncatorElement", node);
  }

  BeautifyTimeExtractorElement(node: TimeExtractorElementContext): string {
    if (node.YEARS() != null) {
      return `${transformCase(node.YEARS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.MONTHS() != null) {
      return `${transformCase(node.MONTHS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.DAYS() != null) {
      return `${transformCase(node.DAYS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.HOURS() != null) {
      return `${transformCase(node.HOURS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.MINUTES() != null) {
      return `${transformCase(node.MINUTES().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    if (node.SECONDS() != null) {
      return `${transformCase(node.SECONDS().getText(), this.options.caseTransform)}(${this.BeautifyTimeIntervalElement(node.timeIntervalElement())})`;
    }
    throw this.UnexpectedTokenException("timeExtractionElement", node);
  }

  BeautifyTimeIntervalElement(node: TimeIntervalElementContext): string {
    if (node.domainExpression() != null) {
      return this.BeautifyDomainExpression(node.domainExpression());
    }
    const elements = node.dimensionBoundConcatenationElement_list().map(this.BeautifyDimensionBoundConcatenationElement.bind(this)).join(':');
    return elements;
  }

  BeautifyUdfExpression(node: UdfExpressionContext): string {
    const udfName = node.udfName().COVERAGE_VARIABLE_NAME_list().join(".");
    const coverageList = node.coverageExpressionList().coverageExpression_list().map(this.BeautifyCoverageExpression.bind(this)).join(", ");

    return `${udfName}(${coverageList})`;
  }

  BeautifyUnaryBooleanExpression(node: UnaryBooleanExpressionContext): string {
    const covExpr = this.BeautifyCoverageExpression(node.coverageExpression());

    if (node.numericalScalarExpression() != null) {
      const numScalExp = this.BeautifyNumericalScalarExpression(node.numericalScalarExpression());
      let output = `${transformCase(node.BIT().getText(), this.options.caseTransform)}`;
      if (covExpr.length + numScalExp.length > 2 * 35) {
        output += `(\n${indent(covExpr, this.prefix)},\n${indent(numScalExp, this.prefix)}\n)`;
      } else {
        output += `(${covExpr}, ${numScalExp})`;
      }

      return output;
    }
    if (node.coverageVariableName() != null) {
      const covName = node.coverageVariableName().getText();
      let output = `${transformCase(node.BIT().getText(), this.options.caseTransform)}`;
      if (covExpr.length + covName.length > 2 * 35) {
        output += `(\n${indent(covExpr, this.prefix)},\n${indent(covName, this.prefix)}\n)`
      } else {
        output += `(${covExpr}, ${covName})`;
      }
      return output;
    }
    let output = `${transformCase(node.NOT().getText(), this.options.caseTransform)}`;
    if (covExpr.length > 35) {
      output += `(\n${indent(covExpr, this.prefix)}\n)`;
    } else {
      output += `(${covExpr})`;
    }
    return output;
  }

  BeautifyUnaryModExpression(node: UnaryModExpressionContext): string {
    const covExpr = this.BeautifyCoverageExpression(node.coverageExpression());

    if (node.coverageVariableName() != null) {
      const covName = node.coverageVariableName().getText();
      let output = `${transformCase(node.MOD().getText(), this.options.caseTransform)}`;
      if (covExpr.length + covName.length > 2 * 35) {
        output += `(\n${indent(covExpr, this.prefix)},\n${indent(covName, this.prefix)}\n)`;
        return output;
      }
      output += `(${covExpr}, ${covName})`;
      return output;
    }
    const numScalExp = this.BeautifyNumericalScalarExpression(node.numericalScalarExpression());
    let output = `${transformCase(node.MOD().getText(), this.options.caseTransform)}`;
    if (covExpr.length + numScalExp.length > 2 * 35) {
      output += `(\n${indent(covExpr, this.prefix)},\n${indent(numScalExp, this.prefix)}\n)`;
      return output;
    }
    output += `(${covExpr}, ${numScalExp})`;
    return output;
  }

  BeautifyUnaryPowerExpression(node: UnaryPowerExpressionContext): string {

    const covExpr = this.BeautifyCoverageExpression(node.coverageExpression());
    const numScalExp = this.BeautifyNumericalScalarExpression(node.numericalScalarExpression());
    let output = `${transformCase(node.POWER().getText(), this.options.caseTransform)}`;

    if (node.coverageVariableName() != null) {
      const covName = node.coverageVariableName().getText();

      if (covExpr.length + covName.length > 2 * 35) {
        output += `(\n${indent(covExpr, this.prefix)},\n${indent(covName, this.prefix)}\n)`;
        return output;
      }
      output += `(${covExpr}, ${covName})`;
      return output;
    }

    if (covExpr.length + numScalExp.length > 2 * 35) {
      output += `(\n${indent(covExpr, this.prefix)},\n${indent(numScalExp, this.prefix)}\n)`;
      return output;
    }
    output += `(${covExpr}, ${numScalExp})`;
    return output;
  }

  BeautifySwitchCaseExpression(node: SwitchCaseExpressionContext): string {
    let output = `${transformCase(node.SWITCH().getText(), this.options.caseTransform)}\n`;
    const cases = node.switchCaseElementList().switchCaseElement_list().map(this.BeautifySwitchCaseElement.bind(this)).join(`\n`);
    output += indent(cases, this.prefix);
    output += "\n";
    output += indent(this.BeautifySwitchCaseDefaultElement(node.switchCaseDefaultElement()), this.prefix);

    return output;
  }

  BeautifySwitchCaseDefaultElement(node: SwitchCaseDefaultElementContext): string {
    const ret = `${transformCase(node.RETURN().getText(), this.options.caseTransform)} ${this.BeautifyCoverageExpression(node.coverageExpression())}`;
    return `${transformCase(node.DEFAULT().getText(), this.options.caseTransform)}\n${indent(ret, this.prefix)}`;
  }

  BeautifySwitchCaseElement(node: SwitchCaseElementContext): string {
    const ret = `${transformCase(node.RETURN().getText(), this.options.caseTransform)} ${this.BeautifyCoverageExpression(node.coverageExpression())}`;
    return `${transformCase(node.CASE().getText(), this.options.caseTransform)} ${this.BeautifyBooleanSwitchCaseCombinedExpression(node.booleanSwitchCaseCombinedExpression())}\n${indent(ret, this.prefix)}`;
  }

  BeautifyBooleanSwitchCaseCombinedExpression(node: BooleanSwitchCaseCombinedExpressionContext): string {
    if (node.booleanOperator() != null) {
      return `${this.BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(0))} ${node.booleanOperator().getText()} ${this.BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(1))}`
    }
    return `${this.BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(0))}`
  }

  BeautifyBooleanSwitchCaseCoverageExpression(node: BooleanSwitchCaseCoverageExpressionContext): string {
    const covName1 = this.BeautifyCoverageExpression(node.coverageExpression(0));

    if (node.NULL() != null) {
      if (node.NOT() != null) {
        if (covName1.length > 35) {
          return `${indent(covName1, this.prefix)} is not ${transformCase(node.NULL().getText(), this.options.caseTransform)}`;
        }
        return `${covName1} is not ${transformCase(node.NULL().getText(), this.options.caseTransform)}`;
      }
      if (covName1.length > 35) {
        return `${indent(covName1, this.prefix)} is ${transformCase(node.NULL().getText(), this.options.caseTransform)}`;
      }
      return `${covName1} is ${transformCase(node.NULL().getText(), this.options.caseTransform)}`;
    }
    const covName2 = this.BeautifyCoverageExpression(node.coverageExpression(1));
    const operator = node.numericalComparissonOperator().getText();
    if (covName1.length + covName2.length > 2 * 35) {
      return `${indent(covName1, this.prefix)}\n${operator}\n${indent(covName2, this.prefix)}`;
    }
    return `${covName1} ${operator} ${covName2}`;
  }

  BeautifyCrsTransformShorthandExpression(node: CrsTransformShorthandExpressionContext): string {
    const covName = this.BeautifyCoverageExpression(node.coverageExpression());
    const crsName = node.crsName().getText();

    if (node.interpolationType() != null) {
      const intType = node.interpolationType().getText();

      if (node.dimensionGeoXYResolutionsList() != null) {
        const dimXY = this.BeautifyDimensionGeoXYResolutionsList(node.dimensionGeoXYResolutionsList());

        if (node.dimensionIntervalList() != null) {
          const dimIntervalList = this.BeautifyDimensionIntervalList(node.dimensionIntervalList());
          return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(crsName, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}},\n{${indent(dimIntervalList, this.prefix)}}\n)`;
        }

        if (node.domainExpression() != null) {
          const domainExp = this.BeautifyDomainExpression(node.domainExpression());
          return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(crsName, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}},\n{${indent(domainExp, this.prefix)}}\n)`;
        }

        return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},${indent(crsName, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}}\n)`;
      }

      return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(crsName, this.prefix)},\n{${indent(intType, this.prefix)}}\n)`;
    }

    return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(crsName, this.prefix)}\n)`;
  }


  BeautifyCrsTransformExpression(node: CrsTransformExpressionContext): string {
    const covName = this.BeautifyCoverageExpression(node.coverageExpression());
    const dimCrsList = this.BeautifyDimensionCrsList(node.dimensionCrsList());

    if (node.interpolationType() != null) {
      const intType = node.interpolationType().getText();

      if (node.dimensionGeoXYResolutionsList() != null) {
        const dimXY = this.BeautifyDimensionGeoXYResolutionsList(node.dimensionGeoXYResolutionsList());

        if (node.dimensionIntervalList() != null) {
          const dimIntervalList = this.BeautifyDimensionIntervalList(node.dimensionIntervalList());
          return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(dimCrsList, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}},\n{${indent(dimIntervalList, this.prefix)}}\n)`;
        }

        if (node.domainExpression() != null) {
          const domainExp = this.BeautifyDomainExpression(node.domainExpression());
          return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(dimCrsList, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}},\n{${indent(domainExp, this.prefix)}}\n)`;
        }

        return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(dimCrsList, this.prefix)},\n{${indent(intType, this.prefix)}},\n{${indent(dimXY, this.prefix)}}\n)`;
      }

      return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(dimCrsList, this.prefix)},\n{${indent(intType, this.prefix)}}\n)`;
    }
    
    return `${transformCase(node.CRS_TRANSFORM().getText(), this.options.caseTransform)}(\n${indent(covName, this.prefix)},\n${indent(dimCrsList, this.prefix)}\n)`;
  }

  BeautifyDimensionCrsList(node: DimensionCrsListContext): string {
    let output = '';
    output += node.dimensionCrsElement_list().map(this.BeautifyDimensionCrsElement.bind(this)).join(", ");
    return output;
  }

  BeautifyDimensionCrsElement(node: DimensionCrsElementContext): string {
    return `${node.axisName().getText()}:${node.crsName().getText()}`;
  }

  BeautifyDimensionGeoXYResolutionsList(node: DimensionGeoXYResolutionsListContext): string {
    let output = '';

    output += node.dimensionGeoXYResolution_list().map(this.BeautifyDimensionGeoXYResolution.bind(this)).join(", ");

    return output;
  }

  BeautifyDimensionGeoXYResolution(node: DimensionGeoXYResolutionContext): string {
    const covName = node.COVERAGE_VARIABLE_NAME().getText();
    const covExpr = this.BeautifyCoverageExpression(node.coverageExpression());

    return `${covName}:${covExpr}`;
  }

  BeautifyDimensionIntervalList(node: DimensionIntervalListContext): string {
    let output = '';

    output = node.dimensionIntervalElement_list().map(this.BeautifyDimensionIntervalElement.bind(this)).join(", ");

    return output;
  }

  BeautifyDimensionIntervalElement(node: DimensionIntervalElementContext): string {
    const axName = node.axisName().getText();
    const ConcElements = node.dimensionBoundConcatenationElement_list().map(this.BeautifyDimensionBoundConcatenationElement.bind(this)).join(":");

    if (node.imageCrsDomainByDimensionExpression() != null) {
      const img = this.BeautifyImageCrsDomainByDimensionExpression(node.imageCrsDomainByDimensionExpression());
      if (node.crsName() != null) {
        const crsName = node.crsName().getText();
        return `${axName}:${crsName}(${img})`;
      }
      return `${axName}(${img})`;
    }
    if (node.crsName() != null) {
      const crsName = node.crsName().getText();
      return `${axName}:${crsName}(${ConcElements})`;
    }
    return `${axName}(${ConcElements})`;
  }

  BeautifyDimensionBoundConcatenationElement(node: DimensionBoundConcatenationElementContext): string {
    let output = '';

    output = node.coverageExpression_list().map(this.BeautifyCoverageExpression.bind(this)).join('.');

    return output;
  }

  BeautifyClipCorridorExpression(node: ClipCorridorExpressionContext): string {
    const covNam = this.BeautifyCoverageExpression(node.coverageExpression());
    const label1 = node.corridorProjectionAxisLabel1().getText();
    const label2 = node.corridorProjectionAxisLabel2().getText();
    const wkt1 = node.corridorWKTLabel1().wktExpression().getText();
    const wkt2 = node.corridorWKTLabel2().wktExpression().getText();

    const clip = transformCase(node.CLIP().getText(), this.options.caseTransform);
    const corridor = transformCase(node.CORRIDOR().getText(), this.options.caseTransform);
    const projection = transformCase(node.PROJECTION().getText(), this.options.caseTransform);

    if (node.DISCRETE() != null) {
      const discrete = transformCase(node.DISCRETE().getText(), this.options.caseTransform);
      if (node.crsName() != null) {
        const crsName = node.crsName().getText();

        return `${clip}(\n${indent(covNam, this.prefix)},\n${corridor}(\n${projection}(\n${label1}, ${label2}\n), ${wkt1}, ${wkt2}, ${discrete}),\n${crsName})`;
      }
      return `${clip}(\n${indent(covNam, this.prefix)},\n${corridor}(\n${projection}(\n${label1}, ${label2}\n), ${wkt1}, ${wkt2}, ${discrete}))`;
    }

    return `${clip}(\n${indent(covNam, this.prefix)},\n${corridor}(\n${projection}(\n${label1}, ${label2}\n), ${wkt1}, ${wkt2}))`;
  }

  BeautifyClipCurtainExpression(node: ClipCurtainExpressionContext): string {
    const covExp = this.BeautifyCoverageExpression(node.coverageExpression());
    const label1 = node.curtainProjectionAxisLabel1().getText();
    const label2 = node.curtainProjectionAxisLabel2().getText();
    const wkt = this.BeautifyWktExpression(node.wktExpression());

    const clip = transformCase(node.CLIP().getText(), this.options.caseTransform);
    const curtain = transformCase(node.CURTAIN().getText(), this.options.caseTransform);
    const projection = transformCase(node.PROJECTION().getText(), this.options.caseTransform);

    if (node.crsName() != null) {
      const crsName = node.crsName().getText();
      return `${clip}(${covExp}, ${curtain}(${projection}(${label1}, ${label2}), ${wkt}), ${crsName})`;
    }

    return `${clip}(${covExp}, ${curtain}(${projection}(${label1}, ${label2}), ${wkt}))`;
  }

  BeautifyunaryArithmeticExpression(node: UnaryArithmeticExpressionContext): string {
    let output = transformCase(node.unaryArithmeticExpressionOperator().getText(), this.options.caseTransform);
    if (node.LEFT_PARENTHESIS() != null) output += '(\n';
    output += indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix);
    if (node.RIGHT_PARENTHESIS() != null) output += '\n)';

    return output;
  }

  BeautifyRangeConstructorExpression(node: RangeConstructorExpressionContext): string {
    const output = node.rangeConstructorElementList().rangeConstructorElement_list().map(this.BeautifyRangeConstructorElements.bind(this));
    return output.join(";\n");
  }

  BeautifyRangeConstructorElements(node: RangeConstructorElementContext): string {
    return `${node.fieldName().getText()}: ${this.BeautifyCoverageExpression(node.coverageExpression())}`;
  }

  BeautifyClipWKTExpression(node: ClipWKTExpressionContext): string {
    const clip = transformCase(node.CLIP().getText(), this.options.caseTransform);
    let output = `${clip}(\n`;
    output += indent(this.BeautifyCoverageExpression(node.coverageExpression()), this.prefix);
    output += `,\n${indent(this.BeautifyWktExpression(node.wktExpression()), this.prefix)}`;
    if (node.crsName() != null) {
      output += `, ${node.crsName().getText()}\n)`
    } else {
      output += '\n)';
    }

    return output;
  }

  BeautifyWktExpression(node: WktExpressionContext): string {
    if (node.coverageExpression() != null) {
      return this.BeautifyCoverageExpression(node.coverageExpression());
    }
    if (node.wktPolygon() != null) {
      const polygon = transformCase(node.wktPolygon().POLYGON().getText(), this.options.caseTransform);
      return `${polygon}(${this.BeautifyWktPointElementList(node.wktPolygon().wktPointElementList())})`;
    }
    if (node.wktMultipolygon() != null) {
      let output: string[] = [];
      const multipolygon = transformCase(node.wktMultipolygon().MULTIPOLYGON().getText(), this.options.caseTransform);
      for (let i = 0; i < 40; i++) {
        if (node.wktMultipolygon().wktPointElementList(i) != null) {
          output.push(this.BeautifyWktPointElementList(node.wktMultipolygon().wktPointElementList(i)));
        } else {
          return `${multipolygon}((${output.join('), ')}))`;
        }
      }
    }
    if (node.wktLineString() != null) {
      const linestring = transformCase(node.wktLineString().LINESTRING().getText(), this.options.caseTransform);
      return `${linestring} ${this.BeautifyWktPointElementList(node.wktLineString().wktPointElementList())}`;
    }
    throw this.UnexpectedTokenException('wktExpression', node);
  }

  BeautifyWktPointElementList(node: WktPointElementListContext): string {
    const wktPoints = node.wktPoints_list().map(this.BeautifyWktPoints.bind(this));

    return `(${wktPoints.join('), ')})`;
  }

  BeautifyWktPoints(node: WktPointsContext): string {
    let output: string[] = [];
    let constants: string[] = [];
    constants = node.constant_list().map(node => node.getText());

    for (let i = 0; i < output.length; i + 2) {
      output.push(`${constants[i]} ${constants[i + 1]}`);
    }

    return output.join(', ');
  }

  BeautifyDecodeCoverageExpression(node: DecodeCoverageExpressionContext): string {
    const decode = transformCase(node.DECODE().getText(), this.options.caseTransform);
    let output = "${decode}(\n";
    output += node.positionalParamater();
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
  }

  beautify(input: string): string {
    const charStream = new CharStream(input);
    const lexer = new WCPSLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new WCPSParser(tokens);
    const tree = parser.wcpsQuery();

    const walker = new ParseTreeWalker();
    walker.walk(this, tree);

    const output = this.output.join('\n');
    this.output = [];

    return output;
  }
}
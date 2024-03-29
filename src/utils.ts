import { Domain } from 'domain';
import { AxisIteratorContext, BooleanScalarExpressionContext, CellCountExpressionContext, CondenseExpressionContext, CoverageExpressionContext, DescribeCoverageExpressionContext, DomainExpressionContext, DomainIntervalsContext, DomainPropertyValueExtractionContext, EncodedCoverageExpressionContext, ForClauseContext, GeneralCondenseExpressionContext, GeoXYAxisLabelAndDomainResolutionContext, GetComponentExpressionContext, ImageCrsDomainByDimensionExpressionContext, ImageCrsDomainExpressionContext, LetClauseContext, NumericalScalarExpressionContext, ProcessingExpressionContext, ReduceBooleanExpressionContext, ReduceExpressionContext, ReturnClauseContext, ScalarExpressionContext, ScalarValueCoverageExpressionContext, StringScalarExpressionContext, WhereClauseContext } from './grammar/wcpsParser';

function UnexpectedTokenException(context: string, node: any) {
    return new Error(`${context}: Unexpected token: ${node.getText()}`);
}

export function beautifyForClause(node: ForClauseContext): string {
    const coverageVariableName = node.coverageVariableName().getText();
    const coverageIdForClauseList = node.coverageIdForClause_list().map((node) => node.getText());
    const hasLeft = node.LEFT_PARENTHESIS() != null;
    const hasRight = node.RIGHT_PARENTHESIS() != null;

    let forClause = '';
    forClause += coverageVariableName;
    forClause += ' IN ';
    if (hasLeft) forClause += '( ';
    forClause += coverageIdForClauseList.join(", ");
    if (hasRight) forClause += ' )';

    return forClause;
}

export function BeautifyLetClause(node: LetClauseContext): string {
    const DimensionIntervalList = node.letClauseWithDimensionIntervalList();
    const letClauseWithCoverageExpression = node.letClauseWithCoverageExpression();

    let letClause = '';

    if (DimensionIntervalList) {
        const coverageVariableName = DimensionIntervalList.coverageVariableName().getText();
        const dimensionIntervalList = DimensionIntervalList.dimensionIntervalList().getText();

        letClause += coverageVariableName;
        letClause += ' := ';
        letClause += '[ ';
        letClause += dimensionIntervalList;
        letClause += ' ]';
    }

    if (letClauseWithCoverageExpression) {
        const coverageVariableName = letClauseWithCoverageExpression.coverageVariableName().getText();

        const hasCoverageExpression = letClauseWithCoverageExpression.coverageExpression() != null;
        const hasWktExpression = letClauseWithCoverageExpression.wktExpression() != null;


        if (hasCoverageExpression) {
            const coverageExpression = letClauseWithCoverageExpression.coverageExpression().getText();
        }
        if (hasWktExpression) {
            const wktExpression = letClauseWithCoverageExpression.wktExpression().getText();
        }

        letClause += coverageVariableName;
        letClause += ' := ';
        if (hasCoverageExpression) {
            letClause += letClauseWithCoverageExpression.coverageExpression().getText();
        }
        if (hasWktExpression) {
            letClause += letClauseWithCoverageExpression.wktExpression().getText();
        }
    }

    return letClause;
}

export function BeautifyWhereClause(node: WhereClauseContext): string {
    const coverageName = node.coverageExpression().coverageExpression_list().map(node => node.getText());


    const comparison = node.coverageExpression().numericalComparissonOperator() != null;
    const arithmetic = node.coverageExpression().unaryArithmeticExpression() != null;

    const hasLeft = node.LEFT_PARENTHESIS() != null;
    const hasRight = node.RIGHT_PARENTHESIS() != null;

    let operator = "";
    if (comparison) {
        operator = node.coverageExpression().numericalComparissonOperator().getText();
    } else if (arithmetic) {
        operator = node.coverageExpression().unaryArithmeticExpression().getText();
    }

    let whereClause = 'where ';
    if (hasLeft) whereClause += '( ';
    whereClause += coverageName.join(` ${operator} `);
    if (hasRight) whereClause += ' )';

    return whereClause;
}




export function BeautifyReturnClause(node: ReturnClauseContext): string {
    const processingExpression = node.processingExpression();
    const hasLeft = node.LEFT_PARENTHESIS() !== null;
    const hasRight = node.RIGHT_PARENTHESIS() !== null;

    let result = 'return ';
    if (hasLeft) result += '(';
    result += BeautifyProcessingExpression(processingExpression);
    if (hasRight) result += ')';

    return result;
}

export function BeautifyProcessingExpression(node: ProcessingExpressionContext): string {
    if (node.encodedCoverageExpression() != null) {
        return BeautifyEncodedCoverageExpression(node.encodedCoverageExpression());
    }
    if (node.describeCoverageExpression() != null) {
        return BeautifyDescribeCoverageExpression(node.describeCoverageExpression());
    }
    if (node.scalarValueCoverageExpression() != null) {
        return BeautifyScalarValueCoverageExpression(node.scalarValueCoverageExpression());
    }
    if (node.scalarExpression() != null) {
        return BeautifyScalarExpression(node.scalarExpression());
    }
    if (node.getComponentExpression() != null) {
        return BeautifyGetComponentExpression(node.getComponentExpression());
    }

    throw UnexpectedTokenException('ProcessingExpression', node);
}

export function BeautifyGetComponentExpression(node: GetComponentExpressionContext): string {
    if (node.coverageIdentifierExpression() != null) {
        return `identifier(\n    ${BeautifyCoverageExpression(node.coverageIdentifierExpression().coverageExpression())}\n)`;
    }
    if (node.coverageCrsSetExpression() != null) {
        return `crsset( ${BeautifyCoverageExpression(node.coverageCrsSetExpression().coverageExpression())}\n)`;
    }
    if (node.domainExpression() != null) {
        return BeautifyDomainExpression(node.domainExpression());
    }
    if (node.imageCrsDomainExpression() != null) {
        return BeautifyImageCrsDomainExpression(node.imageCrsDomainExpression());
    }
    if (node.imageCrsDomainByDimensionExpression() != null) {
        return BeautifyImageCrsDomainByDimensionExpression(node.imageCrsDomainByDimensionExpression());
    }
    if (node.imageCrsExpression() != null) {
        const covExp = node.imageCrsExpression().coverageExpression();
        return `imagecrs(\n    ${BeautifyCoverageExpression(covExp)}\n))`;
    }
    if (node.cellCountExpression() != null) {
        return `cellcount(\n    ${BeautifyCoverageExpression(node.cellCountExpression().coverageExpression())}\n)`;
    }
    if (node.coverageExpressionNullSetRetrieving() != null) {
        return `nullset(\n    ${BeautifyCoverageExpression(node.coverageExpressionNullSetRetrieving().coverageExpression())}\n)`;
    }

    throw UnexpectedTokenException('GetComponentExpression', node);
}

export function BeautifyEncodedCoverageExpression(node: EncodedCoverageExpressionContext): string {
    let output = "encode(\n";
    output += BeautifyCoverageExpression(node.coverageExpression());
    output += `, ${node.STRING_LITERAL().getText()}`;
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
}

export function BeautifyDescribeCoverageExpression(node: DescribeCoverageExpressionContext): string {
    let output = "decode(\n";
    output += BeautifyCoverageExpression(node.coverageExpression());
    output += `, ${node.STRING_LITERAL().getText()}`;
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
}

export function BeautifyScalarValueCoverageExpression(node: ScalarValueCoverageExpressionContext): string {
    let output = "";

    if (node.LEFT_PARENTHESIS != null) output += "( ";
    output += BeautifyCoverageExpression(node.coverageExpression());
    if (node.RIGHT_PARENTHESIS != null) output += " )";

    return output;
}

export function BeautifyScalarExpression(node: ScalarExpressionContext): string {
    if (node.geoXYAxisLabelAndDomainResolution() != null) {
        return BeautifyGeoXYAxisLabelAndDomainResolution(node.geoXYAxisLabelAndDomainResolution());
    }
    if (node.booleanScalarExpression() != null) {
        return BeautifyBooleanScalarExpression(node.booleanScalarExpression());
    }
    if (node.numericalScalarExpression() != null) {
        return BeautifyNumericalScalarExpression(node.numericalScalarExpression());
    }
    if (node.stringScalarExpression() != null) {
        return node.stringScalarExpression().getText();
    }
    if (node.starExpression() != null) {
        return node.starExpression().getText();
    }
    if (node.domainIntervals() != null) {
        return BeautifyDomainIntervals(node.domainIntervals());
    }
    if (node.cellCountExpression() != null) {
        return `cellcount(\n   ${BeautifyCoverageExpression(node.cellCountExpression().coverageExpression())}\n)`;
    }

    throw UnexpectedTokenException('ScalarExpression', node);
}

export function BeautifyCellCountExpression(node: CellCountExpressionContext): string {
    return `cellcount(\n   ${BeautifyCoverageExpression(node.coverageExpression())}\n)`;
}

export function BeautifyDomainIntervals(node: DomainIntervalsContext): string {
    const domExp = node.domainExpression();
    const imgCrsDom = node.imageCrsDomainExpression();
    const imgCrsDomDim = node.imageCrsDomainByDimensionExpression();
    let output = '';

    if (domExp != null) {
        output = BeautifyDomainExpression(domExp);
    }
    if (imgCrsDom != null) {
        output = 'imagecrsdomain(\n    ';
        output += `${BeautifyCoverageExpression(imgCrsDom.coverageExpression())}\n)`;
    }
    if (imgCrsDomDim != null) {
        output = 'imagecrsdomain(\n    ';
        output += `${BeautifyCoverageExpression(imgCrsDomDim.coverageExpression())}, ${imgCrsDomDim.axisName().getText()}`;
    }

    output += `.${node.domainPropertyValueExtraction().getText()}`;
    return output;
}

export function BeautifyImageCrsDomainByDimensionExpression(node: ImageCrsDomainByDimensionExpressionContext): string {     
    return `imagecrsdomain(\n    ${BeautifyCoverageExpression(node.coverageExpression())}\n)`;
}

export function BeautifyImageCrsDomainExpression(node: ImageCrsDomainExpressionContext): string {
    return `imagecrsdomain(\n    ${BeautifyCoverageExpression(node.coverageExpression())}\n)`;
}

export function BeautifyDomainExpression(node: DomainExpressionContext): string {
    let output = 'domain(\n    ';
    output += BeautifyCoverageExpression(node.coverageExpression());
    if (node.axisName() != null) {
        output += `, ${node.axisName().getText()}`
        if (node.crsName() != null) {
            output += `, ${node.crsName().getText()}\n    )`
        }
    }
    return output;
}


export function BeautifyGeneralCondenseExpression(node: GeneralCondenseExpressionContext): string {
    const condenseExprOperator = node.condenseExpressionOperator().getText();
    const axisIteratorList = node.axisIterator_list().map(BeautifyAxisIterator);
    const whereClause = node.whereClause();
    const covExpr = node.coverageExpression();

    const lines = [
        `condense ${condenseExprOperator}`,
        `over ${axisIteratorList.join(',\n    ')}`,
    ];

    if (whereClause !== null) {
        lines.push(BeautifyWhereClause(whereClause));
    }

    lines.push(`using ${BeautifyCoverageExpression(covExpr)}`);

    return lines.join('\n');
}

export function BeautifyAxisIterator(node: AxisIteratorContext): string {
    console.log('TODO: Implement axis iterator bautification');
    return node.getText();
}

export function BeautifyReduceExpression(node: ReduceExpressionContext): string {
    if (node.reduceBooleanExpression() != null) {
        const redBool = node.reduceBooleanExpression();
        const operator = redBool.reduceBooleanExpressionOperator().getText();
        const covExpr = redBool.coverageExpression();

        return `${operator}(${BeautifyCoverageExpression(covExpr)})`;
    }
    if (node.reduceNumericalExpression() != null) {
        const redNum = node.reduceNumericalExpression();
        const operator = redNum.reduceNumericalExpressionOperator().getText();
        const covExpr = redNum.coverageExpression();

        return `${operator}(${BeautifyCoverageExpression(covExpr)})`;
    }

    throw UnexpectedTokenException('ReduceExpression', node);
}

export function BeautifyGeoXYAxisLabelAndDomainResolution(node: GeoXYAxisLabelAndDomainResolutionContext): string {
    let output = "";

    output += node.COVERAGE_NAME().getText();
    output += "( ";
    output += BeautifyCoverageExpression(node.coverageExpression());
    output += `, ${node.axisName().getText()}`;
    if (node.crsName() != null) output += `, ${node.crsName().getText()} ).`;
    output += node.domainPropertyValueExtraction().getText();
    return output;
}

export function BeautifyBooleanScalarExpression(node: BooleanScalarExpressionContext): string {
    if (node.reduceBooleanExpression() != null) {
        return BeautifyReduceBooleanExpression(node.reduceBooleanExpression());
    }

    if (node.booleanConstant() != null) {
        return node.booleanConstant().getText();
    }

    if (node.booleanUnaryOperator() != null) {
        let output = 'not ';

        if (node.LEFT_PARENTHESIS() != null) output += '( ';
        output += BeautifyBooleanScalarExpression(node.booleanScalarExpression(0));
        if (node.RIGHT_PARENTHESIS() != null) output += ') ';

        return output;
    }

    if (node.booleanOperator() != null) {
        const a = BeautifyBooleanScalarExpression(node.booleanScalarExpression(0));
        const operator = node.booleanOperator().getText();
        const b = BeautifyBooleanScalarExpression(node.booleanScalarExpression(1));
        return `${a} ${operator} ${b}`;
    }

    if (node.numericalComparissonOperator() != null) {
        let output = "";

        output += BeautifyNumericalScalarExpression(node.numericalScalarExpression(0));
        output += node.numericalComparissonOperator().getText();
        output += BeautifyNumericalScalarExpression(node.numericalScalarExpression(1));

        return output;
    }

    if (node.stringOperator != null) {
        let output = "";

        output += node.stringScalarExpression(0).getText();
        output += node.stringOperator().getText();
        output += node.stringScalarExpression(1);

        return output;
    }

    throw UnexpectedTokenException('BooleanScalarExpression', node);
}

export function BeautifyReduceBooleanExpression(node: ReduceBooleanExpressionContext): string {
    let output = '';

    output += node.reduceBooleanExpressionOperator().getText();
    output += `( ${BeautifyCoverageExpression(node.coverageExpression())} )`;

    return output;
}

export function BeautifyNumericalScalarExpression(node: NumericalScalarExpressionContext): string {
    let output = "";
    if (node.number_()) {
        return node.getText();
    }

    if (node.NAN_NUMBER_CONSTANT()) {
        return 'NAN';
    }

    if (node.complexNumberConstant()) {
        return node.complexNumberConstant().getText().replace(',', ', ');
    }

    if (node.numericalUnaryOperation() != null) {
        const operator = node.numericalUnaryOperation().getText();
        return `${operator}( ${BeautifyNumericalScalarExpression(node.numericalScalarExpression(0))} )`;
    }

    if (node.trigonometricOperator() != null) {
        const operator = node.trigonometricOperator().getText();
        return `${operator}( ${BeautifyNumericalScalarExpression(node.numericalScalarExpression(0))} )`
    }

    if (node.numericalOperator() != null) {
        const a = BeautifyNumericalScalarExpression(node.numericalScalarExpression(0));
        const op = node.numericalOperator().getText();
        const b = BeautifyNumericalScalarExpression(node.numericalScalarExpression(1));

        return `${a} ${op} ${b}`;
    }

    if (node.condenseExpression() != null) {
        return BeautifyCondenseExpression(node.condenseExpression());
    }

    return output;
}

export function BeautifyCondenseExpression(node: CondenseExpressionContext): string {
    if (node.reduceExpression() != null) {
        return BeautifyReduceExpression(node.reduceExpression());
    }
    if (node.generalCondenseExpression() != null) {
        return BeautifyGeneralCondenseExpression(node.generalCondenseExpression());
    }

    throw UnexpectedTokenException('CondenseExpression', node);
}

export function BeautifyCoverageExpression(node: CoverageExpressionContext): string {
    if (node.coverageVariableName()) {
        console.log('Found variable name', node.coverageVariableName().getText());
        return node.coverageVariableName().getText();
    }

    if (node.fieldName()) {
        const fieldName = node.fieldName().getText();
        return `${BeautifyCoverageExpression(node)}.${fieldName}`;
    }

    return '';
}

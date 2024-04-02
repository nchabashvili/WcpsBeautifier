import { Domain } from 'domain';
import { AxisIteratorContext, BooleanScalarExpressionContext, BooleanSwitchCaseCombinedExpressionContext, BooleanSwitchCaseCoverageExpressionContext, CellCountExpressionContext, ClipCorridorExpressionContext, ClipCurtainExpressionContext, ClipWKTExpressionContext, CondenseExpressionContext, CoverageExpressionContext, CrsTransformExpressionContext, CrsTransformShorthandExpressionContext, DecodeCoverageExpressionContext, DescribeCoverageExpressionContext, DimensionBoundConcatenationElementContext, DimensionCrsElementContext, DimensionCrsListContext, DimensionGeoXYResolutionContext, DimensionGeoXYResolutionsListContext, DimensionIntervalElementContext, DimensionIntervalListContext, DomainExpressionContext, DomainIntervalsContext, DomainPropertyValueExtractionContext, EncodedCoverageExpressionContext, ForClauseContext, GeneralCondenseExpressionContext, GeoXYAxisLabelAndDomainResolutionContext, GetComponentExpressionContext, ImageCrsDomainByDimensionExpressionContext, ImageCrsDomainExpressionContext, LetClauseContext, NumericalScalarExpressionContext, ProcessingExpressionContext, RangeConstructorElementContext, RangeConstructorElementListContext, ReduceBooleanExpressionContext, ReduceExpressionContext, ReturnClauseContext, ScalarExpressionContext, ScalarValueCoverageExpressionContext, StringScalarExpressionContext, SwitchCaseDefaultElementContext, SwitchCaseElementContext, SwitchCaseExpressionContext, UnaryArithmeticExpressionContext, UnaryBooleanExpressionContext, UnaryModExpressionContext, UnaryPowerExpressionContext, WhereClauseContext, WktExpressionContext, WktPointElementListContext, WktPointsContext, WktPolygonContext } from './grammar/wcpsParser';
import { RangeConstructorExpressionContext } from './grammar/wcpsParser';

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
    if (node.coverageVariableName() != null) {
        console.log('Found variable name', node.coverageVariableName().getText());
        return node.coverageVariableName().getText();
    }

    if (node.fieldName() != null) {
        const fieldName = node.fieldName().getText();
        return `${BeautifyCoverageExpression(node.coverageExpression(0))}.${fieldName}`;
    }

    if (node.domainIntervals() != null) {
        return BeautifyDomainIntervals(node.domainIntervals());
    }

    if (node.scalarExpression() != null) {
        return BeautifyScalarExpression(node.scalarExpression());
    }

    if (node.booleanOperator() != null) {
        return `${BeautifyCoverageExpression(node.coverageExpression(0))} ${node.booleanOperator().getText()} ${BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.numericalComparissonOperator() != null) {
        return `${BeautifyCoverageExpression(node.coverageExpression(0))} ${node.numericalComparissonOperator().getText()} ${BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.coverageArithmeticOperator() != null) {
        return `${BeautifyCoverageExpression(node.coverageExpression(0))} ${node.coverageArithmeticOperator().getText()} ${BeautifyCoverageExpression(node.coverageExpression(1))}`;
    }

    if (node.decodeCoverageExpression() != null) {
        return BeautifyDecodeCoverageExpression(node.decodeCoverageExpression());
    }

    if (node.trigonometricExpression() != null) {
        return `${node.trigonometricExpression().getText()}(${BeautifyCoverageExpression(node.coverageExpression(0))})`;
    }

    if (node.exponentialExpression() != null) {
        return `${node.exponentialExpression().exponentialExpressionOperator().getText()}(${BeautifyCoverageExpression(node.coverageExpression(0))})`;
    }

    if (node.minBinaryExpression() != null) {
        return `min(${BeautifyCoverageExpression(node.coverageExpression(0))}, ${BeautifyCoverageExpression(node.coverageExpression(1))})`;
    }

    if (node.maxBinaryExpression() != null) {
        return `max(${BeautifyCoverageExpression(node.coverageExpression(0))}, ${BeautifyCoverageExpression(node.coverageExpression(1))})`;
    }

    if (node.castExpression() != null) {
        return `(${node.castExpression().rangeType().getText()})${BeautifyCoverageExpression(node.castExpression().coverageExpression())}`;
    }

    if (node.rangeConstructorExpression() != null) {
        return `[\n    ${BeautifyRangeConstructorExpression(node.rangeConstructorExpression())}\n]`;
    }

    if (node.clipWKTExpression() != null) {
        return BeautifyClipWKTExpression(node.clipWKTExpression());
    }

    if (node.unaryArithmeticExpression() != null) {
        return `${BeautifyunaryArithmeticExpression(node.unaryArithmeticExpression())}`;
    }
    if (node.clipCurtainExpression() != null) {
        return BeautifyClipCurtainExpression(node.clipCurtainExpression());
    }
    if (node.clipCorridorExpression() != null) {
        return BeautifyClipCorridorExpression(node.clipCorridorExpression());
    }
    if (node.crsTransformExpression() !=  null) {
        return BeautifyCrsTransformExpression(node.crsTransformExpression());
    }
    if (node.crsTransformShorthandExpression() != null) {
        return BeautifyCrsTransformShorthandExpression(node.crsTransformShorthandExpression());
    }
    if (node.switchCaseExpression() != null) {
        return BeautifySwitchCaseExpression(node.switchCaseExpression());
    }
    if (node.unaryPowerExpression() != null) {
        return BeautifyUnaryPowerExpression(node.unaryPowerExpression());
    }
    if (node.unaryModExpression() != null) {
        return BeautifyUnaryModExpression(node.unaryModExpression());
    }
    if (node.unaryBooleanExpression() != null) {
        return BeautifyUnaryBooleanExpression(node.unaryBooleanExpression());
    }

    throw UnexpectedTokenException("coverage", node);
}

export function BeautifyUnaryBooleanExpression(node: UnaryBooleanExpressionContext): string {
    const covName = node.coverageVariableName().getText();
    const covExpr = BeautifyCoverageExpression(node.coverageExpression());
    const numScalExp = BeautifyNumericalScalarExpression(node.numericalScalarExpression());

    if (node.numericalScalarExpression() != null) {
        return `BIT(${covExpr}, ${numScalExp})`;
    }
    if (node.coverageVariableName() != null) {
        return `BIT(${covExpr}, ${covName})`;
    }
    return `NOT(${covExpr})`;
}

export function BeautifyUnaryModExpression(node: UnaryModExpressionContext): string {
    const covName = node.coverageVariableName().getText();
    const covExpr = BeautifyCoverageExpression(node.coverageExpression());
    const numScalExp = BeautifyNumericalScalarExpression(node.numericalScalarExpression());

    if (node.coverageVariableName() != null) {
        return `mod( ${covExpr}, ${covName})`;
    }

    return `mod( ${covExpr}, ${numScalExp})`;
}

export function BeautifyUnaryPowerExpression(node: UnaryPowerExpressionContext): string {
    const covName = node.coverageVariableName().getText();
    const covExpr = BeautifyCoverageExpression(node.coverageExpression());
    const numScalExp = BeautifyNumericalScalarExpression(node.numericalScalarExpression());

    if (node.coverageVariableName() != null) {
        return `pow( ${covExpr}, ${covName})`;
    }

    return `pow( ${covExpr}, ${numScalExp})`;
}

export function BeautifySwitchCaseExpression(node: SwitchCaseExpressionContext): string {
    let output = 'switch ';
    output += node.switchCaseElementList().switchCaseElement_list().map(BeautifySwitchCaseElement).join("\n    ");
    output += "\n        ";
    output += BeautifySwitchCaseDefaultElement(node.switchCaseDefaultElement());

    return output;
}

export function BeautifySwitchCaseDefaultElement(node: SwitchCaseDefaultElementContext): string {
    return `default return ${BeautifyCoverageExpression(node.coverageExpression())}`;
}

export function BeautifySwitchCaseElement(node: SwitchCaseElementContext): string {
    return `case ${BeautifyBooleanSwitchCaseCombinedExpression(node.booleanSwitchCaseCombinedExpression())} return ${BeautifyCoverageExpression(node.coverageExpression())}`;
}

export function BeautifyBooleanSwitchCaseCombinedExpression(node: BooleanSwitchCaseCombinedExpressionContext): string {
    if (node.booleanOperator() != null) {
        return `${BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(0))} ${node.booleanOperator().getText()} ${BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(1))}`
    }
    return `${BeautifyBooleanSwitchCaseCoverageExpression(node.booleanSwitchCaseCoverageExpression(0))}`
}

export function BeautifyBooleanSwitchCaseCoverageExpression(node: BooleanSwitchCaseCoverageExpressionContext): string {
    const covName1 = BeautifyCoverageExpression(node.coverageExpression(0));
    const covName2 = BeautifyCoverageExpression(node.coverageExpression(1));
    const operator = node.numericalComparissonOperator().getText();

    if (node.NULL() != null) {
        if (node.NOT() != null) {
            return `${covName1} is not null`;
        }
        return `${covName1} is null`;
    }
    return `${covName1} ${operator} ${covName2}`;
}

export function BeautifyCrsTransformShorthandExpression(node: CrsTransformShorthandExpressionContext): string {
    const covName = BeautifyCoverageExpression(node.coverageExpression());
    const crsName = node.crsName().getText();
    const intType = node.interpolationType().getText();
    const dimXY = BeautifyDimensionGeoXYResolutionsList(node.dimensionGeoXYResolutionsList());
    const dimIntervalList = BeautifyDimensionIntervalList(node.dimensionIntervalList());
    const domainExp = BeautifyDomainExpression(node.domainExpression());

    if (node.interpolationType() != null) {
        if (node.dimensionGeoXYResolutionsList() != null) {
            if (node.dimensionIntervalList() != null) {
                return `crsTransform(${covName}, ${crsName}, {${intType}}, {${dimXY}}, {${dimIntervalList}})`;
            }
            if (node.domainExpression() != null) {
                return `crsTransform(${covName}, ${crsName}, {${intType}}, {${dimXY}}, {${domainExp}})`;
            }
            return `crsTransform(${covName}, ${crsName}, {${intType}}, {${dimXY}})`;
        }
        return `crsTransform(${covName}, ${crsName}, {${intType}})`;
    }
    return `crsTransform(${covName}, ${crsName})`;
}


export function BeautifyCrsTransformExpression(node : CrsTransformExpressionContext): string {
    const covName = BeautifyCoverageExpression(node.coverageExpression());
    const dimCrsList = BeautifyDimensionCrsList(node.dimensionCrsList());
    const intType = node.interpolationType().getText();
    const dimXY = BeautifyDimensionGeoXYResolutionsList(node.dimensionGeoXYResolutionsList());
    const dimIntervalList = BeautifyDimensionIntervalList(node.dimensionIntervalList());
    const domainExp = BeautifyDomainExpression(node.domainExpression());

    if (node.interpolationType() != null) {
        if (node.dimensionGeoXYResolutionsList() != null) {
            if (node.dimensionIntervalList() != null) {
                return `crsTransform(${covName}, ${dimCrsList}, {${intType}}, {${dimXY}}, {${dimIntervalList}})`;
            }
            if (node.domainExpression() != null) {
                return `crsTransform(${covName}, ${dimCrsList}, {${intType}}, {${dimXY}}, {${domainExp}})`;
            }
            return `crsTransform(${covName}, ${dimCrsList}, {${intType}}, {${dimXY}})`;
        }
        return `crsTransform(${covName}, ${dimCrsList}, {${intType}})`;
    }
    return `crsTransform(${covName}, ${dimCrsList})`;
}

export function BeautifyDimensionCrsList(node: DimensionCrsListContext): string {
    let output: string[] = [];
    output.push(node.dimensionCrsElement_list().map(BeautifyDimensionCrsElement).join(", "));
    return `{${output}}`;
}

export function BeautifyDimensionCrsElement(node: DimensionCrsElementContext): string {
    return `${node.axisName().getText()}:${node.crsName().getText()}`;
}

export function BeautifyDimensionGeoXYResolutionsList(node: DimensionGeoXYResolutionsListContext): string {
    let output: string[] = [];
    output = node.dimensionGeoXYResolution_list().map(BeautifyDimensionGeoXYResolution);

    return output.join(", ");
}

export function BeautifyDimensionGeoXYResolution(node: DimensionGeoXYResolutionContext): string {
    const covName = node.COVERAGE_VARIABLE_NAME().getText();
    const covExpr = BeautifyCoverageExpression(node.coverageExpression());
    
    return `${covName}:${covExpr}`;
}

export function BeautifyDimensionIntervalList(node: DimensionIntervalListContext): string {
    let output: string[] = [];

    output = node.dimensionIntervalElement_list().map(BeautifyDimensionIntervalElement);

    return output.join(", ");
}

export function BeautifyDimensionIntervalElement(node: DimensionIntervalElementContext): string {
    const axName = node.axisName().getText();
    const crsName = node.crsName().getText();
    const ConcElements = node.dimensionBoundConcatenationElement_list().map(BeautifyDimensionBoundConcatenationElement).join(":");
    const img = BeautifyImageCrsDomainByDimensionExpression(node.imageCrsDomainByDimensionExpression());

    if (node.imageCrsDomainByDimensionExpression() != null) {
        if (node.crsName() != null){
            return `${axName}:${crsName}(${img})`;
        }
        return `${axName}(${img})`;
    }
    if (node.crsName() != null) {
        return `${axName}:${crsName}(${ConcElements})`;
    }
    return `${axName}(${ConcElements})`;
}

export function BeautifyDimensionBoundConcatenationElement(node: DimensionBoundConcatenationElementContext): string {
    let output: string[] = [];

    output = node.coverageExpression_list().map(BeautifyCoverageExpression);

    return output.join(".");
}

export function BeautifyClipCorridorExpression(node: ClipCorridorExpressionContext): string {
    const covNam = BeautifyCoverageExpression(node.coverageExpression());
    const label1 = node.corridorProjectionAxisLabel1().getText();
    const label2 = node.corridorProjectionAxisLabel2().getText();
    const wkt1 = node.corridorWKTLabel1().wktExpression().getText();
    const wkt2 = node.corridorWKTLabel2().wktExpression().getText();
    const crsName = node.crsName().getText();

    if (node.DISCRETE() != null) {
        if (node.crsName() != null) {
            return `clip( ${covNam}, corridor( projection(${label1}, ${label2}), ${wkt1}, ${wkt2}, discrete), ${crsName})`;
        }
        return `clip( ${covNam}, corridor( projection(${label1}, ${label2}), ${wkt1}, ${wkt2}, discrete))`;
    }

    return `clip( ${covNam}, corridor( projection(${label1}, ${label2}), ${wkt1}, ${wkt2}))`;
}

export function BeautifyClipCurtainExpression(node: ClipCurtainExpressionContext): string {
    const covExp = BeautifyCoverageExpression(node.coverageExpression());
    const label1 = node.curtainProjectionAxisLabel1().getText();
    const label2 = node.curtainProjectionAxisLabel2().getText();
    const wkt = BeautifyWktExpression(node.wktExpression());
    const crsName = node.crsName().getText();

    if (node.crsName() != null) {
        return `clip( ${covExp}, curtain( projection(${label1}, ${label2}), ${wkt}), ${crsName})`;
    }

    return `clip( ${covExp}, curtain( projection(${label1}, ${label2}), ${wkt}))`;
}

export function BeautifyunaryArithmeticExpression(node: UnaryArithmeticExpressionContext): string {
    let output = node.unaryArithmeticExpressionOperator().getText();
    if (node.LEFT_PARENTHESIS() != null) output += '(';
    output += BeautifyCoverageExpression(node.coverageExpression());
    if (node.RIGHT_PARENTHESIS() != null) output += ')';

    return output;
}

export function BeautifyRangeConstructorExpression(node: RangeConstructorExpressionContext): string {
    const output = node.rangeConstructorElementList().rangeConstructorElement_list().map(BeautifyRangeConstructorElements);
    return output.join("; ");
}

export function BeautifyRangeConstructorElements(node: RangeConstructorElementContext): string {
    return `${node.fieldName().getText()}: ${BeautifyCoverageExpression(node.coverageExpression())}`;
}

export function BeautifyClipWKTExpression(node: ClipWKTExpressionContext): string {
    let output = 'clip(';
    output += BeautifyCoverageExpression(node.coverageExpression());
    output += `, ${BeautifyWktExpression(node.wktExpression())}`;
    if (node.crsName() != null) output += `, ${node.crsName().getText()})`;

    return output;
}

export function BeautifyWktExpression(node: WktExpressionContext): string {
    if (node.coverageExpression() != null) {
        return BeautifyCoverageExpression(node.coverageExpression());
    }
    if (node.wktPolygon() != null) {
        return `Polygon(${BeautifyWktPointElementList(node.wktPolygon().wktPointElementList())})`;
    }
    if (node.wktMultipolygon() != null) {
        const elementList = [];
        let output : string[] = [];
        for (let i = 0; i < 40; i++) {
            if (node.wktMultipolygon().wktPointElementList(i) != null) {
                output.push(BeautifyWktPointElementList(node.wktMultipolygon().wktPointElementList(i)));
            } else {
                return `multipolygon((${output.join('), ')}))`;
            }
        }
    }
    if (node.wktLineString() != null) {
        return `linestring ${BeautifyWktPointElementList(node.wktLineString().wktPointElementList())}`;
    }
    throw UnexpectedTokenException('wktExpression', node);
}

export function BeautifyWktPointElementList(node: WktPointElementListContext): string {
    const wktPoints = node.wktPoints_list().map(BeautifyWktPoints);

    return `(${wktPoints.join('), ')})`;
}

export function BeautifyWktPoints(node: WktPointsContext): string {
    let output: string[] = [];
    let constants: string[] = [];
    constants = node.constant_list().map(node => node.getText());

    for (let i = 0; i < output.length; i + 2) {
        output.push(`${constants[i]} ${constants[i + 1]}`);
    }

    return output.join(', ');
}

export function BeautifyDecodeCoverageExpression(node: DecodeCoverageExpressionContext): string {
    let output = "decode(\n";
    output += node.positionalParamater();
    if (node.extraParams() != null) output += `, ${node.extraParams().getText()}`;
    output += "\n)";

    return output;
}

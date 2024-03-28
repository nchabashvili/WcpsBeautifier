import { EncodedCoverageExpressionContext, ForClauseContext, LetClauseContext, NumericalScalarExpressionContext, ReturnClauseContext, WhereClauseContext } from './grammar/wcpsParser';

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
    // variables for encoded expression
    const encodedExpression = node.processingExpression().encodedCoverageExpression();

    const hasLeft = encodedExpression.LEFT_PARENTHESIS() != null;
    const hasRight = encodedExpression.RIGHT_PARENTHESIS() != null;
    const encodeEquation = encodedExpression.coverageExpression().coverageExpression_list().map(node => node.getText());
    const encodeString = encodedExpression.STRING_LITERAL();

    //variables for unary Arithmetic Expression
    const unary = encodedExpression.coverageExpression().unaryArithmeticExpression();
    const unaryExpression = unary.unaryArithmeticExpressionOperator().getText();

    //console.log(unary.getText());

    let returnClause = 'return\n    ';
    if (encodedExpression) {
        returnClause += "encode";
        if (hasLeft) returnClause += '(\n        ';

        if(unaryExpression.length != 0){
            returnClause += unaryExpression;
        }

        if (encodeEquation.length != 0) {
            returnClause += encodeEquation[0].toString();
            returnClause += " ";
            returnClause += encodedExpression.coverageExpression().coverageArithmeticOperator().getText();
            returnClause += " ";
            returnClause += encodeEquation[1].toString();
        }

        if (encodeString != null) returnClause += ",\n        " + encodeString.getText();
        if (hasRight) returnClause += '\n    )';
    }

    return returnClause;
}
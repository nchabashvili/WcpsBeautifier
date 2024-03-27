import { ForClauseContext, LetClauseContext } from './grammar/wcpsParser';

export function beautifyForClause(node: ForClauseContext): string {
    const coverageVariableName = node.coverageVariableName().getText();
    const coverageIdForClauseList = node.coverageIdForClause_list().map ((node) => node.getText());
    const hasLeft = node.LEFT_PARENTHESIS() != null;
    const hasRight = node.RIGHT_PARENTHESIS() != null;

    let forClause = '';
    forClause += coverageVariableName;
    forClause += ' IN ';
    if (hasLeft) forClause += '( ';
    forClause += coverageIdForClauseList.join(", ");
    if (hasLeft) forClause += ' )';

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
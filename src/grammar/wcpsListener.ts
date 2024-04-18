// Generated from wcps.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { WcpsQueryContext } from "./wcpsParser";
import { ForClauseListContext } from "./wcpsParser";
import { CoverageIdForClauseContext } from "./wcpsParser";
import { ForClauseContext } from "./wcpsParser";
import { LetClauseListContext } from "./wcpsParser";
import { LetClauseContext } from "./wcpsParser";
import { LetClauseWithDimensionIntervalListContext } from "./wcpsParser";
import { LetClauseWithCoverageExpressionContext } from "./wcpsParser";
import { WhereClauseContext } from "./wcpsParser";
import { ReturnClauseContext } from "./wcpsParser";
import { DomainPropertyValueExtractionContext } from "./wcpsParser";
import { DomainIntervalsContext } from "./wcpsParser";
import { GeoXYAxisLabelAndDomainResolutionContext } from "./wcpsParser";
import { CoverageVariableNameContext } from "./wcpsParser";
import { ProcessingExpressionContext } from "./wcpsParser";
import { ScalarValueCoverageExpressionContext } from "./wcpsParser";
import { ScalarExpressionContext } from "./wcpsParser";
import { BooleanScalarExpressionContext } from "./wcpsParser";
import { BooleanUnaryOperatorContext } from "./wcpsParser";
import { BooleanConstantContext } from "./wcpsParser";
import { BooleanOperatorContext } from "./wcpsParser";
import { NumericalComparissonOperatorContext } from "./wcpsParser";
import { StringOperatorContext } from "./wcpsParser";
import { StringScalarExpressionContext } from "./wcpsParser";
import { StarExpressionContext } from "./wcpsParser";
import { BooleanSwitchCaseCoverageExpressionContext } from "./wcpsParser";
import { BooleanSwitchCaseCombinedExpressionContext } from "./wcpsParser";
import { NumericalScalarExpressionContext } from "./wcpsParser";
import { ComplexNumberConstantContext } from "./wcpsParser";
import { NumericalOperatorContext } from "./wcpsParser";
import { NumericalUnaryOperationContext } from "./wcpsParser";
import { TrigonometricOperatorContext } from "./wcpsParser";
import { GetComponentExpressionContext } from "./wcpsParser";
import { CoverageExpressionNullSetRetrievingContext } from "./wcpsParser";
import { CoverageIdentifierExpressionContext } from "./wcpsParser";
import { CellCountExpressionContext } from "./wcpsParser";
import { CoverageCrsSetExpressionContext } from "./wcpsParser";
import { DomainExpressionContext } from "./wcpsParser";
import { ImageCrsDomainByDimensionExpressionContext } from "./wcpsParser";
import { ImageCrsDomainExpressionContext } from "./wcpsParser";
import { ImageCrsExpressionContext } from "./wcpsParser";
import { DescribeCoverageExpressionContext } from "./wcpsParser";
import { PositionalParamaterContext } from "./wcpsParser";
import { ExtraParamsContext } from "./wcpsParser";
import { EncodedCoverageExpressionContext } from "./wcpsParser";
import { DecodeCoverageExpressionContext } from "./wcpsParser";
import { CoverageExpressionInParenthesisContext } from "./wcpsParser";
import { CoverageExpressionContext } from "./wcpsParser";
import { CoverageArithmeticOperatorContext } from "./wcpsParser";
import { UnaryArithmeticExpressionOperatorContext } from "./wcpsParser";
import { UnaryArithmeticExpressionContext } from "./wcpsParser";
import { TrigonometricExpressionContext } from "./wcpsParser";
import { ExponentialExpressionOperatorContext } from "./wcpsParser";
import { ExponentialExpressionContext } from "./wcpsParser";
import { UnaryPowerExpressionContext } from "./wcpsParser";
import { UnaryModExpressionContext } from "./wcpsParser";
import { MinBinaryExpressionContext } from "./wcpsParser";
import { MaxBinaryExpressionContext } from "./wcpsParser";
import { UnaryBooleanExpressionContext } from "./wcpsParser";
import { RangeTypeContext } from "./wcpsParser";
import { CastExpressionContext } from "./wcpsParser";
import { FieldNameContext } from "./wcpsParser";
import { RangeConstructorExpressionContext } from "./wcpsParser";
import { RangeConstructorElementContext } from "./wcpsParser";
import { RangeConstructorElementListContext } from "./wcpsParser";
import { RangeConstructorSwitchCaseExpressionContext } from "./wcpsParser";
import { DimensionPointListContext } from "./wcpsParser";
import { DimensionPointElementContext } from "./wcpsParser";
import { DimensionIntervalListContext } from "./wcpsParser";
import { ScaleDimensionPointElementContext } from "./wcpsParser";
import { ScaleDimensionPointListContext } from "./wcpsParser";
import { ScaleDimensionIntervalListContext } from "./wcpsParser";
import { ScaleDimensionIntervalElementContext } from "./wcpsParser";
import { DimensionBoundConcatenationElementContext } from "./wcpsParser";
import { DimensionIntervalElementContext } from "./wcpsParser";
import { TimeIntervalElementContext } from "./wcpsParser";
import { TimeExtractorElementContext } from "./wcpsParser";
import { TimeTruncatorElementContext } from "./wcpsParser";
import { WktPointsContext } from "./wcpsParser";
import { WktPointElementListContext } from "./wcpsParser";
import { WktLineStringContext } from "./wcpsParser";
import { WktPolygonContext } from "./wcpsParser";
import { WktMultipolygonContext } from "./wcpsParser";
import { WktCoverageExpressionContext } from "./wcpsParser";
import { WktExpressionContext } from "./wcpsParser";
import { CurtainProjectionAxisLabel1Context } from "./wcpsParser";
import { CurtainProjectionAxisLabel2Context } from "./wcpsParser";
import { ClipCurtainExpressionContext } from "./wcpsParser";
import { CorridorProjectionAxisLabel1Context } from "./wcpsParser";
import { CorridorProjectionAxisLabel2Context } from "./wcpsParser";
import { CorridorWKTLabel1Context } from "./wcpsParser";
import { CorridorWKTLabel2Context } from "./wcpsParser";
import { ClipCorridorExpressionContext } from "./wcpsParser";
import { ClipWKTExpressionContext } from "./wcpsParser";
import { CrsTransformExpressionContext } from "./wcpsParser";
import { CrsTransformShorthandExpressionContext } from "./wcpsParser";
import { PolygonizeExpressionContext } from "./wcpsParser";
import { DimensionCrsListContext } from "./wcpsParser";
import { DimensionGeoXYResolutionsListContext } from "./wcpsParser";
import { DimensionGeoXYResolutionContext } from "./wcpsParser";
import { DimensionCrsElementContext } from "./wcpsParser";
import { InterpolationTypeContext } from "./wcpsParser";
import { CoverageConstructorExpressionContext } from "./wcpsParser";
import { AxisIteratorContext } from "./wcpsParser";
import { RegularTimeStepContext } from "./wcpsParser";
import { IntervalExpressionContext } from "./wcpsParser";
import { CoverageConstantExpressionContext } from "./wcpsParser";
import { AxisSpecContext } from "./wcpsParser";
import { CondenseExpressionContext } from "./wcpsParser";
import { ReduceBooleanExpressionOperatorContext } from "./wcpsParser";
import { ReduceNumericalExpressionOperatorContext } from "./wcpsParser";
import { ReduceBooleanExpressionContext } from "./wcpsParser";
import { ReduceNumericalExpressionContext } from "./wcpsParser";
import { ReduceExpressionContext } from "./wcpsParser";
import { CondenseExpressionOperatorContext } from "./wcpsParser";
import { GeneralCondenseExpressionContext } from "./wcpsParser";
import { FlipExpressionContext } from "./wcpsParser";
import { SortExpressionContext } from "./wcpsParser";
import { SwitchCaseExpressionContext } from "./wcpsParser";
import { SwitchCaseElementContext } from "./wcpsParser";
import { SwitchCaseElementListContext } from "./wcpsParser";
import { SwitchCaseDefaultElementContext } from "./wcpsParser";
import { CrsNameContext } from "./wcpsParser";
import { AxisNameContext } from "./wcpsParser";
import { NumberContext } from "./wcpsParser";
import { ConstantContext } from "./wcpsParser";
import { SortingOrderContext } from "./wcpsParser";
import { CoverageExpressionListContext } from "./wcpsParser";
import { UdfNameContext } from "./wcpsParser";
import { UdfExpressionContext } from "./wcpsParser";
import { QualifiedCoverageIdentifierContext } from "./wcpsParser";
import { NullClauseContext } from "./wcpsParser";
import { NullSetFromContext } from "./wcpsParser";
import { NullSetMemberListContext } from "./wcpsParser";
import { NullSetMemberContext } from "./wcpsParser";
import { NullSetMemberValueContext } from "./wcpsParser";
import { NullMaskContext } from "./wcpsParser";
import { NullMaskDiscardContext } from "./wcpsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `wcpsParser`.
 */
export default class wcpsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `wcpsParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	enterWcpsQuery?: (ctx: WcpsQueryContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	exitWcpsQuery?: (ctx: WcpsQueryContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.forClauseList`.
	 * @param ctx the parse tree
	 */
	enterForClauseList?: (ctx: ForClauseListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.forClauseList`.
	 * @param ctx the parse tree
	 */
	exitForClauseList?: (ctx: ForClauseListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageIdForClause`.
	 * @param ctx the parse tree
	 */
	enterCoverageIdForClause?: (ctx: CoverageIdForClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageIdForClause`.
	 * @param ctx the parse tree
	 */
	exitCoverageIdForClause?: (ctx: CoverageIdForClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.forClause`.
	 * @param ctx the parse tree
	 */
	enterForClause?: (ctx: ForClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.forClause`.
	 * @param ctx the parse tree
	 */
	exitForClause?: (ctx: ForClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.letClauseList`.
	 * @param ctx the parse tree
	 */
	enterLetClauseList?: (ctx: LetClauseListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.letClauseList`.
	 * @param ctx the parse tree
	 */
	exitLetClauseList?: (ctx: LetClauseListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.letClause`.
	 * @param ctx the parse tree
	 */
	enterLetClause?: (ctx: LetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.letClause`.
	 * @param ctx the parse tree
	 */
	exitLetClause?: (ctx: LetClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.letClauseWithDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	enterLetClauseWithDimensionIntervalList?: (ctx: LetClauseWithDimensionIntervalListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.letClauseWithDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	exitLetClauseWithDimensionIntervalList?: (ctx: LetClauseWithDimensionIntervalListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.letClauseWithCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterLetClauseWithCoverageExpression?: (ctx: LetClauseWithCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.letClauseWithCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitLetClauseWithCoverageExpression?: (ctx: LetClauseWithCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.returnClause`.
	 * @param ctx the parse tree
	 */
	enterReturnClause?: (ctx: ReturnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.returnClause`.
	 * @param ctx the parse tree
	 */
	exitReturnClause?: (ctx: ReturnClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.domainPropertyValueExtraction`.
	 * @param ctx the parse tree
	 */
	enterDomainPropertyValueExtraction?: (ctx: DomainPropertyValueExtractionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.domainPropertyValueExtraction`.
	 * @param ctx the parse tree
	 */
	exitDomainPropertyValueExtraction?: (ctx: DomainPropertyValueExtractionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.domainIntervals`.
	 * @param ctx the parse tree
	 */
	enterDomainIntervals?: (ctx: DomainIntervalsContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.domainIntervals`.
	 * @param ctx the parse tree
	 */
	exitDomainIntervals?: (ctx: DomainIntervalsContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.geoXYAxisLabelAndDomainResolution`.
	 * @param ctx the parse tree
	 */
	enterGeoXYAxisLabelAndDomainResolution?: (ctx: GeoXYAxisLabelAndDomainResolutionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.geoXYAxisLabelAndDomainResolution`.
	 * @param ctx the parse tree
	 */
	exitGeoXYAxisLabelAndDomainResolution?: (ctx: GeoXYAxisLabelAndDomainResolutionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	enterCoverageVariableName?: (ctx: CoverageVariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	exitCoverageVariableName?: (ctx: CoverageVariableNameContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.processingExpression`.
	 * @param ctx the parse tree
	 */
	enterProcessingExpression?: (ctx: ProcessingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.processingExpression`.
	 * @param ctx the parse tree
	 */
	exitProcessingExpression?: (ctx: ProcessingExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scalarValueCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterScalarValueCoverageExpression?: (ctx: ScalarValueCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scalarValueCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitScalarValueCoverageExpression?: (ctx: ScalarValueCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scalarExpression`.
	 * @param ctx the parse tree
	 */
	enterScalarExpression?: (ctx: ScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scalarExpression`.
	 * @param ctx the parse tree
	 */
	exitScalarExpression?: (ctx: ScalarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanScalarExpression?: (ctx: BooleanScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanScalarExpression?: (ctx: BooleanScalarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanUnaryOperator?: (ctx: BooleanUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanUnaryOperator?: (ctx: BooleanUnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstant?: (ctx: BooleanConstantContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstant?: (ctx: BooleanConstantContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanOperator?: (ctx: BooleanOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanOperator?: (ctx: BooleanOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.numericalComparissonOperator`.
	 * @param ctx the parse tree
	 */
	enterNumericalComparissonOperator?: (ctx: NumericalComparissonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.numericalComparissonOperator`.
	 * @param ctx the parse tree
	 */
	exitNumericalComparissonOperator?: (ctx: NumericalComparissonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.stringOperator`.
	 * @param ctx the parse tree
	 */
	enterStringOperator?: (ctx: StringOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.stringOperator`.
	 * @param ctx the parse tree
	 */
	exitStringOperator?: (ctx: StringOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterStringScalarExpression?: (ctx: StringScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitStringScalarExpression?: (ctx: StringScalarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.starExpression`.
	 * @param ctx the parse tree
	 */
	enterStarExpression?: (ctx: StarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.starExpression`.
	 * @param ctx the parse tree
	 */
	exitStarExpression?: (ctx: StarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanSwitchCaseCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanSwitchCaseCoverageExpression?: (ctx: BooleanSwitchCaseCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanSwitchCaseCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanSwitchCaseCoverageExpression?: (ctx: BooleanSwitchCaseCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.booleanSwitchCaseCombinedExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanSwitchCaseCombinedExpression?: (ctx: BooleanSwitchCaseCombinedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.booleanSwitchCaseCombinedExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanSwitchCaseCombinedExpression?: (ctx: BooleanSwitchCaseCombinedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalScalarExpression?: (ctx: NumericalScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalScalarExpression?: (ctx: NumericalScalarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	enterComplexNumberConstant?: (ctx: ComplexNumberConstantContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	exitComplexNumberConstant?: (ctx: ComplexNumberConstantContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.numericalOperator`.
	 * @param ctx the parse tree
	 */
	enterNumericalOperator?: (ctx: NumericalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.numericalOperator`.
	 * @param ctx the parse tree
	 */
	exitNumericalOperator?: (ctx: NumericalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.numericalUnaryOperation`.
	 * @param ctx the parse tree
	 */
	enterNumericalUnaryOperation?: (ctx: NumericalUnaryOperationContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.numericalUnaryOperation`.
	 * @param ctx the parse tree
	 */
	exitNumericalUnaryOperation?: (ctx: NumericalUnaryOperationContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.trigonometricOperator`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricOperator?: (ctx: TrigonometricOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.trigonometricOperator`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricOperator?: (ctx: TrigonometricOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.getComponentExpression`.
	 * @param ctx the parse tree
	 */
	enterGetComponentExpression?: (ctx: GetComponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.getComponentExpression`.
	 * @param ctx the parse tree
	 */
	exitGetComponentExpression?: (ctx: GetComponentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageExpressionNullSetRetrieving`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionNullSetRetrieving?: (ctx: CoverageExpressionNullSetRetrievingContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageExpressionNullSetRetrieving`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionNullSetRetrieving?: (ctx: CoverageExpressionNullSetRetrievingContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageIdentifierExpression?: (ctx: CoverageIdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageIdentifierExpression?: (ctx: CoverageIdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.cellCountExpression`.
	 * @param ctx the parse tree
	 */
	enterCellCountExpression?: (ctx: CellCountExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.cellCountExpression`.
	 * @param ctx the parse tree
	 */
	exitCellCountExpression?: (ctx: CellCountExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageCrsSetExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageCrsSetExpression?: (ctx: CoverageCrsSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageCrsSetExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageCrsSetExpression?: (ctx: CoverageCrsSetExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.domainExpression`.
	 * @param ctx the parse tree
	 */
	enterDomainExpression?: (ctx: DomainExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.domainExpression`.
	 * @param ctx the parse tree
	 */
	exitDomainExpression?: (ctx: DomainExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.imageCrsDomainByDimensionExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsDomainByDimensionExpression?: (ctx: ImageCrsDomainByDimensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.imageCrsDomainByDimensionExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsDomainByDimensionExpression?: (ctx: ImageCrsDomainByDimensionExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.imageCrsDomainExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsDomainExpression?: (ctx: ImageCrsDomainExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.imageCrsDomainExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsDomainExpression?: (ctx: ImageCrsDomainExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.imageCrsExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsExpression?: (ctx: ImageCrsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.imageCrsExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsExpression?: (ctx: ImageCrsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDescribeCoverageExpression?: (ctx: DescribeCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDescribeCoverageExpression?: (ctx: DescribeCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.positionalParamater`.
	 * @param ctx the parse tree
	 */
	enterPositionalParamater?: (ctx: PositionalParamaterContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.positionalParamater`.
	 * @param ctx the parse tree
	 */
	exitPositionalParamater?: (ctx: PositionalParamaterContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.extraParams`.
	 * @param ctx the parse tree
	 */
	enterExtraParams?: (ctx: ExtraParamsContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.extraParams`.
	 * @param ctx the parse tree
	 */
	exitExtraParams?: (ctx: ExtraParamsContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterEncodedCoverageExpression?: (ctx: EncodedCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitEncodedCoverageExpression?: (ctx: EncodedCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDecodeCoverageExpression?: (ctx: DecodeCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDecodeCoverageExpression?: (ctx: DecodeCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageExpressionInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionInParenthesis?: (ctx: CoverageExpressionInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageExpressionInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionInParenthesis?: (ctx: CoverageExpressionInParenthesisContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpression?: (ctx: CoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpression?: (ctx: CoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageArithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterCoverageArithmeticOperator?: (ctx: CoverageArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageArithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitCoverageArithmeticOperator?: (ctx: CoverageArithmeticOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.unaryArithmeticExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithmeticExpressionOperator?: (ctx: UnaryArithmeticExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.unaryArithmeticExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithmeticExpressionOperator?: (ctx: UnaryArithmeticExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithmeticExpression?: (ctx: UnaryArithmeticExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithmeticExpression?: (ctx: UnaryArithmeticExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricExpression?: (ctx: TrigonometricExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricExpression?: (ctx: TrigonometricExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.exponentialExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpressionOperator?: (ctx: ExponentialExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.exponentialExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpressionOperator?: (ctx: ExponentialExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.unaryPowerExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPowerExpression?: (ctx: UnaryPowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.unaryPowerExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPowerExpression?: (ctx: UnaryPowerExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.unaryModExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryModExpression?: (ctx: UnaryModExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.unaryModExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryModExpression?: (ctx: UnaryModExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.minBinaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMinBinaryExpression?: (ctx: MinBinaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.minBinaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMinBinaryExpression?: (ctx: MinBinaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.maxBinaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMaxBinaryExpression?: (ctx: MaxBinaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.maxBinaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMaxBinaryExpression?: (ctx: MaxBinaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryBooleanExpression?: (ctx: UnaryBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryBooleanExpression?: (ctx: UnaryBooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.rangeType`.
	 * @param ctx the parse tree
	 */
	enterRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.rangeType`.
	 * @param ctx the parse tree
	 */
	exitRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorExpression?: (ctx: RangeConstructorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorExpression?: (ctx: RangeConstructorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.rangeConstructorElement`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorElement?: (ctx: RangeConstructorElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.rangeConstructorElement`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorElement?: (ctx: RangeConstructorElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.rangeConstructorElementList`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorElementList?: (ctx: RangeConstructorElementListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.rangeConstructorElementList`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorElementList?: (ctx: RangeConstructorElementListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.rangeConstructorSwitchCaseExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorSwitchCaseExpression?: (ctx: RangeConstructorSwitchCaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.rangeConstructorSwitchCaseExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorSwitchCaseExpression?: (ctx: RangeConstructorSwitchCaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointList?: (ctx: DimensionPointListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointList?: (ctx: DimensionPointListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointElement?: (ctx: DimensionPointElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointElement?: (ctx: DimensionPointElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	enterDimensionIntervalList?: (ctx: DimensionIntervalListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	exitDimensionIntervalList?: (ctx: DimensionIntervalListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scaleDimensionPointElement`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionPointElement?: (ctx: ScaleDimensionPointElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scaleDimensionPointElement`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionPointElement?: (ctx: ScaleDimensionPointElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scaleDimensionPointList`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionPointList?: (ctx: ScaleDimensionPointListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scaleDimensionPointList`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionPointList?: (ctx: ScaleDimensionPointListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scaleDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionIntervalList?: (ctx: ScaleDimensionIntervalListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scaleDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionIntervalList?: (ctx: ScaleDimensionIntervalListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.scaleDimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionIntervalElement?: (ctx: ScaleDimensionIntervalElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.scaleDimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionIntervalElement?: (ctx: ScaleDimensionIntervalElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionBoundConcatenationElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionBoundConcatenationElement?: (ctx: DimensionBoundConcatenationElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionBoundConcatenationElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionBoundConcatenationElement?: (ctx: DimensionBoundConcatenationElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionIntervalElement?: (ctx: DimensionIntervalElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionIntervalElement?: (ctx: DimensionIntervalElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.timeIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterTimeIntervalElement?: (ctx: TimeIntervalElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.timeIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitTimeIntervalElement?: (ctx: TimeIntervalElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.timeExtractorElement`.
	 * @param ctx the parse tree
	 */
	enterTimeExtractorElement?: (ctx: TimeExtractorElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.timeExtractorElement`.
	 * @param ctx the parse tree
	 */
	exitTimeExtractorElement?: (ctx: TimeExtractorElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.timeTruncatorElement`.
	 * @param ctx the parse tree
	 */
	enterTimeTruncatorElement?: (ctx: TimeTruncatorElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.timeTruncatorElement`.
	 * @param ctx the parse tree
	 */
	exitTimeTruncatorElement?: (ctx: TimeTruncatorElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktPoints`.
	 * @param ctx the parse tree
	 */
	enterWktPoints?: (ctx: WktPointsContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktPoints`.
	 * @param ctx the parse tree
	 */
	exitWktPoints?: (ctx: WktPointsContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktPointElementList`.
	 * @param ctx the parse tree
	 */
	enterWktPointElementList?: (ctx: WktPointElementListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktPointElementList`.
	 * @param ctx the parse tree
	 */
	exitWktPointElementList?: (ctx: WktPointElementListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktLineString`.
	 * @param ctx the parse tree
	 */
	enterWktLineString?: (ctx: WktLineStringContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktLineString`.
	 * @param ctx the parse tree
	 */
	exitWktLineString?: (ctx: WktLineStringContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktPolygon`.
	 * @param ctx the parse tree
	 */
	enterWktPolygon?: (ctx: WktPolygonContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktPolygon`.
	 * @param ctx the parse tree
	 */
	exitWktPolygon?: (ctx: WktPolygonContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktMultipolygon`.
	 * @param ctx the parse tree
	 */
	enterWktMultipolygon?: (ctx: WktMultipolygonContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktMultipolygon`.
	 * @param ctx the parse tree
	 */
	exitWktMultipolygon?: (ctx: WktMultipolygonContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterWktCoverageExpression?: (ctx: WktCoverageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitWktCoverageExpression?: (ctx: WktCoverageExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.wktExpression`.
	 * @param ctx the parse tree
	 */
	enterWktExpression?: (ctx: WktExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.wktExpression`.
	 * @param ctx the parse tree
	 */
	exitWktExpression?: (ctx: WktExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.curtainProjectionAxisLabel1`.
	 * @param ctx the parse tree
	 */
	enterCurtainProjectionAxisLabel1?: (ctx: CurtainProjectionAxisLabel1Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.curtainProjectionAxisLabel1`.
	 * @param ctx the parse tree
	 */
	exitCurtainProjectionAxisLabel1?: (ctx: CurtainProjectionAxisLabel1Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.curtainProjectionAxisLabel2`.
	 * @param ctx the parse tree
	 */
	enterCurtainProjectionAxisLabel2?: (ctx: CurtainProjectionAxisLabel2Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.curtainProjectionAxisLabel2`.
	 * @param ctx the parse tree
	 */
	exitCurtainProjectionAxisLabel2?: (ctx: CurtainProjectionAxisLabel2Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.clipCurtainExpression`.
	 * @param ctx the parse tree
	 */
	enterClipCurtainExpression?: (ctx: ClipCurtainExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.clipCurtainExpression`.
	 * @param ctx the parse tree
	 */
	exitClipCurtainExpression?: (ctx: ClipCurtainExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.corridorProjectionAxisLabel1`.
	 * @param ctx the parse tree
	 */
	enterCorridorProjectionAxisLabel1?: (ctx: CorridorProjectionAxisLabel1Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.corridorProjectionAxisLabel1`.
	 * @param ctx the parse tree
	 */
	exitCorridorProjectionAxisLabel1?: (ctx: CorridorProjectionAxisLabel1Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.corridorProjectionAxisLabel2`.
	 * @param ctx the parse tree
	 */
	enterCorridorProjectionAxisLabel2?: (ctx: CorridorProjectionAxisLabel2Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.corridorProjectionAxisLabel2`.
	 * @param ctx the parse tree
	 */
	exitCorridorProjectionAxisLabel2?: (ctx: CorridorProjectionAxisLabel2Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.corridorWKTLabel1`.
	 * @param ctx the parse tree
	 */
	enterCorridorWKTLabel1?: (ctx: CorridorWKTLabel1Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.corridorWKTLabel1`.
	 * @param ctx the parse tree
	 */
	exitCorridorWKTLabel1?: (ctx: CorridorWKTLabel1Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.corridorWKTLabel2`.
	 * @param ctx the parse tree
	 */
	enterCorridorWKTLabel2?: (ctx: CorridorWKTLabel2Context) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.corridorWKTLabel2`.
	 * @param ctx the parse tree
	 */
	exitCorridorWKTLabel2?: (ctx: CorridorWKTLabel2Context) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.clipCorridorExpression`.
	 * @param ctx the parse tree
	 */
	enterClipCorridorExpression?: (ctx: ClipCorridorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.clipCorridorExpression`.
	 * @param ctx the parse tree
	 */
	exitClipCorridorExpression?: (ctx: ClipCorridorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.clipWKTExpression`.
	 * @param ctx the parse tree
	 */
	enterClipWKTExpression?: (ctx: ClipWKTExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.clipWKTExpression`.
	 * @param ctx the parse tree
	 */
	exitClipWKTExpression?: (ctx: ClipWKTExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	enterCrsTransformExpression?: (ctx: CrsTransformExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	exitCrsTransformExpression?: (ctx: CrsTransformExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.crsTransformShorthandExpression`.
	 * @param ctx the parse tree
	 */
	enterCrsTransformShorthandExpression?: (ctx: CrsTransformShorthandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.crsTransformShorthandExpression`.
	 * @param ctx the parse tree
	 */
	exitCrsTransformShorthandExpression?: (ctx: CrsTransformShorthandExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.polygonizeExpression`.
	 * @param ctx the parse tree
	 */
	enterPolygonizeExpression?: (ctx: PolygonizeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.polygonizeExpression`.
	 * @param ctx the parse tree
	 */
	exitPolygonizeExpression?: (ctx: PolygonizeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsList?: (ctx: DimensionCrsListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsList?: (ctx: DimensionCrsListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionGeoXYResolutionsList`.
	 * @param ctx the parse tree
	 */
	enterDimensionGeoXYResolutionsList?: (ctx: DimensionGeoXYResolutionsListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionGeoXYResolutionsList`.
	 * @param ctx the parse tree
	 */
	exitDimensionGeoXYResolutionsList?: (ctx: DimensionGeoXYResolutionsListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionGeoXYResolution`.
	 * @param ctx the parse tree
	 */
	enterDimensionGeoXYResolution?: (ctx: DimensionGeoXYResolutionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionGeoXYResolution`.
	 * @param ctx the parse tree
	 */
	exitDimensionGeoXYResolution?: (ctx: DimensionGeoXYResolutionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsElement?: (ctx: DimensionCrsElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsElement?: (ctx: DimensionCrsElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	enterInterpolationType?: (ctx: InterpolationTypeContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	exitInterpolationType?: (ctx: InterpolationTypeContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstructorExpression?: (ctx: CoverageConstructorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstructorExpression?: (ctx: CoverageConstructorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	enterAxisIterator?: (ctx: AxisIteratorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	exitAxisIterator?: (ctx: AxisIteratorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.regularTimeStep`.
	 * @param ctx the parse tree
	 */
	enterRegularTimeStep?: (ctx: RegularTimeStepContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.regularTimeStep`.
	 * @param ctx the parse tree
	 */
	exitRegularTimeStep?: (ctx: RegularTimeStepContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpression?: (ctx: IntervalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpression?: (ctx: IntervalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstantExpression?: (ctx: CoverageConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstantExpression?: (ctx: CoverageConstantExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	enterAxisSpec?: (ctx: AxisSpecContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	exitAxisSpec?: (ctx: AxisSpecContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.condenseExpression`.
	 * @param ctx the parse tree
	 */
	enterCondenseExpression?: (ctx: CondenseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.condenseExpression`.
	 * @param ctx the parse tree
	 */
	exitCondenseExpression?: (ctx: CondenseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.reduceBooleanExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterReduceBooleanExpressionOperator?: (ctx: ReduceBooleanExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.reduceBooleanExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitReduceBooleanExpressionOperator?: (ctx: ReduceBooleanExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.reduceNumericalExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterReduceNumericalExpressionOperator?: (ctx: ReduceNumericalExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.reduceNumericalExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitReduceNumericalExpressionOperator?: (ctx: ReduceNumericalExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceBooleanExpression?: (ctx: ReduceBooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceBooleanExpression?: (ctx: ReduceBooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceNumericalExpression?: (ctx: ReduceNumericalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceNumericalExpression?: (ctx: ReduceNumericalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.reduceExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceExpression?: (ctx: ReduceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.reduceExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceExpression?: (ctx: ReduceExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.condenseExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterCondenseExpressionOperator?: (ctx: CondenseExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.condenseExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitCondenseExpressionOperator?: (ctx: CondenseExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneralCondenseExpression?: (ctx: GeneralCondenseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneralCondenseExpression?: (ctx: GeneralCondenseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.flipExpression`.
	 * @param ctx the parse tree
	 */
	enterFlipExpression?: (ctx: FlipExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.flipExpression`.
	 * @param ctx the parse tree
	 */
	exitFlipExpression?: (ctx: FlipExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.sortExpression`.
	 * @param ctx the parse tree
	 */
	enterSortExpression?: (ctx: SortExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.sortExpression`.
	 * @param ctx the parse tree
	 */
	exitSortExpression?: (ctx: SortExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.switchCaseExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchCaseExpression?: (ctx: SwitchCaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.switchCaseExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchCaseExpression?: (ctx: SwitchCaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.switchCaseElement`.
	 * @param ctx the parse tree
	 */
	enterSwitchCaseElement?: (ctx: SwitchCaseElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.switchCaseElement`.
	 * @param ctx the parse tree
	 */
	exitSwitchCaseElement?: (ctx: SwitchCaseElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.switchCaseElementList`.
	 * @param ctx the parse tree
	 */
	enterSwitchCaseElementList?: (ctx: SwitchCaseElementListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.switchCaseElementList`.
	 * @param ctx the parse tree
	 */
	exitSwitchCaseElementList?: (ctx: SwitchCaseElementListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.switchCaseDefaultElement`.
	 * @param ctx the parse tree
	 */
	enterSwitchCaseDefaultElement?: (ctx: SwitchCaseDefaultElementContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.switchCaseDefaultElement`.
	 * @param ctx the parse tree
	 */
	exitSwitchCaseDefaultElement?: (ctx: SwitchCaseDefaultElementContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.crsName`.
	 * @param ctx the parse tree
	 */
	enterCrsName?: (ctx: CrsNameContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.crsName`.
	 * @param ctx the parse tree
	 */
	exitCrsName?: (ctx: CrsNameContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.axisName`.
	 * @param ctx the parse tree
	 */
	enterAxisName?: (ctx: AxisNameContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.axisName`.
	 * @param ctx the parse tree
	 */
	exitAxisName?: (ctx: AxisNameContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.sortingOrder`.
	 * @param ctx the parse tree
	 */
	enterSortingOrder?: (ctx: SortingOrderContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.sortingOrder`.
	 * @param ctx the parse tree
	 */
	exitSortingOrder?: (ctx: SortingOrderContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.coverageExpressionList`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionList?: (ctx: CoverageExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.coverageExpressionList`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionList?: (ctx: CoverageExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.udfName`.
	 * @param ctx the parse tree
	 */
	enterUdfName?: (ctx: UdfNameContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.udfName`.
	 * @param ctx the parse tree
	 */
	exitUdfName?: (ctx: UdfNameContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.udfExpression`.
	 * @param ctx the parse tree
	 */
	enterUdfExpression?: (ctx: UdfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.udfExpression`.
	 * @param ctx the parse tree
	 */
	exitUdfExpression?: (ctx: UdfExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.qualifiedCoverageIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiedCoverageIdentifier?: (ctx: QualifiedCoverageIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.qualifiedCoverageIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiedCoverageIdentifier?: (ctx: QualifiedCoverageIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullClause`.
	 * @param ctx the parse tree
	 */
	enterNullClause?: (ctx: NullClauseContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullClause`.
	 * @param ctx the parse tree
	 */
	exitNullClause?: (ctx: NullClauseContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullSetFrom`.
	 * @param ctx the parse tree
	 */
	enterNullSetFrom?: (ctx: NullSetFromContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullSetFrom`.
	 * @param ctx the parse tree
	 */
	exitNullSetFrom?: (ctx: NullSetFromContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullSetMemberList`.
	 * @param ctx the parse tree
	 */
	enterNullSetMemberList?: (ctx: NullSetMemberListContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullSetMemberList`.
	 * @param ctx the parse tree
	 */
	exitNullSetMemberList?: (ctx: NullSetMemberListContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullSetMember`.
	 * @param ctx the parse tree
	 */
	enterNullSetMember?: (ctx: NullSetMemberContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullSetMember`.
	 * @param ctx the parse tree
	 */
	exitNullSetMember?: (ctx: NullSetMemberContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullSetMemberValue`.
	 * @param ctx the parse tree
	 */
	enterNullSetMemberValue?: (ctx: NullSetMemberValueContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullSetMemberValue`.
	 * @param ctx the parse tree
	 */
	exitNullSetMemberValue?: (ctx: NullSetMemberValueContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullMask`.
	 * @param ctx the parse tree
	 */
	enterNullMask?: (ctx: NullMaskContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullMask`.
	 * @param ctx the parse tree
	 */
	exitNullMask?: (ctx: NullMaskContext) => void;
	/**
	 * Enter a parse tree produced by `wcpsParser.nullMaskDiscard`.
	 * @param ctx the parse tree
	 */
	enterNullMaskDiscard?: (ctx: NullMaskDiscardContext) => void;
	/**
	 * Exit a parse tree produced by `wcpsParser.nullMaskDiscard`.
	 * @param ctx the parse tree
	 */
	exitNullMaskDiscard?: (ctx: NullMaskDiscardContext) => void;
}


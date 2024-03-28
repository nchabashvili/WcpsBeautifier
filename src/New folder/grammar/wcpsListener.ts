// Generated from wcps.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { WcpsQueryLabelContext } from "./wcpsParser";
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
import { GeoXYAxisLabelAndDomainResolutionLabelContext } from "./wcpsParser";
import { CoverageVariableNameLabelContext } from "./wcpsParser";
import { ProcessingExpressionContext } from "./wcpsParser";
import { ScalarValueCoverageExpressionLabelContext } from "./wcpsParser";
import { ScalarExpressionContext } from "./wcpsParser";
import { BooleanBinaryScalarLabelContext } from "./wcpsParser";
import { BooleanReduceExpressionContext } from "./wcpsParser";
import { BooleanUnaryScalarLabelContext } from "./wcpsParser";
import { BooleanStringComparisonScalarContext } from "./wcpsParser";
import { BooleanConstantLabelContext } from "./wcpsParser";
import { BooleanNumericalComparisonScalarLabelContext } from "./wcpsParser";
import { BooleanUnaryOperatorContext } from "./wcpsParser";
import { BooleanConstantContext } from "./wcpsParser";
import { BooleanOperatorContext } from "./wcpsParser";
import { NumericalComparissonOperatorContext } from "./wcpsParser";
import { StringOperatorContext } from "./wcpsParser";
import { StringScalarExpressionLabelContext } from "./wcpsParser";
import { StarExpressionLabelContext } from "./wcpsParser";
import { BooleanSwitchCaseCoverageExpressionContext } from "./wcpsParser";
import { BooleanSwitchCaseCombinedExpressionContext } from "./wcpsParser";
import { NumericalTrigonometricScalarExpressionLabelContext } from "./wcpsParser";
import { NumericalNanNumberExpressionLabelContext } from "./wcpsParser";
import { NumericalRealNumberExpressionLabelContext } from "./wcpsParser";
import { NumericalCondenseExpressionLabelContext } from "./wcpsParser";
import { NumericalUnaryScalarExpressionLabelContext } from "./wcpsParser";
import { NumericalBinaryScalarExpressionLabelContext } from "./wcpsParser";
import { NumericalComplexNumberConstantContext } from "./wcpsParser";
import { ComplexNumberConstantLabelContext } from "./wcpsParser";
import { NumericalOperatorContext } from "./wcpsParser";
import { NumericalUnaryOperationContext } from "./wcpsParser";
import { TrigonometricOperatorContext } from "./wcpsParser";
import { GetComponentExpressionContext } from "./wcpsParser";
import { CoverageExpressionNullSetRetrievingLabelContext } from "./wcpsParser";
import { CoverageIdentifierExpressionLabelContext } from "./wcpsParser";
import { CellCountExpressionLabelContext } from "./wcpsParser";
import { CoverageCrsSetExpressionLabelContext } from "./wcpsParser";
import { DomainExpressionLabelContext } from "./wcpsParser";
import { ImageCrsDomainByDimensionExpressionLabelContext } from "./wcpsParser";
import { ImageCrsDomainExpressionLabelContext } from "./wcpsParser";
import { ImageCrsExpressionLabelContext } from "./wcpsParser";
import { DescribeCoverageExpressionLabelContext } from "./wcpsParser";
import { PositionalParamaterContext } from "./wcpsParser";
import { ExtraParamsContext } from "./wcpsParser";
import { EncodedCoverageExpressionLabelContext } from "./wcpsParser";
import { DecodedCoverageExpressionLabelContext } from "./wcpsParser";
import { CoverageExpressionCrsTransformShorthandLabelContext } from "./wcpsParser";
import { CoverageExpressionDynamicallyChangingNullValuesLabelContext } from "./wcpsParser";
import { CoverageExpressionUdfExpressionContext } from "./wcpsParser";
import { CoverageExpressionScaleByImageCrsDomainLabelContext } from "./wcpsParser";
import { CoverageExpressionScaleByDimensionIntervalsLabelContext } from "./wcpsParser";
import { CoverageExpressionDynamicallyChangingNullMaskDiscardLabelContext } from "./wcpsParser";
import { CoverageExpressionOverlayLabelContext } from "./wcpsParser";
import { CoverageExpressionComparissonLabelContext } from "./wcpsParser";
import { CoverageExpressionShortHandSubsetWithLetClauseVariableLabelContext } from "./wcpsParser";
import { CoverageExpressionUnaryBooleanLabelContext } from "./wcpsParser";
import { CoverageExpressionVariableNameLabelContext } from "./wcpsParser";
import { CoverageExpressionGeoXYAxisLabelAndDomainResolutionContext } from "./wcpsParser";
import { CoverageExpressionRangeConstructorLabelContext } from "./wcpsParser";
import { CoverageExpressionExtendByDomainIntervalsLabelContext } from "./wcpsParser";
import { CoverageExpressionCastLabelContext } from "./wcpsParser";
import { CoverageExpressionPowerLabelContext } from "./wcpsParser";
import { CoverageExpresisonFlipLabelContext } from "./wcpsParser";
import { CoverageExpressionDynamicallyChangingNullMaskLabelContext } from "./wcpsParser";
import { CoverageExpressionExtendLabelContext } from "./wcpsParser";
import { CoverageExpressionSwitchCaseLabelContext } from "./wcpsParser";
import { CoverageExpressionTimeTruncatorLabelContext } from "./wcpsParser";
import { CoverageExpressionModLabelContext } from "./wcpsParser";
import { CoverageExpressionTrigonometricLabelContext } from "./wcpsParser";
import { CoverageExpressionDynamicallyChangingNullValuesFromLabelContext } from "./wcpsParser";
import { CoverageExpressionCoverageLabelContext } from "./wcpsParser";
import { CoverageExpressionConstantLabelContext } from "./wcpsParser";
import { CoverageExpressionShorthandSliceLabelContext } from "./wcpsParser";
import { CoverageExpressionSortLabelContext } from "./wcpsParser";
import { CoverageExpressionShorthandSubsetLabelContext } from "./wcpsParser";
import { CoverageExpressionArithmeticLabelContext } from "./wcpsParser";
import { CoverageExpressionExponentialLabelContext } from "./wcpsParser";
import { CoverageExpressionPolygonizeLabelContext } from "./wcpsParser";
import { CoverageExpressionLogicLabelContext } from "./wcpsParser";
import { CoverageExpressionSliceLabelContext } from "./wcpsParser";
import { CoverageExpressionClipCurtainLabelContext } from "./wcpsParser";
import { CoverageExpressionRangeSubsettingLabelContext } from "./wcpsParser";
import { CoverageExpressionMaxBinaryLabelContext } from "./wcpsParser";
import { CoverageExpressionDomainIntervalsLabelContext } from "./wcpsParser";
import { CoverageExpressionScaleByFactorLabelContext } from "./wcpsParser";
import { CoverageIsNullExpressionContext } from "./wcpsParser";
import { CoverageExpressionClipWKTLabelContext } from "./wcpsParser";
import { CoverageExpressionScalarLabelContext } from "./wcpsParser";
import { CoverageExpressionTrimCoverageLabelContext } from "./wcpsParser";
import { CoverageExpressionMinBinaryLabelContext } from "./wcpsParser";
import { CoverageExpressionConstructorLabelContext } from "./wcpsParser";
import { CoverageExpressionCrsTransformLabelContext } from "./wcpsParser";
import { CoverageExpressionDecodeLabelContext } from "./wcpsParser";
import { CoverageExpressionScaleByFactorListLabelContext } from "./wcpsParser";
import { CoverageExpressionTimeExtractorLabelContext } from "./wcpsParser";
import { CoverageExpressionUnaryArithmeticLabelContext } from "./wcpsParser";
import { CoverageExpressionClipCorridorLabelContext } from "./wcpsParser";
import { CoverageArithmeticOperatorContext } from "./wcpsParser";
import { UnaryArithmeticExpressionOperatorContext } from "./wcpsParser";
import { UnaryCoverageArithmeticExpressionLabelContext } from "./wcpsParser";
import { TrigonometricExpressionLabelContext } from "./wcpsParser";
import { ExponentialExpressionOperatorContext } from "./wcpsParser";
import { ExponentialExpressionLabelContext } from "./wcpsParser";
import { UnaryPowerExpressionLabelContext } from "./wcpsParser";
import { UnaryModExpressionLabelContext } from "./wcpsParser";
import { MinBinaryExpressionLabelContext } from "./wcpsParser";
import { MaxBinaryExpressionLabelContext } from "./wcpsParser";
import { NotUnaryBooleanExpressionLabelContext } from "./wcpsParser";
import { BitUnaryBooleanExpressionLabelContext } from "./wcpsParser";
import { RangeTypeContext } from "./wcpsParser";
import { CastExpressionLabelContext } from "./wcpsParser";
import { FieldNameContext } from "./wcpsParser";
import { RangeConstructorExpressionLabelContext } from "./wcpsParser";
import { RangeConstructorElementLabelContext } from "./wcpsParser";
import { RangeConstructorElementListLabelContext } from "./wcpsParser";
import { RangeConstructorSwitchCaseExpressionLabelContext } from "./wcpsParser";
import { DimensionPointListLabelContext } from "./wcpsParser";
import { DimensionPointElementLabelContext } from "./wcpsParser";
import { DimensionIntervalListContext } from "./wcpsParser";
import { SliceScaleDimensionPointElementLabelContext } from "./wcpsParser";
import { ScaleDimensionPointListLabelContext } from "./wcpsParser";
import { ScaleDimensionIntervalListLabelContext } from "./wcpsParser";
import { TrimScaleDimensionIntervalElementLabelContext } from "./wcpsParser";
import { DimensionBoundConcatenationElementLabelContext } from "./wcpsParser";
import { TrimDimensionIntervalElementLabelContext } from "./wcpsParser";
import { TrimDimensionIntervalByImageCrsDomainElementLabelContext } from "./wcpsParser";
import { SliceDimensionIntervalElementLabelContext } from "./wcpsParser";
import { TimeIntervalElementContext } from "./wcpsParser";
import { TimeExtractorElementContext } from "./wcpsParser";
import { TimeTruncatorElementContext } from "./wcpsParser";
import { WktPointsLabelContext } from "./wcpsParser";
import { WKTPointElementListLabelContext } from "./wcpsParser";
import { WKTLineStringLabelContext } from "./wcpsParser";
import { WKTPolygonLabelContext } from "./wcpsParser";
import { WKTMultipolygonLabelContext } from "./wcpsParser";
import { WKTCoverageExpressionLabelContext } from "./wcpsParser";
import { WKTExpressionLabelContext } from "./wcpsParser";
import { CurtainProjectionAxisLabel1Context } from "./wcpsParser";
import { CurtainProjectionAxisLabel2Context } from "./wcpsParser";
import { ClipCurtainExpressionLabelContext } from "./wcpsParser";
import { CorridorProjectionAxisLabel1Context } from "./wcpsParser";
import { CorridorProjectionAxisLabel2Context } from "./wcpsParser";
import { CorridorWKTLabel1Context } from "./wcpsParser";
import { CorridorWKTLabel2Context } from "./wcpsParser";
import { ClipCorridorExpressionLabelContext } from "./wcpsParser";
import { ClipWKTExpressionLabelContext } from "./wcpsParser";
import { CrsTransformExpressionLabelContext } from "./wcpsParser";
import { CrsTransformShorthandExpressionLabelContext } from "./wcpsParser";
import { PolygonizeExpressionLabelContext } from "./wcpsParser";
import { DimensionCrsListLabelContext } from "./wcpsParser";
import { DimensionGeoXYResolutionsListLabelContext } from "./wcpsParser";
import { DimensionGeoXYResolutionContext } from "./wcpsParser";
import { DimensionCrsElementLabelContext } from "./wcpsParser";
import { InterpolationTypeLabelContext } from "./wcpsParser";
import { CoverageConstructorExpressionLabelContext } from "./wcpsParser";
import { AxisIteratorDomainIntervalsLabelContext } from "./wcpsParser";
import { AxisIteratorLabelContext } from "./wcpsParser";
import { AxisIteratorEnumerationListLabelContext } from "./wcpsParser";
import { RegularTimeStepContext } from "./wcpsParser";
import { IntervalExpressionLabelContext } from "./wcpsParser";
import { CoverageConstantExpressionLabelContext } from "./wcpsParser";
import { AxisSpecLabelContext } from "./wcpsParser";
import { CondenseExpressionContext } from "./wcpsParser";
import { ReduceBooleanExpressionOperatorContext } from "./wcpsParser";
import { ReduceNumericalExpressionOperatorContext } from "./wcpsParser";
import { ReduceBooleanExpressionLabelContext } from "./wcpsParser";
import { ReduceNumericalExpressionLabelContext } from "./wcpsParser";
import { ReduceExpressionContext } from "./wcpsParser";
import { CondenseExpressionOperatorContext } from "./wcpsParser";
import { GeneralCondenseExpressionLabelContext } from "./wcpsParser";
import { FlipExpressionLabelContext } from "./wcpsParser";
import { SortExpressionLabelContext } from "./wcpsParser";
import { SwitchCaseExpressionLabelContext } from "./wcpsParser";
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
	 * Enter a parse tree produced by the `WcpsQueryLabel`
	 * labeled alternative in `wcpsParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	enterWcpsQueryLabel?: (ctx: WcpsQueryLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WcpsQueryLabel`
	 * labeled alternative in `wcpsParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	exitWcpsQueryLabel?: (ctx: WcpsQueryLabelContext) => void;
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
	 * Enter a parse tree produced by the `GeoXYAxisLabelAndDomainResolutionLabel`
	 * labeled alternative in `wcpsParser.geoXYAxisLabelAndDomainResolution`.
	 * @param ctx the parse tree
	 */
	enterGeoXYAxisLabelAndDomainResolutionLabel?: (ctx: GeoXYAxisLabelAndDomainResolutionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `GeoXYAxisLabelAndDomainResolutionLabel`
	 * labeled alternative in `wcpsParser.geoXYAxisLabelAndDomainResolution`.
	 * @param ctx the parse tree
	 */
	exitGeoXYAxisLabelAndDomainResolutionLabel?: (ctx: GeoXYAxisLabelAndDomainResolutionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageVariableNameLabel`
	 * labeled alternative in `wcpsParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	enterCoverageVariableNameLabel?: (ctx: CoverageVariableNameLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageVariableNameLabel`
	 * labeled alternative in `wcpsParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	exitCoverageVariableNameLabel?: (ctx: CoverageVariableNameLabelContext) => void;
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
	 * Enter a parse tree produced by the `scalarValueCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.scalarValueCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterScalarValueCoverageExpressionLabel?: (ctx: ScalarValueCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `scalarValueCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.scalarValueCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitScalarValueCoverageExpressionLabel?: (ctx: ScalarValueCoverageExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `BooleanBinaryScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanBinaryScalarLabel?: (ctx: BooleanBinaryScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanBinaryScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanBinaryScalarLabel?: (ctx: BooleanBinaryScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanReduceExpression`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanReduceExpression?: (ctx: BooleanReduceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanReduceExpression`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanReduceExpression?: (ctx: BooleanReduceExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanUnaryScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanUnaryScalarLabel?: (ctx: BooleanUnaryScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanUnaryScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanUnaryScalarLabel?: (ctx: BooleanUnaryScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanStringComparisonScalar`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanStringComparisonScalar?: (ctx: BooleanStringComparisonScalarContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanStringComparisonScalar`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanStringComparisonScalar?: (ctx: BooleanStringComparisonScalarContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanConstantLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstantLabel?: (ctx: BooleanConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanConstantLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstantLabel?: (ctx: BooleanConstantLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanNumericalComparisonScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanNumericalComparisonScalarLabel?: (ctx: BooleanNumericalComparisonScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanNumericalComparisonScalarLabel`
	 * labeled alternative in `wcpsParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanNumericalComparisonScalarLabel?: (ctx: BooleanNumericalComparisonScalarLabelContext) => void;
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
	 * Enter a parse tree produced by the `StringScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterStringScalarExpressionLabel?: (ctx: StringScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `StringScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitStringScalarExpressionLabel?: (ctx: StringScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `StarExpressionLabel`
	 * labeled alternative in `wcpsParser.starExpression`.
	 * @param ctx the parse tree
	 */
	enterStarExpressionLabel?: (ctx: StarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `StarExpressionLabel`
	 * labeled alternative in `wcpsParser.starExpression`.
	 * @param ctx the parse tree
	 */
	exitStarExpressionLabel?: (ctx: StarExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `NumericalTrigonometricScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalTrigonometricScalarExpressionLabel?: (ctx: NumericalTrigonometricScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalTrigonometricScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalTrigonometricScalarExpressionLabel?: (ctx: NumericalTrigonometricScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalNanNumberExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalNanNumberExpressionLabel?: (ctx: NumericalNanNumberExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalNanNumberExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalNanNumberExpressionLabel?: (ctx: NumericalNanNumberExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalRealNumberExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalRealNumberExpressionLabel?: (ctx: NumericalRealNumberExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalRealNumberExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalRealNumberExpressionLabel?: (ctx: NumericalRealNumberExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalCondenseExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalCondenseExpressionLabel?: (ctx: NumericalCondenseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalCondenseExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalCondenseExpressionLabel?: (ctx: NumericalCondenseExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalUnaryScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalUnaryScalarExpressionLabel?: (ctx: NumericalUnaryScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalUnaryScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalUnaryScalarExpressionLabel?: (ctx: NumericalUnaryScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalBinaryScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalBinaryScalarExpressionLabel?: (ctx: NumericalBinaryScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalBinaryScalarExpressionLabel`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalBinaryScalarExpressionLabel?: (ctx: NumericalBinaryScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalComplexNumberConstant`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalComplexNumberConstant?: (ctx: NumericalComplexNumberConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalComplexNumberConstant`
	 * labeled alternative in `wcpsParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalComplexNumberConstant?: (ctx: NumericalComplexNumberConstantContext) => void;
	/**
	 * Enter a parse tree produced by the `ComplexNumberConstantLabel`
	 * labeled alternative in `wcpsParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	enterComplexNumberConstantLabel?: (ctx: ComplexNumberConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ComplexNumberConstantLabel`
	 * labeled alternative in `wcpsParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	exitComplexNumberConstantLabel?: (ctx: ComplexNumberConstantLabelContext) => void;
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
	 * Enter a parse tree produced by the `CoverageExpressionNullSetRetrievingLabel`
	 * labeled alternative in `wcpsParser.coverageExpressionNullSetRetrieving`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionNullSetRetrievingLabel?: (ctx: CoverageExpressionNullSetRetrievingLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionNullSetRetrievingLabel`
	 * labeled alternative in `wcpsParser.coverageExpressionNullSetRetrieving`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionNullSetRetrievingLabel?: (ctx: CoverageExpressionNullSetRetrievingLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageIdentifierExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageIdentifierExpressionLabel?: (ctx: CoverageIdentifierExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageIdentifierExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageIdentifierExpressionLabel?: (ctx: CoverageIdentifierExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CellCountExpressionLabel`
	 * labeled alternative in `wcpsParser.cellCountExpression`.
	 * @param ctx the parse tree
	 */
	enterCellCountExpressionLabel?: (ctx: CellCountExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CellCountExpressionLabel`
	 * labeled alternative in `wcpsParser.cellCountExpression`.
	 * @param ctx the parse tree
	 */
	exitCellCountExpressionLabel?: (ctx: CellCountExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageCrsSetExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageCrsSetExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageCrsSetExpressionLabel?: (ctx: CoverageCrsSetExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageCrsSetExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageCrsSetExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageCrsSetExpressionLabel?: (ctx: CoverageCrsSetExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DomainExpressionLabel`
	 * labeled alternative in `wcpsParser.domainExpression`.
	 * @param ctx the parse tree
	 */
	enterDomainExpressionLabel?: (ctx: DomainExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DomainExpressionLabel`
	 * labeled alternative in `wcpsParser.domainExpression`.
	 * @param ctx the parse tree
	 */
	exitDomainExpressionLabel?: (ctx: DomainExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `imageCrsDomainByDimensionExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsDomainByDimensionExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsDomainByDimensionExpressionLabel?: (ctx: ImageCrsDomainByDimensionExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `imageCrsDomainByDimensionExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsDomainByDimensionExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsDomainByDimensionExpressionLabel?: (ctx: ImageCrsDomainByDimensionExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `imageCrsDomainExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsDomainExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsDomainExpressionLabel?: (ctx: ImageCrsDomainExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `imageCrsDomainExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsDomainExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsDomainExpressionLabel?: (ctx: ImageCrsDomainExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `imageCrsExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsExpression`.
	 * @param ctx the parse tree
	 */
	enterImageCrsExpressionLabel?: (ctx: ImageCrsExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `imageCrsExpressionLabel`
	 * labeled alternative in `wcpsParser.imageCrsExpression`.
	 * @param ctx the parse tree
	 */
	exitImageCrsExpressionLabel?: (ctx: ImageCrsExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DescribeCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDescribeCoverageExpressionLabel?: (ctx: DescribeCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DescribeCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDescribeCoverageExpressionLabel?: (ctx: DescribeCoverageExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `EncodedCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterEncodedCoverageExpressionLabel?: (ctx: EncodedCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `EncodedCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitEncodedCoverageExpressionLabel?: (ctx: EncodedCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DecodedCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDecodedCoverageExpressionLabel?: (ctx: DecodedCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DecodedCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDecodedCoverageExpressionLabel?: (ctx: DecodedCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCrsTransformShorthandLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCrsTransformShorthandLabel?: (ctx: CoverageExpressionCrsTransformShorthandLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCrsTransformShorthandLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCrsTransformShorthandLabel?: (ctx: CoverageExpressionCrsTransformShorthandLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDynamicallyChangingNullValuesLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDynamicallyChangingNullValuesLabel?: (ctx: CoverageExpressionDynamicallyChangingNullValuesLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDynamicallyChangingNullValuesLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDynamicallyChangingNullValuesLabel?: (ctx: CoverageExpressionDynamicallyChangingNullValuesLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionUdfExpression`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionUdfExpression?: (ctx: CoverageExpressionUdfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionUdfExpression`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionUdfExpression?: (ctx: CoverageExpressionUdfExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScaleByImageCrsDomainLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScaleByImageCrsDomainLabel?: (ctx: CoverageExpressionScaleByImageCrsDomainLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScaleByImageCrsDomainLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScaleByImageCrsDomainLabel?: (ctx: CoverageExpressionScaleByImageCrsDomainLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScaleByDimensionIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScaleByDimensionIntervalsLabel?: (ctx: CoverageExpressionScaleByDimensionIntervalsLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScaleByDimensionIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScaleByDimensionIntervalsLabel?: (ctx: CoverageExpressionScaleByDimensionIntervalsLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDynamicallyChangingNullMaskDiscardLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDynamicallyChangingNullMaskDiscardLabel?: (ctx: CoverageExpressionDynamicallyChangingNullMaskDiscardLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDynamicallyChangingNullMaskDiscardLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDynamicallyChangingNullMaskDiscardLabel?: (ctx: CoverageExpressionDynamicallyChangingNullMaskDiscardLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionOverlayLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionOverlayLabel?: (ctx: CoverageExpressionOverlayLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionOverlayLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionOverlayLabel?: (ctx: CoverageExpressionOverlayLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionComparissonLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionComparissonLabel?: (ctx: CoverageExpressionComparissonLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionComparissonLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionComparissonLabel?: (ctx: CoverageExpressionComparissonLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `coverageExpressionShortHandSubsetWithLetClauseVariableLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionShortHandSubsetWithLetClauseVariableLabel?: (ctx: CoverageExpressionShortHandSubsetWithLetClauseVariableLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `coverageExpressionShortHandSubsetWithLetClauseVariableLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionShortHandSubsetWithLetClauseVariableLabel?: (ctx: CoverageExpressionShortHandSubsetWithLetClauseVariableLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionUnaryBooleanLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionUnaryBooleanLabel?: (ctx: CoverageExpressionUnaryBooleanLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionUnaryBooleanLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionUnaryBooleanLabel?: (ctx: CoverageExpressionUnaryBooleanLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionVariableNameLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionVariableNameLabel?: (ctx: CoverageExpressionVariableNameLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionVariableNameLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionVariableNameLabel?: (ctx: CoverageExpressionVariableNameLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionGeoXYAxisLabelAndDomainResolution`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionGeoXYAxisLabelAndDomainResolution?: (ctx: CoverageExpressionGeoXYAxisLabelAndDomainResolutionContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionGeoXYAxisLabelAndDomainResolution`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionGeoXYAxisLabelAndDomainResolution?: (ctx: CoverageExpressionGeoXYAxisLabelAndDomainResolutionContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionRangeConstructorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionRangeConstructorLabel?: (ctx: CoverageExpressionRangeConstructorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionRangeConstructorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionRangeConstructorLabel?: (ctx: CoverageExpressionRangeConstructorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionExtendByDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionExtendByDomainIntervalsLabel?: (ctx: CoverageExpressionExtendByDomainIntervalsLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionExtendByDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionExtendByDomainIntervalsLabel?: (ctx: CoverageExpressionExtendByDomainIntervalsLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCastLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCastLabel?: (ctx: CoverageExpressionCastLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCastLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCastLabel?: (ctx: CoverageExpressionCastLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionPowerLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionPowerLabel?: (ctx: CoverageExpressionPowerLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionPowerLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionPowerLabel?: (ctx: CoverageExpressionPowerLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `coverageExpresisonFlipLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpresisonFlipLabel?: (ctx: CoverageExpresisonFlipLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `coverageExpresisonFlipLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpresisonFlipLabel?: (ctx: CoverageExpresisonFlipLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDynamicallyChangingNullMaskLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDynamicallyChangingNullMaskLabel?: (ctx: CoverageExpressionDynamicallyChangingNullMaskLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDynamicallyChangingNullMaskLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDynamicallyChangingNullMaskLabel?: (ctx: CoverageExpressionDynamicallyChangingNullMaskLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionExtendLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionExtendLabel?: (ctx: CoverageExpressionExtendLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionExtendLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionExtendLabel?: (ctx: CoverageExpressionExtendLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionSwitchCaseLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionSwitchCaseLabel?: (ctx: CoverageExpressionSwitchCaseLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionSwitchCaseLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionSwitchCaseLabel?: (ctx: CoverageExpressionSwitchCaseLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTimeTruncatorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTimeTruncatorLabel?: (ctx: CoverageExpressionTimeTruncatorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTimeTruncatorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTimeTruncatorLabel?: (ctx: CoverageExpressionTimeTruncatorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionModLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionModLabel?: (ctx: CoverageExpressionModLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionModLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionModLabel?: (ctx: CoverageExpressionModLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTrigonometricLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTrigonometricLabel?: (ctx: CoverageExpressionTrigonometricLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTrigonometricLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTrigonometricLabel?: (ctx: CoverageExpressionTrigonometricLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDynamicallyChangingNullValuesFromLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDynamicallyChangingNullValuesFromLabel?: (ctx: CoverageExpressionDynamicallyChangingNullValuesFromLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDynamicallyChangingNullValuesFromLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDynamicallyChangingNullValuesFromLabel?: (ctx: CoverageExpressionDynamicallyChangingNullValuesFromLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCoverageLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCoverageLabel?: (ctx: CoverageExpressionCoverageLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCoverageLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCoverageLabel?: (ctx: CoverageExpressionCoverageLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionConstantLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionConstantLabel?: (ctx: CoverageExpressionConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionConstantLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionConstantLabel?: (ctx: CoverageExpressionConstantLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionShorthandSliceLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionShorthandSliceLabel?: (ctx: CoverageExpressionShorthandSliceLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionShorthandSliceLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionShorthandSliceLabel?: (ctx: CoverageExpressionShorthandSliceLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `coverageExpressionSortLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionSortLabel?: (ctx: CoverageExpressionSortLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `coverageExpressionSortLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionSortLabel?: (ctx: CoverageExpressionSortLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionShorthandSubsetLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionShorthandSubsetLabel?: (ctx: CoverageExpressionShorthandSubsetLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionShorthandSubsetLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionShorthandSubsetLabel?: (ctx: CoverageExpressionShorthandSubsetLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionArithmeticLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionArithmeticLabel?: (ctx: CoverageExpressionArithmeticLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionArithmeticLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionArithmeticLabel?: (ctx: CoverageExpressionArithmeticLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionExponentialLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionExponentialLabel?: (ctx: CoverageExpressionExponentialLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionExponentialLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionExponentialLabel?: (ctx: CoverageExpressionExponentialLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `coverageExpressionPolygonizeLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionPolygonizeLabel?: (ctx: CoverageExpressionPolygonizeLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `coverageExpressionPolygonizeLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionPolygonizeLabel?: (ctx: CoverageExpressionPolygonizeLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionLogicLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionLogicLabel?: (ctx: CoverageExpressionLogicLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionLogicLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionLogicLabel?: (ctx: CoverageExpressionLogicLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionSliceLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionSliceLabel?: (ctx: CoverageExpressionSliceLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionSliceLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionSliceLabel?: (ctx: CoverageExpressionSliceLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionClipCurtainLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionClipCurtainLabel?: (ctx: CoverageExpressionClipCurtainLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionClipCurtainLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionClipCurtainLabel?: (ctx: CoverageExpressionClipCurtainLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionRangeSubsettingLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionRangeSubsettingLabel?: (ctx: CoverageExpressionRangeSubsettingLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionRangeSubsettingLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionRangeSubsettingLabel?: (ctx: CoverageExpressionRangeSubsettingLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionMaxBinaryLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionMaxBinaryLabel?: (ctx: CoverageExpressionMaxBinaryLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionMaxBinaryLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionMaxBinaryLabel?: (ctx: CoverageExpressionMaxBinaryLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDomainIntervalsLabel?: (ctx: CoverageExpressionDomainIntervalsLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDomainIntervalsLabel?: (ctx: CoverageExpressionDomainIntervalsLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScaleByFactorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScaleByFactorLabel?: (ctx: CoverageExpressionScaleByFactorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScaleByFactorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScaleByFactorLabel?: (ctx: CoverageExpressionScaleByFactorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageIsNullExpression`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageIsNullExpression?: (ctx: CoverageIsNullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageIsNullExpression`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageIsNullExpression?: (ctx: CoverageIsNullExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionClipWKTLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionClipWKTLabel?: (ctx: CoverageExpressionClipWKTLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionClipWKTLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionClipWKTLabel?: (ctx: CoverageExpressionClipWKTLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScalarLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScalarLabel?: (ctx: CoverageExpressionScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScalarLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScalarLabel?: (ctx: CoverageExpressionScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTrimCoverageLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTrimCoverageLabel?: (ctx: CoverageExpressionTrimCoverageLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTrimCoverageLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTrimCoverageLabel?: (ctx: CoverageExpressionTrimCoverageLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionMinBinaryLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionMinBinaryLabel?: (ctx: CoverageExpressionMinBinaryLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionMinBinaryLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionMinBinaryLabel?: (ctx: CoverageExpressionMinBinaryLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionConstructorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionConstructorLabel?: (ctx: CoverageExpressionConstructorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionConstructorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionConstructorLabel?: (ctx: CoverageExpressionConstructorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCrsTransformLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCrsTransformLabel?: (ctx: CoverageExpressionCrsTransformLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCrsTransformLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCrsTransformLabel?: (ctx: CoverageExpressionCrsTransformLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDecodeLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDecodeLabel?: (ctx: CoverageExpressionDecodeLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDecodeLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDecodeLabel?: (ctx: CoverageExpressionDecodeLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScaleByFactorListLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScaleByFactorListLabel?: (ctx: CoverageExpressionScaleByFactorListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScaleByFactorListLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScaleByFactorListLabel?: (ctx: CoverageExpressionScaleByFactorListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTimeExtractorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTimeExtractorLabel?: (ctx: CoverageExpressionTimeExtractorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTimeExtractorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTimeExtractorLabel?: (ctx: CoverageExpressionTimeExtractorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionUnaryArithmeticLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionUnaryArithmeticLabel?: (ctx: CoverageExpressionUnaryArithmeticLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionUnaryArithmeticLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionUnaryArithmeticLabel?: (ctx: CoverageExpressionUnaryArithmeticLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionClipCorridorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionClipCorridorLabel?: (ctx: CoverageExpressionClipCorridorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionClipCorridorLabel`
	 * labeled alternative in `wcpsParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionClipCorridorLabel?: (ctx: CoverageExpressionClipCorridorLabelContext) => void;
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
	 * Enter a parse tree produced by the `UnaryCoverageArithmeticExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryCoverageArithmeticExpressionLabel?: (ctx: UnaryCoverageArithmeticExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryCoverageArithmeticExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryCoverageArithmeticExpressionLabel?: (ctx: UnaryCoverageArithmeticExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrigonometricExpressionLabel`
	 * labeled alternative in `wcpsParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricExpressionLabel?: (ctx: TrigonometricExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrigonometricExpressionLabel`
	 * labeled alternative in `wcpsParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricExpressionLabel?: (ctx: TrigonometricExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `ExponentialExpressionLabel`
	 * labeled alternative in `wcpsParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpressionLabel?: (ctx: ExponentialExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ExponentialExpressionLabel`
	 * labeled alternative in `wcpsParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpressionLabel?: (ctx: ExponentialExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryPowerExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryPowerExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPowerExpressionLabel?: (ctx: UnaryPowerExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPowerExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryPowerExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPowerExpressionLabel?: (ctx: UnaryPowerExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryModExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryModExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryModExpressionLabel?: (ctx: UnaryModExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryModExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryModExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryModExpressionLabel?: (ctx: UnaryModExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `minBinaryExpressionLabel`
	 * labeled alternative in `wcpsParser.minBinaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMinBinaryExpressionLabel?: (ctx: MinBinaryExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `minBinaryExpressionLabel`
	 * labeled alternative in `wcpsParser.minBinaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMinBinaryExpressionLabel?: (ctx: MinBinaryExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `maxBinaryExpressionLabel`
	 * labeled alternative in `wcpsParser.maxBinaryExpression`.
	 * @param ctx the parse tree
	 */
	enterMaxBinaryExpressionLabel?: (ctx: MaxBinaryExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `maxBinaryExpressionLabel`
	 * labeled alternative in `wcpsParser.maxBinaryExpression`.
	 * @param ctx the parse tree
	 */
	exitMaxBinaryExpressionLabel?: (ctx: MaxBinaryExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NotUnaryBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNotUnaryBooleanExpressionLabel?: (ctx: NotUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NotUnaryBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNotUnaryBooleanExpressionLabel?: (ctx: NotUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BitUnaryBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBitUnaryBooleanExpressionLabel?: (ctx: BitUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BitUnaryBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBitUnaryBooleanExpressionLabel?: (ctx: BitUnaryBooleanExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `CastExpressionLabel`
	 * labeled alternative in `wcpsParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpressionLabel?: (ctx: CastExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CastExpressionLabel`
	 * labeled alternative in `wcpsParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpressionLabel?: (ctx: CastExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `RangeConstructorExpressionLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorExpressionLabel?: (ctx: RangeConstructorExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeConstructorExpressionLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorExpressionLabel?: (ctx: RangeConstructorExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `rangeConstructorElementLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorElement`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorElementLabel?: (ctx: RangeConstructorElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeConstructorElementLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorElement`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorElementLabel?: (ctx: RangeConstructorElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `rangeConstructorElementListLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorElementList`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorElementListLabel?: (ctx: RangeConstructorElementListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeConstructorElementListLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorElementList`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorElementListLabel?: (ctx: RangeConstructorElementListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `RangeConstructorSwitchCaseExpressionLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorSwitchCaseExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorSwitchCaseExpressionLabel?: (ctx: RangeConstructorSwitchCaseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeConstructorSwitchCaseExpressionLabel`
	 * labeled alternative in `wcpsParser.rangeConstructorSwitchCaseExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorSwitchCaseExpressionLabel?: (ctx: RangeConstructorSwitchCaseExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionPointListLabel`
	 * labeled alternative in `wcpsParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointListLabel?: (ctx: DimensionPointListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionPointListLabel`
	 * labeled alternative in `wcpsParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointListLabel?: (ctx: DimensionPointListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionPointElementLabel`
	 * labeled alternative in `wcpsParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointElementLabel?: (ctx: DimensionPointElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionPointElementLabel`
	 * labeled alternative in `wcpsParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointElementLabel?: (ctx: DimensionPointElementLabelContext) => void;
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
	 * Enter a parse tree produced by the `SliceScaleDimensionPointElementLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionPointElement`.
	 * @param ctx the parse tree
	 */
	enterSliceScaleDimensionPointElementLabel?: (ctx: SliceScaleDimensionPointElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `SliceScaleDimensionPointElementLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionPointElement`.
	 * @param ctx the parse tree
	 */
	exitSliceScaleDimensionPointElementLabel?: (ctx: SliceScaleDimensionPointElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ScaleDimensionPointListLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionPointList`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionPointListLabel?: (ctx: ScaleDimensionPointListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ScaleDimensionPointListLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionPointList`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionPointListLabel?: (ctx: ScaleDimensionPointListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ScaleDimensionIntervalListLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	enterScaleDimensionIntervalListLabel?: (ctx: ScaleDimensionIntervalListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ScaleDimensionIntervalListLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	exitScaleDimensionIntervalListLabel?: (ctx: ScaleDimensionIntervalListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrimScaleDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterTrimScaleDimensionIntervalElementLabel?: (ctx: TrimScaleDimensionIntervalElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrimScaleDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.scaleDimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitTrimScaleDimensionIntervalElementLabel?: (ctx: TrimScaleDimensionIntervalElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionBoundConcatenationElementLabel`
	 * labeled alternative in `wcpsParser.dimensionBoundConcatenationElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionBoundConcatenationElementLabel?: (ctx: DimensionBoundConcatenationElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionBoundConcatenationElementLabel`
	 * labeled alternative in `wcpsParser.dimensionBoundConcatenationElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionBoundConcatenationElementLabel?: (ctx: DimensionBoundConcatenationElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrimDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterTrimDimensionIntervalElementLabel?: (ctx: TrimDimensionIntervalElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrimDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitTrimDimensionIntervalElementLabel?: (ctx: TrimDimensionIntervalElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrimDimensionIntervalByImageCrsDomainElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterTrimDimensionIntervalByImageCrsDomainElementLabel?: (ctx: TrimDimensionIntervalByImageCrsDomainElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrimDimensionIntervalByImageCrsDomainElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitTrimDimensionIntervalByImageCrsDomainElementLabel?: (ctx: TrimDimensionIntervalByImageCrsDomainElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `SliceDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterSliceDimensionIntervalElementLabel?: (ctx: SliceDimensionIntervalElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `SliceDimensionIntervalElementLabel`
	 * labeled alternative in `wcpsParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitSliceDimensionIntervalElementLabel?: (ctx: SliceDimensionIntervalElementLabelContext) => void;
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
	 * Enter a parse tree produced by the `wktPointsLabel`
	 * labeled alternative in `wcpsParser.wktPoints`.
	 * @param ctx the parse tree
	 */
	enterWktPointsLabel?: (ctx: WktPointsLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `wktPointsLabel`
	 * labeled alternative in `wcpsParser.wktPoints`.
	 * @param ctx the parse tree
	 */
	exitWktPointsLabel?: (ctx: WktPointsLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTPointElementListLabel`
	 * labeled alternative in `wcpsParser.wktPointElementList`.
	 * @param ctx the parse tree
	 */
	enterWKTPointElementListLabel?: (ctx: WKTPointElementListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTPointElementListLabel`
	 * labeled alternative in `wcpsParser.wktPointElementList`.
	 * @param ctx the parse tree
	 */
	exitWKTPointElementListLabel?: (ctx: WKTPointElementListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTLineStringLabel`
	 * labeled alternative in `wcpsParser.wktLineString`.
	 * @param ctx the parse tree
	 */
	enterWKTLineStringLabel?: (ctx: WKTLineStringLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTLineStringLabel`
	 * labeled alternative in `wcpsParser.wktLineString`.
	 * @param ctx the parse tree
	 */
	exitWKTLineStringLabel?: (ctx: WKTLineStringLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTPolygonLabel`
	 * labeled alternative in `wcpsParser.wktPolygon`.
	 * @param ctx the parse tree
	 */
	enterWKTPolygonLabel?: (ctx: WKTPolygonLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTPolygonLabel`
	 * labeled alternative in `wcpsParser.wktPolygon`.
	 * @param ctx the parse tree
	 */
	exitWKTPolygonLabel?: (ctx: WKTPolygonLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTMultipolygonLabel`
	 * labeled alternative in `wcpsParser.wktMultipolygon`.
	 * @param ctx the parse tree
	 */
	enterWKTMultipolygonLabel?: (ctx: WKTMultipolygonLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTMultipolygonLabel`
	 * labeled alternative in `wcpsParser.wktMultipolygon`.
	 * @param ctx the parse tree
	 */
	exitWKTMultipolygonLabel?: (ctx: WKTMultipolygonLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.wktCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterWKTCoverageExpressionLabel?: (ctx: WKTCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTCoverageExpressionLabel`
	 * labeled alternative in `wcpsParser.wktCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitWKTCoverageExpressionLabel?: (ctx: WKTCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WKTExpressionLabel`
	 * labeled alternative in `wcpsParser.wktExpression`.
	 * @param ctx the parse tree
	 */
	enterWKTExpressionLabel?: (ctx: WKTExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WKTExpressionLabel`
	 * labeled alternative in `wcpsParser.wktExpression`.
	 * @param ctx the parse tree
	 */
	exitWKTExpressionLabel?: (ctx: WKTExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `ClipCurtainExpressionLabel`
	 * labeled alternative in `wcpsParser.clipCurtainExpression`.
	 * @param ctx the parse tree
	 */
	enterClipCurtainExpressionLabel?: (ctx: ClipCurtainExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ClipCurtainExpressionLabel`
	 * labeled alternative in `wcpsParser.clipCurtainExpression`.
	 * @param ctx the parse tree
	 */
	exitClipCurtainExpressionLabel?: (ctx: ClipCurtainExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `ClipCorridorExpressionLabel`
	 * labeled alternative in `wcpsParser.clipCorridorExpression`.
	 * @param ctx the parse tree
	 */
	enterClipCorridorExpressionLabel?: (ctx: ClipCorridorExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ClipCorridorExpressionLabel`
	 * labeled alternative in `wcpsParser.clipCorridorExpression`.
	 * @param ctx the parse tree
	 */
	exitClipCorridorExpressionLabel?: (ctx: ClipCorridorExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ClipWKTExpressionLabel`
	 * labeled alternative in `wcpsParser.clipWKTExpression`.
	 * @param ctx the parse tree
	 */
	enterClipWKTExpressionLabel?: (ctx: ClipWKTExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ClipWKTExpressionLabel`
	 * labeled alternative in `wcpsParser.clipWKTExpression`.
	 * @param ctx the parse tree
	 */
	exitClipWKTExpressionLabel?: (ctx: ClipWKTExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CrsTransformExpressionLabel`
	 * labeled alternative in `wcpsParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	enterCrsTransformExpressionLabel?: (ctx: CrsTransformExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CrsTransformExpressionLabel`
	 * labeled alternative in `wcpsParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	exitCrsTransformExpressionLabel?: (ctx: CrsTransformExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CrsTransformShorthandExpressionLabel`
	 * labeled alternative in `wcpsParser.crsTransformShorthandExpression`.
	 * @param ctx the parse tree
	 */
	enterCrsTransformShorthandExpressionLabel?: (ctx: CrsTransformShorthandExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CrsTransformShorthandExpressionLabel`
	 * labeled alternative in `wcpsParser.crsTransformShorthandExpression`.
	 * @param ctx the parse tree
	 */
	exitCrsTransformShorthandExpressionLabel?: (ctx: CrsTransformShorthandExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `PolygonizeExpressionLabel`
	 * labeled alternative in `wcpsParser.polygonizeExpression`.
	 * @param ctx the parse tree
	 */
	enterPolygonizeExpressionLabel?: (ctx: PolygonizeExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `PolygonizeExpressionLabel`
	 * labeled alternative in `wcpsParser.polygonizeExpression`.
	 * @param ctx the parse tree
	 */
	exitPolygonizeExpressionLabel?: (ctx: PolygonizeExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionCrsListLabel`
	 * labeled alternative in `wcpsParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsListLabel?: (ctx: DimensionCrsListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionCrsListLabel`
	 * labeled alternative in `wcpsParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsListLabel?: (ctx: DimensionCrsListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionGeoXYResolutionsListLabel`
	 * labeled alternative in `wcpsParser.dimensionGeoXYResolutionsList`.
	 * @param ctx the parse tree
	 */
	enterDimensionGeoXYResolutionsListLabel?: (ctx: DimensionGeoXYResolutionsListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionGeoXYResolutionsListLabel`
	 * labeled alternative in `wcpsParser.dimensionGeoXYResolutionsList`.
	 * @param ctx the parse tree
	 */
	exitDimensionGeoXYResolutionsListLabel?: (ctx: DimensionGeoXYResolutionsListLabelContext) => void;
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
	 * Enter a parse tree produced by the `DimensionCrsElementLabel`
	 * labeled alternative in `wcpsParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsElementLabel?: (ctx: DimensionCrsElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionCrsElementLabel`
	 * labeled alternative in `wcpsParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsElementLabel?: (ctx: DimensionCrsElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `InterpolationTypeLabel`
	 * labeled alternative in `wcpsParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	enterInterpolationTypeLabel?: (ctx: InterpolationTypeLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpolationTypeLabel`
	 * labeled alternative in `wcpsParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	exitInterpolationTypeLabel?: (ctx: InterpolationTypeLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageConstructorExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstructorExpressionLabel?: (ctx: CoverageConstructorExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageConstructorExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstructorExpressionLabel?: (ctx: CoverageConstructorExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisIteratorDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	enterAxisIteratorDomainIntervalsLabel?: (ctx: AxisIteratorDomainIntervalsLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisIteratorDomainIntervalsLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	exitAxisIteratorDomainIntervalsLabel?: (ctx: AxisIteratorDomainIntervalsLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisIteratorLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	enterAxisIteratorLabel?: (ctx: AxisIteratorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisIteratorLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	exitAxisIteratorLabel?: (ctx: AxisIteratorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisIteratorEnumerationListLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	enterAxisIteratorEnumerationListLabel?: (ctx: AxisIteratorEnumerationListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisIteratorEnumerationListLabel`
	 * labeled alternative in `wcpsParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	exitAxisIteratorEnumerationListLabel?: (ctx: AxisIteratorEnumerationListLabelContext) => void;
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
	 * Enter a parse tree produced by the `IntervalExpressionLabel`
	 * labeled alternative in `wcpsParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpressionLabel?: (ctx: IntervalExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `IntervalExpressionLabel`
	 * labeled alternative in `wcpsParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpressionLabel?: (ctx: IntervalExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageConstantExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstantExpressionLabel?: (ctx: CoverageConstantExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageConstantExpressionLabel`
	 * labeled alternative in `wcpsParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstantExpressionLabel?: (ctx: CoverageConstantExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisSpecLabel`
	 * labeled alternative in `wcpsParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	enterAxisSpecLabel?: (ctx: AxisSpecLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisSpecLabel`
	 * labeled alternative in `wcpsParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	exitAxisSpecLabel?: (ctx: AxisSpecLabelContext) => void;
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
	 * Enter a parse tree produced by the `ReduceBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceBooleanExpressionLabel?: (ctx: ReduceBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ReduceBooleanExpressionLabel`
	 * labeled alternative in `wcpsParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceBooleanExpressionLabel?: (ctx: ReduceBooleanExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ReduceNumericalExpressionLabel`
	 * labeled alternative in `wcpsParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceNumericalExpressionLabel?: (ctx: ReduceNumericalExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ReduceNumericalExpressionLabel`
	 * labeled alternative in `wcpsParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceNumericalExpressionLabel?: (ctx: ReduceNumericalExpressionLabelContext) => void;
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
	 * Enter a parse tree produced by the `GeneralCondenseExpressionLabel`
	 * labeled alternative in `wcpsParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneralCondenseExpressionLabel?: (ctx: GeneralCondenseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneralCondenseExpressionLabel`
	 * labeled alternative in `wcpsParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneralCondenseExpressionLabel?: (ctx: GeneralCondenseExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `flipExpressionLabel`
	 * labeled alternative in `wcpsParser.flipExpression`.
	 * @param ctx the parse tree
	 */
	enterFlipExpressionLabel?: (ctx: FlipExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `flipExpressionLabel`
	 * labeled alternative in `wcpsParser.flipExpression`.
	 * @param ctx the parse tree
	 */
	exitFlipExpressionLabel?: (ctx: FlipExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `sortExpressionLabel`
	 * labeled alternative in `wcpsParser.sortExpression`.
	 * @param ctx the parse tree
	 */
	enterSortExpressionLabel?: (ctx: SortExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `sortExpressionLabel`
	 * labeled alternative in `wcpsParser.sortExpression`.
	 * @param ctx the parse tree
	 */
	exitSortExpressionLabel?: (ctx: SortExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `switchCaseExpressionLabel`
	 * labeled alternative in `wcpsParser.switchCaseExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchCaseExpressionLabel?: (ctx: SwitchCaseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `switchCaseExpressionLabel`
	 * labeled alternative in `wcpsParser.switchCaseExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchCaseExpressionLabel?: (ctx: SwitchCaseExpressionLabelContext) => void;
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


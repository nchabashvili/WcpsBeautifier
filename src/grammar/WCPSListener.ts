// Generated from WCPS.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { WcpsQueryLabelContext } from "./WCPSParser";
import { ForClauseListLabelContext } from "./WCPSParser";
import { ForClauseLabelContext } from "./WCPSParser";
import { WhereClauseLabelContext } from "./WCPSParser";
import { ReturnClauseLabelContext } from "./WCPSParser";
import { CoverageVariableNameLabelContext } from "./WCPSParser";
import { ProcessingExpressionContext } from "./WCPSParser";
import { ScalarExpressionContext } from "./WCPSParser";
import { BooleanBinaryScalarLabelContext } from "./WCPSParser";
import { BooleanReduceExpressionContext } from "./WCPSParser";
import { BooleanUnaryScalarLabelContext } from "./WCPSParser";
import { BooleanStringComparisonScalarContext } from "./WCPSParser";
import { BooleanConstantLabelContext } from "./WCPSParser";
import { BooleanNumericalComparisonScalarLabelContext } from "./WCPSParser";
import { BooleanUnaryOperatorContext } from "./WCPSParser";
import { BooleanConstantContext } from "./WCPSParser";
import { BooleanOperatorContext } from "./WCPSParser";
import { NumericalComparissonOperatorContext } from "./WCPSParser";
import { StringOperatorContext } from "./WCPSParser";
import { StringScalarExpressionLabelContext } from "./WCPSParser";
import { StarExpressionLabelContext } from "./WCPSParser";
import { NumericalTrigonometricScalarExpressionLabelContext } from "./WCPSParser";
import { NumericalRealNumberExpressionLabelContext } from "./WCPSParser";
import { NumericalCondenseExpressionLabelContext } from "./WCPSParser";
import { NumericalUnaryScalarExpressionLabelContext } from "./WCPSParser";
import { NumericalBinaryScalarExpressionLabelContext } from "./WCPSParser";
import { NumericalComplexNumberConstantContext } from "./WCPSParser";
import { ComplexNumberConstantLabelContext } from "./WCPSParser";
import { NumericalOperatorContext } from "./WCPSParser";
import { NumericalUnaryOperationContext } from "./WCPSParser";
import { TrigonometricOperatorContext } from "./WCPSParser";
import { GetComponentExpressionContext } from "./WCPSParser";
import { CoverageIdExpressionLabelContext } from "./WCPSParser";
import { DescribeCoverageExpressionLabelContext } from "./WCPSParser";
import { EncodedCoverageExpressionLabelContext } from "./WCPSParser";
import { DecodedCoverageExpressionLabelContext } from "./WCPSParser";
import { CoverageExpressionRangeSubsettingLabelContext } from "./WCPSParser";
import { CoverageExpressionTrigonometricLabelContext } from "./WCPSParser";
import { CoverageExpressionUnaryBooleanLabelContext } from "./WCPSParser";
import { CoverageExpressionShorthandTrimLabelContext } from "./WCPSParser";
import { CoverageExpressionVariableNameLabelContext } from "./WCPSParser";
import { CoverageExpressionConstantLabelContext } from "./WCPSParser";
import { CoverageExpressionCoverageLabelContext } from "./WCPSParser";
import { CoverageExpressionShorthandSliceLabelContext } from "./WCPSParser";
import { CoverageExpressionScalarLabelContext } from "./WCPSParser";
import { CoverageExpressionRangeConstructorLabelContext } from "./WCPSParser";
import { CoverageExpressionScaleLabelContext } from "./WCPSParser";
import { CoverageExpressionTrimCoverageLabelContext } from "./WCPSParser";
import { CoverageExpressionCastLabelContext } from "./WCPSParser";
import { CoverageExpressionArithmeticLabelContext } from "./WCPSParser";
import { CoverageExpressionOverlayLabelContext } from "./WCPSParser";
import { CoverageExpressionConstructorLabelContext } from "./WCPSParser";
import { CoverageExpressionExponentialLabelContext } from "./WCPSParser";
import { CoverageExpressionCrsTransformLabelContext } from "./WCPSParser";
import { CoverageExpressionLogicLabelContext } from "./WCPSParser";
import { CoverageExpressionComparissonLabelContext } from "./WCPSParser";
import { CoverageExpressionDecodeLabelContext } from "./WCPSParser";
import { CoverageExpressionExtendLabelContext } from "./WCPSParser";
import { CoverageExpressionUnaryArithmeticLabelContext } from "./WCPSParser";
import { CoverageExpressionSliceLabelContext } from "./WCPSParser";
import { CoverageArithmeticOperatorContext } from "./WCPSParser";
import { UnaryArithmeticExpressionOperatorContext } from "./WCPSParser";
import { UnaryCoverageArithmeticExpressionLabelContext } from "./WCPSParser";
import { TrigonometricExpressionLabelContext } from "./WCPSParser";
import { ExponentialExpressionOperatorContext } from "./WCPSParser";
import { ExponentialExpressionLabelContext } from "./WCPSParser";
import { NotUnaryBooleanExpressionLabelContext } from "./WCPSParser";
import { BitUnaryBooleanExpressionLabelContext } from "./WCPSParser";
import { RangeTypeContext } from "./WCPSParser";
import { CastExpressionLabelContext } from "./WCPSParser";
import { FieldNameContext } from "./WCPSParser";
import { RangeConstructorExpressionLabelContext } from "./WCPSParser";
import { CrsTransformExpressionLabelContext } from "./WCPSParser";
import { DimensionPointListLabelContext } from "./WCPSParser";
import { DimensionPointElementLabelContext } from "./WCPSParser";
import { DimensionIntervalListLabelContext } from "./WCPSParser";
import { TrimDimensionIntervalElementLabelContext } from "./WCPSParser";
import { SliceDimensionIntervalElementLabelContext } from "./WCPSParser";
import { DimensionCrsListLabelContext } from "./WCPSParser";
import { DimensionCrsElementLabelContext } from "./WCPSParser";
import { FieldInterpolationListLabelContext } from "./WCPSParser";
import { FieldInterpolationListElementLabelContext } from "./WCPSParser";
import { InterpolationMethodLabelContext } from "./WCPSParser";
import { NullResistanceContext } from "./WCPSParser";
import { InterpolationTypeLabelContext } from "./WCPSParser";
import { CoverageConstructorExpressionLabelContext } from "./WCPSParser";
import { AxisIteratorLabelContext } from "./WCPSParser";
import { IntervalExpressionLabelContext } from "./WCPSParser";
import { CRSIntervalExpressionLabelContext } from "./WCPSParser";
import { CoverageConstantExpressionLabelContext } from "./WCPSParser";
import { AxisSpecLabelContext } from "./WCPSParser";
import { CondenseExpressionContext } from "./WCPSParser";
import { ReduceBooleanExpressionOperatorContext } from "./WCPSParser";
import { ReduceNumericalExpressionOperatorContext } from "./WCPSParser";
import { ReduceBooleanExpressionLabelContext } from "./WCPSParser";
import { ReduceNumericalExpressionLabelContext } from "./WCPSParser";
import { ReduceExpressionContext } from "./WCPSParser";
import { CondenseExpressionOperatorContext } from "./WCPSParser";
import { GeneralCondenseExpressionLabelContext } from "./WCPSParser";
import { CrsNameContext } from "./WCPSParser";
import { AxisNameContext } from "./WCPSParser";
import { ConstantContext } from "./WCPSParser";
import { IdentifierContext } from "./WCPSParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WCPSParser`.
 */
export default class WCPSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `WcpsQueryLabel`
	 * labeled alternative in `WCPSParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	enterWcpsQueryLabel?: (ctx: WcpsQueryLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WcpsQueryLabel`
	 * labeled alternative in `WCPSParser.wcpsQuery`.
	 * @param ctx the parse tree
	 */
	exitWcpsQueryLabel?: (ctx: WcpsQueryLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ForClauseListLabel`
	 * labeled alternative in `WCPSParser.forClauseList`.
	 * @param ctx the parse tree
	 */
	enterForClauseListLabel?: (ctx: ForClauseListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ForClauseListLabel`
	 * labeled alternative in `WCPSParser.forClauseList`.
	 * @param ctx the parse tree
	 */
	exitForClauseListLabel?: (ctx: ForClauseListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ForClauseLabel`
	 * labeled alternative in `WCPSParser.forClause`.
	 * @param ctx the parse tree
	 */
	enterForClauseLabel?: (ctx: ForClauseLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ForClauseLabel`
	 * labeled alternative in `WCPSParser.forClause`.
	 * @param ctx the parse tree
	 */
	exitForClauseLabel?: (ctx: ForClauseLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `WhereClauseLabel`
	 * labeled alternative in `WCPSParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClauseLabel?: (ctx: WhereClauseLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `WhereClauseLabel`
	 * labeled alternative in `WCPSParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClauseLabel?: (ctx: WhereClauseLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ReturnClauseLabel`
	 * labeled alternative in `WCPSParser.returnClause`.
	 * @param ctx the parse tree
	 */
	enterReturnClauseLabel?: (ctx: ReturnClauseLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ReturnClauseLabel`
	 * labeled alternative in `WCPSParser.returnClause`.
	 * @param ctx the parse tree
	 */
	exitReturnClauseLabel?: (ctx: ReturnClauseLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageVariableNameLabel`
	 * labeled alternative in `WCPSParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	enterCoverageVariableNameLabel?: (ctx: CoverageVariableNameLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageVariableNameLabel`
	 * labeled alternative in `WCPSParser.coverageVariableName`.
	 * @param ctx the parse tree
	 */
	exitCoverageVariableNameLabel?: (ctx: CoverageVariableNameLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.processingExpression`.
	 * @param ctx the parse tree
	 */
	enterProcessingExpression?: (ctx: ProcessingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.processingExpression`.
	 * @param ctx the parse tree
	 */
	exitProcessingExpression?: (ctx: ProcessingExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.scalarExpression`.
	 * @param ctx the parse tree
	 */
	enterScalarExpression?: (ctx: ScalarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.scalarExpression`.
	 * @param ctx the parse tree
	 */
	exitScalarExpression?: (ctx: ScalarExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanBinaryScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanBinaryScalarLabel?: (ctx: BooleanBinaryScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanBinaryScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanBinaryScalarLabel?: (ctx: BooleanBinaryScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanReduceExpression`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanReduceExpression?: (ctx: BooleanReduceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanReduceExpression`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanReduceExpression?: (ctx: BooleanReduceExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanUnaryScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanUnaryScalarLabel?: (ctx: BooleanUnaryScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanUnaryScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanUnaryScalarLabel?: (ctx: BooleanUnaryScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanStringComparisonScalar`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanStringComparisonScalar?: (ctx: BooleanStringComparisonScalarContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanStringComparisonScalar`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanStringComparisonScalar?: (ctx: BooleanStringComparisonScalarContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanConstantLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstantLabel?: (ctx: BooleanConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanConstantLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstantLabel?: (ctx: BooleanConstantLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanNumericalComparisonScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanNumericalComparisonScalarLabel?: (ctx: BooleanNumericalComparisonScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanNumericalComparisonScalarLabel`
	 * labeled alternative in `WCPSParser.booleanScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanNumericalComparisonScalarLabel?: (ctx: BooleanNumericalComparisonScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.booleanUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanUnaryOperator?: (ctx: BooleanUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.booleanUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanUnaryOperator?: (ctx: BooleanUnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstant?: (ctx: BooleanConstantContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstant?: (ctx: BooleanConstantContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.booleanOperator`.
	 * @param ctx the parse tree
	 */
	enterBooleanOperator?: (ctx: BooleanOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.booleanOperator`.
	 * @param ctx the parse tree
	 */
	exitBooleanOperator?: (ctx: BooleanOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.numericalComparissonOperator`.
	 * @param ctx the parse tree
	 */
	enterNumericalComparissonOperator?: (ctx: NumericalComparissonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.numericalComparissonOperator`.
	 * @param ctx the parse tree
	 */
	exitNumericalComparissonOperator?: (ctx: NumericalComparissonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.stringOperator`.
	 * @param ctx the parse tree
	 */
	enterStringOperator?: (ctx: StringOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.stringOperator`.
	 * @param ctx the parse tree
	 */
	exitStringOperator?: (ctx: StringOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `StringScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterStringScalarExpressionLabel?: (ctx: StringScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `StringScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.stringScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitStringScalarExpressionLabel?: (ctx: StringScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `StarExpressionLabel`
	 * labeled alternative in `WCPSParser.starExpression`.
	 * @param ctx the parse tree
	 */
	enterStarExpressionLabel?: (ctx: StarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `StarExpressionLabel`
	 * labeled alternative in `WCPSParser.starExpression`.
	 * @param ctx the parse tree
	 */
	exitStarExpressionLabel?: (ctx: StarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalTrigonometricScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalTrigonometricScalarExpressionLabel?: (ctx: NumericalTrigonometricScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalTrigonometricScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalTrigonometricScalarExpressionLabel?: (ctx: NumericalTrigonometricScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalRealNumberExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalRealNumberExpressionLabel?: (ctx: NumericalRealNumberExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalRealNumberExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalRealNumberExpressionLabel?: (ctx: NumericalRealNumberExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalCondenseExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalCondenseExpressionLabel?: (ctx: NumericalCondenseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalCondenseExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalCondenseExpressionLabel?: (ctx: NumericalCondenseExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalUnaryScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalUnaryScalarExpressionLabel?: (ctx: NumericalUnaryScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalUnaryScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalUnaryScalarExpressionLabel?: (ctx: NumericalUnaryScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalBinaryScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalBinaryScalarExpressionLabel?: (ctx: NumericalBinaryScalarExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalBinaryScalarExpressionLabel`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalBinaryScalarExpressionLabel?: (ctx: NumericalBinaryScalarExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NumericalComplexNumberConstant`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericalComplexNumberConstant?: (ctx: NumericalComplexNumberConstantContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericalComplexNumberConstant`
	 * labeled alternative in `WCPSParser.numericalScalarExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericalComplexNumberConstant?: (ctx: NumericalComplexNumberConstantContext) => void;
	/**
	 * Enter a parse tree produced by the `ComplexNumberConstantLabel`
	 * labeled alternative in `WCPSParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	enterComplexNumberConstantLabel?: (ctx: ComplexNumberConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ComplexNumberConstantLabel`
	 * labeled alternative in `WCPSParser.complexNumberConstant`.
	 * @param ctx the parse tree
	 */
	exitComplexNumberConstantLabel?: (ctx: ComplexNumberConstantLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.numericalOperator`.
	 * @param ctx the parse tree
	 */
	enterNumericalOperator?: (ctx: NumericalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.numericalOperator`.
	 * @param ctx the parse tree
	 */
	exitNumericalOperator?: (ctx: NumericalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.numericalUnaryOperation`.
	 * @param ctx the parse tree
	 */
	enterNumericalUnaryOperation?: (ctx: NumericalUnaryOperationContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.numericalUnaryOperation`.
	 * @param ctx the parse tree
	 */
	exitNumericalUnaryOperation?: (ctx: NumericalUnaryOperationContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.trigonometricOperator`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricOperator?: (ctx: TrigonometricOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.trigonometricOperator`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricOperator?: (ctx: TrigonometricOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.getComponentExpression`.
	 * @param ctx the parse tree
	 */
	enterGetComponentExpression?: (ctx: GetComponentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.getComponentExpression`.
	 * @param ctx the parse tree
	 */
	exitGetComponentExpression?: (ctx: GetComponentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageIdExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageIdExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageIdExpressionLabel?: (ctx: CoverageIdExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageIdExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageIdExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageIdExpressionLabel?: (ctx: CoverageIdExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DescribeCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDescribeCoverageExpressionLabel?: (ctx: DescribeCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DescribeCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.describeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDescribeCoverageExpressionLabel?: (ctx: DescribeCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `EncodedCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterEncodedCoverageExpressionLabel?: (ctx: EncodedCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `EncodedCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.encodedCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitEncodedCoverageExpressionLabel?: (ctx: EncodedCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DecodedCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	enterDecodedCoverageExpressionLabel?: (ctx: DecodedCoverageExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DecodedCoverageExpressionLabel`
	 * labeled alternative in `WCPSParser.decodeCoverageExpression`.
	 * @param ctx the parse tree
	 */
	exitDecodedCoverageExpressionLabel?: (ctx: DecodedCoverageExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionRangeSubsettingLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionRangeSubsettingLabel?: (ctx: CoverageExpressionRangeSubsettingLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionRangeSubsettingLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionRangeSubsettingLabel?: (ctx: CoverageExpressionRangeSubsettingLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTrigonometricLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTrigonometricLabel?: (ctx: CoverageExpressionTrigonometricLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTrigonometricLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTrigonometricLabel?: (ctx: CoverageExpressionTrigonometricLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionUnaryBooleanLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionUnaryBooleanLabel?: (ctx: CoverageExpressionUnaryBooleanLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionUnaryBooleanLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionUnaryBooleanLabel?: (ctx: CoverageExpressionUnaryBooleanLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionShorthandTrimLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionShorthandTrimLabel?: (ctx: CoverageExpressionShorthandTrimLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionShorthandTrimLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionShorthandTrimLabel?: (ctx: CoverageExpressionShorthandTrimLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionVariableNameLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionVariableNameLabel?: (ctx: CoverageExpressionVariableNameLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionVariableNameLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionVariableNameLabel?: (ctx: CoverageExpressionVariableNameLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionConstantLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionConstantLabel?: (ctx: CoverageExpressionConstantLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionConstantLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionConstantLabel?: (ctx: CoverageExpressionConstantLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCoverageLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCoverageLabel?: (ctx: CoverageExpressionCoverageLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCoverageLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCoverageLabel?: (ctx: CoverageExpressionCoverageLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionShorthandSliceLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionShorthandSliceLabel?: (ctx: CoverageExpressionShorthandSliceLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionShorthandSliceLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionShorthandSliceLabel?: (ctx: CoverageExpressionShorthandSliceLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScalarLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScalarLabel?: (ctx: CoverageExpressionScalarLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScalarLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScalarLabel?: (ctx: CoverageExpressionScalarLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionRangeConstructorLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionRangeConstructorLabel?: (ctx: CoverageExpressionRangeConstructorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionRangeConstructorLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionRangeConstructorLabel?: (ctx: CoverageExpressionRangeConstructorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionScaleLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionScaleLabel?: (ctx: CoverageExpressionScaleLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionScaleLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionScaleLabel?: (ctx: CoverageExpressionScaleLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionTrimCoverageLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionTrimCoverageLabel?: (ctx: CoverageExpressionTrimCoverageLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionTrimCoverageLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionTrimCoverageLabel?: (ctx: CoverageExpressionTrimCoverageLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCastLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCastLabel?: (ctx: CoverageExpressionCastLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCastLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCastLabel?: (ctx: CoverageExpressionCastLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionArithmeticLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionArithmeticLabel?: (ctx: CoverageExpressionArithmeticLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionArithmeticLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionArithmeticLabel?: (ctx: CoverageExpressionArithmeticLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionOverlayLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionOverlayLabel?: (ctx: CoverageExpressionOverlayLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionOverlayLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionOverlayLabel?: (ctx: CoverageExpressionOverlayLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionConstructorLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionConstructorLabel?: (ctx: CoverageExpressionConstructorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionConstructorLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionConstructorLabel?: (ctx: CoverageExpressionConstructorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionExponentialLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionExponentialLabel?: (ctx: CoverageExpressionExponentialLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionExponentialLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionExponentialLabel?: (ctx: CoverageExpressionExponentialLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionCrsTransformLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionCrsTransformLabel?: (ctx: CoverageExpressionCrsTransformLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionCrsTransformLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionCrsTransformLabel?: (ctx: CoverageExpressionCrsTransformLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionLogicLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionLogicLabel?: (ctx: CoverageExpressionLogicLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionLogicLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionLogicLabel?: (ctx: CoverageExpressionLogicLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionComparissonLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionComparissonLabel?: (ctx: CoverageExpressionComparissonLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionComparissonLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionComparissonLabel?: (ctx: CoverageExpressionComparissonLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionDecodeLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionDecodeLabel?: (ctx: CoverageExpressionDecodeLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionDecodeLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionDecodeLabel?: (ctx: CoverageExpressionDecodeLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionExtendLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionExtendLabel?: (ctx: CoverageExpressionExtendLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionExtendLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionExtendLabel?: (ctx: CoverageExpressionExtendLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionUnaryArithmeticLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionUnaryArithmeticLabel?: (ctx: CoverageExpressionUnaryArithmeticLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionUnaryArithmeticLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionUnaryArithmeticLabel?: (ctx: CoverageExpressionUnaryArithmeticLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageExpressionSliceLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageExpressionSliceLabel?: (ctx: CoverageExpressionSliceLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageExpressionSliceLabel`
	 * labeled alternative in `WCPSParser.coverageExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageExpressionSliceLabel?: (ctx: CoverageExpressionSliceLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.coverageArithmeticOperator`.
	 * @param ctx the parse tree
	 */
	enterCoverageArithmeticOperator?: (ctx: CoverageArithmeticOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.coverageArithmeticOperator`.
	 * @param ctx the parse tree
	 */
	exitCoverageArithmeticOperator?: (ctx: CoverageArithmeticOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.unaryArithmeticExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithmeticExpressionOperator?: (ctx: UnaryArithmeticExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.unaryArithmeticExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithmeticExpressionOperator?: (ctx: UnaryArithmeticExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryCoverageArithmeticExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryCoverageArithmeticExpressionLabel?: (ctx: UnaryCoverageArithmeticExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryCoverageArithmeticExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryArithmeticExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryCoverageArithmeticExpressionLabel?: (ctx: UnaryCoverageArithmeticExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrigonometricExpressionLabel`
	 * labeled alternative in `WCPSParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	enterTrigonometricExpressionLabel?: (ctx: TrigonometricExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrigonometricExpressionLabel`
	 * labeled alternative in `WCPSParser.trigonometricExpression`.
	 * @param ctx the parse tree
	 */
	exitTrigonometricExpressionLabel?: (ctx: TrigonometricExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.exponentialExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpressionOperator?: (ctx: ExponentialExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.exponentialExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpressionOperator?: (ctx: ExponentialExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `ExponentialExpressionLabel`
	 * labeled alternative in `WCPSParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpressionLabel?: (ctx: ExponentialExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ExponentialExpressionLabel`
	 * labeled alternative in `WCPSParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpressionLabel?: (ctx: ExponentialExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `NotUnaryBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNotUnaryBooleanExpressionLabel?: (ctx: NotUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `NotUnaryBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNotUnaryBooleanExpressionLabel?: (ctx: NotUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `BitUnaryBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBitUnaryBooleanExpressionLabel?: (ctx: BitUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `BitUnaryBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.unaryBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBitUnaryBooleanExpressionLabel?: (ctx: BitUnaryBooleanExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.rangeType`.
	 * @param ctx the parse tree
	 */
	enterRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.rangeType`.
	 * @param ctx the parse tree
	 */
	exitRangeType?: (ctx: RangeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `CastExpressionLabel`
	 * labeled alternative in `WCPSParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpressionLabel?: (ctx: CastExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CastExpressionLabel`
	 * labeled alternative in `WCPSParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpressionLabel?: (ctx: CastExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by the `RangeConstructorExpressionLabel`
	 * labeled alternative in `WCPSParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeConstructorExpressionLabel?: (ctx: RangeConstructorExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `RangeConstructorExpressionLabel`
	 * labeled alternative in `WCPSParser.rangeConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeConstructorExpressionLabel?: (ctx: RangeConstructorExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CrsTransformExpressionLabel`
	 * labeled alternative in `WCPSParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	enterCrsTransformExpressionLabel?: (ctx: CrsTransformExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CrsTransformExpressionLabel`
	 * labeled alternative in `WCPSParser.crsTransformExpression`.
	 * @param ctx the parse tree
	 */
	exitCrsTransformExpressionLabel?: (ctx: CrsTransformExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionPointListLabel`
	 * labeled alternative in `WCPSParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointListLabel?: (ctx: DimensionPointListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionPointListLabel`
	 * labeled alternative in `WCPSParser.dimensionPointList`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointListLabel?: (ctx: DimensionPointListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionPointElementLabel`
	 * labeled alternative in `WCPSParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionPointElementLabel?: (ctx: DimensionPointElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionPointElementLabel`
	 * labeled alternative in `WCPSParser.dimensionPointElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionPointElementLabel?: (ctx: DimensionPointElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionIntervalListLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	enterDimensionIntervalListLabel?: (ctx: DimensionIntervalListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionIntervalListLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalList`.
	 * @param ctx the parse tree
	 */
	exitDimensionIntervalListLabel?: (ctx: DimensionIntervalListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `TrimDimensionIntervalElementLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterTrimDimensionIntervalElementLabel?: (ctx: TrimDimensionIntervalElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `TrimDimensionIntervalElementLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitTrimDimensionIntervalElementLabel?: (ctx: TrimDimensionIntervalElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `SliceDimensionIntervalElementLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	enterSliceDimensionIntervalElementLabel?: (ctx: SliceDimensionIntervalElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `SliceDimensionIntervalElementLabel`
	 * labeled alternative in `WCPSParser.dimensionIntervalElement`.
	 * @param ctx the parse tree
	 */
	exitSliceDimensionIntervalElementLabel?: (ctx: SliceDimensionIntervalElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionCrsListLabel`
	 * labeled alternative in `WCPSParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsListLabel?: (ctx: DimensionCrsListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionCrsListLabel`
	 * labeled alternative in `WCPSParser.dimensionCrsList`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsListLabel?: (ctx: DimensionCrsListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `DimensionCrsElementLabel`
	 * labeled alternative in `WCPSParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	enterDimensionCrsElementLabel?: (ctx: DimensionCrsElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `DimensionCrsElementLabel`
	 * labeled alternative in `WCPSParser.dimensionCrsElement`.
	 * @param ctx the parse tree
	 */
	exitDimensionCrsElementLabel?: (ctx: DimensionCrsElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `FieldInterpolationListLabel`
	 * labeled alternative in `WCPSParser.fieldInterpolationList`.
	 * @param ctx the parse tree
	 */
	enterFieldInterpolationListLabel?: (ctx: FieldInterpolationListLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `FieldInterpolationListLabel`
	 * labeled alternative in `WCPSParser.fieldInterpolationList`.
	 * @param ctx the parse tree
	 */
	exitFieldInterpolationListLabel?: (ctx: FieldInterpolationListLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `FieldInterpolationListElementLabel`
	 * labeled alternative in `WCPSParser.fieldInterpolationListElement`.
	 * @param ctx the parse tree
	 */
	enterFieldInterpolationListElementLabel?: (ctx: FieldInterpolationListElementLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `FieldInterpolationListElementLabel`
	 * labeled alternative in `WCPSParser.fieldInterpolationListElement`.
	 * @param ctx the parse tree
	 */
	exitFieldInterpolationListElementLabel?: (ctx: FieldInterpolationListElementLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `InterpolationMethodLabel`
	 * labeled alternative in `WCPSParser.interpolationMethod`.
	 * @param ctx the parse tree
	 */
	enterInterpolationMethodLabel?: (ctx: InterpolationMethodLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpolationMethodLabel`
	 * labeled alternative in `WCPSParser.interpolationMethod`.
	 * @param ctx the parse tree
	 */
	exitInterpolationMethodLabel?: (ctx: InterpolationMethodLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.nullResistance`.
	 * @param ctx the parse tree
	 */
	enterNullResistance?: (ctx: NullResistanceContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.nullResistance`.
	 * @param ctx the parse tree
	 */
	exitNullResistance?: (ctx: NullResistanceContext) => void;
	/**
	 * Enter a parse tree produced by the `InterpolationTypeLabel`
	 * labeled alternative in `WCPSParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	enterInterpolationTypeLabel?: (ctx: InterpolationTypeLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `InterpolationTypeLabel`
	 * labeled alternative in `WCPSParser.interpolationType`.
	 * @param ctx the parse tree
	 */
	exitInterpolationTypeLabel?: (ctx: InterpolationTypeLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageConstructorExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstructorExpressionLabel?: (ctx: CoverageConstructorExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageConstructorExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageConstructorExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstructorExpressionLabel?: (ctx: CoverageConstructorExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisIteratorLabel`
	 * labeled alternative in `WCPSParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	enterAxisIteratorLabel?: (ctx: AxisIteratorLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisIteratorLabel`
	 * labeled alternative in `WCPSParser.axisIterator`.
	 * @param ctx the parse tree
	 */
	exitAxisIteratorLabel?: (ctx: AxisIteratorLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `IntervalExpressionLabel`
	 * labeled alternative in `WCPSParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpressionLabel?: (ctx: IntervalExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `IntervalExpressionLabel`
	 * labeled alternative in `WCPSParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpressionLabel?: (ctx: IntervalExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CRSIntervalExpressionLabel`
	 * labeled alternative in `WCPSParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterCRSIntervalExpressionLabel?: (ctx: CRSIntervalExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CRSIntervalExpressionLabel`
	 * labeled alternative in `WCPSParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitCRSIntervalExpressionLabel?: (ctx: CRSIntervalExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `CoverageConstantExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	enterCoverageConstantExpressionLabel?: (ctx: CoverageConstantExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `CoverageConstantExpressionLabel`
	 * labeled alternative in `WCPSParser.coverageConstantExpression`.
	 * @param ctx the parse tree
	 */
	exitCoverageConstantExpressionLabel?: (ctx: CoverageConstantExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `AxisSpecLabel`
	 * labeled alternative in `WCPSParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	enterAxisSpecLabel?: (ctx: AxisSpecLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `AxisSpecLabel`
	 * labeled alternative in `WCPSParser.axisSpec`.
	 * @param ctx the parse tree
	 */
	exitAxisSpecLabel?: (ctx: AxisSpecLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.condenseExpression`.
	 * @param ctx the parse tree
	 */
	enterCondenseExpression?: (ctx: CondenseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.condenseExpression`.
	 * @param ctx the parse tree
	 */
	exitCondenseExpression?: (ctx: CondenseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.reduceBooleanExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterReduceBooleanExpressionOperator?: (ctx: ReduceBooleanExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.reduceBooleanExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitReduceBooleanExpressionOperator?: (ctx: ReduceBooleanExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.reduceNumericalExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterReduceNumericalExpressionOperator?: (ctx: ReduceNumericalExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.reduceNumericalExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitReduceNumericalExpressionOperator?: (ctx: ReduceNumericalExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `ReduceBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceBooleanExpressionLabel?: (ctx: ReduceBooleanExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ReduceBooleanExpressionLabel`
	 * labeled alternative in `WCPSParser.reduceBooleanExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceBooleanExpressionLabel?: (ctx: ReduceBooleanExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `ReduceNumericalExpressionLabel`
	 * labeled alternative in `WCPSParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceNumericalExpressionLabel?: (ctx: ReduceNumericalExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `ReduceNumericalExpressionLabel`
	 * labeled alternative in `WCPSParser.reduceNumericalExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceNumericalExpressionLabel?: (ctx: ReduceNumericalExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.reduceExpression`.
	 * @param ctx the parse tree
	 */
	enterReduceExpression?: (ctx: ReduceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.reduceExpression`.
	 * @param ctx the parse tree
	 */
	exitReduceExpression?: (ctx: ReduceExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.condenseExpressionOperator`.
	 * @param ctx the parse tree
	 */
	enterCondenseExpressionOperator?: (ctx: CondenseExpressionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.condenseExpressionOperator`.
	 * @param ctx the parse tree
	 */
	exitCondenseExpressionOperator?: (ctx: CondenseExpressionOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `GeneralCondenseExpressionLabel`
	 * labeled alternative in `WCPSParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneralCondenseExpressionLabel?: (ctx: GeneralCondenseExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneralCondenseExpressionLabel`
	 * labeled alternative in `WCPSParser.generalCondenseExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneralCondenseExpressionLabel?: (ctx: GeneralCondenseExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.crsName`.
	 * @param ctx the parse tree
	 */
	enterCrsName?: (ctx: CrsNameContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.crsName`.
	 * @param ctx the parse tree
	 */
	exitCrsName?: (ctx: CrsNameContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.axisName`.
	 * @param ctx the parse tree
	 */
	enterAxisName?: (ctx: AxisNameContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.axisName`.
	 * @param ctx the parse tree
	 */
	exitAxisName?: (ctx: AxisNameContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `WCPSParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `WCPSParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}


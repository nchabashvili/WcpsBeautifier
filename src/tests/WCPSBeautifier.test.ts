import { WCPSBeautifier } from "../WCPSBeautifier";
import * as caseUpper1 from "./upperCases/case1";
import * as caseUpper2 from "./upperCases/case2"
import * as caseUpper3 from "./upperCases/case3"
import * as caseUpper4 from "./upperCases/case4"
import * as caseUpper5 from "./upperCases/case5"
import * as caseUpper6 from "./upperCases/case6"
import * as caseUpper7 from "./upperCases/case7"
import * as caseUpper8 from "./upperCases/case8"
import * as caseUpper9 from "./upperCases/case9"
import * as caseUpper10 from "./upperCases/case10"
import * as caseLower1 from "./lowerCases/case1";
import * as caseLower2 from "./lowerCases/case2"
import * as caseLower3 from "./lowerCases/case3"
import * as caseLower4 from "./lowerCases/case4"
import * as caseLower5 from "./lowerCases/case5"
import * as caseLower6 from "./lowerCases/case6"
import * as caseLower7 from "./lowerCases/case7"
import * as caseLower8 from "./lowerCases/case8"
import * as caseLower9 from "./lowerCases/case9"
import * as caseLower10 from "./lowerCases/case10"
import * as caseCap1 from "./capitalize/case1";
import * as caseCap2 from "./capitalize/case2"



describe('WCPSBeautifier', () => {
    describe('uppercase, tab = 4', () => {
        test('#1', () => {
            const beautifier = new WCPSBeautifier(caseUpper1.options)
            expect(beautifier.beautify(caseUpper1.input)).toEqual(caseUpper1.output);
        })
        test('#2', () => {
            const beautifier = new WCPSBeautifier(caseUpper2.options)
            expect(beautifier.beautify(caseUpper2.input)).toEqual(caseUpper2.output);
        })
        test('#3', () => {
            const beautifier = new WCPSBeautifier(caseUpper3.options)
            expect(beautifier.beautify(caseUpper3.input)).toEqual(caseUpper3.output);
        })
        test('#4', () => {
            const beautifier = new WCPSBeautifier(caseUpper4.options)
            expect(beautifier.beautify(caseUpper4.input)).toEqual(caseUpper4.output);
        })
        test('#5', () => {
            const beautifier = new WCPSBeautifier(caseUpper5.options)
            expect(beautifier.beautify(caseUpper5.input)).toEqual(caseUpper5.output);
        })
        test('#6', () => {
            const beautifier = new WCPSBeautifier(caseUpper6.options)
            expect(beautifier.beautify(caseUpper6.input)).toEqual(caseUpper6.output);
        })
        test('#7', () => {
            const beautifier = new WCPSBeautifier(caseUpper7.options)
            expect(beautifier.beautify(caseUpper7.input)).toEqual(caseUpper7.output);
        })
        test('#8', () => {
            const beautifier = new WCPSBeautifier(caseUpper8.options)
            expect(beautifier.beautify(caseUpper8.input)).toEqual(caseUpper8.output);
        })
        test('#9', () => {
            const beautifier = new WCPSBeautifier(caseUpper9.options)
            expect(beautifier.beautify(caseUpper9.input)).toEqual(caseUpper9.output);
        })
        test('#10', () => {
            const beautifier = new WCPSBeautifier(caseUpper10.options)
            expect(beautifier.beautify(caseUpper10.input)).toEqual(caseUpper10.output);
        })
    })
    describe('lowercase, tab = 2', () => {
        test('#1', () => {
            const beautifier = new WCPSBeautifier(caseLower1.options)
            expect(beautifier.beautify(caseLower1.input)).toEqual(caseLower1.output);
        })
        test('#2', () => {
            const beautifier = new WCPSBeautifier(caseLower2.options)
            expect(beautifier.beautify(caseLower2.input)).toEqual(caseLower2.output);
        })
        test('#3', () => {
            const beautifier = new WCPSBeautifier(caseLower3.options)
            expect(beautifier.beautify(caseLower3.input)).toEqual(caseLower3.output);
        })
        test('#4', () => {
            const beautifier = new WCPSBeautifier(caseLower4.options)
            expect(beautifier.beautify(caseLower4.input)).toEqual(caseLower4.output);
        })
        test('#5', () => {
            const beautifier = new WCPSBeautifier(caseLower5.options)
            expect(beautifier.beautify(caseLower5.input)).toEqual(caseLower5.output);
        })
        test('#6', () => {
            const beautifier = new WCPSBeautifier(caseLower6.options)
            expect(beautifier.beautify(caseLower6.input)).toEqual(caseLower6.output);
        })
        test('#7', () => {
            const beautifier = new WCPSBeautifier(caseLower7.options)
            expect(beautifier.beautify(caseLower7.input)).toEqual(caseLower7.output);
        })
        test('#8', () => {
            const beautifier = new WCPSBeautifier(caseLower8.options)
            expect(beautifier.beautify(caseLower8.input)).toEqual(caseLower8.output);
        })
        test('#9', () => {
            const beautifier = new WCPSBeautifier(caseLower9.options)
            expect(beautifier.beautify(caseLower9.input)).toEqual(caseLower9.output);
        })
        test('#10', () => {
            const beautifier = new WCPSBeautifier(caseLower10.options)
            expect(beautifier.beautify(caseLower10.input)).toEqual(caseLower10.output);
        })
    })
    describe('capitalize, tab = 3', () => {
        test('#1', () => {
            const beautifier = new WCPSBeautifier(caseCap1.options)
            expect(beautifier.beautify(caseCap1.input)).toEqual(caseCap1.output);
        })
        test('#2', () => {
            const beautifier = new WCPSBeautifier(caseCap2.options)
            expect(beautifier.beautify(caseCap2.input)).toEqual(caseCap2.output);
        })
        
    })
})

import { WCPSBeautifier } from "../WCPSBeautifier";
import * as case1 from "./queries/case1";
import * as case2 from "./queries/case2"
import * as case3 from "./queries/case3"
import * as case4 from "./queries/case4"
import * as case5 from "./queries/case5"
import * as case6 from "./queries/case6"
import * as case7 from "./queries/case7"


describe('WCPSBeautifier', () => {
    describe('uppercase', () => {
        test('#1', () => {
            const beautifier = new WCPSBeautifier(case1.options)
            expect(beautifier.beautify(case1.input)).toEqual(case1.output);
        })
        test('#2', () => {
            const beautifier = new WCPSBeautifier(case2.options)
            expect(beautifier.beautify(case2.input)).toEqual(case2.output);
        })
        test('#3', () => {
            const beautifier = new WCPSBeautifier(case3.options)
            expect(beautifier.beautify(case3.input)).toEqual(case3.output);
        })
        test('#4', () => {
            const beautifier = new WCPSBeautifier(case4.options)
            expect(beautifier.beautify(case4.input)).toEqual(case4.output);
        })
        test('#5', () => {
            const beautifier = new WCPSBeautifier(case5.options)
            expect(beautifier.beautify(case5.input)).toEqual(case5.output);
        })
        test('#6', () => {
            const beautifier = new WCPSBeautifier(case6.options)
            expect(beautifier.beautify(case6.input)).toEqual(case6.output);
        })
        test('#7', () => {
            const beautifier = new WCPSBeautifier(case7.options)
            expect(beautifier.beautify(case7.input)).toEqual(case7.output);
        })
    })
})

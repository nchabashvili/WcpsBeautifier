import { WCPSBeautifier } from "../WCPSBeautifier";
import * as case1 from "./queries/case1";
import * as case2 from "./queries/case2"
import * as case3 from "./queries/case3"

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
    })
})

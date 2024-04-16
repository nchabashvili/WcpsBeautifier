import type { BeautifyOptions } from "../../WCPSBeautifier";

export const input = `for $c in (CoverageName) let $dom:=[Lat(20),Long(40)] return encode($c[$dom],"text/csv")`

export const output =
    `FOR $c in (CoverageName)
LET $dom := [Lat(20), Long(40)]
RETURN
    ENCODE(
        $c[$dom],
        "text/csv"
    )`;

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
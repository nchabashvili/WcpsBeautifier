import type { BeautifyOptions } from "../../WCPSBeautifier";

export const input = `for $c in (CoverageName) let $dom:=[Lat(20),Long(40)] return encode($c[$dom],"text/csv")`

export const output =
`for $c in (CoverageName)
let $dom := [Lat(20), Long(40)]
return
  encode(
    $c[$dom],
    "text/csv"
  )`;

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
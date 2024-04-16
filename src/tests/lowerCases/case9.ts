import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $cov in (CoverageName)
let $start := "2022-01-01T00:00:00.000Z",
    $end := "2022-12-31T23:59:59.999Z"
return encode(
  coverage timeseries
  over $t date($start : $end : "P1M")
  values avg($cov[time($t)]),
  "application/netcdf"
)`

export const output = 
`for $cov in (CoverageName)
let $start := "2022-01-01T00:00:00.000Z",
  $end := "2022-12-31T23:59:59.999Z"
return
  encode(
    coverage timeseries
    over $t date($start:$end:"P1M")
    values avg($cov[time($t)]),
    "application/netcdf"
  )`

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
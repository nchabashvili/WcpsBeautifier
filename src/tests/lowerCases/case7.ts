import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $c in (CoverageName)
let $subset := $c[Lat(10:50), Long(10:50)],
$threshold := 100,$masked := switch case $subset.band_A > $threshold return $subset.band_A default return 0,
    $avgValue := avg($masked)
return
  encode(
$avgValue,"image/png"
  )
`

export const output = 
`for $c in (CoverageName)
let $subset := $c[Lat(10:50), Long(10:50)],
  $threshold := 100,
  $masked := 
    switch
    case $subset.band_A > $threshold
      return $subset.band_A
    default
      return 0,
  $avgValue := avg($masked)
return
  encode(
    $avgValue,
    "image/png"
  )`

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
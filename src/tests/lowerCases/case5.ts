import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $cov1 in (Coverage1), $cov2 in (Coverage2)
let $threshold := 200,
    $filteredCov1 := switch case $cov1 > $threshold return $cov1 default return 0,
    $filteredCov2 := switch case $cov2 > $threshold return $cov2 default return 0,
    $composite := switch
                    case $filteredCov2 > 0 return $filteredCov2
                    default return $filteredCov1
return
  encode(
    condense + over $pLat Lat(domain($composite, Lat))
    using max($composite[Lat($pLat)]),
    "image/png"
  )`

export const output = 
`for $cov1 in (Coverage1),
  $cov2 in (Coverage2)
let $threshold := 200,
  $filteredCov1 := 
    switch
    case $cov1 > $threshold
      return $cov1
    default
      return 0,
  $filteredCov2 := 
    switch
    case $cov2 > $threshold
      return $cov2
    default
      return 0,
  $composite := 
    switch
    case $filteredCov2 > 0
      return $filteredCov2
    default
      return $filteredCov1
return
  encode(
    condense +
    over $pLat Lat(domain($composite, Lat))
    using max($composite[Lat($pLat)]),
    "image/png"
  )`

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
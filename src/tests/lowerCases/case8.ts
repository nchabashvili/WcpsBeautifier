import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $c in (CoverageName)
return encode(
  switch
    case $c < 10 return $c * 2
    default return $c[Lat(30:50), Long(10:20)],
  "image/tiff"
)`

export const output = 
`for $c in (CoverageName)
return
  encode(
    switch
    case $c < 10
      return $c * 2
    default
      return $c[Lat(30:50), Long(10:20)],
    "image/tiff"
  )`

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
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
`FOR $c in (CoverageName)
RETURN
    ENCODE(
        SWITCH
        CASE $c < 10
            RETURN $c * 2
        DEFAULT
            RETURN $c[Lat(30:50), Long(10:20)],
        "image/tiff"
    )`

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = `for $cov in (CoverageName)
let $nir := $cov.nir,
    $red := $cov.red,
    $ndvi := ($nir - $red) / ($nir + $red),
    $maskedNDVI := switch case $ndvi > 0.2 return $ndvi default return 0,
    $aggregatedSum := condense + over $lat Lat (0:90) using $maskedNDVI[Lat($lat)],
    $scaled := scale($maskedNDVI, {Lat(2), Long(2)}),
    $yRange := domain($cov, y),
    $temporalSubset := $cov[ansi("2020-01-01T00:00:00Z":"2020-12-31T23:59:59Z")],
    $spatialSubset := $cov[Lat(30:60),Long(10:40)],
    $avgTemp := avg($temporalSubset),
    $maxSpatial := max($spatialSubset)
return
  encode(
    {
      NDVI: $aggregatedSum;
      ScaledNDVI: $scaled;
      AvgTemp: $avgTemp;
      MaxSpatialValue: $maxSpatial
    },
    "application/json"
  )
`

export const output = 
`FOR $cov in (CoverageName)
LET $nir := $cov.nir,
    $red := $cov.red,
    $ndvi := ($nir - $red) / ($nir + $red),
    $maskedNDVI := 
        SWITCH
        CASE $ndvi > 0.2
            RETURN $ndvi
        DEFAULT
            RETURN 0,
    $aggregatedSum := 
        CONDENSE +
        OVER $lat Lat(0:90)
        USING $maskedNDVI[Lat($lat)],
    $scaled := SCALE($maskedNDVI, {Lat(2), Long(2)}),
    $yRange := DOMAIN($cov, y),
    $temporalSubset := $cov[ansi("2020-01-01T00:00:00Z":"2020-12-31T23:59:59Z")],
    $spatialSubset := $cov[Lat(30:60), Long(10:40)],
    $avgTemp := avg($temporalSubset),
    $maxSpatial := max($spatialSubset)
RETURN
    ENCODE(
        {
            NDVI: $aggregatedSum;
            ScaledNDVI: $scaled;
            AvgTemp: $avgTemp;
            MaxSpatialValue: $maxSpatial
        },
        "application/json"
    )`

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
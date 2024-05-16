export const input0 = `FOR $c in (CoverageName)
LET $dom := [Lat(20), Long(40)]
RETURN
    ENCODE(
        $c[$dom],
        "text/csv"
    )
`

export const input1 = `for $c in (CoverageName),$z in (CoverageName)
let $kernel1:=coverage kernel1 over $x x(-1:1), $y y(-1:1) value list <1; 0; -1; 2; 0; -2; 1; 0; -1>,
    $kernel2:=coverage kernel2 over $x x(-1:1), $y y(-1:1) value list <1; 2; 1; 0; 0; 0; -1; -2; -1>,$xrange:=domain($c, x),$yrange:=domain($c, y)
where a > b
return EncoDe(sqrt(pow(coverage Gx
over $px1 x($xrange), $py1 y($yrange)
values condense + over $kx1 x(-1:1), $ky1 y(-1:1)
using $kernel1[x($kx1), y($ky1)] * $c[x($px1 + $kx1), y($py1 + $ky1)],
2.0)+pow(coverage Gy over $px2 x($xrange), $py2 y($yrange)values condense + over $kx2 x(-1:1), $ky2 y(-1:1)using $kernel2[x($kx2), y($ky2)] * $c[x($px2 + $kx2), y($py2 + $ky2)],2.0)
    ),
    "image/png"
  )
`

export const input5 = `for $cov1 in(CoverageName1),$cov2 in(CoverageName2),
$cov3 in(CoverageName3) let threshold:=100,$cov1filtered:=
switch case $cov1>threshold return $cov1 default return 0,$cov2filtered:=
switch case $cov2>threshold return $cov2 default return 0,$cov3filtered:=switch 
case $cov3>threshold return $cov3 default return 0
return encode(switch case $cov3filtered>0 return $cov3filtered case $cov2filtered>0 return 
  $cov2filtered default return $cov1filtered,"image/png")
`

export const input4 = `for $cov1 in (Coverage1), $cov2 in (Coverage2)
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
  ) 
`

export const input3 = `fOr $c in ( AvgLandTemp ) 
REturN enCODE(
    SwiTch 
      CAse $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] = 99999 return {red: 255; green: 255; blue: 255} 
  case 18 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
return {red: 0; green: 0; blue: 255} case 23 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
  return {red: 255; green: 255; blue: 0} 
  case 30 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]  return {red: 255; green: 140; blue: 0} 
default return {red: 255; green: 0; blue: 0}, "image/png")
`

export const input2 = `for $cov in (CoverageName)
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

export const input6 = `for $c in (CoverageName)
let $subset := $c[Lat(10:50), Long(10:50)],
    $threshold := 100,
    $masked := switch case $subset.band_A > $threshold return $subset.band_A default return 0,
    $avgValue := avg($masked)
return
  encode(
    $avgValue,
    "image/png"
  )
`

export const input7 = `for $c in (CoverageName)
return encode(
  switch
    case $c < 10 return $c * 2
    default return $c[Lat(30:50), Long(10:20)],
  "image/tiff"
)
`

export const input8 = `for $cov in (CoverageName)
let $start := "2022-01-01T00:00:00.000Z",
    $end := "2022-12-31T23:59:59.999Z"
return encode(
  coverage timeseries
  over $t date($start : $end : "P1M")
  values avg($cov[time($t)]),
  "application/netcdf"
)
`

export const input9 = `for $cov1 in (CoverageName1), $cov2 in (CoverageName2)
return encode(
  clip(
    coverage result
    over $x x(domain($cov1, x)), $y y(domain($cov1, y))
    values
      condense + over $z y(domain($cov1, y))
      using $cov1[x($x), y($z)] * $cov2[x($z), y($y)],
    POLYGON((30 10, 40 40, 20 40, 10 20, 30 10))
  ),
  "image/png"
)
`

export const input10 = 
`for c in (test_eobstest)
return
  encode(
clip( c,
corridor(
projection(Lat, Long),
LineString(4566099.12252 2999080.94347 "1950-01-01",4566099.12252 3248973.78965 "1950-01-02"),
Polygon((4452779.63173 2875744.62435, 4452779.63173 3503549.8435,5009377.0857 3503549.8435, 5009377.0857 2875744.62435) )
),
"http://localhost:8080/def/crs/EPSG/0/3857"
    ),
    "application/gml+xml"
  )
`

export const input11 = `for $c in (test_irr_cube_2)
return
 encode(scale($c[ansi("2008-01-01T02:01:20":"2008-01-08T00:02:58")] ,{ E:"CRS:1"(0:20), N:"CRS:1"(0:10) }
   )
 , "json" )
 `


export const input12 = `for $c in (test_wms_3d_time_series_irregular)
where a = c
return
    encode(
            FLIP $c[Lat(40:90), Long(80:140)] + 20 ALONG unix
          , "json")
`

export const input13 = `for $c in (CoverageName)
return
  encode($c, "image/tiff", "compression='LZW'")
`


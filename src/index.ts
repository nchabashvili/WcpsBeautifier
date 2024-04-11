import { WCPSBeautifier } from "./WCPSBeautifier";

const beautifier = new WCPSBeautifier({
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase',
});


const input1 = `for $c in (CoverageName),$z in (CoverageName)
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
const input2 = `for $cov1 in(CoverageName1),$cov2 in(CoverageName2),
$cov3 in(CoverageName3) let threshold:=100,$cov1filtered:=
switch case $cov1>threshold return $cov1 default return 0,$cov2filtered:=
switch case $cov2>threshold return $cov2 default return 0,$cov3filtered:=switch 
case $cov3>threshold return $cov3 default return 0
return encode(switch case $cov3filtered>0 return $cov3filtered case $cov2filtered>0 return 
  $cov2filtered default return $cov1filtered,"image/png")
`
const input3 = `for $cov1 in (Coverage1), $cov2 in (Coverage2)
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

const input4 = `fOr $c in ( AvgLandTemp ) 
REturN enCODE(
    SwiTch 
      CAse $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] = 99999 return {red: 255; green: 255; blue: 255} 
  case 18 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
return {red: 0; green: 0; blue: 255} case 23 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
  return {red: 255; green: 255; blue: 0} 
  case 30 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]  return {red: 255; green: 140; blue: 0} 
default return {red: 255; green: 0; blue: 0}, "image/png")
`;

const input5 = `FOR $cov in (CoverageName)
LET $nir := $cov.nir,
    $red := $cov.red,
    $ndvi := ($nir - $red) / ($nir + $red),
    $maskedNDVI := switch 
        case $ndvi > 0.2 
            return $ndvi 
        default 
            return 0,
    $aggregatedSum := condense + 
        over $lat Lat (0:90) 
        using $maskedNDVI[Lat($lat)],
    $scaled := scale($maskedNDVI, {Lat(2), Long(2)}),
    $yRange := domain($cov, y),
    $temporalSubset := $cov[ansi("2020-01-01T00:00:00Z":"2020-12-31T23:59:59Z")],
    $spatialSubset := $cov[Lat(30:60),Long(10:40)],
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
  )
`;


const inputs = [input5];

const result = inputs.map((input)=>{
    return beautifier.beautify(input);
});

console.log(result.join(`\n\n\n=====================================\n\n\n`));

// let input = '';

// process.stdin.on('data', (data) => {
//     input += data.toString();
// })

// process.on('SIGINT', () => {
//     console.log(beautifier.beautify(input));
//     process.exit();
// })
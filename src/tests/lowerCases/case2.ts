import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $c in (CoverageName),$z in (CoverageName)
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
  )`

export const output = 
`for $c in (CoverageName),
  $z in (CoverageName)
let $kernel1 := 
    coverage kernel1
    over $x x(-1:1), $y y(-1:1)
    value list <1; 0; -1; 2; 0; -2; 1; 0; -1>,
  $kernel2 := 
    coverage kernel2
    over $x x(-1:1), $y y(-1:1)
    value list <1; 2; 1; 0; 0; 0; -1; -2; -1>,
  $xrange := domain($c, x),
  $yrange := domain($c, y)
where a > b
return
  encode(
    sqrt(
      pow(
        coverage Gx
        over $px1 x($xrange), $py1 y($yrange)
        values
          condense +
          over $kx1 x(-1:1), $ky1 y(-1:1)
          using $kernel1[x($kx1), y($ky1)] * $c[x($px1 + $kx1), y($py1 + $ky1)],
        2.0
      ) + pow(
        coverage Gy
        over $px2 x($xrange), $py2 y($yrange)
        values
          condense +
          over $kx2 x(-1:1), $ky2 y(-1:1)
          using $kernel2[x($kx2), y($ky2)] * $c[x($px2 + $kx2), y($py2 + $ky2)],
        2.0
      )
    ),
    "image/png"
  )`

export const options: BeautifyOptions = {
    tabSize: 2,
    useTabs: false,
    caseTransform: 'lowercase'
}
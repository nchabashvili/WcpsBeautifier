import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $cov1 in(CoverageName1),$cov2 in(CoverageName2),
$cov3 in(CoverageName3) let threshold:=100,$cov1filtered:=
switch case $cov1>threshold return $cov1 default return 0,$cov2filtered:=
switch case $cov2>threshold return $cov2 default return 0,$cov3filtered:=switch 
case $cov3>threshold return $cov3 default return 0
return encode(switch case $cov3filtered>0 return $cov3filtered case $cov2filtered>0 return 
  $cov2filtered default return $cov1filtered,"image/png")`

export const output = 
`FOR $cov1 in (CoverageName1),
    $cov2 in (CoverageName2),
    $cov3 in (CoverageName3)
LET threshold := 100,
    $cov1filtered := 
        SWITCH
        CASE $cov1 > threshold
            RETURN $cov1
        DEFAULT
            RETURN 0,
    $cov2filtered := 
        SWITCH
        CASE $cov2 > threshold
            RETURN $cov2
        DEFAULT
            RETURN 0,
    $cov3filtered := 
        SWITCH
        CASE $cov3 > threshold
            RETURN $cov3
        DEFAULT
            RETURN 0
RETURN
    ENCODE(
        SWITCH
        CASE $cov3filtered > 0
            RETURN $cov3filtered
        CASE $cov2filtered > 0
            RETURN $cov2filtered
        DEFAULT
            RETURN $cov1filtered,
        "image/png"
    )`

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
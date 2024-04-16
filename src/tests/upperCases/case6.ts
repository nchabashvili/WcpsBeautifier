import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`fOr $c in ( AvgLandTemp ) 
REturN enCODE(
    SwiTch 
      CAse $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] = 99999 return {red: 255; green: 255; blue: 255} 
  case 18 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
return {red: 0; green: 0; blue: 255} case 23 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] 
  return {red: 255; green: 255; blue: 0} 
  case 30 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]  return {red: 255; green: 140; blue: 0} 
default return {red: 255; green: 0; blue: 0}, "image/png")`

export const output = 
`FOR $c in (AvgLandTemp)
RETURN
    ENCODE(
        SWITCH
        CASE $c[ansi("2014-07"), Lat(35:75), Long(-20:40)] = 99999
            RETURN {
                red: 255;
                green: 255;
                blue: 255
            }
        CASE 18 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]
            RETURN {
                red: 0;
                green: 0;
                blue: 255
            }
        CASE 23 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]
            RETURN {
                red: 255;
                green: 255;
                blue: 0
            }
        CASE 30 > $c[ansi("2014-07"), Lat(35:75), Long(-20:40)]
            RETURN {
                red: 255;
                green: 140;
                blue: 0
            }
        DEFAULT
            RETURN {
                red: 255;
                green: 0;
                blue: 0
            },
        "image/png"
    )`

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
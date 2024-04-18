import type { BeautifyOptions } from "../../WCPSBeautifier";

export const input = `for $c in (test_irr_cube_2)
return
 encode(scale($c[ansi("2008-01-01T02:01:20":"2008-01-08T00:02:58")] ,{ E:"CRS:1"(0:20), N:"CRS:1"(0:10) }
   )
 , "json" )`;

export const output =
`For $c in (test_irr_cube_2)
Return
   Encode(
      Scale(
         $c[ansi("2008-01-01T02:01:20":"2008-01-08T00:02:58")],
         {E:"CRS:1"(0:20), N:"CRS:1"(0:10)}
      ),
      "json"
   )`;

export const options: BeautifyOptions = {
    tabSize: 3,
    useTabs: false,
    caseTransform: 'capitalize'
}
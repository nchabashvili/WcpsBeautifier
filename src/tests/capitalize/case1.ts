import type { BeautifyOptions } from "../../WCPSBeautifier";

export const input = `FOR c in (test_eobstest)
RETURN
ENCODE(CLIP(c, CORRIDOR(PROJECTION(Lat, Long),
LINESTRING (4566099.12252 2999080.94347,
    "1950-01-01" 4566099.12252,3248973.78965 "1950-01-02"),
POLYGON((4452779.63173 2875744.62435,4452779.63173 3503549.8435,5009377.0857 3503549.8435,
5009377.0857 2875744.62435)))),"application/gml+xml")`;

export const output =
`For c in (test_eobstest)
Return
   Encode(
      Clip(
         c, Corridor(
            Projection(Lat, Long),
            Linestring (
               4566099.12252 2999080.94347,
               "1950-01-01" 4566099.12252,
               3248973.78965 "1950-01-02"
            ),
            Polygon((
               4452779.63173 2875744.62435,
               4452779.63173 3503549.8435,
               5009377.0857 3503549.8435,
               5009377.0857 2875744.62435
            ))
         ),
      ),
      "application/gml+xml"
   )`;

export const options: BeautifyOptions = {
    tabSize: 3,
    useTabs: false,
    caseTransform: 'capitalize'
}
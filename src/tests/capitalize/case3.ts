import type { BeautifyOptions } from "../../WCPSBeautifier";

export const input = `
For $c in(test_wms_3d_time_series_irregular)
Return Encode(Flip $c[Lat(40:90), Long(80:140)] + 20 Along unix,"json")`;

export const output =
`For $c in (test_wms_3d_time_series_irregular)
Return
   Encode(
      Flip $c[Lat(40:90), Long(80:140)] + 20 Along unix,
      "json"
   )`;

export const options: BeautifyOptions = {
    tabSize: 3,
    useTabs: false,
    caseTransform: 'capitalize'
}
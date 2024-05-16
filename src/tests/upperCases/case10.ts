import { BeautifyOptions } from "../../WCPSBeautifier"

export const input = 
`for $cov1 in (CoverageName1), $cov2 in (CoverageName2)
return encode(
  clip(
    coverage result
    over $x x(domain($cov1, x)),
        $y y(domain($cov1, y))
    values
      condense + over $z y(domain($cov1, y))
      using $cov1[x($x), y($z)] * $cov2[x($z), y($y)],
    polygon((30 10, 40 40, 20 40, 10 20, 30 10))
  ),
  "image/png"
)`

export const output = 
`FOR $cov1 in (CoverageName1),
    $cov2 in (CoverageName2)
RETURN
    ENCODE(
        CLIP(
            COVERAGE result
            OVER $x x(DOMAIN($cov1, x)),
                $y y(DOMAIN($cov1, y))
            VALUES
                CONDENSE +
                OVER $z y(DOMAIN($cov1, y))
                USING $cov1[x($x), y($z)] * $cov2[x($z), y($y)],
            POLYGON((
                30 10,
                40 40,
                20 40,
                10 20,
                30 10
            ))
        ),
        "image/png"
    )`

export const options: BeautifyOptions = {
    tabSize: 4,
    useTabs: false,
    caseTransform: 'uppercase'
}
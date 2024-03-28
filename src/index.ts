import {
    CharStream,
    CommonTokenStream,
    ErrorNode,
    ParseTreeListener,
    ParseTreeWalker,
    ParserRuleContext,
    TerminalNode,
} from 'antlr4';
import WCPSLexer from './grammar/wcpsLexer';
import WCPSParser, {
    ForClauseListContext,
    GetComponentExpressionContext,
    LetClauseListContext,
    ReturnClauseContext,
    WcpsQueryContext,
    WhereClauseContext,
} from './grammar/wcpsParser';
import { BeautifyLetClause, BeautifyReturnClause, BeautifyWhereClause, beautifyForClause } from './utils';

//const input = `FOR $c IN (mean_summer_airtemp), $z IN (what_is_this), $f IN (nice,goodbye,third) LET $a:=$c[Lat(20:30),Long(40:45)], $b:=$c+2,$z:=[$z(0:20),$f(5:30),$j(3:30)] WHERE $a>25 RETURN encode($a+$b,"png")`;
const input = `for $c in (CoverageName),
 $z in (CoverageName)
let $kernel1 := coverage kernel1
                over $x x(-1:1), $y y(-1:1)
                value list <1; 0; -1; 2; 0; -2; 1; 0; -1>,
    $kernel2 := coverage kernel2
                over $x x(-1:1), $y y(-1:1)
                value list <1; 2; 1; 0; 0; 0; -1; -2; -1>,
    $xrange := domain($c, x),
    $yrange := domain($c, y)
return
  encode(
    sqrt(
      pow(
        coverage Gx
        over $px1 x($xrange), $py1 y($yrange)
        values
          condense + over $kx1 x(-1:1), $ky1 y(-1:1)
          using $kernel1[x($kx1), y($ky1)] * $c[x($px1 + $kx1), y($py1 + $ky1)],
        2.0
      )
      +
      pow(
        coverage Gy
        over $px2 x($xrange), $py2 y($yrange)
        values
          condense + over $kx2 x(-1:1), $ky2 y(-1:1)
          using $kernel2[x($kx2), y($ky2)] * $c[x($px2 + $kx2), y($py2 + $ky2)],
        2.0
      )
    ),
    "image/png"
  )
`
const charStream = new CharStream(input);
const lexer = new WCPSLexer(charStream);
const tokens = new CommonTokenStream(lexer);
const parser = new WCPSParser(tokens);
const tree = parser.wcpsQuery();

class ParseTreeBeautifier extends ParseTreeListener {
    public output: Array<string> = [];
    public tree: WcpsQueryContext;

    constructor(tree: WcpsQueryContext) {
        super();

        this.tree = tree;
    }

    enterEveryRule(node: ParserRuleContext): void {
        if (node instanceof ForClauseListContext) {
            const forClauseSet = node.forClause_list();
            // const forClauseArray = [];
            
            // TODO: Convert to map
            // for (let i = 0; i < forClauseSet.length; i++) {
            //     let beautifiedFor = beautifyForClause(forClauseSet[i]);
            //     forClauseArray.push(beautifiedFor);
            // }

            let beautifiedFor = forClauseSet.map (node => beautifyForClause(node));

            const forClauseList = beautifiedFor.join(',\n    ');
            this.output.push(`for ${forClauseList}`);
        }

        if (node instanceof LetClauseListContext) {
            const letClauseSet = node.letClause_list();
            // const letClauseArray = [];

            // for (let i = 0; i < letClauseSet.length; i++) {
            //     let beautifiedLet = BeautifyLetClause(letClauseSet[i]);
            //     letClauseArray.push(beautifiedLet);
            // }

            let beautifiedLet = letClauseSet.map (node => BeautifyLetClause(node));
            
            const letClauseList = beautifiedLet.join(',\n    ');
            this.output.push(`let ${letClauseList}`);
        }

        if (node instanceof WhereClauseContext) {
            const beautifiedWhere = BeautifyWhereClause(node);
            this.output.push(beautifiedWhere);
        }

        if (node instanceof ReturnClauseContext) {
            const beautifiedReturn = BeautifyReturnClause(node);
            this.output.push(beautifiedReturn);
        }
    }

    run() {
        const walker = new ParseTreeWalker();
        walker.walk(this, this.tree);
    }
}

const beautifier = new ParseTreeBeautifier(tree);
beautifier.run();

console.log(beautifier.output.join('\n'));

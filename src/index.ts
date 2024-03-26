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
    LetClauseListContext,
    ReturnClauseContext,
    WcpsQueryContext,
    WhereClauseContext,
} from './grammar/wcpsParser';
import { beautifyForClause } from './utils';

const input = ` FOR $c IN (mean_summer_airtemp),
                    $z IN (what_is_this),
                    $f IN (nice,goodbye,third)
                LET $a := $c[Lat(20:30), Long(40:45)],
                    $b := $c + 2,
                    $z := [$z(0:20),$f(5:30),$j(3:30)]
                WHERE $a > 25
                RETURN encode($a + $b, "png")`;

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

    }

    run() {
        const walker = new ParseTreeWalker();
        walker.walk(this, this.tree);
    }
}



const walker = new ParseTreeWalker();
const listener = new Listener();
walker.walk(listener, tree);
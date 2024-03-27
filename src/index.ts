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
import { BeautifyLetClause, BeautifyReturnClause, BeautifyWhereClause, beautifyForClause } from './utils';

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
        if (node instanceof ForClauseListContext) {
            const forClauseSet = node.forClause_list();
            const forClauseArray = [];

            for (let i = 0; i < forClauseSet.length; i++) {
                let beautifiedFor = beautifyForClause(forClauseSet[i]);
                forClauseArray.push(beautifiedFor);
            }

            const forClauseList = forClauseArray.join(',\n    ');
            this.output.push(`for ${forClauseList}`);
        }

        if (node instanceof LetClauseListContext) {
            const letClauseSet = node.letClause_list();
            const letClauseArray = [];

            for (let i = 0; i < letClauseSet.length; i++) {
                let beautifiedLet = BeautifyLetClause(letClauseSet[i]);
                letClauseArray.push(beautifiedLet);
            }
            
            const letClauseList = letClauseArray.join(',\n    ');
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

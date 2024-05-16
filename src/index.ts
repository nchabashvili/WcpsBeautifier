import { WCPSBeautifier } from "./WCPSBeautifier";
import { input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13 } from "./queries"

const beautifier = new WCPSBeautifier({
  tabSize: 4,
  useTabs: false,
  caseTransform: 'capitalize',
});


const inputs = [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13];


const result = inputs.map((input) => {
  return beautifier.beautify(input);
});

console.log(result.join(`\n\n\n=====================================\n\n\n`));

// let input = '';

// process.stdin.on('data', (data) => {
//     input += data.toString();
// })

// process.on('SIGINT', () => {
//     console.log(beautifier.beautify(input));
//     process.exit();
// })


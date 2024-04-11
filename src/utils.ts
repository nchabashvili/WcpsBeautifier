export type CaseTransforms = 'uppercase' | 'lowercase' | 'capitalize' | 'none'

export function indent(text: string, prefix: string): string {
  return text.split('\n').map(line => `${prefix}${line}`).join('\n');
}

export function indentNewLine(text: string, prefix: string): string {
  return text.split('\n').map((line, index) => {
    return index === 0 ? line : `${prefix}${line}`;
  }).join('\n');
}

export function transformCase(word: string, transformation: CaseTransforms): string {
  if (transformation === 'uppercase') {
    return word.toUpperCase();
  }

  if (transformation === 'lowercase') {
    return word.toLowerCase();
  }

  if (transformation === 'capitalize') {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  // if none, or any other unexpected transformation
  return word;
}


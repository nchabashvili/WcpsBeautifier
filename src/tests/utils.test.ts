import { indent, indentNewLine, transformCase } from '../utils';

describe('utils.ts', () => {
    describe('indent()', () => {
        it('should return prefix when given an empty string', () => {
            expect(indent('', "    ")).toEqual('    ');
        });
        it('should handle white space strings', () => {
            expect(indent('\n', "    ")).toEqual('    \n    ');
            expect(indent('\n', " ")).toEqual(' \n ');
            expect(indent(' \n\n ', "    ")).toEqual('     \n    \n     ');
        });
        it('it should correctly insert prefix argument', () => {
            expect(indent('foo\nbar\nbaz', "    ")).toEqual("    foo\n    bar\n    baz");
            expect(indent('foo\nbar\nbaz', "  ")).toEqual("  foo\n  bar\n  baz");
            expect(indent('foo\nbar\nbaz', "")).toEqual("foo\nbar\nbaz");
        })
    });
    describe('indentNewLine()', () => {
        it('should return empty string when given an empty string', () => {
            expect(indentNewLine('', "    ")).toEqual('');
        });
        it('should handle white space strings', () => {
            expect(indentNewLine('\n', "    ")).toEqual('\n    ');
            expect(indentNewLine('\n', " ")).toEqual('\n ');
            expect(indentNewLine(' \n\n ', "    ")).toEqual(' \n    \n     ');
        });
        it('it should correctly insert prefix argument', () => {
            expect(indentNewLine('foo\nbar\nbaz', "    ")).toEqual("foo\n    bar\n    baz");
            expect(indentNewLine('foo\nbar\nbaz', "  ")).toEqual("foo\n  bar\n  baz");
            expect(indentNewLine('foo\nbar\nbaz', "")).toEqual("foo\nbar\nbaz");
        })
    });
});
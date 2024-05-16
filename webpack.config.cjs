
const path = require('path');

module.exports = {
    entry: './dist/js/WCPSBeautifier.js',
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: { fullySpecified: false },
            }
        ]
    },
    output: {
        filename: 'WCPSBeautifier.js',
        path: path.resolve(__dirname, 'dist', 'lib'),
        library: 'WcpsBeautifier',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    optimization: {
        usedExports: true,
    }
}

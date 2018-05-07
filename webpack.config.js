const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'handler.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}
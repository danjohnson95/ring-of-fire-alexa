// const path = require('path')
import * as path from 'path'
import * as HardSourceWebpackPlugin from 'hard-source-webpack-plugin'

module.exports = {
    mode: 'production',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'handler.js',
        library: 'handler',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ]
}
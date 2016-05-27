const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./helpers').resolve;

module.exports = {
    entry: resolve('./angular/main.ts'),
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [
                    'app',
                    'bootstrap',
                    'database',
                    'node_modules',
                    'public',
                    'resources',
                    'storage',
                    'tasks',
                    'tests',
                    'typings',
                    'vendor'
                ]
            },
            {
                test: /\.scss$/,
                loaders: ['raw', 'style', 'css?sourceMap', 'sass?sourceMap']
            }
        ]
    }
};

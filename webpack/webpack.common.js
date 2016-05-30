const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./helpers').resolve;

module.exports = {
    entry: {
        main: resolve('./angular/main.ts'),
        vendor: resolve('./angular/vendor.ts'),
        styles: resolve('./angular/styles.ts')
    },
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
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons.chunk.js', ['main', 'vendor'])
    ]
};

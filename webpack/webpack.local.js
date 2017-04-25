const webpack = require('webpack');
const common = require('./webpack.common');
const resolve = require('./helpers').resolve;
const merge = require('webpack-merge');

module.exports = merge(common, {
    output: {
        path: resolve('./public/assets'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    cache: true,
    devtool: 'source-map',
    plugins: [
        //
    ],
});

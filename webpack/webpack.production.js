const webpack = require('webpack');
const common = require('./webpack.common');
const resolve = require('./helpers').resolve;
const merge = require('webpack-merge');

module.exports = merge(common, {
    output: {
        path: resolve('./public/assets'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.DedupePlugin()
    ]
});

const webpack = require('webpack');
const resolve = require('./helpers').resolve;

module.exports = {
    output: {
        path: resolve('./public/assets'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};

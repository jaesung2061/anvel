const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'polyfills': resolve('./angular/polyfills.ts'),
        'vendor': resolve('./angular/vendor.ts'),
        'main': resolve('./angular/main.ts')
    },
    output: {
        path: resolve('./public/assets'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
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
        }]
    },
    cache: true,
    devtool: 'source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ],
    devServer: {
        stats: 'errors-only'
    }
};

function resolve(dest) {
    return path.resolve(__dirname, dest);
}
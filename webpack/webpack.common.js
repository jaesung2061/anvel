const webpack = require('webpack');
const resolve = require('./helpers').resolve;

module.exports = {
    entry: {
        'polyfills': resolve('./angular/polyfills.ts'),
        'vendor': resolve('./angular/vendor.ts'),
        'main': resolve('./angular/main.ts')
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
    }
};

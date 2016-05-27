module.exports = (config) => {
    config.set({
        basePath: '',

        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        reporters: ['mocha'],

        colors: true,

        logLevel: config.LOG_INFO,

        files: [
            {
                pattern: 'angular/polyfills.ts',
                included: true
            },
            {
                pattern: 'angular/vendor.ts',
                included: true
            },
            {
                pattern: 'angular/**/*.spec.ts',
                included: true
            }
        ],

        exclude: [],

        preprocessors: {
            '**/*.ts': ['webpack']
        },

        webpack: require('./webpack/webpack.testing'),

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'json'},
                {type: 'html'}
            ]
        },

        webpackMiddleware: {
            noInfo: true,
            hideModules: true
        }
    });
};

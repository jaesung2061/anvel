const normalize = require('path').normalize;
const root = 'angular/';

module.exports = {
    appRoot: require('path').resolve(__dirname, '..'),
    assetsPath: 'public/assets/',
    src: {
        rootPath: root,
        typescript: normalize(root + '**/*.ts'),
        sass: {
            app: normalize(root + 'app/**/*.scss'),
            globals: normalize(root + 'globals.scss')
        },
        views: normalize(root + 'app/**/*.html')
    },
    dependencies: {
        js: [
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js'
        ],
        css: [
            'node_modules/bootstrap/scss/bootstrap-flex.scss',
            'node_modules/loaders.css/src/loaders.scss'
        ]
    },
    browserSync: {
        proxy: process.env.BROWSERSYNC_PROXY_URL || 'http://localhost:8000',
        notify: false,
        inject: true,
        debounce: 2000
    }
};
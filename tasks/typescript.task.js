const gulp = require('gulp');
const config = require('./config.js');
const webpack = require('webpack-stream');
const webpackConfig = require('../webpack.config');

let webpackIsWatching = false;

gulp.task('typescript', () => {
    webpackConfig.watch = false;
    gulp.src('angular/main.ts')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch-typescript', () => {
    if (!webpackIsWatching) {
        webpackConfig.watch = true;
        gulp.src('angular/main.ts')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(webpackConfig.output.path));

        // So gulp doesn't run this task twice.
        webpackIsWatching = true;
    }
});

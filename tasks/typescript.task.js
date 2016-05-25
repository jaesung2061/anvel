const gulp = require('gulp');
const config = require('./config.js');
// const webpack = require('webpack-stream');
const shell = require('gulp-shell');
const webpackConfig = require('../webpack.config');

let webpackIsWatching = false;

gulp.task('typescript', () => {
    gulp.src('gulpfile.js').pipe(shell(['webpack --progress --colors']));
    // webpackConfig.watch = false;
    // gulp.src('angular/main.ts')
    //     .pipe(webpack(webpackConfig))
    //     .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch-typescript', () => {
    if (!webpackIsWatching) {
        gulp.src('gulpfile.js').pipe(shell(['webpack --progress --colors --watch']));
        // gulp.src('angular/main.ts')
        //     .pipe(webpack(webpackConfig))
        //     .pipe(gulp.dest(webpackConfig.output.path));

        // So gulp doesn't run this task twice.
        webpackIsWatching = true;
    }
});

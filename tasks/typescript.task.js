const gulp = require('gulp');
const config = require('./config.js');
const shell = require('gulp-shell');

let webpackIsWatching = false;

gulp.task('typescript', () => {
    gulp.src('gulpfile.js').pipe(shell(['webpack --progress --colors']));
});

gulp.task('watch-typescript', () => {
    if (!webpackIsWatching) {
        webpackIsWatching = true; // So gulp doesn't run this task twice.

        gulp.src('gulpfile.js').pipe(shell(['webpack --progress --colors --watch']));
    }
});

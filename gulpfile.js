require('dotenv').config();

const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
    browserSync.init({
        proxy: process.env.BROWSERSYNC_PROXY_URL || 'http://localhost:8000',
        notify: false,
        inject: true,
        debounce: 2000
    });

    gulp.watch(['public/**/*', 'resources/views/**/*']).on('change', () => {
        browserSync.reload();
    });

    // start webpack
    gulp.src('gulpfile.js').pipe(shell(['webpack --watch --colors --progress']));
});

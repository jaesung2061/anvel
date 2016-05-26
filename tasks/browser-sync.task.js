const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browserSync.init(require('./config.js').browserSync);

    gulp.watch(['public/**/*', 'resources/views/**/*']).on('change', () => {
        browserSync.reload();
    });
});

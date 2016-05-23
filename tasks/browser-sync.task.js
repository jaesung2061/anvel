const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browserSync.init({
        proxy: 'http://angular.app:8000',
        notify: false,
        inject: true,
        debounce: 2000
    });

    gulp.watch(['public/**/*', 'resources/views/**/*']).on('change', () => {
        browserSync.reload();
    });
});

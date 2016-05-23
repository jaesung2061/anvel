const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browserSync.init({
        proxy: process.env.BROWSERSYNC_PROXY_URL || 'http://localhost:8000',
        notify: false,
        inject: true,
        debounce: 2000
    });

    gulp.watch(['public/**/*', 'resources/views/**/*']).on('change', () => {
        browserSync.reload();
    });
});

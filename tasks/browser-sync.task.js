const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserSyncConfig = require('./config.js').browserSync;

gulp.task('browser-sync', () => {
    browserSync.init(browserSyncConfig);

    gulp.watch(['public/**/*', 'resources/views/**/*']).on('change', () => {
        browserSync.reload();
    });
});

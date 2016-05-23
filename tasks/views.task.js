const config = require('./config');
const gulp = require('gulp');
const del = require('del');

gulp.task('views', () => {
    del(['public/app/**/*.html']);

    gulp.src(config.src.views, {base: './angular/app'})
        .pipe(gulp.dest('public/app'));
});

gulp.task('watch-views', () => {
    gulp.watch(config.src.views).on('change', function (event) {
        gulp.src(event.path, {base: config.appRoot + '/' + config.src.rootPath})
            .pipe(gulp.dest('public'));
    });
});

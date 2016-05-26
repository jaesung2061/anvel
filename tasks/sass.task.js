const config = require('./config.js');
const sass = require('gulp-sass');
const gulp = require('gulp');
const del = require('del');
const path = require('path');

gulp.task('sass', () => {
    // Clean the public/app directory.
    del(['public/app/**/*.css', 'public/app/globals.css']);

    // Do the globals file separately and move to public/assets/
    gulp.src(config.src.sass.globals)
        .pipe(sass())
        .pipe(gulp.dest(config.assetsPath));

    // Compile, move and watch src scss files to public/app/ and keep directory structure
    gulp.src(config.src.sass.app, {base: './angular/app'})
        .pipe(sass())
        .pipe(gulp.dest('public/app'));
});

gulp.task('watch-sass', function () {
    gulp.watch(config.src.sass.app).on('change', (event) => {
        gulp.src(event.path, {base: config.appRoot + '/' + config.src.rootPath})
            .pipe(sass())
            .pipe(gulp.dest('public'));
    });

    gulp.watch(config.src.sass.globals).on('change', (event) => {
        gulp.src(event.path, {base: config.appRoot + '/' + config.src.rootPath})
            .pipe(sass())
            .pipe(gulp.dest('public/assets'));
    });
});

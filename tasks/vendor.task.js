const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const config = require('./config.js');
const sass = require('gulp-sass');
const gulp = require('gulp');

gulp.task('vendor', () => {
    gulp.src(config.dependencies.css)
        .pipe(sass())
        .pipe(concat('vendor.bundle.css'))
        .pipe(gulp.dest(config.assetsPath));
});
const config = require('./config.js');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const gulp = require('gulp');
const path = require('path');
const del = require('del');

gulp.task('setup', () => {
    gulp.src(config.dependencies.css)
        .pipe(sass())
        .pipe(concat('vendor.bundle.css'))
        .pipe(gulp.dest(config.assetsPath))
});

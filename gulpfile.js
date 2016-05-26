require('dotenv').config();

const gulp = require('gulp');

require('./tasks/browser-sync.task');
require('./tasks/typescript.task');
require('./tasks/vendor.task');
require('./tasks/views.task');
require('./tasks/tests.task');
require('./tasks/setup.task');
require('./tasks/sass.task');

gulp.task('default', [
    'typescript',
    'sass',
    'views',
    'tests'
]);

gulp.task('watch', [
    'browser-sync',
    'watch-sass',
    'watch-typescript',
    'watch-views',
    'watch-tests'
]);

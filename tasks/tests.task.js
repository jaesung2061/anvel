const gulp = require('gulp');
const config = require('./config.js');
const webpack = require('webpack-stream');
const Karma = require('karma').Server;
const configPath = require('path').resolve(__dirname, '../karma.conf.js');

let karmaIsWatching = false;

gulp.task('tests', (done) => {
    new Karma({
        configFile: configPath,
        singleRun: true
    }, done).start();
});

gulp.task('watch-tests', (done) => {
    if (!karmaIsWatching) {
        karmaIsWatching = true; // So it doesn't run twice.
        new Karma({
            configFile: configPath,
            singleRun: false
        }, done).start();
    }
});

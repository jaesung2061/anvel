const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    cache: true
});

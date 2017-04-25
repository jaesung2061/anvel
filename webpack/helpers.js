const path = require('path');

module.exports.resolve = function resolve(dest) {
    return path.resolve(__dirname, '../' + dest);
};

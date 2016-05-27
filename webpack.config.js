require('dotenv').config();

switch (process.env.APP_ENV) {
    case 'local':
        module.exports = require('./webpack/webpack.local');
        break;
    case 'testing':
        module.exports = require('./webpack/webpack.testing');
        break;
    case 'production':
        module.exports = require('./webpack/webpack.production');
        break;
}

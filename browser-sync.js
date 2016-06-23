require('dotenv').config();

const browserSync = require("browser-sync").create();
const watch = [
    'public/**/*',
    'resources/views/index.blade.php',
];

browserSync.init({
    proxy: process.env.BROWSERSYNC_PROXY_URL,
    debounce: 500,
    notify: false,
});

browserSync.watch(watch).on('change', browserSync.reload);

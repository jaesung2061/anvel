import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import 'ts-helpers';

require('zone.js/dist/long-stack-trace-zone');

if (window['APP_ENVIRONMENT'] === 'production') {
    Error['stackTraceLimit'] = Infinity;
} else {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

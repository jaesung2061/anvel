// Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

import 'ts-helpers';

// Rx operators
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// Import third-party css libraries and
import '!style!css!sass!./globals.scss';

require('./lib/bootstrap/less/bootstrap.less');
require('./css/datepicker.css');
require('./css/main.css');

import 'angular2/bundles/angular2-polyfills';

import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';

// FOR WHATEVER REASON, THIS MUST COME AFTER THE ANGULAR2-POLYFILLS IMPORT
require('./lib/bootstrap/bootstrap.js');
require('./lib/bootstrap/bootstrap-datepicker.js');
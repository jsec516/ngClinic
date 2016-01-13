require('./lib/bootstrap/less/bootstrap.less');
require('./css/datepicker.css');
require('./css/main.css');

import 'angular2/bundles/angular2-polyfills';

import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';
import 'moment';
import 'gsap';

// FOR WHATEVER REASON, THIS MUST COME AFTER THE ANGULAR2-POLYFILLS IMPORT
require('./lib/bootstrap/jquery-1.11.3.min.js')
require('imports?jQuery=jquery!./lib/bootstrap/bootstrap.min.js');
require('imports?jQuery=jquery!./lib/bootstrap/bootstrap-datepicker.js');
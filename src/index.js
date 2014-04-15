'use strict';

// ES6 Runtime
require('traceur/bin/traceur-runtime');

// Dependencies
require('angular/angular');
require('angular-animate/angular-animate');
require('ui-router/release/angular-ui-router');

// Modules
require('./modules/main');
require('./modules/contacts');

// Components
require('./components/top-nav')

// App
require('./app');
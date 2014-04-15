// ES6 Runtime
require('traceur/bin/traceur-runtime');

// Whole App
require('../src');

// Browserify includes a "module" variable for defining CommonJS-style modules
// however, this overrides ngMock's "module" variable.
// https://github.com/xdissent/karma-browserify/issues/10
require('angular-mocks/angular-mocks');

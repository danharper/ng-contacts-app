// Karma configuration
// Generated on Wed Mar 12 2014 08:21:17 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify', 'traceur'],


    // list of files / patterns to load in the browser
    files: [
      // watch the source files for changes, but don't include them
      // (they're loaded via karma-browserify) instead
      // {
      //   pattern: 'src/**/*.js',
      //   watched: true,
      //   included: false,
      //   served: false
      // },

      // include the test suites
      'test/unit-setup.js',
      'test/old-app-specs.js',
      'src/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/unit-setup.js': ['traceur', 'browserify'],
        'test/old-app-specs.js': ['traceur', 'browserify'],
        'src/**/*.spec.js': ['traceur', 'browserify'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    browserify: {
        watch: true,
        debug: true
    }
  });
};

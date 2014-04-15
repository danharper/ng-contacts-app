exports.config = {

    specs: [
      './e2e/**/*.e2e.js'
    ],

    baseUrl: 'http://localhost:3333',
    seleniumServerJar: './../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',

    jasmineNodeOpts: {
      showColors: true
    }
    
};

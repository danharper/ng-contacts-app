# Contacts App

A small "for-fun" [**AngularJS**](http://angularjs.org/) app, written with a bunch of nice **ES6** goodness. Unit tests in Karma (`.spec.js` files), with End-to-End functional tests with Protractor (`.e2e.js` files).

* ES6 syntax, compiled to ES5 using [**Traceur**](https://github.com/google/traceur-compiler)
* [**AngularUI Router**](http://angular-ui.github.io/ui-router/) for page route/state handling
* CommonJS-style module loading achieved with [**Browserify**](http://browserify.org/)
* Templates inlined into compiled JS using [**brfs**](https://github.com/substack/brfs)
* Well tested with [**Karma**](http://karma-runner.github.io) & [**Jasmine**](http://jasmine.github.io/) at the unit level, and end-to-end test with [**Protractor**](https://github.com/angular/protractor)
* Using [**napa**](https://github.com/shama/napa) to load front-end assets with npm (eg. Angular)
* [**Gulp**](http://gulpjs.com/) is used as the task runner to tie everything together

### Thought Process

`index.js` boots up the application by pulling in the core dependencies, modules, components, then application itself.

A "module" is a far-reaching feature of the application - in this case, "Contacts" is one, as is "Main" (front page).

A "component" is a reusable piece - such as shared directives - in this case, the Top Nav is one.

### Running

#### Installation

* Have `npm` installed
* Ensure you have [gulp](http://gulpjs.com/) installed globally (`npm install -g gulp`)
* Run `npm install`

#### Building

* Run `gulp` to run the compiler watcher for file changes
* Start a web server inside the `public` directory, eg. `php -S localhost:3333`
* Open in your browser

### Testing

#### Unit Tests (Karma & Jasmine)

* `gulp karma`

#### E2E Functional Tests (Protractor/Webdriver & Jasmine)

* Ensure you have the webdriver installed: `./node_modules/protractor/bin/webdriver-manager update`
* _If this installs selenium server > 2.40.0, update the path in `config/protractor.conf.js`_
* `gulp protractor`


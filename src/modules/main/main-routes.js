var fs = require('fs');

var Routes = ($stateProvider) => {
	$stateProvider
	.state('home', {
		url: '/',
		template: 'Welcome, it\'s here!'
	})
}

Routes.$inject = ['$stateProvider'];

module.exports = Routes;
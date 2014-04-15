var fs = require('fs')

module.exports = function topNavDirective() {
	return {
		restrict: 'E',
		controller: 'TopNavController',
		transclude: true,
		scope: {
			rootText: '@'
		},
		template: fs.readFileSync(__dirname+'/top-nav.html')
	}
}
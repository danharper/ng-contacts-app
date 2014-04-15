angular.module('contacts', [
	'ngAnimate',
	'ui.router',
	'app.main',
	'app.contacts',
	'cmp.topNav'
])

.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
})

.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state
	$rootScope.$stateParams = $stateParams
}])
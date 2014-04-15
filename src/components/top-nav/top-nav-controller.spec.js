var module = angular.mock.module

ddescribe('TopNavController', function() {
	beforeEach(module('cmp.topNav'))

	var $scope, makeController = inject(function($controller) {
		$controller('TopNavController', { $scope })
	})

	it('sets links on the scope', function() {
		$scope = {}
		makeController()
		expect($scope.links instanceof Array).toBe(true)
	})

	var expectHomeLinkTextToBe = (text) => {
		expect($scope.links[0].name).toBe(text)
	}

	describe('with no custom data on the scope', function() {
		it('defaults home link text to "Home"', function() {
			$scope = {}
			makeController()
			expectHomeLinkTextToBe('Home')
		})
	})

	describe('with a "rootText" set on the $scope', function() {
		it('uses it as the home link text', function() {
			$scope = { rootText: 'Fubar' }
			makeController()
			expectHomeLinkTextToBe('Fubar')
		})
	})
})
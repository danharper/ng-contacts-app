class TopNavController {
	constructor($scope) {
		$scope.links = [
			{ name: ($scope.rootText || 'Home'), state: 'home' },
			{ name: 'Contacts', state: 'contacts' }
		]
	}
}

TopNavController.$inject = ['$scope']

module.exports = TopNavController
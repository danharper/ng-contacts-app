class ContactsInfoController {
	constructor($scope, $stateParams, ContactsRepository) {
		$scope.contact = ContactsRepository.find(parseInt($stateParams.id, 10))
	}
}

ContactsInfoController.$inject = ['$scope', '$stateParams', 'ContactsRepository'];

module.exports = ContactsInfoController
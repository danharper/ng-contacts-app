class ContactsListController {
	constructor($scope, ContactsRepository) {
		$scope.contacts = ContactsRepository.all();
	}
}

ContactsListController.$inject = ['$scope', 'ContactsRepository']

module.exports = ContactsListController
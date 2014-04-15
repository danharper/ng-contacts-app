class ContactsEditController {
	constructor($state, $stateParams, ContactsRepository) {
		this.$state = $state
		this.contacts = ContactsRepository
		var contact = ContactsRepository.find(parseInt($stateParams.id, 10))
		this.setContact(contact)
	}
	updateContact() {
		this.contacts.update(this.contact)
		this.$state.go('contacts.show')
	}
	setContact({id, firstName, lastName}) {
		this.contact = { id, firstName, lastName }
	}
}

ContactsEditController.$inject = ['$state', '$stateParams', 'ContactsRepository']

module.exports = ContactsEditController
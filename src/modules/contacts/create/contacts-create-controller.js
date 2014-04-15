class ContactsCreateController {
	constructor(ContactsRepository) {
		this.contacts = ContactsRepository
		this.resetNewContact()
	}
	createContact(newContact) {
		this.contacts.add(newContact)
		this.resetNewContact()
	}
	resetNewContact() {
		this.newContact = {}
	}
}

ContactsCreateController.$inject = ['ContactsRepository'];

module.exports = ContactsCreateController
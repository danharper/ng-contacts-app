var Contact = require('./contact-model.js')

var data = [
	{ id: 1, firstName: 'Dan', lastName: 'Harper', city: 'Stourport' },
	{ id: 2, firstName: 'Bob', lastName: 'Jones', city: 'Portsmouth' },
]

class ContactsRepositoryService {
	constructor() {
		this.items = data.map(d => new Contact(d))
	}
	all() {
		return this.items
	}
	find(id) {
		return this.all()[id-1]
	}
	add({firstName, lastName}) {
		var contact = new Contact({ id: this.items.length + 1, city: '', firstName, lastName })
		this.items.push(contact)
	}
	update({id, firstName, lastName}) {
		var contact = this.find(id);
		contact.firstName = firstName
		contact.lastName = lastName
	}
}

module.exports = ContactsRepositoryService
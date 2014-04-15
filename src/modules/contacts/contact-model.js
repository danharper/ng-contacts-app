class Contact {
	constructor({id, firstName, lastName, city}) {
		this.id = id
		this.firstName = firstName
		this.lastName = lastName
		this.city = city
	}
	get name() {
		return `${this.firstName} ${this.lastName}`
	}
}

module.exports = Contact
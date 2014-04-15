var ContactsListPage = function() {
	return {
		go: function() {
			browser.get('/#/contacts')
		},
		get contacts() {
			return element.all(by.repeater('contact in contacts'))
		}
	}
}

describe('contacts list page', function() {
	beforeEach(function() {
		this.page = new ContactsListPage
		this.page.go()
	})

	it('should show links to all contacts', function() {
		expect(this.page.contacts.count()).toBe(2)
	})

	it('should link to each contact', function() {
		this.page.contacts.first().click()
		expect(browser.getCurrentUrl()).toContain('/contacts/1')
	})

	it('should include a link to create a new contact', function() {
		element(by.css('a[ui-sref="contacts.create"]')).click()
		expect(browser.getCurrentUrl()).toContain('/contacts/create')
	})
})
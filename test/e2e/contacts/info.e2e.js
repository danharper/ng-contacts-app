var ContactInfoPage = function() {
	return {
		go: function() {
			browser.get('/#/contacts/1')
		},
		get contacts() {
			return element.all(by.repeater('contact in contacts'))
		},
		get main() {
			return element(by.css('.panel-body'))
		},
		get contactName() {
			return this.main.findElement(by.binding('contact.name'))
		},
		get city() {
			return this.main.findElement(by.binding('contact.city'))
		},
		get editLink() {
			return this.main.findElement(by.css('a[ui-sref^="contacts.edit"]'))
		}
	}
}

describe('contact info page', function() {
	beforeEach(function() {
		this.page = new ContactInfoPage
		this.page.go()
	})

	it('should highlight the current contact in the list', function() {
		expect(this.page.contacts.first().getAttribute('class')).toMatch(/active/)
		expect(this.page.contacts.get(1).getAttribute('class')).not.toMatch(/active/)
	})

	it('should show the contact\'s full name', function() {
		expect(this.page.contactName.getText()).toBe('Dan Harper')
	})

	it('should show the contact\'s city', function() {
		expect(this.page.city.getText()).toContain('Stourport')
	})

	it('should include a link to the edit page', function() {
		this.page.editLink.click()
		expect(browser.getCurrentUrl()).toContain('/contacts/1/edit')
	})
})
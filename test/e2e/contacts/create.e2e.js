var ContactCreatePage = function() {
	return {
		go: function() {
			browser.get('/#/contacts/create')
		},
		get contacts() {
			return element.all(by.repeater('contact in contacts'))
		},
		// todo: (almost) duplicates of ContactEditPage...
		// only diference is the binding names
		get main() {
			return element(by.css('.panel-body'))
		},
		get firstNameInput() {
			return this.main.findElement(by.model('create.newContact.firstName'))
		},
		set firstNameInput(text) {
			this.firstNameInput.clear()
			this.firstNameInput.sendKeys(text)
		},
		get lastNameInput() {
			return this.main.findElement(by.model('create.newContact.lastName'))
		},
		set lastNameInput(text) {
			this.lastNameInput.clear()
			this.lastNameInput.sendKeys(text)
		},
		get submitButton() {
			return this.main.findElement(by.css('form button'))
		}
	}
}

describe('contacts create page', function() {
	beforeEach(function() {
		this.page = new ContactCreatePage
		this.page.go()
	})

	it('should include empty inputs for first and last names', function() {
		expect(this.page.firstNameInput.getAttribute('value')).toBe('')
		expect(this.page.lastNameInput.getAttribute('value')).toBe('')
	})

	describe('submitting the form', function() {
		beforeEach(function() {
			this.page.firstNameInput = 'Lorem Ipsum'
			this.page.lastNameInput = 'Dolor Sit'
			this.page.submitButton.click()
		})

		it('should create a new contact', function() {
			expect(this.page.contacts.count()).toBe(3)
		})

		it('clear the form', function() {
			expect(this.page.firstNameInput.getAttribute('value')).toBe('')
			expect(this.page.lastNameInput.getAttribute('value')).toBe('')
		})
	})
})
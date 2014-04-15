var ContactEditPage = function() {
	return {
		go: function() {
			browser.get('/#/contacts/1/edit')
		},
		get main() {
			return element(by.css('.panel-body'))
		},
		get firstNameInput() {
			return this.main.findElement(by.model('edit.contact.firstName'))
		},
		set firstNameInput(text) {
			this.firstNameInput.clear()
			this.firstNameInput.sendKeys(text)
		},
		get lastNameInput() {
			return this.main.findElement(by.model('edit.contact.lastName'))
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

describe('contact edit page', function() {
	beforeEach(function() {
		this.page = new ContactEditPage
		this.page.go()
	})

	it('should include inputs for first and last names', function() {
		expect(this.page.firstNameInput.getAttribute('value')).toBe('Dan')
		expect(this.page.lastNameInput.getAttribute('value')).toBe('Harper')
	})

	describe('submitting the update form', function() {
		beforeEach(function() {
			this.page.firstNameInput = 'Foo'
			this.page.lastNameInput = 'Barbaz'
			this.page.submitButton.click()
		})

		it('should redirect to the contact\'s main info page', function() {
			expect(browser.getCurrentUrl()).toMatch(/\/contacts\/1$/)
		})
		
		it('should update the contact', function() {
			// todo: not a fan of testing it like this,
			//       it's overly brittle..
			expect(this.page.main.findElement(by.binding('contact.name')).getText()).toBe('Foo Barbaz')
		})
	})
})
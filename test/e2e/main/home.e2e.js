var HomePage = function() {
	return {
		go: function() {
			browser.get('/')
		},
		get title() {
			return browser.getTitle()
		},
		get content() {
			return element(by.css('section span'))
		},
		get nav() {
			return element.all(by.repeater('link in links'))
		}
	}
}

describe('welcome, great traveller of the internet', function() {
	it('should redirect to the home page', function() {
		browser.get('/')
		expect(browser.getCurrentUrl()).toContain('/#/')
	})
})

describe('home page', function() {
	beforeEach(function() {
		this.page = new HomePage
		this.page.go()
	})

	it('should have a title', function() {
		expect(this.page.title).toBe('Sample Contacts App')
	})

	it('should say welcome', function() {
		expect(this.page.content.getText()).toBe("Welcome, it's here!")
	})

	it('should have two navigation links', function() {
		// todo: how best to test global nav? don't like this one bit
		expect(this.page.nav.count()).toBe(2)
	})

	it('should have an active home nav link', function() {
		var home = this.page.nav.first()
		expect(home.getText()).toBe('Home')
		expect(home.getAttribute('class')).toMatch(/active/)
	})
	
	it('should have a non-active Contacts nav link', function() {
		var contacts = this.page.nav.get(1)
		expect(contacts.getText()).toBe('Contacts')
		expect(contacts.getAttribute('class')).not.toMatch(/active/)
	})
})
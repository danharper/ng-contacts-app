var module = angular.mock.module

describe('ContactsRepositoryService', function() {
  beforeEach(module('app.contacts'))

  var sut, Contact;

  beforeEach(inject(function($injector) {
    sut = $injector.get('ContactsRepository')
    Contact = require('./contact-model.js')
  }))

  describe('#all', function() {
    it('should contain 2 Contacts', function() {
      expect(sut.all().length).toBe(2)
      expect(sut.all()[0] instanceof Contact).toBe(true)
    })
  })

  describe('#find', function() {
    it('should return a contact by ID', function() {
      expect(sut.find(1).id).toBe(1)
      expect(sut.find(2).id).toBe(2)
    })
    it('should return undefined when not found', function() {
      expect(sut.find(3)).toBe(undefined)
    })
  })

  describe('#add', function() {
    it('should add a contact by first & last name with an incremental ID', function() {
      sut.add({ firstName: 'Foo', lastName: 'Bar' })
      expect(sut.find(3).firstName).toBe('Foo')
    })
    it('should initialise city as empty', function() {
      sut.add({ firstName: 'Foo', lastName: 'Bar' })
      expect(sut.find(3).city).toBe('')
    })
  })

  describe('#update', function() {
    it('should update first name and last name by ID', function() {
      sut.update({ id: 1, firstName: 'AAa', lastName: 'BBb' })
      expect(sut.find(1).firstName).toBe('AAa')
      expect(sut.find(1).lastName).toBe('BBb')
    })
    it('should except the entire object when updating', function() {
      sut.update({ id: 1, firstName: 'AAa', lastName: 'BBb' })
      sut.update({ id: 1, firstName: 'Lol' })
      expect(sut.find(1).firstName).toBe('Lol')
      expect(sut.find(1).lastName).toBe(undefined)
    })
    it('should not update city', function() {
      sut.update({ id: 1, city: 'Foobar234' })
      expect(sut.find(1).city).toNotBe('Foobar234')
    })
  })

})

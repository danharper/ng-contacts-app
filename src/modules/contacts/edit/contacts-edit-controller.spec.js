var module = angular.mock.module

describe('ContactsEditController', function() {
  beforeEach(module('app.contacts'))

  var sut, $state, $stateParams, contact;
  var ContactsRepository = { find:function(){}, update:function(){} }

  beforeEach(inject(function($controller) {
    $state = { go: function() {} }
    $stateParams = { id: '5' }
    contact = { id: 5, firstName: 'Foo', lastName: 'Bar' }

    spyOn(ContactsRepository, 'find').andReturn(contact)

    sut = $controller('ContactsEditController', { $state, $stateParams, ContactsRepository })
  }))

  it('should set a clone of the contact on the instance', function() {
    expect(sut.contact).toEqual(contact)
    expect(sut.contact).not.toBe(contact)
  })

  describe('#updateContact', function() {
    it('should persist the contact to the repository', function() {
      spyOn(ContactsRepository, 'update')
      sut.contact.lastName = 'Woah'
      sut.updateContact()
      expect(ContactsRepository.update).toHaveBeenCalledWith(sut.contact)
    })
    it('it should change state to show the contact details page', function() {
      spyOn($state, 'go')
      sut.updateContact()
      expect($state.go).toHaveBeenCalledWith('contacts.show')
    })
  })
})
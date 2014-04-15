var module = angular.mock.module;

xdescribe('spec', function() {
  it('should be wired up', function() {
    expect(true).toBe(true);
  });
});

xdescribe('ContactsEditController', function() {
  var sut, $state, $stateParams, fakeContact, fakeRepo
  beforeEach(function() {
    $state = { go: function() {} }
    $stateParams = { id: '5' }
    fakeContact = { id: 5, firstName: 'Foo', lastName: 'Bar' }
    fakeRepo = { find: function(id) { if (id === 5) return fakeContact }, update: function() {} }
  })
  beforeEach(function() {
    var sutc = require('../src/modules/contacts/edit/contacts-edit-controller.js')
    sut = new sutc($state, $stateParams, fakeRepo)
  })
  it('should set a clone of the contact on the instance', function() {
    expect(sut.contact).toEqual(fakeContact)
    expect(sut.contact).not.toBe(fakeContact)
  })
  describe('#updateContact', function() {
    it('should persist the contact to the repository', function() {
      spyOn(fakeRepo, 'update')
      sut.contact.lastName = 'Woah'
      sut.updateContact()
      expect(fakeRepo.update).toHaveBeenCalledWith(sut.contact)
    })
    it('it should change state to show the contact details page', function() {
      spyOn($state, 'go')
      sut.updateContact()
      expect($state.go).toHaveBeenCalledWith('contacts.show')
    })
  })
})

xdescribe('ContactsInfoController', function() {
  var sut, $scope, $stateParams, fakeRepo
  beforeEach(function() {
    $scope = {}
    $stateParams = { id: '2' }
    fakeRepo = { find: function(id) { return id === 2 ? 'Works!' : 'Broke..' } }
    sut = require('../src/modules/contacts/info/contacts-info-controller.js')
  })
  it('should set contact on scope by id from state params', function() {
    new sut($scope, $stateParams, fakeRepo)
    expect($scope.contact).toBe('Works!')
  })
})

xdescribe('ContactsListController', function() {
  var sut, $scope, fakeRepo
  beforeEach(function() {
    $scope = {}
    fakeRepo = { all: function() { return 'works!'} }
    sut = require('../src/modules/contacts/list/contacts-list-controller.js')
  })
  it('should set all contacts on scope', function() {
    var x = new sut($scope, fakeRepo)
    expect($scope.contacts).toBe('works!')
  })
})

xdescribe('ContactsListController2', function() {
  beforeEach(module('app.contacts'))

  var sut, $scope;

  var ContactsRepositoryStub = {
    all: function() { return 'works!' }
  }

  beforeEach(inject(function($controller) {
    $scope = {}

    sut = $controller('ContactsListController', {
      $scope: $scope,
      ContactsRepository: ContactsRepositoryStub
    })
  }))

  it('should set all contacts on scope', function() {
    expect($scope.contacts).toBe('works!')
  })
})

xdescribe('ContactModel', function() {
  var sut;
  beforeEach(function() {
    sut = require('../src/modules/contacts/contact-model.js')
  })
  it('should initialise with an object', function() {
    var x = new sut({ id: 9, firstName: 'Bar', lastName: 'Baz', city: 'Epic' })
    expect(x.id).toBe(9)
    expect(x.firstName).toBe('Bar')
    expect(x.lastName).toBe('Baz')
    expect(x.city).toBe('Epic')
  })
  it('should mark fields not provided as undefined', function() {
    var x = new sut({ lastName: 'Jones' })
    expect(x.id).toBe(undefined)
    expect(x.firstName).toBe(undefined)
  })
})

xdescribe('ContactsRepositoryService', function() {
  var sut, Contact;
  beforeEach(module('app.contacts'))
  beforeEach(function() {
    sut = new (require('../src/modules/contacts/contacts-repository-service.js'))
    Contact = require('../src/modules/contacts/contact-model.js')
  })
  beforeEach(function() {
    this.addMatchers({
        toBeInstanceOf: function(expectedInstance) {
          var actual = this.actual;
          var notText = this.isNot ? " not" : "";
          this.message = function() {
            return "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name;
          };
          return actual instanceof expectedInstance;
        }   
    });
  });

  describe('#all', function() {
    it('should contain 2 contacts', function() {
      expect(sut.all().length).toBe(2)
      expect(sut.all()[0]).toBeInstanceOf(Contact)
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
    it('should add a contact by first & last name', function() {
      sut.add({firstName: 'Foo', lastName: 'Bar'})
      expect(sut.find(3).firstName).toBe('Foo')
    })
    it('should initialise city as empty', function() {
      sut.add({firstName: 'Foo', lastName: 'Bar'})
      expect(sut.find(3).city).toBe('')
    })
  })

  describe('#update', function() {
    it('should update first name and last name by ID', function() {
      sut.update({id: 1, firstName: 'AAa', lastName: 'BBb'})
      var c = sut.find(1)
      expect(c.firstName).toBe('AAa')
      expect(c.lastName).toBe('BBb')
    })
    it('should except the entire object when updating', function() {
      sut.update({id: 1, firstName: 'AAa', lastName: 'BBb'})
      sut.update({id: 1, firstName: 'Lol'})
      expect(sut.find(1).firstName).toBe('Lol')
      expect(sut.find(1).lastName).toBe(undefined)
    })
    it('should not update city', function() {
      sut.update({id: 1, city: 'Foobar234'})
      expect(sut.find(1).city).toNotBe('Foobar234')
    })
  })

})

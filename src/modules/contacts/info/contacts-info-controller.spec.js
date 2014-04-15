var module = angular.mock.module

describe('ContactsInfoController', function() {
  beforeEach(module('app.contacts'))

  var $scope, $stateParams, ContactsRepository = {find:{}}

  beforeEach(inject(function($controller) {
    spyOn(ContactsRepository, 'find').andReturn('Works!')

    $scope = {}
    $stateParams = { id: '2' }
    $controller('ContactsInfoController', { $scope, $stateParams, ContactsRepository })
  }))

  it('should set contact on scope by ID from state params', function() {
    expect(ContactsRepository.find).toHaveBeenCalledWith(2)
    expect($scope.contact).toBe('Works!')
  })
})
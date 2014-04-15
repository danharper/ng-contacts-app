var module = angular.mock.module

describe('ContactsListController', function() {
  beforeEach(module('app.contacts'))

  var $scope, ContactsRepository = { all: () => 'works!' }

  beforeEach(inject(function($controller) {
    $scope = {}
    $controller('ContactsListController', { $scope, ContactsRepository })
  }))

  it('should set all contacts on scope', () => {
    expect($scope.contacts).toBe('works!')
  })
})

'use strict';

describe('Controller: MymapCtrl', function () {

  // load the controller's module
  beforeEach(module('schoolusUiApp'));

  var MymapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MymapCtrl = $controller('MymapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

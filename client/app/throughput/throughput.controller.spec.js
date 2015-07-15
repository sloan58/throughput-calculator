'use strict';

describe('Controller: ThroughputCtrl', function () {

  // load the controller's module
  beforeEach(module('throughputApp'));

  var ThroughputCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThroughputCtrl = $controller('ThroughputCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

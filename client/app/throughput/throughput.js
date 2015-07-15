'use strict';

angular.module('throughputApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('throughput', {
        url: '/',
        templateUrl: 'app/throughput/throughput.html',
        controller: 'ThroughputCtrl'
      });
  });
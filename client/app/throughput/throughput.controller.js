'use strict';

angular.module('throughputApp')
    .controller('ThroughputCtrl', function ($scope, $http, socket) {
        $scope.throughputs = [];

        $http.get('/api/throughputs').success(function(throughputs) {
            $scope.throughputs = throughputs;
            socket.syncUpdates('throughput', $scope.throughputs);
        });

        $scope.addThroughput = function() {
            if($scope.name === '') {
                return;
            }

            $http.post('/api/throughputs', {

                linkId: $scope.linkId,
                winSz_KB: $scope.winSz_KB,
                netLat_ms: $scope.netLat_ms,

                winSz_B: ($scope.winSz_KB * 1024),
                winSz_b: (($scope.winSz_KB * 1024) * 8),
                netLat: ($scope.netLat_ms / 1000),
                throughput_bps: ((($scope.winSz_KB * 1024) * 8) / ($scope.netLat_ms / 1000)),
                throughput_Mbps: (((($scope.winSz_KB * 1024) * 8) / ($scope.netLat_ms / 1000)) / 1000000)
            });
            $scope.linkId = '';
            $scope.winSz_KB = '';
            $scope.netLat_ms = '';
        };

        $scope.deleteThroughput = function(throughput) {
            $http.delete('/api/throughputs/' + throughput._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('throughput');
        });

    });

'use strict';

/* Controllers */

var comptesDashboardControllers = angular.module('comptesDashboardControllers', []);

comptesDashboardControllers.controller('IndexCtrl', ['$scope',
    function($scope, $http) {
        $scope.name = 'WORLD';
    }]);

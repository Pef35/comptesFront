'use strict';

/* Controllers */

var comptesDashboardControllers = angular.module('comptesDashboardControllers', []);

comptesDashboardControllers.controller('IndexCtrl', ['$scope',
    function($scope) {
        $scope.name = 'Pef';
    }]);

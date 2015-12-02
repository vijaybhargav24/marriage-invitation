'use strict';

/**
 * @ngdoc function
 * @name vijayWedsAmmuuuuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vijayWedsAmmuuuuApp
 */

function MainCtrl($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.filterOptions = [
        {
            name: '10%',
            value: 10
        },
        {
            name: '25%',
            value: 25
        },
        {
            name: '65%',
            value: 65
        },
        {
            name: '85%',
            value: 85
        }
      ];
    $scope.gauge = {
        name: 'Some data',
        opacity: 0.55,
        value: 65,
        text: 'some cool data'
    };
}

angular.module('vijayWedsAmmuuuuApp')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];
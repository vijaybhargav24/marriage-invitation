'use strict';

var app = angular.module('vijayWedsAmmuuuuApp');

function AppCtrl($timeout, $location) {
    var app = this;
    app.showInvi = false;
    $timeout(function () {
        app.showInvi = true;
    }, 3000);

    $timeout(function () {
        app.showIcons = true;
    }, 5000);

    app.changeView = function (view) {
        $location.url('/' + view);
    };
}

app.controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$timeout', '$location'];
'use strict';

/**
 * @ngdoc overview
 * @name vijayWedsAmmuuuuApp
 * @description
 * # vijayWedsAmmuuuuApp
 *
 * Main module of the application.
 */
angular
    .module('vijayWedsAmmuuuuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/dinner', {
                templateUrl: 'views/dinner.html'
            })
            .when('/eventDate', {
                templateUrl: 'views/eventDate.html'
            })
            .when('/gallery', {
                templateUrl: 'views/gallery.html',
                controller: 'GalleryCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .when('/location', {
                templateUrl: 'views/location.html',
                controller: 'LocationCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
'use strict';

/**
 * @ngdoc function
 * @name vijayWedsAmmuuuuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vijayWedsAmmuuuuApp
 */
angular.module('vijayWedsAmmuuuuApp')
    .controller('GalleryCtrl', function ($scope) {
        $scope.slides = [
            {
                image: '../images/DSC_0427.jpg',
                description: 'Image 00'
            },

            {
                image: '../images/DSC_0619.jpg',
                description: 'Image 01'
            }, {
                image: '../images/DSC_0615.jpg',
                description: 'Image 00'
            },
            {
                image: '../images/DSC_0628.jpg',
                description: 'Image 01'
            },
            {
                image: '../images/DSC_0695.jpg',
                description: 'Image 01'
            },
            {
                image: '../images/DSC_0725.jpg',
                description: 'Image 01'
            },
            {
                image: '../images/DSC_0726.jpg',
                description: 'Image 01'
            }
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className === 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if (scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {
                        left: finishPoint,
                        onComplete: done
                    });
                } else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className === 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if (scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, {
                        left: startPoint
                    }, {
                        left: 0,
                        onComplete: done
                    });
                } else {
                    done();
                }
            }
        };
    });
(function (Raphael) {
    'use strict';

    // module definition, this has to be included in your app
    angular.module('angular-raphael-gauge', [])
        // directive definition, if you want to use itm you have to include it in controller
        .directive('raphaelGauge', function () {
            return {
                // this directive can be used as an Element or an Attribute
                restrict: 'EA',
                scope: {
                    // setting config attribute to isolated scope
                    // config object is 1:1 configuration C3.js object, for avaiable options see: http://c3js.org/examples.html
                    config: '='
                },
                template: '<div></div>',
                replace: true,
                controller: function ($scope, $element) {

                    var options = {
                        element: $element[0].id,
                        name: false,
                        value: 25,
                        image: false,
                        icon: false,
                        text: false,
                        textColor: '#000000',
                        arcColor: '#57E0EA',
                        bgArcColor: '#000',
                        opacity: false,
                        duration: 1600,
                        easing: 'bounce' // Raphael easing effect. Don't use backIn or Elastic, they mess up animation :/
                    };

                    // merging default options with user options
                    options = $.extend(options, $scope.config);

                    // radius is caluculated from element's width
                    var radius = $('#' + options.element).width(),
                        width = $('#' + options.element).width() - 200,
                        height = $('#' + options.element).height();
                    $('#' + options.element).html('');
                    $('#' + options.element).css({
                        'margin': 'auto',
                        'width': width
                    });

                }
            };
        });
}(Raphael));
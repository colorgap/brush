(function () {
    'use strict';
    materialize.directive('modal', function () {
        return {
            restrict: 'A',
            scope: {
                options: '='
            },
            link: function (scope, element, attrs, c, d) {
                console.log(c, d);
            }
        };
    });
    materialize.factory('materializeModal', ['$q', function ($q) {
        return {
            open: function (options) {
            }    
        };
    }]);
})();
(function() {
    'use strict';
    app.directive('logo', function() {
        return {
            restrict: 'EA',
            template: '<span class="bold"><span>bow</span><span class="text-accent">yer</span></span>'
        };
    });
})();
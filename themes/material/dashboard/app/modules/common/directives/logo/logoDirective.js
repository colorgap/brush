(function() {
    'use strict';
    app.directive('logo', function() {
        return {
            restrict: 'EA',
            template: '<span class="bold"><span>bru</span><span class="text-accent">sh</span></span>'
        };
    });
})();
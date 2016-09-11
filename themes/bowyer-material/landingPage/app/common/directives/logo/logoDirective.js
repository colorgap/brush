(function() {
    'use strict';
    app.directive('logo', function() {
        return {
            restrict: 'EA',
            template: '<span class="bold"><span>bow</span><span style="color:#F39C12">yer</span></span>'
        };
    });
})();
var app;
(function() {
    'use strict';
    app = angular.module('brush',
        [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'LocalStorageModule',
            'ui.materialize.brush'
        ]
    );
})();
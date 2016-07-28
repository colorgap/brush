var bowyerApp;
(function() {
    'use strict';
    bowyerApp = angular.module('bowyer',
        [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'LocalStorageModule',
            'ui.materialize'
        ]
    );
})();
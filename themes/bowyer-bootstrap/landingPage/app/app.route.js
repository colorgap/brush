(function() {
    'use strict';
    bowyerApp.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'bowyer-ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl'
            });
        $urlRouterProvider.otherwise('/');
    }]);
})();
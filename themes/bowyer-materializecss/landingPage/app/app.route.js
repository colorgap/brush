(function() {
    'use strict';
    bowyerApp.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider','$httpProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider,$httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'bowyer-ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('bowyer');
        $httpProvider.interceptors.push('tokenInjector');
    }]);
})();
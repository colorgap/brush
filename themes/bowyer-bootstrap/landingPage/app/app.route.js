(function() {
    'use strict';
    bowyerApp.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'bowyer-ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('bowyer');
    }]);
})();
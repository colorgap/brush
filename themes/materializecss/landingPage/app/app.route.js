(function() {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider','$httpProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider,$httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('brush');
        $httpProvider.interceptors.push('tokenInjector');
    }]);
})();
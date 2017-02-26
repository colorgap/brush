(function() {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('brush');
    }]);
})();
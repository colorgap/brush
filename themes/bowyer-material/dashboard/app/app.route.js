(function() {
  'use strict';

  app
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/index.html',
        controller: 'loginCtrl as login'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'bowyer-ui/dashboard/partials/login/index.html',
        controller: 'loginCtrl as login'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();

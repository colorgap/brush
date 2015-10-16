(function() {
  'use strict';

  angular
    .module('lume')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log('here');
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'dashboard-ui/partials/login/login.html'
      })
      .state('dashboard', {
        url: '/',
        templateUrl: 'dashboard-ui/partials/dashboard/dashboard.html'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();

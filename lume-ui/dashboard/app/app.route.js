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
        templateUrl: 'lume-ui/dashboard/partials/login/login.html'
      })
      .state('dashboard', {
        url: '/',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/dashboard.html'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();

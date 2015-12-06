(function() {
  'use strict';

  angular
    .module('lume')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log('here');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'lume-ui/landingPage/partials/home/index.html',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

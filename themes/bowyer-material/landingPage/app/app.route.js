(function() {
  'use strict';

  angular
    .module('bowyer')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'bowyer-ui/landingPage/partials/home/index.html',
        controller: 'homeCtrl as hc'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

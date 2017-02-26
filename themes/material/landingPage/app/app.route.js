(function() {
  'use strict';

  app
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'ui/landingPage/partials/home/index.html',
        controller: 'homeCtrl as hc'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

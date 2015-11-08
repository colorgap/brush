(function() {
  'use strict';
  angular.module('lume', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap']);
})();

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

(function() {
  'use strict';

  angular
    .module('lume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

(function() {
  'use strict';
  angular.module('lume').controller('loginCtrl', ['$scope',function($scope){

  }]);
})();

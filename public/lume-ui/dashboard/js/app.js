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
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'lume-ui/dashboard/partials/login/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'lume-ui/dashboard/partials/register/register.html'
      })
      .state('dashboard', {
        url: '/',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/dashboard.html'
      })
      .state('dashboard.alerts', {
        url: 'alerts',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/alerts/alerts.html'
      })
      .state('dashboard.users', {
        url: 'users',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/users/users.html'
      })
      .state('dashboard.settings', {
        url: 'settings',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/settings/settings.html'
      })
      .state('dashboard.resetPassword', {
        url: 'resetPassword',
        templateUrl: 'lume-ui/dashboard/partials/dashboard/resetPassword/resetPassword.html'
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

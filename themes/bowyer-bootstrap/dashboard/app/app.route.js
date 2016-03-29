(function() {
  'use strict';

  angular
    .module('bowyer')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'bowyer-ui/dashboard/partials/login/login.html'
      })
      .state('logout', {
        url: '/logout',
        controller: 'logoutCtrl'
      })
      .state('forgetPassword', {
        url: '/forgetPassword',
        templateUrl: 'bowyer-ui/dashboard/partials/forgetPassword/forgetPassword.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'bowyer-ui/dashboard/partials/register/register.html'
      })
      .state('dashboard', {
        url: '/',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/dashboard.html'
      })
      .state('dashboard.alerts', {
        url: 'alerts',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/alerts/alerts.html'
      })
      .state('dashboard.users', {
        url: 'users',
        controller:'usersCtrl as vm',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/users.html'
      })
      .state('dashboard.settings', {
        url: 'settings',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/settings/settings.html'
      })
      .state('dashboard.resetPassword', {
        url: 'resetPassword',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/resetPassword/resetPassword.html'
      })
      .state('dashboard.api', {
        url: 'api',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/api/api.html'
      })
      .state('dashboard.analytics', {
        url: 'analytics',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/analytics/analytics.html'
      })
      .state('dashboard.config', {
        url: 'config',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/config.html',
      })
      .state('dashboard.config.roles', {
        url: '/roles',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/roles/roles.html'
      })
      .state('dashboard.healthcheck', {
        url: 'healthcheck',
        templateUrl: 'bowyer-ui/dashboard/partials/dashboard/healthcheck/healthcheck.html',
        controller: 'healthCheckCtrl as vm'
      });
    $urlRouterProvider.otherwise('/login');
    localStorageServiceProvider.setPrefix('bowyer');
  }

})();

(function() {
  'use strict';

  angular
    .module('lume')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'lume-ui/dashboard/partials/login/login.html'
      })
      .state('logout', {
        url: '/logout',
        controller: 'logoutCtrl'
      })
      .state('forgetPassword', {
        url: '/forgetPassword',
        templateUrl: 'lume-ui/dashboard/partials/forgetPassword/forgetPassword.html'
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
        controller:'usersCtrl as vm',
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
    localStorageServiceProvider.setPrefix('lume');
  }

})();

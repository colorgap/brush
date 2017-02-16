(function() {
    'use strict';
    var routeConfig = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider','$httpProvider',
        function($stateProvider, $urlRouterProvider, localStorageServiceProvider,$httpProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'bowyer-ui/dashboard/partials/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: 'login'
                })
                .state('logout', {
                    url: '/logout',
                    controller: 'logoutCtrl',
                    controllerAs: 'logout'
                })
                .state('forgotPassword', {
                    url: '/forgotPassword',
                    templateUrl: 'bowyer-ui/dashboard/partials/forgotPassword/forgotPassword.html',
                    controller: 'forgotPasswordCtrl',
                    controllerAs: 'forgotPassword'
                })
                .state('resetForgotPassword', {
                    url: '/resetForgotPassword/:token',
                    templateUrl: 'bowyer-ui/dashboard/partials/resetForgotPassword/resetForgotPassword.html',
                    controller: 'resetForgotPasswordCtrl',
                    controllerAs: 'resetForgotPassword'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'bowyer-ui/dashboard/partials/register/register.html',
                    controller: 'registerCtrl',
                    controllerAs: 'register'
                })
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/dashboard.html',
                    controller: 'dashboardCtrl',
                    controllerAs: 'dashboard'
                })
                .state('dashboard.alerts', {
                    url: 'alerts',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/alerts/alerts.html'
                })
                .state('dashboard.users', {
                    url: 'users',
                    controller: 'usersCtrl',
                    controllerAs: 'users',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/users.html'
                })
                .state('dashboard.profile', {
                    url: 'profile',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/profile/profile.html',
                    controller: 'profileCtrl',
                    controllerAs: 'profile'
                })
                .state('dashboard.resetPassword', {
                    url: 'resetPassword',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/resetPassword/resetPassword.html',
                    controller: 'resetPasswordCtrl',
                    controllerAs: 'resetPassword'
                })
                .state('dashboard.api', {
                    url: 'api',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/api/api.html'
                })
                .state('dashboard.config', {
                    url: 'config',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/config.html',
                    controller: 'configCtrl',
                    controllerAs: 'config'
                })
                .state('dashboard.config.roles', {
                    url: '/roles',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/roles/roles.html',
                    controller: 'rolesCtrl',
                    controllerAs: 'roles'
                })
                .state('dashboard.healthcheck', {
                    url: 'healthcheck',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/healthcheck/healthcheck.html',
                    controller: 'healthCheckCtrl as vm'
                });
            $urlRouterProvider.otherwise('/login');
            localStorageServiceProvider.setPrefix('bowyer');
            $httpProvider.interceptors.push('tokenInjector');
        }];
        
    bowyerApp.config(routeConfig);
})();
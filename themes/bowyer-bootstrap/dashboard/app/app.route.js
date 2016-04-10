(function() {
    'use strict';
    bowyerApp.config(routeConfig);
    function routeConfig($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
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
                templateUrl: 'bowyer-ui/dashboard/partials/forgotPassword/forgotPassword.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'bowyer-ui/dashboard/partials/register/register.html',
                controller: 'registerCtrl',
                controllerAs: 'register'
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
                controller: 'usersCtrl as vm',
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
            .state('dashboard.analytics', {
                url: 'analytics',
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/analytics/analytics.html'
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
            .state('dashboard.config.navigation', {
                url: '/navigation',
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/navigation/navigation.html'
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
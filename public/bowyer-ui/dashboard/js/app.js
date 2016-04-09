var bowyerApp;
(function() {
    'use strict';
    bowyerApp = angular.module('bowyer',
        [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'LocalStorageModule'
        ]
    );
})();
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
(function() {
    'use strict';
    bowyerApp.run(runBlock);
    function runBlock($http, localStorageService) {
        $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
    }
})();

(function() {
  'use strict';
  angular.module('bowyer').controller('dashboardCtrl', ['$scope',function($scope){

  }]);
})();

(function() {
  'use strict';
  bowyerApp.controller('loginCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var login = this;
        login.validateLogin = function(){
        login.loginError = false;
        var loginCallConfig = {
            url: '/api/login',
            data: {
                username: login.username,
                password: login.password
            },
            method:constants.method.post
        };
        api.executeCall(loginCallConfig).then(function(res){
            if(res.data.api_token){
                localStorageService.set('api_token',res.data.api_token);
                api.addTokenToCalls();
                $state.go('dashboard');
            }else{
                login.loginError = res.data.message;
            }
            },function(err){
                console.log(err);
            });
        };
  }]);
})();
(function() {
  'use strict';
  bowyerApp.controller('logoutCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var logoutCallConfig = {
            url: '/api/logout'
        };
        api.executeCall(logoutCallConfig).then(function(res){
                $state.go('login');
            },api.logout(function(error){
                console.error(error);
            }
        ));    
  }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('registerCtrl', ['api', '$state', 'localStorageService', 'constants',
        function(api, $state, localStorageService, constants) {
            var register = this;
            register.validateRegister = function() {
                register.registerError = false;
                if (register.formData) {
                    var registerCallConfig = {
                        url: '/api/register',
                        data: {
                            username: register.formData.username,
                            email: register.formData.email,
                            password: register.formData.password
                        },
                        method: constants.method.post
                    };
                    api.executeCall(registerCallConfig).then(function(res) {
                        if (res.data.user_id) {
                            register.registerError = {
                                message: 'User has been created.',
                                type: 'success'
                            };
                            register.formData = {};
                        } else {
                            register.registerError = res.data;
                        }
                    }, function(err) {
                        console.log(err);
                    });
                } else {
                    register.registerError = {
                        message: 'Username, email and password are mandatory.',
                        type: 'danger'
                    };
                }
            };
        }]);
})();
(function() {
  'use strict';
  bowyerApp.factory('api', ['$http','constants','$state','localStorageService',
    function($http,constants,$state,localStorageService){
      return {
          executeCall: function(config){
              if(config.method===constants.method.post){
                  return $http.post(config.url,config.data);
              }else{
                  return $http.get(config.url);
              }
          },
          logout: function(callback){
              return function(error){
                if(error.status===401){
                    localStorageService.clearAll();
                    $state.go('login');
                }else{
                    if(callback){
                        callback(error);
                    }
                }
              };
          },
          addTokenToCalls: function(){
            $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
          }
      };
  }]);
})();

(function() {
  'use strict';
  bowyerApp.factory('commonFactory', [function(){
      return {
          
      };
  }]);
})();

(function() {
  'use strict';
  bowyerApp.factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              get: 'GET'
          }
      };
  }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('healthCheckCtrl', ['api', 'localStorageService','healthCheckFactory',
        function(api, localStorageService,healthCheckFactory) {
            var vm = this;
            vm.api = healthCheckFactory.initial;
            vm.db = healthCheckFactory.initial;
            vm.ls = healthCheckFactory.initial;
            var apiCheckConfig = {
                url: '/api/healthCheck/apiCheck'
            };
            var dbCheckConfig = {
                url: '/api/healthCheck/dbCheck'
            };
            api.executeCall(apiCheckConfig).then(function(response) {
                vm.api = healthCheckFactory.success;
            }, api.logout(function(error) {
                vm.api = healthCheckFactory.failed;
            }));
            api.executeCall(dbCheckConfig).then(function(response) {
                vm.db = healthCheckFactory.success;
                if(response.data.api_token === localStorageService.get('api_token')){ 
                    vm.ls = healthCheckFactory.success;
                }else{
                    vm.ls = healthCheckFactory.failed;
                }
            }, api.logout(function(error) {
                vm.db = healthCheckFactory.failed;
                vm.ls = healthCheckFactory.failed;
            }));
        }]);
})();

(function() {
    'use strict';
    bowyerApp.factory('healthCheckFactory', function() {
        return {
            initial: {
                checkValue: 0,
                checkMessage: 'checking ...',
                type: 'warning'
            },
            success: {
                checkValue: 100,
                checkMessage: 'Healthy',
                checkPass: true,
                type: 'success'
            },
            failed: {
                checkValue: 100,
                checkMessage: 'Failed',
                type: 'danger'
            }
        };
    });
})();

(function() {
  'use strict';
  bowyerApp.controller('usersCtrl', ['api',function(api){
    var vm = this;
    var usersCallConfig = {
        url: '/api/admin/users'
    };
    api.executeCall(usersCallConfig).then(function(response){
      vm.users = response.data;
    },api.logout(function(error){
        console.log(error);
    }));
  }]);
})();

(function() {
  'use strict';
  bowyerApp.directive('bowyerLogo', function(){
      return {
          restrict: 'EA',
          template: '<span>bow</span><span style="color:#F39C12">yer</span>'
      };
  });
})();
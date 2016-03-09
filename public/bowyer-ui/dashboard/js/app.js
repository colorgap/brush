(function() {
  'use strict';
  angular.module('bowyer', 
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
      });
    $urlRouterProvider.otherwise('/login');
    localStorageServiceProvider.setPrefix('bowyer');
  }

})();

(function() {
  'use strict';

  angular
    .module('bowyer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http,localStorageService) {
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
  angular.module('bowyer').controller('loginCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var vm = this;
        vm.validateLogin = function(){
        vm.loginError = false;
        var loginCallConfig = {
            url: '/api/login',
            data: {
                username:vm.username,
                password:vm.password
            },
            method:constants.method.post
        };
        api.executeCall(loginCallConfig).then(function(res){
            if(res.data.api_token){
                localStorageService.set('api_token',res.data.api_token);
                api.addTokenToCalls();
                $state.go('dashboard');
            }else{
                vm.loginError = res.data.message;
            }
            },function(err){
                console.log(err);
            });
        };
  }]);
})();

(function() {
  'use strict';
  angular.module('bowyer').controller('logoutCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var logoutCallConfig = {
            url: '/api/logout'
        };
        api.executeCall(logoutCallConfig).then(function(res){
                $state.go('login');
            },api.logout(function(error){
                console.error(error);
        }));    
  }]);
})();

(function() {
  'use strict';
  angular.module('bowyer').factory('api', ['$http','constants','$state','localStorageService',
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
  angular.module('bowyer').factory('commonFactory', [function(){
      return {
          
      };
  }]);
})();

(function() {
  'use strict';
  angular.module('bowyer').factory('constants', [function(){
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
  angular.module('bowyer').controller('usersCtrl', ['api',function(api){
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

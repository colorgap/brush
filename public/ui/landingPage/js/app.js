var app;
(function() {
    'use strict';
    app = angular
        .module('brush', [
            'ngAnimate', 
            'ngCookies', 
            'ngSanitize', 
            'ui.router',
            'LocalStorageModule']);

})();

(function() {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider','$httpProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider,$httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('brush');
        $httpProvider.interceptors.push('tokenInjector');
    }]);
})();
(function() {
    'use strict';
    app.run(['$log',function ($log) {
        $log.debug('runBlock end');
    }]);
})();
(function() {
  'use strict';
  app.controller('homeCtrl',['$scope','$window','localStorageService', 'url', 'api',
  function($scope,$window,localStorageService, url, api){
      var home = this;
      angular.element('.button-collapse').sideNav();
      var profileCallConfig = {
          url: url.user.me
      };
      home.user = true;
      home.userLookupComplete = false;
      api.executeCall(profileCallConfig,function(response) {
          home.user = response.data;
          home.userLookupComplete = true;
      }, function(){
          home.user = false;
          home.userLookupComplete = true;
      });
  }]);
})();
(function() {
    'use strict';
    app.directive('navLume', function() {
        return function(scope, element, attrs) {
            angular.element(window).scroll(function() {
                if (angular.element('.navbar').offset().top > 50) {
                    angular.element('.navbar-fixed-top').addClass('top-nav-collapse navbar-default');
                } else {
                    angular.element('.navbar-fixed-top').removeClass('top-nav-collapse navbar-default');
                }
            });
        };
    });
})();

(function() {
    'use strict';
    app.factory('api', ['$http', 'constants', '$state', 'localStorageService',
        function($http, constants, $state, localStorageService) {
            var failureHandler = function(err,failureCallback){
                failureCallback(err);
            };
            return {
                executeCall: function(config, successCallback, failureCallback) {
                    if (config.method === constants.method.post) {
                        return $http.post(config.url, config.data).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else if (config.method === constants.method.delete) {
                        return $http.delete(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else {
                        return $http.get(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    }
                }
            };
        }]);
})();

(function() {
  'use strict';
  app.factory('constants', [function(){
      return {
          app: 'brush',
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          }
      };
  }]);
})();

(function() {
    'use strict';
    app.factory('tokenInjector', ['localStorageService',function(localStorageService) {
        var tokenInjector = {
            request: function(config) {
                if(config.url.indexOf('github')<0  && localStorageService.get('apitoken')){
                    config.headers['apitoken'] = localStorageService.get('apitoken');
                }
                return config;
            }
        };
        return tokenInjector;
    }]);
})();

(function() {
    'use strict';
    app.factory('url', [function() {
        return {
            user:{
                me: '/api/user/me'
            }
        };
    }]);
})();
(function() {
    'use strict';
    app.directive('logo', function() {
        return {
            restrict: 'EA',
            template: '<span>bru</span><span class="amber-text lighter-1">sh</span>'
        };
    });
})();
var app;
(function() {
    'use strict';
    app = angular
        .module('brush', [
            'ngAnimate', 
            'ngCookies', 
            'ngSanitize', 
            'ui.router', 
            'ui.bootstrap',
            'LocalStorageModule']);

})();

(function() {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('brush');
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
  app.controller('homeCtrl',['$scope','$window','localStorageService', 
  function($scope,$window,localStorageService){
      var home = this;
      home.scrollToSection = function(section){
        angular.element('html, body').stop().animate({
            scrollTop: angular.element('#'+section).offset().top
        }, 1000);
      };
      home.user = localStorageService.get('user');
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
    app.directive('logo', function() {
        return {
            restrict: 'EA',
            template: '<span>bru</span><span style="color:#F39C12">sh</span>'
        };
    });
})();
var bowyerApp;
(function() {
    'use strict';
    bowyerApp = angular
        .module('bowyer', [
            'ngAnimate', 
            'ngCookies', 
            'ngSanitize', 
            'ui.router', 
            'ui.bootstrap',
            'LocalStorageModule']);

})();

(function() {
    'use strict';
    bowyerApp.config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider',
    function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'bowyer-ui/landingPage/partials/home/index.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            });
        $urlRouterProvider.otherwise('/');
        localStorageServiceProvider.setPrefix('bowyer');
    }]);
})();
(function() {
    'use strict';
    bowyerApp.run(['$log',function ($log) {
        $log.debug('runBlock end');
    }]);
})();
(function() {
  'use strict';
  bowyerApp.controller('homeCtrl',['$scope','$window','localStorageService', 
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
    bowyerApp.directive('navLume', function() {
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
    bowyerApp.directive('bowyerLogo', function() {
        return {
            restrict: 'EA',
            template: '<span>bow</span><span style="color:#F39C12">yer</span>'
        };
    });
})();
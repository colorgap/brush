(function() {
  'use strict';

  angular
    .module('lume', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ui.bootstrap']);

})();

(function() {
  'use strict';

  angular
    .module('lume')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log('here');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'lume-ui/landingPage/partials/home/index.html',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
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
  angular
    .module('lume').controller('homeCtrl',['$scope','$window', function($scope,$window){
      $scope.scrollToSection = function(section){
        angular.element('html, body').stop().animate({
            scrollTop: angular.element('#'+section).offset().top
        }, 1000);
      };
  }]);
})();

(function() {
  'use strict';
  angular
    .module('lume').directive('navLume',function () {
    return function(scope, element, attrs) {
      $(window).scroll(function() {
          if (angular.element('.navbar').offset().top > 50) {
              angular.element('.navbar-fixed-top').addClass('top-nav-collapse navbar-default');
          } else {
              angular.element('.navbar-fixed-top').removeClass('top-nav-collapse navbar-default');
          }
      });
      };
    });
})();

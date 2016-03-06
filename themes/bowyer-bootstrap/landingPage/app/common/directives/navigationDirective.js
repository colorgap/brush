(function() {
  'use strict';
  angular
    .module('bowyer').directive('navLume',function () {
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

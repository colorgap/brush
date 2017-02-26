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

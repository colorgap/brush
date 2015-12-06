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

(function() {
  'use strict';
  angular
    .module('bowyer').controller('homeCtrl',['$scope','$window', function($scope,$window){
      $scope.scrollToSection = function(section){
        angular.element('html, body').stop().animate({
            scrollTop: angular.element('#'+section).offset().top
        }, 1000);
        
      };
  }]);
})();

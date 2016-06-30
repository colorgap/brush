(function() {
  'use strict';
  bowyerApp.controller('homeCtrl',['$scope','$window','localStorageService', 
  function($scope,$window,localStorageService){
      var home = this;
      angular.element('.button-collapse').sideNav();
      home.user = localStorageService.get('user');
  }]);
})();
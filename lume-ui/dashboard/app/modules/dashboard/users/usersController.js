(function() {
  'use strict';
  angular.module('lume').controller('usersCtrl', ['$scope','usersFactory',function($scope,usersFactory){
    usersFactory.getAllUsers().then(function(response){
      $scope.users = response.data;
    });
  }]);
})();

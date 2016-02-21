(function() {
  'use strict';
  angular.module('lume').controller('usersCtrl', ['$scope','api',function($scope,api){
    var usersCallConfig = {
        url: '/api/admin/users'
    };
    api.executeCall(usersCallConfig).then(function(response){
      $scope.users = response.data;
    },api.logout(function(error){
        console.log(error);
    }));
  }]);
})();

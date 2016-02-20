(function() {
  'use strict';
  angular.module('lume').factory('usersFactory', ['$http',function($http){
    return {
      getAllUsers: function(){
          return $http.get('/api/admin/users');
      }
    };
  }]);
})();

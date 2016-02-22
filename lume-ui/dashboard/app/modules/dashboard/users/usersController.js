(function() {
  'use strict';
  angular.module('lume').controller('usersCtrl', ['api',function(api){
    var vm = this;
    var usersCallConfig = {
        url: '/api/admin/users'
    };
    api.executeCall(usersCallConfig).then(function(response){
      vm.users = response.data;
    },api.logout(function(error){
        console.log(error);
    }));
  }]);
})();

(function() {
  'use strict';
  bowyerApp.controller('logoutCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var logoutCallConfig = {
            url: '/api/logout'
        };
        api.executeCall(logoutCallConfig).then(function(res){
                $state.go('login');
            },api.logout(function(error){
                console.error(error);
            }
        ));    
  }]);
})();

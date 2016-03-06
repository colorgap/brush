(function() {
  'use strict';
  angular.module('bowyer').controller('loginCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var vm = this;
        vm.validateLogin = function(){
        vm.loginError = false;
        var loginCallConfig = {
            url: '/api/login',
            data: {
                username:vm.username,
                password:vm.password
            },
            method:constants.method.post
        };
        api.executeCall(loginCallConfig).then(function(res){
            if(res.data.api_token){
                localStorageService.set('api_token',res.data.api_token);
                api.addTokenToCalls();
                $state.go('dashboard');
            }else{
                vm.loginError = res.data.message;
            }
            },function(err){
                console.log(err);
            });
        };
  }]);
})();

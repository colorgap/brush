(function() {
  'use strict';
  bowyerApp.controller('loginCtrl', ['api','$state','localStorageService','constants',
        function(api,$state,localStorageService,constants){
        var login = this;
        login.validateLogin = function(){
        login.loginError = false;
        var loginCallConfig = {
            url: '/api/login',
            data: {
                username: login.username,
                password: login.password
            },
            method:constants.method.post
        };
        api.executeCall(loginCallConfig).then(function(res){
            if(res.data.api_token){
                localStorageService.set('api_token',res.data.api_token);
                api.addTokenToCalls();
                $state.go('dashboard');
            }else{
                login.loginError = res.data.message;
            }
            },function(err){
                console.log(err);
            });
        };
  }]);
})();
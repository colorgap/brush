/**
 * Author: Color][gap
 * Description: Login controller
 */
(function() {
    'use strict';
    app.controller('loginCtrl', ['api', '$state','$stateParams', 'localStorageService', 'loginFactory',
        function(api, $state,$stateParams, localStorageService, loginFactory) {
            var login = this;
            login.loginError = loginFactory.logoutMessage;
            login.validateLogin = function() {
                login.error = {};
                login.loginError = false;
                api.executeCall(loginFactory.login(login),function(res) {
                    if (res.data.api_token) {
                        localStorageService.set('apitoken', res.data.api_token);
                        $state.go('dashboard');
                    } else {
                        login.loginError = res.data.message;
                    }
                }, function(err){
                    login.error = err.data;
                });
            };
        }]);
})();
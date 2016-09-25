/**
 * Author: Color][gap
 * Description: Login controller
 */
(function() {
    'use strict';
    app.controller('loginCtrl', ['api', '$state','$stateParams', 'localStorageService', 'loginFactory','$scope','$timeout', '$mdSidenav', '$log','$mdToast',
        function(api, $state,$stateParams, localStorageService, loginFactory,$scope,$timeout, $mdSidenav, $log,$mdToast) {
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
                        var toast = $mdToast.simple()
                            .textContent(login.loginError)
                            .highlightClass('md-accent bold')
                            .position('top right')
                            .hideDelay(3000);
                            $mdToast.show(toast).then(function(response) {});
                    }
                }, function(err){
                    login.error = err.data;
                });
            };
        }]);
})();
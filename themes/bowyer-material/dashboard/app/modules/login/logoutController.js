/**
 * Author: Color][gap
 * Description: Logout controller
 */
(function() {
    'use strict';
    bowyerApp.controller('logoutCtrl', [ '$state', 'loginFactory','localStorageService','constants',
        function($state, loginFactory,localStorageService, constants) {
            /*api.executeCall(loginFactory.logout(), function(res) {
                loginFactory.logoutMessage = constants.logoutMessages.regularLogout;
                localStorageService.clearAll();
                $state.go('login');
            });*/
        }]);
})();
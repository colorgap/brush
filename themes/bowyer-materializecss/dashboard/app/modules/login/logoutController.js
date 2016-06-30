/**
 * Author: Color][gap
 * Description: Logout controller
 */
(function() {
    'use strict';
    bowyerApp.controller('logoutCtrl', ['api', '$state', 'loginFactory','localStorageService','constants',
        function(api, $state, loginFactory,localStorageService, constants) {
            api.executeCall(loginFactory.logout(), function(res) {
                loginFactory.logoutMessage = constants.logoutMessages.regularLogout;
                localStorageService.clearAll();
                $state.go('login');
            });
        }]);
})();
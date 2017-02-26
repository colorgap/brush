/**
 * Author: Color][gap
 * Description: Logout controller
 */
(function() {
    'use strict';
    app.controller('logoutCtrl', [ '$state', 'loginFactory','localStorageService','constants','api',
        function($state, loginFactory,localStorageService, constants, api) {
            api.executeCall(loginFactory.logout(), function(res) {
                loginFactory.logoutMessage = constants.logoutMessages.regularLogout;
                localStorageService.clearAll();
                $state.go('login');
            });
        }]);
})();
/**
 * Author: Color][gap
 * Description: Forgot Password controller
 */
(function () {
    'use strict';
    bowyerApp.controller('resetForgotPasswordCtrl', ['$state', 'api', 'url', 'constants',
        function ($state, api, url, constants) {
            var resetForgotPassword = this;
            resetForgotPassword.validateLinkAndUpdatePassword = function () {
                if (resetForgotPassword.password === resetForgotPassword.confirmpassword) {
                    var resetForgotPasswordCallConfig = {
                        url: url.resetForgotPassword,
                        data: {
                            token: $state.params.token,
                            password: resetForgotPassword.password
                        },
                        method: constants.method.post
                    };
                    api.executeCall(resetForgotPasswordCallConfig, function (response) {
                        resetForgotPassword.resetForgotPasswordError = response.data;
                        resetForgotPassword.confirmpassword = '';
                        resetForgotPassword.password === '';
                    }, function (err) {
                        resetForgotPassword.error = err.data;
                    });
                }else{
                    resetForgotPassword.error = {confirmpassword : ["Password doesn't match Confirm Password."]};
                }
            };
        }]);
})();
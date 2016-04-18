/**
 * Author: Color][gap
 * Description: Forgot Password controller
 */
(function() {
    'use strict';
    bowyerApp.controller('forgotPasswordCtrl', ['api','url','constants',
        function(api, url, constants) {
            var forgotPassword = this;
            forgotPassword.validateAndSendMeLink = function() {
                var forgotPasswordCallConfig = {
                    url: url.forgotPassword,
                    data: {
                        username: forgotPassword.username
                    },
                    method: constants.method.post
                };
                api.executeCall(forgotPasswordCallConfig, function(response){
                    forgotPassword.forgotPasswordError = response.data;
                    forgotPassword.username = '';
                }, function(err){
                    forgotPassword.error = err.data;
                })
            };
        }]);
})();
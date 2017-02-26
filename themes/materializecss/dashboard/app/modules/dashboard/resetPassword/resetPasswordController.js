(function() {
    'use strict';
    app.controller('resetPasswordCtrl', ['api', 'constants', 'url',function(api, constants, url) {
        var resetPassword = this;
        resetPassword.validateAndSave = function() {
            resetPassword.error = {};
            if (resetPassword.formData) {
                if (resetPassword.formData.newPassword && resetPassword.formData.newPassword !=='' && resetPassword.formData.newPassword === resetPassword.formData.confirmPassword) {
                    var resetPasswordCallConfig = {
                        url: url.user.resetPassword,
                        method: constants.method.post,
                        data: resetPassword.formData
                    };
                    api.executeCall(resetPasswordCallConfig,function(response) {
                        resetPassword.resetPasswordError = response.data;
                        if (resetPassword.resetPasswordError.type === 'success') {
                            resetPassword.formData = {};
                        } else {
                            resetPassword.error.password = true;
                        }
                    },function(err){
                        resetPassword.error = err.data;
                    });
                } else {
                    resetPassword.error = {
                        newPassword: true,
                        confirmPassword: true
                    };
                }
            } else {
                resetPassword.error = {
                    password: true,
                    newPassword: true,
                    confirmPassword: true
                };
            }
        };
    }]);
})();
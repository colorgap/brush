(function() {
    'use strict';
    bowyerApp.controller('resetPasswordCtrl', ['api', 'constants', function(api, constants) {
        var resetPassword = this;
        resetPassword.validateAndSave = function() {
            resetPassword.error = {};
            if (resetPassword.formData) {
                if (resetPassword.formData.newPassword && resetPassword.formData.newPassword !=='' && resetPassword.formData.newPassword === resetPassword.formData.confirmPassword) {
                    var resetPasswordCallConfig = {
                        url: '/api/user/resetPassword',
                        method: constants.method.post,
                        data: resetPassword.formData
                    };
                    api.executeCall(resetPasswordCallConfig).then(function(response) {
                        resetPassword.resetPasswordError = response.data;
                        if (resetPassword.resetPasswordError.type === 'success') {
                            resetPassword.formData = {};
                        } else {
                            resetPassword.error.password = true;
                        }
                    }, api.logout(function(error) {
                        console.log(error);
                    }));
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
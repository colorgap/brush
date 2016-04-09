(function() {
    'use strict';
    bowyerApp.controller('registerCtrl', ['api', '$state', 'localStorageService', 'constants',
        function(api, $state, localStorageService, constants) {
            var register = this;
            register.validateRegister = function() {
                register.registerError = false;
                if (register.formData) {
                    var registerCallConfig = {
                        url: '/api/register',
                        data: {
                            username: register.formData.username,
                            email: register.formData.email,
                            password: register.formData.password
                        },
                        method: constants.method.post
                    };
                    api.executeCall(registerCallConfig).then(function(res) {
                        if (res.data.user_id) {
                            register.registerError = {
                                message: 'User has been created.',
                                type: 'success'
                            };
                            register.formData = {};
                        } else {
                            register.registerError = res.data;
                        }
                    }, function(err) {
                        console.log(err);
                    });
                } else {
                    register.registerError = {
                        message: 'Username, email and password are mandatory.',
                        type: 'danger'
                    };
                }
            };
        }]);
})();
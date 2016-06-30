(function() {
    'use strict';
    bowyerApp.controller('registerCtrl', ['api', '$state', 'localStorageService', 'constants', 'url',
        function(api, $state, localStorageService, constants, url) {
            var register = this;
            register.validateRegister = function(isValid) {
                register.registerError = false;
                if (register.formData) {
                    var registerCallConfig = {
                        url: url.register,
                        data: {
                            username: register.formData.username,
                            email: register.formData.email,
                            password: register.formData.password,
                            name: ''
                        },
                        method: constants.method.post
                    };
                    api.executeCall(registerCallConfig, 
                    function(res) {
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
                        register.error = err.data;
                    });
                }else {
                    register.error = {
                        username: true,
                        email: true,
                        password: true
                    };
                }
            };
        }]);
})();
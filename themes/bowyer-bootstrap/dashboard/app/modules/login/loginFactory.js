(function() {
    'use strict';
    bowyerApp.factory('loginFactory', ['constants','url',function(constants,url) {
        return {
            login: function(login) {
                return {
                    url: url.login,
                    data: {
                        username: login.username,
                        password: login.password
                    },
                    method: constants.method.post
                };
            },
            logout: function() {
                return {
                    url: url.logout
                };
            }
        };
    }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('profileCtrl', ['api', 'constants','commonFactory', function(api, constants,commonFactory) {
        var profile = this;
        var profileCallConfig = {
            url: '/api/user/profile'
        };
        commonFactory.getRoles().then(function(response) {
            profile.roles =  response.data;
        });
        api.executeCall(profileCallConfig).then(function(response) {
            profile.user = response.data;
        }, api.logout(function(error) {
            console.log(error);
        }));

        profile.validateAndSave = function() {
            profileCallConfig.method = constants.method.post;
            profileCallConfig.data = profile.user;
            api.executeCall(profileCallConfig).then(function(response) {
                profile.profileError = response.data;
            }, api.logout(function(error) {
                console.log(error);
            }));
        };
    }]);
})();
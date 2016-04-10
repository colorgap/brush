(function() {
    'use strict';
    bowyerApp.controller('profileCtrl', ['api', 'constants', function(api, constants) {
        var profile = this;
        var profileCallConfig = {
            url: '/api/user/profile'
        };
        profile.roles = [{
            role_id: 1,
            role_desc: 'Admin'
        }, {
                role_id: 2,
                role_desc: 'Regular User'
            }];
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
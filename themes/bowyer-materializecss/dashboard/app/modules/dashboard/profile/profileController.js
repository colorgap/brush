(function() {
    'use strict';
    bowyerApp.controller('profileCtrl', ['api', 'constants','commonFactory','url', 
    function(api, constants,commonFactory, url) {
        var profile = this;
        var profileCallConfig = {
            url: url.user.me
        };
        api.executeCall(profileCallConfig,function(response) {
            profile.user = response.data;
        });

        profile.validateAndSave = function() {
            profileCallConfig.method = constants.method.post;
            profileCallConfig.data = profile.user;
            api.executeCall(profileCallConfig,function(response) {
                profile.profileError = response.data;
            },function(err){
                profile.error = err.data;
            });
        };
    }]);
})();
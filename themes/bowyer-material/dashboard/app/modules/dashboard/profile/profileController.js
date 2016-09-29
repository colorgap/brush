(function() {
    'use strict';
    app.controller('profileCtrl', ['api', 'constants','commonFactory','url', 'localStorageService','$mdToast',
    function(api, constants,commonFactory, url, localStorageService,$mdToast) {
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
                if(response.data.user_id){
                    localStorageService.set('user', response.data);
                    profile.profileError = {type:'success',message:'Profile updated successfully.'};
                    var toast = $mdToast.simple()
                            .textContent(profile.profileError.message)
                            .highlightClass('md-accent bold')
                            .position('bottom right')
                            .hideDelay(3000);
                    $mdToast.show(toast).then(function(response) {});
                }
            },function(err){
                profile.error = err.data;
            });
        };
    }]);
})();
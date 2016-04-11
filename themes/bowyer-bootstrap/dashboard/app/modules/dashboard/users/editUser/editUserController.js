(function() {
    'use strict';
    bowyerApp.controller('editUserCtrl', ['$uibModalInstance', 'api', 'constants', 'commonFactory', 'config',
        function($uibModalInstance, api, constants, commonFactory, config) {
            var editUser = this;
            commonFactory.getRoles().then(function(response) {
                editUser.roles = response.data;
            });
            editUser.config = config;
            editUser.user = config.user;
            var profileCallConfig = {
                url: '/api/user/profile'
            };
            editUser.validateAndSave = function() {
                if(editUser.config.type==='add'){
                    profileCallConfig.url = '/api/register';
                }
                profileCallConfig.method = constants.method.post;
                profileCallConfig.data = editUser.user;

                api.executeCall(profileCallConfig).then(function(response) {
                    editUser.profileError = response.data;
                    $uibModalInstance.close(editUser);
                }, api.logout(function(error) {
                    console.log(error);
                }));
            };

            editUser.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();
(function() {
    'use strict';
    app.controller('addEditUserCtrl', ['$uibModalInstance', 'api', 'constants', 'commonFactory', 'config', 'url',
        function($uibModalInstance, api, constants, commonFactory, config, url) {
            var addEditUser = this;
            commonFactory.getRoles(function(response) {
                addEditUser.roles = response.data;
            });
            addEditUser.config = config;
            addEditUser.user = config.user;
            var profileCallConfig = {
                url: url.admin.updateUser
            };
            addEditUser.validateAndSave = function() {
                if(addEditUser.config.type==='add'){
                    profileCallConfig.url = url.admin.addUser;
                }
                profileCallConfig.method = constants.method.post;
                profileCallConfig.data = addEditUser.user;

                api.executeCall(profileCallConfig,function(response) {
                    if (response.data.user_id) {
                        addEditUser.user = response.data;
                        $uibModalInstance.close(addEditUser);
                    }else{
                        addEditUser.addEditUserError = response.data;
                    }
                },function(err){
                    addEditUser.error = err.data;
                });
            };
            addEditUser.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();
(function() {
    'use strict';
    app.controller('addEditUserCtrl', ['api', 'constants', 'commonFactory', 'url','$mdDialog','user',
        function( api, constants, commonFactory, url, $mdDialog,user) {
            var config = function(user) {
                if (user) {
                    return {
                        title: 'Edit User',
                        user: user,
                        type: 'edit'
                    };
                } else {
                    return {
                        title: 'Add User',
                        type: 'add'
                    };
                }

            };
            var conf = config(user);
            var addEditUser = this;
            commonFactory.getRoles(function(response) {
                addEditUser.roles = response.data;
            });
            console.log(conf);
            addEditUser.config = conf;
            addEditUser.user = conf.user;
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
                        $mdDialog.cancel(addEditUser);
                    }else{
                        addEditUser.addEditUserError = response.data;
                    }
                },function(err){
                    addEditUser.error = err.data;
                });
            };
            addEditUser.cancel = function() {
                $mdDialog.cancel();
            };
        }]);
})();
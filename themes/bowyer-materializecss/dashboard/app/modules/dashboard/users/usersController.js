(function() {
    'use strict';
    bowyerApp.controller('usersCtrl', ['api', 'constants', 'url',
    function(api, constants, url) {
        var users = this;
        var usersCallConfig = {
            url: url.admin.users
        };
        api.executeCall(usersCallConfig,function(response) {
            users.users = response.data;
        });

        /** Delete a user */
        users.deleteUser = function(user) {
            user.deleteInitiated = true;
            var deleteUserCallConfig = {
                url: url.admin.user + user.user_id,
                method: constants.method.delete
            };
            api.executeCall(deleteUserCallConfig,function(response) {
                if (response.data.type === 'success') {
                    user.deleted = 'Y';
                }
            });
        };
        users.editUser = function(user) {
            var modalInstance = $uibModal.open({
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/addEditUser/addEditUser.html',
                controller: 'addEditUserCtrl',
                controllerAs: 'addEditUser',
                resolve: {
                    config: function() {
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

                    }
                }
            });
            modalInstance.result.then(function(updateUser) {
                if(updateUser.config.type==='add'){
                    users.users.push(updateUser.user);
                }
            }, function() {

            });
        };
        /*users.openModal = function(){
           var modalInstance = materializeModal.open({
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/addEditUser/addEditUser.html',
                controller: 'addEditUserCtrl',
                controllerAs: 'addEditUser',
                resolve: {
                    config: function() {
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

                    }
                }
            });*
            /*modalInstance.result.then(function(updateUser) {
                if(updateUser.config.type==='add'){
                    users.users.push(updateUser.user);
                }
            }, function() {

            });*/
        //};
    }]);
})();

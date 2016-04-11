(function() {
    'use strict';
    bowyerApp.controller('usersCtrl', ['api', 'constants', '$uibModal', function(api, constants, $uibModal) {
        var users = this;
        var usersCallConfig = {
            url: '/api/admin/users'
        };
        api.executeCall(usersCallConfig).then(function(response) {
            users.users = response.data;
        }, api.logout(function(error) {
            console.log(error);
        }));

        /** Delete a user */
        users.deleteUser = function(user) {
            user.deleteInitiated = true;
            var deleteUserCallConfig = {
                url: '/api/admin/user/' + user.user_id,
                method: constants.method.delete
            };
            api.executeCall(deleteUserCallConfig).then(function(response) {
                if (response.data.type === 'success') {
                    user.deleted = 'Y';
                }
            }, api.logout(function(error) {
                console.log(error);
            }));
        };
        /** Edit User */
        users.editUser = function(user) {
            var modalInstance = $uibModal.open({
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/editUser/editUser.html',
                controller: 'editUserCtrl',
                controllerAs: 'editUser',
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
    }]);
})();

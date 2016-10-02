(function() {
    'use strict';
    app.controller('usersCtrl', ['api', 'constants', 'url', 'commonFactory',
    function(api, constants, url, commonFactory) {
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
                commonFactory.showMessage(response.data.message);
            });
        };
        /** Edit User */
        users.editUser = function(user) {
            /*var modalInstance = $uibModal.open({
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

            });*/
        };
    }]);
})();

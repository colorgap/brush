(function () {
    'use strict';
    app.controller('usersCtrl', ['api', 'constants', 'url', 'commonFactory', '$mdDialog',
        function (api, constants, url, commonFactory, $mdDialog) {
            var users = this;
            var usersCallConfig = {
                url: url.admin.users
            };
            api.executeCall(usersCallConfig, function (response) {
                users.users = response.data;
            });

            /** Delete a user */
            users.deleteUser = function (user) {
                user.deleteInitiated = true;
                var deleteUserCallConfig = {
                    url: url.admin.user + user.user_id,
                    method: constants.method.delete
                };
                api.executeCall(deleteUserCallConfig, function (response) {
                    if (response.data.type === 'success') {
                        user.deleted = 'Y';
                    }
                    commonFactory.showMessage(response.data.message);
                });
            };
            /** Edit User */
            users.editUser = function (user) {
                $mdDialog.show({
                    controller: 'addEditUserCtrl',
                    controllerAs: 'addEditUser',
                    templateUrl: 'ui/dashboard/partials/dashboard/users/addEditUser/addEditUser.html',
                    clickOutsideToClose: true,
                    locals: {
                        user: user
                    }
                })
                .then(function (answer) {
                    console.log(answer);
                    if (updateUser.config.type === 'add') {
                        users.users.push(updateUser.user);
                    }
                }, function () {
                });
            };
        }]);
})();

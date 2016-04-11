(function() {
    'use strict';
    bowyerApp.controller('usersCtrl', ['api','constants', function(api,constants) {
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
                url: '/api/admin/user/'+user.user_id,
                method: constants.method.delete
            };
            api.executeCall(deleteUserCallConfig).then(function(response) {
                if(response.data.type === 'success'){
                    user.deleted = 'Y';
                }
            }, api.logout(function(error) {
                console.log(error);
            }));
        };
    }]);
})();

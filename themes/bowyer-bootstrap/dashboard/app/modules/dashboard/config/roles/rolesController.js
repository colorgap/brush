(function() {
    'use strict';
    bowyerApp.controller('rolesCtrl', ['api', function(api) {
        var roles = this;
        var rolesConfig = {
            url: '/api/admin/roles'
        };
        api.executeCall(rolesConfig).then(function(response) {
            roles.roles = response.data;
        }, api.logout(function(error) {
            
        }));
    }]);
})();
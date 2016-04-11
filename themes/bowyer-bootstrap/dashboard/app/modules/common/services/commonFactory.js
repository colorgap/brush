(function() {
    'use strict';
    bowyerApp.factory('commonFactory', ['api', function(api) {
        return {
            getRoles: function() {
                var rolesConfig = {
                    url: '/api/admin/roles'
                };
                return api.executeCall(rolesConfig);
            }
        };
    }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('rolesCtrl', ['api', 'commonFactory', function(api, commonFactory) {
        var roles = this;
        commonFactory.getRoles().then(function(response) {
            roles.roles =  response.data;
        });
    }]);
})();
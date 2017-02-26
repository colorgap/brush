(function() {
    'use strict';
    app.factory('commonFactory', ['api', 'localStorageService','url',
    function(api,localStorageService, url) {
        var getReferenceData = function(config,success){
            api.executeCall(config,success);
        };
        return {
            getRoles: function(success) {
                getReferenceData({url: url.reference.roles},success);
            },
            getAdminRoles: function(success) {
                getReferenceData({url: url.admin.roles},success);
            },
            getUser: function(){
                return localStorageService.get('user');
            }
        };
    }]);
})();

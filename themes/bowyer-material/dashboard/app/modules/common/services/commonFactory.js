(function() {
    'use strict';
    app.factory('commonFactory', ['api', 'localStorageService','url','$mdToast',
    function(api,localStorageService, url,$mdToast) {
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
            },
            showMessage: function(message){
                var toast = $mdToast.simple()
                            .textContent(message)
                            .highlightClass('md-accent bold')
                            .position('top right')
                            .hideDelay(3000);
                $mdToast.show(toast).then(function(response) {});
            }
        };
    }]);
})();

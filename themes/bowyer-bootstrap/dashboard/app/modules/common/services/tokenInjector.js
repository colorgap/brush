(function() {
    'use strict';
    bowyerApp.factory('tokenInjector', ['localStorageService',function(localStorageService) {
        var tokenInjector = {
            request: function(config) {
                if(localStorageService.get('user')){
                    config.headers['apitoken'] = localStorageService.get('user').api_token;
                }
                return config;
            }
        };
        return tokenInjector;
    }]);
})();

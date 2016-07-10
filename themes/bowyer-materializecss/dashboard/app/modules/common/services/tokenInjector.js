(function() {
    'use strict';
    bowyerApp.factory('tokenInjector', ['localStorageService',function(localStorageService) {
        var tokenInjector = {
            request: function(config) {
                if(config.url.indexOf('github')<0  && localStorageService.get('apitoken')){
                    config.headers['apitoken'] = localStorageService.get('apitoken');
                }
                return config;
            }
        };
        return tokenInjector;
    }]);
})();

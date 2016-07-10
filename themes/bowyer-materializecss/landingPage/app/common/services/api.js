(function() {
    'use strict';
    bowyerApp.factory('api', ['$http', 'constants', '$state', 'localStorageService',
        function($http, constants, $state, localStorageService) {
            var failureHandler = function(err,failureCallback){
                failureCallback(err);
            };
            return {
                executeCall: function(config, successCallback, failureCallback) {
                    if (config.method === constants.method.post) {
                        return $http.post(config.url, config.data).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else if (config.method === constants.method.delete) {
                        return $http.delete(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else {
                        return $http.get(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    }
                }
            };
        }]);
})();

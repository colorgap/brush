(function() {
    'use strict';
    app.factory('api', ['$http', 'constants', '$state', 'localStorageService','loginFactory',
        function($http, constants, $state, localStorageService,loginFactory) {
            var gotoLogin = function(err){
                localStorageService.clearAll();
                loginFactory.logoutMessage = constants.logoutMessages.loggedoutDueError[err.status];
                $state.go('login');
            };
            var failureHandler = function(err,failureCallback){
                if (err.status === 401) {
                    gotoLogin(err);
                } else if(failureCallback){
                    failureCallback(err);
                } else{
                    gotoLogin(err);
                }
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

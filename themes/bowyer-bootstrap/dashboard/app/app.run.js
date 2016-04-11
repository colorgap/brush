(function() {
    'use strict';
    var runBlock = ['$http', 'localStorageService',function ($http, localStorageService) {
        $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
    }];
    bowyerApp.run(runBlock);
})();

(function() {
    'use strict';
    bowyerApp.run(runBlock);
    function runBlock($http, localStorageService) {
        $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
    }
})();

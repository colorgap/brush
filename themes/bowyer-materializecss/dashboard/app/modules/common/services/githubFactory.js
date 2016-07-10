(function() {
    'use strict';
    bowyerApp.factory('github', ['$http', function($http) {
        return {
            getGithubData: function() {
                return $http.get('https://api.github.com/users/colorgap/repos',{cache: true}).then(function(response) {
                    return response.data;
                });
            }
        };
    }]);
})();

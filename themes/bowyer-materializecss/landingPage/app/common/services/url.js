(function() {
    'use strict';
    bowyerApp.factory('url', [function() {
        return {
            user:{
                me: '/api/user/me'
            }
        };
    }]);
})();
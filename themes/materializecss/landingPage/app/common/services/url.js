(function() {
    'use strict';
    app.factory('url', [function() {
        return {
            user:{
                me: '/api/user/me'
            }
        };
    }]);
})();
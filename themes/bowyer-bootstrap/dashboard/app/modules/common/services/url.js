(function() {
    'use strict';
    bowyerApp.factory('url', [function() {
        return {
            login: '/api/login',
            logout: '/api/logout',
            register: '/api/register',
            forgotPassword: '/api/forgotPassword',
            resetForgotPassword: '/api/resetPassword',
            reference: {
                roles: '/api/reference/roles'
            },
            admin:{
                addUser: '/api/admin/addUser',
                users: '/api/admin/users',
                user: '/api/admin/user/',
                updateUser: '/api/admin/updateUser',
                apiHealthCheck: '/api/healthCheck/apiCheck',
                dbHealthCheck: '/api/healthCheck/dbCheck',
                roles: 'api/admin/roles'
            },
            user:{
                me: '/api/user/me',
                resetPassword:'/api/user/resetPassword'
            }
        };
    }]);
})();
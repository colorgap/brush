(function() {
    'use strict';
    app.factory('healthCheckFactory', ['url',function(url) {
        return {
            initial: {
                checkValue: 0,
                checkMessage: 'checking ...',
                type: 'warning'
            },
            success: {
                checkValue: 100,
                checkMessage: 'Healthy',
                checkPass: true,
                type: 'success'
            },
            failed: {
                checkValue: 100,
                checkMessage: 'Failed',
                type: 'danger'
            },
            apiCheckConfig: {
                url: url.admin.apiHealthCheck
            },
            dbCheckConfig: {
                url: url.admin.dbHealthCheck
            }
        };
    }]);
})();

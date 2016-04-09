(function() {
    'use strict';
    bowyerApp.factory('healthCheckFactory', function() {
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
            }
        };
    });
})();

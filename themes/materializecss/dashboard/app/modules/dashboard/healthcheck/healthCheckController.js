(function() {
    'use strict';
    app.controller('healthCheckCtrl', ['api', 'localStorageService', 'healthCheckFactory',
        function(api, localStorageService, healthCheckFactory) {
            var vm = this;
            vm.api = healthCheckFactory.initial;
            vm.db = healthCheckFactory.initial;
            vm.ls = healthCheckFactory.initial;
            api.executeCall(healthCheckFactory.apiCheckConfig, function(response) {
                vm.api = healthCheckFactory.success;
            }, function() {
                vm.api = healthCheckFactory.failed;
            });
            api.executeCall(healthCheckFactory.dbCheckConfig, function(response) {
                vm.db = healthCheckFactory.success;
                if (response.data.api_token === localStorageService.get('apitoken')) {
                    vm.ls = healthCheckFactory.success;
                } else {
                    vm.ls = healthCheckFactory.failed;
                }
            }, function() {
                vm.db = healthCheckFactory.failed;
                vm.ls = healthCheckFactory.failed;
            });
        }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('healthCheckCtrl', ['api', 'localStorageService','healthCheckFactory',
        function(api, localStorageService,healthCheckFactory) {
            var vm = this;
            vm.api = healthCheckFactory.initial;
            vm.db = healthCheckFactory.initial;
            vm.ls = healthCheckFactory.initial;
            var apiCheckConfig = {
                url: '/api/healthCheck/apiCheck'
            };
            var dbCheckConfig = {
                url: '/api/healthCheck/dbCheck'
            };
            api.executeCall(apiCheckConfig).then(function(response) {
                vm.api = healthCheckFactory.success;
            }, api.logout(function(error) {
                vm.api = healthCheckFactory.failed;
            }));
            api.executeCall(dbCheckConfig).then(function(response) {
                vm.db = healthCheckFactory.success;
                if(response.data.api_token === localStorageService.get('api_token')){ 
                    vm.ls = healthCheckFactory.success;
                }else{
                    vm.ls = healthCheckFactory.failed;
                }
            }, api.logout(function(error) {
                vm.db = healthCheckFactory.failed;
                vm.ls = healthCheckFactory.failed;
            }));
        }]);
})();

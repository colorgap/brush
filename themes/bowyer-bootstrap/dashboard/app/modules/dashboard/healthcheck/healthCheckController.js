(function() {
    'use strict';
    angular.module('bowyer').controller('healthCheckCtrl', ['api', 'localStorageService',
        function(api, localStorageService) {
            var vm = this;
            vm.apiCheckValue = 0;
            vm.dbCheckValue = 0;
            vm.lsCheckValue = 0;
            vm.apiCheckMessage = 'checking ...';
            vm.dbCheckMessage = 'checking ...';
            vm.lsCheckMessage = 'checking ...';
            var healthCheckConfig = {
                url: '/api/healthCheck/apiCheck'
            };
            var dbCheckConfig = {
                url: '/api/healthCheck/dbCheck'
            };
            api.executeCall(healthCheckConfig).then(function(response) {
                vm.users = response.data;
                vm.apiCheckValue = 100;
                vm.apiCheckPass = true;
                vm.apiCheckMessage = 'Healthy';
            }, api.logout(function(error) {
                console.log(error);
            }));
            api.executeCall(dbCheckConfig).then(function(response) {
                vm.users = response.data;
                vm.dbCheckValue = 100;
                vm.dbCheckPass = true;
                vm.dbCheckMessage = 'Healthy';
                if(response.data.api_token === localStorageService.get('api_token')){ 
                    vm.lsCheckValue = 100;
                    vm.lsCheckPass = true;
                    vm.lsCheckMessage = 'Healthy';
                }
            }, api.logout(function(error) {
                console.log(error);
            }));

        }]);
})();

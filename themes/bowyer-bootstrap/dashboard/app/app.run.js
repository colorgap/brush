(function() {
  'use strict';

  angular
    .module('bowyer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http,localStorageService) {
    $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
  }

})();

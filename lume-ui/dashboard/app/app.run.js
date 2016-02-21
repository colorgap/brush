(function() {
  'use strict';

  angular
    .module('lume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http,localStorageService) {
    $http.defaults.headers.common.api_token = localStorageService.get('api_token');
  }

})();

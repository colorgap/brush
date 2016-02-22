(function() {
  'use strict';

  angular
    .module('lume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http,localStorageService) {
    $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
  }

})();

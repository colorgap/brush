(function() {
  'use strict';

  angular
    .module('bowyer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

(function() {
    'use strict';
    bowyerApp
        .run(runBlock);
    function runBlock($log) {
        $log.debug('runBlock end');
    }
})();
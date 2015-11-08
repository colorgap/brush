(function() {
  'use strict';

  angular
    .module('lume', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap']);

})();

(function() {
  'use strict';

  angular
    .module('lume')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
  console.log('here');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'lume-ui/landingPage/partials/home/index.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

(function() {
  'use strict';

  angular
    .module('lume')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

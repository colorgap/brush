(function() {
  'use strict';
  app.directive('logo', function(){
      return {
          restrict: 'EA',
          template: '<span>bru</span><span class="amber-text">sh</span>'
      };
  });
})();
(function() {
  'use strict';
  app.directive('logo', function(){
      return {
          restrict: 'EA',
          template: '<span>bru</span><span style="color:#F39C12">sh</span>'
      };
  });
})();
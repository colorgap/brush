(function() {
  'use strict';
  materialize.directive('collapsible', function(){
      return {
          restrict: 'EA',
          scope:{
              options:'='
          },
          link: function(scope,element,attrs){
              element.collapsible(scope.options);
          }
      };
  });
})();
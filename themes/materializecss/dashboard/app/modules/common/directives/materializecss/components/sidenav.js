(function() {
  'use strict';
  materialize.directive('sideNav', function(){
      return {
          restrict: 'EA',
          scope:{
              options:'='
          },
          link: function(scope,element,attrs){
              element.sideNav(scope.options);
          }
      };
  });
})();
(function() {
  'use strict';
  materialize.directive('dropdown', function(){
      return {
          restrict: 'EA',
          scope:{
              options:'='
          },
          link: function(scope,element,attrs){
              element.dropdown(scope.options);
          }
      };
  });
})();
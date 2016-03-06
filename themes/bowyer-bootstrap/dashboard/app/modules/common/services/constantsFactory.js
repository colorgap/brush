(function() {
  'use strict';
  angular.module('bowyer').factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              get: 'GET'
          }
      };
  }]);
})();

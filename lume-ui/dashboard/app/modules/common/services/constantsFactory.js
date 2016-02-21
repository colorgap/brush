(function() {
  'use strict';
  angular.module('lume').factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              get: 'GET'
          }
      };
  }]);
})();

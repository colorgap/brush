(function() {
  'use strict';
  bowyerApp.factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          }
      };
  }]);
})();

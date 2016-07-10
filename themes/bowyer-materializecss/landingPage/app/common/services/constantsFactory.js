(function() {
  'use strict';
  bowyerApp.factory('constants', [function(){
      return {
          app: 'bowyer',
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          }
      };
  }]);
})();

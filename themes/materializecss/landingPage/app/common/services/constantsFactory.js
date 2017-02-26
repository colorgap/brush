(function() {
  'use strict';
  app.factory('constants', [function(){
      return {
          app: 'brush',
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          }
      };
  }]);
})();

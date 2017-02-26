(function() {
  'use strict';
  app.factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          },
          logoutMessages: {
              regularLogout: 'You have logout successfully.',
              loggedoutDueError: {
                  401: 'You are not authorize to access. Please contact support.',
                  500: 'System error. Please contact support.',
                  404: 'Resource not found. Please contact support.'
              }
          }
      };
  }]);
})();

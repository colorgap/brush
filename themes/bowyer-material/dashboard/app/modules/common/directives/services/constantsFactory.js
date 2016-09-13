(function() {
  'use strict';
  app.factory('constants', [function(){
      return {
          app: 'bowyer',
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          },
          logoutMessages: {
              regularLogout: 'You have logout successfully.',
              loggedoutDueError: {
                  401: 'Please provide your credentials.',
                  500: 'System error. Please contact support.',
                  404: 'Resource not found. Please contact support.'
              }
          }
      };
  }]);
})();

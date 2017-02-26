(function() {
  'use strict';
  app.controller('homeCtrl',['$scope','$window','localStorageService', 'url', 'api',
  function($scope,$window,localStorageService, url, api){
      var home = this;
      angular.element('.button-collapse').sideNav();
      var profileCallConfig = {
          url: url.user.me
      };
      home.user = true;
      home.userLookupComplete = false;
      api.executeCall(profileCallConfig,function(response) {
          home.user = response.data;
          home.userLookupComplete = true;
      }, function(){
          home.user = false;
          home.userLookupComplete = true;
      });
  }]);
})();
(function() {
  'use strict';
  bowyerApp.factory('api', ['$http','constants','$state','localStorageService',
    function($http,constants,$state,localStorageService){
      return {
          executeCall: function(config){
              if(config.method===constants.method.post){
                  return $http.post(config.url,config.data);
              }else if(config.method===constants.method.delete){
                  return $http.delete(config.url);
              }else{
                  return $http.get(config.url);
              }
          },
          logout: function(callback){
              return function(error){
                if(error.status===401){
                    localStorageService.clearAll();
                    $state.go('login');
                }else{
                    if(callback){
                        callback(error);
                    }
                }
              };
          },
          addTokenToCalls: function(){
            $http.defaults.headers.common.apitoken = localStorageService.get('api_token');
          }
      };
  }]);
})();

(function() {
  'use strict';
  bowyerApp.controller('dashboardCtrl', ['commonFactory','$state',function(commonFactory,$state){
      var dashboard = this;
      dashboard.user = commonFactory.getUser();
      if(!dashboard.user){
          $state.go('login');
      }
  }]);
})();
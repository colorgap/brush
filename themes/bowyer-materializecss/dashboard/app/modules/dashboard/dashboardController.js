(function() {
  'use strict';
  bowyerApp.controller('dashboardCtrl', ['commonFactory','$state','github','constants',
  function(commonFactory,$state,github,constants){
      var dashboard = this;
      dashboard.collapsibleOptions = {
        accordion : false
      };
      github.getGithubData().then(function(repos){
          dashboard.github = repos.find(function(repo){
              return repo.name === constants.app;
          });
      });
      dashboard.user = commonFactory.getUser();
      if(!dashboard.user){
          $state.go('login');
      }
  }]);
})();
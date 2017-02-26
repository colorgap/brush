(function() {
  'use strict';
  app.controller('dashboardCtrl', ['commonFactory','$state','github','constants','api','url',
  function(commonFactory,$state,github,constants, api, url){
      var dashboard = this;
      dashboard.collapsibleOptions = {
        accordion : false
      };
      github.getGithubData().then(function(repos){
          dashboard.github = repos.find(function(repo){
              return repo.name === constants.app;
          });
      });
      var profileCallConfig = {
          url: url.user.me
      };
      api.executeCall(profileCallConfig,function(response) {
          dashboard.user = response.data;
      });
  }]);
})();
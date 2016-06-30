(function() {
  'use strict';
  bowyerApp.directive('bowyerLogo', function(){
      return {
          restrict: 'EA',
          template: '<span>bow</span><span class="amber-text">yer</span>'
      };
  });
})();
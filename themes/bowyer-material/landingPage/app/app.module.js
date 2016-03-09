(function() {
  'use strict';

  angular
    .module('bowyer', ['ui.router', 'ngMaterial']);

})();
(function() {
  'use strict';
  angular
    .module('starterApp')
    .config(configBlock);
  function configBlock($mdThemingProvider) {
      $mdThemingProvider.definePalette('white', {
        '50': 'ffffff',
        '100': 'ffffff',
        '200': 'ffffff',
        '300': 'ffffff',
        '400': 'ffffff',
        '500': 'ffffff',
        '600': 'ffffff',
        '700': 'ffffff',
        '800': 'ffffff',
        '900': 'ffffff',
        'A100': 'ffffff',
        'A200': 'ffffff',
        'A400': 'ffffff',
        'A700': 'ffffff',
        'contrastDefaultColor': '1D628B',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
        'contrastLightColors': '1D628B'    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('bowyer')
        .primaryPalette('white')
        .accentPalette('amber');
    $mdThemingProvider.setDefaultTheme('bowyer');
  }
})();

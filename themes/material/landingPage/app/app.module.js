var app;
(function() {
  'use strict';

  app = angular
    .module('brush', ['ui.router', 'ngMaterial']);

})();
(function() {
  'use strict';
  app
    .config(configBlock);
  function configBlock($mdThemingProvider) {
      $mdThemingProvider.definePalette('brush-white', {
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
        'contrastDefaultColor': '000000',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
        'contrastLightColors': '000000'    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('brush')
        .primaryPalette('brush-white')
        .accentPalette('amber');
    $mdThemingProvider.setDefaultTheme('brush');
  }
})();

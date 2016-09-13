var app;
(function() {
  'use strict';

  app = angular
    .module('bowyer', ['ui.router', 'ngMaterial','LocalStorageModule']);

})();
(function() {
  'use strict';
  app
    .config(configBlock);
  function configBlock($mdThemingProvider) {
      $mdThemingProvider.definePalette('bowyer-purple', {
        '50': 'D1B5F4',
        '100': 'A872EB',
        '200': '8A41E4',
        '300': '661CC2',
        '400': '5818A7',
        '500': '4A148C',
        '600': '3C1071',
        '700': '2E0C56',
        '800': '20093C',
        '900': '110521',
        'A100': 'D1B5F4',
        'A200': 'A872EB',
        'A400': '5818A7',
        'A700': '2E0C56',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('bowyer')
        .primaryPalette('bowyer-purple')
        .accentPalette('amber');
    $mdThemingProvider.setDefaultTheme('bowyer');
  }
})();

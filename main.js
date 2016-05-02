System.register(['angular2/platform/browser', 'angular2/core', './app/environment', './app/bowyer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, environment_1, bowyer_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (bowyer_component_1_1) {
                bowyer_component_1 = bowyer_component_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            browser_1.bootstrap(bowyer_component_1.BowyerApp);
        }
    }
});
//# sourceMappingURL=main.js.map
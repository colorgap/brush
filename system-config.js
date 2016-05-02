System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var barrels, config;
    function createPackageConfig(barrelList) {
        return barrelList.reduce(function (barrelConfig, barrelName) {
            barrelConfig[barrelName] = {
                format: 'register',
                defaultExtension: 'js',
                main: 'index'
            };
            return barrelConfig;
        }, {});
    }
    return {
        setters:[],
        execute: function() {
            barrels = [
                'app',
                'app/shared',
            ];
            // Add your custom SystemJS configuration here.
            exports_1("config", config = {
                packages: Object.assign({}, createPackageConfig(barrels))
            });
        }
    }
});
//# sourceMappingURL=system-config.js.map
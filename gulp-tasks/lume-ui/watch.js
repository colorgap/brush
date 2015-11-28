module.exports = function(gulp, plugins,config,env){
  return function(){
    gulp.watch(config.dashboard.src.scripts,['script']);
    gulp.watch(config.dashboard.src.styles,['sass']);
    gulp.watch(config.dashboard.src.partials,['partials']);
    gulp.watch(config.dashboard.src.index,['minifyHtml']);
    gulp.watch(config.landingPage.src.scripts,['script']);
    gulp.watch(config.landingPage.src.styles,['sass']);
    gulp.watch(config.landingPage.src.partials,['partials']);
    gulp.watch(config.landingPage.src.index,['minifyHtml']);
  };
};

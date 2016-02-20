module.exports = function(gulp, plugins,config,env){
  var browserSync = require('browser-sync');
  return function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(config.dashboard.src.scripts,['script']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.styles,['sass']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.partials,['partials']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.index,['minifyHtml']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.scripts,['script']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.styles,['sass']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.partials,['partials']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.index,['minifyHtml']).on('change', browserSync.reload);
  };
};

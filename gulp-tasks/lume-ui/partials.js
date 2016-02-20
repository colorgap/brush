module.exports = function(gulp, plugins,config,env){
  return function(){
    gulp.src(config.dashboard.src.partials)
        .pipe(gulp.dest(config.dashboard.dest.partials));
    gulp.src(config.landingPage.src.partials)
        .pipe(gulp.dest(config.landingPage.dest.partials));
  };
};

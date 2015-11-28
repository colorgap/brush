module.exports = function(gulp, plugins,config,env){
  return function(){
    if(env === 'prod'){
        config.common.sassConfig.outputStyle = 'compressed';
    }else{
        config.common.sassConfig.sourceComments = 'map';
    }
    gulp.src(config.dashboard.src.styles)
        .pipe(plugins.sass(config.common.sassConfig))
        .pipe(gulp.dest(config.dashboard.dest.style));
    gulp.src(config.landingPage.src.styles)
        .pipe(plugins.sass(config.common.sassConfig))
        .pipe(gulp.dest(config.landingPage.dest.style));
  };
};

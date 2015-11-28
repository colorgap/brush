module.exports = function(gulp, plugins,config,env){
  return function(){
    var sassConfig = {
        includePaths: [
            config.common.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
            config.common.bowerDir + '/fontawesome/scss'
        ]
    };
    if(env === 'prod'){
        sassConfig.outputStyle = 'compressed';
    }else{
        sassConfig.sourceComments = 'map';
    }
    gulp.src(config.dashboard.src.styles)
        .pipe(plugins.sass(sassConfig))
        .pipe(gulp.dest(config.dashboard.dest.style));
    gulp.src(config.landingPage.src.styles)
        .pipe(plugins.sass(sassConfig))
        .pipe(gulp.dest(config.landingPage.dest.style));
  };
};

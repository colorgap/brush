module.exports = function(gulp, plugins,config,env){
  return function(){
    if(env === 'prod'){
        gulp.src(config.dashboard.src.index)
            .pipe(plugins.rename('index.php'))
            .pipe(plugins.minifyHtml({
                  empty: true,
                  spare: true,
                  quotes: true,
                  conditionals: true
                }))
            .pipe(gulp.dest(config.dashboard.dest.index));
            gulp.src(config.landingPage.src.index)
            .pipe(plugins.rename('index.php'))
            .pipe(plugins.minifyHtml({
                  empty: true,
                  spare: true,
                  quotes: true,
                  conditionals: true
                }))
            .pipe(gulp.dest(config.landingPage.dest.index));
    }else{
        gulp.src(config.dashboard.src.index)
            .pipe(plugins.rename('index.php'))
            .pipe(gulp.dest(config.dashboard.dest.index));
        gulp.src(config.landingPage.src.index)
            .pipe(plugins.rename('index.php'))
            .pipe(gulp.dest(config.landingPage.dest.index));
    }
  };
};

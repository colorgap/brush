module.exports = function(gulp, plugins,config,env){
  return function(){
    if(env === 'prod'){
        gulp.src(config.dashboard.src.scripts)
            .pipe(plugins.concat('app.js'))
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.uglify())
            .pipe(gulp.dest(config.dashboard.dest.script));
        gulp.src(config.landingPage.src.scripts)
            .pipe(plugins.concat('app.js'))
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.uglify())
            .pipe(gulp.dest(config.landingPage.dest.script));
    }else{
        gulp.src(config.dashboard.src.scripts)
            .pipe(plugins.concat('app.js'))
            .pipe(gulp.dest(config.dashboard.dest.script));
        gulp.src(config.landingPage.src.scripts)
            .pipe(plugins.concat('app.js'))
            .pipe(gulp.dest(config.landingPage.dest.script));
    }
};
};

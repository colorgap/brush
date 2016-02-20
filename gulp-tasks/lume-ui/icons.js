module.exports = function(gulp, plugins,config,env){
  return function(){
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/lume-ui/dashboard/fonts'));
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/lume-ui/landingPage/fonts'));
  };
};

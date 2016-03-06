module.exports = function(gulp, plugins,config,env){
  return function(){
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/bowyer-ui/dashboard/fonts'));
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/bowyer-ui/landingPage/fonts'));
  };
};

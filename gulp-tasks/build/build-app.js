module.exports = function(gulp, plugins,config,env){
  return function(){
    var filesToMove = [
        './app/**/*.*',
        './bootstrap/**/*.*',
        './database/**/*.*',
        './vendor/**/*.*',
        './resources/**/*.*',
        './storage/**/*.*',
        './public/**/*.*',
        './.env',
        './server.php'
    ];
    return gulp.src(filesToMove, { base: './' })
      .pipe(gulp.dest('tmp'));
  };
};

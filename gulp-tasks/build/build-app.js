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
      // the base option sets the relative root for the set of files,
      // preserving the folder structure
      return gulp.src(filesToMove, { base: './' })
      .pipe(gulp.dest('tmp'));
    // gulp.src(['./app/**/*.*'])
    //   .pipe(gulp.dest('./tmp/app'));
    // gulp.src(['./bootstrap/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/bootstrap'));
    // gulp.src(['./database/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/database'));
    // gulp.src(['./resources/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/resources'));
    // gulp.src(['./storage/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/storage'));
    // gulp.src(['./vendor/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/vendor'));
    // gulp.src(['./public/**/**/*.*'])
    //   .pipe(gulp.dest('./tmp/public'));
    // gulp.src(['./.env'])
    //   .pipe(gulp.dest('./tmp/'));
    // gulp.src(['./server.php'])
    //   .pipe(gulp.dest('./tmp/'));
  };
};

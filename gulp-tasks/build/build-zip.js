module.exports = function(gulp, plugins,config,env){
  var zip = require('gulp-zip');
  return function(){
      return gulp.src('./tmp/**',{dot:true})
          .pipe(zip('brush.zip'))
          .pipe(gulp.dest('target'));
  };
};

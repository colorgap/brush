module.exports = function(gulp, plugins,config,env){
  var zip = require('gulp-zip');
  return function(){
      return gulp.src('./tmp/**')
          .pipe(zip('lume-app.zip'))
          .pipe(gulp.dest('target'));
  };
};

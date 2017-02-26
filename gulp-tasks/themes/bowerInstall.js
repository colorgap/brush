module.exports = function(gulp, plugins,config,env){
 var install = require("gulp-install");
  return function(){
    return gulp.src(['./'+config.common.baseBower+'/bower.json'])
                .pipe(install());
  };
};

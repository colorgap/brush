module.exports = function(gulp, plugins,config,env){
  var clean = require('gulp-clean');
  var del = require('del');
  return function(){
    return del(['./tmp']);
  };
};

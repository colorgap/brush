module.exports = function(gulp, plugins,config,env){
  var runSequence = require('run-sequence');
  return function(cb){
      runSequence('build-clean',['default','build-app'],'build-zip',cb);
  };
};

module.exports = function(gulp, plugins,config,env){
  var gulpFilter = require('gulp-filter');
  var bower = require('main-bower-files');
  return function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(bower({
        paths: {
        bowerDirectory: config.common.baseBower+'/bower_components',
        bowerJson: config.common.baseBower+'/bower.json'
        }
    }))
        .pipe(jsFilter)
        .pipe(plugins.concat('vendor.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.public.landingPage))
        //.pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(plugins.concat('vendor.css'))
        .pipe(gulp.dest(config.public.landingPage))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest(config.public.landingPage));
  };
};

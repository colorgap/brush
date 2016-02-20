module.exports = function(gulp, plugins,config,env){
  var gulpFilter = require('gulp-filter');
  var bower = require('main-bower-files');
  return function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(bower())
        .pipe(jsFilter)
        .pipe(plugins.concat('vendor.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'))
        //.pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(plugins.concat('vendor.css'))
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'));
  };
};

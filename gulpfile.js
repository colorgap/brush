
var env = process.env.NODE_ENV || 'dev';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var getConfig = function () {
    return require('./gulp-tasks/common/config')();
};
var getTask = function (task) {
  var config = getConfig();
  return require('./gulp-tasks/lume-ui/' + task)(gulp, plugins,config,env);
};
gulp.task('sass', getTask('sass'));
gulp.task('script', getTask('scripts'));
gulp.task('partials', getTask('partials'));
gulp.task('icons', getTask('icons'));
gulp.task('minifyHtml', getTask('html'));
gulp.task('watch', getTask('watch'));
gulp.task('bower', getTask('bower'));
gulp.task('bower-lp', getTask('bower-lp'));
gulp.task('serve',['script','sass','partials','icons','minifyHtml','bower-lp','bower'], getTask('serve'));
gulp.task('default', ['script','sass','partials','icons','minifyHtml','bower-lp','bower']);

var gulp = require('gulp');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();
var appConfig = require('./brush-config.json');
var minimist = require('minimist');
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'dev' }
};

var options = minimist(process.argv.slice(2), knownOptions);
var env = options.env || 'dev';
console.log('gulp is running in '+env+' environment.');
var getConfig = function () {
    var config =  require('./gulp-tasks/common/config')()(appConfig);
    return config;
};
var getTask = function (task) {
  var config = getConfig();
  return require('./gulp-tasks/themes/' + task)(gulp, plugins,config,env);
};
var kickOffBuild = function(task){
  var config = getConfig();
  if(task){
    return require('./gulp-tasks/build/'+task)(gulp, plugins,config,env);
  }else{
    return require('./gulp-tasks/build/build')(gulp, plugins,config,env);
  }
};
gulp.task('sass', getTask('sass'));
gulp.task('script', getTask('scripts'));
gulp.task('partials', getTask('partials'));
gulp.task('icons', getTask('icons'));
gulp.task('minifyHtml', getTask('html'));
gulp.task('watch', getTask('watch'));
gulp.task('bower-install', getTask('bowerInstall'));
gulp.task('bower', getTask('bower'));
gulp.task('bower-lp', getTask('bower-lp'));
gulp.task('build-app', kickOffBuild('build-app'));
gulp.task('build-clean', kickOffBuild('build-clean'));
gulp.task('build-zip', kickOffBuild('build-zip'));
gulp.task('build',kickOffBuild());
gulp.task('serve',['bower-install','script','sass','partials','icons','minifyHtml','bower-lp','bower'], getTask('serve'));
gulp.task('default', runSequence('bower-install',['script','sass','partials','icons','minifyHtml','bower-lp','bower']));

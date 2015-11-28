
var env = process.env.NODE_ENV || 'dev';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    browserSync = require('browser-sync')
    minifyHtml = require('gulp-minify-html')
    bower = require('main-bower-files')
    gulpFilter = require('gulp-filter')
    concat = require('gulp-concat');
var config = {
    dashboard:{
        src:{
            scripts: 'lume-ui/dashboard/app/**/*.js',
            styles: 'lume-ui/dashboard/styles/**/*.scss',
            partials: 'lume-ui/dashboard/partials/**/*.html',
            index: 'lume-ui/dashboard/index.html'
        },
        dest: {
            script: 'public/lume-ui/dashboard/js/',
            style: 'public/lume-ui/dashboard/css/',
            partials: 'public/lume-ui/dashboard/partials/',
            index: 'resources/views/dashboard/'
        }
    },
    landingPage:{
        src:{
            scripts: 'lume-ui/landingPage/app/**/*.js',
            styles: 'lume-ui/landingPage/styles/**/*.scss',
            partials: 'lume-ui/landingPage/partials/**/*.html',
            index: 'lume-ui/landingPage/index.html'
        },
        dest: {
            script: 'public/lume-ui/landingPage/js/',
            style: 'public/lume-ui/landingPage/css/',
            partials: 'public/lume-ui/landingPage/partials/',
            index: 'resources/views/'
        }
    },
    common: {
        bowerDir: 'bower_components',
        bower: ['bower.json', '.bowerrc'],
        sassConfig: {
            includePaths: [
                'bower_components' + '/bootstrap-sass-official/assets/stylesheets',
                'bower_components' + '/fontawesome/scss'
            ]
        }
    }

};
var getTask = function (task) {
    return require('./gulp-tasks/lume-ui/' + task)(gulp, plugins,config,env);
};
gulp.task('sass', getTask('sass'));

gulp.task('scripts', getTask('scripts'));

gulp.task('partials', function(){
    gulp.src(config.dashboard.src.partials)
        .pipe(gulp.dest(config.dashboard.dest.partials));
    gulp.src(config.landingPage.src.partials)
        .pipe(gulp.dest(config.landingPage.dest.partials));
});
gulp.task('icons', function() {
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/lume-ui/dashboard/fonts'));
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/lume-ui/landingPage/fonts'));
});
gulp.task('minifyHtml', function(){
    if(env === 'production'){
        gulp.src(config.dashboard.src.index)
            .pipe(rename('index.php'))
            .pipe(minifyHtml({
                  empty: true,
                  spare: true,
                  quotes: true,
                  conditionals: true
                }))
            .pipe(gulp.dest(config.dashboard.dest.index));
            gulp.src(config.landingPage.src.index)
            .pipe(rename('index.php'))
            .pipe(minifyHtml({
                  empty: true,
                  spare: true,
                  quotes: true,
                  conditionals: true
                }))
            .pipe(gulp.dest(config.landingPage.dest.index));
    }else{
        gulp.src(config.dashboard.src.index)
            .pipe(rename('index.php'))
            .pipe(gulp.dest(config.dashboard.dest.index));
        gulp.src(config.landingPage.src.index)
            .pipe(rename('index.php'))
            .pipe(gulp.dest(config.landingPage.dest.index));
    }
});
gulp.task('bower', function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(bower())
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/lume-ui/dashboard/dist'))
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/lume-ui/dashboard/dist'))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest('public/lume-ui/dashboard/dist'));
});
gulp.task('bower-landingPage', function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return gulp.src(bower())
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'))
        //.pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest('public/lume-ui/landingPage/dist'));
});

gulp.task('watch', function(){
    gulp.watch(config.dashboard.src.scripts,['script']);
    gulp.watch(config.dashboard.src.styles,['sass']);
    gulp.watch(config.dashboard.src.partials,['partials']);
    gulp.watch(config.dashboard.src.index,['minifyHtml']);
    gulp.watch(config.landingPage.src.scripts,['script']);
    gulp.watch(config.landingPage.src.styles,['sass']);
    gulp.watch(config.landingPage.src.partials,['partials']);
    gulp.watch(config.landingPage.src.index,['minifyHtml']);

});
gulp.task('serve',['script','sass','partials','icons','minifyHtml','bower-landingPage','bower'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(config.dashboard.src.scripts,['script']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.styles,['sass']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.partials,['partials']).on('change', browserSync.reload);
    gulp.watch(config.dashboard.src.index,['minifyHtml']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.scripts,['script']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.styles,['sass']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.partials,['partials']).on('change', browserSync.reload);
    gulp.watch(config.landingPage.src.index,['minifyHtml']).on('change', browserSync.reload);
});
gulp.task('default', ['script','sass','partials','icons','minifyHtml','bower-landingPage','bower']);

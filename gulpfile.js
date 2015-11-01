
var env = process.env.NODE_ENV || 'development';
var gulp = require('gulp');
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    sass = require('gulp-sass')
    browserSync = require('browser-sync')
    minifyHtml = require('gulp-minify-html')
    bower = require('gulp-bower-files')
    gulpFilter = require('gulp-filter')
    concat = require('gulp-concat');

var config = {
    dashboard:{
        src:{
            scripts: 'dashboard-ui/app/**/*.js',
            styles: 'dashboard-ui/styles/**/*.scss',
            partials: 'dashboard-ui/partials/**/*.html',
            index: 'dashboard-ui/index.html'
        },
        dest: {
            script: 'public/dashboard-ui/js/',
            style: 'public/dashboard-ui/css/',
            partials: 'public/dashboard-ui/partials/',
            index: 'resources/views/dashboard/'
        }
    },
    landingPage:{
        src:{
            scripts: 'landingPage-ui/app/**/*.js',
            styles: 'landingPage-ui/styles/**/*.scss',
            partials: 'landingPage-ui/partials/**/*.html',
            index: 'landingPage-ui/index.html'
        },
        dest: {
            script: 'public/landingPage-ui/js/',
            style: 'public/landingPage-ui/css/',
            partials: 'public/landingPage-ui/partials/',
            index: 'resources/views/'
        }
    },
    common: {
        bowerDir: 'bower_components',
        bower: ['bower.json', '.bowerrc']
    }

};


gulp.task('sass', function(){
    var sassConfig = {
        includePaths: [
            config.common.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
            config.common.bowerDir + '/fontawesome/scss'
        ]
    };
    if(env === 'production'){
        sassConfig.outputStyle = 'compressed';

    }else{
        sassConfig.sourceComments = 'map';
    }
    gulp.src(config.dashboard.src.styles)
        .pipe(sass(sassConfig))
        .pipe(gulp.dest(config.dashboard.dest.style));
    gulp.src(config.landingPage.src.styles)
            .pipe(sass(sassConfig))
            .pipe(gulp.dest(config.landingPage.dest.style));
});

gulp.task('script', function(){
    if(env === 'production'){
        gulp.src(config.dashboard.src.scripts)
            .pipe(concat('app.js'))
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(config.dashboard.dest.script));
        gulp.src(config.landingPage.src.scripts)
            .pipe(concat('app.js'))
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest(config.landingPage.dest.script));
    }else{
        gulp.src(config.dashboard.src.scripts)
            .pipe(concat('app.js'))
            .pipe(gulp.dest(config.dashboard.dest.script));
        gulp.src(config.landingPage.src.scripts)
            .pipe(concat('app.js'))
            .pipe(gulp.dest(config.landingPage.dest.script));
    }
});
gulp.task('partials', function(){
    gulp.src(config.dashboard.src.partials)
        .pipe(gulp.dest(config.dashboard.dest.partials));
    gulp.src(config.landingPage.src.partials)
        .pipe(gulp.dest(config.landingPage.dest.partials));
});
gulp.task('icons', function() {
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/dashboard-ui/fonts'));
    gulp.src(config.common.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/landingPage-ui/fonts'));
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
    return bower()
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/dashboard-ui/dist'))
        //.pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/dashboard-ui/dist'))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest('public/dashboard-ui/dist'));
});
gulp.task('bower-landingPage', function(){
    var jsFilter = gulpFilter('**/*.js');
    var cssFilter = gulpFilter('**/*.css');
    return bower()
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/landingPage-ui/dist'))
        //.pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/landingPage-ui/dist'))
        //.pipe(cssFilter.restore())
        .pipe(gulp.dest('public/landingPage-ui/dist'));
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
gulp.task('default', ['script','sass','partials','icons','minifyHtml','bower-landingPage','bower']);
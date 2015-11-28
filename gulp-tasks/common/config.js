module.exports = function(gulp, plugins,config,env){
  return {
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
};

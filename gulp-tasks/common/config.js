module.exports = function(gulp, plugins,config,env){
  return function(themeName){
      return {
        dashboard:{
            src:{
                scripts: 'themes/'+themeName+'/dashboard/app/**/*.js',
                styles: 'themes/'+themeName+'/dashboard/styles/**/*.scss',
                partials: 'themes/'+themeName+'/dashboard/partials/**/*.html',
                index: 'themes/'+themeName+'/dashboard/index.html'
            },
            dest: {
                script: 'public/bowyer-ui/dashboard/js/',
                style: 'public/bowyer-ui/dashboard/css/',
                partials: 'public/bowyer-ui/dashboard/partials/',
                index: 'resources/views/dashboard/'
            }
        },
        landingPage:{
            src:{
                scripts: 'themes/'+themeName+'/landingPage/app/**/*.js',
                styles: 'themes/'+themeName+'/landingPage/styles/**/*.scss',
                partials: 'themes/'+themeName+'/landingPage/partials/**/*.html',
                index: 'themes/'+themeName+'/landingPage/index.html'
            },
            dest: {
                script: 'public/bowyer-ui/landingPage/js/',
                style: 'public/bowyer-ui/landingPage/css/',
                partials: 'public/bowyer-ui/landingPage/partials/',
                index: 'resources/views/'
            }
        },
        public:{
          landingPage:'public/bowyer-ui/landingPage/dist',
          dashboard: 'public/bowyer-ui/dashboard/dist'  
        },
        common: {
            theme:'bowyer-bootstrap',
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
};

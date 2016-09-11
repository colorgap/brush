module.exports = function(gulp, plugins,config,env){
  return function(bowyerConfig){
      return {
        dashboard:{
            src:{
                scripts: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.dashboard.folderName+'/app/**/*.js',
                styles: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.dashboard.folderName+'/styles/**/*.scss',
                partials: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.dashboard.folderName+'/partials/**/*.html',
                index: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.dashboard.folderName+'/index.html'
            },
            dest: {
                script: 'public/bowyer-ui/'+bowyerConfig.dashboard.folderName+'/js/',
                style: 'public/bowyer-ui/'+bowyerConfig.dashboard.folderName+'/css/',
                partials: 'public/bowyer-ui/'+bowyerConfig.dashboard.folderName+'/partials/',
                index: 'resources/views/'+bowyerConfig.dashboard.folderName+'/'
            }
        },
        landingPage:{
            src:{
                scripts: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.landingPage.folderName+'/app/**/*.js',
                styles: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.landingPage.folderName+'/styles/**/*.scss',
                partials: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.landingPage.folderName+'/partials/**/*.html',
                index: 'themes/'+bowyerConfig.themeName+'/'+bowyerConfig.landingPage.folderName+'/index.html'
            },
            dest: {
                script: 'public/bowyer-ui/'+bowyerConfig.landingPage.folderName+'/js/',
                style: 'public/bowyer-ui/'+bowyerConfig.landingPage.folderName+'/css/',
                partials: 'public/bowyer-ui/'+bowyerConfig.landingPage.folderName+'/partials/',
                index: 'resources/views/'
            }
        },
        public:{
          landingPage:'public/bowyer-ui/'+bowyerConfig.landingPage.folderName+'/dist',
          dashboard: 'public/bowyer-ui/'+bowyerConfig.dashboard.folderName+'/dist'  
        },
        common: {
            baseBower: 'themes/'+bowyerConfig.themeName,
            bowerDir: 'themes/'+bowyerConfig.themeName+'/bower_components',
            bower: ['themes/'+bowyerConfig.themeName+'/bower.json', 'themes/'+bowyerConfig.themeName+'/.bowerrc'],
            sassConfig: {
                includePaths: [
                    'themes/'+bowyerConfig.themeName+'/bower_components' + '/bootstrap-sass-official/assets/stylesheets',
                    'themes/'+bowyerConfig.themeName+'/bower_components' + '/Materialize/sass',
                    'themes/'+bowyerConfig.themeName+'/bower_components' + '/fontawesome/scss'
                ]
            }
        }
    };
  };
};

module.exports = function(gulp, plugins,config,env){
  return function(appConfig){
      return {
        dashboard:{
            src:{
                scripts: 'themes/'+appConfig.themeName+'/'+appConfig.dashboard.folderName+'/app/**/*.js',
                styles: 'themes/'+appConfig.themeName+'/'+appConfig.dashboard.folderName+'/styles/**/*.scss',
                partials: 'themes/'+appConfig.themeName+'/'+appConfig.dashboard.folderName+'/partials/**/*.html',
                index: 'themes/'+appConfig.themeName+'/'+appConfig.dashboard.folderName+'/index.html'
            },
            dest: {
                script: 'public/ui/'+appConfig.dashboard.folderName+'/js/',
                style: 'public/ui/'+appConfig.dashboard.folderName+'/css/',
                partials: 'public/ui/'+appConfig.dashboard.folderName+'/partials/',
                index: 'resources/views/'+appConfig.dashboard.folderName+'/'
            }
        },
        landingPage:{
            src:{
                scripts: 'themes/'+appConfig.themeName+'/'+appConfig.landingPage.folderName+'/app/**/*.js',
                styles: 'themes/'+appConfig.themeName+'/'+appConfig.landingPage.folderName+'/styles/**/*.scss',
                partials: 'themes/'+appConfig.themeName+'/'+appConfig.landingPage.folderName+'/partials/**/*.html',
                index: 'themes/'+appConfig.themeName+'/'+appConfig.landingPage.folderName+'/index.html'
            },
            dest: {
                script: 'public/ui/'+appConfig.landingPage.folderName+'/js/',
                style: 'public/ui/'+appConfig.landingPage.folderName+'/css/',
                partials: 'public/ui/'+appConfig.landingPage.folderName+'/partials/',
                index: 'resources/views/'
            }
        },
        public:{
          landingPage:'public/ui/'+appConfig.landingPage.folderName+'/dist',
          dashboard: 'public/ui/'+appConfig.dashboard.folderName+'/dist'  
        },
        common: {
            baseBower: 'themes/'+appConfig.themeName,
            bowerDir: 'themes/'+appConfig.themeName+'/bower_components',
            bower: ['themes/'+appConfig.themeName+'/bower.json', 'themes/'+appConfig.themeName+'/.bowerrc'],
            sassConfig: {
                includePaths: [
                    'themes/'+appConfig.themeName+'/bower_components' + '/bootstrap-sass-official/assets/stylesheets',
                    'themes/'+appConfig.themeName+'/bower_components' + '/Materialize/sass',
                    'themes/'+appConfig.themeName+'/bower_components' + '/fontawesome/scss'
                ]
            }
        }
    };
  };
};

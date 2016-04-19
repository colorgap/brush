var bowyerApp;
(function() {
    'use strict';
    bowyerApp = angular.module('bowyer',
        [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'LocalStorageModule'
        ]
    );
})();
(function() {
    'use strict';
    var routeConfig = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider','$httpProvider',
        function($stateProvider, $urlRouterProvider, localStorageServiceProvider,$httpProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'bowyer-ui/dashboard/partials/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: 'login'
                })
                .state('logout', {
                    url: '/logout',
                    controller: 'logoutCtrl',
                    controllerAs: 'logout'
                })
                .state('forgotPassword', {
                    url: '/forgotPassword',
                    templateUrl: 'bowyer-ui/dashboard/partials/forgotPassword/forgotPassword.html',
                    controller: 'forgotPasswordCtrl',
                    controllerAs: 'forgotPassword'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'bowyer-ui/dashboard/partials/register/register.html',
                    controller: 'registerCtrl',
                    controllerAs: 'register'
                })
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/dashboard.html',
                    controller: 'dashboardCtrl',
                    controllerAs: 'dashboard'
                })
                .state('dashboard.alerts', {
                    url: 'alerts',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/alerts/alerts.html'
                })
                .state('dashboard.users', {
                    url: 'users',
                    controller: 'usersCtrl',
                    controllerAs: 'users',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/users.html'
                })
                .state('dashboard.profile', {
                    url: 'profile',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/profile/profile.html',
                    controller: 'profileCtrl',
                    controllerAs: 'profile'
                })
                .state('dashboard.resetPassword', {
                    url: 'resetPassword',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/resetPassword/resetPassword.html',
                    controller: 'resetPasswordCtrl',
                    controllerAs: 'resetPassword'
                })
                .state('dashboard.api', {
                    url: 'api',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/api/api.html'
                })
                .state('dashboard.config', {
                    url: 'config',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/config.html',
                    controller: 'configCtrl',
                    controllerAs: 'config'
                })
                .state('dashboard.config.roles', {
                    url: '/roles',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/config/roles/roles.html',
                    controller: 'rolesCtrl',
                    controllerAs: 'roles'
                })
                .state('dashboard.healthcheck', {
                    url: 'healthcheck',
                    templateUrl: 'bowyer-ui/dashboard/partials/dashboard/healthcheck/healthcheck.html',
                    controller: 'healthCheckCtrl as vm'
                });
            $urlRouterProvider.otherwise('/login');
            localStorageServiceProvider.setPrefix('bowyer');
            $httpProvider.interceptors.push('tokenInjector');
        }];
        
    bowyerApp.config(routeConfig);
})();
(function() {
    'use strict';
    var runBlock = ['$http', '$rootScope', '$state', 'localStorageService','$uibModalStack',
    function ($http, $rootScope, $state, localStorageService,$uibModalStack) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            if(toState.name!=='login'){
                if(!localStorageService.get('user')){
                    $state.go('login');
                }
            }
            $uibModalStack.dismissAll();
        });
    }];
    bowyerApp.run(runBlock);
})();

(function() {
  'use strict';
  bowyerApp.controller('dashboardCtrl', ['commonFactory','$state',function(commonFactory,$state){
      var dashboard = this;
      dashboard.user = commonFactory.getUser();
      if(!dashboard.user){
          $state.go('login');
      }
  }]);
})();
/**
 * Author: Color][gap
 * Description: Forgot Password controller
 */
(function() {
    'use strict';
    bowyerApp.controller('forgotPasswordCtrl', ['api','url','constants',
        function(api, url, constants) {
            var forgotPassword = this;
            forgotPassword.validateAndSendMeLink = function() {
                var forgotPasswordCallConfig = {
                    url: url.forgotPassword,
                    data: {
                        username: forgotPassword.username
                    },
                    method: constants.method.post
                };
                api.executeCall(forgotPasswordCallConfig, function(response){
                    forgotPassword.forgotPasswordError = response.data;
                    forgotPassword.username = '';
                }, function(err){
                    forgotPassword.error = err.data;
                })
            };
        }]);
})();
/**
 * Author: Color][gap
 * Description: Login controller
 */
(function() {
    'use strict';
    bowyerApp.controller('loginCtrl', ['api', '$state','$stateParams', 'localStorageService', 'loginFactory',
        function(api, $state,$stateParams, localStorageService, loginFactory) {
            var login = this;
            login.loginError = loginFactory.logoutMessage;
            login.validateLogin = function() {
                login.error = {};
                login.loginError = false;
                api.executeCall(loginFactory.login(login),function(res) {
                    if (res.data.api_token) {
                        localStorageService.set('user', res.data);
                        $state.go('dashboard');
                    } else {
                        login.loginError = res.data.message;
                    }
                }, function(err){
                    login.error = err.data;
                });
            };
        }]);
})();
(function() {
    'use strict';
    bowyerApp.factory('loginFactory', ['constants','url',function(constants,url) {
        return {
            login: function(login) {
                return {
                    url: url.login,
                    data: {
                        username: login.username,
                        password: login.password
                    },
                    method: constants.method.post
                };
            },
            logout: function() {
                return {
                    url: url.logout
                };
            }
        };
    }]);
})();

/**
 * Author: Color][gap
 * Description: Logout controller
 */
(function() {
    'use strict';
    bowyerApp.controller('logoutCtrl', ['api', '$state', 'loginFactory','localStorageService','constants',
        function(api, $state, loginFactory,localStorageService, constants) {
            api.executeCall(loginFactory.logout(), function(res) {
                loginFactory.logoutMessage = constants.logoutMessages.regularLogout;
                localStorageService.clearAll();
                $state.go('login');
            });
        }]);
})();
(function() {
    'use strict';
    bowyerApp.controller('registerCtrl', ['api', '$state', 'localStorageService', 'constants', 'url',
        function(api, $state, localStorageService, constants, url) {
            var register = this;
            register.validateRegister = function(isValid) {
                register.registerError = false;
                if (register.formData) {
                    var registerCallConfig = {
                        url: url.register,
                        data: {
                            username: register.formData.username,
                            email: register.formData.email,
                            password: register.formData.password,
                            name: ''
                        },
                        method: constants.method.post
                    };
                    api.executeCall(registerCallConfig, 
                    function(res) {
                        if (res.data.user_id) {
                            register.registerError = {
                                message: 'User has been created.',
                                type: 'success'
                            };
                            register.formData = {};
                        } else {
                            register.registerError = res.data;
                        }
                    }, function(err) {
                        register.error = err.data;
                    });
                }else {
                    register.error = {
                        username: true,
                        email: true,
                        password: true
                    };
                }
            };
        }]);
})();
(function() {
    'use strict';
    bowyerApp.factory('api', ['$http', 'constants', '$state', 'localStorageService','loginFactory',
        function($http, constants, $state, localStorageService,loginFactory) {
            var gotoLogin = function(err){
                localStorageService.clearAll();
                loginFactory.logoutMessage = constants.logoutMessages.loggedoutDueError[err.status];
                $state.go('login');
            };
            var failureHandler = function(err,failureCallback){
                if (err.status === 401) {
                    gotoLogin(err);
                } else if(failureCallback){
                    failureCallback(err);
                } else{
                    gotoLogin(err);
                }
            };
            return {
                executeCall: function(config, successCallback, failureCallback) {
                    if (config.method === constants.method.post) {
                        return $http.post(config.url, config.data).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else if (config.method === constants.method.delete) {
                        return $http.delete(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    } else {
                        return $http.get(config.url).then(successCallback, function(err) {
                            failureHandler(err,failureCallback);
                        });
                    }
                }
            };
        }]);
})();

(function() {
    'use strict';
    bowyerApp.factory('commonFactory', ['api', 'localStorageService','url',
    function(api,localStorageService, url) {
        var getReferenceData = function(config,success){
            api.executeCall(config,success);
        };
        return {
            getRoles: function(success) {
                getReferenceData({url: url.reference.roles},success);
            },
            getAdminRoles: function(success) {
                getReferenceData({url: url.admin.roles},success);
            },
            getUser: function(){
                return localStorageService.get('user');
            }
        };
    }]);
})();

(function() {
  'use strict';
  bowyerApp.factory('constants', [function(){
      return {
          method: {
              post: 'POST',
              delete: 'DELETE',
              get: 'GET'
          },
          logoutMessages: {
              regularLogout: 'You have logout successfully.',
              loggedoutDueError: {
                  401: 'You are not authorize to access. Please contact support.',
                  500: 'System error. Please contact support.',
                  404: 'Resource not found. Please contact support.'
              }
          }
      };
  }]);
})();

(function() {
    'use strict';
    bowyerApp.factory('tokenInjector', ['localStorageService',function(localStorageService) {
        var tokenInjector = {
            request: function(config) {
                if(localStorageService.get('user')){
                    config.headers['apitoken'] = localStorageService.get('user').api_token;
                }
                return config;
            }
        };
        return tokenInjector;
    }]);
})();

(function() {
    'use strict';
    bowyerApp.factory('url', [function() {
        return {
            login: '/api/login',
            logout: '/api/logout',
            register: '/api/register',
            forgotPassword: '/api/forgotPassword',
            reference: {
                roles: '/api/reference/roles'
            },
            admin:{
                addUser: '/api/admin/addUser',
                users: '/api/admin/users',
                user: '/api/admin/user/',
                updateUser: '/api/admin/updateUser',
                apiHealthCheck: '/api/healthCheck/apiCheck',
                dbHealthCheck: '/api/healthCheck/dbCheck',
                roles: 'api/admin/roles'
            },
            user:{
                me: '/api/user/me',
                resetPassword:'/api/user/resetPassword'
            }
        };
    }]);
})();
(function() {
  'use strict';
  bowyerApp.controller('configCtrl', ['$scope',function($scope){

  }]);
})();
(function() {
    'use strict';
    bowyerApp.controller('healthCheckCtrl', ['api', 'localStorageService', 'healthCheckFactory',
        function(api, localStorageService, healthCheckFactory) {
            var vm = this;
            vm.api = healthCheckFactory.initial;
            vm.db = healthCheckFactory.initial;
            vm.ls = healthCheckFactory.initial;
            api.executeCall(healthCheckFactory.apiCheckConfig, function(response) {
                vm.api = healthCheckFactory.success;
            }, function() {
                vm.api = healthCheckFactory.failed;
            });
            api.executeCall(healthCheckFactory.dbCheckConfig, function(response) {
                vm.db = healthCheckFactory.success;
                if (response.data.api_token === localStorageService.get('user').api_token) {
                    vm.ls = healthCheckFactory.success;
                } else {
                    vm.ls = healthCheckFactory.failed;
                }
            }, function() {
                vm.db = healthCheckFactory.failed;
                vm.ls = healthCheckFactory.failed;
            });
        }]);
})();

(function() {
    'use strict';
    bowyerApp.factory('healthCheckFactory', ['url',function(url) {
        return {
            initial: {
                checkValue: 0,
                checkMessage: 'checking ...',
                type: 'warning'
            },
            success: {
                checkValue: 100,
                checkMessage: 'Healthy',
                checkPass: true,
                type: 'success'
            },
            failed: {
                checkValue: 100,
                checkMessage: 'Failed',
                type: 'danger'
            },
            apiCheckConfig: {
                url: url.admin.apiHealthCheck
            },
            dbCheckConfig: {
                url: url.admin.dbHealthCheck
            }
        };
    }]);
})();

(function() {
    'use strict';
    bowyerApp.controller('profileCtrl', ['api', 'constants','commonFactory','url', 
    function(api, constants,commonFactory, url) {
        var profile = this;
        var profileCallConfig = {
            url: url.user.me
        };
        api.executeCall(profileCallConfig,function(response) {
            profile.user = response.data;
        });

        profile.validateAndSave = function() {
            profileCallConfig.method = constants.method.post;
            profileCallConfig.data = profile.user;
            api.executeCall(profileCallConfig,function(response) {
                if(response.data.user_id){
                    profile.profileError = {type:'success',message:'Profile updated successfully.'};
                }
            },function(err){
                profile.error = err.data;
            });
        };
    }]);
})();
(function() {
    'use strict';
    bowyerApp.controller('resetPasswordCtrl', ['api', 'constants', 'url',function(api, constants, url) {
        var resetPassword = this;
        resetPassword.validateAndSave = function() {
            resetPassword.error = {};
            if (resetPassword.formData) {
                if (resetPassword.formData.newPassword && resetPassword.formData.newPassword !=='' && resetPassword.formData.newPassword === resetPassword.formData.confirmPassword) {
                    var resetPasswordCallConfig = {
                        url: url.user.resetPassword,
                        method: constants.method.post,
                        data: resetPassword.formData
                    };
                    api.executeCall(resetPasswordCallConfig,function(response) {
                        resetPassword.resetPasswordError = response.data;
                        if (resetPassword.resetPasswordError.type === 'success') {
                            resetPassword.formData = {};
                        } else {
                            resetPassword.error.password = true;
                        }
                    },function(err){
                        resetPassword.error = err.data;
                    });
                } else {
                    resetPassword.error = {
                        newPassword: true,
                        confirmPassword: true
                    };
                }
            } else {
                resetPassword.error = {
                    password: true,
                    newPassword: true,
                    confirmPassword: true
                };
            }
        };
    }]);
})();
(function() {
    'use strict';
    bowyerApp.controller('usersCtrl', ['api', 'constants', '$uibModal','url', 
    function(api, constants, $uibModal, url) {
        var users = this;
        var usersCallConfig = {
            url: url.admin.users
        };
        api.executeCall(usersCallConfig,function(response) {
            users.users = response.data;
        });

        /** Delete a user */
        users.deleteUser = function(user) {
            user.deleteInitiated = true;
            var deleteUserCallConfig = {
                url: url.admin.user + user.user_id,
                method: constants.method.delete
            };
            api.executeCall(deleteUserCallConfig,function(response) {
                if (response.data.type === 'success') {
                    user.deleted = 'Y';
                }
            });
        };
        /** Edit User */
        users.editUser = function(user) {
            var modalInstance = $uibModal.open({
                templateUrl: 'bowyer-ui/dashboard/partials/dashboard/users/addEditUser/addEditUser.html',
                controller: 'addEditUserCtrl',
                controllerAs: 'addEditUser',
                resolve: {
                    config: function() {
                        if (user) {
                            return {
                                title: 'Edit User',
                                user: user,
                                type: 'edit'
                            };
                        } else {
                            return {
                                title: 'Add User',
                                type: 'add'
                            };
                        }

                    }
                }
            });
            modalInstance.result.then(function(updateUser) {
                if(updateUser.config.type==='add'){
                    users.users.push(updateUser.user);
                }
            }, function() {

            });
        };
    }]);
})();

(function() {
  'use strict';
  bowyerApp.directive('bowyerLogo', function(){
      return {
          restrict: 'EA',
          template: '<span>bow</span><span style="color:#F39C12">yer</span>'
      };
  });
})();
(function() {
    'use strict';
    bowyerApp.controller('rolesCtrl', ['api', 'commonFactory', function(api, commonFactory) {
        var roles = this;
        commonFactory.getAdminRoles(function(response){
            roles.roles = response.data;
        });
    }]);
})();
(function() {
    'use strict';
    bowyerApp.controller('addEditUserCtrl', ['$uibModalInstance', 'api', 'constants', 'commonFactory', 'config', 'url',
        function($uibModalInstance, api, constants, commonFactory, config, url) {
            var addEditUser = this;
            commonFactory.getRoles(function(response) {
                addEditUser.roles = response.data;
            });
            addEditUser.config = config;
            addEditUser.user = config.user;
            var profileCallConfig = {
                url: url.admin.updateUser
            };
            addEditUser.validateAndSave = function() {
                if(addEditUser.config.type==='add'){
                    profileCallConfig.url = url.admin.addUser;
                }
                profileCallConfig.method = constants.method.post;
                profileCallConfig.data = addEditUser.user;

                api.executeCall(profileCallConfig,function(response) {
                    if (response.data.user_id) {
                        addEditUser.user = response.data;
                        $uibModalInstance.close(addEditUser);
                    }else{
                        addEditUser.addEditUserError = response.data;
                    }
                },function(err){
                    addEditUser.error = err.data;
                });
            };
            addEditUser.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
})();
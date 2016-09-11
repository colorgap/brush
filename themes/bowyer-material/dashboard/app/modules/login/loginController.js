/**
 * Author: Color][gap
 * Description: Login controller
 */
(function () {
    'use strict';
    bowyerApp.controller('loginCtrl', ['$scope','$state', '$stateParams','$timeout', '$mdSidenav', '$log',
        function ($scope,$state, $stateParams, $timeout, $mdSidenav, $log) {
            var login = this;
            //login.loginError = loginFactory.logoutMessage;
            login.validateLogin = function () {
                login.error = {};
                login.loginError = false;
                /*api.executeCall(loginFactory.login(login),function(res) {
                    if (res.data.api_token) {
                        localStorageService.set('user', res.data);
                        $state.go('dashboard');
                    } else {
                        login.loginError = res.data.message;
                    }
                }, function(err){
                    login.error = err.data;
                });*/
            };
            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.toggleRight = buildToggler('right');
            $scope.isOpenRight = function () {
                return $mdSidenav('right').isOpen();
            };

            /**
             * Supplies a function that will continue to operate until the
             * time is up.
             */
            function debounce(func, wait, context) {
                var timer;

                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function () {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildDelayedToggler(navID) {
                return debounce(function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 200);
            }

            function buildToggler(navID) {
                return function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }
            }
        }])
        .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

            };
        })
        .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };
        });
})();
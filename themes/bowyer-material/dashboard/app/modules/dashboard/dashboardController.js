(function () {
    'use strict';
    app.controller('dashboardCtrl', ['commonFactory', '$state', 'github', 'constants', 'api', 'url','$scope','$timeout', '$mdSidenav', '$log',
        function (commonFactory, $state, github, constants, api, url,$scope,$timeout, $mdSidenav, $log) {
            var dashboard = this;
            dashboard.collapsibleOptions = {
                accordion: false
            };
            github.getGithubData().then(function (repos) {
                dashboard.github = repos.find(function (repo) {
                    return repo.name === constants.app;
                });
            });
            var profileCallConfig = {
                url: url.user.me
            };
            api.executeCall(profileCallConfig, function (response) {
                dashboard.user = response.data;
            });
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
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

            };
            $scope.drawer = function () {
                // Component lookup should always be available since we are not using `ng-if`
                console.log($mdSidenav('left'));
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

            };
            $scope.rightclose = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };
        }]);
})();
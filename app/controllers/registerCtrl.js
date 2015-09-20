/**
 * Created by Eric Barb on 9/18/2015.
 */

(function () {
    angular
        .module('app')
        .controller('registerCtrl', function($scope, Auth, $location, Data){
            console.log("Hello from the Register Controller");

            $scope.register = function (reginfo) {
                $scope.err = null;
                Auth.$createUser(reginfo)
                    .then(function() {
                        return Auth.$authWithPassword(reginfo);
                    })
                    .then(function(user) {
                        var uid = user.uid,
                            userData = Data.getObject(['users', uid]);

                        userData.$loaded()
                            .then(function () {
                                userData.email = $scope.reginfo.email;
                                userData.first = $scope.reginfo.first;
                                userData.$save();
                            })
                    })
                    .then(function() {
                        $location.path('/welcome');
                    },
                    function(err) {
                        $scope.err = errMessage(err);
                    });
            }

            function errMessage(err) {
                return angular.isObject(err) && err.code? err.code : err + '';
            }
        })
})();
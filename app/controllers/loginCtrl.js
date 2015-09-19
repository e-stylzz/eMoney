/**
 * Created by Eric Barb on 9/18/2015.
 */

(function () {
    angular
        .module('app')
        .controller('loginCtrl', function($scope, Auth, $location){
            console.log("Hello from the Login Controller");

            $scope.auth = Auth;

            $scope.auth.$onAuth(function(authData) {
                $scope.authData = authData;
            });

            $scope.login = function (logininfo) {
                Auth
                    .$authWithPassword(logininfo)
                    .then(function(authData) {
                        console.log("Login success! Logged in as : ", authData.uid);
                        $location.path('/home');
                    })
                    .catch(function (error) {
                        $scope.err = error;
                        console.log("Authentication failed: ", error);
                        $location.path('/login')
                    })
            }
        })
})();
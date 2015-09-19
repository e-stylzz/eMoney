/**
 * Created by Eric Barb on 9/18/2015.
 */

(function () {
    angular
        .module('app')
        .controller('registerCtrl', function($scope, ref){
            console.log("Hello from the Register Controller");

            $scope.register = function (reginfo) {
                ref.createUser({
                    email : $scope.reginfo.email,
                    password : $scope.reginfo.password
                }, function(error, userData) {
                    if (error) {
                        console.log("Error creating user: ", error);
                    } else {
                        console.log("Boom! ", userData.uid);
                    }
                })
            }
        })
})();
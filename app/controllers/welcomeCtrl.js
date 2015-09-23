/**
 * Created by Eric Barb on 9/20/2015.
 */

(function () {
    angular
        .module('app')
        .controller('welcomeCtrl', function($scope, $rootScope){
            console.log("Hello from the Welcome Controller");
            $scope.first = $rootScope.first;
            console.log("First Name: ", $rootScope.first);
        })
})();
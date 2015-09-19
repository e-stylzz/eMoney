/**
 * Created by Eric Barb on 9/19/2015.
 */

(function () {
    angular
        .module('app')
        .factory('Auth', function(ref, $firebaseAuth){
            console.log("Hello from the Auth Service");
            return $firebaseAuth(ref);
        })
})();
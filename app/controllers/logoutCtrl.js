/**
 * Created by Eric Barb on 9/19/2015.
 */

(function () {
    angular
        .module('app')
        .controller('logoutCtrl', function(Auth) {
            console.log("Hello from the Logout Controller");
            Auth.$unauth()
        })
});

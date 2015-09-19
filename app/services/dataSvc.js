/**
 * Created by Eric Barb on 9/19/2015.
 */

(function () {
    angular
        .module('app')
        .service('Data', function(ref, $firebaseObject, $firebaseArray){
            console.log("Hello from the Data Service");
            return {
                getObject: function (type) {
                    if (typeof type !== "string")
                        type = type.join('/');
                    return $firebaseObject(ref.child(type));
                },

                getArray: function (type) {
                    if (typeof type !== "string")
                        type = type.join('/');
                    return $firebaseArray(ref.child(type));
                }
            }
        })
})();
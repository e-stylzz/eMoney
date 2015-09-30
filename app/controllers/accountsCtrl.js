/**
 * Created by Eric Barb on 9/18/2015.
 */

(function () {
    angular
        .module('app')
        .controller('accountsCtrl', function($scope, Auth, Data){
            console.log("Hello from the Accounts Controller");

            var authData = Auth.$getAuth(),
                accounts = Data.getArray(['accounts', authData.uid]);

            $scope.accounts = accounts;

            $scope.addAccount = function (account) {
                account.balance = (account.balance * 100);
                accounts.$add(account).then(function () {
                    account.balance = "";
                    account.name = "";
                    console.log("Account Added");
                })
            }
        })
})();
/**
 * Created by Eric Barb on 9/20/2015.
 */

(function () {
    angular
        .module('app')
        .controller('categoriesCtrl', function($scope, Auth, Data){
            console.log("Hello from the Categories Controller");

            var authData = Auth.$getAuth(),
                incomeCategories = Data.getArray(['categories', authData.uid, 'income']),
                expenseCategories = Data.getArray(['categories', authData.uid, 'expense']);

            $scope.expenseCategories = expenseCategories;
            $scope.incomeCategories = incomeCategories;


            console.log("Expense Cats: ", expenseCategories);
            $scope.addIncomeCategory = function(incomeCat) {
                incomeCategories.$add(incomeCat);
                $scope.incomeCat.category = "";
            };

            $scope.addExpenseCategory = function(expenseCat) {
                expenseCategories.$add(expenseCat);
                $scope.expenseCat.category = "";
            };
        })
})();
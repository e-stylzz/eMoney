/**
 * Created by Eric Barb on 9/17/2015.
 */
(function () {

    angular
        .module('app')
        .config(config)
        .constant("ref", new Firebase("https://emoney2.firebaseio.com"))
        .constant("version", "0.0.1")
        .run(function($rootScope, $state, Auth) {
            $rootScope.$state = $state;

            $rootScope.$on("$stateChangeError", function (event, to, toParams, from, fromParams, error) {
                if (error === "AUTH_REQUIRED") {
                    $state.go("login");
                }
            });

            $rootScope.$on("$stateChangeStart", function (ev, to, toParams, from, fromParams) {
                $rootScope.previousState = from.name;
                $rootScope.currentState = to.name;

                if ($rootScope.previousState == '' && !$rootScope.TESTY) {
                    $rootScope.TESTY = to;
                } else {
                    $rootScope.toState = to;
                    $rootScope.toStateParams = toParams;
                }
            });

            Auth.$onAuth(function(user) {
                $rootScope.loggedIn = !!user;
                $rootScope.auth = Auth;
            })
        });

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/partials/home.html',
                controller: 'homeCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/partials/register.html',
                controller: 'registerCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/partials/login.html',
                controller: 'loginCtrl'
            })
            .state('account', {
                url: '/account',
                templateUrl: 'app/partials/account.html',
                controller: 'accountCtrl'
            })
            .state('accounts', {
                url: '/accounts',
                templateUrl: 'app/partials/accounts.html',
                controller: 'accountsCtrl'
            })
            .state('logout', {
                url: '/logout',
                templateUrl: 'app/partials/logout.html'
            })
            .state('reset', {
                url: '/reset',
                templateUrl: 'app/partials/reset.html',
                controller: 'resetCtrl'
            })
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/partials/welcome.html',
                controller: 'welcomeCtrl'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'app/partials/categories.html',
                controller: 'categoriesCtrl'
            });
    }
})();
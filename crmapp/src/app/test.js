var applog = angular.module('myApp',['ngRoute']);

applog.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl : 'app.component.html',
            controller : 'HomeController'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'LoginController'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);

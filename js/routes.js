angular.module('Routing')

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    $routeProvider
    .when('/', {
        templateUrl:'templates/main.html',
        controller: 'MainCtrl'
    })
    .when('/details/:celebId', {
        templateUrl:'templates/details.html',
        controller: 'DetailsCtrl'
    })
    .otherwise({redirectTo: '/'});
    console.log('running config');
});
'use strict';

angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider){
    $routeProvider.when('/', {
        controller : 'AnimalsController',
        templateUrl : '../views/animals.html'
    }).when('/fruitveg',{
        controller : 'FruitVegController',
        templateUrl : '../views/fruitveg.html'
    }).otherwise({
        redirectTo : '/'
    });
});
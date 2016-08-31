angular.module('app')
    .factory('animals', ['$http', AnimalsService]);

function AnimalsService($http) {
    return $http.get('http://adweb.agency/interview/api/animals');
}
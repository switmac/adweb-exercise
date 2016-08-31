angular.module('app')
    .factory('fruitveg', ['$http', FruitVegService]);

function FruitVegService($http) {
    return $http.get('http://adweb.agency/interview/api/fruitveg');
}

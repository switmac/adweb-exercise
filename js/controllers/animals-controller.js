angular.module('app')
    .controller('AnimalsController', ['$scope', 'animals', 'modal', AnimalsController]);

function AnimalsController($scope, animals, modal) {

    animals.then(function (payload) {
        $scope.animals = JSON.parse(payload.data);
    }, function (err) {
        $scope.animals = err;
    });

    $scope.show = function (animal) {
        modal.toggle();
        modal.setData(animal);
    }
}
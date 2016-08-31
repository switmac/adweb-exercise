angular.module('app')
    .controller('FruitVegController', ['$scope', 'fruitveg', 'modal', FruitVegController]);

function FruitVegController($scope, fruitveg, modal) {
    fruitveg.then(function (payload) {
        $scope.plants = JSON.parse(payload.data);
    }, function (err) {
        $scope.plants = err;
    });

    $scope.show = function (plant) {
        modal.toggle();
        modal.setData(plant);
    }
}
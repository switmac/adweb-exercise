angular.module('app')
    .controller('NavController', [ '$scope', '$location' ,NavigationController]);

function NavigationController($scope, $location){
    $scope.go = function (view) {
        $location.path(view);
    }

    $scope.getClass = function (view) {
        return $location.path() == view ? 'active' : null;
    }
}
angular.module('app')
    .controller('ModalController', ['$scope', 'Modal', ModalController]);

function ModalController($scope, Modal) {
    $scope.img = 'img/loading.gif';
    $scope.show = Modal.value;

    document.addEventListener('keydown', function (event) {
        if ($scope.show && event.key == 'Escape') {
            $scope.$apply(function () {
                $scope.close();
            });
        }
    });

    $scope.close = function () {
        Modal.value = false;
    }


    $scope.$watch(function () {
        return Modal.value;
    }, function (newVal, oldVal) {
        $scope.show = newVal;
        if (!newVal) {
            $scope.img = 'img/loading.gif';
        }
    }, true);

    $scope.$watch(function () {
        return Modal.data;
    }, function (newVal, oldVal) {
        $scope.img = newVal.ImageURLs == undefined ? 'img/loading.gif' : newVal.ImageURLs.FullSize;
        $scope.data = newVal;
    }, true);
} 
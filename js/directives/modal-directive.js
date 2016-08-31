angular.module('app')
    .directive('modal', ModalDirective);

function ModalDirective() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/modal.html'
    };
}

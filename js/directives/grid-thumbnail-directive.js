angular.module('app')
    .directive('gridThumbnail', GridThumbnailDirective);

function GridThumbnailDirective() {
    return {
        restrict: 'E',
        scope: {
            item : '='
        },
        templateUrl: 'js/directives/grid-thumbnail.html'
    };
}
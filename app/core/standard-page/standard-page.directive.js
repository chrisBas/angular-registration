angular.module('core.standard-page')
    .directive('standardPage', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'core/standard-page/standard-page.template.html'
        }
    })
angular.module('core.standard-page')
    .directive('standardPage', [ 'PageService',
        function(PageService) {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'core/standard-page/standard-page.template.html',
                compile: function(element, attr) {
                    return {
                        pre: function(scope, elem, att) {
                            $(elem).find(".page-frame").addClass(PageService.currentDirectionRight ? "inLeft" : "inRight")
                            console.log('pre')
                        }
                    }
                }
            }
        }   
])
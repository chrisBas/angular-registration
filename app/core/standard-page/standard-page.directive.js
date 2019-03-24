angular.module('core.standard-page')
    .directive('standardPage', ['PageService',
        function(PageService) {
            var self = this

            self.prevPage = function(callback) {
                if(typeof callback === "function") {
                    if(callback()) {
                        PageService.prev()
                    }
                } else {
                    PageService.prev()
                }                
            }
            self.nextPage = function(callback) {
                if(typeof callback === "function") {
                    if(callback()) {
                        PageService.next()
                    }
                } else {
                    PageService.next()
                }   
            }

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'core/standard-page/standard-page.template.html',
                scope: {
                    'onNext': '=',
                    'onPrev': '=',
                    'onSubmit': '=',
                    'title': '='
                },
                compile: function(element, attr) {
                    return {
                        pre: function(scope, elem, att) {
                            var directions = PageService.directions();

                            $(elem).find(".page-frame").addClass(PageService.currentDirectionRight ? "inLeft" : "inRight")
                            scope.hasNext = directions.next;
                            scope.hasPrev = directions.prev;
                            scope.nextPage = self.nextPage
                            scope.prevPage = self.prevPage
                        }
                    }
                }
            }
        }   
])
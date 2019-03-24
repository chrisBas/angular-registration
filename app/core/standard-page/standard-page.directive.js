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
                            
                            

                           
                        },
                        post: function(scope, elem, att) {
                            // add 'enter' listener on all inputs
                            $(".page-frame input").on('keypress',function(e) {
                                if(e.which == 13) {
                                    $('#next-btn').click()
                                }
                            });
                            // focus on the first input (if present)
                            $(elem).find(".page-frame").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                                var firstInput = $((".page-frame input:first")).focus()
                            })
                        }
                    }
                }
            }
        }   
])
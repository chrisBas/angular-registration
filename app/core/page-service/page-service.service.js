angular.module('core.page-service')
    .factory('PageService', [ '$route', '$location',
        function($route, $location) {
            var self = {
                routes: ['registration', 'username'],
                next: function() {
                    var current = $location.path().replace("/", "");
                    var found = false;

                    for(var i=0; i < self.routes.length; i++) {
                        if(found) {
                            $location.path("/" + self.routes[i])
                            return;
                        } else {
                            if(self.routes[i] == current) {
                                found = true;
                            }
                        }
                    }

                    if(found) {
                        console.error("there are no pages after " + current)
                    } else {
                        console.error(current + " is not maintained by PageService")
                    }
                    return;
                },
                prev: function() {
                    var current = $location.path().replace("/", "");
                    var found = false;

                    for(var i=self.routes.length-1; i >= 0; i--) {
                        if(found) {
                            $location.path("/" + self.routes[i])
                            return;
                        } else {
                            if(self.routes[i] == current) {
                                found = true;
                            }
                        }
                    }

                    if(found) {
                        console.error("there are no pages before " + current)
                    } else {
                        console.error(current + " is not maintained by PageService")
                    }
                    return;                }
            }
            return self;
        }
])
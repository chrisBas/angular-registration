angular.module('core.page-service')
    .factory('PageService', ['$location',
        function($location) {
            var self = {
                routes: ['registration', 'username', 'password', 'confirm-password', 'confirmation'],
                currentDirectionRight: false,
                next: function() {
                    var current = $location.path().replace("/", "");
                    var found = false;

                    for(var i=0; i < self.routes.length; i++) {
                        if(found) {
                            self.currentDirectionRight = false
                            $location.path(self.routes[i])
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
                            self.currentDirectionRight = true
                            $location.path(self.routes[i])
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
                    return;                
                },
                directions: function() {
                    var current = $location.path().replace("/", "");
                    var idx = -1;

                    for(var i=0; i < self.routes.length; i++) {
                        if(self.routes[i] == current) {
                            idx = i;
                            break;
                        }
                    }

                    return {
                        next: idx < self.routes.length-1,
                        prev: idx > 0
                    }
                },
                relativeLocation: function() {
                    var locations = []
                    var current = $location.path().replace("/", "");

                    for(var i=0; i < self.routes.length; i++) {
                        locations.push(self.routes[i] == current)
                    }
                    return locations
                }
            }
            return self;
        }
])
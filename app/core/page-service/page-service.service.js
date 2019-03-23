angular.module('core.page-service')
    .factory('PageService', [
        function() {
            var self = {
                next: function() {
                    console.log('next')
                },
                prev: function() {
                    console.log('prev')
                }
            }
            return self;
        }
])
angular.module('core.registration-service')
    .factory('RegistrationService', [
        function() {
            var self = {
                username: '',
                password: ''
            }
            return self;
        }
])
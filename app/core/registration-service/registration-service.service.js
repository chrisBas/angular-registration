angular.module('core.registration-service')
    .factory('RegistrationService', [
        function() {
            var registration = {
                username: '',
                password: '',
                confirmPassword: ''
            }
            return {
                setUsername: function(username) {
                    registration.username = username;
                },
                setPassword: function(password) {
                    registration.password = password;
                },
                setConfirmPassword: function(password) {
                    registration.confirmPassword = password;
                },
                getUsername() {
                    return registration.username;
                },
                getPassword() {
                    return registration.password;
                },
                getConfirmPassword() {
                    return registration.confirmPassword;
                }
            };
        }
])
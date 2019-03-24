angular.module('core.registration-service')
    .factory('RegistrationService', [
        function() {
            var registration = {
                username: '',
                password: '',
                confirmPassword: ''
            }

            if(localStorage.registrationUserStorage) {
                registration = JSON.parse(localStorage.registrationUserStorage);
            } else {
                updateLocalStorage()
            }

            function updateLocalStorage() {
                localStorage.registrationUserStorage = JSON.stringify(registration);
            }
            
            
            return {
                setUsername: function(username) {
                    registration.username = username;
                    updateLocalStorage()
                },
                setPassword: function(password) {
                    registration.password = password;
                    updateLocalStorage()
                },
                setConfirmPassword: function(password) {
                    registration.confirmPassword = password;
                    updateLocalStorage()
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
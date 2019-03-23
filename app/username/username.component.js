angular.module('username')
    .component('username', {
        templateUrl: 'username/username.template.html',
        controller: [ 'RegistrationService',
            function UsernameComponent(RegistrationService) {
                var self = this;
                self.username = RegistrationService.username

                self.updateUsername = function() {
                    RegistrationService.username = self.username
                }
            }
        ]
    })
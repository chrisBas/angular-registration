angular.module('password')
    .component('password', {
        templateUrl: 'password/password.template.html',
        controller: [ 'RegistrationService',
            function PasswordComponent(RegistrationService) {
                var self = this;
                self.password = RegistrationService.password;

                self.updatePassword = function()  {
                    RegistrationService.password = self.password;
                }
                
            }
        ]
    })
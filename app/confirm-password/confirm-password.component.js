angular.module('confirm-password')
    .component('confirmPassword', {
        templateUrl: 'confirm-password/confirm-password.template.html',
        controller: [ 'RegistrationService',
            function ConfirmPasswordComponent(RegistrationService) {
                var self = this;
                self.confirmPassword = RegistrationService.confirmPassword;

                self.updateConfirmPassword = function()  {
                    RegistrationService.confirmPassword = self.confirmPassword;
                }
                
            }
        ]
    })
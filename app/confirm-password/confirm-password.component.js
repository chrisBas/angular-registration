angular.module('confirm-password')
    .component('confirmPassword', {
        templateUrl: 'confirm-password/confirm-password.template.html',
        controller: [ 'RegistrationService',
            function ConfirmPasswordComponent(RegistrationService) {
                var self = this;
                var message = "passwords do not match"

                self.confirmPassword = RegistrationService.confirmPassword;
                self.errorMsg = ""

                self.updateConfirmPassword = function()  {
                    RegistrationService.confirmPassword = self.confirmPassword;
                    self.errorMsg = ""
                }

                self.next = function() {
                    if(RegistrationService.confirmPassword != RegistrationService.password) {
                        self.errorMsg = message
                        return false;
                    }
                    return true;
                }
            }
        ]
    })
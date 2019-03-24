angular.module('confirm-password')
    .component('confirmPassword', {
        templateUrl: 'confirm-password/confirm-password.template.html',
        controller: [ 'RegistrationService',
            function ConfirmPasswordComponent(RegistrationService) {
                var self = this;
                var message = "passwords do not match"

                self.confirmPassword = RegistrationService.getConfirmPassword();
                self.errorMsg = ""

                self.updateConfirmPassword = function()  {
                    RegistrationService.setConfirmPassword(self.confirmPassword);
                    self.errorMsg = ""
                }

                self.next = function() {
                    if(RegistrationService.getConfirmPassword() != RegistrationService.getPassword()) {
                        self.errorMsg = message
                        return false;
                    }
                    return true;
                }
            }
        ]
    })
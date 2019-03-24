angular.module('password')
    .component('password', {
        templateUrl: 'password/password.template.html',
        controller: [ 'RegistrationService',
            function PasswordComponent(RegistrationService) {
                var self = this;
                var regExp = /^\w{8,20}$/
                var message = "password must contain 8-20 alpha-numeric or _ characters"

                self.password = RegistrationService.password;
                self.errorMsg = ""

                self.updatePassword = function()  {
                    RegistrationService.password = self.password;
                    self.errorMsg = ""
                }

                self.next = function() {
                    if(!regExp.test(self.password)) {
                        self.errorMsg = message
                        return false;
                    }
                    return true;
                }
            }
        ]
    })
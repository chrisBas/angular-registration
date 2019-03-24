angular.module('username')
    .component('username', {
        templateUrl: 'username/username.template.html',
        controller: [ 'RegistrationService',
            function UsernameComponent(RegistrationService) {
                var self = this;
                var regExp = /^\w{8,20}$/
                var message = "username must contain 8-20 alpha-numeric or _ characters"

                self.username = RegistrationService.username
                self.errorMsg = ""

                self.updateUsername = function() {
                    RegistrationService.username = self.username
                    self.errorMsg = ""
                }

                self.next = function() {
                    if(!regExp.test(self.username)) {
                        self.errorMsg = message
                        return false;
                    }
                    return true;
                }
            }
        ]
    })
angular.module('confirmation')
    .component('confirmation', {
        templateUrl: 'confirmation/confirmation.template.html',
        controller: [ 'RegistrationService',
            function ConfirmationComponent(RegistrationService) {
                var self = this;
                self.username = RegistrationService.getUsername()
                self.password = RegistrationService.getPassword()

                self.submit = function() {
                    alert('Form Completed')
                }
                
            }
        ]
    })
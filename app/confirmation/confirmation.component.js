angular.module('confirmation')
    .component('confirmation', {
        templateUrl: 'confirmation/confirmation.template.html',
        controller: [ 'RegistrationService',
            function ConfirmationComponent(RegistrationService) {
                var self = this;
                self.username = RegistrationService.username
                self.password = RegistrationService.password
                self.confirmPassword = RegistrationService.confirmPassword
                
            }
        ]
    })
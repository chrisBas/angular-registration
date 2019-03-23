// NOTE - the controller: property is an array of dependencies followed by the controller to support minifying this application.
// Without the preceeding list of dependenceies, minifying would modify the controller's parameters and DI would be broken

angular.module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: [ 'Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                self.orderProp = "age"
            }
        ]
    })
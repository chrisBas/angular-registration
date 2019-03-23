angular.module('registrationApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/phones', {template: '<phone-list></phone-list>'})
                .when('/phones/:phoneId', {template: '<phone-detail></phone-detail>'})
                .when('/registration', {template: '<landing></landing>'})
                .when('/username', {template: '<username></username>'})
                .when('/password', {template: '<password></password>'})
                .when('/confirm-password', {template: '<confirm-password></confirm-password>'})
                .when('/confirmation', {template: '<confirmation></confirmation>'})
                .otherwise('/registration');
        }
    ]);
angular.module('registrationApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/registration', {template: '<landing></landing>'})
                .when('/username', {template: '<username></username>'})
                .when('/password', {template: '<password></password>'})
                .when('/confirm-password', {template: '<confirm-password></confirm-password>'})
                .when('/confirmation', {template: '<confirmation></confirmation>'})
                .otherwise('/registration');
        }
    ]);
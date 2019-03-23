angular.module('registrationApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/phones', {template: '<phone-list></phone-list>'})
                .when('/phones/:phoneId', {template: '<phone-detail></phone-detail>'})
                .when('/registration', {template: '<landing></landing>'})
                .otherwise('/phones');
        }
    ]);
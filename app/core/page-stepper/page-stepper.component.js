angular.module('core.page-stepper')
    .component('pageStepper', {
        templateUrl: 'core/page-stepper/page-stepper.template.html',
        controller: [ 'PageService',
            function PageStepperComponent(PageService) {
                this.pager = PageService
            }
        ]
    })
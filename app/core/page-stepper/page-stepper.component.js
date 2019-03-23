angular.module('core.page-stepper')
    .component('pageStepper', {
        templateUrl: 'core/page-stepper/page-stepper.template.html',
        controller: [ 'PageService',
            function PageStepperComponent(PageService) {
                var self = this
                self.pager = PageService
                self.hasNext = true
                self.hasPrev = true

                self.$onInit = function() {
                    var directions = self.pager.directions()
                    self.hasNext = directions.next
                    self.hasPrev = directions.prev
                }
            }
        ]
    })
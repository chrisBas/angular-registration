angular.module('core.eyebrow')
    .component('eyebrow', {
        templateUrl: 'core/eyebrow/eyebrow.template.html',
        controller: [ 'PageService',
            function EyebrowComponent(PageService) {
                var self = this
                self.locations = PageService.relativeLocation()
            }
        ]
    })
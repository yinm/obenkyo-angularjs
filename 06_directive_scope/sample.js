var AppCtrl = (function () {
    function AppCtrl() {
        this.test = '双方向でバインド';
    }
    return AppCtrl;
}());
angular.module('myApp', [])
    .directive('directiveA', function () {
    return {
        restrict: 'E',
        template: '<div>directiveA: {{a.test}}</div>',
        scope: {},
        controller: AppCtrl,
        controllerAs: 'a',
    };
});

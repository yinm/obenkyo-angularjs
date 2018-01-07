var AppCtrl = (function () {
    function AppCtrl() {
        this.test = '双方向でバインド';
    }
    return AppCtrl;
}());
var AppCtrlB = (function () {
    function AppCtrlB() {
        console.log(this.test);
    }
    return AppCtrlB;
}());
angular.module('myApp', [])
    .directive('directiveA', function () {
    return {
        restrict: 'E',
        template: '<div>directiveA: {{a.test}}</div><directive-b prop="a.test"></directive-b>',
        scope: {},
        controller: AppCtrl,
        controllerAs: 'a',
    };
})
    .directive('directiveB', function () {
    return {
        restrict: 'E',
        template: '<div>directiveB: {{b.test}}</div>',
        scope: {},
        controller: AppCtrlB,
        controllerAs: 'b',
        bindToController: {
            test: '=prop',
        }
    };
});

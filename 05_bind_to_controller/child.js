// 2nd
var ChildController = (function () {
    function ChildController() {
        console.log(this.num);
        console.log(this.notBind);
    }
    return ChildController;
}());
var ChildDirective = (function () {
    function ChildDirective() {
    }
    ChildDirective.ddo = function () {
        return {
            restrict: 'E',
            scope: {},
            controller: ChildController,
            controllerAs: 'child',
            bindToController: {
                num: '=prop1',
                notBind: '=prop2',
            },
            templateUrl: 'child.html',
        };
    };
    return ChildDirective;
}());
angular.module('myApp').directive('childDirective', ChildDirective.ddo);

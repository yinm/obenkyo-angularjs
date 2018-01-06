angular.module('myApp', []);
var ParentController = (function () {
    function ParentController() {
        this.num = 0;
        this.notBind = 'notBind';
    }
    ParentController.prototype.increment = function () {
        this.num++;
    };
    return ParentController;
}());
var ParentDirective = (function () {
    function ParentDirective() {
    }
    ParentDirective.ddo = function () {
        return {
            restrict: 'E',
            scope: {},
            controller: ParentController,
            controllerAs: 'parent',
            templateUrl: 'parent.html',
        };
    };
    return ParentDirective;
}());
angular.module('myApp').directive('parentDirective', ParentDirective.ddo);

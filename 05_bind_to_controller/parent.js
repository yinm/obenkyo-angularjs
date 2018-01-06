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
            template: [
                "<div style='background-color: #f0f0f0'>",
                "<span>num: {{parent.num}} in parent </span>",
                "<button ng-click='parent.increment()'>+1</button>",
                "<child-directive prop1='parent.num' prop2='parent.notBind'></child-directive>",
                "</div>"
            ].join('')
        };
    };
    return ParentDirective;
}());
angular.module('myApp').directive('parentDirective', ParentDirective.ddo);

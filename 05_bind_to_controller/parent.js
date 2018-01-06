angular.module('myApp', []);
function parentController() {
    this.num = 0;
    this.increment = function () {
        this.num++;
    };
    this.notBind = 'notBind';
}
function parentDirective() {
    var ddo = {
        restrict: 'E',
        scope: {},
        controller: parentController,
        controllerAs: 'parent',
        template: [
            "<div style='background-color: #f0f0f0'>",
            "<span>num: {{parent.num}} in parent </span>",
            "<button ng-click='parent.increment()'>+1</button>",
            "<child-directive prop1='parent.num' prop2='parent.notBind'></child-directive>",
            "</div>"
        ].join('')
    };
    return ddo;
}
angular.module('myApp').directive('parentDirective', parentDirective);

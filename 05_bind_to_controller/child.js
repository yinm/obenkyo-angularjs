function childController() {
    console.log(this.num);
    console.log(this.notBind);
}
function childDirective() {
    var ddo = {
        restrict: 'E',
        scope: {
            notBind: '=prop2',
        },
        controller: childController,
        controllerAs: 'child',
        bindToController: {
            num: '=prop1',
        },
        template: [
            "<div style='background-color: #d0d0d0'>",
            "<span>num: {{child.num}} in child </span>",
            "</div>"
        ].join('')
    };
    return ddo;
}
angular.module('myApp').directive('childDirective', childDirective);

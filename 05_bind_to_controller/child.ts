class ChildController {
  constructor() {
    console.log(this.num);
    console.log(this.notBind);
  }
}

class ChildDirective {
  static ddo() {
    return {
      restrict: 'E',
      scope: {
        notBind: '=prop2',
      },
      controller: ChildController,
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
  }
}

angular.module('myApp').directive('childDirective', ChildDirective.ddo);

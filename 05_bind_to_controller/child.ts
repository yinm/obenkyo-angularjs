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
      templateUrl: 'child.html',
    };
  }
}

angular.module('myApp').directive('childDirective', ChildDirective.ddo);

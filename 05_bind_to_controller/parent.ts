// 2nd
angular.module('myApp', []);

class ParentController {
  constructor() {
    this.num = 0;
    this.notBind = 'notBind';
  }

  increment() {
    this.num++;
  }
}

class ParentDirective {
  static ddo() {
    return {
      restrict: 'E',
      scope: {},
      controller: ParentController,
      controllerAs: 'parent',
      templateUrl: 'parent.html',
    };
  }
}

angular.module('myApp').directive('parentDirective', ParentDirective.ddo);

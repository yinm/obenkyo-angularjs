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
      template: [
        "<div style='background-color: #f0f0f0'>",
          "<span>num: {{parent.num}} in parent </span>",
          "<button ng-click='parent.increment()'>+1</button>",
          "<child-directive prop1='parent.num' prop2='parent.notBind'></child-directive>",
        "</div>"
      ].join('')
    };
  }
}

angular.module('myApp').directive('parentDirective', ParentDirective.ddo);

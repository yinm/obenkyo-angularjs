class AppCtrl {
  constructor() {
    this.test = '双方向でバインド';
  }
}

class AppCtrlB {
  constructor() {
    console.log(this.test);
  }
}

angular.module('myApp', [])
  .directive('directiveA', () => {
    return {
      restrict: 'E',
      template: '<div>directiveA: {{a.test}}</div><directive-b prop="a.test"></directive-b>',
      scope: {},
      controller: AppCtrl,
      controllerAs: 'a',
    };
  })
  .directive('directiveB', () => {
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
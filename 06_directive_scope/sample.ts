class AppCtrl {
  constructor() {
    this.test = '双方向でバインド';
  }
}

angular.module('myApp', [])
  .directive('directiveA', () => {
    return {
      restrict: 'E',
      template: '<div>directiveA: {{a.test}}</div>',
      scope: {},
      controller: AppCtrl,
      controllerAs: 'a',
    };
  });
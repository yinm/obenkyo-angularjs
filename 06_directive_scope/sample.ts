class AppCtrl {
  constructor($scope) {
    this.$scope = $scope;

    this.$scope.value = '親のscopeを継承'
  }
}

angular.module('myApp', [])
  .controller('AppCtrl', AppCtrl)
  .directive('directiveA', () => {
    return {
      restrict: 'E',
      template: '<div>scope:{{value}}</div>',
    };
  })
  .directive('directiveB', () => {
    return {
      restrict: 'E',
      scope: {},
      template: '<div>scope:{{value}}</div>',
    }
  })
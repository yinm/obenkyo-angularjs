angular.module('myApp', ['ngRoute']);

var link = function (scope, elem, attr) {
  console.log(scope.arr);
  scope.arr = [6, 7, 8, 9, 10];
  console.log(scope.arr);
  console.log(scope);
};

angular.module('myApp')
  .directive('dirA', function () {
    return {
      restrict: 'E',
      scope: {arr: '@myArr'},
      link: link
    };
  })
  .directive('dirB', function () {
    return {
      restrict: 'E',
      scope: {arr: '=myArr'},
      link: link
    };
  })
  .directive('dirC', function () {
    return {
      restrict: 'E',
      scope: {arr: '&myArr'},
      link: link
    };
  });

function Ctrl($scope) {
  $scope.arr = [1, 2, 3, 4, 5];
}

angular.module('myApp')
  .controller('SampleCtrlA', ['$scope', Ctrl]);

angular.module('myApp')
  .controller('SampleCtrlB', ['$scope', Ctrl]);

angular.module('myApp')
  .controller('SampleCtrlC', ['$scope', Ctrl]);

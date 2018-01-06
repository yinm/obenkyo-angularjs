angular.module('myApp', [])
  .controller('myCtrl', ['$scope', ($scope) => {
      const myName = 'can.i.do.web';
      const expertList = ['shumpei', 'komasshu', 'yoshikawa_t'];
      const author = { name: 'きゃない', twitter: 'can_i_do_web' };

      $scope.myName = myName;
      $scope.expertList = expertList;
      $scope.author = author;
  }]);

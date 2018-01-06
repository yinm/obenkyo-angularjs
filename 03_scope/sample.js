angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function ($scope) {
        var myName = 'can.i.do.web';
        var expertList = ['shumpei', 'komasshu', 'yoshikawa_t'];
        var author = { name: 'きゃない', twitter: 'can_i_do_web' };
        $scope.myName = myName;
        $scope.expertList = expertList;
        $scope.author = author;
    }]);

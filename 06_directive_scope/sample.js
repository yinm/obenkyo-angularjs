var AppCtrl = (function () {
    function AppCtrl($scope) {
        this.$scope = $scope;
        this.$scope.value = '親のscopeを継承';
    }
    return AppCtrl;
}());
angular.module('myApp', [])
    .controller('AppCtrl', AppCtrl)
    .directive('directiveA', function () {
    return {
        restrict: 'E',
        template: '<div>scope:{{value}}</div>',
    };
})
    .directive('directiveB', function () {
    return {
        restrict: 'E',
        scope: {},
        template: '<div>scope:{{value}}</div>',
    };
});

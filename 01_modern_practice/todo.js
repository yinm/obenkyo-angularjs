var TodoController = /** @class */ (function () {
    function TodoController($scope, $routeParams, $filter, store) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$filter = $filter;
        this.store = store;
    }
    return TodoController;
}());
function TodoCtrl($scope, $routeParams, $filter, store) {
    $scope.newTodo = '';
    $scope.editedTodo = null;
    $scope.addTodo = function () { };
    $scope.editTodo = function (todo) { };
    $scope.saveEdits = function (todo, event) { };
}

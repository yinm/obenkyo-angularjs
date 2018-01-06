var TodoController = (function () {
    function TodoController($scope, $routeParams, $filter, store) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$filter = $filter;
        this.store = store;
        this.newtodo = '';
        this.editedTodo = null;
    }
    return TodoController;
}());
function TodoCtrl($scope, $routeParams, $filter, store) {
    $scope.addTodo = function () { };
    $scope.editTodo = function (todo) { };
    $scope.saveEdits = function (todo, event) { };
}

var TodoController = (function () {
    function TodoController($scope, $routeParams, $filter, store) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$filter = $filter;
        this.store = store;
        this.newtodo = '';
        this.editedTodo = null;
    }
    TodoController.prototype.addTodo = function () {
    };
    TodoController.prototype.editTodo = function (todo) {
    };
    TodoController.prototype.saveEdits = function (todo, event) {
    };
    return TodoController;
}());

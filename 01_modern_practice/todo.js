var TodoController = /** @class */ (function () {
    function TodoController($scope, $routeParams, $filter, store) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$filter = $filter;
        this.store = store;
        this.newTodo = '';
        this.editedTodo = null;
    }
    TodoController.prototype.addTodo = function () {
        var _this = this;
        var newTodo = {
            title: this.newTodo.trim(),
            completed: false,
        };
        if (!newTodo.title) {
            return;
        }
        this.saving = true;
        store
            .insert(newTodo)
            .then(function () {
            _this.newTodo = '';
        })
            .finally(function () {
            _this.saving = false;
        });
    };
    return TodoController;
}());
function TodoCtrl($scope, $routeParams, $filter, store) {
    $scope.addTodo = function () { };
    $scope.editTodo = function (todo) { };
    $scope.saveEdits = function (todo, event) { };
}

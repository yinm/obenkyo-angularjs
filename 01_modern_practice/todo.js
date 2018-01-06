var TodoController = (function () {
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
    TodoController.prototype.editTodo = function (todo) {
    };
    TodoController.prototype.saveEdits = function (todo, event) {
    };
    return TodoController;
}());

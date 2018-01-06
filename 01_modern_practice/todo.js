var TodoController = (function () {
    function TodoController($scope, $routeParams, $filter, store) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$filter = $filter;
        this.store = store;
        this.newTodo = '';
        this.editedTodo = null;
        TodoController.$inject = ['$scope', '$routeParams', '$filter', 'store'];
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
        this.editedTodo = todo;
        this.originalTodo = angular.extend({}, todo);
    };
    TodoController.prototype.saveEdits = function (todo, event) {
        var _this = this;
        if (event === 'blur' && this.saveEvent === 'submit') {
            this.saveEvent = null;
            return;
        }
        this.saveEvent = event;
        if (this.reverted) {
            this.reverted = null;
            return;
        }
        todo.title = todo.title.trim();
        if (todo.title === this.originalTodo.title) {
            this.editedTodo = null;
            return;
        }
        store[todo.title ? 'put' : 'delete'](todo)
            .then(function () { }, function () {
            todo.title = _this.originalTodo.title;
        })
            .finally(function () {
            _this.editedTodo = null;
        });
    };
    return TodoController;
}());

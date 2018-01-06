class TodoController {
  constructor($scope, $routeParams, $filter, store) {
    this.$scope = $scope;
    this.$routeParams = $routeParams;
    this.$filter = $filter;
    this.store = store;

    this.newTodo = '';
    this.editedTodo = null;

    TodoController.$inject = ['$scope', '$routeParams', '$filter', 'store'];
  }

  addTodo() {
    const newTodo = {
      title: this.newTodo.trim(),
      completed: false,
    };

    if (!newTodo.title) {
      return;
    }

    this.saving = true;
    store
      .insert(newTodo)
      .then(() => {
        this.newTodo = '';
      })
      .finally(() => {
        this.saving = false;
      });
  }

  editTodo(todo) {
    this.editedTodo = todo;
    this.originalTodo = angular.extend({}, todo);
  }

  saveEdits(todo, event) {
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
      .then(() => {}, () => {
        todo.title = this.originalTodo.title;
      })
      .finally(() => {
        this.editedTodo = null;
      });
  }
}

class TodoController {
  constructor($scope, $routeParams, $filter, store) {
    this.$scope = $scope;
    this.$routeParams = $routeParams;
    this.$filter = $filter;
    this.store = store;

    this.newTodo = '';
    this.editedTodo = null;
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
  }

  saveEdits(todo, event) {
  }
}

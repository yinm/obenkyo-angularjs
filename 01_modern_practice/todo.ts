class TodoController {
  constructor($scope, $routeParams, $filter, store) {
    this.$scope = $scope;
    this.$routeParams = $routeParams;
    this.$filter = $filter;
    this.store = store;

    this.newtodo = '';
    this.editedTodo = null;
  }

  addTodo() {
  }

  editTodo(todo) {
  }

  saveEdits(todo, event) {
  }
}

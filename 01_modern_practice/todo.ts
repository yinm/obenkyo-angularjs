class TodoController {
  constructor($scope, $routeParams, $filter, store) {
    this.$scope = $scope
    this.$routeParams = $routeParams
    this.$filter = $filter
    this.store = store

    this.newTodo = ''
    this.editedTodo = null
  }

  addTodo() {
    const newTodo = {
      title: this.newTodo.trim(),
      completed: false,
    }

    if (!newTodo.title) {
      return
    }

    this.saving = true
    store
      .insert(newTodo)
      .then(() => {
        this.newTodo = ''
      })
      .finally(() => {
        this.saving = false
      })
  }

  editTodo(todo) {
    this.editedTodo = todo
    // Clone the original todo to restore it on demand.
    this.originalTodo = angular.extend({}, todo)
  }

  saveEdits(todo, event) {
    // Blur events are automatically triggered after the form submit event,
    // This does some unfortunate logic handling to prevent saving twice.
    if (event === 'blur' && this.saveEvent === 'submit') {
      this.saveEvent = null
      return
    }

    this.saveEvent = event

    if (this.reverted) {
      // Todo edits were reverted -- don't save.
      this.reverted = null
      return
    }

    todo.title = todo.title.trim()

    if (todo.title === this.originalTodo.title) {
      this.editedTodo = null
      return
    }

    store[todo.title ? 'put' : 'delete'](todo)
      .catch(() => {
        todo.title = this.originalTodo.title
      })
      .finally(() => {
        this.editedTodo = null
      })
  }
}

function TodoCtrl($scope, $routeParams, $filter, store) {
  $scope.addTodo = function() {}
  $scope.editTodo = function(todo) {}
  $scope.saveEdits = function(todo, event) {}
}
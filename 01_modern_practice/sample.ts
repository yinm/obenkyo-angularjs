'use strict'

class MainController {
  constructor() {
    this.user = 'John'
  }
}

angular.module('myApp', [])
angular.module('myApp').controller('mainCtrl', MainController)

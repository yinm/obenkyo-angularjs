class MainCtrl {
  constructor() {
    this.foo = 'bar';
  }

  hoge() {
    console.log(this.foo);
  }
}


angular.module('myApp', [])
  .controller('MainCtrl', MainCtrl);

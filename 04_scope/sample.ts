class MainCtrl {
  constructor() {
    this.foo = 'bar';
  }

  hoge() {
    console.log(this.foo);
  }
}

class ChildCtrl {
}


angular.module('myApp', [])
  .controller('MainCtrl', MainCtrl)
  .controller('ChildCtrl', ChildCtrl);

var MainCtrl = (function () {
    function MainCtrl() {
        this.foo = 'bar';
    }
    MainCtrl.prototype.hoge = function () {
        console.log(this.foo);
    };
    return MainCtrl;
}());
angular.module('myApp', [])
    .controller('MainCtrl', MainCtrl);

var MainCtrl = (function () {
    function MainCtrl() {
        this.foo = 'bar';
    }
    MainCtrl.prototype.hoge = function () {
        console.log(this.foo);
    };
    return MainCtrl;
}());
var ChildCtrl = (function () {
    function ChildCtrl() {
    }
    return ChildCtrl;
}());
angular.module('myApp', [])
    .controller('MainCtrl', MainCtrl)
    .controller('ChildCtrl', ChildCtrl);

'use strict';
var MainController = (function () {
    function MainController() {
        this.user = 'John';
    }
    return MainController;
}());
angular.module('myApp', []);
angular.module('myApp').controller('MainController', MainController);

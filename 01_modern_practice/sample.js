'use strict';
var MainController = /** @class */ (function () {
    function MainController() {
        this.user = 'John';
    }
    return MainController;
}());
angular.module('myApp', []);
angular.module('myApp').controller('mainCtrl', MainController);

(function () {
    'use strict';

    angular
        .module('starterApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['DataService'];

    /* @ngInject */
    function HomeCtrl(DataService) {
        const home = this;
        home.title = 'Home';
        console.log("home");

        activate();

        function activate() {
            console.log(DataService.functionName());
        }
    }

})();


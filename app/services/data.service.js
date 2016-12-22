(function () {
    'use strict';

    angular
        .module('starterApp')
        .service('DataService', DataService);

    DataService.$inject = ['$http'];

    /* @ngInject */
    function DataService($http) {
        this.functionName = functionName;
        
        function functionName() {
            console.log('random function');
        }
    }

})();


angular
    .module('starterApp')
    .constant('AppConfig',constant);

constant.$inject = [];

/* @ngInject */
function constant () {
    return {
        appName :'starterApp',
    };
}



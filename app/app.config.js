angular
    .module('starterApp')
    .config(config);

config.$inject = [];

/* @ngInject */
function config () {
    console.log('config');
}

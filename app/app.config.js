angular
    .module('starterApp')
    .config(config);

config.$inject = ['$qProvider'];

/* @ngInject */
function config ($qProvider) {
    console.log('config');
    // $qProvider.errorOnUnhandledRejections(false)
}

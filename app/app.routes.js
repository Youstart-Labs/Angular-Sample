angular
    .module('starterApp')
    .config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];

/* @ngInject */
function config ($stateProvider,$urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
    });

    $urlRouterProvider.otherwise('/home')


}


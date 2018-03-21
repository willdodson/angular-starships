angular.module('pokemon', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    // template: '<h1>Home</h1>',
    templateUrl: './app2/templates/home.html',
  });
  $stateProvider.state('characters', {
    url: '/characters',
    templateUrl: './app2/templates/characters.html',
    controller: 'charactersCtrl',
  });
  $stateProvider.state('character', {
    url: '/characters/:id',
    templateUrl: './app2/templates/character.html',
    controller: 'characterCtrl',
  });
  $urlRouterProvider.otherwise('/');
});

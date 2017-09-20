// Naming our module starships, and telling angular to use the ui.router module
// This will bring in the router code and objects so we can setup our routes.
angular.module('starships', ['ui.router'])

// Here we are configuring our angular module to use some routes.
angular.module('starships').config(function($stateProvider,
                                            $urlRouterProvider){
  // On the $stateProvider object, we are going to create 3 states.
  // Each state has a URL, a template or templateUrl, and each has the option of
  // having a controller.
  // Our 3 states are home, ships, and ship.
  // The templateUrl is a path to the html template relative to the index.html
  // With the controller we give the name of the controller we want to use for
  // for each route.  Not all states will need controllers.
  $stateProvider.state('home',{
    url:'/',
    // template:'<div>I am the home state</div>'
    templateUrl:'app/views/home/home.html'
  })
  .state('ships',{
    url:'/ships',
    // template:'<div>I am the ships state</div>'
    templateUrl:'app/views/ships/ships.html',
    controller:'shipsCtrl'
  })
  .state('ship',{
    url:'/ships/:id',
    // template:'<div>I am the ship detail state</div>'
    templateUrl:'app/views/ship/ship.html',
    controller:'shipCtrl'
  })
  // The otherwise route says that if the user goes to a url other than one of the
  // listed states.  Send them to this url.  This is often either the homepage,
  // Or you could make a 404 page.  
  $urlRouterProvider.otherwise('/');
})

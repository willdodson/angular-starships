// Creating a controller named shipsCtrl,
// Notice that in addition to $scope, we inject the shipSrvc
angular.module('starships').controller('shipsCtrl',
                                            function($scope, shipSrvc){
  // Here we call the getShipList function from our service.  getShipList returns
  // a promise, so we call .then, inside our then we put the ships from the api
  // call onto $scope
  shipSrvc.getShipList().then(ships=>$scope.ships = ships);
})

// In angular, we try to keep our controllers 'light' That means we want to put
// as little logic into the controller as we can.  This means trying to clean up
// data inside of services instead of in the controller, as well as keeping
// all http calls out of them.

// A good way to know if you're succeding at keeping them light, almost every line
// should be either
// A) calling a function from a service
// B) putting infromation onto scope
// C) pulling infromation off of scope

// If you find yourself writing a lot of logic, consider moving it into a service.

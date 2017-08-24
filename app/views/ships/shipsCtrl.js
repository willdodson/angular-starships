angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
  $scope.name = "test";
  $scope.ships = ["Millenial Falcon","Death Star","T-Fighter","X-Wing"];
})

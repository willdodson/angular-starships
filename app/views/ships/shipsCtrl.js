angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
  shipSrvc.getShipList().then(ships => $scope.ships = ships);
})

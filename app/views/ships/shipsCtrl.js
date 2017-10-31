angular.module('starships').controller('shipsCtrl', function(shipSrvc, $scope){
  shipSrvc.getShips().then((ships)=>{
    $scope.ships = ships;
  })
})

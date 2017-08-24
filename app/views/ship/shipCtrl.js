angular.module('starships').controller('shipCtrl', function($scope, $stateParams, shipSrvc){
  shipSrvc.getShipById($stateParams.id).then(data=>$scope.shipData=data);
  $scope.id = $stateParams.id;
})

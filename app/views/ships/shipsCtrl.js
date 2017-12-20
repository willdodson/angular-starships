angular.module('starships').controller('shipsCtrl', 
                            function($scope, shipSrvc){
    $scope.getPage = (page) => {
        $scope.page=page;
        shipSrvc.getStarships(page)
        .then(ships=>$scope.ships=ships);
    }

    $scope.getPage(shipSrvc.getLastPage());
})
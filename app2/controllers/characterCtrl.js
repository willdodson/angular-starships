angular.module('pokemon').controller('characterCtrl', function($scope, charactersSrvc, $stateParams){
    $scope.character = $stateParams.id
})
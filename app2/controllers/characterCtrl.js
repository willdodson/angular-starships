angular.module('pokemon').controller('characterCtrl', function($scope, charactersSrvc, $stateParams) {
  // $http.get(`https://pokeapi.co/api/v2/pokemon/${$stateParams.id}/`).then(response => {
  //   $scope.character = {
  //     name: response.data.name,
  //     number: response.data.id,
  //     url: response.data.sprites.front_default,
  //   };
  // });
  charactersSrvc.getCharacter($stateParams.id).then(character => {
    $scope.character = character;
  });
});

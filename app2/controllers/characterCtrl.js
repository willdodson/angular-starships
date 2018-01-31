angular.module('pokemon').controller('characterCtrl', function($scope, $stateParams, characterSvc) {
  const id = $stateParams.id;
  // $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
  //   $scope.character = {
  //     name: response.data.name,
  //     weight: response.data.weight,
  //     pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
  //   };
  // });
  characterSvc.getCharacter(id).then(data => {
    $scope.character = data;
  });
});

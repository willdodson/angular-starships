angular.module('pokemon').service('charactersSrvc', function($http) {
  this.getCharacter = function(id) {
    return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => {
      return {
        name: response.data.name,
        number: response.data.id,
        url: response.data.sprites.front_default,
      };
    });
  };
});

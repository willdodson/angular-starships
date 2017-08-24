angular.module('starships').service('shipSrvc', function($http){
  this.getShipList = function(){
    return $http.get('https://swapi.co/api/starships/').then(response=>{
      console.log(response.data);
      return response.data.results.map(ship=>{
        ship.id = ship.url.slice(31, ship.url.length-1) * 1;
        console.log(ship.id);
        return ship
      });;
    }).catch(err=>console.error(err));
  }

  this.getShipById = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}`).then(response=>{
      console.log(response.data);
      return response.data
    }).catch(err=>console.error(err));
  }
})

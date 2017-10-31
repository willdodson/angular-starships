angular.module('starships').service('shipSrvc', function($http, $state){
  this.ships = ["X wing", "T-Fighter", "Millenial Falcon", "Death Star"];

  this.getShips = function(){
    return $http.get('https://swapi.co/api/starships/').then(response => {
      console.log("My list of ships:", response.data);
      return response.data.results.map(this.getIdForShip);
    })
  }

  this.getIdForShip = function(ship){
    let urlArry = ship.url.split('/');
    ship.id = urlArry[5];
    return ship;
  }

  this.getShipById = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}`).then(response=>{
      return this.getIdForShip(response.data);
    }).catch(err=>{
      $state.go('home')
      // return {name:'No ship found'}
      // throw new Error('No ship found')
    })
  }

  // this.getShips();
})

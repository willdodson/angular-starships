// Services in angular are where we want to put our tasks that are either
// difficult to preform, or that we want to be able to do from multiple places.


// We create a service by grabbing our angular module, invoking the service function
// and giving it a name, and constructor function.

// Because it's a constructor function, we need to make sure that we don't use an
// arrow function, that will expliciting set the context, which breaks constructor functions

// Inside the constructor function, we can inject other services that this service will
// need to run in this case we are injecting $http, which is a service that helps
// us make HTTP calls.  This is the library that axios is based on, so the syntax
// for them will be very similar.

angular.module('starships').service('shipSrvc', function($http){
  // Because the service is a constructor function, we put information onto it
  // using the this keyword.
  // Here we are creating a function that we can use to get a list of starships.
  this.getShipList = function(){
    // $http returns us a promise, so we are going to return the promise
    // back to the controller that calls this function.
    return $http.get('https://swapi.co/api/starships/').then(response=>{
      // Here we can clean up the data before sending it back to the
      // controller.
      // Let's grab the ships that we want to send back
      let ships = response.data.results
      // Unfortunalty the swapi api doesn't give us a field with the id on the
      // object, instead we get a bunch of urls, that contain the id.
      // Here we are using the ship url can grabbing the id of the ship,
      // then saving it on the ship object itself.
      return ships.map(ship=>{
        ship.id = ship.url.slice(31, ship.url.length-1) * 1;
        return ship;
      })
    }).catch(err=>console.error(err));
  }

  // Here we are creating a function to get the information of a single ship
  this.getShipById = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}`).then(response=>{
      return response.data;
    }).catch(err=>console.error(err));
  }
})

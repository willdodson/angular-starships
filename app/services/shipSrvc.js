angular.module('starships').service('shipSrvc', 
                            function($http){
    let lastPage = 1;

    this.getStarships = ( page = lastPage )=>{
        lastPage = page;
        return $http.get(`https://swapi.co/api/starships/?page=${page}`)
        .then(resp=>{
            console.log(resp);
            return resp.data.results.map(ship=>{
                // https://swapi.co/api/starships/11/
                // get id from there
                let ary = ship.url.split('/');

                ship.id = ary[ary.length-2]*1;
                return ship
            })
        })
    }

    this.getStarship = (id)=>{
        return $http.get(`https://swapi.co/api/starships/${id}`)
            .then(resp=>resp.data)
    }

    this.getLastPage = ()=>{
        return lastPage;
    }
})
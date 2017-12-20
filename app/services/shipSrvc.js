angular.module('starships').service('shipSrvc', 
                            function($http, $q){
    let lastPage = 1;

    this.getStarships = ( page = lastPage )=>{
        lastPage = page;
        return $q.all(
            [$http.get(`https://swapi.co/api/starships/?page=1`),
            $http.get(`https://swapi.co/api/starships/?page=2`),
            $http.get(`https://swapi.co/api/starships/?page=3`),
            $http.get(`https://swapi.co/api/starships/?page=4`)
            ])
        .then(resp=>{
            console.log(resp);
            return  resp.reduce((all, resp)=>{
                all.push(...resp.data.results.map(ship=>{
                    let ary = ship.url.split('/');
                    ship.id = ary[ary.length-2]*1;
                    return ship
                }))
                return all;
            }, [])
            
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
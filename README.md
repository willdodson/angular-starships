
# Starship

Start by creating the index.html file.  Bring in our scripts for angular.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js" charset="utf-8"></script>
```

Create some folders.  

app
app/css
app/services
app/views
app/views/home
app/views/ship
app/views/ships

We're going to create a couple of files

app/app.js
app/services/shipSrvc.js

app/views/home/home.html
app/views/ship/ship.html
app/views/ships/ships.html
app/views/ship/shipCtrl.js
app/views/ships/shipsCtrl.js

We'll bring in the 4 js files into our index.html

```
<script src="app/app.js" charset="utf-8"></script>
<script src="app/services/shipSrvc.js" charset="utf-8"></script>
<script src="app/views/ship/shipCtrl.js" charset="utf-8"></script>
<script src="app/views/ship/shipCtrls.js" charset="utf-8"></script>
```

In our app.js

We setup the configuration of the route.

Put dummy templates in the home.html, ship.html, ships.html

Create dummy controllers

Test that the templates are loading up with the dummy data.

Create a service to get information from the swapi api

Setup controllers to use the service and add it to scope

Update the templates to use the actual data.


Api endpoint to get list of starships.
'https://swapi.co/api/starships/'

Api endpoint to get a specific starship
`https://swapi.co/api/starships/${id}`

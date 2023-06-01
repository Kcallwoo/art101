// Kamryn Callwood
// Lab 15 - AJAX

let num = 1;

function getInfo(){
  $.ajax({
    url:"https://swapi.dev/api/people/" + num + "/",
    data: {},
    type: "GET",
    dataType: "json"
  })
  .done(function(data){
    $("#character").html("<h2>" + data.name + "</h2>");  
    $("#character").append("<p>Height: " + data.height + "</p>"); 
    $("#character").append("<p>Mass: " +data.mass+ "</p>");        
    $("#character").append("<p>Hair color: " +data.hair_color+ "</p>");        
    $("#character").append("<p>Skin color: " +data.skin_color+ "</p>");      
    $("#character").append("<p>Eye color: "+data.eye_color+"</p>");       
    $("#character").append("<p>Birth year: "+data.birth_year+"</p>");         
    $("#character").append("<p>Gender: "+data.gender+"</p>");         
    getHomeworld(data); 
    getFilm(data);           
    getVehicle(data);     
    getStarship(data);
  })
}
function getHomeworld(){
  $.ajax({
    url: "https://swapi.dev/api/planets/1/",
    data: {},
    type: "GET",
    dataType: "json"
  }).done(function(data){
    console.log(data.name);
    $("#character").append("<p>Homeworld: "+ data.name + "</p>");
  });     
}

function getFilm(film) {
    var urls = [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ];
  
    var requests = urls.map(function(url) {
      return $.ajax({
        url: url,
        data: {},
        type: "GET",
        dataType: "json"
      });
    });
  
    $.when.apply($, requests).done(function() {
      var films = Array.prototype.slice.call(arguments);
      films.forEach(function(film) {
        var title = film[0].title;
        console.log(title);
        $("#films").append("<p>" + title + "</p>");
      });
    });
  }

  function getVehicle(vehicle) {
    var urls = [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ];
  
    var requests = urls.map(function(url) {
      return $.ajax({
        url: url,
        data: {},
        type: "GET",
        dataType: "json"
      });
    });
  
    $.when.apply($, requests).done(function() {
      var vehicles = Array.prototype.slice.call(arguments);
      vehicles.forEach(function(vehicle) {
        var name = vehicle[0].name;
        console.log(name);
        $("#vehicles").append("<p>" + name + "</p>");
      });
    });
  }
  
  

  function getStarship(ship) {
    var urls = [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ];
  
    var requests = urls.map(function(url) {
      return $.ajax({
        url: url,
        data: {},
        type: "GET",
        dataType: "json"
      });
    });
  
    $.when.apply($, requests).done(function() {
      var starships = Array.prototype.slice.call(arguments);
      starships.forEach(function(starship) {
        var name = starship[0].name;
        console.log(name);
        $("#starships").append("<p>" + name + "</p>");
      });
    });
  }



$("#active").click(getInfo);

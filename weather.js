$(document).ready(function(){

  var lapi = "http://ip-api.com/json";
    $.getJSON(lapi, function(ldata){
      document.getElementById('location').innerHTML = ldata.city + ", " + ldata.region;
      
      var geo = ldata.lot.split(",");
      var lat = Math.floor(geo[0]);
      var long = Math.floor(geo[1]);


    var wApi = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long;
      $.getJSON(wApi, function(wdata){
        var cels = (wdata.main.temp);
        var faren = Math.floor(wdata.main.temp * 9 / 5 + 32);
        
        document.getElementById('temp').innerHTML = faren;
        document.getElementById('desc').innerHTML = wdata.weather[0].description.toUpperCase();

        var icon = wdata.weather[0].icon;
        document.getElementById('icon').innerHTML = "<img src="' icon "'></img>"
   
      }


    });
  });
});

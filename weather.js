$(document).ready(function(){

  var lapi = "http://ip-api.com/json";
    $.getJSON(lapi, function(ldata){
      document.getElementById('location').innerHTML = ldata.city + ", " + ldata.region;


    var wApi = "http://api.openweathermap.org/data/2.5/weather?q=" + ldata.city +
      ldata.region + "&appid=8541de19e5fcb2674389314f0f15c07f";
      $.getJSON(wApi, function(wdata){

        var faren = Math.floor(wdata.main.temp * 9 / 5 - 459.67);
        var cels = Math.floor(faren - 32 * 1.8 );
        document.getElementById('temp').innerHTML = faren;
        document.getElementById('desc').innerHTML = wdata.weather[0].description.toUpperCase();


        switch (wdata.weather[0].description) {
          case "clear sky":
            document.getElementById('icon').innerHTML = "<img src='sunny.png'></img>"
            break;
          case "few clouds":
          document.getElementById('icon').innerHTML = "<img src='slightCloud.png'></img>"
          case "scattered clouds":
            document.getElementById('icon').innerHTML = "<img src='cloudy.png'></img>"
            break;
          case "broken clouds":
          document.getElementById('icon').innerHTML = "<img src='cloudy.png'></img>"
          case "shower rain":
            document.getElementById('icon').innerHTML = "<img src='rain.png'></img>"
            break;
          case "rain":
          document.getElementById('icon').innerHTML = "<img src='rain.png'></img>"
          case "thunderstorm":
            document.getElementById('icon').innerHTML = "<img src='thunderstorm.png'></img>"
            break;
          case "snow":
          document.getElementById('icon').innerHTML = "<img src='snow.png'></img>"
          case "mist":
            document.getElementById('icon').innerHTML = "<img src='mist.png'></img>"
            break;
          default:




        }



    });
  });
});

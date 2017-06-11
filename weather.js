$(document).ready(function(){ 
      
      // setting up location apu
      var Lapi = "http://ip-api.com/json"
      //getting location json information also created new variable Ldata which equal Lapi in array format
      $.getJSON(Lapi, function(Ldata){
        //new variable locate to capture users City and region
        var Locate = Ldata.city + ", " + Ldata.region;
        //creating lat and long variable to pass to my Wapi later on
        var lat = Ldata.lat;
        var long = Ldata.lon;
        // weather api to grab weather data
        var Wapi = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long +"&appid=8541de19e5fcb2674389314f0f15c07f"; 
      
        
      
     
      
      // get json information for weather and create new variable data which equals wapi info in array format 
      $.getJSON(Wapi, function(Wdata){ 
        // variable for ktemp because open weather api temp is default a kelvin
        var Ktemp = Wdata.main.temp;
        // variable weather type to determine what kind of weather the user is having 
        var Wtype = Wdata.weather[0].main;
        // converting kelvin to farenheight 
        var Ftemp = (Ktemp *(9/5)-459.67).toFixed(0) + " &#8457";
        //converting kelvin to celsius
        var Ctemp = (Ktemp - 273).toFixed(0) + " &#8451";
        // variable to capture windspeed and convert it to mph
        var Wndspeed = (Wdata.wind.speed *2.237).toFixed(1) + " MPH";
        // variable for switching between f to c
        var tempSwap = true;
      
        // passing info into html elements
        $("#Location").html(Locate);
        $("#weatherType").html(Wtype);
        $("#Ftemp").html(Ftemp);
        $("#windSpeed").html(Wndspeed);
        $("#Ftemp").click(function(){
        
         //if else statement to determine if farenheight is set all defaults temperture to f
          if(tempSwap === false){
            $("#Ftemp").html(Ftemp);
            
            tempSwap = true;
            
          }
          else {
            $("#Ftemp").html(Ctemp);
            tempSwap = false;
          }
          
  
          
          
          
        });

        //case switch statement to switch icons depending on weather
      
       var Wicon =  Wtype;
       switch(Wicon){
         case 'Clear':
         $('#icon img').attr('src', 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-icon.png');
             break;
           case 'Clouds':
         $('#icon img').attr('src', 'http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png');
             break;
           case 'Rain':
         $('#icon img').attr('src', 'https://cdn2.iconfinder.com/data/icons/weather-34/512/Cloud_4-512.png');
             break;
           case 'Snow':
         $('#icon img').attr('src', 'https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Heavy_snow.png');
             break;
       };
        
      
      }); 
        
      
   }); 
   
  
});
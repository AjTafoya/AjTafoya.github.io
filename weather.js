$(document).ready(function(){ 
      
      
      var Lapi = "http://ip-api.com/json"
      $.getJSON(Lapi, function(Ldata){
        var Locate = Ldata.city + ", " + Ldata.region;
        var lat = Ldata.lat;
        var long = Ldata.lon;
        var Wapi = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long +"&appid=8541de19e5fcb2674389314f0f15c07f"; 
      
        
      
     
      
      
      $.getJSON(Wapi, function(Wdata){ 
        var Ktemp = Wdata.main.temp;
        var Wtype = Wdata.weather[0].main;
        var Ftemp = (Ktemp *(9/5)-459.67).toFixed(0) + " &#8457";
        var Ctemp = (Ktemp - 273).toFixed(0) + " &#8451";
        var Wndspeed = (Wdata.wind.speed *2.237).toFixed(1) + " MPH";
        var tempSwap = true;
      
        
        $("#Location").html(Locate);
        $("#weatherType").html(Wtype);
        $("#Ftemp").html(Ftemp);
        $("#windSpeed").html(Wndspeed);
        $("#Ftemp").click(function(){
        
         
          if(tempSwap === false){
            $("#Ftemp").html(Ftemp);
            
            tempSwap = true;
            
          }
          else {
            $("#Ftemp").html(Ctemp);
            tempSwap = false;
          }
          
  
          
          
          
        });
      
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
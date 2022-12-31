let weather = {
    apiKey:"744b0a7f5b7c5015ae98ab743c17ca4e",
    fetchWeather:function(city){
        fetch(
         "https://api.openweathermap.org/data/2.5/weather?q="
              + city 
              + "&units=metric&appid="
             + this.apiKey
        )
        
          .then((response)=> response.json())
          .then((data)=> this.displayWeather(data));
    },
    displayWeather: function (data){    // får fram information från: https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=744b0a7f5b7c5015ae98ab743c17ca4e
        const { name } = data;
        const { temp_max, temp_min } =data.main;
        const { icon,description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name,icon,description,temp,humidity,speed)  // ta information från open weather 
        document.querySelector(".stad"). innerText = name ; 
       document.querySelector(".max").innerText= "MAX :" +temp_max + "°C";
       document.querySelector(".min"). innerText= "MIN:" +temp_min + "°C";
        document.querySelector(".ikon"). src="http://openweathermap.org/img/wn/" + icon + "@2x.png"; //länken till open weather icons
        document.querySelector(".info"). innerText = description ;
        document.querySelector(".grad").innerText =  temp + "°C" ;
        document.querySelector(".fukt").innerText = "Luftfuktighet:" + humidity + "%" ;
        document.querySelector(".vind").innerText ="Vind:" + speed + " m/s ";


    },
 search: function() {
   this.fetchWeather(document.querySelector(".search-bar").value);
 }
} ;

document.querySelector(".search button").addEventListener("click" , function() {
    weather.search();         // fetchar  information från search funktionen gennom att trycka på search-bar knappen
});

weather.fetchWeather("Stockholm");


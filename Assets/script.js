// console.log("test")
// var cityName = $("#citySearch").val();

function buildQueryUrl(cityName) {

 


  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=e64e132275b7b750665db42aefe9b9f8";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    getUVindex(response.city.coord.lat, response.city.coord.lon )

    

    for (i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.includes("12:00")) {
        console.log(response.list[i]);
        
        
      
      }
      
      
    }
        var currentCity = $("#current-city");
        var currentDate = moment().format("L");

        currentCity.append(response.city.name + " " + currentDate )
        // console.log(response.list[0].weather[0].icon)
        $("#weather-icon").attr("src", "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
        $("#temperature").text(response.list[0].main.temp + "°F");
        $("#humidity").text(response.list[0].main.humidity + "%");
        $("#windspeed").text(response.list[0].wind.speed + " " + "mph");
        
        
        
  }); 

  

  // console.log(QueryUrl)
}


buildQueryUrl("bend");







function getUVindex(lat, lon) {
var queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=e64e132275b7b750665db42aefe9b9f8&lat=" + lat +"&lon=" + lon +"&cnt=5"

$.ajax ({
url: queryURL, 
method: "GET", 
}).then(function(response){
console.log(response)
$("#uvIndex").text(response[0].value);
})




}


//=========================================


// CLICK HANDLERS



// var queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=e64e132275b7b750665db42aefe9b9f8&lat=" + lat +"&lon=" + lon +"&cnt={cnt}"
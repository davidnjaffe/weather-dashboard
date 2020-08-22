$("#search-btn").on("click", function (event) {
  event.preventDefault();

  var CityInput = $("#CitySearch").val();
  console.log(CityInput);
  buildQueryUrl(CityInput);
  buildForecast(CityInput)
});

function buildQueryUrl(cityName) {
  $("#CitySearch").val("");

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=e64e132275b7b750665db42aefe9b9f8";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    getUVindex(response.city.coord.lat, response.city.coord.lon);

    for (i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.includes("12:00")) { 
        console.log(response.list[i]);
      }
    }

    

    var currentDate = moment().format("L");

    // console.log(response.list[0].weather[0].icon)
    $("#current-city").text(response.city.name + " " + currentDate);
    $("#weather-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" +
        response.list[0].weather[0].icon +
        ".png"
    );
    $("#temperature").text(response.list[0].main.temp + "°F");
    $("#humidity").text(response.list[0].main.humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + " " + "mph");
  
  });

  

  // console.log(QueryUrl)
}

// buildQueryUrl(CityInput);


 //============== builds forecast cards ===============

function buildForecast(cityName) {
  $("#CitySearch").val("");

  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=e64e132275b7b750665db42aefe9b9f8";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    getUVindex(response.city.coord.lat, response.city.coord.lon);

  

    for (i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.includes("12:00")) { 

      console.log(response.list[i]);
        
      var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
      var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
      var cityDate = $("<h4>").addClass("card-title").text("test");
      var temperature = $("<p>").addClass("card-text forecastTemp").text("");
      var humidity = $("<p>").addClass("card-text forecastHumidity").text("");
      // var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

        cardBody.append(cityDate, temperature, humidity);
        card.append(cardBody);
        $("#forecast").empty();
        $("#forecast").append(card);
      }
    }

  
  });

  


}







//=============== pulls UV index data ====================
function getUVindex(lat, lon) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=e64e132275b7b750665db42aefe9b9f8&lat=" +
    lat +
    "&lon=" +
    lon +
    "&cnt=5";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#uvIndex").text(response[0].value);
  });


  
}

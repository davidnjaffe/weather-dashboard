// console.log("test")

function buildQueryUrl(cityName) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=e64e132275b7b750665db42aefe9b9f8";

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

})


}

// var queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=e64e132275b7b750665db42aefe9b9f8&lat=" + lat +"&lon=" + lon +"&cnt={cnt}"
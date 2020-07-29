function getWeather() {
  var temperature = document.getElementById("temperature");
  var description = document.getElementById("description");
  var location = document.getElementById("location");
  var unsuccessful = document.getElementById("unsuccessful")

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f6b61e62a5122e8e6e1a57c2bc8add04";

  location.innerHTML = "Beep Boop. FINDING WEATHER...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
    api +
    "?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let temp = data.main.temp;
      temperature.innerHTML = temp + "° F";
      location.innerHTML =
        data.name + " (" + latitude + "°, " + longitude + "°)";
      description.innerHTML = data.weather[0].main;
    
    });

   }
   
   function error() {
    console.log("error");
    location.innerHTML = "<span style='color: red;'>PLEASE ENABLE LOCATION! PLEASSSSSSE!!!</span>"
  }

}

getWeather()
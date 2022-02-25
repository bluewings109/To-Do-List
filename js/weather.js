function onFailGettingWeather(){
  const weatherDiv = document.body.querySelector("#weather");
  weatherDiv.innerText=`날씨를 조회할 수 없습니다 🥲`;
}

function onPassGeo(response){
  const lat = response.coords.latitude;
  const lon = response.coords.longitude;
  const API_KEY = "YOUR_API_KEYS";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url).then(response => response.json()).then(response => {
    const locationName = response.name;
    const temperature = response.main.temp;
    const weather = response.weather[0].description;

    const weatherDiv = document.body.querySelector("#weather");
    weatherDiv.innerText=`${locationName} / ${weather} /${temperature}℃`
  }).catch(() => onFailGettingWeather);

}

navigator.geolocation.getCurrentPosition(onPassGeo, onFailGettingWeather);

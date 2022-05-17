const weather = document.querySelector("#weather");
const LATITUDE = "latitude"
const LONGITUDE = "longitude"
const localLat = localStorage.getItem(LATITUDE);
const localLon = localStorage.getItem(LONGITUDE);

function fetchWeather(latitude,longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    localStorage.setItem(LATITUDE,latitude);
    localStorage.setItem(LONGITUDE,longitude);
    fetchWeather(latitude,longitude);
}
function onGeoError() {
    weather.innerText = "Can't find you. No weather for you.";
}

function getWeather() {
    if (localLat) {
        fetchWeather(localLat,localLon);
    } else {
        navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
    }
}

const API_KEY = "cf3281b29439f18a63b476afd82f20fd"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`

    fetch(geoUrl).then(response => response.json()).then(data => {
        const cityName = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        cityName.innerText = `City : ${data.name}  /  `;
        weather.innerText = `Weather : ${data.weather[0].main}  /  Temp : ${data.main.temp}`;
    })
}

function onGeoError() {
    alert("Can't find your location!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

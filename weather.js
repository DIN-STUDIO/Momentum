function onGeoOk(position) {
    console.log(position)

    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log("You live in ", lat, long)
}

function onGeoError() {
    alert("Can't find your location!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
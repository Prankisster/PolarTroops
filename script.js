document.addEventListener("DOMContentLoaded", function () {
    const getLocationButton = document.getElementById("get-location");
    const userCoordinates = document.getElementById("user-coordinates");

    getLocationButton.addEventListener("click", getUserLocation);

    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            userCoordinates.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        userCoordinates.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
    }
});

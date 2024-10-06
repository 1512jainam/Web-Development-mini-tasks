function show(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        showError("Geolocation is not supported by this browser.");
    }
}0

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("latitude").innerHTML = latitude.toFixed(6);
    document.getElementById("longitude").innerHTML = longitude.toFixed(6);
    document.getElementById("location-info").style.display="block";
}

function showError(error) {
    var errorMessage;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
        default:
            errorMessage = "An unspecified error occurred.";
            break;
    }
    alert(errorMessage);
}

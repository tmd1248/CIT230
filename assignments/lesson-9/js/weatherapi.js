var weatherRequest = new XMLHttpRequest();
var requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=01e2cf1ac0f55acf5118804f391b2be5";
weatherRequest.open('GET', requestURL, true);
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("tempspan").innerHTML=weatherData.list[0].main.temp;
}
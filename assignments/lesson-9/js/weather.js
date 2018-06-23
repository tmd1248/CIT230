var weatherRequest = new XMLHttpRequest();
var requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=01e2cf1ac0f55acf5118804f391b2be5";
var i
weatherRequest.open('GET', requestURL, true);
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("tempspan").innerHTML=weatherData.list[0].main.temp;
    document.getElementById("high").innerHTML=weatherData.list[0].main.temp_max;
    document.getElementById("low").innerHTML=weatherData.list[0].main.temp_min;
    document.getElementById("windspeed").innerHTML=weatherData.list[0].wind.speed;
    document.getElementById("conditionspan").innerHTML=weatherData.list[0].weather[0].description;
    document.getElementById("iconspan").innerHTML= '<img src= "http://openweathermap.org/img/w/' + weatherData.list[0].weather[0].icon + '.png" alt="our current weather">';
    document.getElementById(1).innerHTML=weatherData.list[1].main.temp;
        document.getElementById("1").innerHTML=weatherData.list[1].main.temp;    document.getElementById("2").innerHTML=weatherData.list[2].main.temp;    document.getElementById("3").innerHTML=weatherData.list[3].main.temp;    document.getElementById("4").innerHTML=weatherData.list[4].main.temp;    document.getElementById("5").innerHTML=weatherData.list[5].main.temp;    document.getElementById("6").innerHTML=weatherData.list[6].main.temp;    document.getElementById("7").innerHTML=weatherData.list[7].main.temp;    document.getElementById("8").innerHTML=weatherData.list[8].main.temp;    document.getElementById("9").innerHTML=weatherData.list[9].main.temp;    document.getElementById("10").innerHTML=weatherData.list[10].main.temp;   
    
var h = weatherData.list[0].main.temp_max;
var l = weatherData.list[0].main.temp_min;
var s = weatherData.list[0].wind.speed;
var t = (h + l) / 2;
var f = 35.74 + 0.6215 * t - Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("windchillspan").innerHTML = f.toFixed(2);
}
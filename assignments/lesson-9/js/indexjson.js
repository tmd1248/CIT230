var weatherRequest = new XMLHttpRequest();
var requestURL = ' https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('GET', requestURL, true);
weatherRequest.send();
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("franklindata").innerHTML = weatherData.towns[0].name + ": " + weatherData.towns[0].motto + "<br> Our Town was Founded in" + weatherData.towns[0].yearFounded + "<br> " + weatherData.towns[0].currentPopulation + " People live here! <br>" + weatherData.towns[0].averageRainfall + " Is our Average Rainfall";
    document.getElementById("greenvilledata").innerHTML = weatherData.towns[1].name + ": " + weatherData.towns[1].motto + "<br> Our Town was Founded in" + weatherData.towns[1].yearFounded + "<br> " + weatherData.towns[1].currentPopulation + " People live here! <br>" + weatherData.towns[1].averageRainfall + " Is our Average Rainfall";
     document.getElementById("springfielddata").innerHTML = weatherData.towns[3].name + ": " + weatherData.towns[3].motto + "<br> Our Town was Founded in" + weatherData.towns[3].yearFounded + "<br> " + weatherData.towns[3].currentPopulation + " People live here! <br>" + weatherData.towns[3].averageRainfall + " Is our Average Rainfall";
    
}
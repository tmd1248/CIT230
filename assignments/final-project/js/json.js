var bike = new XMLHttpRequest();
var requestURL = "data/price.json";
bike.open('GET', requestURL, true);
bike.send();
bike.onload = function() {
    var bikeData = JSON.parse(bike.responseText);
    document.getElementById('bike1').innerHTML=bikeData.name1 + " $" + bikeData.price1 + "<picture><img class='salesimg' src='images/bad-habit.jpg' alt='the bad habit'></picture>";
    document.getElementById('bike2').innerHTML=bikeData.name2 + " $" + bikeData.price2 + "<picture><img class='salesimg' src='images/liv-lust.jpg' alt='liv lustt'></picture>";
    document.getElementById('bike3').innerHTML=bikeData.name3 + " $" + bikeData.price3 + "<picture><img class='salesimg' src='images/yeti.jpg' alt='The Yeti'></picture>";
}
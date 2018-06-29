
var s = document.getElementById('windspeed').float;
var h = document.getElementById('high').float;
var l = document.getElementById('low').float;
var t = (h + l) / 2;
var f = 35.74 + 0.6215 * t - Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("windchillspan").innerHTML = f.toFixed(2);
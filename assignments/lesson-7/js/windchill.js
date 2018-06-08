var s = 5;
var h = 90;
var l = 66;
var t = (h + l) / 2;
var f = 35.74 + 0.6215 * t - Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById("windchillspan").innerHTML = f.toFixed(2);
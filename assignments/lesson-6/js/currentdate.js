var date = new Date();
var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekDate = weekday[date.getDay];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "november", "December"];
var day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var currentMonth = month[date.getMonth];
var currentDate = day[date.getDate];


document.getElementById("currentDate").innerHTML = weekDate + ", " + currentDate + " " + currentMonth + " "  + date.getFullYear();
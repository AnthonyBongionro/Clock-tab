// Clock
var timer = setInterval(clock ,10);

function clock() {
    document.getElementById("clock").style.color = document.getElementById("timeColor").value;
    document.getElementById("date").style.color = document.getElementById("timeColor").value;
    document.getElementById("mySidenav").style.color = document.getElementById("mmColor").value;
    document.getElementById("mySidenav2").style.color = document.getElementById("colorColor").value;
    document.getElementById("mySidenav3").style.color = document.getElementById("timeColor").value;
}
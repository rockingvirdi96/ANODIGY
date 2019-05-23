var seconds = document.getElementById('secondHand');
var minutes = document.getElementById('minuteHand');
var hours = document.getElementById('hourHand');

hours.style.height = "90px";
minutes.style.height = "130px";


function tick() {
    var time = new Date();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var hrs = time.getHours();
    var secAngle = sec * 6;
    var minAngle = min * 6;
    var hourAngle = hrs * 30;
    seconds.style.transform = "rotate(" + (180 + secAngle) + "deg)";
    minutes.style.transform = "rotate(" + (180 + minAngle) + "deg)";
    hours.style.transform = "rotate(" + (180 + hourAngle) + "deg)";
    setTimeout(function () { tick() }, 500);
}

function startTime() {
    var x = new Date();
    var hrs = x.getHours();
    var min = x.getMinutes();
    var sec = x.getSeconds();

    if (sec < 10) { sec = "0" + sec }

    if (hrs > 12) { hrs -= 12 }
    if (hrs < 10) { hrs = "0" + hrs }
    if (min < 10) { min = "0" + min }
    document.getElementById('time').innerHTML = hrs + ":" + min + ":" + sec;

    setTimeout(function () { startTime() }, 500);
}

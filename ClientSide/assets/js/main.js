var points = 0;
var timerDiv = $('#CurrentTime');
var seconds = 10;
var button = $("#startButton");


$(document).ready(function () {
    console.log("this is a test ");

    button.click(function () {
        countdown();
    });

});


function countdown() {
    seconds = 10;
    points = 0;
    button.prop("disabled", true);
    var timer = setInterval(function () {
        //button.disabled = true;
       
        timerDiv.text(seconds);
        seconds--;
        if (seconds === 0) {
            alert("Game over! Your score is " + points);
            /*scoreDiv.innerHTML = "0";
            words.innerHTML = "";
            button.disabled = false;
            clearInterval(timer);
            seconds = 60;
            timerDiv.innerHTML = "60";
            button.disabled = false;
            */
        }
    }, 1000);
}
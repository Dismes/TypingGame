var points = 0;
var timerDiv = $('#CurrentTime');
const seconds = 10;
var button = $("#startButton");
var scoreDiv = $("#score");
var words = $("ExampleInput");
var typed;


$(document).ready(function () {
    console.log("this is a test ");

    button.click(function (e) {
        countdown();

    });
    
    document.addEventListener("keydown", typing, false);
    
    
});


function countdown() {
    console.log("this is should be the last button pressed " + typed)
    time = seconds;
    timerDiv.text(time);
    points = 0;
    button.prop("disabled", true);
    var timer = setInterval(function () {
        time--;
        timerDiv.text(time);
        if (time === 0) {
            timerDiv.text(time);
            alert("Game over! Your score is " + points);
            words.text("");
            button.prop("disabled", false);
            clearInterval(timer);
            time = seconds
            timerDiv.text(time);
        }
    }, 1000);
}



function typing(e){
    console.log(e.which);
    typed = String.fromCharCode(e.which);
    console.log(typed);
    return typed;
}




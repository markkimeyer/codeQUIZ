document.getElementById("start").addEventListener("click", function() {
   alert("Quiz Will Begin Now");
   setInterval(myTimer, 1000);

})


var timer = document.querySelector("#countdownSpan");
var timerText = 60;

function myTimer() {    
    timerText--;
    timer.textContent = timerText;
}






// function rightAnswer () {
//     valid.textContent = "Correct!";

//     function wrongAnswer () {
//         time = timertext - 10;
//         valid.textContent = "Incorrect";
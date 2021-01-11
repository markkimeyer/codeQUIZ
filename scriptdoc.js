var buttons = document.querySelector(".buttons");
var header = document.querySelector("h3");
var image = document.querySelector("img");
var startButton = document.querySelector("#start");
var bubbles = document.querySelector("#answerBubbles");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");

bubbles.style.display = "none";

startButton.addEventListener("click", function() {
   alert("Quiz Will Begin Now");
   myTimer();
   questionOne();
})


var timer = document.querySelector("#countdownSpan");
var timerText = 60;

function myTimer() {  
    var countdown = setInterval(function() {   
    timerText--;
    timer.textContent = timerText;
    if (timerText === 0 || timerText < 0 ) {
        clearInterval(countdown);
        gameOver();

//adding hide to startbutton





    }

}, 1000)
}

function calcScore() {
    score += timerText;
 }

//TEST: THIS REPLACES BODY WITH "QUESTION ONE" HEADER 3 TEXT
// function questionUno() {
//         var question = document.createElement("div").innerHTML = "<h3>Question ONE</h3>";
//          console.log(question);
//          var replaceBody = document.getElementById("body").innerHTML = question;
//     }

function questionOne() {
startButton.style.display = "none"; 
bubbles.style.display = "block";
header.innerHTML = "<h3>What breed of dog is this?</h3>";
image.src = "https://www.dogtime.com/assets/uploads/2011/01/file_23146_dalmatian.jpg";

    answerOne.innerHTML = "<b>Dalmation</b>";
    
    // answerOne.addEventListener("click", function () {
    //     correct();
    //  });

    answerTwo.innerHTML = "<b>Labrador Retriever</b>";
    
    // answerTwo.addEventListener("click", function () {
    //     correct();
    //  });

    answerThree.innerHTML = "<b>Fire Truck</b>";
    
    // answerThree.addEventListener("click", function () {
    //     correct();
    //  });

    answerFour.innerHTML = "<b>Polka Dot</b>";
    
    // answerFour.addEventListener("click", function () {
    //     correct();
    //  });
}

    //HTML buttons
//     document.querySelector("container") = "hello"
//     <div class = "row">
//     <div class="btn-group col-lg-4"></div>
//     <div class="btn-group-vertical col-lg-4">
//     <button type="button" class="btn btn-outline-info">1</button>
//     <button type="button" class="btn btn-outline-info">2</button>
//     <button type="button" class="btn btn-outline-info">3</button>
//     <button type="button" class="btn btn-outline-info">4</button>
//     </div>
// <div class="btn-group col-lg-4"></div>
// </div>

    // $("Question1").html("<h1>"ANSWER ME"<h1>");


//Game Over
function gameOver() {


}



//     function wrongAnswer () {
//         time = timertext - 10;
//         ;
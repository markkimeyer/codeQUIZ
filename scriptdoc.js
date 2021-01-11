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

questionNumber = 1;

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
image.src = "images/dalmation.jpg";

    answerOne.innerHTML = "<b>Dalmation</b>";
    
    answerOne.addEventListener("click", function () {
        correct();
     });

    answerTwo.innerHTML = "<b>Labrador Retriever</b>";
    
    // answerTwo.addEventListener("click", function () {
    //     incorrect();
    //  });

    answerThree.innerHTML = "<b>Fire Truck</b>";
    
    // answerThree.addEventListener("click", function () {
    //     incorrect();
    //  });

    answerFour.innerHTML = "<b>Polka Dot</b>";
    
    // answerFour.addEventListener("click", function () {
    //     incorrect();
    //  });
}

function questionTwo() {
    startButton.style.display = "none"; 
    bubbles.style.display = "block";
    header.innerHTML = "<h3>What breed of dog is this?</h3>";
    image.src = "images/gshort.jpg";
    
        answerOne.innerHTML = "<b>English Pointer</b>";
        
        answerOne.addEventListener("click", function () {
            correct();
         });
    
        answerTwo.innerHTML = "<b>German Shepherd</b>";
        
        // answerTwo.addEventListener("click", function () {
        //     incorrect();
        //  });
    
        answerThree.innerHTML = "<b>German Shorthair Pointer</b>";
        
        answerThree.addEventListener("click", function () {
            correct();
         });
    
        answerFour.innerHTML = "<b>Polka Dot</b>";
        
        // answerFour.addEventListener("click", function () {
        //     incorrect();
        //  });
    }   

    function questionThree() {
        startButton.style.display = "none"; 
        bubbles.style.display = "block";
        header.innerHTML = "<h3>What breed of dog is this?</h3>";
        image.src = "images/ausshep.jpg";
        
            answerOne.innerHTML = "<b>Australian Cattle Dog</b>";
            
            answerOne.addEventListener("click", function () {
                correct();
             });
        
            answerTwo.innerHTML = "<b>Australian Shepherd</b>";
            
            answerTwo.addEventListener("click", function () {
                correct();
             });
        
            answerThree.innerHTML = "<b>English Setter</b>";
            
            answerThree.addEventListener("click", function () {
                correct();
             });
        
            answerFour.innerHTML = "<b>Polka Dot</b>";
            
            // answerFour.addEventListener("click", function () {
            //     incorrect();
            //  });
        }   

//Game Over
function gameOver() {


}

function correct() {
    // alert("DING DING DING");
    questionNumber ++;
    nextQuestion();
}

function nextQuestion () {
if (questionNumber === 2) {
    questionTwo();
};
if (questionNumber === 3) {
    questionThree();
}
}
//     function wrongAnswer () {
//         time = timertext - 10;
//         ;
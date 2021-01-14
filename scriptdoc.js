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

var timer = document.querySelector("#countdownSpan");
var timerText = 40;
var countdown;

startButton.addEventListener("click", function() {
   alert("You have " + timerText + " seconds to complete the quiz. Click OK to begin.");
   myTimer();
   questionOne();
})


function myTimer() {  
   countdown = setInterval(function() {   
    timerText--;
    timer.textContent = "Time Left: " + timerText;
    if (timerText <= 0 ) {
        clearInterval(countdown);
        timer.textContent = "TIME IS UP!"
        gameOver(timerText);


    }

}, 1000)
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
    
    answerTwo.addEventListener("click", function () {
        incorrect();
     });

    answerThree.innerHTML = "<b>Fire Truck</b>";
    
    answerThree.addEventListener("click", function () {
        incorrect();
     });

    answerFour.innerHTML = "<b>Polka Dot</b>";
    
    answerFour.addEventListener("click", function () {
        incorrect();
     });
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
        
        answerTwo.addEventListener("click", function () {
            incorrect();
         });
    
        answerThree.innerHTML = "<b>German Shorthair Pointer</b>";
        
        answerThree.addEventListener("click", function () {
            correct();
         });
    
        answerFour.innerHTML = "<b>Polka Dot</b>";
        
        answerFour.addEventListener("click", function () {
            incorrect();
         });
    }   

    function questionThree() {
        startButton.style.display = "none"; 
        bubbles.style.display = "block";
        header.innerHTML = "<h3>What breed of dog is this?</h3>";
        image.src = "images/ausshep.jpg";
        
            answerOne.innerHTML = "<b>Ausiedoodle</b>";
            
            answerOne.addEventListener("click", function () {
                incorrect();
             });
        
            answerTwo.innerHTML = "<b>Australian Shepherd</b>";
            
            answerTwo.addEventListener("click", function () {
                correct();
                gameOver(timerText + 20);
             });
        
            answerThree.innerHTML = "<b>English Setter</b>";
            
            answerThree.addEventListener("click", function () {
                incorrect();
             });
        
            answerFour.innerHTML = "<b>Polka Dot</b>";
            
            answerFour.addEventListener("click", function () {
                incorrect();
             });
        }   

//Game Over
function gameOver(timerText) {
    timer.style.display = "none";
    clearInterval(countdown);
    var score = timerText;
   alert("Quiz Over! Your score is " + score + "!");
    var initials = prompt("Enter your initials to record them to the Hall of Fame!");
    localStorage.setItem("HOF", initials);
    localStorage.setItem("score", score);
    console.log(initials);
    console.log(score);

}


function correct() {
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
    function incorrect () {
       timer.textContent = "Time Left: " + timerText;
       timerText -= 10;
       if (timerText <= 0 ) {
        clearInterval(countdown);
        timer.textContent = "TIME IS UP!"
        gameOver();
       }
    }
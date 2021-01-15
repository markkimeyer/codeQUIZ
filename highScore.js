var hallOfFame = document.querySelector("#initials");
var initials = localStorage.getItem("HOF");
hallOfFame.textContent = initials;

var record = document.querySelector("#score");
var highScore = localStorage.getItem("score");
record.textContent = highScore;
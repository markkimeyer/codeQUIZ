var hallOfFame = document.querySelector(".highScore");
var initials = localStorage.getItem("HOF");
hallOfFame.textContent = initials;
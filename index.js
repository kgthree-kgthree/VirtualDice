function loadDiceImage(randomNumber1, randomNumber2) {
  document.querySelector("#p1 img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector("#p2 img").setAttribute("src", "images/dice" + randomNumber2 + ".png");
}


function declareWinner(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector(".btn").addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  loadDiceImage(randomNumber1, randomNumber2);
  declareWinner(randomNumber1, randomNumber2);
  // console.log(event);
});

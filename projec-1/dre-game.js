"use strict";
// document.querySelector(".number").textContent = 10;
// document.querySelector(".highscore").textContent = 0;
// document.querySelector(".score").textContent = 20;
let gamePlayedTime = 0;
let highScore = 0;
let scoreNumber = 5;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const newElement = `<p> The Secret Number is ${secretNumber} </p>`;
const finalDisplay = document.querySelector(".game-times-display").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  console.log(guessValue, typeof guessValue);
  if (!guessValue) {
    document.querySelector(".message").textContent = "⛔️ No Number! !! !!!";
  } else if (guessValue === secretNumber) {
    document.querySelector(".message").textContent =
      "👍 Correct Number! !! !!!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("h1").textContent = "🌞 Congratulation ! !! !!!";
    document.querySelector("h1").style.color = "#aaaa03";
    document.querySelector(".again").style.backgroundColor = "#aaaa03";
    document.querySelector(".again").style.color = "white";
    document.querySelector(".number").style.width = "20%";
    document.querySelector(".number").style.backgroundColor = "#aaaa03";
    document.querySelector(".number").style.color = "white";
    document.querySelector(".between").textContent = "< You Guess is Right >";
    document.querySelector(".between").style.color = "#aaaa03";

    if (scoreNumber === 0) {
      highScore += 0;
      document.querySelector(".highscore").textContent = highScore;
    } else if (scoreNumber === 1) {
      highScore += 10;
      document.querySelector(".highscore").textContent = highScore;
    } else if (scoreNumber === 2) {
      highScore += 20;
      document.querySelector(".highscore").textContent = highScore;
    } else if (scoreNumber === 3) {
      highScore += 30;
      document.querySelector(".highscore").textContent = highScore;
    } else if (scoreNumber === 4) {
      highScore += 40;
      document.querySelector(".highscore").textContent = highScore;
    } else if (scoreNumber === 50) {
      highScore += 50;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessValue > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".message").textContent =
        "🔼 Too High Number! !! !!!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      document.querySelector(".message").textContent =
        "💥 You Lost The Game! !! !!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".append").innerHTML = newElement;
    }
  } else if (guessValue < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".message").textContent =
        "🔽 Too Low Number! !! !!!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      document.querySelector(".message").textContent =
        "💥 You Lost The Game! !! !!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".append").innerHTML = newElement;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scoreNumber = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector("header").style.backgroundColor = "#aaaa03";
  document.querySelector("h1").textContent = "Guess The Number!";
  document.querySelector("h1").style.color = "white";
  document.querySelector(".again").style.backgroundColor = "white";
  document.querySelector(".again").style.color = "#aaaa03";
  document.querySelector(".number").style.width = "10%";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.backgroundColor = "white";
  document.querySelector(".number").style.color = "#aaaa03";
  document.querySelector(".guess").value = "";
  document.querySelector(".between").style.color = "white";
  document.querySelector(".bet-1-20").textContent =
    "< Number is between 1 and 20 >";
  document.querySelector(".append").textContent = "";
  document.querySelector(
    ".game-times"
  ).textContent = ` Times Game Played: ${gamePlayedTime}`;

  if (gamePlayedTime >= 0) {
    console.log(gamePlayedTime++);
  } else if (gamePlayedTime === 4) {
    gamePlayedTime = 5;
    document.querySelector(".game-times-display").textContent = "Final";
    // if (finalDisplay === "Final") {
    //   if (highScore > 50) {
    //     console.log(
    //       (document.querySelector(
    //         body
    //       ).textContent = ` Congrtulation! !! !!! !!!!
    //     Your Totalscore is ${highScore}`)
    //     );
    //   } else {
    //     document.querySelector(
    //       body
    //     ).textContent = `Try Again Your Totalscore is ${highScore}
    //     You Lost The Game`;
    //   }
    // }
  }
});

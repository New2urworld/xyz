"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
const highScore = 0;
// fuction highScore() {
//   if(highScore > score) {
//       return highScore;}
//   else if (highScore <= score) {
//       return score;}
//   else {
//       return 0;}
// }

// document.querySelector(".score").textContent = 10;

// document.querySelector(".highscore").textContent = 10;
// document.querySelector(".number").textContent = 10;

// document.querySelector(".message").textContent = "🎊🎉correct number";

const checkClick = document.querySelector(".check");
const guessedNumber = document.querySelector(".guess");
const changeScore = document.querySelector(".score");
const changeHighescore = document.querySelector(".highscore");
const changeMessage = document.querySelector(".message");
const showNumber = document.querySelector(".number");

checkClick.addEventListener("click", function () {
  let guess = Number(guessedNumber.value);
  console.log(guess, typeof guess);
  if (!guess) {
    changeMessage.textContent = "Please enter a number (between 1 to 20) ";
  } else {
    if (guess === secretNumber) {
      changeMessage.textContent = "🎉🎊 Correct Number You Won";
      showNumber.textContent = secretNumber;
      document.querySelector(".body").style.backgroundColor = green;
    } else if (guess > secretNumber) {
      changeMessage.textContent = "too High🙄";
      score--;
      changeScore.textContent = score;
    } else if (guess < secretNumber) {
      changeMessage.textContent = "too Low😣";
      score--;
      changeScore.textContent = score;
    }
  }
  //how to change highscore and how to reload game with again ??????
  //   const newHigh = fuction();
  //   if (highScore > score) {
  //     return highScore;
  //   } else if (highScore <= score) {
  //     return score;
  //   } else {
  //     return 0;
  //   }

  //   changeHighescore.textContent = newHigh;
});

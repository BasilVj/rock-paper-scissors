const player1Text = document.querySelector("#player1Text");
const player2Text = document.querySelector("#player2Text");
const resultText = document.querySelector("#resultText");
const choiceBtns1 = document.querySelectorAll(".choiceBtn1");
const newGame = document.querySelector("#newGame");
let player1;
let player2;
let result;
let displaybtn1 = document.getElementById("display-choicebtn1");
let displaybtn2 = document.getElementById("display-choicebtn2");
const choiceBtns2 = document.querySelectorAll(".choiceBtn2");

choiceBtns1.forEach((button) => {
  button.addEventListener("click", () => {
    player1 = button.textContent;
    displaybtn1.style.display = "none";
    displaybtn2.style.display = "block";


  });
});

choiceBtns2.forEach((button) => {
  button.addEventListener("click", () => {
    player2 = button.textContent;
    displaybtn2.style.display = "none";
    displaybtn1.style.display = "block";
    checkwinner();
  });
});

function checkwinner() {
  if (player1 && player2) {
    if (player1 == player2) {
      resultText.textContent = `Draw`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "ROCK" && player2 == "PAPER") {
      resultText.textContent = `Player 2 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "ROCK" && player2 == "SCISSORS") {
      resultText.textContent = `Player 1 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "PAPER" && player2 == "ROCK") {
      resultText.textContent = `Player 1 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "PAPER" && player2 == "SCISSORS") {
      resultText.textContent = `Player 2 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "SCISSORS" && player2 == "PAPER") {
      resultText.textContent = `Player 1 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    } else if (player1 == "SCISSORS" && player2 == "ROCK") {
      resultText.textContent = `Player 2 Won`;
      player1Text.textContent = `Player1:${player1}`;
      player2Text.textContent = `Player2:${player2}`;
    }

    player1 = undefined;
    player2 = undefined;
  }
}

newGame.addEventListener("click", () => {
  player1 = undefined;
  player2 = undefined;
  player1Text.textContent = `Player1:`;
  player2Text.textContent = `Player2:`;
  resultText.textContent = `Result :`;
});
const form = document.querySelector("form");
const guessNo = document.querySelector("#guessField");
const randomNo = Math.floor(Math.random() * 100 + 1);
const guessSlot = document.querySelector(".guesses");
const remainingAttempts = document.querySelector(".lastResult");
const hints = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const guess = parseInt(guessNo.value);
    validation(guess);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNo) {
    displayMsg(`You guessed it right`);
    endGame();
  } else if (guess < randomNo) {
    displayMsg(`Number is TO low ${randomNo}`);
  } else if (guess > randomNo) {
    displayMsg(`Number is TO High ${randomNo}`);
  }
}

function displayMsg(message) {
  hints.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  guessNo.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remainingAttempts.innerHTML = `${10 - numGuess}`;
}

function endGame() {
  guessNo.value = "";
  guessNo.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingAttempts.innerHTML = `${11 - numGuess}`;
    guessNo.removeAttribute("disabled");
    startOver.removeChild(p);
    hints.innerHTML = "";

    playGame = true;
  });
}

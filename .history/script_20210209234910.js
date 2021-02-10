"use strict";

//DOM elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice function
btnRoll.addEventListener("click", function () {
  // Generate random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);
  // Check if rolled a 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

"use strict";

//DOM elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Rolling dice function
btnRoll.addEventListener("click", function () {
  // Generate random
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice

  // Check if rolled a 1
});

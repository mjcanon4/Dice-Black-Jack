"use strict";

const getNum = Math.trunc(Math.random() * 6) + 1;

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

score0El.textContent = 0;
score1El.textContent = 0;

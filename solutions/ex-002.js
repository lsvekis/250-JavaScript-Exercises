// Exercise 002 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Variables Tour — let/const, output username, score, isLoggedIn
const username = "coder_lars";
let score = 1200;
const isLoggedIn = true;

rt.println("username:", username);
rt.println("score:", score);
rt.println("isLoggedIn:", isLoggedIn);

// demonstrate let can change
score += 75;
rt.println("score after bonus:", score);
};

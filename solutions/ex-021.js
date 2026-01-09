// Exercise 021 — Chapter 3 canonical solution
window.exercise = function(rt) {
// Arrays 101 — create, read, update
const languages = ["JavaScript", "Python", "Go"];
rt.println("start:", JSON.stringify(languages));

rt.println("first:", languages[0]);
rt.println("last:", languages[languages.length - 1]);

languages[1] = "TypeScript";
rt.println("after update:", JSON.stringify(languages));
};

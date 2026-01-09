// Exercise 013 — Chapter 2 canonical solution
window.exercise = function(rt) {
// If/Else Decision — categorize a score into grades
const score = 83;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

rt.println("score:", score);
rt.println("grade:", grade);
};

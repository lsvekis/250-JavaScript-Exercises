// Exercise 034 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Palindrome Check — function that tests a word/phrase
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned.length > 0 && cleaned === reversed;
}

const tests = [
  "racecar",
  "A man, a plan, a canal: Panama!",
  "JavaScript",
  "12321",
  ""
];

tests.forEach(t => rt.println(JSON.stringify(t), "=>", isPalindrome(t)));
};

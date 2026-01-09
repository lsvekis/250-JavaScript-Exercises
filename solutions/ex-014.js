// Exercise 014 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Switch Menu — map a day number to a day name
const dayNumber = 5; // 1=Mon ... 7=Sun
let dayName;

switch (dayNumber) {
  case 1: dayName = "Monday"; break;
  case 2: dayName = "Tuesday"; break;
  case 3: dayName = "Wednesday"; break;
  case 4: dayName = "Thursday"; break;
  case 5: dayName = "Friday"; break;
  case 6: dayName = "Saturday"; break;
  case 7: dayName = "Sunday"; break;
  default: dayName = "Invalid day";
}

rt.println("dayNumber:", dayNumber);
rt.println("dayName:", dayName);
};

// Exercise 004 — Chapter 1 canonical solution
window.exercise = function(rt) {
// Template Strings Intro — build a profile card sentence
const profile = {
  name: "Ava",
  role: "Frontend Developer",
  city: "Toronto",
  years: 2
};

const sentence = `Profile: ${profile.name} — ${profile.role} in ${profile.city} (${profile.years} years experience)`;
rt.println(sentence);
};

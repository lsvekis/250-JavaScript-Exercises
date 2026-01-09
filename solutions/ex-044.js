// Exercise 044 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Sort Objects — sort by last name then first name
const people = [
  { first: "Zoe", last: "Able" },
  { first: "Ann", last: "Able" },
  { first: "Bob", last: "Cruz" },
  { first: "Amy", last: "Cruz" },
  { first: "Dan", last: "Baker" }
];

const sorted = [...people].sort((a, b) =>
  a.last.localeCompare(b.last) || a.first.localeCompare(b.first)
);

rt.println("sorted:");
sorted.forEach(p => rt.println(`${p.last}, ${p.first}`));
};

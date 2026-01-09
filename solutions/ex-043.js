// Exercise 043 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Group By — turn a list into an object grouped by category
const items = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "hammer", category: "tool" },
  { name: "tape", category: "tool" },
  { name: "carrot", category: "veg" }
];

const grouped = items.reduce((acc, item) => {
  (acc[item.category] ||= []).push(item.name);
  return acc;
}, {});

rt.println(JSON.stringify(grouped, null, 2));
};

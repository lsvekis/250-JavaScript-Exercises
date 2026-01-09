// Exercise 118 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Composition — build behavior from smaller objects (no inheritance)
function withTimestamp(obj) {
  return {
    ...obj,
    createdAt: new Date().toISOString()
  };
}

function withId(obj) {
  return {
    ...obj,
    id: Math.random().toString(16).slice(2, 10)
  };
}

const base = { type: "note", text: "Practice JavaScript daily." };
const note = withTimestamp(withId(base));

rt.println(JSON.stringify(note, null, 2));
rt.println("Composition builds objects by layering features.");
};

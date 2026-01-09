// Exercise 049 — Chapter 5 canonical solution
window.exercise = function(rt) {
// Deep Clone via JSON — show when it works and when it doesn’t
const original = {
  name: "Lars",
  meta: { active: true, tags: ["js", "book"] }
};

const cloned = JSON.parse(JSON.stringify(original));
cloned.meta.tags.push("clone");

rt.println("original:", JSON.stringify(original));
rt.println("cloned:", JSON.stringify(cloned));
rt.println("Note: JSON clone drops functions, Dates, undefined, etc.");
};

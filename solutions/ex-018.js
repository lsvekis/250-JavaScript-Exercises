// Exercise 018 — Chapter 2 canonical solution
window.exercise = function(rt) {
// Parameters & Defaults — make a function flexible
function makeTag(text, tagName = "p") {
  return `<${tagName}>${text}</${tagName}>`;
}

rt.println(makeTag("Hello"));
rt.println(makeTag("Important!", "strong"));
rt.println(makeTag("Title", "h2"));
};

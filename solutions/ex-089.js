// Exercise 089 — Chapter 9 canonical solution
window.exercise = function(rt) {
// Safe JSON Parse — never crash on invalid JSON
function safeJsonParse(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

const good = '{"name":"Ava","score":10}';
const bad = '{"name": "Ava", score: 10}';

rt.println("good:", JSON.stringify(safeJsonParse(good)));
rt.println("bad:", JSON.stringify(safeJsonParse(bad)));
};

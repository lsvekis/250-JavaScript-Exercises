// Exercise 121 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Try/Catch Basics — handle a JSON parse error without crashing
const good = '{"ok":true,"count":3}';
const bad = '{"ok": true, count: 3}';

function parseJson(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

rt.println("good:", JSON.stringify(parseJson(good)));
rt.println("bad :", JSON.stringify(parseJson(bad)));
rt.println("Key idea: errors are values you can handle.");
};

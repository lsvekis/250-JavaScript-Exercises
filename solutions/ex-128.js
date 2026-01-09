// Exercise 128 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Mini Test Runner — run unit tests in the browser
const box = rt.section("Mini Test Runner");
const out = rt.el("div", { class:"output" }, "Running tests…");
box.appendChild(out);

function test(name, fn) {
  try {
    fn();
    return { name, ok: true };
  } catch (err) {
    return { name, ok: false, error: err.message };
  }
}

function expectEqual(actual, expected) {
  if (actual !== expected) throw new Error(`expected ${expected} but got ${actual}`);
}

// Code under test
function sum(a, b) { return a + b; }
function upper(s) { return String(s).toUpperCase(); }

const results = [
  test("sum(2,3)=5", () => expectEqual(sum(2,3), 5)),
  test("sum(-1,1)=0", () => expectEqual(sum(-1,1), 0)),
  test("upper('js')='JS'", () => expectEqual(upper("js"), "JS")),
  test("upper(123)='123'", () => expectEqual(upper(123), "123")),
];

const passed = results.filter(r => r.ok).length;
out.textContent = results.map(r => r.ok ? `✅ ${r.name}` : `❌ ${r.name} — ${r.error}`).join("\n")
  + `\n\nPassed: ${passed}/${results.length}`;

rt.println("Tests finished. Add your own tests with test(name, fn).");
};

// Exercise 182 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Table-Driven Tests — run the same test with many cases
function add(a, b) { return a + b; }

function runTable(cases, fn) {
  let passed = 0;
  for (const c of cases) {
    try { fn(c); passed++; }
    catch (err) { rt.println("❌", c.name, "-", err.message); }
  }
  rt.println(`Passed ${passed}/${cases.length}`);
}

const cases = [
  { name:"2+3=5", a:2, b:3, expected:5 },
  { name:"-1+1=0", a:-1, b:1, expected:0 },
  { name:"0+0=0", a:0, b:0, expected:0 },
];

runTable(cases, ({a,b,expected}) => {
  const got = add(a,b);
  if (got !== expected) throw new Error(`expected ${expected} got ${got}`);
});
};

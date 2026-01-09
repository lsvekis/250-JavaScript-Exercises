// Exercise 187 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Lint-Like Checks — basic code quality rules for strings
// Not a real linter, but demonstrates the idea.
function lintText(code) {
  const issues = [];
  const lines = code.split("\n");

  lines.forEach((line, i) => {
    if (line.includes("var ")) issues.push({ line: i+1, msg: "Avoid var; use let/const" });
    if (/\s+$/.test(line)) issues.push({ line: i+1, msg: "Trailing whitespace" });
    if (line.length > 100) issues.push({ line: i+1, msg: "Line > 100 chars" });
  });

  return issues;
}

const sample = [
  "var x = 1;   ",
  "const name = 'Ava';",
  "let ok = true;",
].join("\n");

const issues = lintText(sample);
rt.println("issues found:", issues.length);
issues.forEach(i => rt.println(`line ${i.line}: ${i.msg}`));
};

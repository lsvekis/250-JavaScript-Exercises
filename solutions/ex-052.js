// Exercise 052 — Chapter 6 canonical solution
window.exercise = function(rt) {
// Text & HTML — update textContent vs innerHTML safely
const box = rt.section("Text vs HTML");
const info = rt.el("div", { class: "output" }, "(not set yet)");
box.appendChild(info);

const safeText = "<strong>Not bold</strong> (textContent)";
info.textContent = safeText;
rt.println("textContent set to:", safeText);

const html = "<strong>Bold</strong> (innerHTML)";
const htmlBox = rt.el("div", { class: "output" });
htmlBox.innerHTML = html;
box.appendChild(htmlBox);
rt.println("innerHTML set to:", html);
rt.println("Tip: Prefer textContent for user input to avoid injection.");
};

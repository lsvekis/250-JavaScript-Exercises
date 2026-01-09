// Exercise 066 — Chapter 7 canonical solution
window.exercise = function(rt) {
// Local Storage — save and restore a note
const box = rt.section("Persistent Note");
const key = "js250_note";
const textarea = document.createElement("textarea");
textarea.className = "input";
textarea.rows = 4;
textarea.placeholder = "Write a note (saved automatically)…";

const info = rt.el("div", { class:"small" }, "Saved to localStorage.");
box.appendChild(textarea);
box.appendChild(info);

textarea.value = localStorage.getItem(key) || "";

textarea.addEventListener("input", ()=>{
  localStorage.setItem(key, textarea.value);
});

rt.println("Reload the page — your note should remain.");
};

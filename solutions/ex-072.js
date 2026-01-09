// Exercise 072 — Chapter 8 canonical solution
window.exercise = function(rt) {
// Custom Events — dispatch and listen with detail payload
const box = rt.section("Custom Event");
const btn = rt.el("button", { class:"btn" }, "Send Event");
const out = rt.el("div", { class:"output" }, "Waiting…");

box.appendChild(btn);
box.appendChild(out);

const EVENT_NAME = "user:login";

window.addEventListener(EVENT_NAME, (e) => {
  out.textContent = `Received ${EVENT_NAME}: ${JSON.stringify(e.detail)}`;
  rt.println("event detail:", JSON.stringify(e.detail));
});

btn.addEventListener("click", () => {
  const detail = { user: "ava", at: new Date().toLocaleTimeString() };
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail }));
});

rt.println("Click the button to dispatch a CustomEvent.");
};

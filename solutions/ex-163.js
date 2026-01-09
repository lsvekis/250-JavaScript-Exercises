// Exercise 163 — Chapter 17 canonical solution
window.exercise = function(rt) {
// Storage Events — sync changes across tabs (localStorage)
const box = rt.section("Storage Event (Multi-tab)");
const key = "js250_shared_msg";

const input = rt.input("Message to broadcast…");
const send = rt.el("button", { class:"btn" }, "Broadcast");
const out = rt.el("div", { class:"output" }, "Open this exercise in 2 tabs.");

box.appendChild(rt.el("div",{class:"row"}, input, send));
box.appendChild(out);

send.addEventListener("click", ()=>{
  const msg = input.value.trim();
  if (!msg) return;
  localStorage.setItem(key, JSON.stringify({ msg, at: Date.now() }));
  out.textContent = "Sent: " + msg;
});

window.addEventListener("storage", (e)=>{
  if (e.key !== key) return;
  try {
    const data = JSON.parse(e.newValue);
    out.textContent = `Received: "${data.msg}"`;
    rt.println("received at:", new Date(data.at).toLocaleTimeString());
  } catch {}
});
};

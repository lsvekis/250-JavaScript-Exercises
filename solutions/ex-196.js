// Exercise 196 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Notification API (Permission) — request permission and notify
const box = rt.section("Notifications (Optional)");
const btn = rt.el("button", { class:"btn" }, "Enable Notifications");
const ping = rt.el("button", { class:"btn" }, "Send Test Notification");
const out = rt.el("div", { class:"output" }, "Notifications require permission and may be blocked on some browsers.");
box.appendChild(rt.el("div",{class:"row"}, btn, ping));
box.appendChild(out);

function supported(){
  return "Notification" in window;
}

btn.addEventListener("click", async ()=>{
  if (!supported()) { out.textContent = "❌ Notifications not supported."; return; }
  const p = await Notification.requestPermission();
  out.textContent = "Permission: " + p;
});

ping.addEventListener("click", ()=>{
  if (!supported()) { out.textContent = "❌ Notifications not supported."; return; }
  if (Notification.permission !== "granted") {
    out.textContent = "Permission not granted. Click Enable first.";
    return;
  }
  new Notification("JS Exercise", { body: "This is a test notification." });
  out.textContent = "✅ Notification sent (if your browser shows it).";
});
};

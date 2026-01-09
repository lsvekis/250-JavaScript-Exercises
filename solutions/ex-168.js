// Exercise 168 — Chapter 17 canonical solution
window.exercise = function(rt) {
// Expiring Cache — store value with TTL and auto-expire
const box = rt.section("TTL Cache");
const key = "js250_ttl";
const setBtn = rt.el("button", { class:"btn" }, "Set (5s)");
const getBtn = rt.el("button", { class:"btn" }, "Get");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(rt.el("div",{class:"row"}, setBtn, getBtn));
box.appendChild(out);

function setWithTTL(value, ttlMs) {
  const record = { value, expiresAt: Date.now() + ttlMs };
  localStorage.setItem(key, JSON.stringify(record));
}

function getWithTTL() {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    const rec = JSON.parse(raw);
    if (Date.now() > rec.expiresAt) { localStorage.removeItem(key); return null; }
    return rec.value;
  } catch { return null; }
}

setBtn.onclick = ()=> {
  setWithTTL({ msg:"hello", at: new Date().toLocaleTimeString() }, 5000);
  out.textContent = "Set for 5 seconds.";
};

getBtn.onclick = ()=> {
  const v = getWithTTL();
  out.textContent = v ? ("✅ " + JSON.stringify(v)) : "Expired or missing ❌";
};
};

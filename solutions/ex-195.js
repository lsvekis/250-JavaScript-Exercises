// Exercise 195 — Chapter 20 canonical solution
window.exercise = function(rt) {
// Geolocation (Permission) — request location with safe fallback
const box = rt.section("Geolocation (Optional)");
const btn = rt.el("button", { class:"btn" }, "Request Location");
const out = rt.el("div", { class:"output" }, "This demo rounds coordinates and works only if you allow permission.");
box.appendChild(btn);
box.appendChild(out);

btn.addEventListener("click", ()=>{
  if (!navigator.geolocation) {
    out.textContent = "❌ Geolocation not supported in this browser.";
    return;
  }
  out.textContent = "Requesting…";
  navigator.geolocation.getCurrentPosition(
    (pos)=>{
      const lat = Math.round(pos.coords.latitude * 100) / 100;
      const lon = Math.round(pos.coords.longitude * 100) / 100;
      out.textContent = `✅ Approx location (rounded):\nlat=${lat}\nlon=${lon}`;
      rt.println("accuracy(m):", Math.round(pos.coords.accuracy));
    },
    (err)=>{
      out.textContent = "❌ Permission denied or unavailable.\n(That’s okay — this exercise is optional.)";
      rt.println("geo error:", err.message);
    },
    { enableHighAccuracy:false, timeout:5000, maximumAge: 60_000 }
  );
});
};

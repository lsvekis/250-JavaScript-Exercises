// Exercise 164 — Chapter 17 canonical solution
window.exercise = function(rt) {
// URL State — read/write state in the querystring
const box = rt.section("URL State");
const name = rt.input("Name (stored in URL)");
const color = rt.input("Color (stored in URL)");
const apply = rt.el("button", { class:"btn" }, "Apply to URL");
const out = rt.el("div", { class:"output" }, "");
box.appendChild(name);
box.appendChild(color);
box.appendChild(apply);
box.appendChild(out);

function read(){
  const u = new URL(location.href);
  name.value = u.searchParams.get("name") || "";
  color.value = u.searchParams.get("color") || "";
  out.textContent = `URL says: name=${name.value || "(none)"} | color=${color.value || "(none)"}`;
}

apply.addEventListener("click", ()=>{
  const u = new URL(location.href);
  u.searchParams.set("name", name.value.trim());
  u.searchParams.set("color", color.value.trim());
  history.replaceState(null, "", u.toString());
  read();
  rt.println("updated url (replaceState)");
});

read();
};

// Exercise 144 — Chapter 15 canonical solution
window.exercise = function(rt) {
// POST (Mock) — send data and show created resource
const box = rt.section("Mock POST /todos");
const input = rt.input("New todo…");
const btn = rt.el("button", { class:"btn" }, "Create");
const out = rt.el("div", { class:"output" }, "Waiting…");
box.appendChild(rt.el("div", { class:"row" }, input, btn));
box.appendChild(out);

function mockPost(url, body) {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve({ ok:true, status:201, json: async ()=> ({ id: Date.now(), ...body }) });
    }, 450);
  });
}

btn.addEventListener("click", async ()=>{
  const text = input.value.trim();
  if (!text) return;
  out.textContent = "Sending…";
  const res = await mockPost("/todos", { text, done:false });
  const created = await res.json();
  out.textContent = "Created:\n" + JSON.stringify(created, null, 2);
  input.value = "";
});
};

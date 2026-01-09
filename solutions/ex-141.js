// Exercise 141 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Fetch Basics (Mock) — simulate GET and render results
const box = rt.section("Mock GET /posts");
const btn = rt.el("button", { class:"btn" }, "Load Posts");
const out = rt.el("div", { class:"output" }, "Click to load…");
box.appendChild(btn);
box.appendChild(out);

function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: async () => ([
          { id: 1, title: "Hello JS", body: "Practice every day." },
          { id: 2, title: "DOM Tips", body: "Use event delegation." },
          { id: 3, title: "Async", body: "Microtasks run before timers." },
        ])
      });
    }, 500);
  });
}

btn.addEventListener("click", async ()=>{
  out.textContent = "Loading…";
  const res = await mockFetch("/posts");
  const data = await res.json();
  out.textContent = data.map(p => `#${p.id} ${p.title}\n${p.body}`).join("\n\n");
  rt.println("loaded posts:", data.length);
});
};

// Exercise 223 — Chapter 23 canonical solution
window.exercise = function(rt) {
// POST Request — send JSON and display echoed response
const box = rt.section("POST JSON");
const title = rt.input("title (e.g. My Post)");
const body = rt.input("body (e.g. Hello!)");
const send = rt.el("button", { class:"btn" }, "Send POST");
const out = rt.el("div", { class:"output" }, "");

box.appendChild(title);
box.appendChild(body);
box.appendChild(send);
box.appendChild(out);

async function post(){
  out.textContent = "Sending…";
  const payload = { title: title.value.trim() || "My Post", body: body.value.trim() || "Hello!", userId: 1 };
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    out.textContent = "Response:\n" + JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = "❌ POST failed: " + err.message + "\n\n(Local fallback)\n" + JSON.stringify({ id: 101, ...payload }, null, 2);
  }
}
send.addEventListener("click", post);
};

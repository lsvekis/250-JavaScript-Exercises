// Exercise 143 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Response Handling — ok/status and safe JSON parsing
function fakeResponse({ ok, status, body }) {
  return {
    ok,
    status,
    async text(){ return body; },
    async json(){ return JSON.parse(body); }
  };
}

async function parseJsonSafely(res) {
  if (!res.ok) return { ok:false, error:`HTTP ${res.status}` };
  try {
    const data = await res.json();
    return { ok:true, data };
  } catch (err) {
    return { ok:false, error:"Invalid JSON: " + err.message };
  }
}

(async ()=>{
  const good = fakeResponse({ ok:true, status:200, body:'{"name":"Ava"}' });
  const badJson = fakeResponse({ ok:true, status:200, body:'{"name": Ava}' });
  const badHttp = fakeResponse({ ok:false, status:500, body:"server error" });

  rt.println("good:", JSON.stringify(await parseJsonSafely(good)));
  rt.println("badJson:", JSON.stringify(await parseJsonSafely(badJson)));
  rt.println("badHttp:", JSON.stringify(await parseJsonSafely(badHttp)));
})();
};

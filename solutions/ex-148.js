// Exercise 148 — Chapter 15 canonical solution
window.exercise = function(rt) {
// Cache Results — avoid repeated work for same request key
const cache = new Map();

function mockFetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(()=> resolve({ id, name: id===1 ? "Ava" : "Ben" }), 500);
  });
}

async function getUser(id) {
  if (cache.has(id)) return { cached:true, value: cache.get(id) };
  const user = await mockFetchUser(id);
  cache.set(id, user);
  return { cached:false, value: user };
}

(async ()=>{
  rt.println(JSON.stringify(await getUser(1)));
  rt.println(JSON.stringify(await getUser(1)));
  rt.println(JSON.stringify(await getUser(2)));
})();
};

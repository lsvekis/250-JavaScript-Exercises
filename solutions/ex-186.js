// Exercise 186 — Chapter 19 canonical solution
window.exercise = function(rt) {
// Fake Timer — test time-based logic without waiting
function createFakeTimer() {
  let now = 0;
  const queue = [];
  return {
    setTimeout(fn, ms) { queue.push({ at: now + ms, fn }); queue.sort((a,b)=>a.at-b.at); },
    tick(ms) {
      now += ms;
      while (queue.length && queue[0].at <= now) queue.shift().fn();
    }
  };
}

const t = createFakeTimer();
let msg = "start";

t.setTimeout(()=> msg = "after 100", 100);
t.setTimeout(()=> msg += " + after 200", 200);

t.tick(99);  rt.println(msg);
t.tick(1);   rt.println(msg);
t.tick(100); rt.println(msg);
};

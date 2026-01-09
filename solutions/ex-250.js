// Exercise 250 — Chapter 25 canonical solution
window.exercise = function(rt) {
// Capstone: Quiz Builder — random questions, scoring, review
const box = rt.section("Quiz Builder");
box.appendChild(rt.el("p",{class:"small"}, "Answer questions, then see your score and review incorrect ones."));

const start = rt.el("button", { class:"btn" }, "Start Quiz");
const area = rt.el("div", { style:{marginTop:"10px"} });
const out = rt.el("div", { class:"output" }, "");

box.appendChild(start);
box.appendChild(area);
box.appendChild(out);

const bank = [
  { q:"Which keyword creates a block-scoped variable?", a:["var","let","function","this"], correct:1 },
  { q:"What does JSON.parse do?", a:["Turns object to string","Turns string to object","Formats HTML","Sorts arrays"], correct:1 },
  { q:"Which method adds to the end of an array?", a:["shift","pop","push","unshift"], correct:2 },
  { q:"What does '=== ' check?", a:["Value only","Type only","Value + type","Truthy/falsy"], correct:2 },
  { q:"Which API cancels a fetch?", a:["AbortController","History","Geolocation","ResizeObserver"], correct:0 },
  { q:"What event fires when hash changes?", a:["popstate","hashchange","submit","keydown"], correct:1 },
];

let questions = [];
let idx = 0;
let answers = [];

function pick(n){
  const copy = bank.slice();
  for (let i=copy.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function renderQuestion(){
  area.innerHTML = "";
  out.textContent = "";

  const q = questions[idx];
  if (!q) return;

  const card = rt.el("div", { class:"card" });
  card.appendChild(rt.el("h3", {}, `Q${idx+1}/${questions.length}`));
  card.appendChild(rt.el("div", { class:"output" }, q.q));

  const group = rt.el("div", { style:{marginTop:"10px"} });
  q.a.forEach((opt, i)=>{
    const btn = rt.el("button", { class:"btn", style:{display:"block", width:"100%", textAlign:"left", marginTop:"8px"} }, opt);
    btn.addEventListener("click", ()=>{
      answers[idx] = i;
      idx++;
      if (idx >= questions.length) finish();
      else renderQuestion();
    });
    group.appendChild(btn);
  });

  card.appendChild(group);
  area.appendChild(card);
}

function finish(){
  area.innerHTML = "";
  let score = 0;
  const wrong = [];
  questions.forEach((q,i)=>{
    if (answers[i] === q.correct) score++;
    else wrong.push({ q, picked: answers[i] });
  });

  out.textContent = `Score: ${score}/${questions.length}\n\n`;

  if (!wrong.length) {
    out.textContent += "✅ Perfect! No incorrect answers.";
    return;
  }

  out.textContent += "Review (incorrect):\n";
  wrong.forEach((w, i)=>{
    out.textContent +=
      `\n${i+1}) ${w.q.q}\n` +
      `Your answer: ${w.q.a[w.picked] ?? "(none)"}\n` +
      `Correct: ${w.q.a[w.q.correct]}\n`;
  });
}

start.addEventListener("click", ()=>{
  questions = pick(5);
  idx = 0;
  answers = Array(questions.length).fill(null);
  renderQuestion();
});

out.textContent = "Click Start Quiz.";
};

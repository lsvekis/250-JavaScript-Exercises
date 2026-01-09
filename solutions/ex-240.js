// Exercise 240 — Chapter 24 canonical solution
window.exercise = function(rt) {
// i18n Formatting — Intl.NumberFormat + Intl.DateTimeFormat
const box = rt.section("Intl Formatting");
const locale = rt.el("select", { class:"input" },
  rt.el("option", { value:"en-CA" }, "en-CA"),
  rt.el("option", { value:"en-US" }, "en-US"),
  rt.el("option", { value:"fr-CA" }, "fr-CA"),
  rt.el("option", { value:"de-DE" }, "de-DE"),
  rt.el("option", { value:"ja-JP" }, "ja-JP")
);
const amount = rt.el("input", { class:"input", type:"number", value:"12345.678" });
const btn = rt.el("button", { class:"btn" }, "Format");
const out = rt.el("div", { class:"output" }, "");

box.appendChild(rt.el("div",{class:"row"},
  rt.el("div",{class:"small"},"Locale"), locale,
  rt.el("div",{class:"small"},"Amount"), amount,
  btn
));
box.appendChild(out);

function run(){
  const loc = locale.value;
  const n = Number(amount.value);

  const money = new Intl.NumberFormat(loc, { style:"currency", currency:"CAD" }).format(n);
  const compact = new Intl.NumberFormat(loc, { notation:"compact", maximumFractionDigits: 1 }).format(n);
  const date = new Intl.DateTimeFormat(loc, { dateStyle:"full", timeStyle:"short" }).format(new Date());

  out.textContent =
    `Locale: ${loc}\n` +
    `Currency (CAD): ${money}\n` +
    `Compact: ${compact}\n` +
    `Date/Time: ${date}`;
}

btn.onclick = run;
run();
};

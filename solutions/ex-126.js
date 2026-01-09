// Exercise 126 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Debug Logger — simple logger with levels (info/warn/error)
const logger = (() => {
  const levels = { info: 1, warn: 2, error: 3 };
  let current = levels.info;

  function setLevel(name) { current = levels[name] ?? levels.info; }

  function log(level, ...args) {
    if (levels[level] >= current) rt.println(`[${level.toUpperCase()}]`, ...args);
  }

  return {
    setLevel,
    info: (...a)=>log("info", ...a),
    warn: (...a)=>log("warn", ...a),
    error: (...a)=>log("error", ...a),
  };
})();

logger.setLevel("warn");
logger.info("this will NOT show");
logger.warn("warn shows");
logger.error("error shows");
rt.println("Change setLevel('info'|'warn'|'error') to control output.");
};

// Exercise 039 — Chapter 4 canonical solution
window.exercise = function(rt) {
// Simple Caesar Cipher — shift letters by N
function caesarEncrypt(text, shift) {
  const A = "a".charCodeAt(0);
  const Z = "z".charCodeAt(0);
  return text.toLowerCase().replace(/[a-z]/g, ch => {
    const code = ch.charCodeAt(0);
    const moved = ((code - A + shift) % 26) + A;
    return String.fromCharCode(moved);
  });
}

const msg = "Meet me at 7!";
const enc = caesarEncrypt(msg, 3);

rt.println("msg:", msg);
rt.println("encrypted:", enc);
};

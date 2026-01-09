// Exercise 123 — Chapter 13 canonical solution
window.exercise = function(rt) {
// Custom Error Class — domain-specific errors for validation
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (typeof email !== "string") throw new ValidationError("Email must be a string", "email");
  const v = email.trim();
  if (!v.includes("@")) throw new ValidationError("Email must include @", "email");
  return v;
}

try {
  rt.println("ok:", validateEmail("ava@example.com"));
  validateEmail("nope.example.com");
} catch (err) {
  rt.println("caught:", `${err.name}(${err.field}) — ${err.message}`);
}
};

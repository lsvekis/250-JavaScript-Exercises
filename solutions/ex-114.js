// Exercise 114 — Chapter 12 canonical solution
window.exercise = function(rt) {
// Encapsulation with Private Fields — #private (modern JS)
class BankAccount {
  #balance = 0;
  constructor(owner) { this.owner = owner; }
  deposit(amount) {
    if (amount <= 0) throw new Error("deposit must be > 0");
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= 0) throw new Error("withdraw must be > 0");
    if (amount > this.#balance) throw new Error("insufficient funds");
    this.#balance -= amount;
  }
  getBalance() { return this.#balance; }
}

const acc = new BankAccount("Lars");
acc.deposit(50);
acc.withdraw(15);
rt.println("owner:", acc.owner);
rt.println("balance:", acc.getBalance());
rt.println("Note: #balance is private and cannot be accessed directly.");
};

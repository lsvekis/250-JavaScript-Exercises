// Exercise 169 — Chapter 17 canonical solution
window.exercise = function(rt) {
// Migration — upgrade stored data structure version
const box = rt.section("Storage Migration");
const key = "js250_profile";

// v1: { name: "Ava" }
// v2: { version: 2, profile: { name: "Ava", theme: "dark" } }

function readRaw() { return localStorage.getItem(key); }
function writeRaw(obj) { localStorage.setItem(key, JSON.stringify(obj)); }

function migrateIfNeeded() {
  const raw = readRaw();
  if (!raw) {
    writeRaw({ version: 2, profile: { name: "Ava", theme: "dark" } });
    return { migrated: true, reason: "initialized" };
  }
  const data = JSON.parse(raw);

  if (data.version === 2) return { migrated: false, reason: "already v2" };

  // assume v1 shape
  const v2 = { version: 2, profile: { name: data.name ?? "Unknown", theme: "dark" } };
  writeRaw(v2);
  return { migrated: true, reason: "v1→v2" };
}

const result = migrateIfNeeded();
rt.println("migration:", JSON.stringify(result));

rt.println("stored:", readRaw());
};

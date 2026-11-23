import fs from "node:fs/promises";

const categories = [
  ["weapon", "data/weapon-details-manifest.json", "data/weapon-stats-index.json"],
  ["armor", "data/armor-details-manifest.json", "data/armor-stats-index.json"],
  ["accessory", "data/accessory-details-manifest.json", "data/accessory-stats-index.json"]
];
const ignored = new Set(["gearscore","chancepercentage","statvalue","statvalue1","value","amount","min","max","minvalue","maxvalue","requiredlevel","tier","weight","maxdurability","candoreinforce"]);
const primaryAliases = new Set(["attack","basicattack","basicatk","ataque","ataquebasico","physicaldefense","defensephysical","physicaldefence","defencephysical","physicalarmor","physicalarmour","defesafisica","magicdefense","magicaldefense","defensemagic","defensemagical","magicdefence","magicaldefence","defencemagic","defencemagical","magicarmor","magicalarmor","defesamagica"]);
function normalizeStatIdentity(value) {
  const key = String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const defenseWord = /(defense|defence|defesa|armor|armour|def)/.test(key);
  if ((defenseWord && /(physical|physic|physdef)/.test(key)) || key.includes("defesafisica")) return "physicaldefense";
  if ((defenseWord && /(magic|magical|mag|magdef)/.test(key)) || key.includes("defesamagica")) return "magicdefense";
  if (["attack","ataque","ataquebasico","basicattack","basicatk","attackpower","attackvalue"].includes(key)) return "attack";
  return key;
}
function hasValue(value) {
  if (value === null || value === undefined || value === "") return false;
  if (typeof value !== "object") return true;
  if (Array.isArray(value)) return value.some(hasValue);
  const levels = value.gearScore ?? value.levels ?? value.values;
  if (levels && typeof levels === "object") return Object.values(levels).some(hasValue);
  const direct = value.statValue ?? value.statValue1 ?? value.value ?? value.amount ?? value.baseValue ?? value.maxValue ?? value.minValue;
  return direct !== undefined && direct !== null && direct !== "" && hasValue(direct);
}
function collectStats(item) {
  const stats = new Set();
  const add = (key, raw) => {
    const statType = raw && typeof raw === "object" ? (raw.statType ?? raw.type ?? raw.key ?? key) : key;
    if (!statType || !hasValue(raw)) return;
    stats.add(normalizeStatIdentity(statType));
  };
  const raw = item?.itemStats?.stats;
  if (Array.isArray(raw)) raw.forEach(entry => add(entry?.statType ?? entry?.type ?? entry?.key ?? "Atributo", entry));
  else if (raw && typeof raw === "object") Object.entries(raw).forEach(([key, value]) => add(key, value));
  const walk = (node, keyHint = "", depth = 0) => {
    if (!node || depth > 7) return;
    if (Array.isArray(node)) { node.forEach(value => walk(value, keyHint, depth + 1)); return; }
    if (typeof node !== "object") { if (keyHint) add(keyHint, node); return; }
    const explicit = node.statType ?? node.type ?? node.key;
    const hasValueField = ["gearScore","levels","values","statValue","statValue1","value","amount"].some(key => Object.prototype.hasOwnProperty.call(node, key));
    if (explicit && hasValueField) { add(explicit, node); return; }
    if (keyHint && hasValueField) { add(keyHint, node); return; }
    for (const [key, value] of Object.entries(node)) {
      if (ignored.has(key.toLowerCase())) continue;
      walk(value, key, depth + 1);
    }
  };
  walk(item?.equipmentStats);
  walk(item?.itemStats?.equipmentStats);
  const scanPrimaryAliases = (node, depth = 0, seen = new Set()) => {
    if (!node || typeof node !== "object" || depth > 8 || seen.has(node)) return;
    seen.add(node);
    if (Array.isArray(node)) { node.forEach(value => scanPrimaryAliases(value, depth + 1, seen)); return; }
    for (const [key, value] of Object.entries(node)) {
      if (primaryAliases.has(normalizeStatIdentity(key)) && hasValue(value)) stats.add(normalizeStatIdentity(key));
      if (value && typeof value === "object") scanPrimaryAliases(value, depth + 1, seen);
    }
  };
  scanPrimaryAliases(item);
  return [...stats].filter(Boolean).sort();
}
for (const [category, manifestPath, outputPath] of categories) {
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (!Array.isArray(manifest.parts) || !manifest.parts.length) throw new Error("Manifesto sem partes: " + manifestPath);
  const items = {};
  for (const partName of manifest.parts) {
    const part = JSON.parse(await fs.readFile("data/" + partName, "utf8"));
    for (const [id, record] of Object.entries(part.items || {})) items[String(id).replace(/^item-/, "")] = collectStats(record);
  }
  const output = { source: "Questlog item details", category, generatedAt: new Date().toISOString(), itemCount: Object.keys(items).length, items };
  await fs.writeFile(outputPath, JSON.stringify(output));
  console.log(category + ": " + output.itemCount + " itens indexados em " + outputPath);
}

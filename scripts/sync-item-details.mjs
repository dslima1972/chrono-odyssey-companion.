import fs from "node:fs/promises";

const CATALOG_PATH = "data/questlog-export.json";
const OUTPUT_PATH = "data/item-details.json";
const API = "https://questlog.gg/chrono-odyssey/api/trpc/database.getItem";
const DELAY_MS = 300;
const MAX_ATTEMPTS = 4;

const catalog = JSON.parse(await fs.readFile(CATALOG_PATH, "utf8"));
const rawItems = Array.isArray(catalog) ? catalog : catalog.items ?? [];
const items = rawItems.filter(item =>
  !item.isDisabled &&
  !/\(Test\)/i.test(String(item.name ?? "")) &&
  (item.id || item.compoundId)
);

if (!items.length) throw new Error("Nenhum item válido foi encontrado no catálogo.");

const details = {};
const failures = [];
let consecutiveFailures = 0;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function unwrap(payload) {
  return payload?.result?.data?.json ??
    payload?.result?.data ??
    payload?.data?.json ??
    payload?.data ??
    payload;
}

for (let index = 0; index < items.length; index++) {
  const entry = items[index];
  const id = String(entry.id ?? entry.compoundId).replace(/^item-/, "");
  const input = encodeURIComponent(JSON.stringify({ id, language: "en" }));
  const url = `${API}?input=${input}`;
  let success = false;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "user-agent": "ChronoOdysseyCompanion/1.0 (community catalog sync)"
        },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) {
        const body = (await response.text()).slice(0, 500);
        throw new Error(`HTTP ${response.status}: ${body}`);
      }
      const responseText = await response.text();
      let payload;
      try { payload = JSON.parse(responseText); }
      catch { throw new Error(`Resposta não é JSON: ${responseText.slice(0, 500)}`); }
      const item = unwrap(payload);
      if (!item || typeof item !== "object" || (!item.id && !item.itemInfo && !item.itemStats)) {
        throw new Error("Resposta sem os detalhes esperados");
      }
      details[id] = item;
      consecutiveFailures = 0;
      success = true;
      break;
    } catch (error) {
      if (attempt === MAX_ATTEMPTS) {
        const message = String(error.message ?? error);
        failures.push({ id, name: entry.name ?? "", error: message });
        if (failures.length <= 3) console.error(`Falha no item ${id} (${entry.name ?? "sem nome"}): ${message}`);
      } else {
        await sleep(1000 * attempt);
      }
    }
  }

  if (!success) consecutiveFailures++;
  if (consecutiveFailures >= 5) {
    console.error("Cinco itens consecutivos falharam. Interrompendo para evitar uma coleta inútil.");
    process.exit(1);
  }

  if ((index + 1) % 25 === 0 || index + 1 === items.length) {
    console.log(`Consultados ${index + 1}/${items.length}; sucesso: ${Object.keys(details).length}; falhas: ${failures.length}`);
  }
  if (index + 1 < items.length) await sleep(DELAY_MS);
}

const successCount = Object.keys(details).length;
const coverage = successCount / items.length;
console.log(`Cobertura final: ${successCount}/${items.length} (${(coverage * 100).toFixed(1)}%)`);

if (coverage < 0.95) {
  console.error("Cobertura inferior a 95%; arquivo anterior será preservado.");
  console.error(JSON.stringify(failures.slice(0, 30), null, 2));
  process.exit(1);
}

const output = {
  source: "Questlog database.getItem",
  language: "en",
  generatedAt: new Date().toISOString(),
  requested: items.length,
  received: successCount,
  failed: failures.length,
  failures,
  items: details
};

await fs.writeFile(OUTPUT_PATH, JSON.stringify(output));
console.log(`Arquivo gravado: ${OUTPUT_PATH} (${(Buffer.byteLength(JSON.stringify(output)) / 1024 / 1024).toFixed(2)} MB)`);

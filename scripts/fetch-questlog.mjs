import fs from "node:fs/promises";

const endpoint = "https://questlog.gg/chrono-odyssey/api/trpc/database.getItems";
const output = new URL("../data/weapons.json", import.meta.url);

function extractData(payload) {
  let value = payload?.result?.data ?? payload?.result?.data?.json ?? payload?.data;
  if (value?.json) value = value.json;
  if (typeof value === "string") {
    try { value = JSON.parse(value); } catch {}
  }
  return value;
}

async function getPage(page) {
  const input = encodeURIComponent(JSON.stringify({ language: "en", page, mainCategory: "weapon" }));
  const url = `${endpoint}?input=${input}`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { "accept": "application/json", "user-agent": "ChronoOdysseyCompanion/1.0 (catalog sync)" }
      });
      if (!response.ok) throw new Error(`Questlog respondeu HTTP ${response.status}`);
      const payload = await response.json();
      const data = extractData(payload);
      if (!data || !Array.isArray(data.pageData)) {
        throw new Error("Formato de resposta inesperado: pageData não encontrado.");
      }
      return data;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise(resolve => setTimeout(resolve, attempt * 1800));
    }
  }
  throw lastError;
}

const first = await getPage(1);
const pageCount = Number(first.pageCount || 1);
if (!Number.isFinite(pageCount) || pageCount < 1 || pageCount > 100) {
  throw new Error(`Quantidade de páginas inválida: ${first.pageCount}`);
}
const all = [...first.pageData];
for (let page = 2; page <= pageCount; page++) {
  console.log(`Obtendo página ${page}/${pageCount}`);
  const data = await getPage(page);
  all.push(...data.pageData);
  await new Promise(resolve => setTimeout(resolve, 350));
}

const unique = new Map();
for (const item of all) {
  const key = String(item.compoundId ?? item.id ?? "");
  if (key) unique.set(key, item);
}
const items = [...unique.values()];
if (items.length < 100) {
  throw new Error(`Sincronização interrompida: apenas ${items.length} registros encontrados; arquivo anterior será preservado.`);
}
const result = {
  source: "Questlog",
  sourceUrl: "https://questlog.gg/chrono-odyssey/en/db/items/weapon",
  updatedAt: new Date().toISOString(),
  total: items.length,
  pages: pageCount,
  items
};
await fs.mkdir(new URL("../data/", import.meta.url), { recursive: true });
await fs.writeFile(output, JSON.stringify(result, null, 2) + "\n");
console.log(`Catálogo salvo: ${items.length} itens em ${pageCount} páginas.`);
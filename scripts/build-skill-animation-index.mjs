import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const animationDirectory = path.resolve("assets/images/skills/animations");
const outputFile = path.resolve("data/skill-animations-index.json");
const entries = await readdir(animationDirectory, { withFileTypes: true });
const animations = {};

for (const entry of entries) {
  if (!entry.isFile() || !/\.gif$/i.test(entry.name)) continue;
  // O ID antes do primeiro hífen é a chave estável da habilidade.
  // O restante do nome é preservado, inclusive espaços ou hífens extras.
  const match = entry.name.match(/^(\d+)-(.+)\.gif$/i);
  if (!match || !match[2].trim()) {
    console.warn("Ignorando GIF fora do padrão id-nome: " + entry.name);
    continue;
  }
  const skillId = match[1];
  if (animations[skillId]) {
    throw new Error("Há mais de um GIF para a habilidade " + skillId + ": " + animations[skillId] + " e " + entry.name);
  }
  animations[skillId] = entry.name;
}

const sortedAnimations = Object.fromEntries(Object.entries(animations).sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true })));
await writeFile(outputFile, JSON.stringify({ generatedAt: new Date().toISOString(), animations: sortedAnimations }, null, 2) + "\n", "utf8");
console.log("Índice de animações gerado: " + Object.keys(sortedAnimations).length + " GIF(s).");

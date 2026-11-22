/*
 * Chrono Odyssey Companion — exportador de fichas do Questlog
 *
 * Como usar:
 * 1. Abra https://questlog.gg/chrono-odyssey/en/db/items/weapon?page=1
 * 2. Confirme que a página do Questlog carregou normalmente.
 * 3. Abra DevTools (F12) > Console.
 * 4. Cole este arquivo inteiro e pressione Enter.
 *
 * A extração é feita pelo navegador, na sessão atual do Questlog.
 * O progresso é salvo no IndexedDB e pode ser retomado executando o script novamente.
 */
(async () => {
  "use strict";

  const API = "/chrono-odyssey/api/trpc/database.getItem";
  const CATALOG_URL = "https://raw.githubusercontent.com/dslima1972/chrono-odyssey-companion./main/data/questlog-export.json";
  const DB_NAME = "chrono-odyssey-questlog-export";
  const DB_VERSION = 1;
  const DELAY_MS = 650;
  const MAX_ATTEMPTS = 3;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (location.hostname !== "questlog.gg") {
    alert("Abra primeiro uma página do Questlog (questlog.gg) e execute o script novamente.");
    return;
  }

  if (document.getElementById("chrono-export-panel")) {
    console.warn("O exportador já está em execução nesta página.");
    return;
  }

  const panel = document.createElement("div");
  panel.id = "chrono-export-panel";
  panel.style.cssText = "position:fixed;z-index:2147483647;right:18px;bottom:18px;width:min(390px,calc(100vw - 36px));padding:16px;background:#111e29;color:#e6e5df;border:1px solid #c3a36a;border-radius:10px;box-shadow:0 8px 32px #0009;font:14px/1.45 Arial,sans-serif";
  panel.innerHTML = '<div style="font-weight:700;color:#e0c58f;margin-bottom:8px">Chrono Odyssey — Exportação Questlog</div><div id="chrono-export-status">Preparando...</div><div style="height:8px;background:#344552;border-radius:8px;margin:12px 0;overflow:hidden"><div id="chrono-export-bar" style="height:100%;width:0;background:#c3a36a"></div></div><div id="chrono-export-detail" style="font-size:12px;color:#b7c2c9">Mantenha esta aba aberta durante a coleta.</div><button id="chrono-export-close" style="margin-top:12px;padding:6px 12px;background:#344552;color:#fff;border:0;border-radius:5px;cursor:pointer">Fechar painel</button>';
  document.body.appendChild(panel);

  const statusEl = panel.querySelector("#chrono-export-status");
  const detailEl = panel.querySelector("#chrono-export-detail");
  const barEl = panel.querySelector("#chrono-export-bar");
  panel.querySelector("#chrono-export-close").onclick = () => panel.remove();
  const show = (status, detail, done = 0, total = 0) => {
    statusEl.textContent = status;
    detailEl.textContent = detail;
    barEl.style.width = total ? Math.min(100, done / total * 100) + "%" : "0%";
  };

  const openDB = () => new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("items")) db.createObjectStore("items", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  const db = await openDB();
  const dbRequest = (storeName, method, value) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, method === "get" ? "readonly" : "readwrite");
    const store = tx.objectStore(storeName);
    const request = method === "get" ? store.get(value) : method === "getAll" ? store.getAll() : store.put(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  try {
    show("Lendo catálogo do projeto...", "A lista será carregada automaticamente.");
    const catalogResponse = await fetch(CATALOG_URL, { cache: "no-store" });
    if (!catalogResponse.ok) throw new Error("Não foi possível baixar o catálogo do GitHub: HTTP " + catalogResponse.status);
    const catalog = await catalogResponse.json();
    const rawItems = Array.isArray(catalog) ? catalog : (catalog.items || []);
    const items = rawItems.filter(item =>
      !item.isDisabled &&
      !/\(Test\)/i.test(String(item.name || "")) &&
      (item.id || item.compoundId)
    );
    if (!items.length) throw new Error("O catálogo não contém itens válidos.");

    const firstId = String(items[0].id || items[0].compoundId).replace(/^item-/, "");
    show("Testando acesso à API...", "Primeiro equipamento: " + (items[0].name || firstId), 0, items.length);
    const testUrl = API + "?input=" + encodeURIComponent(JSON.stringify({ id: firstId, language: "en" }));
    const testResponse = await fetch(testUrl, { credentials: "same-origin", headers: { accept: "application/json" } });
    if (!testResponse.ok) {
      const body = (await testResponse.text()).slice(0, 180).replace(/\s+/g, " ");
      throw new Error("O Questlog recusou a consulta de teste (HTTP " + testResponse.status + "). " + body);
    }
    const testPayload = await testResponse.json();
    const testItem = testPayload?.result?.data?.json ?? testPayload?.result?.data ?? testPayload?.data?.json ?? testPayload?.data ?? testPayload;
    if (!testItem || typeof testItem !== "object" || (!testItem.id && !testItem.itemInfo && !testItem.itemStats)) {
      throw new Error("A API respondeu, mas o formato da ficha não foi reconhecido.");
    }
    await dbRequest("items", "put", { id: firstId, detail: testItem });
    console.log("[Chrono Export] Teste de API OK. Iniciando " + items.length + " itens.");

    let success = 1;
    let failed = 0;
    let consecutiveFailures = 0;
    const failures = [];
    for (let index = 0; index < items.length; index++) {
      const entry = items[index];
      const id = String(entry.id || entry.compoundId).replace(/^item-/, "");
      const cached = await dbRequest("items", "get", id);
      if (cached) {
        if (index % 10 === 0 || index === items.length - 1) show("Coletando fichas...", "Já salvas: " + success + " · Falhas nesta sessão: " + failed + " · " + (entry.name || id), index + 1, items.length);
        continue;
      }

      let saved = false;
      let lastError = "";
      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
          const url = API + "?input=" + encodeURIComponent(JSON.stringify({ id, language: "en" }));
          const response = await fetch(url, { credentials: "same-origin", headers: { accept: "application/json" } });
          if (!response.ok) {
            const body = (await response.text()).slice(0, 180).replace(/\s+/g, " ");
            throw new Error("HTTP " + response.status + ": " + body);
          }
          const payload = await response.json();
          const detail = payload?.result?.data?.json ?? payload?.result?.data ?? payload?.data?.json ?? payload?.data ?? payload;
          if (!detail || typeof detail !== "object" || (!detail.id && !detail.itemInfo && !detail.itemStats)) {
            throw new Error("Resposta sem os detalhes esperados");
          }
          await dbRequest("items", "put", { id, detail });
          saved = true;
          success++;
          consecutiveFailures = 0;
          break;
        } catch (error) {
          lastError = String(error?.message || error);
          if (lastError.includes("HTTP 403") || lastError.includes("HTTP 429")) break;
          if (attempt < MAX_ATTEMPTS) await sleep(1200 * attempt);
        }
      }

      if (!saved) {
        failed++;
        consecutiveFailures++;
        failures.push({ id, name: entry.name || "", error: lastError });
        console.warn("[Chrono Export] Falha " + id + " (" + entry.name + "): " + lastError);
      }
      const completed = index + 1;
      if (completed % 5 === 0 || completed === items.length) {
        show("Coletando fichas...", "Processados: " + completed + "/" + items.length + " · Salvos: " + success + " · Falhas: " + failed, completed, items.length);
      }
      if (lastError.includes("HTTP 403") || lastError.includes("HTTP 429") || consecutiveFailures >= 5) {
        show("Coleta pausada por bloqueio/limite", "O progresso já está salvo no navegador. Aguarde alguns minutos e execute o script novamente para retomar. Último erro: " + lastError, completed, items.length);
        console.error("[Chrono Export] Pausado. Os itens já salvos permanecem no IndexedDB.");
        return;
      }
      if (completed < items.length) await sleep(DELAY_MS);
    }

    const records = await dbRequest("items", "getAll");
    const details = {};
    for (const record of records) details[record.id] = record.detail;
    const output = {
      source: "Questlog database.getItem (browser session)",
      language: "en",
      generatedAt: new Date().toISOString(),
      requested: items.length,
      received: records.length,
      failed: Math.max(0, items.length - records.length),
      failures,
      items: details
    };

    const blob = new Blob([JSON.stringify(output)], { type: "application/json" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "questlog-item-details.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    show("Exportação concluída!", "Salvos: " + records.length + "/" + items.length + ". Arquivo questlog-item-details.json baixado. Falhas: " + output.failed, items.length, items.length);
    console.log("[Chrono Export] Concluído:", output.received + "/" + output.requested, "fichas. Falhas:", output.failed);
  } catch (error) {
    show("Não foi possível iniciar a coleta", String(error?.message || error), 0, 0);
    console.error("[Chrono Export]", error);
  }
})();

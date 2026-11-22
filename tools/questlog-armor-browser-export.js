/*
 * Chrono Odyssey Companion — exportador de armaduras do Questlog
 *
 * EXECUTE EM UMA SEGUNDA ABA:
 * 1. Abra https://questlog.gg/chrono-odyssey/en/db/items/armor?page=1
 * 2. Aguarde a listagem carregar.
 * 3. F12 > Console, cole este arquivo e pressione Enter.
 *
 * Este extrator usa a URL real de database.getItems observada na página
 * de armaduras, salva o catálogo e coleta as fichas em IndexedDB separado.
 */
(async () => {
  "use strict";
  const API = "/chrono-odyssey/api/trpc/database.getItem";
  const DB_NAME = "chrono-odyssey-armor-export";
  const DB_VERSION = 1;
  const DELAY_MS = 650;
  const MAX_ATTEMPTS = 3;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (location.hostname !== "questlog.gg") {
    alert("Abra primeiro uma página do Questlog e execute o script novamente.");
    return;
  }
  if (document.getElementById("chrono-armor-export-panel")) {
    console.warn("O exportador de armaduras já está em execução nesta página.");
    return;
  }

  const panel = document.createElement("div");
  panel.id = "chrono-armor-export-panel";
  panel.style.cssText = "position:fixed;z-index:2147483647;right:18px;bottom:18px;width:min(390px,calc(100vw - 36px));padding:16px;background:#111e29;color:#e6e5df;border:1px solid #c3a36a;border-radius:10px;box-shadow:0 8px 32px #0009;font:14px/1.45 Arial,sans-serif";
  panel.innerHTML = '<div style="font-weight:700;color:#e0c58f;margin-bottom:8px">Chrono Odyssey — Exportação de Armaduras</div><div id="chrono-armor-status">Preparando...</div><div style="height:8px;background:#344552;border-radius:8px;margin:12px 0;overflow:hidden"><div id="chrono-armor-bar" style="height:100%;width:0;background:#c3a36a"></div></div><div id="chrono-armor-detail" style="font-size:12px;color:#b7c2c9">Mantenha esta aba aberta durante a coleta.</div><button id="chrono-armor-close" style="margin-top:12px;padding:6px 12px;background:#344552;color:#fff;border:0;border-radius:5px;cursor:pointer">Fechar painel</button>';
  document.body.appendChild(panel);
  const statusEl=panel.querySelector("#chrono-armor-status"),detailEl=panel.querySelector("#chrono-armor-detail"),barEl=panel.querySelector("#chrono-armor-bar");
  panel.querySelector("#chrono-armor-close").onclick=()=>panel.remove();
  const show=(status,detail,done=0,total=0)=>{statusEl.textContent=status;detailEl.textContent=detail;barEl.style.width=total?Math.min(100,done/total*100)+"%":"0%";};

  const openDB=()=>new Promise((resolve,reject)=>{
    const request=indexedDB.open(DB_NAME,DB_VERSION);
    request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains("items"))request.result.createObjectStore("items",{keyPath:"id"});};
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
  });
  const db=await openDB();
  const dbRequest=(method,value)=>new Promise((resolve,reject)=>{
    const tx=db.transaction("items",method==="get"?"readonly":"readwrite"),store=tx.objectStore("items");
    const request=method==="get"?store.get(value):method==="getAll"?store.getAll():store.put(value);
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
  });
  const unwrap=p=>p?.result?.data?.json??p?.result?.data??p?.data?.json??p?.data??p;
  const download=(filename,data)=>{
    const blob=new Blob([JSON.stringify(data)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  };

  try{
    show("Identificando a listagem de armaduras...","Lendo a chamada real do catálogo carregada nesta página.");
    const resources=performance.getEntriesByType("resource").map(x=>x.name).filter(x=>x.includes("database.getItems")&&x.includes("/chrono-odyssey/api/trpc/"));
    if(!resources.length)throw new Error("Não encontrei a chamada database.getItems. Confirme que a listagem de armaduras terminou de carregar e atualize a página.");
    const catalogUrl=new URL(resources[resources.length-1]);
    const response=await fetch(catalogUrl.href,{credentials:"same-origin",headers:{accept:"application/json"}});
    if(!response.ok)throw new Error("Falha ao ler o catálogo (HTTP "+response.status+").");
    const payload=unwrap(await response.json());
    const rawItems=Array.isArray(payload)?payload:(payload?.items||payload?.data?.items||[]);
    const items=rawItems.filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||""))&&(x.id||x.compoundId));
    if(!items.length)throw new Error("A chamada foi encontrada, mas não retornou itens. Verifique se a página aberta é a categoria Armor.");
    const wrong=items.filter(x=>String(x.mainCategory||"").toLowerCase()!=="armor");
    if(wrong.length===items.length)throw new Error("A resposta encontrada não parece ser o catálogo de armaduras (mainCategory diferente de armor).");
    const catalog={source:"Questlog",category:"armor",pageUrl:location.href,catalogApi:catalogUrl.pathname+catalogUrl.search,pageCount:null,total:items.length,items};
    download("armor-export.json",catalog);
    show("Catálogo de armaduras salvo","Itens encontrados: "+items.length+". Iniciando consulta das fichas individuais.",0,items.length);

    const firstId=String(items[0].id||items[0].compoundId).replace(/^item-/,"");
    const testResponse=await fetch(API+"?input="+encodeURIComponent(JSON.stringify({id:firstId,language:"en"})),{credentials:"same-origin",headers:{accept:"application/json"}});
    if(!testResponse.ok)throw new Error("Teste da ficha recusado (HTTP "+testResponse.status+"). O catálogo já foi baixado.");
    const testItem=unwrap(await testResponse.json());
    if(!testItem||typeof testItem!=="object"||(!testItem.id&&!testItem.itemInfo&&!testItem.itemStats))throw new Error("A API respondeu, mas o formato da ficha não foi reconhecido. O catálogo já foi baixado.");
    await dbRequest("put",{id:firstId,detail:testItem});
    let success=1,failed=0,consecutiveFailures=0;const failures=[];
    for(let index=0;index<items.length;index++){
      const entry=items[index],id=String(entry.id||entry.compoundId).replace(/^item-/,"");
      if(await dbRequest("get",id)){if(index%10===0)show("Coletando fichas...", "Salvas: "+success+" · Falhas: "+failed+" · "+(entry.name||id),index+1,items.length);continue;}
      let saved=false,lastError="";
      for(let attempt=1;attempt<=MAX_ATTEMPTS;attempt++){
        try{
          const res=await fetch(API+"?input="+encodeURIComponent(JSON.stringify({id,language:"en"})),{credentials:"same-origin",headers:{accept:"application/json"}});
          if(!res.ok)throw new Error("HTTP "+res.status+": "+(await res.text()).slice(0,140).replace(/\s+/g," "));
          const detail=unwrap(await res.json());
          if(!detail||typeof detail!=="object"||(!detail.id&&!detail.itemInfo&&!detail.itemStats))throw new Error("Resposta sem os detalhes esperados");
          await dbRequest("put",{id,detail});saved=true;success++;consecutiveFailures=0;break;
        }catch(e){lastError=String(e?.message||e);if(lastError.includes("HTTP 403")||lastError.includes("HTTP 429"))break;if(attempt<MAX_ATTEMPTS)await sleep(1200*attempt);}
      }
      if(!saved){failed++;consecutiveFailures++;failures.push({id,name:entry.name||"",error:lastError});console.warn("[Armor Export] Falha",id,lastError);}
      const done=index+1;
      if(done%5===0||done===items.length)show("Coletando fichas...", "Processados: "+done+"/"+items.length+" · Salvos: "+success+" · Falhas: "+failed,done,items.length);
      if(lastError.includes("HTTP 403")||lastError.includes("HTTP 429")||consecutiveFailures>=5){show("Coleta pausada por bloqueio/limite","O progresso permanece salvo no IndexedDB. Execute novamente este script para retomar. Último erro: "+lastError,done,items.length);return;}
      if(done<items.length)await sleep(DELAY_MS);
    }
    const records=await dbRequest("getAll"),details={};for(const r of records)details[r.id]=r.detail;
    const output={source:"Questlog database.getItem (browser session)",language:"en",category:"armor",generatedAt:new Date().toISOString(),requested:items.length,received:records.length,failed:Math.max(0,items.length-records.length),failures,items:details};
    download("armor-details.json",output);
    show("Exportação concluída!","Catálogo e fichas baixados. Fichas: "+records.length+"/"+items.length+" · Falhas: "+output.failed,items.length,items.length);
    console.log("[Armor Export] Concluído:",output.received+"/"+output.requested,"fichas.");
  }catch(error){show("Não foi possível iniciar a coleta",String(error?.message||error),0,0);console.error("[Armor Export]",error);}
})();

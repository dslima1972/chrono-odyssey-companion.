/*
 * Chrono Odyssey Companion — exportador das fichas de armaduras
 *
 * Pré-requisito: data/armor-export.json deve estar publicado no GitHub.
 * 1. Abra qualquer página do Questlog em questlog.gg.
 * 2. F12 > Console, cole este arquivo e pressione Enter.
 * 3. O progresso fica salvo no IndexedDB deste navegador.
 */
(async () => {
  "use strict";
  const API="/chrono-odyssey/api/trpc/database.getItem";
  const CATALOG_URL="https://raw.githubusercontent.com/dslima1972/chrono-odyssey-companion./main/data/armor-export.json";
  const DB_NAME="chrono-odyssey-armor-export";
  const DELAY_MS=650,MAX_ATTEMPTS=3;
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  if(location.hostname!=="questlog.gg"){alert("Abra uma página do Questlog e execute novamente.");return;}
  if(document.getElementById("chrono-armor-export-panel")){console.warn("[Armor Export] Já está em execução.");return;}
  const panel=document.createElement("div");
  panel.id="chrono-armor-export-panel";
  panel.style.cssText="position:fixed;z-index:2147483647;right:18px;bottom:18px;width:min(390px,calc(100vw - 36px));padding:16px;background:#111e29;color:#e6e5df;border:1px solid #c3a36a;border-radius:10px;box-shadow:0 8px 32px #0009;font:14px/1.45 Arial,sans-serif";
  panel.innerHTML='<div style="font-weight:700;color:#e0c58f;margin-bottom:8px">Chrono Odyssey — Fichas de Armaduras</div><div id="chrono-armor-status">Preparando...</div><div style="height:8px;background:#344552;border-radius:8px;margin:12px 0;overflow:hidden"><div id="chrono-armor-bar" style="height:100%;width:0;background:#c3a36a"></div></div><div id="chrono-armor-detail" style="font-size:12px;color:#b7c2c9">Mantenha esta aba aberta.</div><button id="chrono-armor-close" style="margin-top:12px;padding:6px 12px;background:#344552;color:#fff;border:0;border-radius:5px;cursor:pointer">Fechar painel</button>';
  document.body.appendChild(panel);
  const statusEl=panel.querySelector("#chrono-armor-status"),detailEl=panel.querySelector("#chrono-armor-detail"),barEl=panel.querySelector("#chrono-armor-bar");
  panel.querySelector("#chrono-armor-close").onclick=()=>panel.remove();
  const show=(s,d,n=0,t=0)=>{statusEl.textContent=s;detailEl.textContent=d;barEl.style.width=t?Math.min(100,n/t*100)+"%":"0%";};
  const openDB=()=>new Promise((resolve,reject)=>{const q=indexedDB.open(DB_NAME,1);q.onupgradeneeded=()=>{if(!q.result.objectStoreNames.contains("items"))q.result.createObjectStore("items",{keyPath:"id"});};q.onsuccess=()=>resolve(q.result);q.onerror=()=>reject(q.error);});
  const db=await openDB();
  const dbReq=(method,value)=>new Promise((resolve,reject)=>{const tx=db.transaction("items",method==="get"?"readonly":"readwrite"),s=tx.objectStore("items"),q=method==="get"?s.get(value):method==="getAll"?s.getAll():s.put(value);q.onsuccess=()=>resolve(q.result);q.onerror=()=>reject(q.error);});
  const unwrap=p=>p?.result?.data?.json??p?.result?.data??p?.data?.json??p?.data??p;
  const valid=d=>d&&typeof d==="object"&&(d.id||d.itemInfo||d.itemStats);
  const download=(name,data)=>{const blob=new Blob([JSON.stringify(data)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);};
  try{
    show("Lendo catálogo do GitHub...","Usando armor-export.json como lista de IDs.");
    const cr=await fetch(CATALOG_URL,{cache:"no-store"});
    if(!cr.ok)throw new Error("Não foi possível baixar data/armor-export.json (HTTP "+cr.status+"). Primeiro precisamos publicar o catálogo exportado.");
    const catalog=await cr.json(),raw=Array.isArray(catalog)?catalog:(catalog.items||catalog.records||[]);
    const items=raw.filter(x=>x&&!x.isDisabled&&!/\\(Test\\)/i.test(String(x.name||""))&&(x.id||x.compoundId));
    if(!items.length)throw new Error("O catálogo publicado não contém itens válidos.");
    const firstId=String(items[0].id||items[0].compoundId).replace(/^item-/,"");
    show("Testando consulta individual...","Primeira armadura: "+(items[0].name||firstId),0,items.length);
    const test=await fetch(API+"?input="+encodeURIComponent(JSON.stringify({id:firstId,language:"en"})),{credentials:"same-origin",headers:{accept:"application/json"}});
    if(!test.ok)throw new Error("Teste da ficha recusado (HTTP "+test.status+").");
    const firstDetail=unwrap(await test.json());
    if(!valid(firstDetail))throw new Error("A API respondeu, mas a ficha individual não foi reconhecida.");
    await dbReq("put",{id:firstId,detail:firstDetail});
    let success=1,failed=0,consecutive=0;const failures=[];
    for(let i=0;i<items.length;i++){
      const entry=items[i],id=String(entry.id||entry.compoundId).replace(/^item-/,"");
      if(await dbReq("get",id)){if(i%10===0)show("Coletando fichas...","Salvas: "+success+" · "+(entry.name||id),i+1,items.length);continue;}
      let saved=false,lastError="";
      for(let attempt=1;attempt<=MAX_ATTEMPTS;attempt++){
        try{
          const res=await fetch(API+"?input="+encodeURIComponent(JSON.stringify({id,language:"en"})),{credentials:"same-origin",headers:{accept:"application/json"}});
          if(!res.ok)throw new Error("HTTP "+res.status+": "+(await res.text()).slice(0,160).replace(/\\s+/g," "));
          const detail=unwrap(await res.json());if(!valid(detail))throw new Error("Resposta sem os detalhes esperados");
          await dbReq("put",{id,detail});saved=true;success++;consecutive=0;break;
        }catch(e){lastError=String(e?.message||e);if(/HTTP 403|HTTP 429/.test(lastError))break;if(attempt<MAX_ATTEMPTS)await sleep(1200*attempt);}
      }
      if(!saved){failed++;consecutive++;failures.push({id,name:entry.name||"",error:lastError});console.warn("[Armor Export] Falha",id,lastError);}
      const done=i+1;if(done%5===0||done===items.length)show("Coletando fichas...","Processados: "+done+"/"+items.length+" · Salvos: "+success+" · Falhas: "+failed,done,items.length);
      if(/HTTP 403|HTTP 429/.test(lastError)||consecutive>=5){show("Coleta pausada por limite/bloqueio","Progresso salvo no navegador. Execute novamente depois. Último erro: "+lastError,done,items.length);return;}
      if(done<items.length)await sleep(DELAY_MS);
    }
    const records=await dbReq("getAll"),details={};records.forEach(r=>details[r.id]=r.detail);
    const output={source:"Questlog database.getItem (browser session)",language:"en",category:"armor",generatedAt:new Date().toISOString(),requested:items.length,received:records.length,failed:Math.max(0,items.length-records.length),failures,items:details};
    download("armor-details.json",output);
    show("Exportação concluída!","Fichas salvas: "+records.length+"/"+items.length+" · Falhas: "+output.failed,items.length,items.length);
    console.log("[Armor Export] Concluído:",output);
  }catch(e){show("Não foi possível iniciar a coleta",String(e?.message||e));console.error("[Armor Export]",e);}
})();
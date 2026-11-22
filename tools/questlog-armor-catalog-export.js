/*
 * Chrono Odyssey Companion — exportador do catálogo de armaduras
 *
 * 1. Abra https://questlog.gg/chrono-odyssey/en/db/items/armor?page=1
 * 2. Aguarde a página carregar e confirme que está logado/sem bloqueio.
 * 3. F12 > Console, cole este arquivo inteiro e pressione Enter.
 *
 * Usa o mesmo método validado no catálogo de armas:
 * database.getItems + { language, page, mainCategory }.
 */
(async () => {
  "use strict";
  const API = "/chrono-odyssey/api/trpc/database.getItems";
  const CATEGORY = "armor";
  const DELAY_MS = 250;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (location.hostname !== "questlog.gg") {
    alert("Abra primeiro uma página do Questlog e execute novamente.");
    return;
  }
  if (document.getElementById("chrono-armor-catalog-panel")) {
    console.warn("[Armor Catalog] Exportador já está em execução.");
    return;
  }

  const panel = document.createElement("div");
  panel.id = "chrono-armor-catalog-panel";
  panel.style.cssText = "position:fixed;z-index:2147483647;right:18px;bottom:18px;width:min(410px,calc(100vw - 36px));padding:16px;background:#111e29;color:#e6e5df;border:1px solid #c3a36a;border-radius:10px;box-shadow:0 8px 32px #0009;font:14px/1.45 Arial,sans-serif";
  panel.innerHTML = '<div style="font-weight:700;color:#e0c58f;margin-bottom:8px">Chrono Odyssey — Catálogo de Armaduras</div><div id="chrono-armor-catalog-status">Preparando...</div><div style="height:8px;background:#344552;border-radius:8px;margin:12px 0;overflow:hidden"><div id="chrono-armor-catalog-bar" style="height:100%;width:0;background:#c3a36a"></div></div><div id="chrono-armor-catalog-detail" style="font-size:12px;color:#b7c2c9">Mantenha esta aba aberta durante a exportação.</div><button id="chrono-armor-catalog-close" style="margin-top:12px;padding:6px 12px;background:#344552;color:#fff;border:0;border-radius:5px;cursor:pointer">Fechar painel</button>';
  document.body.appendChild(panel);
  const statusEl=panel.querySelector("#chrono-armor-catalog-status");
  const detailEl=panel.querySelector("#chrono-armor-catalog-detail");
  const barEl=panel.querySelector("#chrono-armor-catalog-bar");
  panel.querySelector("#chrono-armor-catalog-close").onclick=()=>panel.remove();
  const show=(s,d,done=0,total=0)=>{statusEl.textContent=s;detailEl.textContent=d;barEl.style.width=total?Math.min(100,done/total*100)+"%":"0%";};
  const requestPage=async page=>{
    const input={language:"en",page,mainCategory:CATEGORY};
    const url=API+"?input="+encodeURIComponent(JSON.stringify(input));
    const response=await fetch(url,{credentials:"same-origin",headers:{accept:"application/json"}});
    if(!response.ok){
      const body=(await response.text()).slice(0,220).replace(/\\s+/g," ");
      throw new Error("Página "+page+": HTTP "+response.status+" — "+body);
    }
    const payload=await response.json();
    const data=payload?.result?.data?.json??payload?.result?.data??payload?.data?.json??payload?.data;
    if(!data||!Array.isArray(data.pageData)){
      throw new Error("A API respondeu, mas não encontrei result.data.pageData. Estrutura recebida: "+JSON.stringify(payload).slice(0,700));
    }
    return data;
  };

  try {
    show("Consultando a primeira página...","Chamando database.getItems com mainCategory=armor.");
    const first=await requestPage(1);
    const pageCount=Number(first.pageCount||first.pagination?.pageCount||first.totalPages||1);
    if(!Number.isFinite(pageCount)||pageCount<1||pageCount>500)throw new Error("Quantidade de páginas inválida: "+pageCount);
    const byId=new Map();
    const addRows=rows=>rows.forEach(item=>{
      if(!item||item.isDisabled||/\\(Test\\)/i.test(String(item.name||"")))return;
      const id=String(item.id??item.compoundId??"").replace(/^item-/,"");
      if(!id)return;
      byId.set(id,{...item,id,compoundId:item.compoundId||"item-"+id});
    });
    addRows(first.pageData);
    show("Catálogo localizado","Página 1/"+pageCount+" · "+first.pageData.length+" registros recebidos.",1,pageCount);
    for(let page=2;page<=pageCount;page++){
      await sleep(DELAY_MS);
      const data=await requestPage(page);
      addRows(data.pageData);
      show("Percorrendo catálogo...","Página "+page+"/"+pageCount+" · Itens únicos: "+byId.size,page,pageCount);
    }
    const items=[...byId.values()];
    if(!items.length)throw new Error("A API retornou pageData vazio em todas as páginas.");
    const wrongCategory=items.filter(x=>String(x.mainCategory||"").toLowerCase()!=="armor");
    if(wrongCategory.length===items.length)throw new Error("A API retornou registros, mas nenhum está identificado com mainCategory=armor. Não vou salvar um catálogo possivelmente incorreto.");
    const output={
      source:"Questlog",
      game:"Chrono Odyssey",
      category:CATEGORY,
      extractedAt:new Date().toISOString(),
      pageCount,
      totalRecords:items.length,
      total:items.length,
      items
    };
    const blob=new Blob([JSON.stringify(output,null,2)],{type:"application/json"});
    const objectUrl=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=objectUrl;a.download="armor-export.json";document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(objectUrl),60000);
    show("Catálogo exportado!","Itens únicos: "+items.length+" · Páginas: "+pageCount+" · Arquivo armor-export.json baixado.",pageCount,pageCount);
    console.log("[Armor Catalog] Exportação concluída:",output);
  } catch(error) {
    show("Falha ao exportar catálogo",String(error?.message||error));
    console.error("[Armor Catalog]",error);
  }
})();
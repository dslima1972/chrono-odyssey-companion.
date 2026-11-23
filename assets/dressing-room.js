(function(){
"use strict";
const $=id=>document.getElementById(id);
const slots={head:"Cabeça",chest:"Peitoral",hands:"Mãos",back:"Costas",legs:"Pernas",feet:"Pés"};
const slotAliases={head:["head","helmet"],chest:["chest","body"],hands:["hands","gloves"],back:["back","cloak"],legs:["legs","pants"],feet:["feet","boots"]};
let items=[],activeSlot="head",equipped={};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rarity=item=>({0:"Comum",1:"Incomum",2:"Raro",3:"Épico",4:"Lendário"})[Number(item.grade)]||"Não identificada";
const image=item=>{let p=String(item.icon||"").replace(/^\//,"").replace(/\.(png|jpe?g|webp)$/i,"");return p?"https://cdn.questlog.gg/chrono-odyssey/"+p+".webp":""};
const tier=item=>{const raw=String(item.itemInfo?.tier??item.tier??"");const m=raw.match(/[1-5]/);return m?m[0]:""};
const layoutDefaults={head:{x:38,y:2,w:24,h:19},chest:{x:30,y:24,w:40,h:31},hands:{x:5,y:27,w:22,h:27},back:{x:73,y:27,w:22,h:27},legs:{x:32,y:57,w:36,h:27},feet:{x:35,y:83,w:30,h:15}};
let freeLayout=readLayout();
let compositionMode="fixed";
function readLayout(){try{return {...layoutDefaults,...JSON.parse(localStorage.getItem("chronoDressingLayout")||"{}")}}catch(e){return {...layoutDefaults}}}
function saveLayout(){try{localStorage.setItem("chronoDressingLayout",JSON.stringify(freeLayout))}catch(e){}}
function applyFreeLayout(){
 const root=$("dressing-composition");
 root.classList.toggle("free-layout",compositionMode==="free");
 root.classList.toggle("fixed-layout",compositionMode==="fixed");
 root.querySelectorAll("[data-composition-slot]").forEach(node=>{
  const slot=node.dataset.compositionSlot,p=freeLayout[slot]||layoutDefaults[slot];
  if(compositionMode==="free"){
   Object.assign(node.style,{left:p.x+"%",top:p.y+"%",width:p.w+"%",height:p.h+"%",zIndex:""+(p.z??(slot==="chest"?4:slot==="head"?5:3))});
   if(!node.querySelector(".composition-front"))node.insertAdjacentHTML("beforeend",'<button type="button" class="composition-front" data-bring-front="' + slot + '" aria-label="Trazer peça para frente" title="Trazer para frente">↥</button>');
   if(!node.querySelector(".composition-resize"))node.insertAdjacentHTML("beforeend",'<span class="composition-resize" aria-label="Redimensionar peça"></span>');
  }else{
   ["left","top","width","height","zIndex"].forEach(k=>node.style[k]="");
   node.querySelector(".composition-resize")?.remove();
   node.querySelector(".composition-front")?.remove();
  }
 });
}
function renderComposition(){
 const root=$("dressing-composition");if(!root)return;
 const labels={head:"Cabeça",chest:"Peitoral",hands:"Mãos",back:"Capa",legs:"Calça",feet:"Pés"};
 root.querySelectorAll("[data-composition-slot]").forEach(node=>{
  const slot=node.dataset.compositionSlot,item=equipped[slot];
  node.innerHTML=item?(image(item)?'<img src="'+esc(image(item))+'" alt="'+esc(item.name||labels[slot])+'" loading="lazy">':''):'<span>'+labels[slot]+'</span>';
  node.classList.toggle("is-equipped",!!item);
 });
 applyFreeLayout();
}
function setCompositionMode(mode){
 compositionMode=mode;
 $("dressing-mode-fixed").classList.toggle("active",mode==="fixed");
 $("dressing-mode-free").classList.toggle("active",mode==="free");
 $("dressing-status").textContent=mode==="free"?"Arraste as peças para mover. Use a alça no canto para redimensionar.":"Visualização em posições fixas de inventário.";
 applyFreeLayout();
}
function initCompositionEditor(){
 const root=$("dressing-composition");
 if(root.dataset.editorInitialized==="true")return;
 root.dataset.editorInitialized="true";
 root.addEventListener("click",ev=>{const btn=ev.target.closest("[data-bring-front]");if(!btn)return;const slot=btn.dataset.bringFront;const maxZ=Math.max(0,...Object.values(freeLayout).map(p=>Number(p.z)||0));freeLayout[slot]={...freeLayout[slot],z:maxZ+1};applyFreeLayout();saveLayout();$("dressing-status").textContent=slots[slot]+" trazida para frente."});
 root.addEventListener("pointerdown",ev=>{
  if(compositionMode!=="free")return;
  const node=ev.target.closest("[data-composition-slot]");if(!node||!equipped[node.dataset.compositionSlot])return;
  const slot=node.dataset.compositionSlot,p=freeLayout[slot]||{...layoutDefaults[slot]},rect=root.getBoundingClientRect();
  const resizing=ev.target.classList.contains("composition-resize");
  const startX=ev.clientX,startY=ev.clientY,start={...p};
  ev.preventDefault();node.setPointerCapture(ev.pointerId);
  const move=e=>{
   const dx=(e.clientX-startX)/rect.width*100,dy=(e.clientY-startY)/rect.height*100;
   if(resizing){const scale=Math.max(0.15,Math.min(3,1+Math.max(dx/start.w,dy/start.h)));p.w=Math.max(7,Math.min(80,start.w*scale));p.h=Math.max(7,Math.min(80,start.h*scale))}
   else{p.x=Math.max(0,Math.min(100-p.w,start.x+dx));p.y=Math.max(0,Math.min(100-p.h,start.y+dy))}
   freeLayout[slot]={...p};applyFreeLayout();
  };
  const end=()=>{node.removeEventListener("pointermove",move);node.removeEventListener("pointerup",end);node.removeEventListener("pointercancel",end);saveLayout()};
  node.addEventListener("pointermove",move);node.addEventListener("pointerup",end);node.addEventListener("pointercancel",end);
 });
 $("dressing-mode-fixed").addEventListener("click",()=>setCompositionMode("fixed"));
 $("dressing-mode-free").addEventListener("click",()=>setCompositionMode("free"));
 $("dressing-layout-reset").addEventListener("click",()=>{freeLayout={...layoutDefaults};saveLayout();applyFreeLayout();$("dressing-status").textContent="Posições e tamanhos da montagem livre restaurados."});
}
function renderItems(){
 const q=$("dressing-search").value.trim().toLowerCase(),r=$("dressing-rarity").value,allowed=slotAliases[activeSlot]||[];
 const list=items.filter(x=>allowed.includes(String(x.subCategory||"").toLowerCase())&&(!q||String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q))&&(!r||rarity(x)===r));
 $("dressing-items").innerHTML=list.length?list.map(x=>{const id=String(x.id||x.compoundId),selected=String(equipped[activeSlot]?.id||equipped[activeSlot]?.compoundId||"")===id;return '<button type="button" class="dressing-item '+(selected?"selected":"")+'" data-id="'+esc(id)+'">'+(image(x)?'<img src="'+esc(image(x))+'" alt="" loading="lazy">':'<span>✧</span>')+'<strong>'+esc(x.name||"Armadura")+'</strong><small>'+rarity(x)+(tier(x)?" · Tier "+tier(x):"")+'</small></button>'}).join(""):'<div class="dressing-empty">Nenhuma peça encontrada nesta categoria.</div>';
 $("dressing-count").textContent=list.length+" PEÇAS DISPONÍVEIS";
 $("dressing-items").querySelectorAll("[data-id]").forEach(btn=>btn.addEventListener("click",()=>{const item=list.find(x=>String(x.id||x.compoundId)===btn.dataset.id);if(item){equipped[activeSlot]=item;renderAll();$("dressing-status").textContent=item.name+" adicionado à composição."}}));
}
function readSaved(){try{return JSON.parse(localStorage.getItem("chronoDressingLooks")||"[]")}catch(e){return []}}
function renderSaved(){
 const saved=readSaved();
 $("dressing-saved-list").innerHTML=saved.length?saved.map((x,i)=>'<button type="button" data-load="'+i+'">'+esc(x.name)+' · '+Object.keys(x.items||{}).length+' peças</button>').join(""):'<span class="dressing-empty">Nenhuma combinação salva.</span>';
 $("dressing-saved-list").querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click",()=>{const x=saved[Number(b.dataset.load)];equipped=x.items||{};renderAll();$("dressing-status").textContent="Combinação carregada: "+x.name}));
}
function renderAll(){
 renderComposition();
 initCompositionEditor();
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>b.classList.toggle("active",b.dataset.slot===activeSlot));
 $("dressing-equipped-list").innerHTML=Object.entries(equipped).length?Object.entries(equipped).map(([slot,item])=>'<div class="dressing-equipped-row">'+(image(item)?'<img src="'+esc(image(item))+'" alt="">':'<span>✧</span>')+'<div><strong>'+esc(item.name)+'</strong><small>'+slots[slot]+' · '+rarity(item)+'</small></div><button type="button" data-remove="'+slot+'" aria-label="Remover '+slots[slot]+'">×</button></div>').join(""):'<p class="dressing-empty">Nenhuma peça selecionada.</p>';
 $("dressing-equipped-list").querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{delete equipped[b.dataset.remove];renderAll()}));
 renderItems();renderSaved();
}
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>b.addEventListener("click",()=>{activeSlot=b.dataset.slot;renderAll()}));
["dressing-search","dressing-rarity"].forEach(id=>$(id).addEventListener(id==="dressing-search"?"input":"change",renderItems));
$("dressing-clear").addEventListener("click",()=>{equipped={};renderAll();$("dressing-status").textContent="Todos os espaços foram limpos."});
$("dressing-save").addEventListener("click",()=>{if(!Object.keys(equipped).length){$("dressing-status").textContent="Selecione pelo menos uma peça antes de salvar.";return}const name=prompt("Nome desta combinação:","Meu visual");if(!name)return;const saved=readSaved();saved.push({name:name.trim(),items:equipped});try{localStorage.setItem("chronoDressingLooks",JSON.stringify(saved));renderSaved();$("dressing-status").textContent="Combinação salva neste navegador."}catch(e){$("dressing-status").textContent="Não foi possível salvar a combinação neste navegador."}});
fetch("./data/armor-export.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error("Catálogo indisponível");return r.json()}).then(data=>{items=(Array.isArray(data.items)?data.items:data).filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||"")));$("dressing-status").textContent="Catálogo carregado. Escolha as peças para montar seu equipamento.";renderAll()}).catch(()=>$("dressing-count").textContent="CATÁLOGO INDISPONÍVEL");
})();
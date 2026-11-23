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
function renderComposition(){
 const root=$("dressing-composition");
 if(!root)return;
 const positions={head:"Cabeça",chest:"Peitoral",hands:"Mãos",back:"Costas",legs:"Pernas",feet:"Pés"};
 root.querySelectorAll("[data-composition-slot]").forEach(node=>{
  const slot=node.dataset.compositionSlot,item=equipped[slot];
  node.innerHTML=item?(image(item)?'<img src="'+esc(image(item))+'" alt="'+esc(item.name||positions[slot])+'" loading="lazy"><small>'+esc(item.name||positions[slot])+'</small>':'<small>'+esc(item.name||positions[slot])+'</small>'):'<span>'+positions[slot]+'</span>';
  node.classList.toggle("is-equipped",!!item);
 });
}
function renderItems(){
 const q=$("dressing-search").value.trim().toLowerCase(),r=$("dressing-rarity").value;
 const allowed=slotAliases[activeSlot]||[];
 const list=items.filter(x=>allowed.includes(String(x.subCategory||"").toLowerCase())&&(!q||String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q))&&(!r||rarity(x)===r));
 $("dressing-items").innerHTML=list.length?list.map(x=>{const id=String(x.id||x.compoundId),selected=String(equipped[activeSlot]?.id||"")===id;return '<button type="button" class="dressing-item '+(selected?"selected":"")+'" data-id="'+esc(id)+'">'+(image(x)?'<img src="'+esc(image(x))+'" alt="" loading="lazy">':'<span>✧</span>')+'<strong>'+esc(x.name||"Armadura")+'</strong><small>'+rarity(x)+(tier(x)?" · Tier "+tier(x):"")+'</small></button>'}).join(""):'<div class="dressing-empty">Nenhuma peça encontrada nesta categoria.</div>';
 $("dressing-count").textContent=list.length+" PEÇAS DISPONÍVEIS";
 $("dressing-items").querySelectorAll("[data-id]").forEach(btn=>btn.addEventListener("click",()=>{const item=list.find(x=>String(x.id||x.compoundId)===btn.dataset.id);if(item){equipped[activeSlot]=item;renderAll();if(activeSlot==="chest"&&String(item.id||item.compoundId)==="10101")$("dressing-status").textContent=(($("dressing-avatar-image")?.dataset.avatarFile||"").includes("avatar-male-base-3.jpg"))?"Ragged Clothes adicionado à composição visual.":"Ragged Clothes adicionado à composição visual.";}}));
}
function renderAll(){
 renderComposition();
 document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>b.classList.toggle("active",b.dataset.slot===activeSlot));
 $("dressing-equipped-list").innerHTML=Object.entries(equipped).length?Object.entries(equipped).map(([slot,item])=>'<div class="dressing-equipped-row">'+(image(item)?'<img src="'+esc(image(item))+'" alt="">':'<span>✧</span>')+'<div><strong>'+esc(item.name)+'</strong><small>'+slots[slot]+' · '+rarity(item)+'</small></div><button type="button" data-remove="'+slot+'" aria-label="Remover '+slots[slot]+'">×</button></div>').join(""):'<p class="dressing-empty">Nenhuma peça selecionada.</p>';
 $("dressing-equipped-list").querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{delete equipped[b.dataset.remove];renderAll()}));
 renderItems();renderSaved();
}
function readSaved(){try{return JSON.parse(localStorage.getItem("chronoDressingLooks")||"[]")}catch(e){return []}}
function renderSaved(){const saved=readSaved();$("dressing-saved-list").innerHTML=saved.length?saved.map((x,i)=>'<button type="button" data-load="'+i+'">'+esc(x.name)+' · '+Object.keys(x.items||{}).length+' peças</button>').join(""):'<span class="dressing-empty">Nenhuma combinação salva.</span>';$("dressing-saved-list").querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click",()=>{const x=saved[Number(b.dataset.load)];equipped=x.items||{};renderAll();$("dressing-status").textContent="Combinação carregada: "+x.name}))}
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>b.classList.toggle("active",b.dataset.slot===activeSlot));
 $("dressing-equipped-list").innerHTML=Object.entries(equipped).length?Object.entries(equipped).map(([slot,item])=>'<div class="dressing-equipped-row">'+(image(item)?'<img src="'+esc(image(item))+'" alt="">':'<span>✧</span>')+'<div><strong>'+esc(item.name)+'</strong><small>'+slots[slot]+' · '+rarity(item)+'</small></div><button type="button" data-remove="'+slot+'" aria-label="Remover '+slots[slot]+'">×</button></div>').join(""):'<p class="dressing-empty">Nenhuma peça selecionada.</p>';
 $("dressing-equipped-list").querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{delete equipped[b.dataset.remove];renderAll()}));
 renderItems();renderSaved();
}
function readSaved(){try{return JSON.parse(localStorage.getItem("chronoDressingLooks")||"[]")}catch(e){return []}}
function renderSaved(){const saved=readSaved();$("dressing-saved-list").innerHTML=saved.length?saved.map((x,i)=>'<button type="button" data-load="'+i+'">'+esc(x.name)+' · '+Object.keys(x.items||{}).length+' peças</button>').join(""):'<span class="dressing-empty">Nenhuma combinação salva.</span>';$("dressing-saved-list").querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click",()=>{const x=saved[Number(b.dataset.load)];equipped=x.items||{};renderAll();$("dressing-status").textContent="Combinação carregada: "+x.name}))}
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>b.addEventListener("click",()=>{activeSlot=b.dataset.slot;renderAll()}));
["dressing-search","dressing-rarity"].forEach(id=>$(id).addEventListener(id==="dressing-search"?"input":"change",renderItems));
$("dressing-clear").addEventListener("click",()=>{equipped={};renderAll();$("dressing-status").textContent="Todos os espaços foram limpos."});
$("dressing-save").addEventListener("click",()=>{if(!Object.keys(equipped).length){$("dressing-status").textContent="Selecione pelo menos uma peça antes de salvar.";return}const name=prompt("Nome desta combinação:","Meu visual");if(!name)return;const saved=readSaved();saved.push({name:name.trim(),items:equipped});try{localStorage.setItem("chronoDressingLooks",JSON.stringify(saved));renderSaved();$("dressing-status").textContent="Combinação salva neste navegador."}catch(e){$("dressing-status").textContent="Não foi possível salvar a combinação neste navegador."}});
renderComposition();
fetch("./data/armor-export.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error("Catálogo indisponível");return r.json()}).then(data=>{items=(Array.isArray(data.items)?data.items:data).filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||"")));$("dressing-status").textContent="Catálogo carregado. Escolha as peças para montar seu equipamento.";renderAll()}).catch(()=>{$("dressing-count").textContent="CATÁLOGO INDISPONÍVEL";$("dressing-items").innerHTML='<div class="dressing-empty">Não foi possível carregar data/armor-export.json.</div>'});
})();
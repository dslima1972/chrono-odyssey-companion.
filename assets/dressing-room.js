(function(){
"use strict";
const $=id=>document.getElementById(id);
const slots={head:"Elmo",chest:"Peitoral",hands:"Luvas",back:"Capa",legs:"Calça",feet:"Botas"};
const definitions=[
 {slot:"head",id:"11271504",imagePath:"./references/dark-mane-full-helm.png"},
 {slot:"chest",id:"11272504",imagePath:"./references/dark-mane-plate-armor.png"},
 {slot:"hands",id:"11273504",imagePath:"./references/dark-mane-gauntlets.png"},
 {slot:"legs",id:"11274504",imagePath:"./references/dark-mane-steel-leggings.png"},
 {slot:"feet",id:"11275504",imagePath:"./references/dark-mane-plate-boots.png"},
 {slot:"back",id:"void-cloak",name:"Void Cloak",subCategory:"back",grade:4,imagePath:"./references/void-cloak.png",isApprovedLayer:true}
];
const storageKey="chronoDressingLooksV2";
let activeSlot="head",approvedBySlot={},approvedById=new Map(),equipped={};
const esc=s=>String(s??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rarity=item=>({0:"Comum",1:"Incomum",2:"Raro",3:"Épico",4:"Lendário"})[Number(item?.grade)]||"Camada aprovada";
const rarityKey=item=>item?.grade===undefined||item?.grade===null?"special":String(item.grade);
const rarityClass=item=>"rarity-"+rarityKey(item);
const setName=item=>item?.setName||(item?.name&&/\bDark Mane\b/i.test(item.name)?"Dark Mane":"Sem conjunto");
function readSaved(){try{const v=JSON.parse(localStorage.getItem(storageKey)||"[]");return Array.isArray(v)?v:[]}catch(e){return[]}}
function writeSaved(value){try{localStorage.setItem(storageKey,JSON.stringify(value));return true}catch(e){return false}}
function renderComposition(){
 Object.keys(slots).forEach(slot=>{const layer=$("layer-"+slot);if(layer)layer.hidden=!equipped[slot]});
}
function renderItems(){
 document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(b=>{
  const active=b.dataset.slot===activeSlot;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));
 });
 const item=approvedBySlot[activeSlot];
 const rarityFilter=$("dressing-rarity-filter")?.value||"";
 const setFilter=$("dressing-set-filter")?.value||"";
 if(!item){$("dressing-items").innerHTML='<div class="dressing-empty">Esta camada ainda não está disponível.</div>';return}
 if((rarityFilter&&rarityKey(item)!==rarityFilter)||(setFilter&&setName(item)!==setFilter)){
  $("dressing-items").innerHTML='<div class="dressing-empty">Nenhuma peça desta categoria corresponde aos filtros selecionados.</div>';
  return;
 }
 const selected=!!equipped[activeSlot],grade=rarityKey(item),set=setName(item);
 $("dressing-items").innerHTML='<button type="button" class="dressing-item dressing-approved-item '+rarityClass(item)+' '+(selected?"selected":"")+'" data-rarity="'+esc(grade)+'" data-set="'+esc(set)+'" data-toggle-approved="'+esc(activeSlot)+'" aria-pressed="'+selected+'"><img src="'+esc(item.imagePath)+'" alt="'+esc(item.name)+'" loading="lazy"><strong>'+esc(item.name)+'</strong><small>'+rarity(item)+" · "+esc(set)+'</small><span class="dressing-item-action">'+(selected?"Remover da composição":"Equipar peça")+'</span></button>';
 $("dressing-items").querySelector("[data-toggle-approved]").addEventListener("click",()=>{
  if(equipped[activeSlot]){delete equipped[activeSlot];$("dressing-status").textContent=item.name+" removido da composição."}
  else{equipped[activeSlot]=item;$("dressing-status").textContent=item.name+" adicionado à composição."}
  renderAll();
 });
}
function renderEquipped(){
 const entries=Object.entries(equipped);
 $("dressing-equipped-list").innerHTML=entries.length?entries.map(([slot,item])=>'<div class="dressing-equipped-row '+rarityClass(item)+'" data-rarity="'+esc(rarityKey(item))+'"><img src="'+esc(item.imagePath)+'" alt=""><div><strong>'+esc(item.name)+'</strong><small>'+slots[slot]+' · '+rarity(item)+'</small></div><button type="button" data-remove-approved="'+slot+'" aria-label="Remover '+slots[slot]+'">×</button></div>').join(""):'<p class="dressing-empty">Nenhuma peça selecionada.</p>';
 $("dressing-equipped-list").querySelectorAll("[data-remove-approved]").forEach(button=>button.addEventListener("click",()=>{
  const slot=button.dataset.removeApproved,name=equipped[slot]?.name;delete equipped[slot];renderAll();$("dressing-status").textContent=(name||slots[slot])+" removido da composição.";
 }));
}
function renderSaved(){
 const saved=readSaved();
 $("dressing-saved-list").innerHTML=saved.length?saved.map((item,index)=>'<div class="dressing-saved-row"><strong>'+esc(item.name)+'</strong><small>'+Object.keys(item.items||{}).length+' peças</small><div class="dressing-saved-actions"><button type="button" data-load-approved="'+index+'">Carregar</button><button type="button" data-rename-approved="'+index+'">Renomear</button><button type="button" data-update-approved="'+index+'">Atualizar</button><button type="button" data-delete-approved="'+index+'">Excluir</button></div></div>').join(""):'<span class="dressing-empty">Nenhuma combinação salva.</span>';
 $("dressing-saved-list").querySelectorAll("[data-load-approved]").forEach(button=>button.addEventListener("click",()=>{
  const record=saved[Number(button.dataset.loadApproved)],restored={};
  Object.entries(record.items||{}).forEach(([slot,id])=>{const item=approvedById.get(String(id));if(item)restored[slot]=item});
  equipped=restored;renderAll();$("dressing-status").textContent="Combinação carregada: "+record.name;
 }));
 $("dressing-saved-list").querySelectorAll("[data-rename-approved]").forEach(button=>button.addEventListener("click",()=>{
  const index=Number(button.dataset.renameApproved),name=prompt("Novo nome da combinação:",saved[index].name);
  if(name&&name.trim()){saved[index].name=name.trim();if(writeSaved(saved))renderSaved()}
 }));
 $("dressing-saved-list").querySelectorAll("[data-update-approved]").forEach(button=>button.addEventListener("click",()=>{
  const index=Number(button.dataset.updateApproved);
  if(!Object.keys(equipped).length){$("dressing-status").textContent="Monte uma composição antes de atualizar a combinação.";return}
  if(!confirm("Substituir as peças salvas pela composição atual?"))return;
  saved[index].items=Object.fromEntries(Object.entries(equipped).map(([slot,item])=>[slot,String(item.id)]));
  if(writeSaved(saved)){renderSaved();$("dressing-status").textContent="Combinação atualizada."}
 }));
 $("dressing-saved-list").querySelectorAll("[data-delete-approved]").forEach(button=>button.addEventListener("click",()=>{
  const index=Number(button.dataset.deleteApproved);
  if(!confirm('Excluir a combinação "'+saved[index].name+'"?'))return;
  saved.splice(index,1);if(writeSaved(saved)){renderSaved();$("dressing-status").textContent="Combinação excluída."}
 }));
}

const stageBackgrounds={
 graphite:"radial-gradient(ellipse at 50% 38%,#343a43 0,#1b2028 58%,#101318 100%)",
 black:"#080a0e",
 navy:"linear-gradient(145deg,#24364b,#111a28)",
 gray:"#747b84",
 silver:"#c7cbd0",
 sand:"#d8cdb8",
 white:"#f4f4f1"
};
document.querySelectorAll("[data-stage-background]").forEach(button=>button.addEventListener("click",()=>{
 const key=button.dataset.stageBackground,stage=$("dressing-composition-stage");
 if(!stage||!stageBackgrounds[key])return;
 stage.style.background=stageBackgrounds[key];
 document.querySelectorAll("[data-stage-background]").forEach(item=>{
  const active=item===button;item.classList.toggle("active",active);item.setAttribute("aria-pressed",String(active));
 });
 $("dressing-status").textContent="Fundo de visualização alterado: "+button.querySelector("small").textContent+".";
}));
function renderAll(){renderComposition();renderItems();renderEquipped();renderSaved()}
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(button=>button.addEventListener("click",()=>{activeSlot=button.dataset.slot;renderItems()}));
["dressing-rarity-filter","dressing-set-filter"].forEach(id=>$(id)?.addEventListener("change",renderItems));
$("dressing-clear").addEventListener("click",()=>{equipped={};renderAll();$("dressing-status").textContent="Todas as peças foram removidas."});
$("dressing-save").addEventListener("click",()=>{
 if(!Object.keys(equipped).length){$("dressing-status").textContent="Equipe pelo menos uma peça antes de salvar.";return}
 const name=prompt("Nome desta combinação:","Meu visual Dark Mane");if(!name||!name.trim())return;
 const saved=readSaved();saved.push({name:name.trim(),items:Object.fromEntries(Object.entries(equipped).map(([slot,item])=>[slot,String(item.id)]))});
 if(writeSaved(saved)){renderSaved();$("dressing-status").textContent="Combinação salva neste navegador."}
 else $("dressing-status").textContent="Não foi possível salvar a combinação neste navegador.";
});
fetch("./data/armor-export.json",{cache:"no-store"}).then(response=>{if(!response.ok)throw new Error("Catálogo indisponível");return response.json()}).then(data=>{
 const rows=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);
 definitions.forEach(def=>{
  let item=def.slot==="back"?{...def}:rows.find(row=>String(row.id)===def.id);
  if(!item)throw new Error("Não foi possível localizar o item "+def.id+" no catálogo de armaduras.");
  item={...item,...def,name:def.name||item.name};
  approvedBySlot[def.slot]=item;approvedById.set(String(item.id),item);
 });
 equipped={...approvedBySlot};
 $("dressing-count").textContent="6 CAMADAS APROVADAS";
 $("dressing-status").textContent="Conjunto Dark Mane carregado. Selecione uma categoria para equipar ou remover sua peça.";
 renderAll();
}).catch(error=>{
 $("dressing-count").textContent="ERRO AO CARREGAR CAMADAS";
 $("dressing-status").textContent="Não foi possível carregar o conjunto inicial: "+error.message;
 $("dressing-items").innerHTML='<div class="dressing-empty">Verifique o catálogo de armaduras e os arquivos das camadas aprovadas.</div>';
});
})();
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
 {slot:"back",id:"void-cloak",name:"Void Cloak",subCategory:"back",imagePath:"./references/void-cloak.png",isApprovedLayer:true}
];
const storageKey="chronoDressingLooksV2";
let activeSlot="head",approvedBySlot={},approvedById=new Map(),equipped={};
const esc=s=>String(s??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rarity=item=>({0:"Comum",1:"Incomum",2:"Raro",3:"Épico",4:"Lendário"})[Number(item?.grade)]||"Camada aprovada";
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
 if(!item){$("dressing-items").innerHTML='<div class="dressing-empty">Esta camada ainda não está disponível.</div>';return}
 const selected=!!equipped[activeSlot];
 $("dressing-items").innerHTML='<button type="button" class="dressing-item dressing-approved-item '+(selected?"selected":"")+'" data-toggle-approved="'+esc(activeSlot)+'" aria-pressed="'+selected+'"><img src="'+esc(item.imagePath)+'" alt="'+esc(item.name)+'" loading="lazy"><strong>'+esc(item.name)+'</strong><small>'+(item.isApprovedLayer?"Capa · camada aprovada":rarity(item)+" · Dark Mane")+'</small><span class="dressing-item-action">'+(selected?"Remover da composição":"Equipar peça")+'</span></button>';
 $("dressing-items").querySelector("[data-toggle-approved]").addEventListener("click",()=>{
  if(equipped[activeSlot]){delete equipped[activeSlot];$("dressing-status").textContent=item.name+" removido da composição."}
  else{equipped[activeSlot]=item;$("dressing-status").textContent=item.name+" adicionado à composição."}
  renderAll();
 });
}
function renderEquipped(){
 const entries=Object.entries(equipped);
 $("dressing-equipped-list").innerHTML=entries.length?entries.map(([slot,item])=>'<div class="dressing-equipped-row"><img src="'+esc(item.imagePath)+'" alt=""><div><strong>'+esc(item.name)+'</strong><small>'+slots[slot]+' · '+(item.isApprovedLayer?"Camada aprovada":rarity(item))+'</small></div><button type="button" data-remove-approved="'+slot+'" aria-label="Remover '+slots[slot]+'">×</button></div>').join(""):'<p class="dressing-empty">Nenhuma peça selecionada.</p>';
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

const gloveApproved={scale:0.675,x:0,y:-3.5};
function applyGloveAdjustment(){
 const scale=Number($("glove-scale").value),x=Number($("glove-x").value),y=Number($("glove-y").value);
 const wrapper=$("layer-hands"),image=wrapper?.querySelector("img");
 if(wrapper)wrapper.style.transform="translate("+x+"%,"+y+"%)";
 if(image)image.style.transform="scale("+scale+","+scale+")";
 $("glove-scale-value").textContent=(scale*100).toFixed(1).replace(".",",")+"%";
 $("glove-x-value").textContent=(x>0?"+":"")+x.toFixed(1).replace(".",",")+"%";
 $("glove-y-value").textContent=(y>0?"+":"")+y.toFixed(1).replace(".",",")+"%";
}
function resetGloveAdjustment(){
 $("glove-scale").value=gloveApproved.scale;
 $("glove-x").value=gloveApproved.x;
 $("glove-y").value=gloveApproved.y;
 applyGloveAdjustment();
 $("dressing-status").textContent="Ajuste aprovado das luvas restaurado: 67,5%, X 0%, Y -3,5%.";
}
["glove-scale","glove-x","glove-y"].forEach(id=>$(id).addEventListener("input",applyGloveAdjustment));
$("glove-reset").addEventListener("click",resetGloveAdjustment);
$("glove-copy").addEventListener("click",async()=>{
 const values="Luvas — tamanho: "+$("glove-scale-value").textContent+"; X: "+$("glove-x-value").textContent+"; Y: "+$("glove-y-value").textContent;
 try{await navigator.clipboard.writeText(values);$("dressing-status").textContent="Configuração copiada: "+values}
 catch(e){$("dressing-status").textContent=values}
});
applyGloveAdjustment();

function renderAll(){renderComposition();renderItems();renderEquipped();renderSaved()}
document.querySelectorAll("#dressing-slot-tabs [data-slot]").forEach(button=>button.addEventListener("click",()=>{activeSlot=button.dataset.slot;renderItems()}));
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
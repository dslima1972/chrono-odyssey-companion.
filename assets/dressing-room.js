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
// Converte a imagem JPEG (atualmente armazenada com extensão .png) em PNG transparente no navegador.
function prepareAvatar(){
 const img=$("dressing-avatar-image");
 if(!img)return;
 const process=()=>{
  try{
   const w=img.naturalWidth,h=img.naturalHeight;
   if(!w||!h)throw new Error("Imagem do avatar inválida");
   const canvas=document.createElement("canvas");canvas.width=w;canvas.height=h;
   const ctx=canvas.getContext("2d",{willReadFrequently:true});ctx.drawImage(img,0,0);
   const frame=ctx.getImageData(0,0,w,h),d=frame.data,seen=new Uint8Array(w*h),queue=new Int32Array(w*h);
   const corners=[[0,0],[w-1,0],[0,h-1],[w-1,h-1]];
   const samples=corners.map(([x,y])=>{const k=(y*w+x)*4;return [d[k],d[k+1],d[k+2]];});
   const bg=samples.reduce((a,c)=>a.map((v,i)=>v+c[i]/samples.length),[0,0,0]);
   const isBg=(p)=>{const k=p*4,r=d[k],g=d[k+1],b=d[k+2],max=Math.max(r,g,b),min=Math.min(r,g,b),neutral=max-min<48,dist=Math.sqrt((r-bg[0])**2+(g-bg[1])**2+(b-bg[2])**2);return neutral&&dist<88&&r>95&&g>95&&b>95;};
   let head=0,tail=0;
   const add=p=>{if(p<0||p>=w*h||seen[p]||!isBg(p))return;seen[p]=1;queue[tail++]=p;};
   for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}
   for(let y=0;y<h;y++){add(y*w);add(y*w+w-1);}
   while(head<tail){const p=queue[head++],x=p%w;if(x)add(p-1);if(x<w-1)add(p+1);if(p>=w)add(p-w);if(p<(h-1)*w)add(p+w);}
   for(let p=0;p<seen.length;p++)if(seen[p])d[p*4+3]=0;
   ctx.putImageData(frame,0,0);img.src=canvas.toDataURL("image/png");img.classList.add("avatar-ready");
  }catch(err){$("dressing-status").textContent="Não foi possível processar a transparência do avatar: "+err.message;}
 };
 if(img.complete&&img.naturalWidth)process();else img.addEventListener("load",process,{once:true});
}
function renderItems(){
 const q=$("dressing-search").value.trim().toLowerCase(),r=$("dressing-rarity").value;
 const allowed=slotAliases[activeSlot]||[];
 const list=items.filter(x=>allowed.includes(String(x.subCategory||"").toLowerCase())&&(!q||String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q))&&(!r||rarity(x)===r));
 $("dressing-items").innerHTML=list.length?list.map(x=>{const id=String(x.id||x.compoundId),selected=String(equipped[activeSlot]?.id||"")===id;return '<button type="button" class="dressing-item '+(selected?"selected":"")+'" data-id="'+esc(id)+'">'+(image(x)?'<img src="'+esc(image(x))+'" alt="" loading="lazy">':'<span>✧</span>')+'<strong>'+esc(x.name||"Armadura")+'</strong><small>'+rarity(x)+(tier(x)?" · Tier "+tier(x):"")+'</small></button>'}).join(""):'<div class="dressing-empty">Nenhuma peça encontrada nesta categoria.</div>';
 $("dressing-count").textContent=list.length+" PEÇAS DISPONÍVEIS";
 $("dressing-items").querySelectorAll("[data-id]").forEach(btn=>btn.addEventListener("click",()=>{const item=list.find(x=>String(x.id||x.compoundId)===btn.dataset.id);if(item){equipped[activeSlot]=item;renderAll()}}));
}
function renderAll(){
 const avatar=$("dressing-avatar-image");
 const chest=$("dressing-chest-prototype");
 const chestIsPrototype=Boolean(equipped.chest&&String(equipped.chest.id||equipped.chest.compoundId)==="10101");
 const avatarOne=avatar&&!avatar.getAttribute("src").includes("avatar-male-base-2.jpg");
 if(chest){const active=chestIsPrototype&&avatarOne;chest.style.display=active?"block":"none";chest.parentElement.classList.toggle("chest-prototype-active",active);}
 document.querySelectorAll(".dressing-avatar-switch [data-avatar]").forEach(button=>button.addEventListener("click",()=>{const img=$("dressing-avatar-image");if(!img)return;document.querySelectorAll(".dressing-avatar-switch [data-avatar]").forEach(b=>{const active=b===button;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active))});img.classList.remove("avatar-ready");img.alt=button.dataset.avatar==="avatar-male-base-2.jpg"?"Personagem masculino alternativo de corpo inteiro":"Personagem masculino de corpo inteiro";img.src="./assets/images/avatars/"+button.dataset.avatar;prepareAvatar();$("dressing-status").textContent="Avatar alterado. As peças selecionadas foram mantidas."}));
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
prepareAvatar();
fetch("./data/armor-export.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error("Catálogo indisponível");return r.json()}).then(data=>{items=(Array.isArray(data.items)?data.items:data).filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||"")));$("dressing-status").textContent="Catálogo carregado. Escolha uma peça para equipar no espaço correspondente.";renderAll()}).catch(()=>{$("dressing-count").textContent="CATÁLOGO INDISPONÍVEL";$("dressing-items").innerHTML='<div class="dressing-empty">Não foi possível carregar data/armor-export.json.</div>'});
})();
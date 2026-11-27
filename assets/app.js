// Navegação interna da página Equipamentos.
document.addEventListener("click",function(event){
 const button=event.target.closest(".equipment-switcher [data-equipment-tab]");
 if(!button)return;
 const key=button.dataset.equipmentTab;
 const switcher=button.closest(".equipment-switcher");
 switcher.querySelectorAll("[data-equipment-tab]").forEach(item=>{
  const active=item===button;
  item.classList.toggle("active",active);
  item.setAttribute("aria-selected",String(active));
 });
 ["weapons","armor","accessories"].forEach(name=>{
  const panel=document.getElementById(name+"-view");
  const active=name===key;
  if(panel){panel.classList.toggle("active",active);panel.hidden=!active}
 });
},true);

// Navegação principal resiliente: delegação em capture, independente da inicialização dos catálogos.
document.addEventListener("click",function(event){
 const tab=event.target.closest(".header-nav [data-tab]");
 if(!tab)return;
 const key=tab.dataset.tab;
 const target=document.getElementById((key==="equipment"?"equipment":key)+"-view");
 if(!target)return;
 event.preventDefault();
 document.querySelectorAll(".header-nav [data-tab]").forEach(button=>{
  const selected=button===tab;
  button.classList.toggle("active",selected);
  button.setAttribute("aria-current",selected?"page":"false");
 });
 document.querySelectorAll(".view").forEach(view=>{
  const selected=view===target;
  view.classList.toggle("active",selected);
  view.hidden=!selected;
 });
 if(key==="build"&&typeof updateBuildLayerStatus==="function")updateBuildLayerStatus();
},true);

const CLASS_MAP={
  "Greatsword":"Swordsman","Sword and Shield":"Swordsman","Dual Blades":"Swordsman",
  "Bow":"Ranger","Crossbow":"Ranger","Rapier":"Ranger",
  "Chain Blades":"Berserker","Twin Axes":"Berserker","Battle Axe":"Berserker",
  "Lance":"Paladin","Halberd":"Paladin","Mace":"Paladin",
  "Staff":"Sorcerer","Manasphere":"Sorcerer","Arcane Orb":"Sorcerer","Grimoire":"Sorcerer","Spellbook":"Sorcerer",
  "Sabre":"Assassin","Saber":"Assassin","Wrist Blades":"Assassin","Musket":"Assassin"
};
const CLASS_WEAPON_ICONS={"Greatsword":"/assets/Game/Data/Icon/HighQuality/GreatSword_001_02_01","Sword and Shield":"/assets/Game/Data/Icon/HighQuality/LongSword_001_02_02","Dual Blades":"/assets/Game/Data/Icon/HighQuality/DualSwords_001_01_01","Bow":"/assets/Game/Data/Icon/HighQuality/LongBow_001_02_03","Crossbow":"/assets/Game/Data/Icon/HighQuality/Crossbows_002_01_01","Rapier":"/assets/Game/Data/Icon/HighQuality/Rapier_002_02_03","Chain Blades":"/assets/Game/Data/Icon/HighQuality/ChainSwords_001_02_01","Twin Axes":"/assets/Game/Data/Icon/HighQuality/Hatchets_001_01_01","Battle Axe":"/assets/Game/Data/Icon/HighQuality/BattleAxe_001_02_03","Lance":"/assets/Game/Data/Icon/HighQuality/Lance_001_02_02","Halberd":"/assets/Game/Data/Icon/HighQuality/Halberd_001_02_01","Mace":"/assets/Game/Data/Icon/HighQuality/Mace_001_02_04","Staff":"/assets/Game/Data/Icon/HighQuality/Staff_001_01_01","Manasphere":"/assets/Game/Data/Icon/HighQuality/MagicOrb_009_02_02","Grimoire":"/assets/Game/Data/Icon/HighQuality/Spellbook_001_02_01","Sabre":"/assets/Game/Data/Icon/HighQuality/Sabre_001_02_01","Wrist Blades":"/assets/Game/Data/Icon/HighQuality/WristBlades_002_01_01","Musket":"/assets/Game/Data/Icon/HighQuality/Musket_001_02_03"};
const CLASS_DATA=[
 {name:"Swordsman",weapons:["Greatsword","Sword and Shield","Dual Blades"],role:"Combatente versátil de curta distância",style:"Os espadachins são guerreiros versáteis, incomparáveis tanto no ataque quanto na defesa, capazes de controlar o ritmo da batalha. A espada grande esmaga os inimigos com força bruta; as lâminas duplas golpeiam com precisão mortal; e a espada com escudo oferece uma defesa praticamente impenetrável. Sua força é alimentada pela Fúria, que cresce durante o calor da batalha, mas diminui quando o combate esfria. Quanto mais a luta se prolonga, mais fortes se tornam os espadachins, mantendo a lâmina firme e a determinação inabalável. Seja para derrotar o Vazio ou proteger seus aliados, eles empunham o poder de ultrapassar os próprios limites do tempo.",overview:"Uma lâmina radiante que anuncia a ruína do Vazio.",weaponsInfo:[["Greatsword","Arma de duas mãos, golpes mais lentos e de alto impacto. O guia destaca ataques carregados e janelas de Super Armor/Hyper Armor."],["Sword and Shield","Estilo defensivo voltado a bloqueios, contra-ataques e geração de ameaça, adequado ao papel de linha de frente."],["Dual Blades","Duas lâminas para dano sustentado, mobilidade e aparos. O guia também menciona ferramentas para aumentar a ameaça."]],strengths:["Versatilidade entre dano e defesa","Opções para combate prolongado ou explosões de dano","Ferramentas defensivas e de contra-ataque"],limits:["O ritmo muda bastante conforme a arma escolhida","A Greatsword exige atenção ao tempo de execução dos golpes"],pairs:"O guia descreve as armas individualmente, mas não estabelece uma combinação universalmente superior. Escolha a dupla conforme o papel desejado e valide o desempenho no jogo.",matrix:"O sistema Matrix permite direcionar a evolução das habilidades e personalizar o padrão de combate. Priorize caminhos coerentes com a arma e a função que pretende exercer.",cbt:"Classe incluída nas informações do Closed Beta Test (CBT) usadas pelo guia Icy Veins.",icon:"⚔"},
 {name:"Ranger",weapons:["Bow","Crossbow","Rapier"],role:"Dano à distância e pressão de alvo",style:"Os rangers são arqueiros habilidosos, especializados em neutralizar inimigos à distância e preparados para enfrentar ameaças de perto. O arco e a besta permitem disparos precisos e letais, enquanto o florete oferece uma chance de sobrevivência em situações extremas. Ao recorrer ao Vigor, uma força vital que representa sua conexão com a natureza, eles desencadeiam ataques devastadores capazes de reduzir os inimigos a nada. Flechas que brilham como estrelas moldam o destino de todos aqueles que estiverem ao seu alcance.",overview:"Uma flecha solitária corta as profundezas enquanto uma grande horda lamenta.",weaponsInfo:[["Bow","Ataques de maior impacto e disparos carregados. O guia cita Charged Shot e Radiant Arrow, além de recursos de controle como atordoamento."],["Crossbow","Cadência rápida e pressão constante; o guia destaca disparos de precisão na cabeça e Tornado Shot."],["Rapier","Arma de curta distância com habilidades de fortalecimento e combate corpo a corpo. Exige adaptação por fugir do padrão de longo alcance."]],strengths:["Alternativas para dano explosivo ou dano ao longo do tempo","Pressão à distância e opções de controle","Flexibilidade para ajustar o alcance de combate"],limits:["A Rapier muda o posicionamento esperado de um personagem de alcance","O resultado depende de manter distância e aproveitar as janelas de disparo"],pairs:"O Icy Veins descreve as três armas, mas não confirma uma dupla ideal para todos os conteúdos. A escolha deve acompanhar sua preferência entre cadência, impacto e combate próximo.",matrix:"Use a Matrix para ajustar habilidades e comportamento de combate à arma escolhida. Não há uma árvore ou build definitiva validada aqui.",cbt:"Classe incluída nas informações do Closed Beta Test (CBT) usadas pelo guia Icy Veins.",icon:"➶"},
 {name:"Berserker",weapons:["Chain Blades","Twin Axes","Battle Axe"],role:"Dano corpo a corpo agressivo",style:"Os berserkers são guerreiros incansáveis, que expressam fúria selvagem e ferocidade incomparável no campo de batalha. As lâminas encadeadas arrastam os inimigos para o combate; os machados duplos desferem golpes devastadores; e o machado de batalha oferece uma defesa sólida aos aliados. Alimentados pela Fúria, os berserkers desencadeiam ataques incessantes, e cada novo derramamento de sangue eleva ainda mais seu poder. Sua destruição só termina quando todos os inimigos estiverem em silêncio.",overview:"Basta uma respiração profunda para então agarrar as correntes. O sangue derramado é apenas combustível para a chama.",weaponsInfo:[["Chain Blades","Arma móvel, com bom alcance e uma relação risco/recompensa. Algumas habilidades consomem vida, conforme o guia."],["Twin Axes","Combos rápidos e foco em alvo único. O guia destaca velocidade e regeneração de vida, características úteis para jogo solo."],["Battle Axe","Golpes pesados e mais lentos, com potencial de explosão de dano, controle de grupo e ataques em área."]],strengths:["Forte orientação ofensiva","Opções de dano em alvo único e em área","Armas com ritmos distintos para diferentes preferências"],limits:["Algumas habilidades de Chain Blades envolvem custo de vida","Armas pesadas exigem escolher bem o momento de atacar"],pairs:"Não existe uma combinação universal confirmada no material consultado. Compare mobilidade, velocidade e dano em área de acordo com o conteúdo.",matrix:"Ajuste a Matrix para reforçar o ritmo da arma: mobilidade e risco/recompensa, sequências rápidas ou impacto e controle de área.",cbt:"Classe incluída nas informações do Closed Beta Test (CBT) usadas pelo guia Icy Veins.",icon:"⚒"},
 {name:"Paladin",weapons:["Lance","Halberd","Mace"],role:"Defesa, suporte e combate híbrido",style:"Os paladinos são guerreiros firmes e determinados, dedicados a proteger aliados e derrotar inimigos com poder divino. A maça cura os companheiros e pune os perversos; a lança repele até os golpes mais poderosos; e a alabarda atravessa as fileiras inimigas com força implacável. Eles recorrem à Mana, uma energia que se restaura com o tempo, e sua fé inabalável fortalece sua capacidade de conjurar diversas auras sagradas. Ao cumprir a vontade de Chronos, os paladinos levam ordem à escuridão e comandam o campo de batalha com bravura.",overview:"Contemple: o cavaleiro se ergue como um farol de luz, atendendo ao chamado divino.",weaponsInfo:[["Lance","Estilo mais cadenciado, com bloqueio usando escudo e habilidades que podem ser fortalecidas por mana."],["Halberd","Abordagem mais ofensiva, com estocadas, avanços e ataques em que a arma pode ser arremessada, segundo o guia."],["Mace","Foco de suporte: auras sagradas para conceder benefícios e proteção, em conjunto com escudo."]],strengths:["Perfil híbrido de tanque e suporte","Ferramentas defensivas e de proteção","Possibilidade de alternar entre suporte e dano"],limits:["O estilo de suporte pode exigir priorizar o grupo em vez do dano pessoal","As armas apresentam funções diferentes; a escolha define sua contribuição"],pairs:"O material consultado não estabelece combinações de armas ideais. Trate a seleção como uma decisão de função: proteção, suporte ou maior foco ofensivo.",matrix:"A Matrix deve ser avaliada conforme o papel desejado no grupo. Não há uma configuração final confirmada neste compêndio.",cbt:"O Paladin não estava disponível para jogar no CBT coberto pelo guia. As descrições são baseadas em prévias e informações reunidas pelo Icy Veins, não em validação completa da classe.",icon:"🛡"},
 {name:"Sorcerer",weapons:["Staff","Manasphere","Grimoire"],role:"Dano mágico à distância e suporte híbrido",style:"Os feiticeiros são mestres da magia, capazes de canalizar poder arcano para devastar inimigos e apoiar aliados. O cajado concentra energia elemental para conjurar feitiços destrutivos; a esfera de mana manipula o tempo para revelar as fraquezas dos inimigos; e o grimório emite uma luz radiante para curar os aliados. Sua magia é alimentada pela Mana, reabastecida pelo fluxo incessante do tempo. À medida que seu domínio mágico aumenta, os feiticeiros se tornam forças dominantes no campo de batalha, moldando a vitória com a sabedoria de outros reinos.",overview:"Os sábios sabem discernir o momento de atacar. A hora chegou.",weaponsInfo:[["Staff","Catalisador de duas mãos voltado à destruição, aumento de dano ao longo do tempo e ataques em área."],["Manasphere","Catalisador de uma mão associado a maior chance crítica e redução de custo de mana, favorecendo dano explosivo."],["Grimoire","Arma de duas mãos com foco em cura e atributos ligados à mana, permitindo uma abordagem híbrida de suporte."]],strengths:["Grande variedade de estilos mágicos","Opções para dano em área e explosão de dano","Possibilidade de combinar dano e cura"],limits:["Gerenciamento de mana pode ser relevante para o estilo escolhido","A classe não foi jogável no CBT descrito pelo guia; detalhes podem mudar"],pairs:"O guia Icy Veins cita três combinações como possibilidades: Staff + Manasphere para DPS; Staff + Grimoire para dano com cura; Manasphere + Grimoire para dano crítico com cura. São orientações preliminares, não uma tier list definitiva.",matrix:"A Matrix pode personalizar habilidades e padrões de combate. Aguarde validação no jogo antes de tratar qualquer rota como build final.",cbt:"O Sorcerer não estava disponível para jogar no CBT coberto pelo guia. As descrições são baseadas em prévias e informações reunidas pelo Icy Veins, não em validação completa da classe.",icon:"✧"},
 {name:"Assassin",weapons:["Sabre","Wrist Blades","Musket"],role:"Mobilidade, furtividade e ataques precisos",style:"Os assassinos são mestres da furtividade e da precisão. Eles atacam das sombras para eliminar seus alvos com eficiência implacável. O sabre e as lâminas de pulso permitem golpes precisos mesmo em meio ao caos da batalha, enquanto o mosquete causa dano à distância e surpreende inimigos desprevenidos. Eles recorrem ao Vigor e à Sede de Sangue para desferir golpes devastadores em rápida sucessão. Ceifadores da morte e executores do destino, os assassinos empunham o poder das trevas, e seus disparos de mosquete frequentemente anunciam a vitória.",overview:"Nem aqui, nem ali: tão silencioso quanto a própria morte que provoca.",weaponsInfo:[["Sabre","Arma de combate próximo associada a golpes carregados e explosões de dano, com ritmo mais lento."],["Wrist Blades","Lâminas para combos rápidos, acúmulo de veneno e mobilidade."],["Musket","Opção de ataque à distância dentro do conjunto de armas associado ao Assassin. O guia consultado não detalha uma rotação ou build definitiva."]],strengths:["Furtividade e mobilidade como identidade da classe","Opções de ataques rápidos e precisos","Alternativa de combate à distância com Musket"],limits:["O Assassin não foi jogável no CBT descrito pelo guia","Parte do funcionamento das armas ainda depende de validação em versões jogáveis"],pairs:"O Icy Veins não confirma uma combinação ideal de armas para o Assassin. As descrições disponíveis devem ser tratadas como preliminares.",matrix:"A Matrix permite personalizar habilidades e padrões de combate, mas não há uma rota definitiva de Assassin validada no material consultado.",cbt:"O Assassin não estava disponível para jogar no CBT coberto pelo guia. As descrições são baseadas em prévias e informações reunidas pelo Icy Veins, não em validação completa da classe.",icon:"☾"}
];
const SUBCATEGORY_LABELS={"greatsword":"Greatsword","longsword":"Sword and Shield","dualswords":"Dual Blades","longbow":"Bow","crossbows":"Crossbow","rapier":"Rapier","staff":"Staff","magicorb":"Manasphere","spellbook":"Grimoire","lance":"Lance","halberd":"Halberd","mace":"Mace","chainswords":"Chain Blades","hatchets":"Twin Axes","battleaxe":"Battle Axe","sabre":"Sabre","wristblades":"Wrist Blades","musket":"Musket"};
const RARITIES=["Comum","Incomum","Raro","Épico","Lendário"];
const RARITY_COLORS=["var(--common)","var(--uncommon)","var(--rare)","var(--epic)","var(--legendary)"];
const ICONS={"Greatsword":"⚔","Sword and Shield":"🛡","Dual Blades":"⚔","Bow":"➶","Crossbow":"⌁","Rapier":"†","Chain Blades":"⛓","Twin Axes":"⚒","Battle Axe":"⚒","Lance":"♜","Halberd":"⚒","Mace":"✥","Staff":"⌁","Manasphere":"◉","Arcane Orb":"◉","Grimoire":"▤","Sabre":"†","Wrist Blades":"⌁","Musket":"⌖"};
let weapons=[],selected=null;
let catalogViewModes={weapons:"list",armor:"list",accessories:"list"};
const $=id=>document.getElementById(id);
function catalogView(kind){return catalogViewModes[kind]||"list"}
function applyCatalogView(kind,listId){
 const list=$(listId);if(list)list.classList.toggle("catalog-grid-view",catalogView(kind)==="grid");
 document.querySelectorAll('[data-catalog-target="'+kind+'"]').forEach(button=>{
  const active=button.dataset.catalogView===catalogView(kind);
  button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));
 });
}
function catalogCardMarkup(item,options){
 const image=options.image||"",icon=options.icon||"✧",meta=options.meta||"",name=options.name||"Item",selected=!!options.selected;
 return '<button type="button" class="catalog-card '+(selected?"selected":"")+'" '+options.dataAttr+' style="--rarity:'+rarityStyle(item)+'"><span class="catalog-card-image"><span class="catalog-card-fallback">'+icon+'</span>'+image+'</span><span class="catalog-card-copy"><strong>'+escapeHtml(name)+'</strong><small>'+escapeHtml(meta)+'</small><em>'+escapeHtml(rarity(item))+'</em></span></button>';
}
function weaponType(item){const s=String(item.subCategory||"").trim().toLowerCase();if(s)return SUBCATEGORY_LABELS[s]||s;const n=String(item.name||"");return Object.keys(ICONS).find(k=>n.toLowerCase().includes(k.toLowerCase()))||"Tipo não identificado"}
function weaponClass(item){return CLASS_MAP[weaponType(item)]||""}
function rarity(item){const g=Number(item.grade);return Number.isInteger(g)&&g>=0&&g<=4?RARITIES[g]:"Não identificada"}
function rarityStyle(item){const g=Number(item.grade);return Number.isInteger(g)&&g>=0&&g<=4?RARITY_COLORS[g]:"var(--common)"}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function iconFor(type){return ICONS[type]||"✧"}
function weaponImageLoaded(img){img.classList.add("loaded");if(img.parentElement)img.parentElement.classList.add("has-image")}
function weaponImageFallback(img){img.remove()}
function weaponImageMarkup(w,extraClass=""){const path=String(w.icon||"").trim();if(!path)return "";let assetPath=path;if(/^https?:\/\//i.test(assetPath)){try{const parsed=new URL(assetPath);assetPath=parsed.pathname}catch(e){return ""}}assetPath=assetPath.replace(/^\/(?:chrono-odyssey\/)?/i,"");assetPath=assetPath.replace(/\.(?:png|jpe?g|webp)$/i,"");const src="https://cdn.questlog.gg/chrono-odyssey/"+assetPath+".webp";return '<img class="'+extraClass+'" src="'+escapeHtml(src)+'" alt="Imagem de '+escapeHtml(w.name||"item")+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="weaponImageLoaded(this)" onerror="weaponImageFallback(this)">'}

function accessoryImageFallback(img){
 try{
  const candidates=JSON.parse(img.dataset.imageCandidates||"[]"),next=Number(img.dataset.imageIndex||0)+1;
  if(next<candidates.length){img.dataset.imageIndex=String(next);img.src=candidates[next];return}
 }catch(e){}
 weaponImageFallback(img)
}
function accessoryImageMarkup(item,extraClass=""){
 const path=String(item.icon||"").trim();if(!path)return "";
 let assetPath=path;
 if(/^https?:\/\//i.test(assetPath)){try{assetPath=new URL(assetPath).pathname}catch(e){return ""}}
 assetPath=assetPath.replace(/^\/(?:chrono-odyssey\/)?/i,"").replace(/\.(?:png|jpe?g|webp)$/i,"");
 const parts=assetPath.split("/"),file=parts.pop()||"",dot=file.lastIndexOf(".");
 const normalized=dot>0&&file.slice(0,dot)===file.slice(dot+1)?[...parts,file.slice(0,dot)].join("/"):assetPath;
 const formats=[".webp",".png",".jpg",".jpeg"],bases=[normalized,...(normalized!==assetPath?[assetPath]:[])],candidates=[];
 bases.forEach(base=>formats.forEach(ext=>candidates.push("https://cdn.questlog.gg/chrono-odyssey/"+base+ext)));
 return '<img class="'+extraClass+'" src="'+escapeHtml(candidates[0])+'" data-image-candidates="'+escapeHtml(JSON.stringify(candidates))+'" data-image-index="0" alt="Imagem de '+escapeHtml(item.name||"acessório")+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="weaponImageLoaded(this)" onerror="accessoryImageFallback(this)">';
}

function rarityColorForLabel(label){const i=RARITIES.indexOf(label);return i<0?"var(--text)":RARITY_COLORS[i]}
function fillRarityOptions(id){const el=$(id);if(!el)return;const selected=el.value;el.innerHTML='<option value="">Todas as raridades</option>'+RARITIES.map(label=>'<option value="'+label+'" style="color:'+rarityColorForLabel(label)+'">'+label+'</option>').join("");el.value=selected}
function updateWeaponTypeOptions(){const className=$("class-filter").value,current=$("type-filter").value;const available=[...new Set(weapons.filter(w=>!className||weaponClass(w)===className).map(weaponType).filter(x=>x&&x!=="Tipo não identificado"))].sort((a,b)=>a.localeCompare(b,"pt-BR"));$("type-filter").innerHTML='<option value="">Todos os tipos</option>'+available.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");$("type-filter").value=available.includes(current)?current:""}
function fillFilters(){const classes=[...new Set(weapons.map(weaponClass).filter(Boolean))].sort();$("class-filter").innerHTML='<option value="">Todas as classes</option>'+classes.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");updateWeaponTypeOptions();fillRarityOptions("rarity-filter")}
function compareItemPriority(a,b){const ga=Number(a.grade),gb=Number(b.grade),va=Number.isFinite(ga)?ga:99,vb=Number.isFinite(gb)?gb:99;return va-vb||String(a.name||"").localeCompare(String(b.name||""),"pt-BR")}
function filtered(){const q=$("search").value.trim().toLowerCase(),c=$("class-filter").value,t=$("type-filter").value,r=$("rarity-filter").value,s=$("weapon-stat-filter")?.value||"";return weapons.filter(w=>(!q||String(w.name||"").toLowerCase().includes(q)||String(w.id||"").includes(q))&&(!c||weaponClass(w)===c)&&(!t||weaponType(w)===t)&&(!r||rarity(w)===r)&&(!s||itemHasStat(w,"weapon",s))).sort(compareItemPriority)}
function mountWeaponDetail(){
 const layout=$("catalog-layout"),list=$("weapon-list"),detail=$("weapon-detail");if(!layout||!list||!detail)return;
 const mobile=window.matchMedia("(max-width:760px)").matches;
 if(mobile&&selected){const id=String(selected.id||selected.compoundId),entry=Array.from(list.querySelectorAll(".catalog-item-entry")).find(el=>el.querySelector("[data-id]")?.dataset.id===id);if(entry)entry.appendChild(detail);else layout.appendChild(detail);detail.classList.add("weapon-detail-inline");detail.hidden=false;detail.style.display="block";}
 else{detail.classList.remove("weapon-detail-inline");detail.hidden=false;detail.style.display="";layout.appendChild(detail);}
 if(!selected){detail.innerHTML='<div class="detail-ornament">✧</div><h3>Selecione um item</h3><p>Escolha uma arma no catálogo para consultar sua ficha.</p>';detail.classList.add("empty-detail");return;}
 detail.classList.remove("empty-detail");detail.innerHTML=detailMarkup(selected);const panel=detail.querySelector(".detail-panel");if(panel)loadItemDetails(selected,panel);
}
function renderList(){
 const list=$("weapon-list"),layout=$("catalog-layout"),detail=$("weapon-detail");if(list&&layout&&detail&&list.contains(detail))layout.appendChild(detail);
 const rows=filtered();$("catalog-count").textContent=weapons.length?rows.length+" / "+weapons.length+" REGISTROS":"CATÁLOGO AINDA NÃO SINCRONIZADO";
 if(!rows.length){$("weapon-list").innerHTML='<div class="empty-state">'+(weapons.length?"Nenhuma arma corresponde aos filtros selecionados.":"O catálogo ainda não foi carregado.")+'</div>';mountWeaponDetail();return;}
 $("weapon-list").innerHTML=rows.map(w=>{const type=weaponType(w),isSelected=selected&&String(selected.id||selected.compoundId)===String(w.id||w.compoundId);const itemMarkup=catalogView("weapons")==="grid"?catalogCardMarkup(w,{name:w.name||"Item sem nome",meta:(weaponClass(w)||"Classe não mapeada")+" · "+type,icon:iconFor(type),image:weaponImageMarkup(w),selected:isSelected,dataAttr:'data-id="'+escapeHtml(w.id)+'"'}):'<button class="weapon-row '+(isSelected?'selected':'')+'" data-id="'+escapeHtml(w.id)+'" style="--rarity:'+rarityStyle(w)+'"><span class="weapon-symbol"><span>'+iconFor(type)+'</span>'+weaponImageMarkup(w)+'</span><span><span class="weapon-name">'+escapeHtml(w.name||"Item sem nome")+'</span><span class="weapon-meta">'+escapeHtml(weaponClass(w)||"Classe não mapeada")+' · '+escapeHtml(type)+'</span></span><span class="rarity-label">'+escapeHtml(rarity(w))+'</span></button>';return '<div class="catalog-item-entry">'+itemMarkup+'</div>';}).join("");
 applyCatalogView("weapons","weapon-list");document.querySelectorAll("#weapon-list [data-id]").forEach(b=>b.addEventListener("click",()=>selectWeapon(b.dataset.id)));mountWeaponDetail();
}
window.addEventListener("resize",()=>{if($("weapons-view")?.classList.contains("active"))mountWeaponDetail()},{passive:true});
let itemDetailsDataPromise;
const STAT_LABELS={increasedamage:"Aumento de dano",addmaximummana:"Mana máxima",damageonstagger:"Dano contra alvo cambaleante",attack:"Ataque",basicattack:"Ataque",basicatk:"Ataque",criticalchance:"Chance crítica",criticaldamage:"Dano crítico",defense:"Defesa",physicaldefense:"Defesa física",defensephysical:"Defesa física",physicaldefence:"Defesa física",defencephysical:"Defesa física",physicalarmor:"Defesa física",physicalarmour:"Defesa física",magicdefense:"Defesa mágica",magicaldefense:"Defesa mágica",defensemagic:"Defesa mágica",defensemagical:"Defesa mágica",magicdefence:"Defesa mágica",magicaldefence:"Defesa mágica",defencemagic:"Defesa mágica",defencemagical:"Defesa mágica",magicarmor:"Defesa mágica",magicalarmor:"Defesa mágica",healing:"Cura",health:"Vida",maxhealth:"Vida máxima",maxhp:"HP máximo",maxlife:"Vida máxima",bagweightincrease:"Aumento da capacidade de peso",bagweightcapacityboost:"Aumento da capacidade de peso",stamina:"Vigor",liferegenpersecond:"Regeneração de vida por segundo",criticalhitchance:"Chance de acerto crítico",criticalhitdamage:"Dano crítico",criticalhitdamagereduce:"Redução de dano crítico",criticalhitresistance:"Resistência a acerto crítico",movementspeed:"Velocidade de movimento",reducedamage:"Redução de dano",decreasemanacostfactor:"Redução do custo de mana",staggerenforce:"Potência de cambaleio",movementspeedfactor:"Velocidade de movimento"};

// Rótulos amigáveis para os atributos identificados nas fichas locais.
Object.assign(STAT_LABELS,{
  "attack": "Ataque",
  "addmaximummana": "Mana máxima",
  "bagweightincrease": "Aumento da capacidade de peso",
  "butcheryamount": "Quantidade de abate",
  "collectionamount": "Quantidade de coleta",
  "criticalhitchance": "Chance de acerto crítico",
  "criticalhitdamage": "Dano crítico",
  "criticalhitdamagereduce": "Redução de dano crítico",
  "criticalhitresistance": "Resistência a acerto crítico",
  "damageonstagger": "Dano contra alvo cambaleante",
  "decreasemanacostfactor": "Redução do custo de mana",
  "decreasestaminacostfactor": "Redução do custo de vigor",
  "dotattackpower": "Poder de ataque de dano contínuo",
  "earncraftrewardexpfactor": "Experiência adicional em fabricação",
  "earnhuntingexpfactor": "Experiência adicional em caça",
  "fallingdamagefactor": "Redução de dano de queda",
  "fishingpower": "Poder de pesca",
  "harvestingamount": "Quantidade de colheita",
  "healing": "Cura",
  "increasedamage": "Aumento de dano",
  "increasedamageboss": "Aumento de dano contra chefes",
  "increasedamagehero": "Aumento de dano contra heróis",
  "increasedamagenormalmob": "Aumento de dano contra monstros comuns",
  "increasepotionliferecovery": "Aumento da recuperação de vida por poções",
  "jumppowerfactor": "Altura do salto",
  "liferegenpersecond": "Regeneração de vida por segundo",
  "loggingamount": "Quantidade de madeira obtida",
  "luckgatheringfishing": "Sorte na pesca",
  "luckgatheringskinning": "Sorte na obtenção de couro",
  "magicaldefense": "Defesa mágica",
  "maximumlife": "Vida máxima",
  "maximumlifeincrease": "Aumento de vida máxima",
  "maximumstamina": "Vigor máximo",
  "miningamount": "Quantidade de minério obtido",
  "movementspeed": "Velocidade de movimento",
  "movementspeedfactor": "Velocidade de movimento",
  "physicaldefense": "Defesa física",
  "reduceskillcooldown": "Redução do tempo de recarga de habilidades",
  "reduceskillcooldownincrease": "Aumento da redução do tempo de recarga",
  "reducedamage": "Redução de dano",
  "reducedamageboss": "Redução de dano recebido de chefes",
  "reducedamagehero": "Redução de dano recebido de heróis",
  "reducedamagenormalmob": "Redução de dano recebido de monstros comuns",
  "repaircostfactor": "Redução do custo de reparo",
  "staggerenforce": "Potência de cambaleio",
  "staminaregenpersecond": "Regeneração de vigor por segundo",
  "strength": "Força",
  "dexterity": "Destreza",
  "intelligence": "Inteligência",
  "vitality": "Vitalidade",
  "wisdom": "Sabedoria"
});
function normalizeStatIdentity(value){
 const key=String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");
 const defenseWord=/(defense|defence|defesa|armor|armour|def)/.test(key);
 if((defenseWord&&/(physical|physic|physdef)/.test(key))||key.includes("defesafisica"))return "physicaldefense";
 if((defenseWord&&/(magic|magical|mag|magdef)/.test(key))||key.includes("defesamagica"))return "magicdefense";
 if(key==="attack"||key==="ataque"||key==="ataquebasico"||key==="basicattack"||key==="basicatk"||key==="attackpower"||key==="attackvalue")return "attack";
 return key;
}
function statFamily(value){return normalizeStatIdentity(value)}
function dedupeStatEntries(entries){
 const result=[],seen=new Set();
 for(const entry of entries||[]){
  const identity=statFamily(entry.identity||entry.key||entry.label);
  if(seen.has(identity))continue;
  seen.add(identity);
  result.push({...entry,identity,label:humanizeStat(identity)});
 }
 return result;
}

function humanizeStat(value){
 const key=normalizeStatIdentity(value);
 if(STAT_LABELS[key])return STAT_LABELS[key];
 const original=String(value||"Atributo");
 return original.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/[_-]/g," ").replace(/^./,x=>x.toUpperCase());
}
const PERCENT_STAT_TYPES=new Set(["increasedamage","damageincrease","damageboost","criticalchance","criticalhitchance","criticaldamage","criticalhitdamage","criticaldamageboost","criticalhitdamagereduce","criticaldamagereduce","criticalhitresistance","movementspeed","reducedamage","decreasemanacostfactor","staggerenforce","movementspeedfactor","damageonstagger","damageovertime","damageovertimeattack","damagereduction","damagereduce"]);
function formatStatValue(statType,value){
 if(value===null||value===undefined||value==="")return value;
 const key=String(statType||"").toLowerCase().replace(/[^a-z0-9]/g,"");
 if(!PERCENT_STAT_TYPES.has(key))return value;
 if(typeof value==="string"&&value.trim().endsWith("%"))return value;
 const numeric=Number(value);
 if(!Number.isFinite(numeric))return value;
 const percentage=Math.abs(numeric)>=100?numeric/100:numeric;
 return percentage.toLocaleString("pt-BR",{minimumFractionDigits:3,maximumFractionDigits:3})+"%";
}
function detailField(label,value){if(value===undefined||value===null||value==="")return "";return '<div class="detail-field"><small>'+escapeHtml(label)+'</small><strong>'+escapeHtml(Array.isArray(value)?value.join(", "):String(value))+'</strong></div>'}
function resolveItemStatValue(raw,item){
 if(raw===null||raw===undefined)return null;
 let value=raw;
 if(value&&typeof value==="object"){
  const levels=value.gearScore??value.levels??value.values;
  if(levels&&typeof levels==="object"){
   const score=typeof itemCurrentGearScore==="function"?itemCurrentGearScore(item):(typeof defaultGearScore==="function"?defaultGearScore(item,levels):null);
   value=levels[String(score)]??Object.values(levels)[0];
  }
  if(value&&typeof value==="object")value=value.statValue??value.statValue1??value.value??value.amount??value.maxValue??value.minValue??null;
 }
 return value;
}
const itemStatEntriesCache=new WeakMap();
const equipmentPrimaryStatsCache=new WeakMap();
const buildRecordStatsCache=new WeakMap();
function getItemStatEntries(item){
 if(item&&typeof item==="object"&&itemStatEntriesCache.has(item))return itemStatEntriesCache.get(item);
 const entries=[],seen=new Set();
 const add=(key,raw)=>{
  const statType=raw&&typeof raw==="object"?(raw.statType??raw.type??raw.key??key):key;
  if(!statType)return;
  const identity=normalizeStatIdentity(statType),label=humanizeStat(statType),value=resolveItemStatValue(raw,item);
  if(value===null||value===undefined||value==="")return;
  if(seen.has(identity))return;
  seen.add(identity);
  const chance=raw&&typeof raw==="object"&&raw.chancePercentage!=null?Number(raw.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+"% de chance":"";
  entries.push({key:statType,identity,label,value:formatStatValue(statType,value),chance});
 };
 const raw=item?.itemStats?.stats;
 if(Array.isArray(raw))raw.forEach(s=>add(s?.statType??s?.type??s?.key??"Atributo",s));
 else if(raw&&typeof raw==="object")Object.entries(raw).forEach(([key,value])=>add(key,value));
 const ignored=new Set(["gearscore","chancepercentage","statvalue","statvalue1","value","amount","min","max","minvalue","maxvalue","requiredlevel","tier","weight","maxdurability","candoreinforce"]);
 const walk=(node,keyHint="",depth=0)=>{
  if(!node||depth>7)return;
  if(Array.isArray(node)){node.forEach(value=>walk(value,keyHint,depth+1));return}
  if(typeof node!=="object"){if(keyHint)add(keyHint,node);return}
  const explicit=node.statType??node.type??node.key;
  const hasValue=["gearScore","levels","values","statValue","statValue1","value","amount"].some(k=>Object.prototype.hasOwnProperty.call(node,k));
  if(explicit&&hasValue){add(explicit,node);return}
  if(keyHint&&hasValue){add(keyHint,node);return}
  for(const [key,value] of Object.entries(node)){if(ignored.has(key.toLowerCase()))continue;walk(value,key,depth+1)}
 };
 walk(item?.equipmentStats);
 walk(item?.itemStats?.equipmentStats);
 if(typeof buildEquipmentPrimaryStats==="function")buildEquipmentPrimaryStats(item).forEach(stat=>add(stat.label,stat.value));
 itemStatEntriesCache.set(item,entries);
 return entries;
}
function renderItemStats(item){
 const entries=getItemStatEntries(item);
 if(!entries.length)return '<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
 return '<div class="stat-list">'+entries.map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance)+'</small></div>').join("")+'</div>';
}
function findWeaponAttackLevels(item){
 const visited=new Set(),pending=[item];
 while(pending.length){
  const current=pending.shift();
  if(!current||typeof current!=="object"||visited.has(current))continue;
  visited.add(current);
  const levels=current.equipmentStats?.attack?.gearScore;
  if(levels&&typeof levels==="object"&&Object.keys(levels).length)return levels;
  for(const value of Object.values(current))if(value&&typeof value==="object")pending.push(value);
 }
 return null;
}
function equipmentTier(item){
 const rawTier=item?.itemInfo?.tier??item?.tier??"";
 const tierText=String(typeof rawTier==="object"?(rawTier.name??rawTier.value??rawTier.label??""):rawTier).trim().toUpperCase();
 const romanTiers={I:1,II:2,III:3,IV:4,V:5};
 const numericMatch=tierText.match(/(?:TIER|T)?\s*([1-5])(?:\D|$)/);
 const romanMatch=tierText.match(/\b(I|II|III|IV|V)\b/);
 const tier=Number(numericMatch?.[1]??romanTiers[romanMatch?.[1]]??(Number.isFinite(Number(rawTier))?Number(rawTier):NaN));
 return Number.isInteger(tier)&&tier>=1&&tier<=5?tier:null;
}
function gearScoreRange(item,levels){
 const ranges={1:[1,5],2:[5,15],3:[15,25],4:[25,40],5:[40,50]};
 const tier=equipmentTier(item),range=ranges[tier];
 if(range)return range;
 const entries=Object.entries(levels||{}).filter(([key,value])=>Number.isFinite(Number(key))&&value!==null&&value!==undefined).sort((a,b)=>Number(a[0])-Number(b[0]));
 return entries.length?[Number(entries[0][0]),Number(entries[entries.length-1][0])]:[1,1];
}
function defaultGearScore(item,levels){
 const entries=Object.entries(levels||{}).filter(([key,value])=>Number.isFinite(Number(key))&&value!==null&&value!==undefined).sort((a,b)=>Number(a[0])-Number(b[0]));
 if(!entries.length)return 1;
 const tierDefaults={1:1,2:5,3:15,4:25,5:40};
 const preferred=tierDefaults[equipmentTier(item)];
 const preferredEntry=entries.find(([key])=>Number(key)===preferred);
 if(preferredEntry)return Number(preferredEntry[0]);
 const [min,max]=gearScoreRange(item,levels);
 const available=entries.map(([key])=>Number(key)).filter(score=>score>=min&&score<=max);
 return available[0]??Number(entries[0][0]);
}
function equipmentRollKey(item){return String(item?.id||item?.compoundId||"");}
const equipmentRollState=Object.create(null);
function equipmentRollSelection(item){
 const key=equipmentRollKey(item);
 if(!key)return {};
 return equipmentRollState[key]||(equipmentRollState[key]={suffix:"",perks:[],gearScore:null});
}
function renderGearScoreControl(item,levels,label){
 if(!levels||typeof levels!=="object")return "";
 const entries=Object.entries(levels).filter(([key,value])=>Number.isFinite(Number(key))&&value!==null&&value!==undefined).sort((a,b)=>Number(a[0])-Number(b[0]));
 if(!entries.length)return "";
 const [min,max]=gearScoreRange(item,levels),saved=Number(equipmentRollSelection(item).gearScore);
 const initial=Math.min(max,Math.max(min,Number.isFinite(saved)&&saved>0?saved:defaultGearScore(item,levels)));
 return '<div class="gear-score-control"><div class="gear-score-value"><label>Equipment Score</label><strong class="gear-score-current">'+initial+'</strong></div><input class="gear-score-slider" data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'" type="range" min="'+min+'" max="'+max+'" step="1" value="'+initial+'" aria-label="Selecionar Equipment Score"></div>';
}
function renderWeaponStats(item){
 const levels=findWeaponAttackLevels(item);
 let entries=dedupeStatEntries(getItemStatEntries(item)).filter(entry=>statFamily(entry.identity)!=="attack");
 let rows="";
 if(levels){
  const score=defaultGearScore(item,levels),attackValue=gearScoreValueAt(levels,score)??levels[String(score)]??Object.values(levels)[0];
  rows+='<div class="accessory-inspect-stat"><strong data-gear-score-map="'+escapeHtml(JSON.stringify(levels))+'" data-stat-type="attack">'+escapeHtml(formatStatValue("attack",attackValue))+'</strong><span>Ataque</span></div>';
 }
 rows+=entries.map(entry=>'<div class="accessory-inspect-stat"><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><span>'+escapeHtml(entry.label||humanizeStat(entry.identity||entry.key))+'</span>'+(entry.chance?'<small>'+escapeHtml(entry.chance)+'</small>':"")+'</div>').join("");
 return '<section class="accessory-inspect-stats">'+(levels?renderGearScoreControl(item,levels,"Ataque"):"")+'<div class="accessory-inspect-stat-list">'+(rows||'<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>')+'</div></section>';
}

function optionListMarkup(title,rows,kind){
 if(!rows.length)return "";
 const listClass="detail-option-list";
 const expand=rows.length>5?'<button type="button" class="detail-expand-button" data-expand-options aria-expanded="false">Exibir mais ('+(rows.length-5)+')</button>':"";
 return '<section class="detail-section"><h4>'+escapeHtml(title)+' <span class="detail-option-count">'+rows.length+'</span></h4><div class="'+listClass+' '+kind+'">'+rows.join("")+'</div>'+expand+'</section>';
}
function itemGradeInfo(item){return item?.itemStats?.equipmentGradeInfo||item?.equipmentGradeInfo||{}}
function gearScoreRawValue(entry){if(entry===null||entry===undefined)return null;if(typeof entry!=="object")return entry;return entry.statValue1??entry.value??entry.statValue??entry.amount??entry.maxValue??entry.minValue??null}
function gearScoreValueAt(levels,score){
 const target=Number(score);if(!Number.isFinite(target))return null;
 const entry=Object.entries(levels||{}).find(([key,value])=>Number(key)===target&&value!==null&&value!==undefined);
 return entry?gearScoreRawValue(entry[1]):null;
}
function optionStatEntries(option,score){
 const levels=option?.gearScore&&typeof option.gearScore==="object"?option.gearScore:null;
 const level=levels?(levels[String(score)]??Object.values(levels).find(entry=>entry&&typeof entry==="object")??null):null,entries=[];
 const types=[option?.statType1??level?.statType1,option?.statType2??level?.statType2];
 if(types.some(Boolean)){
  types.forEach((type,index)=>{
   if(!type)return;
   const field=index===0?"statValue1":"statValue2",value=level?.[field]??option?.[field]??null;
   if(value!==null&&value!==undefined&&value!=="")entries.push({key:type,label:humanizeStat(type),value,levels,field});
  });
 }else{
  const type=option?.statType??option?.type??level?.statType??level?.type;
  const value=level?gearScoreRawValue(level):(option?.statValue1??option?.statValue??option?.value??option?.amount);
  if(value!==null&&value!==undefined&&value!=="")entries.push({key:type||"attribute",label:type?humanizeStat(type):"Atributo",value,levels,field:null});
 }
 return entries;
}
function optionStatsMarkup(option,score){
 const entries=optionStatEntries(option,score);
 if(!entries.length)return '<span class="roll-value">Valor não informado</span>';
 return '<span class="roll-stat-values">'+entries.map(entry=>'<span class="roll-stat-value"><small>'+escapeHtml(entry.label)+'</small><strong '+(entry.levels?'data-gear-score-map="'+escapeHtml(JSON.stringify(entry.levels))+'" data-stat-type="'+escapeHtml(entry.key)+'" data-stat-field="'+escapeHtml(entry.field||"")+'"':'')+'>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong></span>').join("")+'</span>';
}
function gearScoreValueMarkup(option,score,statType){return optionStatsMarkup(option,score)}
function itemCurrentGearScore(item){
 const saved=Number(equipmentRollSelection(item).gearScore);
 if(Number.isFinite(saved)&&saved>0)return saved;
 const levels=findWeaponAttackLevels(item)||findArmorDefenseLevels(item)||findAccessoryGearScore(item)?.levels||null;
 if(levels){
  const selected=defaultGearScore(item,levels);
  if(Number.isFinite(selected)&&selected>0)return selected;
 }
 const tier=equipmentTier(item),defaults={1:1,2:5,3:15,4:25,5:40};
 return defaults[tier]??null;
}
function renderSuffixes(item){
 const stats=item?.itemStats||{},grade=itemGradeInfo(item),source=stats.suffixes;
 const allowed=grade.suffix!==false;
 if(!allowed)return "";
 const suffixes=source&&typeof source==="object"?Object.values(source).filter(s=>s&&typeof s==="object"):[];
 if(!suffixes.length)return grade.suffix===true?'<section class="detail-section roll-empty"><h4>Sufixo</h4><p>Este equipamento permite sufixo, mas a ficha sincronizada não trouxe opções disponíveis.</p></section>':"";
 const score=itemCurrentGearScore(item),group="suffix-"+String(item?.id||item?.compoundId||"equipment").replace(/[^a-z0-9_-]/gi,"");
 const chosenSuffix=String(equipmentRollSelection(item).suffix||"");
 const rows=['<label class="suffix-row detail-option-row roll-choice"><input type="radio" name="'+escapeHtml(group)+'" data-suffix-select data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'" value="" '+(!chosenSuffix?'checked':'')+'><span class="roll-choice-copy"><strong>Sem sufixo</strong><small>Não selecionar um sufixo</small></span></label>'];
 suffixes.forEach((suffix,index)=>{
  const value=gearScoreValueMarkup(suffix,score,suffix.statType??suffix.type);
  const chance=Number.isFinite(Number(suffix.chancePercentage))?' · '+Number(suffix.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'% de chance':"";
  rows.push('<label class="suffix-row detail-option-row roll-choice"><input type="radio" name="'+escapeHtml(group)+'" data-suffix-select data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'" value="'+index+'" '+(chosenSuffix===String(index)?'checked':'')+'><span class="roll-choice-copy"><strong>'+escapeHtml(suffix.name||"Sufixo")+'</strong><small>'+value+escapeHtml(chance)+'</small></span></label>');
 });
 return optionListMarkup("Sufixo · escolha 1",rows,"suffix-options");
}
function perkValueRange(perk){
 const levels=perk?.gearScore&&typeof perk.gearScore==="object"?Object.entries(perk.gearScore).sort((a,b)=>Number(a[0])-Number(b[0])):[];
 if(!levels.length)return "";
 const valueOf=x=>x?.value??x?.statValue1??x?.statValue??x?.amount;
 const first=valueOf(levels[0][1]),last=valueOf(levels[levels.length-1][1]);
 const formattedFirst=formatStatValue(perk.statType,first),formattedLast=formatStatValue(perk.statType,last);
  return first==null?"":String(formattedFirst)+(last!=null&&String(last)!==String(first)?" → "+String(formattedLast):"");
}
function perkEntries(source){
 if(!source)return [];
 if(Array.isArray(source))return source.filter(x=>x&&typeof x==="object");
 if(typeof source!=="object")return [];
 if(source.perks&&typeof source.perks==="object")return perkEntries(source.perks);
 if(source.name||source.description)return [source];
 return Object.values(source).filter(x=>x&&typeof x==="object"&&(x.name||x.description));
}
function renderPerks(item){
 const stats=item?.itemStats||{},info=item?.itemInfo||{},grade=itemGradeInfo(item);
 const rawLimit=grade.perkCount??stats.perkCount,limit=Number(rawLimit);
 const candidates=[...perkEntries(stats.commonPerks),...perkEntries(stats.perks)];
 const seen=new Set(),rows=[],score=itemCurrentGearScore(item);
 for(const perk of candidates){
  const key=String(perk.id||perk.name||"").toLowerCase();if(!key||seen.has(key))continue;seen.add(key);
  const value=gearScoreValueMarkup(perk,score,perk.statType);
  const chance=Number.isFinite(Number(perk.chancePercentage))?' · '+Number(perk.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'% de chance':"";
  const meta="";
  const selectedPerks=equipmentRollSelection(item).perks||[];
  rows.push('<label class="perk-row detail-option-row roll-choice"><input type="checkbox" data-perk-select data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'" data-perk-key="'+escapeHtml(key)+'" data-perk-limit="'+(Number.isFinite(limit)?Math.max(0,limit):0)+'" '+(selectedPerks.includes(key)?'checked ':'')+(!(Number.isFinite(limit)&&limit>0)?'disabled':'')+'><span class="roll-choice-copy"><strong>'+escapeHtml(perk.name||"Perk")+'</strong><small>'+escapeHtml(meta)+(meta?' · ':'')+value+escapeHtml(chance)+'</small></span></label>');
 }
 const unique=info.uniquePerk??stats.uniquePerk;
 for(const perk of perkEntries(unique)){const key=String(perk.id||perk.name||perk.description||"").toLowerCase();if(!key||seen.has("unique:"+key))continue;seen.add("unique:"+key);rows.push('<div class="perk-row detail-option-row unique-perk"><strong>'+escapeHtml(perk.name||"Perk exclusivo")+' <small>Exclusivo</small></strong><span>'+escapeHtml(perk.description||"Efeito descrito na ficha do item")+'</span></div>')}
 for(const perk of perkEntries(info.specialPerks??stats.specialPerks)){const key=String(perk.id||perk.name||perk.description||"").toLowerCase();if(!key||seen.has("special:"+key))continue;seen.add("special:"+key);rows.push('<div class="perk-row detail-option-row unique-perk"><strong>'+escapeHtml(perk.name||"Perk especial")+' <small>Especial</small></strong><span>'+escapeHtml(perk.description||"Efeito descrito na ficha do item")+'</span></div>')}
 if(!rows.length)return "";
 const selectable=rows.filter(row=>row.includes('data-perk-select')).length;
 const selectedCount=equipmentRollSelection(item).perks.length;
 const note=Number.isFinite(limit)?'<p class="roll-limit-note" data-perk-counter>Selecione até '+Math.max(0,limit)+' perk(s). <span>'+selectedCount+'/'+Math.max(0,limit)+'</span></p>':'<p class="roll-limit-note">Limite de perks não informado na ficha; seleção desabilitada.</p>';
 return '<section class="detail-section perk-options"><h4>Perks disponíveis <span class="detail-option-count">'+selectable+'</span></h4>'+note+'<div class="detail-option-list perk-options-list">'+rows.join("")+'</div></section>';
}
function compactMeta(label,value){if(value===undefined||value===null||value==="")return "";return '<span class="detail-meta-chip"><small>'+escapeHtml(label)+'</small><strong>'+escapeHtml(Array.isArray(value)?value.join(", "):String(value))+'</strong></span>'}
function renderEquipmentFooter(item,includeDurability=false){
 const info=item?.itemInfo||{},grade=item?.equipmentGradeInfo||item?.itemStats?.equipmentGradeInfo||{};
 const fields=[["Nível requerido",info.requiredLevel],["Peso",info.weight],...(includeDurability?[["Durabilidade máxima",info.maxDurability]]:[]),["Pode reforçar",info.canReinforce===true?"Sim":info.canReinforce===false?"Não":null],["Sockets de gema",grade.gemSocket===true?"Sim":grade.gemSocket===false?"Não":null],["Quantidade de perks",grade.perkCount??item?.itemStats?.perkCount]].filter(([,value])=>value!==undefined&&value!==null&&value!=="");
 return fields.length?'<footer class="accessory-inspect-footer">'+fields.map(([label,value])=>'<span><b>'+escapeHtml(label)+'</b> '+escapeHtml(String(value))+'</span>').join('<i>·</i>')+'</footer>':"";
}
function detailedWeaponMarkup(w,item){
 return renderWeaponStats(item)+renderAccessoryReadOnlyOptions(item)+renderEquipmentFooter(item,false);
}
async function getItemDetails(){if(!itemDetailsDataPromise)itemDetailsDataPromise=(async()=>{const manifestResponse=await fetch("./data/weapon-details-manifest.json?v=20261122f",{cache:"no-store"});if(!manifestResponse.ok)throw new Error("Manifesto local de detalhes das armas não encontrado (HTTP "+manifestResponse.status+").");const manifest=await manifestResponse.json();if(!Array.isArray(manifest.parts)||!manifest.parts.length)throw new Error("O manifesto não contém a lista de partes dos detalhes das armas.");const responses=await Promise.all(manifest.parts.map(async name=>{const response=await fetch("./data/"+encodeURIComponent(name)+"?v=20261122f",{cache:"no-store"});if(!response.ok)throw new Error("Não foi possível carregar "+name+" (HTTP "+response.status+").");return response.json()}));const allItems={};for(const part of responses)Object.assign(allItems,part.items||{});itemDetailsGeneratedAt=manifest.generatedAt?new Date(manifest.generatedAt).toLocaleString("pt-BR"):"não informada";return allItems})();return itemDetailsDataPromise}
function equipmentInspectMarkup(item,category){
 const name=item.name||(category==="weapon"?"Arma":category==="armor"?"Armadura":"Acessório"),id=item.id||item.compoundId||"",nameSize=name.length>54?19:name.length>40?22:name.length>28?26:name.length>18?31:38,image=category==="accessory"?accessoryImageMarkup(item,"accessory-inspect-image"):weaponImageMarkup(item,"accessory-inspect-image");
 return '<article class="detail-panel accessory-inspect-card equipment-inspect-card" style="--rarity:'+rarityStyle(item)+';--item-name-size:'+nameSize+'px"><header class="accessory-inspect-header"><div class="accessory-inspect-heading"><div class="accessory-inspect-meta detail-header-meta"></div><h3>'+escapeHtml(name)+'</h3></div><div class="accessory-inspect-art">'+image+'</div></header><div class="detail-live"><p class="detail-muted"><span class="spinner"></span>Carregando ficha do catálogo local…</p></div></article>';
}
function detailMarkup(w){return equipmentInspectMarkup(w,"weapon")}
async function loadItemDetails(w,panelRoot){
 const id=String(w.id||w.compoundId||"");if(!id||!panelRoot)return;
 const target=panelRoot.querySelector(".detail-live");if(!target)return;
 try{
  const all=await getItemDetails(),item=all[id]||all[id.replace(/^item-/,"")];
  if(!item)throw new Error("Esta arma ainda não consta nos arquivos locais do catálogo.");
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selected&&String(selected.id||selected.compoundId)===id){current.innerHTML=detailedWeaponMarkup(w,item);const scoreControl=current.querySelector(".gear-score-control"),heading=panelRoot.querySelector(".accessory-inspect-heading");if(scoreControl&&heading)heading.appendChild(scoreControl);}
  const meta=current?.closest(".detail-panel")?.querySelector(".detail-header-meta");
  if(meta)meta.innerHTML=[item?.itemInfo?.tier!=null?"Tier "+item.itemInfo.tier:"",rarity(w),weaponClass(w)||"Não mapeada",weaponType(w)].filter(Boolean).map((value,index)=>'<span class="accessory-inspect-meta-value'+(index===1?" rarity-value":"")+'">'+escapeHtml(value)+'</span>').join("");
  const idFooter=current?.querySelector(".detail-id-footer");if(idFooter)idFooter.textContent="ID: "+String(w.id||w.compoundId||"");
 }catch(error){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selected&&String(selected.id||selected.compoundId)===id)current.innerHTML='<p class="detail-muted detail-error">Não foi possível carregar os atributos locais. '+escapeHtml(error.message||"Verifique se a sincronização foi concluída.")+' Você ainda pode consultar a ficha original pelo link abaixo.</p>';
 }
}
function mountInlineDetail(panelId,hostId){const panel=$(panelId),host=$(hostId);if(panel&&host){host.appendChild(panel);host.hidden=false;panel.classList.remove("empty-detail");}}
function selectWeapon(id){const currentId=String(selected?.id||selected?.compoundId||"");if(selected&&currentId===String(id)){selected=null}else{selected=weapons.find(w=>String(w.id)===String(id)||String(w.compoundId)===String(id))||null}renderList();}
function classWeaponIconMarkup(type,className){
 const classSlug=String(className||"").toLowerCase().replace(/[^a-z]/g,"");
 const weaponSlug=String(type||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 const image="./assets/images/classes/weapons/details/"+classSlug+"-"+weaponSlug+".png?v=20261125weapondetails1";
 return '<div class="class-weapon-icon-wrap class-individual-weapon-icon"><img src="'+image+'" alt="Ícone de '+escapeHtml(type)+'" loading="lazy" decoding="async" onerror="this.style.display=\'none\'"></div>';
}
function classVideosMarkup(c){const videos={"Swordsman":[["Em ação","Hxz_qw-wdOw"],["Equipment Showcase","6VfEZLeFBjA"]],"Ranger":[["Em ação","2rFblkC2gkk"],["Equipment Showcase","O2Yp_9yRR4c"]],"Berserker":[["Em ação","CHnwcAWtLYY"],["Equipment Showcase","Y-UWtIb_ljY"]]}[c.name]||[];if(!videos.length)return "";return '<section class="class-section class-video-section"><div class="class-video-heading"><h4>Vídeos da classe</h4><button class="class-video-toggle" type="button" aria-expanded="false">＋ Exibir vídeos</button></div><div class="class-video-content" hidden><div class="class-video-grid">'+videos.map(([label,id])=>'<article class="class-video-card"><h5>'+label+'</h5><div class="class-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/'+id+'" title="'+escapeHtml(c.name+' — '+label)+'" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></article>').join("")+'</div></div></section>'}
function classDetailMarkup(c){const image="./assets/images/classes/characters/"+c.name.toLowerCase()+".jpg";return '<div class="class-detail-hero"><div class="class-cover-frame"><img class="class-cover" src="'+image+'" alt="Personagem da classe '+escapeHtml(c.name)+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><div class="class-cover-fallback" style="display:none">'+c.icon+'</div></div><div class="class-hero-copy"><span class="class-index">CAMINHO DE COMBATE</span><h3>'+escapeHtml(c.name)+'</h3><p>'+escapeHtml(c.role)+'</p><div class="class-weapon-tags">'+c.weapons.map(w=>'<span>'+escapeHtml(w)+'</span>').join("")+'</div></div></div><div class="class-detail-content"><section class="class-section"><h4>Identidade e estilo de combate</h4><p>'+escapeHtml(c.overview)+'</p><p>'+escapeHtml(c.style)+'</p></section>'+classVideosMarkup(c)+'<section class="class-section"><h4>Armas e especialidades</h4><div class="class-weapon-details">'+c.weaponsInfo.map((w,i)=>'<article class="class-weapon-entry">'+classWeaponIconMarkup(w[0],c.name,i)+'<div class="class-weapon-copy"><h5>'+escapeHtml(w[0])+'</h5><p>'+escapeHtml(w[1])+'</p></div></article>').join("")+'</div></section><div class="class-two-col"><section class="class-section"><h4>Pontos fortes</h4><ul>'+c.strengths.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></section><section class="class-section"><h4>Pontos de atenção</h4><ul>'+c.limits.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></section></div><section class="class-section"><h4>Combinações de armas</h4><p>'+escapeHtml(c.pairs)+'</p></section><section class="class-section"><h4>Progressão e Matrix</h4><p>'+escapeHtml(c.matrix)+'</p></section><div class="class-source-note"><strong>Nota sobre a confiabilidade</strong><p>'+escapeHtml(c.cbt)+' As informações são um guia de referência baseado no conteúdo do Icy Veins e podem mudar com atualizações do jogo.</p><a href="https://www.icy-veins.com/chrono-odyssey/classes" target="_blank" rel="noreferrer">CONSULTAR GUIA DE CLASSES NO ICY VEINS ↗</a></div></div>'}
function classButtonWeaponIconMarkup(type,className){
 const classSlug=String(className||"").toLowerCase().replace(/[^a-z]/g,"");
 const weaponSlug=String(type||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 const localImage="./assets/images/classes/weapons/cards/"+classSlug+"-"+weaponSlug+".png";
 const fallbackPath=String(CLASS_WEAPON_ICONS[type]||"").replace("/","");
 const fallbackImage=fallbackPath?"https://cdn.questlog.gg/chrono-odyssey/"+fallbackPath+".webp":"";
 return '<img class="class-weapon-icon-img" src="'+localImage+'" alt="Ícone de '+escapeHtml(type)+'" loading="lazy" decoding="async" onerror="if(this.dataset.fallback){this.onerror=null;this.src=this.dataset.fallback}else{this.remove()}" data-fallback="'+escapeHtml(fallbackImage)+'">';
}
function renderClasses(){
 const grid=$("class-grid");
 grid.innerHTML=CLASS_DATA.map((c,i)=>{
  const slug=c.name.toLowerCase();
  const image="./assets/images/classes/selection/"+slug+".jpg";
  const fallbackImage="./assets/images/classes/characters/"+slug+".jpg";
  return '<button class="class-filter-btn" type="button" data-class="'+escapeHtml(c.name)+'" aria-label="Selecionar classe '+escapeHtml(c.name)+'">'+
   '<span class="class-card-art"><img src="'+image+'" data-fallback="'+fallbackImage+'" alt="" loading="lazy" decoding="async" onerror="if(this.dataset.fallback){this.onerror=null;this.src=this.dataset.fallback}else{this.parentElement.classList.add(\'class-card-art-fallback\');this.remove()}"><span class="class-card-number">0'+(i+1)+'</span><span class="class-card-select">VER CLASSE <b>↗</b></span></span>'+
   '<span class="class-card-body"><span class="class-card-name">'+escapeHtml(c.name)+'</span><span class="class-card-role">'+escapeHtml(c.role)+'</span><span class="class-card-weapons-label">ARMAS</span><span class="class-card-weapons">'+c.weapons.map(w=>'<span class="class-card-weapon-icon" title="'+escapeHtml(w)+'" aria-label="'+escapeHtml(w)+'">'+classButtonWeaponIconMarkup(w,c.name)+'</span>').join("")+'</span></span>'+
  '</button>';
 }).join(""); grid.querySelectorAll(".class-filter-btn").forEach(b=>b.addEventListener("click",()=>{
  const c=CLASS_DATA.find(x=>x.name===b.dataset.class);
  grid.classList.add("has-selection");
  grid.querySelectorAll(".class-filter-btn").forEach(btn=>{const selected=btn===b;btn.classList.toggle("is-selected",selected);btn.classList.toggle("is-muted",!selected);btn.setAttribute("aria-pressed",String(selected));});
  $("class-detail").hidden=false;
  $("class-detail").innerHTML='<button class="class-back" id="class-back">← VOLTAR ÀS CLASSES</button>'+classDetailMarkup(c);
  const videoToggle=$("class-detail").querySelector(".class-video-toggle");
  if(videoToggle)videoToggle.addEventListener("click",()=>{
   const content=$("class-detail").querySelector(".class-video-content");
   const expanded=videoToggle.getAttribute("aria-expanded")==="true";
   content.hidden=expanded;
   videoToggle.setAttribute("aria-expanded",String(!expanded));
   videoToggle.textContent=expanded?"＋ Exibir vídeos":"− Recolher vídeos";
  });
  $("class-back").addEventListener("click",()=>{
   $("class-detail").hidden=true;
   grid.classList.remove("has-selection");
   grid.querySelectorAll(".class-filter-btn").forEach(btn=>{btn.classList.remove("is-selected","is-muted");btn.setAttribute("aria-pressed","false");});
  });
 }));
}
async function loadData(){try{let data=null,sourceFile="";for(const file of ["./data/questlog-export.json","./data/weapons.json"]){const res=await fetch(file,{cache:"no-store"});if(res.ok){data=await res.json();sourceFile=file;break}}if(!data)throw new Error("Arquivo do catálogo não encontrado");const candidates=[data.items,data.pageData,data.records,data.registros,data?.result?.data?.json?.pageData,data?.result?.data?.pageData,data?.data?.items,data?.data?.pageData];const rawItems=Array.isArray(data)?data:(candidates.find(Array.isArray)||[]);const testItems=rawItems.filter(w=>/\(Test\)/i.test(String(w.name||"")));weapons=rawItems.filter(w=>!w.isDisabled&&!/\(Test\)/i.test(String(w.name||"")));fillFilters();renderList();refreshBuildAfterCatalogLoad();const stamp=data.updatedAt?new Date(data.updatedAt).toLocaleString("pt-BR"):"data da exportação: 02/10/2026";$("data-status").textContent=rawItems.length+" registros recebidos; "+weapons.length+" armas exibidas; "+testItems.length+" registros de teste ocultados. Fonte: "+sourceFile+". "+stamp+".";if(!weapons.length)$("data-status").textContent="O arquivo foi encontrado, mas não contém uma lista de itens reconhecida. Verifique o formato do export."}catch(e){$("weapon-list").innerHTML='<div class="empty-state">Os dados locais do catálogo ainda não foram publicados. Quando os dados do catálogo forem adicionados à pasta data, as armas aparecerão aqui.</div>';$("data-status").textContent="Aguardando o arquivo local do catálogo de armas no repositório."}}
// A navegação é delegada no início do arquivo para continuar funcional mesmo se outro módulo falhar.

$("search").addEventListener("input",renderList);$("class-filter").addEventListener("change",()=>{updateWeaponTypeOptions();renderList()});["type-filter","rarity-filter"].forEach(id=>$(id).addEventListener("change",renderList));

let armors=[],selectedArmor=null,armorMode="pieces",armorDetailsPromise=null;
let accessories=[],selectedAccessory=null,accessoryDetailsPromise=null;
const ARMOR_TYPES={head:"Elmo",helmet:"Elmo",shoulder:"Ombros",shoulders:"Ombros",chest:"Peitoral",body:"Peitoral",hands:"Luvas",gloves:"Luvas",waist:"Cintura",legs:"Calça",pants:"Calça",feet:"Botas",boots:"Botas",back:"Capa",cloak:"Capa"};
const ARMOR_TYPE_ICONS={head:"♜",helmet:"♜",shoulder:"♢",shoulders:"♢",chest:"⬡",body:"⬡",hands:"✥",gloves:"✥",waist:"⌁",legs:"♧",pants:"♧",feet:"⌑",boots:"⌑",back:"✧",cloak:"✧"};
const statIndexData={weapon:null,armor:null,accessory:null};
const statIndexPromises={weapon:null,armor:null,accessory:null};
const statIndexReady={weapon:false,armor:false,accessory:false};
const statIndexSelectIds={weapon:"weapon-stat-filter",armor:"armor-stat-filter",accessory:"accessory-stat-filter"};
async function getStatIndex(category){
 if(!statIndexPromises[category])statIndexPromises[category]=(async()=>{
  const response=await fetch("./data/"+category+"-stats-index.json?v=20261123b",{cache:"no-store"});
  if(!response.ok)throw new Error("Índice de estatísticas não encontrado.");
  const data=await response.json();return data.items||{};
 })();
 return statIndexPromises[category];
}
async function ensureStatFilterOptions(category){
 const select=$(statIndexSelectIds[category]);if(!select||statIndexReady[category])return;
 if(select.dataset.loading==="true")return;
 select.dataset.loading="true";const previous=select.value;
 select.innerHTML='<option value="">Carregando estatísticas…</option>';
 try{
  const index=await getStatIndex(category);statIndexData[category]=index;
  const identities=new Set();Object.values(index).forEach(values=>(values||[]).forEach(value=>identities.add(value)));
  const options=[...identities].sort((a,b)=>humanizeStat(a).localeCompare(humanizeStat(b),"pt-BR"));
  select.innerHTML='<option value="">Todas as estatísticas</option>'+options.map(key=>'<option value="'+escapeHtml(key)+'">'+escapeHtml(humanizeStat(key))+'</option>').join("");
  if(previous&&identities.has(previous))select.value=previous;
  statIndexReady[category]=true;
 }catch(error){
  statIndexPromises[category]=null;
  select.innerHTML='<option value="">Não foi possível carregar; tente novamente</option>';
 }finally{select.dataset.loading="false"}
}
function itemHasStat(item,category,identity){
 if(!identity)return true;
 const index=statIndexData[category];if(!index)return false;
 const id=String(item?.id||item?.compoundId||"").replace(/^item-/,"");
 const stats=index[id]||index["item-"+id]||[];
 return stats.includes(identity);
}
function bindStatFilter(category,render){
 const select=$(statIndexSelectIds[category]);if(!select)return;
 const load=()=>ensureStatFilterOptions(category);
 select.addEventListener("focus",load);select.addEventListener("pointerdown",load);
 select.addEventListener("change",render);
}
function accessoryType(item){const key=String(item.subCategory||"").trim().toLowerCase();return ({belt:"Cinto",necklace:"Colar",ring:"Anel"})[key]||"Tipo não identificado"}
function accessoryIcon(item){return ({belt:"⌁",necklace:"◈",ring:"◉"})[String(item.subCategory||"").toLowerCase()]||"✧"}
function armorType(item){const key=String(item.subCategory||item.category||"").trim().toLowerCase();return ARMOR_TYPES[key]||String(item.subCategory||item.category||"Tipo não identificado")}
function armorIcon(item){const key=String(item.subCategory||item.category||"").trim().toLowerCase();return ARMOR_TYPE_ICONS[key]||"✧"}
let armorSetGroups=[],armorSetLabelsById=new Map(),armorSetGroupsById=new Map();
const ARMOR_SET_SLOTS=new Set(["head","chest","hands","legs","feet"]);
const ARMOR_SET_SUFFIXES={
 head:/\s+(?:(?:masked|horned|skull|feathered|witch|wreath|full|great|leather|verdant|ebony|arming)\s+)*(?:masked coif|coif|helm|helmet|hat|hood|cap|beret|circlet|hornhelm|skull cap|arming cap|headpiece|headgear|crown)$/i,
 chest:/\s+(?:upper garment|combat suit|chain mail|armor|armour|brigandine|tunic|robe|cuirass|chestpiece|vest|jacket|mail)$/i,
 hands:/\s+(?:bracers?|armguards?|gauntlets?|gloves?|vambraces?|handguards?)$/i,
 legs:/\s+(?:bases leggings|leg guards|leggings?|legguards?|pants|trousers|breeches|bases|kilt|greaves|legwear)$/i,
 feet:/\s+(?:boots|shoes|footwear)$/i
};
function armorSetBase(item){
 const original=String(item?.name||"").replace(/\s*\([^)]*\)\s*$/,"").trim();
 if(!original||/^Ragged\b/i.test(original))return "";
 const pattern=ARMOR_SET_SUFFIXES[String(item?.subCategory||"").toLowerCase()];
 if(!pattern)return "";
 const base=original.replace(pattern,"").replace(/[\s:–—-]+$/,"").trim();
 return base&&base!==original?base:"";
}
function armorSetGroupKey(item){
 if(!ARMOR_SET_SLOTS.has(String(item?.subCategory||"").toLowerCase()))return "";
 const id=String(item?.id||item?.compoundId||"").replace(/^item-/,"");
 if(/^112\d{5}$/.test(id))return "questlog:"+id.slice(0,4)+id.slice(5);
 if(/^3\d{4}$/.test(id)&&/^Elite Rodinian\b/.test(String(item?.name||"")))return "elite:"+id.slice(0,2);
 const base=armorSetBase(item);
 return base?"name:"+base.toLocaleLowerCase("en-US"):"";
}
function armorSetGroupLabel(key,items){
 if(key.startsWith("elite:")){
  const idPrefix=key.slice(-2),material=items.map(x=>String(x.name||"").match(/^Elite Rodinian\s+(Plate|Leather)\b/i)?.[1]).find(Boolean)||"";
  return "Elite Rodinian"+(material?" "+material:"")+" · Variante "+idPrefix;
 }
 const counts=new Map();
 items.map(armorSetBase).filter(Boolean).forEach(base=>counts.set(base,(counts.get(base)||0)+1));
 return [...counts.entries()].sort((a,b)=>b[1]-a[1]||a[0].length-b[0].length)[0]?.[0]||String(items[0]?.name||"Conjunto");
}
function buildArmorSetGroups(){
 const grouped=new Map();armorSetLabelsById=new Map();armorSetGroupsById=new Map();
 armors.forEach(item=>{
  const key=armorSetGroupKey(item);if(!key)return;
  if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(item);
 });
 const groups=[...grouped.entries()].map(([key,items])=>{
  const slots=new Set(items.map(x=>String(x.subCategory||"").toLowerCase()));
  return {key,label:armorSetGroupLabel(key,items),items,slotCount:slots.size,complete:items.length===5&&slots.size===5};
 });
 const labelCounts=new Map();groups.forEach(group=>labelCounts.set(group.label,(labelCounts.get(group.label)||0)+1));
 groups.forEach(group=>{
  if(labelCounts.get(group.label)>1&&!group.key.startsWith("elite:"))group.label+=" · "+group.key.slice(-3);
  group.items.forEach(item=>{
   const id=String(item.id||item.compoundId||"").replace(/^item-/,"");
   armorSetLabelsById.set(id,group.label);armorSetGroupsById.set(id,group);
  });
 });
 armorSetGroups=groups.filter(group=>group.items.length>1).sort((a,b)=>a.label.localeCompare(b.label,"pt-BR"));
 return armorSetGroups;
}
function armorSetName(item){
 const id=String(item?.id||item?.compoundId||"").replace(/^item-/,"");
 return armorSetLabelsById.get(id)||armorSetBase(item)||"";
}
function armorSetLabel(item){return armorSetName(item)||"Conjunto não identificado"}
function armorFiltered(ignoreStat=false){
 const q=$("armor-search").value.trim().toLowerCase(),t=$("armor-type-filter").value,r=$("armor-rarity-filter").value,s=$("armor-set-filter").value,stat=ignoreStat?"":($("armor-stat-filter")?.value||"");
 return armors.filter(x=>(!q||String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q)||armorSetLabel(x).toLowerCase().includes(q))&&(!t||armorType(x)===t)&&(!r||rarity(x)===r)&&(!s||armorSetLabel(x)===s)&&(!stat||itemHasStat(x,"armor",stat))).sort(compareItemPriority);
}
function fillArmorFilters(){
 const types=[...new Set(armors.map(armorType).filter(x=>x&&x!=="Tipo não identificado"))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
 const sets=armorSetGroups.map(group=>group.label).sort((a,b)=>a.localeCompare(b,"pt-BR"));
 $("armor-type-filter").innerHTML='<option value="">Todos os tipos</option>'+types.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");
 $("armor-set-filter").innerHTML='<option value="">Todos os conjuntos</option>'+sets.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");
 fillRarityOptions("armor-rarity-filter");
}
function findArmorDefenseLevels(item){
 const root=item?.itemStats?.equipmentStats||item?.equipmentStats;
 if(!root||typeof root!=="object")return null;
 const candidates=[],pending=[{node:root,path:["equipmentStats"]}],seen=new Set();
 while(pending.length){
  const current=pending.shift(),node=current.node;
  if(!node||typeof node!=="object"||seen.has(node))continue;
  seen.add(node);
  if(Array.isArray(node)){node.forEach((value,index)=>pending.push({node:value,path:current.path.concat(String(index))}));continue;}
  for(const [key,value] of Object.entries(node)){
   const path=current.path.concat(key),normalized=path.join("").toLowerCase().replace(/[^a-z]/g,"");
   if(key.toLowerCase()==="gearscore"&&value&&typeof value==="object"){
    const levels=Object.entries(value).filter(([level,amount])=>Number.isFinite(Number(level))&&amount!==null&&amount!==undefined);
    if(levels.length)candidates.push({levels:Object.fromEntries(levels),priority:/(defense|defence)/.test(normalized)?0:1});
   }
   if(value&&typeof value==="object")pending.push({node:value,path});
  }
 }
 candidates.sort((a,b)=>a.priority-b.priority);
 return candidates[0]?.levels||null;
}
function renderDefenseProgression(item){
 const levels=findArmorDefenseLevels(item);
 if(!levels||typeof levels!=="object")return "";
 const entries=Object.entries(levels).sort((a,b)=>Number(a[0])-Number(b[0]));
 if(!entries.length)return "";
 return '<details class="detail-disclosure"><summary>Progressão de defesa por Equipment Score <span>'+escapeHtml(entries[0][1])+' → '+escapeHtml(entries[entries.length-1][1])+'</span></summary><div class="progression-grid">'+entries.map(([level,value])=>'<div><small>Nível '+escapeHtml(level)+'</small><strong>'+escapeHtml(value)+'</strong></div>').join("")+'</div></details>';
}
function renderArmorDefenseAttributes(item,score){
 const found={physical:null,magical:null};
 const normalize=value=>String(value||"").toLowerCase().replace(/[^a-z]/g,"");
 function walk(node,path=[],depth=0){
  if(!node||typeof node!=="object"||depth>7)return;
  if(Array.isArray(node)){node.forEach((value,index)=>walk(value,path.concat(String(index)),depth+1));return}
  const descriptor=node.statType??node.type??node.key??node.name;
  const basePath=descriptor!==undefined&&descriptor!==null?path.concat(String(descriptor)):path;
  for(const [key,value] of Object.entries(node)){
   const next=[...basePath,key],joined=normalize(next.join(""));
   const identity=normalizeStatIdentity(joined),physical=identity==="physicaldefense",magical=identity==="magicdefense";
   if((physical||magical)&&value!==null&&value!==undefined){
    let amount=value,map=null,statType=descriptor||next.join("");
    if(typeof value==="object"){
     map=value.gearScore&&typeof value.gearScore==="object"?value.gearScore:null;
     if(map){const sorted=Object.entries(map).sort((a,b)=>Number(a[0])-Number(b[0]));amount=map[String(score)]??map["1"]??sorted[0]?.[1];statType=value.statType||statType}
     else amount=value.statValue??value.value??value.amount??value.statValue1??value.baseValue;
    }
    if(amount!==undefined&&amount!==null&&(typeof amount!=="object"||Array.isArray(amount))){
     const target=physical?"physical":"magical";
     if(found[target]===null)found[target]={value:amount,map,statType};
    }
   }
   if(value&&typeof value==="object"&&!Array.isArray(value))walk(value,next,depth+1);
  }
 }
 walk(item?.equipmentStats||{},["equipmentStats"]);
 walk(item?.itemStats||{},["itemStats"]);
 return ["physical","magical"].filter(key=>found[key]!==null).map(key=>{
  const data=found[key],label=key==="physical"?"Defesa física":"Defesa mágica";
  return '<div class="accessory-inspect-stat"><strong '+(data.map?'data-gear-score-map="'+escapeHtml(JSON.stringify(data.map))+'" data-stat-type="'+escapeHtml(data.statType||key)+'"':'')+'>'+escapeHtml(formatStatValue(data.statType||key,data.value))+'</strong><span>'+label+'</span></div>';
 }).join("");
}
function renderArmorStats(item){
 const levels=findArmorDefenseLevels(item),score=levels?defaultGearScore(item,levels):1;
 const entries=dedupeStatEntries(getItemStatEntries(item)).filter(entry=>!["physicaldefense","magicdefense"].includes(statFamily(entry.identity)));
 const baseRows=entries.map(entry=>'<div class="accessory-inspect-stat"><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><span>'+escapeHtml(humanizeStat(entry.identity||entry.key))+'</span>'+(entry.chance?'<small>'+escapeHtml(entry.chance)+'</small>':"")+'</div>').join("");
 const defenses=renderArmorDefenseAttributes(item,score);
 const rows=baseRows+defenses;
 return '<section class="accessory-inspect-stats">'+(levels?renderGearScoreControl(item,levels,"Defesa"):"")+'<div class="accessory-inspect-stat-list">'+(rows||'<p class="detail-muted">A fonte não retornou atributos básicos para esta armadura.</p>')+'</div></section>';
}
function renderOptionalItemOptions(item){const content=renderSuffixes(item)+renderPerks(item);return content?'<details class="detail-disclosure item-options-disclosure"><summary>Sufixos e perks</summary><div class="item-options-content">'+content+'</div></details>':""}
function detailedArmorMarkup(item,catalogItem){
 return renderArmorStats(item)+renderAccessoryReadOnlyOptions(item)+renderEquipmentFooter(item,true);
}
function armorDetailMarkup(item){return equipmentInspectMarkup(item,"armor")}
async function getArmorDetailsCatalog(){
 if(!armorDetailsPromise)armorDetailsPromise=(async()=>{
  const response=await fetch("./data/armor-details-manifest.json?v=20261123b",{cache:"no-store"});
  if(!response.ok)throw new Error("Manifesto local de detalhes das armaduras não encontrado.");
  const manifest=await response.json();
  if(!Array.isArray(manifest.parts)||!manifest.parts.length)throw new Error("Manifesto de armaduras sem partes.");
  const parts=await Promise.all(manifest.parts.map(async name=>{const res=await fetch("./data/"+encodeURIComponent(name)+"?v=20261123b",{cache:"no-store"});if(!res.ok)throw new Error("Falha ao carregar "+name);return res.json()}));
  const all={};parts.forEach(part=>Object.assign(all,part.items||{}));return all;
 })();
 return armorDetailsPromise;
}
async function loadArmorDetails(item,panelRoot){
 const id=String(item.id||item.compoundId||"");if(!panelRoot)return;
 try{
  const all=await getArmorDetailsCatalog(),record=all[id]||all[id.replace(/^item-/,"")],current=panelRoot.querySelector(".detail-live");
  if(!current||!record||!selectedArmor||String(selectedArmor.id||selectedArmor.compoundId)!==id)return;
  current.innerHTML=detailedArmorMarkup(record,item);const scoreControl=current.querySelector(".gear-score-control"),heading=panelRoot.querySelector(".accessory-inspect-heading");if(scoreControl&&heading)heading.appendChild(scoreControl);
  const meta=current.closest(".detail-panel")?.querySelector(".detail-header-meta");
  if(meta)meta.innerHTML=[record?.itemInfo?.tier!=null?"Tier "+record.itemInfo.tier:"",rarity(item),"Todas as classes",armorType(item)].filter(Boolean).map((value,index)=>'<span class="accessory-inspect-meta-value'+(index===1?" rarity-value":"")+'">'+escapeHtml(value)+'</span>').join("");
  const idFooter=current.querySelector(".detail-id-footer");if(idFooter)idFooter.textContent="ID: "+String(item.id||item.compoundId||"");
 }catch(e){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selectedArmor&&String(selectedArmor.id||selectedArmor.compoundId)===id)current.innerHTML='<p class="detail-muted">A ficha detalhada não pôde ser carregada. Verifique se os arquivos locais estão atualizados.</p>';
 }
}
function selectArmor(id){const currentId=String(selectedArmor?.id||selectedArmor?.compoundId||"");if(selectedArmor&&currentId===String(id)){selectedArmor=null}else{selectedArmor=armors.find(x=>String(x.id)===String(id)||String(x.compoundId)===String(id))||null}renderArmorList();}
function mountArmorDetail(){
 const layout=$("armor-catalog-layout"),list=$("armor-list"),detail=$("armor-detail");if(!layout||!list||!detail)return;
 const mobile=window.matchMedia("(max-width:760px)").matches;
 if(mobile&&selectedArmor){const id=String(selectedArmor.id||selectedArmor.compoundId),entry=Array.from(list.querySelectorAll(".catalog-item-entry")).find(el=>el.querySelector("[data-id]")?.dataset.id===id);if(entry)entry.appendChild(detail);else layout.appendChild(detail);detail.classList.add("armor-detail-inline");detail.hidden=false;detail.style.display="block";}
 else{detail.classList.remove("armor-detail-inline");detail.hidden=false;detail.style.display="";layout.appendChild(detail);}
 if(!selectedArmor){detail.innerHTML='<div class="detail-ornament">✧</div><h3>Selecione uma peça</h3><p>Escolha uma armadura para consultar sua ficha e os atributos disponíveis.</p>';detail.classList.add("empty-detail");return;}
 detail.classList.remove("empty-detail");detail.innerHTML=armorDetailMarkup(selectedArmor);const panel=detail.querySelector(".detail-panel");if(panel)loadArmorDetails(selectedArmor,panel);
}
function renderArmorList(){
 const list=$("armor-list"),layout=$("armor-catalog-layout"),detail=$("armor-detail");
 if(list&&layout&&detail&&list.contains(detail))layout.appendChild(detail);
 if(!armors.length){$("armor-catalog-count").textContent="AGUARDANDO CATÁLOGO";$("armor-list").innerHTML='<div class="empty-state">A estrutura do catálogo está pronta. Aguardando os dados locais de armaduras.</div>';mountArmorDetail();return}
 const rowMarkup=x=>{
  const isSelected=selectedArmor&&String(selectedArmor.id||selectedArmor.compoundId)===String(x.id||x.compoundId);
  const meta=escapeHtml(armorType(x))+(armorMode==="sets"?"":" · "+escapeHtml(armorSetLabel(x)));
  const itemMarkup=catalogView("armor")==="grid"
   ?catalogCardMarkup(x,{name:x.name||"Armadura",meta,icon:armorIcon(x),image:weaponImageMarkup(x),selected:isSelected,dataAttr:'data-id="'+escapeHtml(x.id)+'"'})
   :'<button class="weapon-row armor-row '+(isSelected?"selected":"")+'" data-id="'+escapeHtml(x.id)+'" style="--rarity:'+rarityStyle(x)+'"><span class="weapon-symbol"><span>'+armorIcon(x)+'</span>'+weaponImageMarkup(x)+'</span><span><span class="weapon-name">'+escapeHtml(x.name||"Armadura")+'</span><span class="weapon-meta">'+meta+'</span></span><span class="rarity-label">'+escapeHtml(rarity(x))+'</span></button>';
  return '<div class="catalog-item-entry">'+itemMarkup+'</div>';
 };
 if(armorMode==="sets"){
  const q=$("armor-search").value.trim().toLowerCase(),type=$("armor-type-filter").value,grade=$("armor-rarity-filter").value,set=$("armor-set-filter").value,stat=$("armor-stat-filter")?.value||"";
  const groups=armorSetGroups.filter(group=>(!set||group.label===set)&&(!q||group.label.toLowerCase().includes(q)||group.items.some(x=>String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q)))&&(!type||group.items.some(x=>armorType(x)===type))&&(!grade||group.items.some(x=>rarity(x)===grade))&&(!stat||group.items.some(x=>itemHasStat(x,"armor",stat))));
  $("armor-catalog-count").textContent=groups.length+" CONJUNTOS / "+armors.length+" PEÇAS";
  if(!groups.length){$("armor-list").innerHTML='<div class="empty-state">Nenhum conjunto corresponde aos filtros selecionados.</div>';mountArmorDetail();return}
  $("armor-list").innerHTML=groups.map(group=>'<section class="armor-set-group '+(group.complete?"complete":"incomplete")+'"><header><strong>'+escapeHtml(group.label)+'</strong><span>'+(group.complete?"5/5 peças · completo":group.items.length+'/5 peças · incompleto')+'</span></header><div>'+group.items.map(rowMarkup).join("")+'</div></section>').join("");
 }else{
  const rows=armorFiltered();$("armor-catalog-count").textContent=rows.length+" / "+armors.length+" PEÇAS";
  if(!rows.length){$("armor-list").innerHTML='<div class="empty-state">Nenhuma armadura corresponde aos filtros selecionados.</div>';mountArmorDetail();return}
  $("armor-list").innerHTML=rows.map(rowMarkup).join("");
 }
 applyCatalogView("armor","armor-list");
 document.querySelectorAll("#armor-list [data-id]").forEach(b=>b.addEventListener("click",()=>selectArmor(b.dataset.id)));
 mountArmorDetail();
}

window.addEventListener("resize",()=>{if($("armor-view")?.classList.contains("active"))mountArmorDetail()},{passive:true});
async function loadArmorData(){
 try{
  const response=await fetch("./data/armor-export.json",{cache:"no-store"});if(!response.ok)throw new Error("Catálogo ainda não enviado.");
  const data=await response.json(),items=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);
  armors=items.filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||"")));
  buildArmorSetGroups();refreshBuildAfterCatalogLoad();fillArmorFilters();renderArmorList();
  const completeSets=armorSetGroups.filter(group=>group.complete).length,incompleteSets=armorSetGroups.filter(group=>!group.complete).length;
  $("armor-data-status").textContent=armors.length+" peças carregadas. "+completeSets+" conjuntos completos (5/5) e "+incompleteSets+" grupos candidatos incompletos; capas e itens sem identificação de conjunto ficam fora da contagem de cinco peças.";
  $("armor-catalog-count").textContent=armors.length+" PEÇAS";
 }catch(e){$("armor-data-status").textContent="Aguardando data/armor-export.json. Nenhum registro de armadura foi presumido ou criado.";renderArmorList()}
}
["armor-search","armor-type-filter","armor-rarity-filter","armor-set-filter","armor-stat-filter"].forEach(id=>$(id).addEventListener(id==="armor-search"?"input":"change",renderArmorList));
document.querySelectorAll(".armor-mode").forEach(b=>b.addEventListener("click",()=>{armorMode=b.dataset.armorMode;document.querySelectorAll(".armor-mode").forEach(x=>x.classList.toggle("active",x===b));renderArmorList()}));
function accessoryFiltered(){
 const q=$("accessory-search").value.trim().toLowerCase(),t=$("accessory-type-filter").value,r=$("accessory-rarity-filter").value,s=$("accessory-stat-filter")?.value||"";
 return accessories.filter(x=>(!q||String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q))&&(!t||String(x.subCategory||"").toLowerCase()===t)&&(!r||rarity(x)===r)&&(!s||itemHasStat(x,"accessory",s))).sort(compareItemPriority);
}
function fillAccessoryFilters(){fillRarityOptions("accessory-rarity-filter")}
function mountAccessoryDetail(){
 const layout=$("accessory-catalog-layout"),list=$("accessory-list"),detail=$("accessory-detail");
 if(!layout||!list||!detail)return;
 const mobile=window.matchMedia("(max-width: 760px)").matches;
 if(mobile&&selectedAccessory){
  const id=String(selectedAccessory.id||selectedAccessory.compoundId);
  const entry=Array.from(list.querySelectorAll(".catalog-item-entry")).find(el=>el.querySelector("[data-accessory-id]")?.dataset.accessoryId===id);
  if(entry)entry.appendChild(detail);else layout.appendChild(detail);
  detail.classList.add("accessory-detail-inline");
  detail.hidden=false;
  detail.style.display="block";
 }else{
  detail.classList.remove("accessory-detail-inline");
  detail.hidden=false;
  detail.style.display="";
  layout.appendChild(detail);
 }
 if(!selectedAccessory){
  detail.innerHTML='<div class="detail-ornament">✧</div><h3>Selecione um acessório</h3><p>Escolha um colar, anel ou cinto para consultar sua ficha.</p>';
  detail.classList.add("empty-detail");
  return;
 }
 detail.classList.remove("empty-detail");
 detail.innerHTML=accessoryDetailMarkup(selectedAccessory);
 const panel=detail.querySelector(".detail-panel");
 if(panel)loadAccessoryDetails(selectedAccessory,panel);
}
function renderAccessoryList(){
 const list=$("accessory-list"),layout=$("accessory-catalog-layout"),detail=$("accessory-detail");
 // No mobile, a ficha fica dentro da entrada selecionada. Retire-a antes de reconstruir a lista,
 // pois substituir list.innerHTML destruiria o próprio nó e impediria selecionar outro item.
 if(list&&layout&&detail&&list.contains(detail))layout.appendChild(detail);
 const rows=accessoryFiltered();
 $("accessory-catalog-count").textContent=accessories.length?rows.length+" / "+accessories.length+" PEÇAS":"AGUARDANDO CATÁLOGO";
 if(selectedAccessory&&!rows.some(x=>String(x.id||x.compoundId)===String(selectedAccessory.id||selectedAccessory.compoundId)))selectedAccessory=null;
 if(!rows.length){
  $("accessory-list").innerHTML='<div class="empty-state">'+(accessories.length?"Nenhum acessório corresponde aos filtros selecionados.":"Aguardando os dados locais do catálogo.")+'</div>';
  mountAccessoryDetail();
  return;
 }
 $("accessory-list").innerHTML=rows.map(x=>{
  const isSelected=selectedAccessory&&String(selectedAccessory.id||selectedAccessory.compoundId)===String(x.id||x.compoundId);
  const itemMarkup=catalogView("accessories")==="grid"
   ?catalogCardMarkup(x,{name:x.name||"Acessório",meta:accessoryType(x),icon:accessoryIcon(x),image:accessoryImageMarkup(x),selected:isSelected,dataAttr:'data-accessory-id="'+escapeHtml(x.id)+'"'})
   :'<button type="button" class="weapon-row armor-row '+(isSelected?"selected":"")+'" data-accessory-id="'+escapeHtml(x.id)+'" style="--rarity:'+rarityStyle(x)+'"><span class="weapon-symbol"><span>'+accessoryIcon(x)+'</span>'+accessoryImageMarkup(x)+'</span><span><span class="weapon-name">'+escapeHtml(x.name||"Acessório")+'</span><span class="weapon-meta">'+escapeHtml(accessoryType(x))+'</span></span><span class="rarity-label">'+escapeHtml(rarity(x))+'</span></button>';
  return '<div class="catalog-item-entry">'+itemMarkup+'</div>';
 }).join("");
 applyCatalogView("accessories","accessory-list");
 document.querySelectorAll("#accessory-list [data-accessory-id]").forEach(b=>b.addEventListener("click",()=>selectAccessory(b.dataset.accessoryId)));
 mountAccessoryDetail();
}
window.addEventListener("resize",()=>{
 if($("accessories-view")?.classList.contains("active"))mountAccessoryDetail();
},{passive:true});
function accessoryDetailMarkup(item){return equipmentInspectMarkup(item,"accessory")}
function findAccessoryGearScore(item){
 const stats=item?.itemStats?.equipmentStats||{};
 for(const [key,entry] of Object.entries(stats)){
  const levels=entry?.gearScore;
  if(levels&&typeof levels==="object"&&Object.keys(levels).some(level=>Number.isFinite(Number(level))&&levels[level]!==null&&levels[level]!==undefined)){
   return {key,statType:entry.statType||key,levels};
  }
 }
 return null;
}
function renderAccessoryStats(item){
 const entries=dedupeStatEntries(getItemStatEntries(item));
 const progression=findAccessoryGearScore(item);
 const score=progression?defaultGearScore(item,progression.levels):null;
 let rows="";
 if(progression){
  const value=progression.levels[String(score)]??Object.values(progression.levels)[0];
  const label=humanizeStat(progression.statType);
  rows+='<div class="accessory-inspect-stat"><strong data-gear-score-map="'+escapeHtml(JSON.stringify(progression.levels))+'" data-stat-type="'+escapeHtml(progression.statType)+'">'+escapeHtml(formatStatValue(progression.statType,value))+'</strong><span>'+escapeHtml(label)+'</span></div>';
 }
 rows+=entries.map(entry=>'<div class="accessory-inspect-stat"><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><span>'+escapeHtml(entry.label)+'</span>'+(entry.chance?'<small>'+escapeHtml(entry.chance)+'</small>':"")+'</div>').join("");
 return '<section class="accessory-inspect-stats">'+(progression?renderGearScoreControl(item,progression.levels,"Atributo"):"")+'<div class="accessory-inspect-stat-list">'+(rows||'<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>')+'</div></section>';
}
function renderAccessoryReadOnlyOptions(item){
 const stats=item?.itemStats||{},info=item?.itemInfo||{},grade=itemGradeInfo(item),score=itemCurrentGearScore(item);
 const suffixAllowed=grade.suffix!==false,suffixSource=stats.suffixes;
 const suffixes=suffixSource&&typeof suffixSource==="object"?Object.values(suffixSource).filter(x=>x&&typeof x==="object"):[];
 const suffixRows=suffixes.map(suffix=>{
  const value=gearScoreValueMarkup(suffix,score,suffix.statType??suffix.type);
  const chance=Number.isFinite(Number(suffix.chancePercentage))?'<small>'+Number(suffix.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'%</small>':"";
  return '<div class="accessory-inspect-option"><strong>'+escapeHtml(suffix.name||"Sufixo")+'</strong><span>'+value+'</span>'+chance+'</div>';
 }).join("");
 const suffixSection=suffixAllowed&&(suffixRows||grade.suffix===true)
  ?'<details class="accessory-inspect-accordion"><summary><span>Possible Suffixes</span><em>'+(suffixes.length||"—")+'</em></summary><div class="accessory-inspect-options">'+(suffixRows||'<p class="detail-muted">Nenhuma opção retornada pela ficha.</p>')+'</div></details>':"";
 const limit=Number(grade.perkCount??stats.perkCount),candidates=[...perkEntries(stats.commonPerks),...perkEntries(stats.perks)];
 const seen=new Set(),perkRows=[];
 for(const perk of candidates){
  const key=String(perk.id||perk.name||"").toLowerCase();if(!key||seen.has(key))continue;seen.add(key);
  const value=gearScoreValueMarkup(perk,score,perk.statType);
  const chance=Number.isFinite(Number(perk.chancePercentage))?'<small>'+Number(perk.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'%</small>':"";
  
  perkRows.push('<div class="accessory-inspect-option"><strong>'+escapeHtml(perk.name||"Perk")+'</strong><span>'+value+'</span>'+chance+'</div>');
 }
 const unique=[...perkEntries(info.uniquePerk??stats.uniquePerk),...perkEntries(info.specialPerks??stats.specialPerks)];
 for(const perk of unique){
  const key=String(perk.id||perk.name||perk.description||"").toLowerCase();if(!key||seen.has("unique:"+key))continue;seen.add("unique:"+key);
  perkRows.push('<div class="accessory-inspect-option accessory-inspect-unique"><strong>'+escapeHtml(perk.name||"Perk especial")+'</strong><span>'+escapeHtml(perk.description||"")+'</span></div>');
 }
 const perkSection=perkRows.length?'<details class="accessory-inspect-accordion"><summary><span>Possible Perks</span><em>'+perkRows.length+(Number.isFinite(limit)?' · até '+Math.max(0,limit):"")+'</em></summary><div class="accessory-inspect-options">'+perkRows.join("")+'</div></details>':"";
 return '<section class="accessory-inspect-rolls">'+suffixSection+perkSection+'</section>';
}
function detailedAccessoryMarkup(record,item){
 const info=record?.itemInfo||{},footer=[["Nível requerido",info.requiredLevel],["Peso",info.weight],["Pode reforçar",info.canReinforce===true?"Sim":info.canReinforce===false?"Não":null]].filter(([,value])=>value!==undefined&&value!==null&&value!=="");
 const extras=footer.length?'<footer class="accessory-inspect-footer">'+footer.map(([label,value])=>'<span><b>'+escapeHtml(label)+'</b> '+escapeHtml(String(value))+'</span>').join('<i>·</i>')+'</footer>':"";
 return renderAccessoryStats(record)+renderAccessoryReadOnlyOptions(record)+extras;
}

async function getAccessoryDetailsCatalog(){
 if(!accessoryDetailsPromise)accessoryDetailsPromise=(async()=>{
  const response=await fetch("./data/accessory-details-manifest.json?v=20261123b",{cache:"no-store"});
  if(!response.ok)throw new Error("Manifesto de acessórios não encontrado.");
  const manifest=await response.json();
  if(!Array.isArray(manifest.parts)||!manifest.parts.length)throw new Error("Manifesto de acessórios sem partes.");
  const parts=await Promise.all(manifest.parts.map(async name=>{const res=await fetch("./data/"+encodeURIComponent(name)+"?v=20261123b",{cache:"no-store"});if(!res.ok)throw new Error("Falha ao carregar "+name);return res.json()}));
  const all={};parts.forEach(part=>Object.assign(all,part.items||{}));return all;
 })();
 return accessoryDetailsPromise;
}
async function loadAccessoryDetails(item,panelRoot){
 const id=String(item.id||item.compoundId||"");if(!panelRoot)return;
 try{
  const all=await getAccessoryDetailsCatalog(),record=all[id]||all[id.replace(/^item-/,"")],current=panelRoot.querySelector(".detail-live");
  if(!record)throw new Error("Ficha individual não encontrada para este acessório.");
  if(current&&selectedAccessory&&String(selectedAccessory.id||selectedAccessory.compoundId)===id){
   current.innerHTML=detailedAccessoryMarkup(record,item);
   const scoreControl=current.querySelector(".gear-score-control");
   const heading=current.closest(".detail-panel")?.querySelector(".accessory-inspect-heading");
   if(scoreControl&&heading)heading.appendChild(scoreControl);

   const meta=current.closest(".detail-panel")?.querySelector(".detail-header-meta");
   if(meta)meta.innerHTML=[record?.itemInfo?.tier!==undefined&&record?.itemInfo?.tier!==null?"Tier "+record.itemInfo.tier:"",rarity(item),accessoryType(item)].filter(Boolean).map((value,index)=>'<span class="accessory-inspect-meta-value'+(index===1?' rarity-value':'')+'">'+escapeHtml(value)+'</span>').join("");
  }
 }catch(e){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selectedAccessory&&String(selectedAccessory.id||selectedAccessory.compoundId)===id)current.innerHTML='<p class="detail-muted">Não foi possível carregar a ficha detalhada: '+escapeHtml(e.message||"erro desconhecido")+'</p>';
 }
}
function selectAccessory(id){
 const currentId=String(selectedAccessory?.id||selectedAccessory?.compoundId||"");
 if(selectedAccessory&&currentId===String(id)){selectedAccessory=null}
 else{selectedAccessory=accessories.find(x=>String(x.id)===String(id)||String(x.compoundId)===String(id))||null}
 renderAccessoryList();
}
async function loadAccessoryData(){
 try{
  const response=await fetch("./data/accessory-export.json?v=20261123a",{cache:"no-store"});if(!response.ok)throw new Error("Catálogo ainda não enviado.");
  const data=await response.json(),items=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);
  accessories=items.filter(x=>!x.isDisabled);fillAccessoryFilters();renderAccessoryList();refreshBuildAfterCatalogLoad();
  $("accessory-data-status").textContent=accessories.length+" acessórios carregados: "+accessories.filter(x=>x.subCategory==="necklace").length+" colares, "+accessories.filter(x=>x.subCategory==="ring").length+" anéis e "+accessories.filter(x=>x.subCategory==="belt").length+" cintos. Fichas detalhadas locais do Companion.";
  $("accessory-catalog-count").textContent=accessories.length+" PEÇAS";
  renderBuildArmorSlots();buildStatsOptions("accessory",0);buildStatsOptions("accessory",1);renderBuildSelectedStats();
 }catch(e){$("accessory-data-status").textContent="Aguardando data/accessory-export.json. Nenhum registro foi presumido.";renderAccessoryList()}
}
["accessory-search","accessory-type-filter","accessory-rarity-filter"].forEach(id=>$(id).addEventListener(id==="accessory-search"?"input":"change",renderAccessoryList));
bindStatFilter("weapon",renderList);bindStatFilter("armor",renderArmorList);bindStatFilter("accessory",renderAccessoryList);

document.addEventListener("click",event=>{
 const button=event.target.closest("[data-expand-options]");
 if(!button)return;
 const list=button.parentElement?.querySelector(".detail-option-list");
 if(!list)return;
 const expanded=list.classList.toggle("expanded");
 button.setAttribute("aria-expanded",String(expanded));
 button.textContent=expanded?"Exibir menos":"Exibir mais ("+Math.max(0,list.children.length-5)+")";
});
document.addEventListener("input",event=>{
 const slider=event.target;
 if(!slider.matches(".gear-score-slider"))return;
 const score=String(slider.value),panel=slider.closest(".detail-panel, .build-stat-summary-card, .build-item-config");
 if(!panel)return;
 const rollId=slider.dataset.itemRollId;
 if(rollId){const state=equipmentRollState[rollId]||(equipmentRollState[rollId]={suffix:"",perks:[],gearScore:null});state.gearScore=Number(score)}
 const current=panel.querySelector(".gear-score-current");
 if(current)current.textContent=score;
 panel.querySelectorAll("[data-gear-score-map]").forEach(node=>{
  try{const levels=JSON.parse(node.getAttribute("data-gear-score-map"));const level=levels[String(score)],field=node.dataset.statField,value=field?(level?.[field]??null):gearScoreValueAt(levels,score);node.textContent=value===undefined||value===null?"Sem valor cadastrado para este Equipment Score":String(formatStatValue(node.dataset.statType,value))}catch(error){}
 });
 if(panel.classList.contains("build-item-config"))renderBuildTotals();
});
document.addEventListener("change",event=>{
 const input=event.target;
 if(input.matches("[data-perk-select]")){
  const list=input.closest(".build-config-perks, .perk-options"),limit=Number(input.dataset.perkLimit),checked=list?[...list.querySelectorAll("[data-perk-select]:checked")]:[];
  if(input.checked&&Number.isFinite(limit)&&checked.length>limit){input.checked=false;return}
  const rollId=input.dataset.itemRollId;
  if(rollId){const state=equipmentRollState[rollId]||(equipmentRollState[rollId]={suffix:"",perks:[],gearScore:null});state.perks=checked.map(box=>box.dataset.perkKey).filter(Boolean)}
  if(list){
   const counter=list.querySelector("[data-perk-counter] span");if(counter)counter.textContent=checked.length+"/"+limit;
   list.querySelectorAll("[data-perk-select]").forEach(box=>{box.disabled=limit<=0||(!box.checked&&checked.length>=limit)});
  }
   if(input.closest(".build-item-config")){renderBuildItemConfig();renderBuildTotals();}
 }
 if(input.matches("[data-suffix-select]")){
  const rollId=input.dataset.itemRollId;
  if(rollId){const state=equipmentRollState[rollId]||(equipmentRollState[rollId]={suffix:"",perks:[],gearScore:null});state.suffix=input.value}
   if(input.closest(".build-item-config")){renderBuildItemConfig();renderBuildTotals();}
 }
  if(input.matches(".gear-score-slider")&&input.closest(".build-item-config"))renderBuildTotals();
});
/* Build planner */
let buildWeaponDetails={},buildArmorDetails={},buildAccessoryDetails={};
const buildLayerState={weapon:"idle",armor:"idle",accessory:"idle"};
const buildLayerPromises={weapon:null,armor:null,accessory:null};
const buildArmorSlotState={head:"idle",chest:"idle",hands:"idle",legs:"idle",feet:"idle",back:"idle"};
const buildArmorSlotPromises={head:null,chest:null,hands:null,legs:null,feet:null,back:null};
let buildArmorBuildManifestPromise=null;
const buildPickerIndexCache=new WeakMap();
let buildPickerRarity="";
let buildPickerAnchor=null;
let buildPickerLimit=30;
const buildState={className:"",weaponType:"",weaponType2:"",weaponStats:["",""],armorStats:["",""],accessoryStats:["",""],accessories:{},matchModes:{weapon0:"all",weapon1:"all",head:"all",chest:"all",hands:"all",legs:"all",feet:"all",back:"all",necklace:"all",ring1:"all",ring2:"all",belt:"all"},weapons:["",""],armor:{}};
 let selectedBuildSlot="";
const BUILD_ARMOR_SLOTS=[["head","Elmo"],["chest","Peitoral"],["hands","Luvas"],["legs","Calça"],["feet","Botas"],["back","Capa"]];
const BUILD_ACCESSORY_SLOTS=[["necklace","Colar"],["ring1","Anel 1"],["ring2","Anel 2"],["belt","Cinto"]];
function buildEquipmentPrimaryStats(record){
 if(record&&typeof record==="object"&&equipmentPrimaryStatsCache.has(record))return equipmentPrimaryStatsCache.get(record);
 const aliases=[
  {label:"Ataque",keys:["attack","basicattack","basicatk","ataque","ataquebasico"]},
  {label:"Defesa física",keys:["physicaldefense","defensephysical","physicaldefence","defencephysical","physicalarmor","physicalarmour","defesafisica"]},
  {label:"Defesa mágica",keys:["magicdefense","magicaldefense","defensemagic","defensemagical","magicdefence","magicaldefence","defencemagic","defencemagical","magicarmor","magicalarmor","defesamagica"]}
 ];
 const result=[],seen=new Set(),visited=new Set(),pending=[record?.equipmentStats,record];let cursor=0;
 while(cursor<pending.length){
  const node=pending[cursor++];
  if(!node||typeof node!=="object"||visited.has(node))continue;
  visited.add(node);
  if(Array.isArray(node)){node.forEach(value=>pending.push(value));continue}
  for(const [key,value] of Object.entries(node)){
   const identity=normalizeStatIdentity(key),alias=aliases.find(entry=>entry.keys.some(k=>normalizeStatIdentity(k)===identity));
   if(alias&&!seen.has(identity)){
    const levels=value&&typeof value==="object"?(value.gearScore??value.levels??value.values):null;
    let amount;
    if(levels&&typeof levels==="object"){const score=defaultGearScore(record,levels);amount=levels[String(score)]??Object.values(levels)[0]}
    else if(value&&typeof value==="object")amount=value.statValue??value.statValue1??value.value??value.amount;
    else amount=value;
    if(amount!==undefined&&amount!==null&&amount!==""){result.push({label:alias.label,value:amount});seen.add(identity)}
   }
   if(value&&typeof value==="object")pending.push(value);
  }
 }
 equipmentPrimaryStatsCache.set(record,result);
 return result;
}
function buildRecordStats(record){
 if(record&&typeof record==="object"&&buildRecordStatsCache.has(record))return buildRecordStatsCache.get(record);
 const found=new Map(),add=(key)=>{const identity=normalizeStatIdentity(key),label=humanizeStat(key);if(!label||label==="Atributo")return;if(!found.has(identity))found.set(identity,label)};
 getItemStatEntries(record).forEach(stat=>add(stat.key));
 buildEquipmentPrimaryStats(record).forEach(stat=>add(stat.label));
 const result=[...found.values()].sort((a,b)=>a.localeCompare(b,"pt-BR"));
 if(record&&typeof record==="object")buildRecordStatsCache.set(record,result);
 return result;
}
function buildItemMatches(item,record,selectedStats,mode="any"){
 if(!record)return false;
 const selected=selectedStats.filter(Boolean).map(s=>s.toLocaleLowerCase("pt-BR"));
 if(!selected.length)return true;
 const stats=buildRecordStats(record).map(x=>x.toLocaleLowerCase("pt-BR"));
 return mode==="all"?selected.every(s=>stats.includes(s)):selected.some(s=>stats.includes(s));
}
function buildTypeOptions(){
 const cls=CLASS_DATA.find(x=>x.name===buildState.className);
 const types=cls?.weapons||[];
 ["build-weapon-type","build-weapon-type2"].forEach((id,index)=>{
  const el=$(id);if(!el)return;const current=index?buildState.weaponType2:buildState.weaponType;
  el.innerHTML='<option value="">'+(index?"Sem segunda arma":"Selecione o tipo")+'</option>'+types.map(t=>'<option value="'+escapeHtml(t)+'">'+escapeHtml(t)+'</option>').join("");
  el.value=current;
 });
}
function renderBuildWeaponChoices(){
 const cls=CLASS_DATA.find(x=>x.name===buildState.className),types=cls?.weapons||[];
 [0,1].forEach(index=>{
  const target=document.querySelector('[data-build-weapon-choices="'+index+'"]');
  if(!target)return;
  const selected=index?buildState.weaponType2:buildState.weaponType;
  if(!cls){target.innerHTML='<span class="build-weapon-choice-empty">Selecione uma classe</span>';return}
  const choices=types.map(type=>{
   return '<button type="button" class="build-weapon-choice '+(selected===type?'is-selected':'')+'" data-build-weapon-choice="'+index+'" data-weapon-type="'+escapeHtml(type)+'" aria-label="'+escapeHtml(type)+'" title="'+escapeHtml(type)+'">'+classButtonWeaponIconMarkup(type,cls.name)+'</button>';
  }).join("");
  target.innerHTML=choices;
 });
}
function buildStatsOptions(kind,index){
 const selected=kind==="weapon"?buildState.weaponStats:kind==="accessory"?buildState.accessoryStats:buildState.armorStats;
 const target=$("build-"+kind+"-stat"+(index+1));if(!target)return;
 const armorHasData=kind==="armor"&&Object.keys(buildArmorDetails).length>0;
 if(kind==="armor"?!armorHasData:buildLayerState[kind]!=="ready"){
  const loading=kind==="armor"?Object.values(buildArmorSlotState).some(state=>state==="loading"):buildLayerState[kind]==="loading";
  target.innerHTML='<option value="">'+(loading?"Carregando atributos…":kind==="weapon"?"Selecione o tipo de arma":kind==="armor"?"Acesse um bloco de armadura para carregar seus atributos":"Acesse um slot para carregar acessórios")+'</option>';target.value="";return;
 }
 const records=kind==="weapon"?weapons.filter(w=>weaponType(w)===buildState.weaponType||weaponType(w)===buildState.weaponType2).map(w=>buildWeaponDetails[String(w.id||w.compoundId)]):kind==="accessory"?accessories.map(x=>buildAccessoryDetails[String(x.id||x.compoundId)]):Object.values(buildArmorDetails);
 const options=[...new Set(records.filter(Boolean).flatMap(buildRecordStats))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
 target.innerHTML='<option value="">'+(index?"Sem segunda estatística":"Selecione uma estatística")+'</option>'+options.map(s=>'<option value="'+escapeHtml(s)+'">'+escapeHtml(s)+'</option>').join("");target.value=selected[index]||"";
}
function buildEquipmentSlotIconMarkup(slot){
 const paths={
  weapon:'<path d="m9 8 8 2 21 21-6 6L11 16zM31 8l-7 2-5 5M8 31l7-7M30 12l6-4 4 4-4 6"/>',
  head:'<path d="M10 23a14 14 0 0 1 28 0v4H10z"/><path d="M8 27h32l-3 6H11zM17 15l7 5 7-5M24 20v7"/>',
  chest:'<path d="M16 8 9 13l-4 12 7 4 3-7v18h18V22l3 7 7-4-4-12-7-5-8 5z"/><path d="m16 8 8 5 8-5M24 13v27"/>',
  hands:'<path d="M15 39 9 29l-2-8a2 2 0 0 1 4-1l3 5-2-14a2 2 0 0 1 4-.5l3 12-1-15a2 2 0 0 1 4-.2l2 14 1-11a2 2 0 0 1 4 0l-1 13 3-7a2 2 0 0 1 4 1l-4 17-6 7z"/>',
  legs:'<path d="M13 7h22l-2 17-2 17H21l-1-15-3 15H7l4-18z"/><path d="M24 8v17"/>',
  feet:'<path d="M15 7h16v20l5 6 5 3v5H8v-5l5-5 2-9z"/><path d="M15 27h16M12 35h24"/>',
  back:'<path d="M15 8 24 13l9-5 7 8-5 7 2 18H11l2-18-5-7z"/><path d="m15 8 9 5 9-5M24 13v28"/>',
  necklace:'<path d="M11 8c2 12 7 17 13 20 6-3 11-8 13-20"/><path d="m24 27 5 6-5 8-5-8z"/>',
  ring:'<ellipse cx="24" cy="27" rx="12" ry="14"/><path d="m18 13 6-6 6 6-6 4z"/>',
  belt:'<path d="M5 16h38v16H5z"/><rect x="19" y="18" width="10" height="12" rx="2"/><path d="M24 21v6"/>'
 };
 return '<svg class="build-equipment-slot-glyph" viewBox="0 0 48 48" aria-hidden="true" focusable="false">'+(paths[slot]||paths.chest)+'</svg>';
}
function buildSlotMarkup(slot,label){
 const item=armors.find(x=>String(x.id||x.compoundId)===String(buildState.armor[slot]));
 return '<article class="build-slot build-slot-clickable icon-only '+(item?'has-item':'is-empty')+'" style="--rarity:'+rarityStyle(item||{})+'" data-build-pick="'+slot+'" tabindex="0" role="button" aria-label="Trocar armadura: '+label+'" title="'+(item?escapeHtml(item.name||label):label)+'"><span class="build-slot-icon">'+(item?weaponImageMarkup(item):buildEquipmentSlotIconMarkup(slot))+'</span>'+(item?'<span class="build-slot-name">'+escapeHtml(item.name||label)+'</span><button type="button" class="build-slot-config" data-build-config-open="'+slot+'" aria-label="Configurar '+label+'" title="Configurar equipamento">⚙</button>':"")+'</article>';
}
function buildAccessorySlotMarkup(slot,label){
 const item=accessories.find(x=>String(x.id||x.compoundId)===String(buildState.accessories[slot]));
 const iconSlot=slot==="ring1"||slot==="ring2"?"ring":slot;
 return '<article class="build-slot build-slot-clickable icon-only '+(item?'has-item':'is-empty')+'" style="--rarity:'+rarityStyle(item||{})+'" data-build-pick="'+slot+'" tabindex="0" role="button" aria-label="Trocar acessório: '+label+'" title="'+(item?escapeHtml(item.name||label):label)+'"><span class="build-slot-icon">'+(item?accessoryImageMarkup(item):buildEquipmentSlotIconMarkup(iconSlot))+'</span>'+(item?'<span class="build-slot-name">'+escapeHtml(item.name||label)+'</span><button type="button" class="build-slot-config" data-build-config-open="'+slot+'" aria-label="Configurar '+label+'" title="Configurar equipamento">⚙</button>':"")+'</article>';
}
function renderBuildScreen(){
 if(!$("build-class"))return;
 $("build-class").innerHTML='<option value="">Selecione uma classe</option>'+CLASS_DATA.map(c=>'<option>'+escapeHtml(c.name)+'</option>').join("");
 $("build-armor-slots").innerHTML=BUILD_ARMOR_SLOTS.map(([slot,label])=>buildSlotMarkup(slot,label)).join("");
  $("build-accessory-slots").innerHTML=BUILD_ACCESSORY_SLOTS.map(([slot,label])=>buildAccessorySlotMarkup(slot,label)).join("");
 $("build-class").value=buildState.className;
 buildTypeOptions();buildStatsOptions("weapon",0);buildStatsOptions("weapon",1);buildStatsOptions("armor",0);buildStatsOptions("armor",1);buildStatsOptions("accessory",0);buildStatsOptions("accessory",1);
 const cls=CLASS_DATA.find(x=>x.name===buildState.className);
 $("build-character").innerHTML=cls?'<img src="./assets/images/classes/selection/'+cls.name.toLowerCase()+'.jpg" data-fallback="./assets/images/classes/characters/'+cls.name.toLowerCase()+'.jpg" alt="Arte da classe '+escapeHtml(cls.name)+'" onerror="if(this.dataset.fallback){this.onerror=null;this.src=this.dataset.fallback}else{this.style.display=\'none\'}" onerror="this.style.display=\'none\'"><div class="build-character-caption"><span>PERSONAGEM</span><strong>'+escapeHtml(cls.name)+'</strong><small>THE WORLD OF SETERA</small></div>':'<div class="build-character-placeholder"><span>✧</span><strong>Seu personagem</strong><small>Selecione uma classe para começar</small></div>';
 $("build-class-summary").textContent=cls?cls.role:"Escolha uma classe para liberar as opções de equipamento.";
 renderBuildWeaponChoices();
 $("build-weapon-type").disabled=!cls;$("build-weapon-type2").disabled=!cls;
 $("build-weapon-stat1").disabled=!buildState.weaponType&&!buildState.weaponType2;$("build-weapon-stat2").disabled=!buildState.weaponType&&!buildState.weaponType2;
 $("build-armor-stat1").disabled=!cls;$("build-armor-stat2").disabled=!cls;$("build-accessory-stat1").disabled=!cls;$("build-accessory-stat2").disabled=!cls;
 renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats();
}
function renderBuildWeaponSlots(){
 const types=[buildState.weaponType,buildState.weaponType2];
 $("build-weapon-slots").innerHTML=types.map((type,index)=>{
  const item=weapons.find(w=>String(w.id||w.compoundId)===String(buildState.weapons[index]));
  const label=index?"Arma secundária":"Arma principal";
  if(!type)return '<article class="build-slot build-slot-empty icon-only is-empty" aria-label="'+label+'" title="'+label+'"><span class="build-slot-icon">'+buildEquipmentSlotIconMarkup("weapon")+'</span></article>';
  const cls=CLASS_DATA.find(x=>x.name===buildState.className);
  return '<article class="build-slot build-slot-clickable icon-only '+(item?'has-item':'is-empty')+'" style="--rarity:'+rarityStyle(item||{})+'" data-build-weapon-pick="'+index+'" tabindex="0" role="button" aria-label="Trocar '+label+' · '+escapeHtml(type)+'" title="'+(item?escapeHtml(item.name||label):label+' · '+escapeHtml(type))+'"><span class="build-slot-icon">'+(item?weaponImageMarkup(item):classButtonWeaponIconMarkup(type,cls?.name))+'</span>'+(item?'<span class="build-slot-name">'+escapeHtml(item.name||label)+'</span><button type="button" class="build-slot-config" data-build-config-open="weapon'+index+'" aria-label="Configurar '+label+'" title="Configurar equipamento">⚙</button>':"")+'</article>';
 }).join("");
}
function buildWeaponResultsMarkup(type,index){
 const stats=buildState.weaponStats.filter(Boolean);
 const rows=weapons.filter(w=>weaponType(w)===type).filter(w=>buildItemMatches(w,buildWeaponDetails[String(w.id||w.compoundId)],stats,"all")).sort(compareItemPriority).slice(0,30);
 return '<section class="build-suggestion-group"><h4>'+escapeHtml(index?"Arma secundária":"Arma principal")+' · '+escapeHtml(type)+' <span>'+rows.length+' sugestões</span></h4>'+(buildLayerState.weapon!=="ready"?'<p class="build-empty">Carregando fichas e atributos…</p>':rows.length?'<div class="build-result-list">'+rows.map(w=>'<button type="button" class="build-result" style="--rarity:'+rarityStyle(w)+'" data-build-weapon="'+index+'" data-id="'+escapeHtml(w.id||w.compoundId)+'"><span class="build-result-icon">'+weaponImageMarkup(w)+'</span><span><strong>'+escapeHtml(w.name)+'</strong><small>'+escapeHtml(rarity(w))+' · '+escapeHtml(buildRecordStats(buildWeaponDetails[String(w.id||w.compoundId)]).filter(s=>stats.includes(s)).join(" · ")||type)+'</small></span></button>').join("")+'</div>':'<p class="build-empty">Nenhuma arma encontrada com a combinação selecionada.</p>')+'</section>';
}
function renderBuildArmorSlots(){
 $("build-armor-slots").innerHTML=BUILD_ARMOR_SLOTS.map(([slot,label])=>buildSlotMarkup(slot,label)).join("");
 $("build-accessory-slots").innerHTML=BUILD_ACCESSORY_SLOTS.map(([slot,label])=>buildAccessorySlotMarkup(slot,label)).join("");
}
function renderBuildSummaryStats(record){
 const rows=getItemStatEntries(record).map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance)+'</small></div>');
 return rows.length?'<div class="stat-list">'+rows.join("")+'</div>':'<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
}
function buildSelectedEquipment(){
  const selected=[];
  buildState.weapons.forEach((id,index)=>{if(!id)return;const item=weapons.find(w=>String(w.id||w.compoundId)===String(id));if(item)selected.push({slot:"weapon"+index,label:index?"Arma secundária":"Arma principal",item,record:buildWeaponDetails[String(item.id||item.compoundId)],kind:"weapon"})});
  BUILD_ARMOR_SLOTS.forEach(([slot,label])=>{const id=buildState.armor[slot];if(!id)return;const item=armors.find(x=>String(x.id||x.compoundId)===String(id));if(item)selected.push({slot,label,item,record:buildArmorDetails[String(item.id||item.compoundId)],kind:"armor"})});
  BUILD_ACCESSORY_SLOTS.forEach(([slot,label])=>{const id=buildState.accessories[slot];if(!id)return;const item=accessories.find(x=>String(x.id||x.compoundId)===String(id));if(item)selected.push({slot,label,item,record:buildAccessoryDetails[String(item.id||item.compoundId)],kind:"accessory"})});
  return selected;
}
function buildSelectedSlotRecord(slot){const entry=buildSelectedEquipment().find(x=>x.slot===slot);return entry?{...entry,record:entry.record?{...entry.item,...entry.record}:null}:null}
function renderBuildCompactOptions(item){
  const stats=item?.itemStats||{},grade=itemGradeInfo(item),score=itemCurrentGearScore(item);
  const levels=findWeaponAttackLevels(item)||findArmorDefenseLevels(item)||findAccessoryGearScore(item)?.levels||null;
  const gear=levels?renderGearScoreControl(item,levels,"Equipment Score"):"";
  const source=stats.suffixes,suffixes=source&&typeof source==="object"?Object.values(source).filter(x=>x&&typeof x==="object"):[];
  const suffixAllowed=grade.suffix!==false&&(grade.suffix===true||suffixes.length>0),currentSuffix=String(equipmentRollSelection(item).suffix||"");
  const suffix=suffixAllowed?'<label class="build-config-field"><span>Sufixo</span><select data-suffix-select data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'"><option value="">Sem sufixo</option>'+suffixes.map((option,index)=>'<option value="'+index+'" '+(currentSuffix===String(index)?"selected":"")+'>'+escapeHtml(option.name||("Sufixo "+(index+1)))+'</option>').join("")+'</select>'+(currentSuffix!==""&&suffixes[Number(currentSuffix)]?'<small class="build-config-option-stats">'+optionStatsMarkup(suffixes[Number(currentSuffix)],score)+'</small>':"")+'</label>':"";
  const limit=Number(grade.perkCount??stats.perkCount),candidates=[...perkEntries(stats.commonPerks),...perkEntries(stats.perks)],seen=new Set(),selected=equipmentRollSelection(item).perks||[],perks=[];
  if(Number.isFinite(limit)&&limit>0)candidates.forEach(perk=>{const key=String(perk.id||perk.name||"").toLowerCase();if(!key||seen.has(key))return;seen.add(key);perks.push('<label class="build-config-perk"><input type="checkbox" data-perk-select data-item-roll-id="'+escapeHtml(equipmentRollKey(item))+'" data-perk-key="'+escapeHtml(key)+'" data-perk-limit="'+limit+'" '+(selected.includes(key)?"checked":"")+'><span><strong>'+escapeHtml(perk.name||"Perk")+'</strong><small class="build-config-option-stats">'+optionStatsMarkup(perk,score)+'</small></span></label>')});
  const perkBlock=perks.length?'<div class="build-config-perks"><div class="build-config-label">Perks <small data-perk-counter><span>'+selected.length+'/'+limit+'</span></small></div><div class="build-config-perk-list">'+perks.join("")+'</div></div>':"";
  const controls=gear+suffix+perkBlock;
  return controls||'<p class="build-config-empty">Este equipamento não possui opções de Equipment Score, sufixos ou perks configuráveis na ficha disponível.</p>';
}
function renderBuildItemConfig(){
 const panel=$("build-item-config");if(!panel)return;
 const entry=selectedBuildSlot?buildSelectedSlotRecord(selectedBuildSlot):null;
 if(!entry){panel.hidden=true;panel.innerHTML="";return}
 panel.hidden=false;
 const heading='<div class="build-item-config-heading"><div><small>'+escapeHtml(entry.label)+' · '+escapeHtml(rarity(entry.item))+'</small><strong>'+escapeHtml(entry.item.name||"Equipamento")+'</strong></div><button type="button" data-build-config-close aria-label="Fechar configuração">×</button></div>';
 panel.innerHTML='<div class="build-item-config-backdrop" data-build-config-close></div><div class="build-item-config-dialog" role="dialog" aria-modal="true" aria-label="Configuração do equipamento">'+heading+'<div class="build-item-config-controls">'+(entry.record?renderBuildCompactOptions(entry.record):'<p class="build-config-empty">Carregando opções de configuração…</p>')+'</div></div>';
}
async function openBuildItemConfig(slot){
 selectedBuildSlot=slot;renderBuildItemConfig();
 const entry=buildSelectedSlotRecord(slot);if(!entry)return;
 const pending=entry.kind==="weapon"?loadBuildLayer("weapon"):entry.kind==="accessory"?loadBuildLayer("accessory"):loadBuildArmorSlot(slot);
 await pending;if(selectedBuildSlot===slot)renderBuildItemConfig();
}
function renderBuildTotals(){
 const selected=buildSelectedEquipment(),target=$("build-selected-stats");if(!target)return;
  const totalEquipmentSlots=2+BUILD_ARMOR_SLOTS.length+BUILD_ACCESSORY_SLOTS.length;
  const scoreSum=selected.reduce((sum,entry)=>{const item=entry.record?{...entry.item,...entry.record}:entry.item;const value=itemCurrentGearScore(item);return sum+(Number.isFinite(value)&&value>0?value:0)},0);
  const average=scoreSum/totalEquipmentSlots;
  const averageMarkup='<div class="build-summary-average"><span>Média do Equip Score</span><strong>'+average.toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1})+'</strong><small>'+selected.length+' de '+totalEquipmentSlots+' posições equipadas · vagas contam como 0</small></div>';
 if(!selected.length){target.innerHTML=averageMarkup+'<p class="build-empty">Selecione equipamentos para visualizar a soma dos atributos da build.</p>';return}
 const totals=new Map();
 const add=(key,label,raw)=>{
  if(raw===null||raw===undefined||raw==="")return;
  const source=String(formatStatValue(key,raw)??raw).replace(/,/g,"."),match=source.match(/-?\d+(?:\.\d+)?/);if(!match)return;
  const value=Number(match[0]);if(!Number.isFinite(value))return;
  const suffix=source.slice(match[0].length).trim(),identity=normalizeStatIdentity(key||label);
  const current=totals.get(identity)||{label:label||humanizeStat(key),value:0,suffix};
  current.value+=value;if(!current.suffix&&suffix)current.suffix=suffix;totals.set(identity,current);
 };
 selected.forEach(entry=>{
  const item=entry.record?{...entry.item,...entry.record}:entry.item;
  getItemStatEntries(item).forEach(stat=>add(stat.key,stat.label,stat.value));
  const selection=equipmentRollSelection(entry.item),score=itemCurrentGearScore(item),stats=item?.itemStats||{};
  const suffixes=stats.suffixes&&typeof stats.suffixes==="object"?Object.values(stats.suffixes).filter(x=>x&&typeof x==="object"):[];
  const chosen=suffixes[Number(selection.suffix)];
  if(chosen)optionStatEntries(chosen,score).forEach(stat=>add(stat.key,stat.label,stat.value));
  const candidates=[...perkEntries(stats.commonPerks),...perkEntries(stats.perks)],selectedPerks=selection.perks||[],seen=new Set();
  candidates.forEach(perk=>{const key=String(perk.id||perk.name||"").toLowerCase();if(!key||seen.has(key)||!selectedPerks.includes(key))return;seen.add(key);optionStatEntries(perk,score).forEach(stat=>add(stat.key,stat.label,stat.value))});
 });
 const groupOrder=["attributes","attack","defense","life","lifeskill","utility"];
 const groupLabels={attributes:"Atributos",attack:"Ataque",defense:"Defesa",life:"Vida e Recuperação",lifeskill:"Life Skill",utility:"Utilidade"};
 const classify=stat=>{
  const key=normalizeStatIdentity(stat.identity||stat.key||stat.label),label=normalizeStatIdentity(stat.label||"");
  const value=key+" "+label;
  if(/^(strength|dexterity|intelligence|vitality|wisdom|constitution|luck|agility|willpower)$/.test(key)||/(strength|dexterity|intelligence|vitality|wisdom|constitution|forca|destreza|inteligencia|vitalidade|sabedoria)/.test(value))return "attributes";
  if(/(gather|harvest|mining|fishing|craft|process|lifeskill|life.?skill|skinning|woodcut|forag|herbal|cook|farm|logging|gatheringmastery|miningmastery|fishingpower|harvestingamount|coleta|minera|pesca|fabric|cozinh|cultiv|plantio)/.test(value))return "lifeskill";
  if(/(damage.*reduc|reduc.*damage|damage.?taken.?reduction|damage.?resistance|reduce.?damage|dano.*reduc|reduc.*dano|dano.?recebido|reduz.?dano|mitigation|defense|defence|armor|armour|resistance|block|parry|guard|defesa|resistencia|bloqueio|apar)/.test(value))return "defense";
  if(/(health|healing|heal|hitpoint|(^|[^a-z])hp|life|stamina|mana|regen|recovery|restoration|cura|vida|vigor|recuper)/.test(value))return "life";
  if(/(attack|damage|critical|crit|stagger|penetration|power|offense|offensive|ataque|dano|critico|ofens)/.test(value))return "attack";
  return "utility";
 };
 const groups=new Map(groupOrder.map(key=>[key,[]]));
 [...totals.values()].sort((a,b)=>a.label.localeCompare(b.label,"pt-BR")).forEach(stat=>groups.get(classify(stat)).push(stat));
 const groupMarkup=groupOrder.filter(key=>groups.get(key).length).map(key=>'<section class="build-total-group build-total-group-'+key+'"><header><h4>'+groupLabels[key]+'</h4><small>'+groups.get(key).length+(groups.get(key).length===1?' atributo':' atributos')+'</small></header><div class="build-total-group-grid">'+groups.get(key).map(stat=>'<div class="build-total-stat"><span>'+escapeHtml(stat.label)+'</span><strong>'+escapeHtml(stat.value.toLocaleString("pt-BR",{maximumFractionDigits:2}))+(stat.suffix||"")+'</strong></div>').join("")+'</div></section>').join("");
 target.innerHTML=averageMarkup+(groupMarkup||'<p class="build-empty">As fichas selecionadas ainda não disponibilizaram atributos numéricos somáveis.</p>');
}
function renderBuildSelectedStats(){renderBuildTotals();renderBuildItemConfig()}
function buildPickerStatsMarkup(record){
 const rows=getItemStatEntries(record).map(entry=>'<div class="co-bp-stat"><span class="co-bp-stat-name">'+escapeHtml(entry.label)+'</span><strong class="co-bp-stat-value">'+escapeHtml(formatStatValue(entry.key,entry.value??"Valor não informado"))+'</strong>'+(entry.chance?'<small class="co-bp-stat-chance">'+escapeHtml(entry.chance)+'</small>':"")+'</div>');
 if(!rows.length){
  const names=buildRecordStats(record);
  return names.length?'<div class="co-bp-stats">'+names.map(name=>'<div class="co-bp-stat"><span class="co-bp-stat-name">'+escapeHtml(name)+'</span><strong class="co-bp-stat-value">Valor não informado</strong></div>').join("")+'</div>':'<div class="co-bp-no-stats">Atributos não disponíveis na ficha sincronizada.</div>';
 }
 return '<div class="co-bp-stats">'+rows.join("")+'</div>';
}
function buildPickerTypeRows(source,kind,type){
 if(!Array.isArray(source))return [];
 let index=buildPickerIndexCache.get(source);
 if(!index){
  index=new Map();
  source.forEach(item=>{
   const key=kind==="weapon"?weaponType(item):String(item.subCategory||"").toLowerCase();
   if(!index.has(key))index.set(key,[]);
   index.get(key).push(item);
  });
  buildPickerIndexCache.set(source,index);
 }
 return index.get(type)||[];
}
async function buildPickList(slot,anchor){
 const isWeapon=slot==="weapon0"||slot==="weapon1",isAccessory=BUILD_ACCESSORY_SLOTS.some(([key])=>key===slot),kind=isWeapon?"weapon":isAccessory?"accessory":"armor";
 const type=isWeapon?(slot==="weapon0"?buildState.weaponType:buildState.weaponType2):isAccessory?(slot==="ring1"||slot==="ring2"?"ring":slot):slot;
 const stats=isWeapon?buildState.weaponStats.filter(Boolean):isAccessory?buildState.accessoryStats.filter(Boolean):buildState.armorStats.filter(Boolean);
 const source=isWeapon?weapons:isAccessory?accessories:armors;
 const details=isWeapon?buildWeaponDetails:isAccessory?buildAccessoryDetails:buildArmorDetails;
 const picker=$("build-picker"),equipmentPanel=document.querySelector(".bp2-equipment");
 buildPickerAnchor=anchor;equipmentPanel.classList.add("is-picking");if(picker.parentElement!==equipmentPanel)equipmentPanel.appendChild(picker);
 $("build-picker-title").textContent=isWeapon?"Selecionar arma":isAccessory?"Selecionar acessório":"Selecionar armadura";
 const activeKind=kind;document.querySelectorAll("#build-picker [data-picker-stat-kind]").forEach(panel=>{panel.hidden=panel.dataset.pickerStatKind!==activeKind});
 const typedRows=buildPickerTypeRows(source,kind,type);
 let buildPickerStatsReady=!stats.length;
 const getRows=()=>typedRows.filter(item=>!buildPickerRarity||rarity(item)===buildPickerRarity)
  .filter(item=>!buildPickerStatsReady||!stats.length||buildItemMatches(item,details[String(item.id||item.compoundId)],stats,"all"));
 const render=()=>{
  if(buildPickerAnchor!==anchor||picker.hidden)return;
  const rows=getRows(),visibleRows=rows.slice(0,buildPickerLimit);
  $("build-picker-list").innerHTML=visibleRows.length?visibleRows.map(item=>{
   const key=String(item.id||item.compoundId),record=details[key]?{...item,...details[key]}:item;
   return '<article class="co-bp-item" style="--rarity:'+rarityStyle(item)+'"><button type="button" class="co-bp-item-select" data-build-choose="'+kind+'" data-slot="'+slot+'" data-id="'+escapeHtml(item.id||item.compoundId)+'"><span class="co-bp-item-head"><span class="co-bp-item-icon">'+(isAccessory?accessoryImageMarkup(item):weaponImageMarkup(item))+'</span><span class="co-bp-item-title"><strong>'+escapeHtml(item.name)+'</strong><small>'+escapeHtml(rarity(item))+'</small></span></span></button><div class="co-bp-stats-inline">'+buildPickerStatsMarkup(record)+'</div></article>';
  }).join(""):'<p class="build-empty">Nenhuma peça disponível com os filtros atuais.</p>';
  if(rows.length>visibleRows.length)$("build-picker-list").insertAdjacentHTML("beforeend",'<button type="button" class="co-bp-more" data-build-more>Exibir mais ('+(rows.length-visibleRows.length)+' restantes)</button>');
  $("build-picker-rarity").value=buildPickerRarity;
 };
 $("build-picker-list").innerHTML='<p class="build-empty">Preparando equipamentos…</p>';
 picker.hidden=false;
 // Exibe imediatamente o catálogo. Com filtros por atributos, a lista provisória
 // continua navegável até as fichas carregarem; depois os filtros são aplicados.
 const pending=kind==="armor"?loadBuildArmorSlot(slot):loadBuildLayer(kind);
 render();
 if(stats.length){
  pending.then(loaded=>{if(buildPickerAnchor!==anchor)return;buildPickerStatsReady=!!loaded;render()});
 }else{
  pending.then(loaded=>{if(loaded&&buildPickerAnchor===anchor)render()});
 }
}
const BUILD_LAYER_CONFIG={
 weapon:{manifest:"weapon-details-manifest.json",label:"armas",assign:data=>{buildWeaponDetails=data}},
 accessory:{manifest:"accessory-details-manifest.json",label:"acessórios",assign:data=>{buildAccessoryDetails=data}}
};
function updateBuildLayerStatus(){
 const status=$("build-data-status");if(!status)return;
 const loaded=Object.keys(buildLayerState).filter(key=>buildLayerState[key]==="ready").map(key=>BUILD_LAYER_CONFIG[key]?.label).filter(Boolean);
 const loading=Object.keys(buildLayerState).filter(key=>buildLayerState[key]==="loading").map(key=>BUILD_LAYER_CONFIG[key]?.label).filter(Boolean);
 const armorLoaded=Object.keys(buildArmorSlotState).filter(slot=>buildArmorSlotState[slot]==="ready").map(slot=>BUILD_ARMOR_SLOTS.find(x=>x[0]===slot)?.[1]).filter(Boolean);
 const armorLoading=Object.keys(buildArmorSlotState).filter(slot=>buildArmorSlotState[slot]==="loading").map(slot=>BUILD_ARMOR_SLOTS.find(x=>x[0]===slot)?.[1]).filter(Boolean);
 if(loading.length||armorLoading.length)status.textContent="Carregando "+[...loading,...armorLoading.map(x=>"armaduras ("+x+")")].join(", ")+"… As demais categorias permanecem sob demanda.";
 else if(loaded.length||armorLoaded.length)status.textContent="Dados carregados: "+[...loaded,...(armorLoaded.length?["armaduras: "+armorLoaded.join(", ")]:[])].join("; ")+". Os demais tipos serão carregados quando acessados.";
 else status.textContent="Selecione a classe e o tipo de arma para começar. As fichas serão carregadas por etapa.";
}
async function loadBuildArmorSlot(slot){
 if(!Object.prototype.hasOwnProperty.call(buildArmorSlotState,slot))return false;
 if(buildArmorSlotState[slot]==="ready")return true;
 if(buildArmorSlotPromises[slot])return buildArmorSlotPromises[slot];
 buildArmorSlotState[slot]="loading";if(buildLayerState.armor!=="ready")buildLayerState.armor="loading";
 updateBuildLayerStatus();buildStatsOptions("armor",0);buildStatsOptions("armor",1);
 buildArmorSlotPromises[slot]=(async()=>{
  try{
   if(!buildArmorBuildManifestPromise)buildArmorBuildManifestPromise=fetch("./data/armor-build-manifest.json?v=20261123a",{cache:"force-cache"}).then(response=>{if(!response.ok)throw new Error("Manifesto de armaduras indisponível.");return response.json()});
   const manifest=await buildArmorBuildManifestPromise,parts=manifest.categories?.[slot]||[];
   if(!parts.length)throw new Error("Não há arquivos registrados para este tipo de armadura.");
   const responses=await Promise.all(parts.map(async name=>{const response=await fetch("./data/"+encodeURIComponent(name)+"?v=20261123a",{cache:"force-cache"});if(!response.ok)throw new Error("Falha ao carregar "+name);return response.json()}));
   const received={};responses.forEach(part=>Object.assign(received,part.items||{}));
   Object.assign(buildArmorDetails,received);buildArmorSlotState[slot]="ready";buildLayerState.armor="ready";
   updateBuildLayerStatus();buildStatsOptions("armor",0);buildStatsOptions("armor",1);renderBuildSelectedStats();return true;
  }catch(error){
   buildArmorBuildManifestPromise=null;buildArmorSlotState[slot]="idle";buildArmorSlotPromises[slot]=null;
   if(!Object.values(buildArmorSlotState).includes("ready"))buildLayerState.armor="idle";
   const status=$("build-data-status");if(status)status.textContent="Não foi possível carregar "+(BUILD_ARMOR_SLOTS.find(x=>x[0]===slot)?.[1]||"armaduras")+": "+(error.message||"erro desconhecido")+". Tente novamente.";
   buildStatsOptions("armor",0);buildStatsOptions("armor",1);return false;
  }
 })();
 return buildArmorSlotPromises[slot];
}
async function loadBuildLayer(kind){
 if(buildLayerState[kind]==="ready")return true;
 if(buildLayerPromises[kind])return buildLayerPromises[kind];
 const config=BUILD_LAYER_CONFIG[kind];if(!config)return false;

 buildLayerState[kind]="loading";updateBuildLayerStatus();buildStatsOptions(kind,0);buildStatsOptions(kind,1);
 buildLayerPromises[kind]=(async()=>{
  try{
   const response=await fetch("./data/"+config.manifest+"?v=20261123b",{cache:"force-cache"});
   if(!response.ok)throw new Error("Manifesto não encontrado: "+config.manifest);
   const manifest=await response.json();
   const parts=await Promise.all(manifest.parts.map(async name=>{
    const res=await fetch("./data/"+encodeURIComponent(name)+"?v=20261123b",{cache:"force-cache"});
    if(!res.ok)throw new Error("Falha ao ler "+name);
    return res.json();
   }));
   const all={};parts.forEach(part=>Object.assign(all,part.items||{}));
   config.assign(all);buildLayerState[kind]="ready";updateBuildLayerStatus();buildStatsOptions(kind,0);buildStatsOptions(kind,1);if(kind==="weapon"){$("build-weapon-stat1").disabled=!buildState.weaponType&&!buildState.weaponType2;$("build-weapon-stat2").disabled=!buildState.weaponType&&!buildState.weaponType2}renderBuildSelectedStats();return true;
  }catch(error){
   buildLayerState[kind]="idle";buildLayerPromises[kind]=null;
   const status=$("build-data-status");if(status)status.textContent="Não foi possível carregar "+config.label+": "+(error.message||"erro desconhecido")+". Tente novamente ao acessar esta categoria.";
   buildStatsOptions(kind,0);buildStatsOptions(kind,1);return false;
  }
 })();
 return buildLayerPromises[kind];
}
function closeBuildPicker(){const picker=$("build-picker");picker.hidden=true;document.querySelector(".bp2-equipment")?.classList.remove("is-picking");buildPickerAnchor=null}

/* BUILD PLANNER — biblioteca local, cópias e comparação de resumos */
const BUILD_LIBRARY_STORAGE_KEY="chronoOdysseyCompanion.builds.v1";
let activeSavedBuildId="";
function cloneBuildData(value){return JSON.parse(JSON.stringify(value??{}))}
function readSavedBuilds(){try{const value=JSON.parse(localStorage.getItem(BUILD_LIBRARY_STORAGE_KEY)||"[]");return Array.isArray(value)?value.filter(item=>item&&item.id&&item.buildState):[]}catch(error){return []}}
function writeSavedBuilds(items){try{localStorage.setItem(BUILD_LIBRARY_STORAGE_KEY,JSON.stringify(items));return true}catch(error){setBuildLibraryStatus("Não foi possível salvar. O armazenamento local pode estar cheio ou indisponível.");return false}}
function setBuildLibraryStatus(message){const node=$("build-library-status");if(node)node.textContent=message}
function parseBuildSummaryNumber(value){const match=String(value??"").match(/[-+]?\d[\d.]*,?\d*/);if(!match)return null;const number=Number(match[0].replace(/\./g,"").replace(",", "."));return Number.isFinite(number)?number:null}
function captureBuildSummary(){
 const root=$("build-selected-stats");if(!root)return {average:0,averageDisplay:"0,0",stats:[]};
 const averageDisplay=root.querySelector(".build-summary-average strong")?.textContent?.trim()||"0,0",average=parseBuildSummaryNumber(averageDisplay)??0,stats=[];
 root.querySelectorAll(".build-total-group").forEach(group=>{
  const groupName=group.querySelector("header h4")?.textContent?.trim()||"Outros";
  group.querySelectorAll(".build-total-stat").forEach(row=>{const label=row.querySelector("span")?.textContent?.trim(),display=row.querySelector("strong")?.textContent?.trim();if(label&&display)stats.push({group:groupName,label,display,value:parseBuildSummaryNumber(display)})});
 });
 return {average,averageDisplay,stats};
}
function captureCurrentBuild(name,existing){return {id:existing?.id||("build-"+Date.now()+"-"+Math.random().toString(36).slice(2,8)),name:String(name||"Build sem nome").trim(),createdAt:existing?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString(),buildState:cloneBuildData(buildState),equipmentRollState:cloneBuildData(equipmentRollState),summary:captureBuildSummary()}}
function formatBuildDate(value){const date=new Date(value);return Number.isNaN(date.getTime())?"":date.toLocaleDateString("pt-BR")}
function renderBuildLibrary(){
 const builds=readSavedBuilds(),saved=$("build-saved-select"),a=$("build-compare-a"),b=$("build-compare-b");if(!saved||!a||!b)return;
 const previousSaved=activeSavedBuildId||saved.value,previousA=a.value,previousB=b.value,options='<option value="">Selecione uma build</option>'+builds.map(item=>'<option value="'+escapeHtml(item.id)+'">'+escapeHtml(item.name)+' · '+formatBuildDate(item.updatedAt||item.createdAt)+'</option>').join("");
 saved.innerHTML=options;a.innerHTML=options;b.innerHTML=options;
 if(builds.some(item=>item.id===previousSaved))saved.value=previousSaved;
 if(builds.some(item=>item.id===previousA))a.value=previousA;else if(builds.length)a.value=builds[0].id;
 if(builds.some(item=>item.id===previousB))b.value=previousB;else if(builds.length>1)b.value=builds[1].id;
 const hasSelected=!!saved.value;
 ["build-load-selected","build-duplicate-selected","build-update-selected","build-delete-selected"].forEach(id=>{const button=$(id);if(button)button.disabled=!hasSelected});
 const compare=$("build-compare-run");if(compare)compare.disabled=builds.length<2||!a.value||!b.value||a.value===b.value;
 if(!builds.length){saved.innerHTML='<option value="">Nenhuma build salva</option>';a.innerHTML='<option value="">Nenhuma build salva</option>';b.innerHTML='<option value="">Nenhuma build salva</option>'}
}
function hydrateBuildDetails(){
 const tasks=[];buildSelectedEquipment().forEach(entry=>{
  if(entry.kind==="weapon"&&buildLayerState.weapon!=="ready")tasks.push(loadBuildLayer("weapon"));
  else if(entry.kind==="accessory"&&buildLayerState.accessory!=="ready")tasks.push(loadBuildLayer("accessory"));
  else if(entry.kind==="armor")tasks.push(loadBuildArmorSlot(entry.slot));
 });
 return Promise.all(tasks).then(()=>renderBuildSelectedStats());
}
function refreshBuildAfterCatalogLoad(){
 if(!$("build-class"))return;renderBuildScreen();
 if(buildState.weapons.some(Boolean)||Object.values(buildState.armor||{}).some(Boolean)||Object.values(buildState.accessories||{}).some(Boolean))hydrateBuildDetails();
}
function applySavedBuild(record){
 if(!record?.buildState)return false;
 const state=cloneBuildData(record.buildState);Object.keys(buildState).forEach(key=>{if(!(key in state))delete buildState[key]});Object.assign(buildState,state);
 if(!Array.isArray(buildState.weapons))buildState.weapons=["",""];
 if(!buildState.armor||typeof buildState.armor!=="object")buildState.armor={};
 if(!buildState.accessories||typeof buildState.accessories!=="object")buildState.accessories={};
 if(!Array.isArray(buildState.weaponStats))buildState.weaponStats=["",""];
 if(!Array.isArray(buildState.armorStats))buildState.armorStats=["",""];
 if(!Array.isArray(buildState.accessoryStats))buildState.accessoryStats=["",""];
 Object.keys(equipmentRollState).forEach(key=>delete equipmentRollState[key]);Object.assign(equipmentRollState,cloneBuildData(record.equipmentRollState||{}));
 activeSavedBuildId=record.id;const name=$("build-name-input");if(name)name.value=record.name||"";
 selectedBuildSlot="";closeBuildPicker();renderBuildScreen();renderBuildLibrary();
 setBuildLibraryStatus('Build "'+(record.name||"Sem nome")+'" carregada. Edite a configuração e use Atualizar para salvar as alterações.');
 hydrateBuildDetails();return true;
}
function saveNewBuild(){
 const name=$("build-name-input")?.value.trim();if(!name){setBuildLibraryStatus("Informe um nome para salvar a build.");$("build-name-input")?.focus();return}
 const builds=readSavedBuilds(),record=captureCurrentBuild(name);builds.push(record);if(!writeSavedBuilds(builds))return;
 activeSavedBuildId=record.id;renderBuildLibrary();setBuildLibraryStatus('Build "'+name+'" salva neste navegador.');
}
function updateSelectedBuild(){
 const id=$("build-saved-select")?.value;if(!id){setBuildLibraryStatus("Selecione uma build salva para atualizar.");return}
 const builds=readSavedBuilds(),index=builds.findIndex(item=>item.id===id);if(index<0){setBuildLibraryStatus("A build selecionada não foi encontrada.");renderBuildLibrary();return}
 const record=captureCurrentBuild($("build-name-input")?.value.trim()||builds[index].name,builds[index]);builds[index]=record;
 if(!writeSavedBuilds(builds))return;activeSavedBuildId=id;renderBuildLibrary();setBuildLibraryStatus('Build "'+record.name+'" atualizada.');
}
function duplicateSelectedBuild(){
 const id=$("build-saved-select")?.value,source=readSavedBuilds().find(item=>item.id===id);if(!source){setBuildLibraryStatus("Selecione uma build salva para criar uma cópia.");return}
 const builds=readSavedBuilds(),copy=cloneBuildData(source);copy.id="build-"+Date.now()+"-"+Math.random().toString(36).slice(2,8);copy.name=(source.name||"Build")+" - Cópia";copy.createdAt=new Date().toISOString();copy.updatedAt=copy.createdAt;
 builds.push(copy);if(!writeSavedBuilds(builds))return;applySavedBuild(copy);setBuildLibraryStatus('Cópia "'+copy.name+'" criada. As alterações nela não modificam a build original.');
}
function deleteSelectedBuild(){
 const id=$("build-saved-select")?.value,builds=readSavedBuilds(),record=builds.find(item=>item.id===id);if(!record){setBuildLibraryStatus("Selecione uma build salva para excluir.");return}
 if(!window.confirm('Excluir a build "'+record.name+'"? Esta ação não pode ser desfeita.'))return;
 if(!writeSavedBuilds(builds.filter(item=>item.id!==id)))return;if(activeSavedBuildId===id)activeSavedBuildId="";renderBuildLibrary();setBuildLibraryStatus('Build "'+record.name+'" excluída do armazenamento local.');
}
function renderBuildComparison(){
 const idA=$("build-compare-a")?.value,idB=$("build-compare-b")?.value,builds=readSavedBuilds(),left=builds.find(item=>item.id===idA),right=builds.find(item=>item.id===idB),target=$("build-comparison-results");if(!target)return;
 if(!left||!right||left.id===right.id){target.hidden=true;target.innerHTML="";setBuildLibraryStatus("Selecione duas builds diferentes para comparar.");return}
 const sa=left.summary||{average:0,averageDisplay:"0,0",stats:[]},sb=right.summary||{average:0,averageDisplay:"0,0",stats:[]};
 const cls=(x,y)=>x>y?"is-higher":x<y?"is-lower":"is-equal";
 const arrow=(a,b)=>b>a?'<span class="bp2-compare-arrow is-higher" aria-hidden="true">↑</span>':b<a?'<span class="bp2-compare-arrow is-lower" aria-hidden="true">↓</span>':"";
 const mapA=new Map((sa.stats||[]).map(stat=>[stat.group+"::"+stat.label,stat])),mapB=new Map((sb.stats||[]).map(stat=>[stat.group+"::"+stat.label,stat])),keys=[...new Set([...mapA.keys(),...mapB.keys()])],groupNames=[...new Set(keys.map(key=>key.split("::")[0]))];
 const groups=groupNames.map(group=>{
  const rows=keys.filter(key=>key.startsWith(group+"::")).map(key=>{
   const x=mapA.get(key),y=mapB.get(key),vx=x?.value??0,vy=y?.value??0;
   return '<div class="bp2-compare-row"><span class="bp2-compare-stat-name">'+escapeHtml(x?.label||y?.label||"Atributo")+'</span><strong class="bp2-compare-value '+(x&&y?cls(vx,vy):"")+'">'+(x?escapeHtml(x.display):"—")+'</strong><strong class="bp2-compare-value '+(x&&y?cls(vy,vx):"")+'">'+(y?escapeHtml(y.display):"—")+(x&&y?arrow(vx,vy):"")+'</strong></div>';
  }).join("");
  return '<section class="bp2-compare-group"><h5>'+escapeHtml(group)+'</h5>'+rows+'</section>';
 }).join("");
 const averageA=Number(sa.average)||0,averageB=Number(sb.average)||0;
 target.innerHTML='<div class="bp2-compare-result-heading"><div><span>COMPARAÇÃO DE RESUMOS</span><strong>'+escapeHtml(left.name)+' <small>vs.</small> '+escapeHtml(right.name)+'</strong></div><button type="button" class="bp2-compare-close" data-build-compare-close aria-label="Fechar comparação">×</button></div><div class="bp2-compare-average"><span>Gear Score médio</span><strong class="'+cls(averageA,averageB)+'">'+escapeHtml(sa.averageDisplay||"0,0")+'</strong><strong class="'+cls(averageB,averageA)+'">'+escapeHtml(sb.averageDisplay||"0,0")+arrow(averageA,averageB)+'</strong></div><div class="bp2-compare-column-head"><span></span><strong>'+escapeHtml(left.name)+'</strong><strong>'+escapeHtml(right.name)+'</strong></div>'+groups;
 target.hidden=false;setBuildLibraryStatus("Comparação atualizada. As setas destacam a diferença da build B em relação à build A.");
}
function initBuildLibrary(){
 if(!$("build-save-new"))return;
 [["build-library-toggle","build-library-content"],["build-comparator-toggle","build-comparator-content"]].forEach(([toggleId,contentId])=>{
  const toggle=$(toggleId),content=$(contentId);if(!toggle||!content)return;
  toggle.addEventListener("click",()=>{const expanded=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(expanded));content.hidden=!expanded;});
 });
 renderBuildLibrary();
 $("build-save-new").addEventListener("click",saveNewBuild);
 $("build-load-selected").addEventListener("click",()=>{const record=readSavedBuilds().find(item=>item.id===$("build-saved-select").value);if(record)applySavedBuild(record)});
 $("build-duplicate-selected").addEventListener("click",duplicateSelectedBuild);
 $("build-update-selected").addEventListener("click",updateSelectedBuild);
 $("build-delete-selected").addEventListener("click",deleteSelectedBuild);
 $("build-saved-select").addEventListener("change",()=>{activeSavedBuildId=$("build-saved-select").value;const record=readSavedBuilds().find(item=>item.id===activeSavedBuildId);if(record&&$("build-name-input"))$("build-name-input").value=record.name||"";renderBuildLibrary()});
 ["build-compare-a","build-compare-b"].forEach(id=>$(id).addEventListener("change",()=>{const run=$("build-compare-run");if(run)run.disabled=!$("build-compare-a").value||!$("build-compare-b").value||$("build-compare-a").value===$("build-compare-b").value}));
 $("build-compare-run").addEventListener("click",renderBuildComparison);
 $("build-comparison-results").addEventListener("click",event=>{if(event.target.closest("[data-build-compare-close]"))$("build-comparison-results").hidden=true});
}

function initBuildPlanner(){
 document.addEventListener("click",e=>{
  const choice=e.target.closest("[data-build-weapon-choice]");
  if(!choice)return;
  const index=Number(choice.dataset.buildWeaponChoice),select=$("build-weapon-type"+(index?"2":""));
  if(!select)return;
  select.value=choice.dataset.weaponType||"";
  select.dispatchEvent(new Event("change",{bubbles:true}));
 });
 $("build-class").addEventListener("change",e=>{buildState.className=e.target.value;buildState.weaponType="";buildState.weaponType2="";buildState.weapons=["",""];buildState.armor={};buildState.weaponStats=["",""];buildState.armorStats=["",""];renderBuildScreen()});
 ["build-weapon-type","build-weapon-type2"].forEach((id,index)=>$(id).addEventListener("change",e=>{if(index){buildState.weaponType2=e.target.value;buildState.weapons[1]=""}else{buildState.weaponType=e.target.value;buildState.weapons[0]=""}buildState.weaponStats=["",""];renderBuildScreen()}));
 [0,1].forEach(index=>$("build-weapon-stat"+(index+1)).addEventListener("focus",async()=>{if((buildState.weaponType||buildState.weaponType2)&&buildLayerState.weapon!=="ready"){await loadBuildLayer("weapon");buildStatsOptions("weapon",0);buildStatsOptions("weapon",1)}}));
 [["accessory",0],["accessory",1]].forEach(([kind,index])=>$("build-"+kind+"-stat"+(index+1)).addEventListener("focus",async()=>{if(buildLayerState[kind]!=="ready"){await loadBuildLayer(kind);buildStatsOptions(kind,0);buildStatsOptions(kind,1)}}));
 [["weapon",0],["weapon",1],["armor",0],["armor",1],["accessory",0],["accessory",1]].forEach(([kind,index])=>$("build-"+kind+"-stat"+(index+1)).addEventListener("change",e=>{const arr=kind==="weapon"?buildState.weaponStats:kind==="armor"?buildState.armorStats:buildState.accessoryStats;arr[index]=e.target.value;if(index===0&&arr[0]&&arr[0]===arr[1])arr[1]="";closeBuildPicker();buildStatsOptions(kind,0);buildStatsOptions(kind,1);renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats()}));
 document.addEventListener("click",e=>{
  const closeConfig=e.target.closest("[data-build-config-close]");if(closeConfig){selectedBuildSlot="";renderBuildItemConfig();return}
   const configure=e.target.closest("[data-build-config-open]");if(configure){openBuildItemConfig(configure.dataset.buildConfigOpen);return}
  const detailsToggle=e.target.closest(".co-bp-details-toggle");if(detailsToggle){const card=detailsToggle.closest(".co-bp-item"),details=card?.querySelector(".co-bp-details");if(details){details.hidden=!details.hidden;detailsToggle.setAttribute("aria-expanded",String(!details.hidden));detailsToggle.textContent=details.hidden?"Ver atributos e efeitos":"Ocultar detalhes"}return}
  const more=e.target.closest("[data-build-more]");if(more){buildPickerLimit+=30;const anchor=buildPickerAnchor;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildPickList(slot,anchor);return}
  const chosen=e.target.closest("[data-build-choose]");if(chosen){const id=chosen.dataset.id,slot=chosen.dataset.slot;if(chosen.dataset.buildChoose==="weapon"){const index=slot==="weapon0"?0:1;buildState.weapons[index]=id}else if(chosen.dataset.buildChoose==="accessory")buildState.accessories[slot]=id;else buildState.armor[slot]=id;selectedBuildSlot=slot;closeBuildPicker();renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats();openBuildItemConfig(slot);return}
  if(e.target.closest("#build-picker"))return;
  const pick=e.target.closest("[data-build-pick]");if(pick){const slot=pick.dataset.buildPick;selectedBuildSlot="";renderBuildItemConfig();buildPickerLimit=30;buildPickList(slot,pick);return}
  const wp=e.target.closest("[data-build-weapon-pick]");if(wp){const slot="weapon"+wp.dataset.buildWeaponPick;selectedBuildSlot="";renderBuildItemConfig();buildPickerLimit=30;buildPickList(slot,wp);return}
  const result=e.target.closest("[data-build-weapon]");if(result){buildState.weapons[Number(result.dataset.buildWeapon)]=result.dataset.id;renderBuildWeaponSlots();return}
  const armorResult=e.target.closest("[data-build-armor]");if(armorResult){buildState.armor[armorResult.dataset.buildArmor]=armorResult.dataset.id;renderBuildArmorSlots()}
 });
 $("build-picker-rarity").addEventListener("change",e=>{buildPickerRarity=e.target.value;buildPickerLimit=30;const anchor=buildPickerAnchor;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildPickList(slot,anchor)});
 $("build-picker-close").addEventListener("click",closeBuildPicker);
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("build-item-config").hidden){selectedBuildSlot="";renderBuildItemConfig();return}if((e.key==="Enter"||e.key===" ")&&e.target.matches(".build-slot-clickable")){e.preventDefault();const el=e.target;if(el.dataset.buildPick)buildPickList(el.dataset.buildPick,el);else buildPickList("weapon"+el.dataset.buildWeaponPick,el)}});
 renderBuildScreen();updateBuildLayerStatus();initBuildLibrary();
}

document.addEventListener("click",event=>{
 const button=event.target.closest("[data-catalog-view][data-catalog-target]");if(!button)return;
 const kind=button.dataset.catalogTarget,mode=button.dataset.catalogView;
 if(!["weapons","armor","accessories"].includes(kind)||!["list","grid"].includes(mode))return;
 catalogViewModes[kind]=mode;
 const listId=kind==="weapons"?"weapon-list":kind==="armor"?"armor-list":"accessory-list";
 if(kind==="weapons")renderList();else if(kind==="armor")renderArmorList();else renderAccessoryList();
 applyCatalogView(kind,listId);
});
renderClasses();loadData();loadArmorData();loadAccessoryData();initBuildPlanner();
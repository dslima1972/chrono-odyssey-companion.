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
const $=id=>document.getElementById(id);
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
 return '<img class="'+extraClass+'" src="'+escapeHtml(candidates[0])+'" data-image-candidates="'+escapeHtml(JSON.stringify(candidates))+'" data-image-index="0" alt="Imagem de '+escapeHtml(item.name||"acessório")+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="weaponImageLoaded(this)" onerror="accessoryImageFallback(this)">'
}

function rarityColorForLabel(label){const i=RARITIES.indexOf(label);return i<0?"var(--text)":RARITY_COLORS[i]}
function fillRarityOptions(id){const el=$(id);if(!el)return;const selected=el.value;el.innerHTML='<option value="">Todas as raridades</option>'+RARITIES.map(label=>'<option value="'+label+'" style="color:'+rarityColorForLabel(label)+'">'+label+'</option>').join("");el.value=selected}
function updateWeaponTypeOptions(){const className=$("class-filter").value,current=$("type-filter").value;const available=[...new Set(weapons.filter(w=>!className||weaponClass(w)===className).map(weaponType).filter(x=>x&&x!=="Tipo não identificado"))].sort((a,b)=>a.localeCompare(b,"pt-BR"));$("type-filter").innerHTML='<option value="">Todos os tipos</option>'+available.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");$("type-filter").value=available.includes(current)?current:""}
function fillFilters(){const classes=[...new Set(weapons.map(weaponClass).filter(Boolean))].sort();$("class-filter").innerHTML='<option value="">Todas as classes</option>'+classes.map(x=>'<option>'+escapeHtml(x)+'</option>').join("");updateWeaponTypeOptions();fillRarityOptions("rarity-filter")}
function compareItemPriority(a,b){const ga=Number(a.grade),gb=Number(b.grade),va=Number.isFinite(ga)?ga:99,vb=Number.isFinite(gb)?gb:99;return va-vb||String(a.name||"").localeCompare(String(b.name||""),"pt-BR")}
function filtered(){const q=$("search").value.trim().toLowerCase(),c=$("class-filter").value,t=$("type-filter").value,r=$("rarity-filter").value,s=$("weapon-stat-filter")?.value||"";return weapons.filter(w=>(!q||String(w.name||"").toLowerCase().includes(q)||String(w.id||"").includes(q))&&(!c||weaponClass(w)===c)&&(!t||weaponType(w)===t)&&(!r||rarity(w)===r)&&(!s||itemHasStat(w,"weapon",s))).sort(compareItemPriority)}
function renderList(){const rows=filtered();$("catalog-count").textContent=weapons.length?rows.length+" / "+weapons.length+" REGISTROS":"CATÁLOGO AINDA NÃO SINCRONIZADO";if(!weapons.length){$("weapon-list").innerHTML='<div class="empty-state">O catálogo ainda não foi carregado.<br>Assim que a primeira sincronização do Questlog terminar, as armas aparecerão aqui.</div>';return}if(!rows.length){$("weapon-list").innerHTML='<div class="empty-state">Nenhuma arma corresponde aos filtros selecionados.</div>';return}$("weapon-list").innerHTML=rows.map(w=>{const type=weaponType(w),color=rarityStyle(w);return '<button class="weapon-row '+(selected&&selected.id===w.id?'selected':'')+'" data-id="'+escapeHtml(w.id)+'" style="--rarity:'+color+'"><span class="weapon-symbol"><span>'+iconFor(type)+'</span>'+weaponImageMarkup(w)+'</span><span><span class="weapon-name">'+escapeHtml(w.name||"Item sem nome")+'</span><span class="weapon-meta">'+escapeHtml(weaponClass(w)||"Classe não mapeada")+' · '+escapeHtml(type)+'</span></span><span class="rarity-label">'+escapeHtml(rarity(w))+'</span></button>'}).join("");document.querySelectorAll("#weapon-list .weapon-row").forEach(b=>b.addEventListener("click",()=>selectWeapon(b.dataset.id)))}
let itemDetailsDataPromise;
const STAT_LABELS={increasedamage:"Aumento de dano",addmaximummana:"Mana máxima",damageonstagger:"Dano contra alvo cambaleante",attack:"Ataque",basicattack:"Ataque",basicatk:"Ataque",criticalchance:"Chance crítica",criticaldamage:"Dano crítico",defense:"Defesa",physicaldefense:"Defesa física",defensephysical:"Defesa física",physicaldefence:"Defesa física",defencephysical:"Defesa física",physicalarmor:"Defesa física",physicalarmour:"Defesa física",magicdefense:"Defesa mágica",magicaldefense:"Defesa mágica",defensemagic:"Defesa mágica",defensemagical:"Defesa mágica",magicdefence:"Defesa mágica",magicaldefence:"Defesa mágica",defencemagic:"Defesa mágica",defencemagical:"Defesa mágica",magicarmor:"Defesa mágica",magicalarmor:"Defesa mágica",healing:"Cura",health:"Vida",maxhealth:"Vida máxima",maxhp:"HP máximo",maxlife:"Vida máxima",bagweightincrease:"Aumento da capacidade de peso",bagweightcapacityboost:"Aumento da capacidade de peso",stamina:"Vigor",liferegenpersecond:"Regeneração de vida por segundo",criticalhitchance:"Chance de acerto crítico",criticalhitdamage:"Dano crítico",criticalhitdamagereduce:"Redução de dano crítico",criticalhitresistance:"Resistência a acerto crítico",movementspeed:"Velocidade de movimento",reducedamage:"Redução de dano",decreasemanacostfactor:"Redução do custo de mana",staggerenforce:"Potência de cambaleio",movementspeedfactor:"Velocidade de movimento"};

// Rótulos amigáveis para os atributos identificados nas fichas sincronizadas do Questlog.
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
   const score=typeof defaultGearScore==="function"?defaultGearScore(item,levels):null;
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
function defaultGearScore(item,levels){
 const entries=Object.entries(levels||{}).filter(([key,value])=>Number.isFinite(Number(key))&&value!==null&&value!==undefined).sort((a,b)=>Number(a[0])-Number(b[0]));
 if(!entries.length)return 1;
 const tier=Number.parseInt(item?.itemInfo?.tier,10);
 const tierDefaults={1:1,2:5,3:15,4:25,5:40};
 const preferred=tierDefaults[tier];
 if(preferred!==undefined&&levels[String(preferred)]!==undefined)return preferred;
 return Number(entries[0][0]);
}
function renderGearScoreControl(item,levels,label){
 if(!levels||typeof levels!=="object")return "";
 const entries=Object.entries(levels).filter(([key,value])=>Number.isFinite(Number(key))&&value!==null&&value!==undefined).sort((a,b)=>Number(a[0])-Number(b[0]));
 if(!entries.length)return "";
 const min=Number(entries[0][0]),max=Number(entries[entries.length-1][0]),initial=Math.min(max,Math.max(min,defaultGearScore(item,levels)));
 return '<div class="gear-score-control"><div class="gear-score-heading"><label>Gear Score</label><strong><span class="gear-score-current">'+initial+'</span><small> · '+escapeHtml(label)+'</small></strong></div><input class="gear-score-slider" type="range" min="'+min+'" max="'+max+'" step="1" value="'+initial+'" aria-label="Selecionar Gear Score"><div class="gear-score-scale"><span>'+min+'</span><span>'+max+'</span></div></div>';
}
function renderWeaponStats(item){
 const levels=findWeaponAttackLevels(item);
 let entries=dedupeStatEntries(getItemStatEntries(item)).filter(entry=>statFamily(entry.identity)!=="attack");
 if(levels){
  const score=defaultGearScore(item,levels),attackValue=levels[String(score)]??Object.values(levels)[0];
  entries.unshift({key:"attack",identity:"attack",label:"Ataque",value:attackValue,chance:"",gearScoreMap:escapeHtml(JSON.stringify(levels))});
 }
 if(!entries.length)return '<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
 const stats='<div class="stat-list">'+entries.map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong '+(entry.gearScoreMap?'data-gear-score-map="'+entry.gearScoreMap+'"':'')+'>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance||"")+'</small></div>').join("")+'</div>';
 return (levels?renderGearScoreControl(item,levels,"Ataque"):"")+stats;
}

function renderAttackProgression(item){const levels=findWeaponAttackLevels(item);if(!levels||typeof levels!=="object")return "";const entries=Object.entries(levels).sort((a,b)=>Number(a[0])-Number(b[0]));if(!entries.length)return "";const first=entries[0],last=entries[entries.length-1];return '<details class="detail-disclosure"><summary>Progressão de ataque por Gear Score <span>'+escapeHtml(first[1])+' → '+escapeHtml(last[1])+'</span></summary><div class="progression-grid">'+entries.map(([level,value])=>'<div><small>Nível '+escapeHtml(level)+'</small><strong>'+escapeHtml(value)+'</strong></div>').join("")+'</div></details>'}
function optionListMarkup(title,rows,kind){
 if(!rows.length)return "";
 const listClass="detail-option-list";
 const expand=rows.length>5?'<button type="button" class="detail-expand-button" data-expand-options aria-expanded="false">Exibir mais ('+(rows.length-5)+')</button>':"";
 return '<section class="detail-section"><h4>'+escapeHtml(title)+' <span class="detail-option-count">'+rows.length+'</span></h4><div class="'+listClass+' '+kind+'">'+rows.join("")+'</div>'+expand+'</section>';
}
function renderSuffixes(item){
 const suffixes=item?.itemStats?.suffixes;
 if(!suffixes||typeof suffixes!=="object")return "";
 const rows=Object.values(suffixes).filter(s=>s&&typeof s==="object").map(s=>{
  const levels=s.gearScore&&typeof s.gearScore==="object"?Object.entries(s.gearScore).sort((a,b)=>Number(a[0])-Number(b[0])):[];
  const first=levels[0]?.[1],last=levels[levels.length-1]?.[1];
  const values=[first?.statValue1??first?.value,last?.statValue1??last?.value].filter(v=>v!=null).map(v=>formatStatValue(s.statType??s.type,v));
  const chance=Number.isFinite(Number(s.chancePercentage))?' · '+Number(s.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'% de chance':"";
  return '<div class="suffix-row detail-option-row"><strong>'+escapeHtml(s.name||"Sufixo")+'</strong><span>'+escapeHtml((values.length?values.join(" → "):"Valores por nível disponíveis na fonte")+chance)+'</span></div>';
 });
 return optionListMarkup("Sufixos disponíveis",rows,"suffix-options");
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
 const stats=item?.itemStats||{},info=item?.itemInfo||{};
 const candidates=[
  ...perkEntries(stats.commonPerks),
  ...perkEntries(stats.perks)
 ];
 const seen=new Set(),rows=[];
 for(const perk of candidates){
  const key=String(perk.id||perk.name||"").toLowerCase();
  if(!key||seen.has(key))continue;seen.add(key);
  const stat=perk.statType?humanizeStat(perk.statType):"";
  const range=perkValueRange(perk);
  const chance=Number.isFinite(Number(perk.chancePercentage))?'Chance: '+Number(perk.chancePercentage).toLocaleString("pt-BR",{maximumFractionDigits:2})+'%':"";
  const meta=[stat,range,chance].filter(Boolean).join(" · ");
  rows.push('<div class="perk-row detail-option-row"><strong>'+escapeHtml(perk.name||"Perk")+'</strong><span>'+escapeHtml(meta||"Efeito informado na ficha")+'</span></div>');
 }
 const unique=info.uniquePerk??stats.uniquePerk;
 for(const perk of perkEntries(unique)){
  const key=String(perk.id||perk.name||perk.description||"").toLowerCase();
  if(!key||seen.has("unique:"+key))continue;seen.add("unique:"+key);
  rows.push('<div class="perk-row detail-option-row unique-perk"><strong>'+escapeHtml(perk.name||"Perk exclusivo")+' <small>Exclusivo</small></strong><span>'+escapeHtml(perk.description||"Efeito descrito na ficha do item")+'</span></div>');
 }
 for(const perk of perkEntries(info.specialPerks??stats.specialPerks)){
  const key=String(perk.id||perk.name||perk.description||"").toLowerCase();
  if(!key||seen.has("special:"+key))continue;seen.add("special:"+key);
  rows.push('<div class="perk-row detail-option-row unique-perk"><strong>'+escapeHtml(perk.name||"Perk especial")+' <small>Especial</small></strong><span>'+escapeHtml(perk.description||"Efeito descrito na ficha do item")+'</span></div>');
 }
 return optionListMarkup("Perks disponíveis",rows,"perk-options");
}
function compactMeta(label,value){if(value===undefined||value===null||value==="")return "";return '<span class="detail-meta-chip"><small>'+escapeHtml(label)+'</small><strong>'+escapeHtml(Array.isArray(value)?value.join(", "):String(value))+'</strong></span>'}
function detailedWeaponMarkup(w,item){const info=item?.itemInfo||{},grade=item?.equipmentGradeInfo||{},attack=item?.equipmentStats?.attack;const quick=compactMeta("ID",w.id||w.compoundId)+compactMeta("Nível",info.requiredLevel)+compactMeta("Tier",info.tier);const fields=[detailField("Peso",info.weight),detailField("Durabilidade máxima",info.maxDurability),detailField("Classes compatíveis",info.classes),detailField("Pode reforçar",info.canReinforce===true?"Sim":info.canReinforce===false?"Não":null),detailField("Sockets de gema",grade.gemSocket===true?"Sim":grade.gemSocket===false?"Não":null),detailField("Quantidade de perks",grade.perkCount??item?.itemStats?.perkCount)].filter(Boolean).join("");return '<section class="detail-section stats-primary"><h4>Atributos e efeitos</h4>'+renderWeaponStats(item)+'</section>'+renderAttackProgression(item)+renderSuffixes(item)+renderPerks(item)+(fields?'<details class="detail-disclosure"><summary>Outras informações do equipamento</summary><div class="detail-fields">'+fields+'</div></details>':"")+'<p class="detail-note">Dados sincronizados da ficha individual do Questlog. Última sincronização: '+escapeHtml(itemDetailsGeneratedAt||"não informada")+'.</p>'}
let itemDetailsGeneratedAt="";
async function getItemDetails(){if(!itemDetailsDataPromise)itemDetailsDataPromise=(async()=>{const manifestResponse=await fetch("./data/weapon-details-manifest.json?v=20261122f",{cache:"no-store"});if(!manifestResponse.ok)throw new Error("Manifesto local de detalhes das armas não encontrado (HTTP "+manifestResponse.status+").");const manifest=await manifestResponse.json();if(!Array.isArray(manifest.parts)||!manifest.parts.length)throw new Error("O manifesto não contém a lista de partes dos detalhes das armas.");const responses=await Promise.all(manifest.parts.map(async name=>{const response=await fetch("./data/"+encodeURIComponent(name)+"?v=20261122f",{cache:"no-store"});if(!response.ok)throw new Error("Não foi possível carregar "+name+" (HTTP "+response.status+").");return response.json()}));const allItems={};for(const part of responses)Object.assign(allItems,part.items||{});itemDetailsGeneratedAt=manifest.generatedAt?new Date(manifest.generatedAt).toLocaleString("pt-BR"):"não informada";return allItems})();return itemDetailsDataPromise}
function detailMarkup(w){const type=weaponType(w),color=rarityStyle(w),meta=compactMeta("ID",w.id||w.compoundId);return '<div class="detail-panel" style="--rarity:'+color+'"><div class="detail-top"><div class="detail-icon"><span>'+iconFor(type)+'</span>'+weaponImageMarkup(w)+'</div><div class="detail-heading-copy"><h3>'+escapeHtml(w.name||"Item sem nome")+'</h3><p>'+escapeHtml(weaponClass(w)||"Classe não mapeada")+' · '+escapeHtml(type)+'</p><div class="detail-rarity">'+escapeHtml(rarity(w))+'</div><div class="detail-header-meta">'+meta+'</div></div></div><div class="detail-live" id="detail-live"><p class="detail-muted"><span class="spinner"></span>Carregando dados sincronizados…</p></div><a class="detail-source" href="https://questlog.gg/chrono-odyssey/en/db/item/'+encodeURIComponent(w.id||w.compoundId||"")+'" target="_blank" rel="noreferrer">CONSULTAR FICHA NO QUESTLOG ↗</a></div>'}
async function loadItemDetails(w,panelRoot){
 const id=String(w.id||w.compoundId||"");if(!id||!panelRoot)return;
 const target=panelRoot.querySelector(".detail-live");if(!target)return;
 try{
  const all=await getItemDetails(),item=all[id]||all[id.replace(/^item-/,"")];
  if(!item)throw new Error("Esta arma ainda não consta no arquivo sincronizado. Execute a sincronização do Questlog.");
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selected&&String(selected.id||selected.compoundId)===id)current.innerHTML=detailedWeaponMarkup(w,item);
  const meta=current?.closest(".detail-panel")?.querySelector(".detail-header-meta");
  if(meta)meta.insertAdjacentHTML("beforeend",compactMeta("Nível",item?.itemInfo?.requiredLevel)+compactMeta("Tier",item?.itemInfo?.tier));
 }catch(error){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selected&&String(selected.id||selected.compoundId)===id)current.innerHTML='<p class="detail-muted detail-error">Não foi possível carregar os atributos locais. '+escapeHtml(error.message||"Verifique se a sincronização foi concluída.")+' Você ainda pode consultar a ficha original pelo link abaixo.</p>';
 }
}
function selectWeapon(id){
 selected=weapons.find(w=>String(w.id)===String(id)||String(w.compoundId)===String(id))||null;if(!selected)return;
 renderList();$("weapon-detail").innerHTML=detailMarkup(selected);$("weapon-detail").classList.remove("empty-detail");loadItemDetails(selected,$("weapon-detail"));
 if(window.matchMedia("(max-width:760px)").matches){
  $("mobile-detail").innerHTML='<button class="mobile-back" id="mobile-back">← VOLTAR AO ARSENAL</button>'+detailMarkup(selected);
  $("mobile-detail").hidden=false;loadItemDetails(selected,$("mobile-detail"));
  $("mobile-back").addEventListener("click",()=>$("mobile-detail").hidden=true);
 }
}
function classWeaponIconMarkup(type,className){
 const classSlug=String(className||"").toLowerCase().replace(/[^a-z]/g,"");
 const weaponSlug=String(type||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 const image="./assets/classes/weapons/"+classSlug+"-"+weaponSlug+".png.png";
 return '<div class="class-weapon-icon-wrap class-individual-weapon-icon"><img src="'+image+'" alt="Ícone de '+escapeHtml(type)+'" loading="lazy" decoding="async" onerror="this.style.display=\'none\'"></div>';
}
function classVideosMarkup(c){const videos={"Swordsman":[["Em ação","Hxz_qw-wdOw"],["Equipment Showcase","6VfEZLeFBjA"]],"Ranger":[["Em ação","2rFblkC2gkk"],["Equipment Showcase","O2Yp_9yRR4c"]],"Berserker":[["Em ação","CHnwcAWtLYY"],["Equipment Showcase","Y-UWtIb_ljY"]]}[c.name]||[];if(!videos.length)return "";return '<section class="class-section class-video-section"><div class="class-video-heading"><h4>Vídeos da classe</h4><button class="class-video-toggle" type="button" aria-expanded="false">＋ Exibir vídeos</button></div><div class="class-video-content" hidden><div class="class-video-grid">'+videos.map(([label,id])=>'<article class="class-video-card"><h5>'+label+'</h5><div class="class-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/'+id+'" title="'+escapeHtml(c.name+' — '+label)+'" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></article>').join("")+'</div></div></section>'}
function classDetailMarkup(c){const image="./assets/classes/"+c.name.toLowerCase()+".jpg";return '<div class="class-detail-hero"><div class="class-cover-frame"><img class="class-cover" src="'+image+'" alt="Personagem da classe '+escapeHtml(c.name)+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><div class="class-cover-fallback" style="display:none">'+c.icon+'</div></div><div class="class-hero-copy"><span class="class-index">CAMINHO DE COMBATE</span><h3>'+escapeHtml(c.name)+'</h3><p>'+escapeHtml(c.role)+'</p><div class="class-weapon-tags">'+c.weapons.map(w=>'<span>'+escapeHtml(w)+'</span>').join("")+'</div></div></div><div class="class-detail-content"><section class="class-section"><h4>Identidade e estilo de combate</h4><p>'+escapeHtml(c.overview)+'</p><p>'+escapeHtml(c.style)+'</p></section>'+classVideosMarkup(c)+'<section class="class-section"><h4>Armas e especialidades</h4><div class="class-weapon-details">'+c.weaponsInfo.map((w,i)=>'<article class="class-weapon-entry">'+classWeaponIconMarkup(w[0],c.name,i)+'<div class="class-weapon-copy"><h5>'+escapeHtml(w[0])+'</h5><p>'+escapeHtml(w[1])+'</p></div></article>').join("")+'</div></section><div class="class-two-col"><section class="class-section"><h4>Pontos fortes</h4><ul>'+c.strengths.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></section><section class="class-section"><h4>Pontos de atenção</h4><ul>'+c.limits.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul></section></div><section class="class-section"><h4>Combinações de armas</h4><p>'+escapeHtml(c.pairs)+'</p></section><section class="class-section"><h4>Progressão e Matrix</h4><p>'+escapeHtml(c.matrix)+'</p></section><div class="class-source-note"><strong>Nota sobre a confiabilidade</strong><p>'+escapeHtml(c.cbt)+' As informações são um guia de referência baseado no conteúdo do Icy Veins e podem mudar com atualizações do jogo.</p><a href="https://www.icy-veins.com/chrono-odyssey/classes" target="_blank" rel="noreferrer">CONSULTAR GUIA DE CLASSES NO ICY VEINS ↗</a></div></div>'}
function classButtonWeaponIconMarkup(type,className){
 const classSlug=String(className||"").toLowerCase().replace(/[^a-z]/g,"");
 const weaponSlug=String(type||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 const localImage="./assets/classes/buttons/weapons/"+classSlug+"-"+weaponSlug+".png";
 const fallbackPath=String(CLASS_WEAPON_ICONS[type]||"").replace("/","");
 const fallbackImage=fallbackPath?"https://cdn.questlog.gg/chrono-odyssey/"+fallbackPath+".webp":"";
 return '<img class="class-weapon-icon-img" src="'+localImage+'" alt="Ícone de '+escapeHtml(type)+'" loading="lazy" decoding="async" onerror="if(this.dataset.fallback){this.onerror=null;this.src=this.dataset.fallback}else{this.remove()}" data-fallback="'+escapeHtml(fallbackImage)+'">';
}
function renderClasses(){
 const grid=$("class-grid");
 grid.innerHTML=CLASS_DATA.map((c,i)=>{
  const slug=c.name.toLowerCase();
  const image="./assets/classes/buttons/"+slug+".jpg";
  const fallbackImage="./assets/classes/"+slug+".jpg";
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
async function loadData(){try{let data=null,sourceFile="";for(const file of ["./data/questlog-export.json","./data/weapons.json"]){const res=await fetch(file,{cache:"no-store"});if(res.ok){data=await res.json();sourceFile=file;break}}if(!data)throw new Error("Arquivo do catálogo não encontrado");const candidates=[data.items,data.pageData,data.records,data.registros,data?.result?.data?.json?.pageData,data?.result?.data?.pageData,data?.data?.items,data?.data?.pageData];const rawItems=Array.isArray(data)?data:(candidates.find(Array.isArray)||[]);const testItems=rawItems.filter(w=>/\(Test\)/i.test(String(w.name||"")));weapons=rawItems.filter(w=>!w.isDisabled&&!/\(Test\)/i.test(String(w.name||"")));fillFilters();renderList();const stamp=data.updatedAt?new Date(data.updatedAt).toLocaleString("pt-BR"):"data da exportação: 02/10/2026";$("data-status").textContent=rawItems.length+" registros recebidos; "+weapons.length+" armas exibidas; "+testItems.length+" registros de teste ocultados. Fonte: "+sourceFile+". "+stamp+".";if(!weapons.length)$("data-status").textContent="O arquivo foi encontrado, mas não contém uma lista de itens reconhecida. Verifique o formato do export."}catch(e){$("weapon-list").innerHTML='<div class="empty-state">O catálogo exportado ainda não foi enviado. Quando o arquivo Questlog for adicionado à pasta data, as armas aparecerão aqui.</div>';$("data-status").textContent="Aguardando o arquivo data/questlog-export.json enviado ao repositório."}}
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===tab));document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));const target=$(tab.dataset.tab+"-view");if(target)target.classList.add("active");if(tab.dataset.tab==="build")updateBuildLayerStatus()}));
$("search").addEventListener("input",renderList);$("class-filter").addEventListener("change",()=>{updateWeaponTypeOptions();renderList()});["type-filter","rarity-filter"].forEach(id=>$(id).addEventListener("change",renderList));

let armors=[],selectedArmor=null,armorMode="pieces",armorDetailsPromise=null;
let accessories=[],selectedAccessory=null,accessoryDetailsPromise=null;
const ARMOR_TYPES={head:"Cabeça",helmet:"Cabeça",shoulder:"Ombros",shoulders:"Ombros",chest:"Peito",body:"Peito",hands:"Mãos",gloves:"Mãos",waist:"Cintura",legs:"Pernas",pants:"Pernas",feet:"Pés",boots:"Pés",back:"Costas",cloak:"Costas"};
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
 return '<details class="detail-disclosure"><summary>Progressão de defesa por Gear Score <span>'+escapeHtml(entries[0][1])+' → '+escapeHtml(entries[entries.length-1][1])+'</span></summary><div class="progression-grid">'+entries.map(([level,value])=>'<div><small>Nível '+escapeHtml(level)+'</small><strong>'+escapeHtml(value)+'</strong></div>').join("")+'</div></details>';
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
   const identity=normalizeStatIdentity(joined);
   const physical=identity==="physicaldefense";
   const magical=identity==="magicdefense";
   if((physical||magical)&&value!==null&&value!==undefined){
    let amount=value,map=null;
    if(typeof value==="object"){
     map=value.gearScore&&typeof value.gearScore==="object"?value.gearScore:null;
     if(map){const sorted=Object.entries(map).sort((a,b)=>Number(a[0])-Number(b[0]));amount=map[String(score)]??map["1"]??sorted[0]?.[1]}
     else amount=value.statValue??value.value??value.amount??value.statValue1??value.baseValue;
    }
    if(amount!==undefined&&amount!==null&&(typeof amount!=="object"||Array.isArray(amount))){
     const target=physical?"physical":"magical";
     if(found[target]===null)found[target]={value:amount,map};
    }
   }
   if(value&&typeof value==="object"&&!Array.isArray(value))walk(value,next,depth+1);
  }
 }
 walk(item?.equipmentStats||{},["equipmentStats"]);
 walk(item?.itemStats||{},["itemStats"]);
 const rows=[];
 if(found.physical!==null)rows.push(["Defesa física",found.physical]);
 if(found.magical!==null)rows.push(["Defesa mágica",found.magical]);
 if(!rows.length)return "";
 return '<div class="stat-list armor-defense-stats">'+rows.map(([label,data])=>'<div class="stat-line"><span>'+label+'</span><strong '+(data.map?'data-gear-score-map="'+escapeHtml(JSON.stringify(data.map))+'"':'')+'>'+escapeHtml(data.value)+'</strong><small></small></div>').join("")+'</div>';
}
function renderArmorStats(item){
 const levels=findArmorDefenseLevels(item),score=levels?defaultGearScore(item,levels):1;
 const entries=dedupeStatEntries(getItemStatEntries(item)).filter(entry=>!["physicaldefense","magicdefense"].includes(statFamily(entry.identity)));
 const baseRows=entries.map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance||"")+'</small></div>').join("");
 const defenses=renderArmorDefenseAttributes(item,score);
 const defenseRows=defenses.replace(/^<div class="stat-list armor-defense-stats">/,"").replace(/<\/div>$/,"");
 const rows=baseRows+defenseRows;
 const stats=rows?'<div class="stat-list">'+rows+'</div>':'<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
 return (levels?renderGearScoreControl(item,levels,"Defesa"):"")+stats;
}

function detailedArmorMarkup(item,catalogItem){
 const info=item?.itemInfo||{},grade=item?.equipmentGradeInfo||{};
 const quick=compactMeta("ID",catalogItem.id||catalogItem.compoundId)+compactMeta("Nível",info.requiredLevel)+compactMeta("Tier",info.tier)+compactMeta("Conjunto",armorSetLabel(catalogItem));
 const fields=[detailField("Peso",info.weight),detailField("Durabilidade máxima",info.maxDurability),detailField("Pode reforçar",info.canReinforce===true?"Sim":info.canReinforce===false?"Não":null),detailField("Sockets de gema",grade.gemSocket===true?"Sim":grade.gemSocket===false?"Não":null),detailField("Quantidade de perks",grade.perkCount??item?.itemStats?.perkCount)].filter(Boolean).join("");
 return '<section class="detail-section stats-primary"><h4>Atributos e efeitos</h4>'+renderArmorStats(item)+'</section>'+renderDefenseProgression(item)+renderSuffixes(item)+renderPerks(item)+(fields?'<details class="detail-disclosure"><summary>Outras informações do equipamento</summary><div class="detail-fields">'+fields+'</div></details>':"")+'<p class="detail-note">Dados da ficha individual do Questlog. Os campos não fornecidos pela fonte não são exibidos.</p>';
}
function armorDetailMarkup(item){const type=armorType(item),color=rarityStyle(item),meta=compactMeta("ID",item.id||item.compoundId)+compactMeta("Conjunto",armorSetLabel(item));return '<div class="detail-panel" style="--rarity:'+color+'"><div class="detail-top"><div class="detail-icon"><span>'+armorIcon(item)+'</span>'+weaponImageMarkup(item)+'</div><div class="detail-heading-copy"><h3>'+escapeHtml(item.name||"Armadura")+'</h3><p>'+escapeHtml(type)+' · Equipável por todas as classes</p><div class="detail-rarity">'+escapeHtml(rarity(item))+'</div><div class="detail-header-meta">'+meta+'</div></div></div><div class="detail-live" id="armor-detail-live"><p class="detail-muted">Os atributos serão exibidos após a coleta das fichas individuais.</p></div><a class="detail-source" href="https://questlog.gg/chrono-odyssey/en/db/item/'+encodeURIComponent(item.id||item.compoundId||"")+'" target="_blank" rel="noreferrer">CONSULTAR FICHA NO QUESTLOG ↗</a></div>'}
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
  current.innerHTML=detailedArmorMarkup(record,item);
  const meta=current.closest(".detail-panel")?.querySelector(".detail-header-meta");
  if(meta)meta.insertAdjacentHTML("beforeend",compactMeta("Nível",record?.itemInfo?.requiredLevel)+compactMeta("Tier",record?.itemInfo?.tier));
 }catch(e){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selectedArmor&&String(selectedArmor.id||selectedArmor.compoundId)===id)current.innerHTML='<p class="detail-muted">A ficha detalhada não pôde ser carregada. Verifique se a sincronização do Questlog foi concluída.</p>';
 }
}
function selectArmor(id){
 selectedArmor=armors.find(x=>String(x.id)===String(id)||String(x.compoundId)===String(id));if(!selectedArmor)return;
 renderArmorList();$("armor-detail").innerHTML=armorDetailMarkup(selectedArmor);$("armor-detail").classList.remove("empty-detail");loadArmorDetails(selectedArmor,$("armor-detail"));
 if(window.matchMedia("(max-width:760px)").matches){
  $("armor-mobile-detail").innerHTML='<button class="mobile-back" id="armor-mobile-back">← VOLTAR ÀS ARMADURAS</button>'+armorDetailMarkup(selectedArmor);
  $("armor-mobile-detail").hidden=false;loadArmorDetails(selectedArmor,$("armor-mobile-detail"));
  $("armor-mobile-back").addEventListener("click",()=>$("armor-mobile-detail").hidden=true);
 }
}
function renderArmorList(){
 if(!armors.length){$("armor-catalog-count").textContent="AGUARDANDO CATÁLOGO";$("armor-list").innerHTML='<div class="empty-state">A estrutura do catálogo está pronta. Aguardando a exportação de armaduras do Questlog.</div>';return}
 if(armorMode==="sets"){
  const q=$("armor-search").value.trim().toLowerCase(),type=$("armor-type-filter").value,grade=$("armor-rarity-filter").value,set=$("armor-set-filter").value,stat=$("armor-stat-filter")?.value||"";
  const groups=armorSetGroups.filter(group=>
   (!set||group.label===set)&&
   (!q||group.label.toLowerCase().includes(q)||group.items.some(x=>String(x.name||"").toLowerCase().includes(q)||String(x.id||"").includes(q)))&&
   (!type||group.items.some(x=>armorType(x)===type))&&
   (!grade||group.items.some(x=>rarity(x)===grade))&&
   (!stat||group.items.some(x=>itemHasStat(x,"armor",stat)))
  );
  $("armor-catalog-count").textContent=groups.length+" CONJUNTOS / "+armors.length+" PEÇAS";
  if(!groups.length){$("armor-list").innerHTML='<div class="empty-state">Nenhum conjunto corresponde aos filtros selecionados.</div>';return}
  $("armor-list").innerHTML=groups.map(group=>'<section class="armor-set-group '+(group.complete?"complete":"incomplete")+'"><header><strong>'+escapeHtml(group.label)+'</strong><span>'+(group.complete?"5/5 peças · completo":group.items.length+'/5 peças · incompleto')+'</span></header><div>'+group.items.map(x=>'<button class="weapon-row armor-row" data-id="'+escapeHtml(x.id)+'" style="--rarity:'+rarityStyle(x)+'"><span class="weapon-symbol"><span>'+armorIcon(x)+'</span>'+weaponImageMarkup(x)+'</span><span><span class="weapon-name">'+escapeHtml(x.name||"Armadura")+'</span><span class="weapon-meta">'+escapeHtml(armorType(x))+'</span></span><span class="rarity-label">'+escapeHtml(rarity(x))+'</span></button>').join("")+'</div></section>').join("");
 }else{
  const rows=armorFiltered();$("armor-catalog-count").textContent=rows.length+" / "+armors.length+" PEÇAS";
  if(!rows.length){$("armor-list").innerHTML='<div class="empty-state">Nenhuma armadura corresponde aos filtros selecionados.</div>';return}
  $("armor-list").innerHTML=rows.map(x=>'<button class="weapon-row armor-row '+(selectedArmor&&selectedArmor.id===x.id?"selected":"")+'" data-id="'+escapeHtml(x.id)+'" style="--rarity:'+rarityStyle(x)+'"><span class="weapon-symbol"><span>'+armorIcon(x)+'</span>'+weaponImageMarkup(x)+'</span><span><span class="weapon-name">'+escapeHtml(x.name||"Armadura")+'</span><span class="weapon-meta">'+escapeHtml(armorType(x))+' · '+escapeHtml(armorSetLabel(x))+'</span></span><span class="rarity-label">'+escapeHtml(rarity(x))+'</span></button>').join("");
 }
 document.querySelectorAll("#armor-list .armor-row").forEach(b=>b.addEventListener("click",()=>selectArmor(b.dataset.id)));
}
async function loadArmorData(){
 try{
  const response=await fetch("./data/armor-export.json",{cache:"no-store"});if(!response.ok)throw new Error("Catálogo ainda não enviado.");
  const data=await response.json(),items=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);
  armors=items.filter(x=>!x.isDisabled&&!/\(Test\)/i.test(String(x.name||"")));
  buildArmorSetGroups();fillArmorFilters();renderArmorList();
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
function renderAccessoryList(){
 const rows=accessoryFiltered();$("accessory-catalog-count").textContent=accessories.length?rows.length+" / "+accessories.length+" PEÇAS":"AGUARDANDO CATÁLOGO";
 if(!rows.length){$("accessory-list").innerHTML='<div class="empty-state">'+(accessories.length?"Nenhum acessório corresponde aos filtros selecionados.":"Aguardando a exportação do Questlog.")+'</div>';return}
 $("accessory-list").innerHTML=rows.map(x=>'<button class="weapon-row armor-row '+(selectedAccessory&&String(selectedAccessory.id)===String(x.id)?"selected":"")+'" data-accessory-id="'+escapeHtml(x.id)+'" style="--rarity:'+rarityStyle(x)+'"><span class="weapon-symbol"><span>'+accessoryIcon(x)+'</span>'+accessoryImageMarkup(x)+'</span><span><span class="weapon-name">'+escapeHtml(x.name||"Acessório")+'</span><span class="weapon-meta">'+escapeHtml(accessoryType(x))+'</span></span><span class="rarity-label">'+escapeHtml(rarity(x))+'</span></button>').join("");
 document.querySelectorAll("#accessory-list [data-accessory-id]").forEach(b=>b.addEventListener("click",()=>selectAccessory(b.dataset.accessoryId)));
}
function accessoryDetailMarkup(item){
 return '<div class="detail-panel" style="--rarity:'+rarityStyle(item)+'"><div class="detail-top"><div class="detail-icon"><span>'+accessoryIcon(item)+'</span>'+accessoryImageMarkup(item)+'</div><div class="detail-heading-copy"><h3>'+escapeHtml(item.name||"Acessório")+'</h3><p>'+escapeHtml(accessoryType(item))+'</p><div class="detail-rarity">'+escapeHtml(rarity(item))+'</div><div class="detail-header-meta">'+compactMeta("ID",item.id||item.compoundId)+'</div></div></div><div class="detail-live" id="accessory-detail-live"><p class="detail-muted">Carregando ficha individual do Questlog…</p></div><a class="detail-source" href="https://questlog.gg/chrono-odyssey/en/db/item/'+encodeURIComponent(item.id||item.compoundId||"")+'" target="_blank" rel="noreferrer">CONSULTAR FICHA NO QUESTLOG ↗</a></div>';
}
function renderAccessoryStats(item){
 const entries=dedupeStatEntries(getItemStatEntries(item));
 if(!entries.length)return '<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
 const rows=entries.map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance||"")+'</small></div>').join("");
 return '<div class="stat-list">'+rows+'</div>';
}
function detailedAccessoryMarkup(record,item){
 const info=record?.itemInfo||{},fields=[detailField("Nível requerido",info.requiredLevel),detailField("Tier",info.tier),detailField("Peso",info.weight),detailField("Durabilidade máxima",info.maxDurability),detailField("Pode reforçar",info.canReinforce===true?"Sim":info.canReinforce===false?"Não":null)].filter(Boolean).join("");
 return '<section class="detail-section stats-primary"><h4>Atributos e efeitos</h4>'+renderAccessoryStats(record)+'</section>'+renderSuffixes(record)+renderPerks(record)+(fields?'<details class="detail-disclosure"><summary>Outras informações do acessório</summary><div class="detail-fields">'+fields+'</div></details>':"")+'<p class="detail-note">Dados da ficha individual do Questlog. Campos não fornecidos pela fonte não são exibidos.</p>';
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
   const meta=current.closest(".detail-panel")?.querySelector(".detail-header-meta");
   if(meta)meta.insertAdjacentHTML("beforeend",compactMeta("Nível",record?.itemInfo?.requiredLevel)+compactMeta("Tier",record?.itemInfo?.tier));
  }
 }catch(e){
  const current=panelRoot.querySelector(".detail-live");
  if(current&&selectedAccessory&&String(selectedAccessory.id||selectedAccessory.compoundId)===id)current.innerHTML='<p class="detail-muted">Não foi possível carregar a ficha detalhada: '+escapeHtml(e.message||"erro desconhecido")+'</p>';
 }
}
function selectAccessory(id){
 selectedAccessory=accessories.find(x=>String(x.id)===String(id)||String(x.compoundId)===String(id));if(!selectedAccessory)return;
 renderAccessoryList();$("accessory-detail").innerHTML=accessoryDetailMarkup(selectedAccessory);$("accessory-detail").classList.remove("empty-detail");loadAccessoryDetails(selectedAccessory,$("accessory-detail"));
 if(window.matchMedia("(max-width:760px)").matches){
  $("accessory-mobile-detail").innerHTML='<button class="mobile-back" id="accessory-mobile-back">← VOLTAR AOS ACESSÓRIOS</button>'+accessoryDetailMarkup(selectedAccessory);
  $("accessory-mobile-detail").hidden=false;loadAccessoryDetails(selectedAccessory,$("accessory-mobile-detail"));
  $("accessory-mobile-back").addEventListener("click",()=>$("accessory-mobile-detail").hidden=true);
 }
}
async function loadAccessoryData(){
 try{
  const response=await fetch("./data/accessory-export.json?v=20261123a",{cache:"no-store"});if(!response.ok)throw new Error("Catálogo ainda não enviado.");
  const data=await response.json(),items=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);
  accessories=items.filter(x=>!x.isDisabled);fillAccessoryFilters();renderAccessoryList();
  $("accessory-data-status").textContent=accessories.length+" acessórios carregados: "+accessories.filter(x=>x.subCategory==="necklace").length+" colares, "+accessories.filter(x=>x.subCategory==="ring").length+" anéis e "+accessories.filter(x=>x.subCategory==="belt").length+" cintos. Fichas detalhadas do Questlog.";
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
 const score=String(slider.value),live=slider.closest(".detail-live");
 if(!live)return;
 const current=live.querySelector(".gear-score-current");
 if(current)current.textContent=score;
 live.querySelectorAll("[data-gear-score-map]").forEach(node=>{
  try{const values=JSON.parse(node.getAttribute("data-gear-score-map"));const value=values[score]??values["1"];if(value!==undefined&&value!==null)node.textContent=String(value)}catch(error){}
 });
});
/* Build planner */
let buildWeaponDetails={},buildArmorDetails={},buildAccessoryDetails={};
const buildLayerState={weapon:"idle",armor:"idle",accessory:"idle"};
const buildLayerPromises={weapon:null,armor:null,accessory:null};
const buildArmorSlotState={head:"idle",chest:"idle",hands:"idle",legs:"idle",feet:"idle",back:"idle"};
const buildArmorSlotPromises={head:null,chest:null,hands:null,legs:null,feet:null,back:null};
let buildArmorBuildManifestPromise=null;
let buildPickerRarity="";
let buildPickerLimit=30;
const buildState={className:"",weaponType:"",weaponType2:"",weaponStats:["",""],armorStats:["",""],accessoryStats:["",""],accessories:{},matchModes:{weapon0:"any",weapon1:"any",head:"any",chest:"any",hands:"any",legs:"any",feet:"any",back:"any",necklace:"any",ring1:"any",ring2:"any",belt:"any"},weapons:["",""],armor:{}};
const BUILD_ARMOR_SLOTS=[["head","Cabeça"],["chest","Peito"],["hands","Mãos"],["legs","Pernas"],["feet","Pés"],["back","Costas"]];
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
function buildSlotMarkup(slot,label){
 return '<article class="build-slot build-slot-clickable" data-build-pick="'+slot+'" tabindex="0" role="button" aria-label="Selecionar armadura: '+label+'"><div class="build-slot-icon">'+(ARMOR_TYPE_ICONS[slot]||"✧")+'</div><div class="build-slot-copy"><small>'+label+'</small><strong class="build-slot-name">Não selecionado</strong><span class="build-slot-meta">Clique para escolher uma peça</span></div><span class="build-slot-chevron">⌄</span></article>';
}
function buildAccessorySlotMarkup(slot,label){
 const item=accessories.find(x=>String(x.id||x.compoundId)===String(buildState.accessories[slot]));
 const glyph=accessoryIcon({subCategory:slot==="belt"?"belt":slot==="necklace"?"necklace":"ring"});
 return '<article class="build-slot build-slot-clickable" data-build-pick="'+slot+'" tabindex="0" role="button" aria-label="Selecionar acessório: '+label+'"><div class="build-slot-icon" style="--rarity:'+(item?rarityStyle(item):"var(--gold2)")+'">'+(item?accessoryImageMarkup(item):glyph)+'</div><div class="build-slot-copy"><small>'+label.toUpperCase()+'</small><strong class="build-slot-name">'+escapeHtml(item?.name||"Não selecionado")+'</strong><span class="build-slot-meta">'+(item?escapeHtml(rarity(item)):"Clique para escolher um acessório")+'</span></div><span class="build-slot-chevron">⌄</span></article>';
}
function renderBuildScreen(){
 if(!$("build-class"))return;
 $("build-class").innerHTML='<option value="">Selecione uma classe</option>'+CLASS_DATA.map(c=>'<option>'+escapeHtml(c.name)+'</option>').join("");
 $("build-armor-slots").innerHTML=BUILD_ARMOR_SLOTS.map(([slot,label])=>buildSlotMarkup(slot,label)).join("");
  $("build-accessory-slots").innerHTML=BUILD_ACCESSORY_SLOTS.map(([slot,label])=>buildAccessorySlotMarkup(slot,label)).join("");
 $("build-class").value=buildState.className;
 buildTypeOptions();buildStatsOptions("weapon",0);buildStatsOptions("weapon",1);buildStatsOptions("armor",0);buildStatsOptions("armor",1);buildStatsOptions("accessory",0);buildStatsOptions("accessory",1);
 const cls=CLASS_DATA.find(x=>x.name===buildState.className);
 $("build-character").innerHTML=cls?'<img src="./assets/classes/'+cls.name.toLowerCase()+'.jpg" alt="Arte da classe '+escapeHtml(cls.name)+'" onerror="this.style.display=\'none\'"><div class="build-character-caption"><span>PERSONAGEM</span><strong>'+escapeHtml(cls.name)+'</strong><small>THE WORLD OF SETERA</small></div>':'<div class="build-character-placeholder"><span>✧</span><strong>Seu personagem</strong><small>Selecione uma classe para começar</small></div>';
 $("build-class-summary").textContent=cls?cls.role:"Escolha uma classe para liberar as opções de equipamento.";
 $("build-weapon-type").disabled=!cls;$("build-weapon-type2").disabled=!cls;
 $("build-weapon-stat1").disabled=!buildState.weaponType||buildLayerState.weapon!=="ready";$("build-weapon-stat2").disabled=!buildState.weaponType||buildLayerState.weapon!=="ready";
 $("build-armor-stat1").disabled=!cls;$("build-armor-stat2").disabled=!cls;$("build-accessory-stat1").disabled=!cls;$("build-accessory-stat2").disabled=!cls;
 renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats();
}
function renderBuildWeaponSlots(){
 const types=[buildState.weaponType,buildState.weaponType2];
 $("build-weapon-slots").innerHTML=types.map((type,index)=>{
  const item=weapons.find(w=>String(w.id||w.compoundId)===String(buildState.weapons[index]));
  if(!type)return '<article class="build-slot build-slot-empty"><div class="build-slot-icon">⚔</div><div class="build-slot-copy"><small>'+(index?"ARMA SECUNDÁRIA":"ARMA PRINCIPAL")+'</small><strong>Tipo não selecionado</strong><span>Escolha o tipo de arma acima</span></div></article>';
  return '<article class="build-slot build-slot-clickable" data-build-weapon-pick="'+index+'" tabindex="0" role="button" aria-label="Selecionar '+(index?"arma secundária":"arma principal")+'"><div class="build-slot-icon" style="--rarity:'+(item?rarityStyle(item):"var(--gold2)")+'">'+(item?weaponImageMarkup(item):"⚔")+'</div><div class="build-slot-copy"><small>'+(index?"ARMA SECUNDÁRIA":"ARMA PRINCIPAL")+' · '+escapeHtml(type)+'</small><strong class="build-slot-name">'+escapeHtml(item?.name||"Nenhuma peça selecionada")+'</strong><span class="build-slot-meta">'+(item?escapeHtml(rarity(item)):"Clique para escolher uma arma")+'</span></div><span class="build-slot-chevron">⌄</span></article>';
 }).join("");
}
function buildWeaponResultsMarkup(type,index){
 const stats=buildState.weaponStats.filter(Boolean);
 const rows=weapons.filter(w=>weaponType(w)===type).filter(w=>buildItemMatches(w,buildWeaponDetails[String(w.id||w.compoundId)],stats,buildState.matchModes["weapon"+index]||"any")).sort(compareItemPriority).slice(0,30);
 return '<section class="build-suggestion-group"><h4>'+escapeHtml(index?"Arma secundária":"Arma principal")+' · '+escapeHtml(type)+' <span>'+rows.length+' sugestões</span></h4>'+(buildLayerState.weapon!=="ready"?'<p class="build-empty">Carregando fichas e atributos…</p>':rows.length?'<div class="build-result-list">'+rows.map(w=>'<button type="button" class="build-result" style="--rarity:'+rarityStyle(w)+'" data-build-weapon="'+index+'" data-id="'+escapeHtml(w.id||w.compoundId)+'"><span class="build-result-icon">'+weaponImageMarkup(w)+'</span><span><strong>'+escapeHtml(w.name)+'</strong><small>'+escapeHtml(rarity(w))+' · '+escapeHtml(buildRecordStats(buildWeaponDetails[String(w.id||w.compoundId)]).filter(s=>stats.includes(s)).join(" · ")||type)+'</small></span></button>').join("")+'</div>':'<p class="build-empty">Nenhuma arma encontrada com a combinação selecionada.</p>')+'</section>';
}
function renderBuildArmorSlots(){
 $("build-armor-slots").innerHTML=BUILD_ARMOR_SLOTS.map(([slot,label])=>{
  const item=armors.find(x=>String(x.id||x.compoundId)===String(buildState.armor[slot]));
  return '<article class="build-slot build-slot-clickable" data-build-pick="'+slot+'" tabindex="0" role="button" aria-label="Selecionar armadura: '+label+'"><div class="build-slot-icon" style="--rarity:'+(item?rarityStyle(item):"var(--gold2)")+'">'+(item?weaponImageMarkup(item):ARMOR_TYPE_ICONS[slot]||"✧")+'</div><div class="build-slot-copy"><small>'+label.toUpperCase()+'</small><strong class="build-slot-name">'+escapeHtml(item?.name||"Não selecionado")+'</strong><span class="build-slot-meta">'+(item?escapeHtml(rarity(item)):"Clique para escolher uma peça")+'</span></div><span class="build-slot-chevron">⌄</span></article>';
 }).join("");
  $("build-accessory-slots").innerHTML=BUILD_ACCESSORY_SLOTS.map(([slot,label])=>buildAccessorySlotMarkup(slot,label)).join("");
}
function renderBuildSummaryStats(record){
 const rows=getItemStatEntries(record).map(entry=>'<div class="stat-line"><span>'+escapeHtml(entry.label)+'</span><strong>'+escapeHtml(formatStatValue(entry.key,entry.value))+'</strong><small>'+escapeHtml(entry.chance)+'</small></div>');
 return rows.length?'<div class="stat-list">'+rows.join("")+'</div>':'<p class="detail-muted">A fonte não retornou atributos básicos para este item.</p>';
}
function renderBuildSelectedStats(){
 const selected=[];
 buildState.weapons.forEach((id,index)=>{
  if(!id)return;
  const item=weapons.find(w=>String(w.id||w.compoundId)===String(id));
  if(item)selected.push({label:index?"Arma secundária":"Arma principal",item,record:buildWeaponDetails[String(item.id||item.compoundId)]});
 });
 BUILD_ARMOR_SLOTS.forEach(([slot,label])=>{
  const id=buildState.armor[slot];if(!id)return;
  const item=armors.find(x=>String(x.id||x.compoundId)===String(id));
  if(item)selected.push({label,item,record:buildArmorDetails[String(item.id||item.compoundId)]});
 });
 BUILD_ACCESSORY_SLOTS.forEach(([slot,label])=>{
  const id=buildState.accessories[slot];if(!id)return;
  const item=accessories.find(x=>String(x.id||x.compoundId)===String(id));
  if(item)selected.push({label,item,record:buildAccessoryDetails[String(item.id||item.compoundId)]});
 });
 const target=$("build-selected-stats");if(!target)return;
 if(!selected.length){target.innerHTML='<p class="build-empty">Selecione armas, armaduras ou acessórios para visualizar os atributos registrados nas fichas do Questlog.</p>';return}
 target.innerHTML=selected.map(entry=>'<article class="build-stat-summary-card" style="--rarity:'+rarityStyle(entry.item)+'"><header><span class="build-stat-summary-icon">'+weaponImageMarkup(entry.item)+'</span><span><small>'+escapeHtml(entry.label)+' · '+escapeHtml(rarity(entry.item))+'</small><strong>'+escapeHtml(entry.item.name||"Item")+'</strong></span></header>'+(entry.record?renderBuildSummaryStats(entry.record):'<p class="build-empty">Ficha detalhada não carregada para este item.</p>')+'</article>').join("");
}
function buildPickerStatsMarkup(record){
 const rows=getItemStatEntries(record).slice(0,4).map(entry=>'<span class="build-picker-stat"><small>'+escapeHtml(entry.label)+'</small><strong>'+escapeHtml(formatStatValue(entry.key,entry.value??"Valor não informado"))+'</strong>'+(entry.chance?'<em>'+escapeHtml(entry.chance)+'</em>':"")+'</span>');
 if(!rows.length){
  const names=buildRecordStats(record);
  return names.length?'<div class="build-picker-stats">'+names.slice(0,4).map(name=>'<span class="build-picker-stat"><small>'+escapeHtml(name)+'</small><strong>Valor não informado</strong></span>').join("")+'</div>':'<div class="build-picker-no-stats">Atributos não disponíveis na ficha sincronizada.</div>';
 }
 return '<div class="build-picker-stats">'+rows.join("")+'</div>';
}
async function buildPickList(slot,anchor){
 const isWeapon=slot==="weapon0"||slot==="weapon1",isAccessory=BUILD_ACCESSORY_SLOTS.some(([key])=>key===slot),kind=isWeapon?"weapon":isAccessory?"accessory":"armor";
 let rows=[];
 if(kind==="armor"&&buildArmorSlotState[slot]!=="ready"||kind!=="armor"&&buildLayerState[kind]!=="ready"){
  const picker=$( "build-picker");if(picker.parentElement!==anchor)anchor.appendChild(picker);
  const label=kind==="armor"?(BUILD_ARMOR_SLOTS.find(x=>x[0]===slot)?.[1]||"armaduras"):BUILD_LAYER_CONFIG[kind].label;
  $("build-picker-title").textContent="Carregando "+label+"…";$("build-picker-list").innerHTML='<p class="build-empty">Buscando somente as fichas deste bloco no Questlog…</p>';picker.hidden=false;
  const loaded=kind==="armor"?await loadBuildArmorSlot(slot):await loadBuildLayer(kind);if(!loaded)return;
 }
 if(isWeapon){const type=slot==="weapon0"?buildState.weaponType:buildState.weaponType2;rows=weapons.filter(w=>weaponType(w)===type).filter(w=>buildItemMatches(w,buildWeaponDetails[String(w.id||w.compoundId)],buildState.weaponStats.filter(Boolean),buildState.matchModes[slot]||"any"));}
 else if(isAccessory){const type=slot==="ring1"||slot==="ring2"?"ring":slot;rows=accessories.filter(x=>String(x.subCategory||"").toLowerCase()===type).filter(x=>buildItemMatches(x,buildAccessoryDetails[String(x.id||x.compoundId)],buildState.accessoryStats.filter(Boolean),buildState.matchModes[slot]||"any"));}
 else rows=armors.filter(x=>String(x.subCategory||"").toLowerCase()===slot).filter(x=>buildItemMatches(x,buildArmorDetails[String(x.id||x.compoundId)],buildState.armorStats.filter(Boolean),buildState.matchModes[slot]||"any"));
 const picker=$("build-picker");
 if(picker.parentElement!==anchor)anchor.appendChild(picker);
 $("build-picker-title").textContent=isWeapon?"Selecionar arma":isAccessory?"Selecionar acessório":"Selecionar armadura";
 $("build-picker-stat-mode").value=buildState.matchModes[slot]||"any";
 const filteredRows=rows.filter(x=>!buildPickerRarity||rarity(x)===buildPickerRarity);
 const visibleRows=filteredRows.slice(0,buildPickerLimit);
 $("build-picker-list").innerHTML=visibleRows.length?visibleRows.map(x=>{const source=isWeapon?buildWeaponDetails:isAccessory?buildAccessoryDetails:buildArmorDetails;const record=source[String(x.id||x.compoundId)];return '<button type="button" class="build-picker-item" style="--rarity:'+rarityStyle(x)+'" data-build-choose="'+(isWeapon?"weapon":isAccessory?"accessory":"armor")+'" data-slot="'+slot+'" data-id="'+escapeHtml(x.id||x.compoundId)+'"><span class="build-picker-item-head"><span class="build-picker-item-icon">'+(isAccessory?accessoryImageMarkup(x):weaponImageMarkup(x))+'</span><span class="build-picker-item-title"><strong>'+escapeHtml(x.name)+'</strong><small>'+escapeHtml(rarity(x))+'</small></span></span>'+buildPickerStatsMarkup(record)+'</button>'}).join(""):'<p class="build-empty">Nenhuma peça disponível com os filtros atuais.</p>';
 if(filteredRows.length>visibleRows.length)$("build-picker-list").insertAdjacentHTML("beforeend",'<button type="button" class="build-picker-more" data-build-more>Exibir mais ('+(filteredRows.length-visibleRows.length)+' restantes)</button>');
 $("build-picker-rarity").value=buildPickerRarity;
 picker.hidden=false;
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
 if(buildLayerState.weapon!=="ready"){$("build-data-status").textContent="Primeiro selecione a classe e o tipo de arma para liberar os equipamentos.";return false}
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
 if(kind==="armor"&&buildLayerState.weapon!=="ready"){$("build-data-status").textContent="Primeiro selecione a classe e o tipo de arma para carregar as fichas de armas. Depois, os dados de armaduras serão liberados.";return false}
 if(kind==="accessory"&&buildLayerState.armor!=="ready"){$("build-data-status").textContent="A etapa de acessórios será liberada depois que os dados de armaduras forem carregados.";return false}
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
   config.assign(all);buildLayerState[kind]="ready";updateBuildLayerStatus();buildStatsOptions(kind,0);buildStatsOptions(kind,1);if(kind==="weapon"){$("build-weapon-stat1").disabled=!buildState.weaponType;$("build-weapon-stat2").disabled=!buildState.weaponType}renderBuildSelectedStats();return true;
  }catch(error){
   buildLayerState[kind]="idle";buildLayerPromises[kind]=null;
   const status=$("build-data-status");if(status)status.textContent="Não foi possível carregar "+config.label+": "+(error.message||"erro desconhecido")+". Tente novamente ao acessar esta categoria.";
   buildStatsOptions(kind,0);buildStatsOptions(kind,1);return false;
  }
 })();
 return buildLayerPromises[kind];
}
function closeBuildPicker(){const picker=$("build-picker");picker.hidden=true;$("build-view").appendChild(picker)}
function initBuildPlanner(){
 $("build-class").addEventListener("change",e=>{buildState.className=e.target.value;buildState.weaponType="";buildState.weaponType2="";buildState.weapons=["",""];buildState.armor={};buildState.weaponStats=["",""];buildState.armorStats=["",""];renderBuildScreen()});
 ["build-weapon-type","build-weapon-type2"].forEach((id,index)=>$(id).addEventListener("change",async e=>{if(index){buildState.weaponType2=e.target.value;buildState.weapons[1]=""}else{buildState.weaponType=e.target.value;buildState.weapons[0]=""}buildState.weaponStats=["",""];renderBuildScreen();if(buildState.weaponType||buildState.weaponType2){await loadBuildLayer("weapon");buildStatsOptions("weapon",0);buildStatsOptions("weapon",1);renderBuildScreen()}}));
 [["accessory",0],["accessory",1]].forEach(([kind,index])=>$("build-"+kind+"-stat"+(index+1)).addEventListener("focus",async()=>{if(buildLayerState[kind]!=="ready"){await loadBuildLayer(kind);buildStatsOptions(kind,0);buildStatsOptions(kind,1)}}));
 [["weapon",0],["weapon",1],["armor",0],["armor",1],["accessory",0],["accessory",1]].forEach(([kind,index])=>$("build-"+kind+"-stat"+(index+1)).addEventListener("change",e=>{const arr=kind==="weapon"?buildState.weaponStats:kind==="armor"?buildState.armorStats:buildState.accessoryStats;arr[index]=e.target.value;if(index===0&&arr[0]&&arr[0]===arr[1])arr[1]="";closeBuildPicker();buildStatsOptions(kind,0);buildStatsOptions(kind,1);renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats()}));
 document.addEventListener("click",e=>{
  const more=e.target.closest("[data-build-more]");if(more){buildPickerLimit+=30;const anchor=$("build-picker").parentElement;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildPickList(slot,anchor);return}
  const chosen=e.target.closest("[data-build-choose]");if(chosen){const id=chosen.dataset.id,slot=chosen.dataset.slot;if(chosen.dataset.buildChoose==="weapon"){const index=slot==="weapon0"?0:1;buildState.weapons[index]=id}else if(chosen.dataset.buildChoose==="accessory")buildState.accessories[slot]=id;else buildState.armor[slot]=id;closeBuildPicker();renderBuildWeaponSlots();renderBuildArmorSlots();renderBuildSelectedStats();return}
  if(e.target.closest("#build-picker"))return;
  const pick=e.target.closest("[data-build-pick]");if(pick){buildPickerLimit=30;buildPickList(pick.dataset.buildPick,pick);return}
  const wp=e.target.closest("[data-build-weapon-pick]");if(wp){buildPickerLimit=30;buildPickList("weapon"+wp.dataset.buildWeaponPick,wp);return}
  const result=e.target.closest("[data-build-weapon]");if(result){buildState.weapons[Number(result.dataset.buildWeapon)]=result.dataset.id;renderBuildWeaponSlots();return}
  const armorResult=e.target.closest("[data-build-armor]");if(armorResult){buildState.armor[armorResult.dataset.buildArmor]=armorResult.dataset.id;renderBuildArmorSlots()}
 });
 $("build-picker-rarity").addEventListener("change",e=>{buildPickerRarity=e.target.value;buildPickerLimit=30;const anchor=$("build-picker").parentElement;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildPickList(slot,anchor)});
 $("build-picker-stat-mode").addEventListener("change",e=>{const anchor=$("build-picker").parentElement;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildState.matchModes[slot]=e.target.value;buildPickList(slot,anchor)});
 $("build-picker-close").addEventListener("click",closeBuildPicker);
 document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".build-slot-clickable")){e.preventDefault();const el=e.target;if(el.dataset.buildPick)buildPickList(el.dataset.buildPick,el);else buildPickList("weapon"+el.dataset.buildWeaponPick,el)}});
 renderBuildScreen();updateBuildLayerStatus();
}

renderClasses();loadData();loadArmorData();loadAccessoryData();initBuildPlanner()
 $("build-picker-rarity").addEventListener("change",e=>{buildPickerRarity=e.target.value;const anchor=$("build-picker").parentElement;const slot=anchor?.dataset.buildPick??("weapon"+(anchor?.dataset.buildWeaponPick||"0"));buildPickList(slot,anchor)});
 $("build-picker-close").addEventListener("click",closeBuildPicker);;
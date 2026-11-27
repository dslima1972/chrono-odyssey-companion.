# Chrono Odyssey Companion — contexto do projeto

Compêndio comunitário **não oficial** de **Chrono Odyssey**, em **português (pt-BR)**, publicado como **site estático no GitHub Pages**. O dono do projeto trabalha **somente pelo celular**: tudo precisa funcionar bem em tela pequena e ser editável sem computador. Uso pessoal e sem fins comerciais.

> Observação: o nome do repositório termina com um ponto (`chrono-odyssey-companion.`). Os links em `index.html` e no README incluem esse ponto. Se o repositório for renomeado, atualizar esses links.

## Estrutura do repositório

```
index.html                          estrutura do site (3 abas: Arsenal, Classes, Sobre os dados)
assets/app.js                       toda a lógica (JS sem build, escrito de forma compacta)
assets/styles.css                   estilos (variáveis de cor em :root)
assets/classes/<classe>.jpg         arte de capa de cada classe (nome em minúsculas: berserker.jpg...)
data/questlog-export.json           catálogo exportado do Questlog (fonte principal)
data/item-details.json              fichas detalhadas por item, gerado pelo workflow (pode ainda não existir)
data/weapons.json                   arquivo reserva vazio (fallback)
scripts/sync-item-details.mjs       consulta a ficha de cada item no Questlog e gera item-details.json
.github/workflows/deploy-pages.yml  publica o site a cada push na main
.github/workflows/sync-questlog-details.yml  sincroniza detalhes e publica
```

Não há build, framework nem gerenciador de pacotes. Editar os arquivos direto.

## Dados

- `questlog-export.json`: `{ source, category: "weapon", pageCount, total: 648, items: [...] }`.
  - Cada item: `compoundId` (`item-11`), `id` (`"11"`), `name`, `icon` (caminho relativo ao questlog.gg), `grade` (0 a 4), `language`, `dbType`, `mainCategory` (`weapon`), `subCategory`, `createdAt`, `isDisabled`.
  - São 648 registros: **630 armas reais + 18 marcados "(Test)"**, que o site oculta. As 630 coincidem família por família com o Metabattle (por exemplo, battleaxe 34, chainswords 36, crossbows 36).
  - Hoje o export só tem **armas**. Armaduras, acessórios, materiais etc. não estão no repositório.
- `subCategory` → tipo de arma (`SUBCATEGORY_LABELS` em app.js): greatsword, longsword (Sword and Shield), dualswords (Dual Blades), longbow (Bow), crossbows, rapier, staff, magicorb (Manasphere), spellbook (Grimoire), lance, halberd, mace, chainswords (Chain Blades), hatchets (Twin Axes), battleaxe, sabre, wristblades, musket.
- `grade` → raridade: 0 Comum, 1 Incomum, 2 Raro, 3 Épico, 4 Lendário (cores pelas variáveis CSS `--common`, `--uncommon`, `--rare`, `--epic`, `--legendary`).
- `item-details.json`: `{ source, language: "en", generatedAt, requested, received, failed, failures[], items: { "<id>": <ficha do Questlog> } }`. A ficha usa campos como `itemInfo`, `itemStats.stats`, `itemStats.suffixes`, `equipmentStats.attack.gearScore`, `equipmentGradeInfo`. O app mostra atributos, progressão de ataque por gear score e sufixos.
- Princípio do projeto: **nunca inventar, estimar ou completar** atributos, efeitos ou requisitos. Mostrar só o que a fonte fornece.

## Como o app funciona (`assets/app.js`)

- `loadData()` lê `./data/questlog-export.json` (ou `weapons.json` se faltar), aceita lista direta ou objetos com `items`/`pageData`/`records`/`registros`, remove `isDisabled` e registros "(Test)".
- Aba **Arsenal**: busca por nome ou id, filtros de classe, tipo e raridade, lista ordenada por nome (pt-BR) e ficha da arma. Em telas até 760 px a ficha abre em tela cheia (`#mobile-detail`) com botão de voltar.
- A ficha carrega `./data/item-details.json` de forma preguiçosa (`getItemDetails`) e procura a arma pelo `id`. Se não achar, mostra mensagem e o link para a ficha no Questlog.
- Imagens das armas: `https://questlog.gg` + `icon`, com fallback de extensões (`.png`, `.webp`, `.jpg`, `.jpeg`) e ícone de texto quando falha.
- Aba **Classes**: `CLASS_DATA` (nome, armas, função, estilo, visão geral, pontos fortes e de atenção, combinações, Matrix) e `CLASS_MAP` (tipo de arma → classe). A arte vem de `assets/classes/<nome em minúsculas>.jpg`, com fallback em ícone.
- **Cache**: `index.html` e o `fetch` de `item-details.json` usam `?v=20261122e`. **Sempre trocar esse valor ao alterar CSS, JS ou dados** para o celular não servir versão antiga.

## Classes e armas (confirmado nas telas de seleção do jogo)

| Classe | Armas (o jogador usa 2 das 3) |
|---|---|
| Berserker | Chain Blades, Twin Axes, Battle Axe |
| Swordsman | Greatsword, Sword and Shield, Dual Blades |
| Ranger | Bow, Crossbow, Rapier |
| Paladin | Lance, Halberd, Mace |
| Sorcerer | Staff, Manasphere, Grimoire |
| Assassin | Sabre, Wrist Blades, Musket |

Nomes do jogo: Ranger (o Metabattle chama de "Archer") e Swordsman ("Swordman"). Assassin, Paladin e Sorcerer apareciam como ainda não jogáveis no beta. Os textos de classe são resumos próprios em português, baseados no guia do Icy Veins (`https://www.icy-veins.com/chrono-odyssey/classes`), com nota de confiabilidade na tela.

## Workflows

- **deploy-pages**: a cada push na `main` (ou manual), publica a raiz do repositório no GitHub Pages. Execuções "cancelled" no histórico são só publicações substituídas por commits mais novos (`cancel-in-progress`).
- **sync-questlog-details**: roda em push que altere `scripts/**`, `data/questlog-export.json` ou o próprio workflow, toda **segunda às 06:17 UTC** e manualmente. Executa `scripts/sync-item-details.mjs` (cerca de 630 consultas à API `database.getItem` do Questlog, 300 ms de pausa, 4 tentativas), faz commit de `data/item-details.json` como `github-actions[bot]` e publica o site.
  - Se a **cobertura ficar abaixo de 95%**, o script falha e **preserva o arquivo anterior**.
  - O Questlog já bloqueou consultas automáticas uma vez (a primeira sincronização foi removida por isso). Se o workflow falhar com HTTP 403 ou 429, **não insistir nem aumentar a frequência**: voltar ao fluxo manual (exportar no navegador e enviar o JSON pela web do GitHub).

## Atualização manual do catálogo (fluxo de reserva)

1. Exportar o catálogo pelo navegador e salvar como JSON.
2. No GitHub: pasta `data` → **Add file → Upload files** → nome exato `questlog-export.json` → commit na `main`.
3. O Pages republica sozinho. Se o formato do export mudar, adaptar o `loadData()` em vez de editar o JSON à mão.

## Pendências (ordem sugerida)

1. **Reduzir as imagens de classe**: quatro passam de 0,5 MB (assassin, ranger, sorcerer, swordsman). Redimensionar para cerca de 900 px de largura, JPEG qualidade 70–75 (alvo: ~100 KB cada).
2. **Conferir a primeira execução do sync** na aba Actions e corrigir o que falhar.
3. **Outras categorias** (armaduras 690, acessórios 63, materiais 232 no Metabattle): exigem novos exports do Questlog por categoria e adaptação de `loadData`, filtros e ficha (hoje tudo assume armas). Para armaduras, agrupar por conjunto.
4. **Favoritos e builds** (guardados no `localStorage`) e modo **PWA/offline** (manifest + service worker).
5. Trocar o texto fixo "data da exportação: 02/10/2026" em `loadData()` por um campo vindo do próprio arquivo.
6. Ícones das armas hoje são carregados do servidor do Questlog (hotlink). Avaliar guardar cópias locais (ver riscos abaixo).

## Identidade visual
- Consultar **`DESIGN_SYSTEM.md`** antes de criar ou revisar páginas. Ele registra a identidade visual aprovada e as regras de consistência.
- A página **Classes** é a referência estética principal mais recente: tema escuro azul-carvão, superfícies discretas, Cinzel (títulos), Inter (textos), detalhes metálicos em dourado/bronze e acentos próprios por classe.
- Não tratar a paleta legada do `assets/styles.css` como referência visual definitiva para novos módulos; consultar o manual e alinhar estilos gradualmente quando houver revisão aprovada.
- Mobile-first: validar cada página em telas pequenas, preservar ordem lógica, alvos de toque adequados e não comprometer o desktop ao corrigir o mobile.

## Direitos autorais e termos de uso

- O jogo, suas imagens, ícones, logos e textos pertencem à Kakao Games e à Chrono Studio. Nomes e números de itens são informação factual, mas **imagens, ícones e arte são conteúdo protegido**.
- Os termos de uso do Questlog valem independentemente de direitos autorais (por exemplo, sobre acesso automatizado). Não foram verificados aqui: ler antes de ampliar a coleta.
- Mantenha: projeto **não comercial**, aviso de **projeto não oficial** (já no rodapé e na aba Sobre), **crédito às fontes** com link e coleta educada (pausas, sem paralelismo).
- Evitar copiar textos editoriais de terceiros (Questlog, Icy Veins, Metabattle). Resumir com palavras próprias e linkar a fonte.
- Se houver pedido de remoção (do Questlog ou da publisher), atender prontamente.

## Regras de trabalho

- Fazer mudanças em **branch** e abrir **PR** para o dono revisar pelo celular. Descrever em português o que mudou, em poucas linhas.
- Nunca colocar tokens, chaves ou senhas no repositório.
- Ao mudar a estrutura de dados, a arquitetura ou o fluxo de atualização, **atualizar este arquivo** e trocar o `?v=` de cache.
- Não inventar dados do jogo. Se faltar informação, mostrar "não informado pela fonte".
- Texto da interface em pt-BR; nomes de itens, classes e armas permanecem em inglês, como no jogo.

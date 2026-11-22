# Chrono Companion — contexto do projeto

App companion **não oficial** do jogo **Chrono Odyssey**, para **uso pessoal**, usado **só no celular**. Interface em **português (pt-BR)**. O dono do projeto trabalha pelo celular, então tudo deve funcionar bem em tela pequena e sem depender de computador.

## Estado atual

- `chrono-companion.html`: app em **um único arquivo** (HTML + CSS + JS, sem build). Cinco abas: **Itens**, **Classes**, **Builds**, **Favoritos**, **Dados**.
- `chrono-data.json`: dados coletados (`{ "classes": [...], "items": [...] }`). O mesmo JSON está embutido no HTML como `SAMPLE`.
- Armazenamento no navegador (localStorage): `co_data3` (dados importados), `co_state` (favoritos e builds), `co_img` (imagens de classe trocadas pelo usuário). Se o formato dos dados mudar, **troque a chave** (`co_data4`...) para não ler dados antigos.
- A aba Dados importa um JSON (colado ou por arquivo) com `classes` e `items`.

## Esquema dos dados

```
classes[]: { id, name, desc, weapons[] }          // ids: berserker, swordsman, ranger, paladin, sorcerer, assassin
items[]:   { id, name, category, type, tier, rarity, classes[], set?, gearScore?, attack?, defense?, icon? }
```

- `category`: `weapon` | `equipment` | `material` (a UI já trata esses três).
- `rarity`: Common, Uncommon, Rare, Epic, Legendary. `tier`: 1 a 5.
- Armas coletadas até agora: **630** (as 18 famílias), todas com `category: "weapon"`, `type` = família da arma e `classes` = a classe dela.
- Itens antigos do Berserker têm ids numéricos do Metabattle (`w11123101`). Os demais usam slug (`w-bow-crude-bow`). Ids repetidos recebem sufixo `-2`.

## Classes e armas (confirmado nas telas de seleção do jogo)

| Classe | Armas |
|---|---|
| Berserker | Chain Blades, Twin Axes, Battle Axe |
| Swordsman | Greatsword, Sword and Shield, Dual Blades |
| Ranger | Bow, Crossbow, Rapier |
| Paladin | Lance, Halberd, Mace |
| Sorcerer | Staff, Manasphere, Grimoire |
| Assassin | Sabre, Wrist Blades, Musket |

O Metabattle chama Ranger de "Archer" e Swordsman de "Swordman". Usar os nomes do jogo (Ranger, Swordsman). Cada classe usa 2 das 3 armas. Assassin, Paladin e Sorcerer aparecem como ainda não jogáveis no beta. As descrições de classe são resumos próprios em português, baseados no Icy Veins.

## Fontes e como coletar

- **Metabattle** (principal): `https://metabattle.com/chrono-odyssey/tools/database/items/...`
  - Lista por família: `.../items/weapon/<slug>` (ex.: `battle-axe`, `twin-axes`, `sword-and-shield`, `wrist-blades`). Traz **todos** os itens da família numa página (nome, tipo, tier, raridade, ícone).
  - O parâmetro `?page=N` da lista geral é ignorado: use as páginas por família.
  - A página de cada item (`.../items/<id>-<slug>`) traz os stats (equipment score, ataque, crit, stagger, classe, nível, receita).
  - Totais no site: Items 3034 (Weapon 630, Armor 690, Accessory 63, Tool 35, Consumable 112, Material 232, Special Material 5, Blueprint 1118, Reward 23, Quest 23, Other 103), Recipes 926, Skills 612.
  - Ícones: `https://cdn.metabattle.com/game-files/chrono-odyssey/Data/Icon/<Categoria>/Small/<Arquivo>.png`
- **Questlog**: ainda não foi acessado.
- Peculiaridades já tratadas: o nome do Manasphere do tier 3 é "Remnant's Orb"; há itens duplicados "Dawn Slope" (ids diferentes) em Chain Blades, Crossbow, Greatsword, Halberd, Sabre e Staff; "Ancestral Sword" é o nome na família Sword and Shield.

## Pendências (ordem sugerida)

1. **Armaduras** (690, `category: "equipment"`, com `set` para agrupar por conjunto), depois acessórios (63) e materiais (232).
2. **Stats por item** (gearScore, attack, defense): começar pelos itens de tier 4 e 5.
3. **Ícones reais**: baixar do CDN para dentro do repositório (`/icons`) e referenciar por caminho relativo.
4. Ligar receitas e materiais de craft.
5. Transformar em PWA instalável (manifest + service worker) e publicar no GitHub Pages, com `data/` separado do código.

## Design

- Tema escuro, derivado das telas de classe do jogo. Cores: fundo `#0c0b0a`, painel `#16130f`, texto creme `#ece1c3`, dourado `#cdb06b`, bronze `#887352`, azul-aço `#7f9bab`, borda `#3a3226`. Há variante clara automática.
- Fontes: **Cinzel** (títulos) e **Crimson Pro** (texto), via Google Fonts.
- Ícones: SVG de linha, monocromáticos (sem emojis), um desenho por tipo de arma e para as abas.
- Cores de tier: cinza, verde, azul, roxo, dourado, vermelho-escuro.
- Mobile-first: barra de abas fixa embaixo, respeitando safe-area do iPhone/Android.
- Imagens de classe: recortes de capturas de tela do jogo enviadas pelo usuário, embutidas em base64 (uso pessoal). Há botão para trocar a imagem de cada classe.

## Regras de trabalho

- Respeitar os termos de uso das fontes: coletar devagar (pausas entre requisições), guardar em cache e **não** republicar publicamente dados ou imagens do jogo. Dados e arte pertencem à desenvolvedora; creditar as fontes.
- Não colocar tokens ou chaves no repositório.
- Manter o app funcionando offline depois de carregado.
- Ao mudar o esquema de dados, atualizar este arquivo e a chave do localStorage.
- Fazer mudanças em branch e abrir PR para o dono revisar.

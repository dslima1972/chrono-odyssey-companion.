# Biblioteca de imagens

Esta pasta reúne as imagens utilizadas pelo Chrono Odyssey Companion. As pastas são organizadas pela seção que consome os arquivos, para facilitar substituições.

## Estrutura

- `branding/`: identidade visual e capa do Companion.
- `classes/characters/`: artes principais das classes.
- `classes/selection/`: imagens dos cards de seleção de classe.
- `classes/weapons/cards/`: ícones das armas usados nos cards e seletores.
- `classes/weapons/details/`: imagens maiores usadas nas fichas e detalhes das armas.
- `avatars/`: avatares-base usados em referências e protótipos do Provador.
- `dressing-room/mannequin/`: manequins-base usados na composição.
- `dressing-room/overlays/`: PNGs transparentes de equipamentos sobrepostos ao manequim.
- `armor/`, `materials/` e `map/`: espaços reservados para imagens dessas seções conforme forem desenvolvidas.
- `shared/`: imagens utilizadas por mais de uma seção.

## Como substituir uma imagem

1. Para substituir a mesma arte, mantenha o nome e o formato do arquivo.
2. Nas camadas do Provador, preserve as dimensões do canvas, o alinhamento e a transparência.
3. Ao adicionar ou renomear arquivos, atualize também o caminho correspondente no JavaScript, HTML ou JSON que o utiliza.
4. Imagens de referência, testes e previews antigos permanecem em `references/`; essa pasta guarda material de trabalho, não a biblioteca principal das páginas.

As imagens de equipamentos carregadas diretamente do Questlog/CDN continuam sendo servidas pela fonte original quando aplicável.

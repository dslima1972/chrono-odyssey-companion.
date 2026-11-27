# Design System — Chrono Odyssey Companion

**Versão:** 1.0  
**Referência estética principal:** página Classes (layout aprovado em novembro de 2026)  
**Objetivo:** manter uma linguagem visual consistente entre as páginas sem eliminar a personalidade de cada módulo.

Este documento registra as decisões visuais já estabelecidas. Novas páginas e revisões devem consultá-lo antes de criar estilos próprios. A página Classes é a referência mais recente para a estética geral: tema escuro, superfícies discretas, tipografia editorial, detalhes metálicos e uso controlado de cores de destaque.

> Este manual descreve o padrão visual desejado. Nem todos os valores já estão centralizados em variáveis globais no CSS principal. A página Classes é um documento HTML independente incorporado ao app, portanto parte de sua paleta e de seus componentes ainda está definida localmente. Não presumir que alterar uma variável global atualize automaticamente essa página.

---

## 1. Direção visual

A interface deve transmitir a sensação de um compêndio de fantasia medieval com acabamento sóbrio e contemporâneo, inspirado na interface de Chrono Odyssey.

Princípios:
- **Escuro, atmosférico e legível:** fundos azul-carvão, superfícies ligeiramente mais claras e contraste confortável.
- **Metais discretos:** dourado/bronze e tons de marfim para títulos, estados ativos e pequenos detalhes.
- **Arte em primeiro plano:** ilustrações e ícones devem ter espaço para respirar; evitar molduras pesadas que disputem atenção com as imagens.
- **Hierarquia editorial:** títulos com personalidade, textos de leitura simples e metadados discretos.
- **Pouco ruído:** usar bordas, linhas, brilhos, gradientes e sombras somente quando ajudam a organizar ou destacar informação.
- **Consistência sem uniformidade forçada:** páginas podem ter componentes específicos, mas devem compartilhar paleta, tipografia, proporções e comportamento.

Evitar:
- grandes blocos de cor sólida sem função;
- bordas grossas em todos os elementos;
- excesso de caixas dentro de caixas;
- dourado muito saturado ou com aparência de amarelo puro;
- sombras, brilhos e gradientes decorativos em excesso;
- textos auxiliares minúsculos ou com contraste insuficiente.

## 2. Paleta de cores

### 2.1 Base da interface

Valores extraídos da implementação aprovada da página Classes:

| Token conceitual | Cor | Uso |
|---|---|---|
| Fundo principal | `#080D13` | Fundo geral da página |
| Superfície 1 | `#101923` | Painéis e superfícies principais |
| Superfície 2 | `#131F2A` | Superfícies secundárias e variações |
| Texto principal | `#E8EDF0` | Títulos e conteúdo de maior prioridade |
| Texto secundário | `#9AA9B4` | Descrições, rótulos e metadados |
| Texto de apoio | `#84939D` | Notas e informações de baixa prioridade |
| Linha sutil | `rgba(174, 190, 202, 0.16)` | Divisões e contornos discretos |
| Marfim quente | `#E8D8BC` | Destaques textuais pontuais |
| Dourado/bronze | `#C8A66B` | Identidade, ícones, estados ativos e detalhes |
| Dourado claro | `#E6D2AD` | Subtítulos e pequenos destaques |

O fundo pode receber gradientes radiais ou lineares muito sutis para criar profundidade, desde que o conteúdo permaneça claramente legível.

### 2.2 Acentos por classe

Na página Classes, o painel de detalhes e os estados ativos recebem uma cor própria para cada classe. Essa cor deve funcionar como **acento**, não como substituta da paleta escura nem como cor dominante de grandes áreas.

| Classe | Acento | RGB |
|---|---|---|
| Swordsman | `#526B7C` | `82, 107, 124` |
| Ranger | `#657A55` | `101, 122, 85` |
| Berserker | `#873F38` | `135, 63, 56` |
| Paladin | `#B9974B` | `185, 151, 75` |
| Sorcerer | `#76618F` | `118, 97, 143` |
| Assassin | `#426D69` | `66, 109, 105` |

Aplicação recomendada:
- borda ou filete de seleção;
- ícone, etiqueta ou pequeno título;
- fundo translúcido de baixa opacidade;
- halo ou gradiente localizado no painel associado à classe.

Não aplicar a cor da classe em todos os textos, botões e superfícies ao mesmo tempo.

### 2.3 Raridades

As cores de raridade são semânticas e independentes dos acentos de classe. Devem continuar identificando a raridade dos equipamentos em catálogos, fichas e builds.

| Raridade | Token CSS atual | Cor |
|---|---|---|
| Comum | `--common` | `#AAB2B9` |
| Incomum | `--uncommon` | `#6EAE83` |
| Raro | `--rare` | `#72A9DB` |
| Épico | `--epic` | `#B18BD8` |
| Lendário | `--legendary` | `#E5B94F` |

A cor deve ser acompanhada por texto ou outro indicador; não depender apenas da cor para comunicar raridade.

## 3. Tipografia

A identidade utiliza duas famílias:

- **Cinzel:** títulos, nomes de classes, cabeçalhos de painéis, títulos de seções e etiquetas editoriais importantes.
- **Inter:** textos corridos, descrições, botões, filtros, metadados, números e controles.

Pesos disponíveis no carregamento atual:
- Cinzel: 500, 600 e 700.
- Inter: 400, 500, 600 e 700.

Orientações:
- Reservar Cinzel para hierarquia e personalidade; não usar em parágrafos longos.
- Usar Inter para leitura contínua e controles.
- Manter títulos com espaçamento e peso moderados; evitar aparência excessivamente pesada.
- Textos auxiliares podem ser menores, mas devem continuar confortáveis em telas pequenas.
- Usar letras maiúsculas e espaçamento entre caracteres em pequenos rótulos, não em parágrafos.

Escalas de referência observadas na página Classes:
- título de página: aproximadamente 28–38 px, responsivo;
- título de painel: aproximadamente 20 px;
- título de seção: aproximadamente 15 px;
- subtítulo: aproximadamente 11–12 px;
- texto corrido: aproximadamente 10–12 px;
- metadados e etiquetas: aproximadamente 8–9 px.

Essas medidas são referências, não valores rígidos. Priorizar legibilidade e hierarquia conforme o espaço disponível.

## 4. Superfícies, bordas e profundidade

- Preferir superfícies transparentes ou fundos escuros próximos ao fundo principal.
- Usar diferenças pequenas de luminosidade para separar níveis de conteúdo.
- Linhas finas e translúcidas são preferíveis a bordas sólidas e chamativas.
- Painéis de destaque podem combinar gradiente escuro com acento colorido em baixa opacidade.
- Cantos retos ou discretamente tratados combinam com a estética metálica da página Classes. Não arredondar tudo automaticamente.
- Usar detalhes ornamentais somente em pontos de hierarquia, como extremidades de painéis ou divisões importantes.
- Sombras devem ser leves e funcionais; evitar sombras pesadas em cards comuns.

## 5. Componentes e estados

### Navegação e abas
- Estado inativo: texto secundário, fundo transparente.
- Estado ativo: texto na cor de acento, linha inferior ou marcador fino e, quando necessário, fundo translúcido.
- Hover: mudança sutil de contraste; não depender exclusivamente do hover para comunicar estado.
- Em telas pequenas, controles devem permanecer legíveis e fáceis de tocar.

### Botões e seletores
- Priorizar fundo transparente ou superfície escura discreta.
- Usar cor de acento em texto, ícone, filete ou borda fina.
- Estados ativo, foco e selecionado devem ser distinguíveis.
- Evitar botões com grandes áreas douradas sem necessidade.
- Preservar indicadores visíveis de foco para navegação por teclado.

### Cards e blocos de informação
- Não transformar toda informação em card.
- Quando necessário, preferir separação por espaçamento, linha superior/inferior ou fundo sutil.
- Cards interativos devem indicar interação por mudança discreta de borda, cor ou posição.
- Conteúdo relacionado pode ser agrupado sem adicionar bordas em cada subelemento.

### Painéis de detalhes
- Devem oferecer hierarquia clara entre cabeçalho, navegação interna e conteúdo.
- Usar o acento do contexto (por exemplo, classe selecionada) de maneira localizada.
- Textos e controles devem manter contraste sobre fundos com gradiente.
- Conteúdo extenso pode rolar internamente no desktop; no mobile, evitar áreas internas de rolagem quando prejudicarem a leitura.

### Ícones e imagens
- Preferir assets próprios do projeto e manter proporções originais.
- Ícones devem ter tamanho consistente dentro de uma mesma família de controles.
- Evitar fundos ou molduras desnecessárias em imagens que já possuem transparência.
- Não esticar imagens; usar `object-fit` e enquadramento adequado ao contexto.
- A arte principal pode funcionar como elemento de fundo, sem cartão ou moldura, quando a composição permitir.

## 6. Espaçamento e composição

- Usar espaçamento para separar grupos antes de recorrer a bordas.
- Manter alinhamentos consistentes entre títulos, painéis e conteúdo.
- Evitar densidade excessiva; listas e controles precisam de espaço suficiente para leitura e toque.
- Em layouts com várias colunas, definir larguras mínimas realistas para impedir compressão de textos e controles.
- A composição deve priorizar o conteúdo principal e evitar elementos decorativos competindo com ele.

Como referência, a página Classes utiliza gaps compactos entre controles e espaçamentos maiores entre grandes regiões. A proporção deve ser adaptada ao conteúdo de cada página.

## 7. Responsividade

A experiência mobile é requisito de primeira classe, não uma versão reduzida do desktop.

Regras:
- Não permitir rolagem horizontal da página inteira.
- Reorganizar colunas em fluxo vertical quando a largura não comportar conteúdo legível.
- Preservar a ordem lógica de leitura e a prioridade das informações.
- Não reduzir fontes indiscriminadamente para fazer caber um layout desktop.
- Alvos de toque devem ter tamanho e espaçamento adequados.
- Imagens devem manter proporção e enquadramento; ajustar escala e posição por breakpoint quando necessário.
- Evitar painéis com altura fixa e rolagem interna no mobile, salvo quando a experiência exigir explicitamente.
- Testar pelo menos larguras próximas a 360 px, 390 px, 520 px, 850 px e desktop amplo.
- Ao corrigir mobile, não alterar o desktop sem necessidade; quando houver estilos específicos por breakpoint, manter a separação clara.

Os breakpoints existentes na página Classes (520 px, 850 px e 1120 px) são referências daquela composição. Outras páginas podem usar pontos de quebra diferentes quando a estrutura exigir.

## 8. Acessibilidade e interação

- Manter contraste suficiente entre texto e fundo.
- Não comunicar estados somente por cor.
- Oferecer foco visível para controles interativos.
- Usar rótulos claros em botões, abas, filtros e campos.
- Não esconder informações essenciais apenas em hover.
- Respeitar áreas de toque e evitar controles muito próximos.
- Animações e transições devem ser discretas e não prejudicar leitura ou navegação.

## 9. Regras de consistência entre páginas

Toda nova página ou reformulação deve:
1. Usar Cinzel e Inter conforme a hierarquia definida.
2. Partir da paleta escura e dos tons metálicos deste documento.
3. Usar acentos específicos apenas quando houver significado (classe, raridade, estado ou categoria).
4. Reutilizar padrões de navegação e interação sempre que fizer sentido.
5. Manter a estética limpa, com bordas e fundos usados com moderação.
6. Ser projetada e validada em desktop e mobile.
7. Preservar a personalidade do conteúdo sem criar uma linguagem visual incompatível com o restante do Companion.

A página Classes é a principal referência estética para novas decisões. Seus elementos exclusivos — como painel colorido por classe, trilho de seleção e composição da arte central — não precisam ser copiados literalmente para outras páginas.

## 10. Evolução deste documento

Este manual deve ser atualizado quando uma decisão visual geral for aprovada. Ajustes isolados de uma página não precisam alterar o sistema inteiro.

Antes de introduzir uma nova cor, fonte, padrão de card ou comportamento de navegação, verificar se já existe uma regra equivalente aqui. Quando uma regra antiga e uma nova implementação divergirem, registrar a decisão aprovada e atualizar o manual; não presumir que o CSS legado seja a referência mais recente.

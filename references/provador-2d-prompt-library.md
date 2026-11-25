# Biblioteca de prompts — Provador 2D

**Versão:** 1.0  
**Status:** padrão consolidado a partir dos testes do conjunto de referência  
**Canvas de trabalho:** 1254 × 1254 px  
**Manequim de alinhamento:** `references/avatar-mannequin-dark.png`

> Este documento descreve o fluxo atual do Provador 2D. Documentos antigos de protótipos com Avatar 2/3, canvas 1024 × 1024 e instruções de perspectiva frontal/ortográfica pertencem a uma abordagem anterior e não devem ser usados como padrão para as novas camadas.

---

## 1. Princípios que não podem ser alterados

As referências têm papéis diferentes:

1. **Imagem original do equipamento (Questlog):** determina identidade visual, materiais, cores, silhueta, ornamentos e componentes que realmente pertencem ao item.
2. **Manequim grafite:** determina pose, anatomia, orientação, câmera, perspectiva, escala, enquadramento e coordenadas da composição.

A perspectiva do Questlog nunca deve prevalecer sobre a perspectiva do manequim. O equipamento deve ser reconstruído na perspectiva do manequim, preservando o design original.

O processo tem duas fases distintas:

- **Fase A — composição vestida:** gerar o manequim usando o equipamento, para validar aparência, cobertura e encaixe.
- **Fase B — extração:** remover o manequim e o fundo da composição aprovada, mantendo apenas a camada do equipamento nas coordenadas originais.

Não tentar resolver geração, alinhamento e extração em uma única instrução.

## 2. Campos a preencher para cada novo item

Antes de gerar, preencher:

- **Nome do item:** [nome usado apenas para identificar a referência]
- **Categoria/slot:** [capacete, peitoral, mãos, pernas, botas, capa ou outra]
- **Imagem de referência:** [imagem individual do Questlog]
- **Componentes visíveis obrigatórios:** [listar placas, mangas, joelheiras, grevas, ornamentos, caudas etc.]
- **Partes independentes:** [indicar se há painéis, caudas ou peças separadas]
- **Relação com o corpo:** [quais regiões cobre e quais devem permanecer visíveis]
- **Particularidades:** [abertura central, cabeça dentro do capacete, peça exclusivamente traseira etc.]

Não preencher esses campos por suposição. Usar a imagem original do item e, quando necessário, a ficha individual do Questlog. Se um detalhe não puder ser confirmado, não pedir à IA para inventá-lo.

## 3. Prompt-base — Fase A: composição vestida

Usar este texto com duas imagens anexadas: a imagem individual do equipamento e o manequim grafite aprovado.

```text
Use as imagens anexadas como referências com funções diferentes e obrigatórias:

REFERÊNCIA DO EQUIPAMENTO:
Determina exclusivamente a identidade visual do item: desenho, silhueta, cores, materiais, texturas, costuras, placas, ornamentos, recortes e todos os detalhes visíveis.

REFERÊNCIA DO MANEQUIM:
Determina a composição: anatomia, pose, orientação, posição dos membros, câmera, perspectiva, escala, enquadramento e alinhamento no canvas.

OBJETIVO:
Produzir uma composição realista do manequim vestindo exatamente o equipamento apresentado na referência.

REGRAS DE FIDELIDADE:
- Reproduza o item da referência, sem substituí-lo por uma peça genérica.
- Preserve todos os componentes visíveis e relevantes do equipamento.
- Não simplifique, omita, invente ou acrescente peças.
- Preserve cores, materiais, texturas, relevos, costuras, ornamentos e acabamento.
- Não misture características de outros equipamentos.
- Não inclua armas ou acessórios que não tenham sido solicitados.

REGRAS DE COMPOSIÇÃO:
- Siga exatamente a pose e a orientação do manequim.
- Siga a câmera e a perspectiva do manequim, mesmo quando a imagem do equipamento tiver outro ângulo.
- Não copie a perspectiva do ícone do Questlog.
- Não altere anatomia, postura, proporções, rotação, escala ou enquadramento do manequim.
- Não aproxime, afaste, gire ou reposicione a câmera.
- Vista a peça corretamente no corpo, sem flutuação, deslocamento ou interseções incorretas.
- Respeite a cobertura natural da peça e mantenha visíveis as regiões do corpo que não são cobertas pelo equipamento.

ESPECIFICAÇÕES:
- Canvas quadrado de 1254 × 1254 pixels.
- Mantenha o manequim inteiro na mesma posição e escala da referência.
- Não recorte nem altere o enquadramento.
- Não inclua textos, legendas, molduras, interface ou elementos decorativos.

DADOS DESTE ITEM:
Categoria/slot: [CATEGORIA]
Componentes obrigatórios: [COMPONENTES]
Partes independentes: [PARTES, OU "NÃO HÁ"]
Particularidades: [PARTICULARIDADES]

Antes de finalizar, confira se todos os componentes descritos e visíveis na referência foram reproduzidos e se a composição mantém a mesma câmera, pose, orientação e escala do manequim.
```

**Nota:** na Fase A, a prioridade é validar a composição vestida. O arquivo final transparente será produzido na Fase B; não aceitar uma imagem apenas porque o fundo parece transparente.

## 4. Complementos por categoria para a Fase A

Adicionar somente o complemento correspondente ao slot. Se o item tiver características de mais de uma categoria, combinar apenas as instruções compatíveis.

### 4.1 Peitoral / torso

```text
COMPLEMENTO — PEITORAL:
- Reproduza o peitoral completo e todas as extensões que pertençam à peça.
- Preserve gola, placas, ombreiras, proteções de ombro, detalhes de cintura e extensões do tronco quando existirem.
- Se a referência apresentar mangas, reproduza-as com o mesmo comprimento e cobertura.
- Não transforme uma peça com mangas em uma armadura sem mangas.
- Não deixe braços ou torso atravessarem a armadura.
- Não cubra regiões que a peça original deixa descobertas.
- Faça a peça acompanhar corretamente o torso e os ombros na perspectiva do manequim.
```

### 4.2 Calças / proteção das pernas

```text
COMPLEMENTO — PERNAS:
- Reproduza a peça completa de proteção das pernas, não apenas o tecido de uma calça.
- Inclua calças, placas, joelheiras, grevas, caneleiras, proteções laterais e extensões inferiores quando estiverem presentes na referência.
- Não omita componentes metálicos ou proteções visíveis.
- Preserve comprimento, cobertura, recortes e assimetria, se houver.
- Vista as duas pernas corretamente, respeitando a anatomia e a orientação do manequim.
```

### 4.3 Botas / proteção dos pés e pernas inferiores

```text
COMPLEMENTO — BOTAS:
- Reproduza o par completo de botas e todas as proteções associadas que apareçam na referência.
- Inclua calçados, caneleiras, grevas, placas, joelheiras ou extensões superiores quando fizerem parte do item.
- Não interprete automaticamente "botas" como calçados isolados.
- Não omita proteções que avancem sobre a parte inferior das pernas.
- Respeite a orientação dos dois pés e das pernas do manequim.
- Use desde a primeira geração a mesma câmera, perspectiva e orientação do manequim.
- Não copie o ângulo próprio da imagem do Questlog.
```

### 4.4 Luvas / mãos

```text
COMPLEMENTO — MÃOS:
- Reproduza o par de luvas e todos os seus componentes: dedos, punhos, placas, proteções e extensões que existirem.
- Vista corretamente as duas mãos.
- Preserve anatomia, curvatura, orientação e posição das mãos e dos braços.
- Não mova nem altere a pose dos membros.
- Não deixe dedos, mãos ou braços atravessarem a peça.
- Inclua proteção de punho ou antebraço somente quando pertencer ao item de referência.
```

### 4.5 Capacete / cabeça

```text
COMPLEMENTO — CAPACETE:
- Reproduza o capacete na orientação da cabeça do manequim.
- Quando o manequim estiver voltado para a frente, o capacete também deverá estar frontal; não o gere de perfil ou inclinado.
- Posicione a cabeça corretamente dentro do capacete, respeitando tamanho e proporções.
- Não gere um capacete vazio quando a composição exigir a cabeça em seu interior.
- Preserve aberturas, viseira e detalhes internos que realmente existirem.
- Não invente acessórios ou partes faciais.
- A composição deve permitir a extração posterior do capacete com as partes estritamente necessárias da cabeça para impedir que o corpo apareça através das aberturas na sobreposição final.
```

### 4.6 Capa / peça traseira

```text
COMPLEMENTO — CAPA:
- Reproduza a capa e todas as suas partes conforme a referência.
- Identifique e preserve painéis, caudas ou partes independentes.
- Quando a referência apresentar duas ou mais partes separadas, mantenha-as separadas e preserve a abertura entre elas.
- Todas as partes da capa devem permanecer exclusivamente atrás do personagem.
- Não traga tecido, caudas ou painéis para a frente do torso.
- Não una partes independentes em uma única capa fechada.
- Não crie alças, tiras, cintas, harness, arnês ou suportes semelhantes a mochila.
- Não crie tiras sobre ombros, clavículas, peito ou abdômen, salvo se estiverem claramente presentes na referência original.
- A capa deve parecer presa pela parte traseira e acompanhar a perspectiva do manequim.
```

### 4.7 Outras categorias

Para uma categoria ainda não testada, não reutilizar automaticamente as instruções de outra peça. Descrever no campo de particularidades quais partes do corpo o item cobre, como é vestido e se possui partes independentes. Criar um complemento específico somente após validar o primeiro resultado.

## 5. Prompt-base — Fase B: extração da camada

Usar somente depois que a composição vestida tiver sido aprovada. Anexar a composição aprovada e solicitar a extração.

```text
A imagem anexada contém o manequim vestindo o equipamento aprovado. Esta tarefa é uma EXTRAÇÃO DE CAMADA, não uma nova geração do equipamento.

OBJETIVO:
Remover o manequim e o fundo, mantendo exclusivamente o equipamento, exatamente nas mesmas coordenadas em que aparece na composição original.

PRESERVAÇÃO:
- Preserve o desenho, cores, materiais, texturas, detalhes, proporções e perspectiva da peça.
- Não redesenhe, recrie, estilize, simplifique ou complete o equipamento.
- Não mova, gire, redimensione, recorte ou centralize novamente a peça.
- Preserve a posição de cada componente e o espaçamento entre partes independentes.
- Não una partes separadas.
- Não acrescente sombras, contornos ou elementos artificiais.
- Remova resíduos do manequim e do fundo, sem deixar halos ou pixels opacos indevidos.

REMOÇÃO:
- Remova o manequim por completo, exceto partes do corpo explicitamente necessárias para a camada de capacete, quando aplicável.
- Para capacetes, preserve somente as partes da cabeça necessárias para impedir que o corpo apareça através das aberturas; não mantenha pescoço, torso ou outras partes sem necessidade.
- Para capas e peças traseiras, mantenha todas as partes da peça e suas separações originais.

ARQUIVO:
- PNG de 1254 × 1254 pixels.
- Canal alfa real (RGBA).
- Fundo totalmente transparente.
- Canvas integral, sem corte e sem alteração de escala.
- A peça deve permanecer nas mesmas coordenadas da imagem aprovada.

TESTE DE SOBREPOSIÇÃO:
Quando esta camada for colocada sobre o mesmo manequim usado na composição original, a peça deverá coincidir exatamente com sua posição anterior.

Não faça uma nova interpretação artística. Extraia fielmente a camada existente.
```

## 6. Exceção importante: capacete

O capacete é a única categoria já testada que pode exigir partes do corpo na camada final. O arquivo pode conter o capacete e as áreas necessárias da cabeça para impedir que o manequim apareça através das aberturas. Essas áreas devem ser mínimas e deliberadas.

Para todas as outras categorias, a camada final deve conter exclusivamente o equipamento, sem pele, corpo, manequim ou sombra externa.

## 7. Padrão técnico e validação dos arquivos

| Propriedade | Padrão |
|---|---|
| Canvas | 1254 × 1254 px |
| Formato | PNG |
| Modo | RGBA |
| Transparência | Canal alfa real; validar os pixels |
| Fundo | Transparente |
| Peso-alvo | Até 500 KB |
| Limite desejável | Até 1 MB |
| Coordenadas | Preservadas da composição aprovada |
| Recorte | Não permitido |
| Redimensionamento | Não permitido |

O tamanho em bytes não é garantido pelo gerador. Se necessário, otimizar o PNG posteriormente com ferramenta sem perdas, preservando dimensões, canal alfa e qualidade. Não reduzir dimensões nem cortar transparência para atingir a meta de peso.

**Importante:** a presença de modo RGBA ou de um canal alfa não prova, isoladamente, que o fundo está transparente. Validar os valores do alfa e a imagem sobre fundos contrastantes.

## 8. Checklist de aprovação

### Antes da extração
- [ ] O design corresponde ao item original do Questlog.
- [ ] Todos os componentes visíveis relevantes foram reproduzidos.
- [ ] A câmera e a perspectiva correspondem ao manequim.
- [ ] A pose e a escala do manequim não foram alteradas.
- [ ] A peça está corretamente vestida e não flutua.
- [ ] As regras específicas da categoria foram cumpridas.

### Depois da extração
- [ ] Canvas de 1254 × 1254 px.
- [ ] PNG com canal alfa real.
- [ ] Fundo efetivamente transparente, sem fundo preto/branco residual.
- [ ] Nenhum resíduo do manequim (exceto exceção deliberada do capacete).
- [ ] Nenhum halo ou contorno artificial.
- [ ] Posição, escala e coordenadas preservadas.
- [ ] Partes independentes continuam separadas.
- [ ] Peso dentro da meta ou otimizado sem perdas relevantes.

### No preview
- [ ] Camada coincide com a composição vestida original.
- [ ] Camada pode ser ocultada e exibida sem afetar as demais.
- [ ] Ordem de sobreposição está correta.
- [ ] Ajustes de posição/escala foram validados e registrados.
- [ ] Aprovação visual do usuário foi obtida.

## 9. Fluxo de produção recomendado

1. Obter a imagem individual do item no Questlog.
2. Registrar categoria, componentes e particularidades confirmadas.
3. Anexar a imagem do equipamento e o manequim grafite.
4. Aplicar o prompt-base da Fase A e o complemento da categoria.
5. Revisar o resultado vestido; corrigir somente problemas identificados.
6. Após aprovação, aplicar o prompt da Fase B.
7. Validar dimensões, modo de cor e transparência real.
8. Otimizar o PNG se necessário, sem alterar o canvas.
9. Adicionar ao preview como camada independente.
10. Validar alinhamento, ordem de camadas e controles.
11. Registrar os valores aprovados e preservar o arquivo original.

## 10. Histórico e escopo

Este padrão foi consolidado a partir dos testes de sobreposição de peitoral, calças, botas, luvas, capacete e capa. As instruções de categoria refletem problemas observados nesses testes. Categorias não testadas ainda precisam de validação própria.

O documento não altera o Provador integrado, o Build Planner, os catálogos nem os arquivos de equipamentos já aprovados. É uma biblioteca de referência para as próximas gerações.

# Guia de alinhamento do Provador — Avatar 2

## Objetivo
Preparar as futuras camadas transparentes de equipamentos para o arquivo `assets/images/avatars/avatar-male-base-2.jpg`, sem editar a imagem-base.

## Referências visuais existentes
- `references/item-details-reference.jpg`: render de uma armadura peitoral isolada, em perspectiva de três quartos. É útil para observar gola, placas, ombreiras, volume e acabamento. Não deve ser copiada diretamente como camada do avatar porque o ângulo não é frontal.
- `references/gear-example-reference.png`: personagem equipado dentro do jogo, em posição quase frontal com leve rotação. É a referência mais útil para entender como o peitoral cobre o tronco e se conecta aos ombros.
- `references/teste-provador-avatar2.png`: teste antigo com o SVG provisório; serve apenas para identificar o erro anterior, não como referência de aparência final.

## Leitura do Avatar 2
A imagem-base tem canvas quadrado de 1024 × 1024 px. O personagem está frontal, com braços próximos ao corpo e mãos ao lado das coxas. O tronco visível é relativamente estreito em comparação com a armadura mostrada na referência do jogo.

Estimativa inicial para a área de trabalho do peitoral no canvas original:
- Gola/base do pescoço: aproximadamente y=170–215 px.
- Linha externa dos ombros: aproximadamente x=380–645 px, y=190–285 px.
- Tórax e abdômen superior: aproximadamente x=405–620 px, y=220–465 px.
- A peça deve terminar na cintura/alto quadril, sem cobrir a calça.
Esses valores são referências visuais iniciais, não coordenadas finais. Devem ser calibrados com a camada real e uma captura do app.

## Especificação para a futura camada
- PNG RGBA com transparência real; sem fundo, corpo, manequim ou sombra projetada.
- Vista frontal ortográfica, alinhada à câmera do Avatar 2.
- Centralizada no canvas quadrado 1024 × 1024, mantendo a escala e a posição do avatar original.
- Cobrir o tronco e a parte superior dos ombros; deixar braços e mãos visíveis.
- A gola deve encaixar na base do pescoço, sem cobrir o queixo.
- Bordas limpas e antialiasing; sem margem artificial.
- Não redesenhar o avatar nem alterar pose, proporção ou iluminação da imagem-base.

## Critério de validação
1. A camada deve ficar alinhada sem deslocamento independente da imagem-base.
2. Os dois ombros devem ter cobertura coerente com o desenho da peça.
3. A silhueta deve acompanhar o tronco, sem parecer avental ou placa retangular.
4. A peça deve parecer tecido/armadura do item de referência, não uma ilustração genérica.
5. A camada deve poder ser ocultada sem alterar o avatar original.

## Observação
A referência isolada de armadura está em perspectiva de três quartos. Para gerar uma camada que encaixe no Avatar 2, o prompt do gerador deverá priorizar vista frontal ortográfica e usar a referência do jogo apenas para materiais e desenho. A pose do avatar deve ser preservada como base separada.

# Guia de alinhamento do Provador — Avatar 3

## Objetivo
Preparar as futuras camadas transparentes de equipamentos para o arquivo `assets/images/avatars/avatar-male-base-3.jpg`, sem editar a imagem-base.

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


## Avaliação do candidato Avatar 3
Arquivo recebido: `references/avatar-male-base-3.jpg` (1024 × 1024 px).
- Pose em três quartos, com cabeça, tronco e pernas orientados de forma consistente.
- Corpo inteiro dentro do quadro; braços afastados o suficiente para visualizar o tronco e as mãos.
- A orientação parece mais próxima da referência `item-details-reference.jpg` do que a pose frontal do Avatar 2.
- O fundo cinza uniforme parece adequado para o removedor de fundo por flood-fill já utilizado no provador.
- A roupa escura é neutra, mas pode dificultar a leitura de calças e botas quando essas camadas forem sobrepostas.
- Status: candidato promissor, ainda não aprovado como avatar principal. Antes de trocar o padrão, copiar para a pasta de avatares, testar remoção do fundo e comparar visualmente o alinhamento de um peitoral/capacete da referência.


## Comparação de perspectiva — Avatar 3 x referências de armadura
Comparação visual feita com:
- `references/item-details-reference.jpg`: armadura peitoral isolada em perspectiva de três quartos.
- `references/gear-example-reference.png`: personagem equipado no jogo.
- `assets/images/avatars/avatar-male-base-3.jpg`: candidato de avatar.

Conclusão visual:
- O Avatar 3 tem orientação de três quartos, não frontal; a cabeça e o tronco mostram profundidade e o quadril/pernas mantêm uma rotação compatível.
- A armadura isolada apresenta volume e perspectiva semelhantes. A correspondência é promissora e reduz a necessidade de transformar cada peça para uma vista frontal.
- A captura do personagem equipado mostra que a armadura cobre ombros e tronco de forma contínua. O Avatar 3 deixa essas regiões visíveis e os braços suficientemente afastados para a sobreposição.
- A correspondência exata de ângulo e escala ainda não pode ser certificada sem uma camada de peitoral recortada/alinhada sobre o avatar. Portanto, esta é uma aprovação da direção de pose, não uma validação final de encaixe.

Decisão provisória: usar Avatar 3 como avatar padrão de desenvolvimento e manter Avatar 2 disponível como alternativa. O alinhamento definitivo será validado com a primeira camada transparente real.


## Base de desenvolvimento atual
O Avatar 3 foi selecionado como padrão de desenvolvimento após comparação visual com as referências. O Avatar 2 permanece disponível no seletor, mas não é mais a base primária.
Arquivo-base: `assets/images/avatars/avatar-male-base-3.jpg`.
Canvas observado: 1024 × 1024 px.
As futuras camadas devem usar o mesmo canvas quadrado e ser alinhadas em coordenadas relativas ao canvas completo. Não redimensionar, recortar ou reposicionar o avatar separadamente da camada.

## Estrutura de camadas prevista
Diretório reservado: `assets/images/equipment/chest/`.
Nome recomendado para a primeira camada validada: `ragged-clothes-avatar3.png`.
Formato: PNG RGBA com transparência real.
O arquivo final deverá conter somente a peça, sem corpo, fundo, sombra externa ou manequim. A posição da peça dentro do canvas deve coincidir com a posição do corpo no avatar.
A imagem de ícone do Questlog não será usada como textura de sobreposição sem avaliação: ícones de inventário não garantem vista, escala ou recorte adequados.

## Estado
- Perspectiva do Avatar 3: aprovada como direção de trabalho.
- Remoção de fundo: validada pelo usuário.
- Correspondência exata de ângulo: ainda depende de teste com camada real.
- Peitoral transparente: ainda não produzido; aguardando geração/arte compatível.

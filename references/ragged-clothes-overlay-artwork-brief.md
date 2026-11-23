# Brief de arte — Ragged Clothes (ID 10101)

## Objetivo

Criar a primeira camada real de equipamento para o Provador, usando o Avatar 3 como referência de câmera, perspectiva, escala e posição. Esta etapa é exclusiva do peitoral Ragged Clothes; não iniciar outras peças antes da validação deste resultado.

## Imagens de referência

1. **Avatar 3 (base e alinhamento):** `assets/images/avatars/avatar-male-base-3.jpg`
   - Usar para reproduzir exatamente a perspectiva de três quartos, a orientação do tronco e a escala no canvas.
   - O avatar é apenas referência de encaixe. Não deve aparecer no arquivo final.

2. **Ragged Clothes (desenho da peça):** ícone original do Questlog:
   `https://cdn.questlog.gg/chrono-odyssey/assets/Game/Data/Icon/HighQuality/001M_U01_01.webp`
   - Usar como referência principal do desenho, material, cor e detalhes da peça.
   - Não substituir por uma armadura genérica nem reinterpretar o design.

3. **Referência de equipamento no jogo:** `references/gear-example-reference.png`
   - Usar somente para compreender como uma peça vestida acompanha o corpo.
   - Não copiar a armadura desta captura, pois ela não é o Ragged Clothes.

## Prompt para ferramenta de geração/edição de imagem

> Crie uma camada de equipamento isolada para o Provador de Chrono Odyssey. O item é exatamente o Ragged Clothes (peitoral, ID 10101), e o desenho deve seguir fielmente a imagem de referência do próprio item: mesmas cores, tecido, recortes, costuras e detalhes visíveis. Use a imagem do Avatar 3 apenas para alinhar a peça ao corpo: reproduza a mesma câmera em três quartos, mesma orientação do tronco, mesma escala e posição. 
>
> O resultado deve conter **somente a roupa**, vestida na posição correta sobre o tronco e ombros do avatar. Não inclua cabeça, pele, braços, mãos, pernas, corpo, manequim, avatar, suporte, cenário, fundo, sombra externa, moldura, texto ou interface. Preserve aberturas naturais da peça; não invente mangas ou placas que não existam no item de referência. A peça deve cobrir o tórax e os ombros conforme o desenho original, sem invadir os braços.
>
> Entregue em PNG RGBA com transparência real, canvas quadrado de 1024 × 1024 pixels. Mantenha a peça na posição exata em que deve aparecer sobre o Avatar 3 dentro desse canvas; não centralize a roupa isoladamente nem recorte o espaço transparente ao redor. Não altere a perspectiva para frontal: o encaixe deve seguir o ângulo de três quartos do Avatar 3. Renderização realista, bordas limpas e antialiasing, sem qualquer elemento adicional.

## Parâmetros atuais de pré-visualização

Estes valores foram calibrados no Provador e devem ser usados como referência inicial:

- Posição horizontal: **50%**
- Posição vertical: **16%**
- Largura da peça: **50%**

Os controles continuam disponíveis no Provador para ajustes de teste. Eles não substituem o alinhamento da arte no canvas final.

## Requisitos do arquivo final

- Nome: `ragged-clothes-avatar3.png`
- Destino: `assets/images/equipment/chest/ragged-clothes-avatar3.png`
- Dimensão: 1024 × 1024 px
- Formato: PNG RGBA com canal alpha transparente
- Canvas compartilhado com o Avatar 3; não recortar nem redimensionar a camada separadamente.
- Sem avatar, fundo, manequim ou sombra externa.
- A arte deve preservar o desenho do Ragged Clothes, não o de outra armadura.

## Critérios de validação no app

1. Gola encaixada no pescoço, sem lacunas artificiais nem sobreposição no queixo.
2. Ombros cobertos de maneira coerente com o modelo real da peça.
3. Braços e mãos do Avatar 3 permanecem visíveis.
4. Silhueta acompanha o tronco e a perspectiva, sem parecer um ícone ampliado.
5. A camada pode ser ocultada pelos controles sem alterar o avatar original.
6. Validar primeiro no desktop e depois no celular.

**Não avançar para outros slots ou equipamentos antes de aprovar este peitoral.**

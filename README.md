# Chrono Odyssey Companion

Compêndio comunitário independente, em português, para consulta de informações e equipamentos de Chrono Odyssey. O site é publicado como conteúdo estático pelo GitHub Pages.

## Estrutura
- `index.html`: estrutura do site e conteúdo institucional.
- `assets/`: identidade visual, imagens e comportamento da interface.
- `data/`: catálogos, fichas detalhadas, índices e manifestos mantidos no próprio repositório.
- `scripts/`: ferramentas auxiliares de manutenção e validação dos dados.

## Manutenção dos catálogos
Os dados utilizados pelo site são publicados como arquivos locais dentro da pasta `data/`. O frontend consulta esses arquivos do próprio repositório, sem depender de consultas em tempo real a serviços externos para carregar os catálogos e as fichas.

Ao atualizar os dados:
1. Preserve os identificadores dos itens para manter as associações entre catálogo, fichas detalhadas e builds.
2. Atualize os manifestos correspondentes quando houver inclusão, remoção ou divisão de arquivos.
3. Verifique se os registros e atributos estão completos e coerentes.
4. Não estime nem invente valores ausentes; mantenha-os identificados como não disponíveis.
5. Registre as alterações em commits para manter o histórico de manutenção.

## Independência e propriedade intelectual
O Chrono Odyssey Companion é um projeto comunitário independente, gratuito e sem finalidade comercial, desenvolvido por fãs. Não é oficial e não possui vínculo, parceria, patrocínio ou aprovação da Chrono Studio, Kakao Games ou de quaisquer empresas responsáveis pelo jogo.

Chrono Odyssey, seus nomes, marcas, personagens, imagens e demais elementos relacionados ao jogo pertencem aos respectivos titulares. O Companion não reivindica a propriedade desses elementos e é mantido para fins informativos e comunitários.

A indicação de que o projeto é não oficial e não comercial não substitui autorizações ou licenças que possam ser necessárias para utilizar materiais protegidos. Antes de redistribuir imagens, textos ou outros assets, é necessário verificar os direitos e as condições de uso aplicáveis.

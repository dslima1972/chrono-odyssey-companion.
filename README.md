# Chrono Odyssey Companion

Compêndio comunitário em português para Chrono Odyssey, publicado como site estático pelo GitHub Pages.

## Estrutura
- `index.html`: estrutura do site.
- `assets/`: identidade visual e comportamento da interface.
- `data/questlog-export.json`: arquivo de catálogo exportado do Questlog (fonte principal).
- `data/weapons.json`: arquivo reserva inicial.

## Atualizar o catálogo (sem API automática)
O Questlog pode bloquear consultas automatizadas feitas pelo GitHub Actions. Por isso, o Companion não consulta mais a API diretamente.

1. Exporte o catálogo de armas do Questlog pelo navegador e salve o arquivo em formato JSON.
2. No GitHub, abra este repositório e entre na pasta `data`.
3. Use **Add file → Upload files**.
4. Envie o arquivo exportado com o nome exato `questlog-export.json`.
5. Confirme em **Commit changes** na branch `main`.

O GitHub Pages publica a atualização automaticamente após o commit. O site tenta ler primeiro `data/questlog-export.json` e aceita uma lista JSON direta ou objetos com listas em `items`, `pageData`, `records` ou `registros`.

Se o formato do arquivo exportado for diferente, não altere o conteúdo manualmente: o arquivo poderá ser analisado e adaptado depois de enviado ao repositório.

## Dados e precisão
Questlog é a fonte principal para os registros do catálogo. O Companion não inventa atributos, efeitos, requisitos ou valores ausentes.

Projeto comunitário não oficial. Chrono Odyssey é propriedade de seus respectivos titulares.

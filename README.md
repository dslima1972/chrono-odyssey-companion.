# Chrono Odyssey Companion

Compêndio comunitário em português para Chrono Odyssey, publicado como site estático pelo GitHub Pages.

## Estrutura
- `index.html`: estrutura do site.
- `assets/`: identidade visual e comportamento da interface.
- `data/weapons.json`: catálogo obtido do Questlog.
- `scripts/fetch-questlog.mjs`: sincronização do catálogo.
- `.github/workflows/sync-questlog.yml`: atualização diária e manual.
- `.github/workflows/deploy-pages.yml`: publicação automática no GitHub Pages.

## Primeira publicação
No GitHub, acesse **Settings → Pages** e selecione **GitHub Actions** em *Build and deployment*. Depois, acesse **Actions** e execute manualmente o fluxo **Atualizar catálogo Questlog**.

A publicação do site ocorre automaticamente a cada atualização na branch `main`.

## Dados e precisão
Questlog é a fonte principal para os registros do catálogo. A sincronização preserva os campos retornados pela fonte; o Companion não inventa atributos, efeitos, requisitos ou valores ausentes.

Projeto comunitário não oficial. Chrono Odyssey é propriedade de seus respectivos titulares.
# Artes de personagens por pose

Esta pasta guarda as artes usadas no personagem central da tela **Classes**.

## Estrutura

Cada classe possui uma subpasta com o nome em minúsculas:

```
characters/
├── swordsman.jpg                 # arte antiga de fallback (preservada)
└── poses/
    ├── README.md
    └── swordsman/
        ├── idle.png
        ├── greatsword.png
        ├── sword-and-shield.png
        └── dual-blades.png
```

## Convenção de nomes

- `idle.png`: personagem sem arma selecionada (aba **Personagem**).
- `<arma>.png`: personagem equipado com a arma correspondente.
- Use nomes de arquivo em minúsculas, separados por hífen, sem acentos.
- Formato PNG. Preserve a resolução, transparência e enquadramento originais.

## Caminhos esperados

Para Swordsman:
- `assets/images/classes/characters/poses/swordsman/idle.png`
- `assets/images/classes/characters/poses/swordsman/greatsword.png`
- `assets/images/classes/characters/poses/swordsman/sword-and-shield.png`
- `assets/images/classes/characters/poses/swordsman/dual-blades.png`

A tela procura primeiro a arte da pose. Se o arquivo ainda não existir ou não carregar, usa automaticamente a arte antiga em `characters/<classe>.jpg`. Assim, as classes sem novas poses continuam funcionando normalmente.

As imagens de seleção, os retratos de personagem já existentes e os ícones de armas permanecem em suas pastas atuais; não os mova.

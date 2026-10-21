  # La Bottega Caporali de Andrade
https://newsand.github.io/LaBottega/

Ateliê de programas livres. A porta de entrada é **[`index.html`](index.html)** — abra no navegador.

```bash
xdg-open index.html
```

---

## As quatro peças

| | Peça | O que é | Documentação |
|---|---|---|---|
| I | **Beholder** | Monitor de processos para Linux, com a VRAM da NVIDIA | [beholder/index.html](beholder/index.html) |
| II | **Sunna** | Mapa da rede local e dos serviços desta máquina | [sunna/index.html](sunna/index.html) |
| III | **Janus** | Serviço de identidade por JWT | [janus/index.html](janus/index.html) |
| IV | **Dedup** | Deduplicador exato de arquivos, por BLAKE3 | [dedup/index.html](dedup/index.html) |

Cada documentação foi escrita a partir do **código e das especificações** de cada projeto, não do arquivo leia-me — que costuma contar menos da metade.

---

## Como está organizado

```
index.html            o ateliê: frontispício, as quatro pranchas, preceitos
beholder/index.html   página única, duas abas (humanos · agentes)
janus/index.html      página única, duas abas
dedup/index.html      página única, duas abas
sunna/                conjunto navegável de seis páginas, com índice lateral
  ├ index.html          visão geral
  ├ inicio.html         primeiros passos
  ├ coletores.html      os seis coletores
  ├ achados.html        regras e evidência
  ├ arquitetura.html    roots, fluxo, escada de níveis
  ├ referencia.html     contratos, para agentes
  └ assets/             folha única, script, estampa
```

O Sunna é o único em múltiplas páginas: tem mais superfície, e o índice lateral dele espelha o rail do próprio aplicativo, que as SPECS chamam de *"o eixo da tela"*.

### Design

Cada projeto tem o seu `MASTER.md` quando a identidade visual foi sistematizada — [beholder/MASTER.md](beholder/MASTER.md), [sunna/MASTER.md](sunna/MASTER.md), [MASTER.md](MASTER.md) do ateliê. São a fonte de verdade dos tokens: nenhum valor de cor ou espaço aparece solto nos documentos.

Todas as quatro compartilham a mesma gramática — serifada nos títulos, ouro como acento, filetes finos, numeração romana — e divergem na temperatura:

| Peça | Fundo | Acento quente | Acento frio |
|---|---|---|---|
| Ateliê | pergaminho queimado | ouro de folha | sépia |
| Beholder | azul-preto | ouro frio | ciano, o olhar |
| Sunna | azul-noite | ouro solar | azul estelar |
| Dedup | neutro profundo | ouro | pedra, e carmim de rubrica |

---

## Sem dependências

HTML, CSS e JavaScript escritos à mão. Sem framework, sem empacotador, sem instalação. O único recurso externo é a fonte Cormorant Garamond no ateliê, servida pelo Google Fonts, com Georgia como reserva — se não carregar, a página continua inteira.

As estampas do ateliê e do Dedup são **gravura vetorial em SVG**, desenhada no próprio documento.

---

**Manutenção:** filipe@buskar.me · Licença MIT

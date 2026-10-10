# MASTER Design System — Sunna

> Mesma gramática do [Beholder](../beholder/MASTER.md), temperatura oposta. Lá o frio de quem vigia; aqui o ouro de quem ilumina.

A tapeçaria de abertura **é** a identidade: moldura ornamental, runas nas bordas, e constelações ligadas por linhas de luz — um mapa de rede desenhado séculos antes de existir rede. Toda escolha abaixo serve a ela.

---

## Estampa de abertura

`assets/hero-opt.jpg` — Sunna, deusa solar, sustentando uma teia de nós e arestas sobre montanhas ao pôr do sol. Moldura dupla com entrelaçado nórdico.

- **Enquadramento:** `background-size: contain`. A moldura da tapeçaria nunca é decepada — é metade da obra.
- **Proporção:** 3:2 (a arte é 1500×1000)
- **Véu:** gradiente só nas bordas, fundindo a estampa no fundo da página
- **Título:** a palavra SUNNA já está na arte. O `<h1>` da página repete em serif e letterspacing largo, ecoando a composição em vez de competir com ela.

---

## Paleta

Extraída da própria tapeçaria.

### Ouro solar — o eixo
| token | hex | papel |
|---|---|---|
| `--sun-300` | `#F5E3B8` | creme de pergaminho; títulos grandes |
| `--sun-400` | `#FFCF6B` | ouro do halo; destaques |
| `--sun-500` | `#F0B840` | ouro de SUNNA; acento primário, filetes |
| `--sun-700` | `#B8821F` | ouro profundo; bordas em repouso |

### Azul noturno — o fundo
| token | hex | papel |
|---|---|---|
| `--navy-900` | `#0A1220` | fundo da página |
| `--navy-800` | `#0E1A2E` | superfície de card e bloco de código |
| `--navy-700` | `#142440` | código inline, realce de linha |
| `--navy-600` | `#1C3050` | bordas sutis |

### Azul estelar — a constelação
| token | hex | papel |
|---|---|---|
| `--star-400` | `#8FB4DE` | numeração de seção, rótulos |
| `--star-600` | `#5A7FA8` | variante contida |

### Tinta
| token | hex | papel |
|---|---|---|
| `--ink-100` | `#F0EADC` | texto de abertura |
| `--ink-300` | `#C9C0AE` | corpo |
| `--ink-500` | `#8D8674` | secundário, metadados |
| `--ink-700` | `#5A5549` | desabilitado |

**Sem neon.** Sem verde, sem vermelho, sem roxo. Estado se comunica por brilho de ouro e por palavra escrita, não por semáforo.

---

## Tipografia

Idêntica ao Beholder — é o que faz os dois lerem como irmãos.

- **Serif** (Georgia, Iowan Old Style, Palatino): todo título, `<h1>`–`<h3>`, primeira coluna de tabela, rótulo de aba. Peso 700.
- **Sans** (pilha de sistema): corpo, descrições, rótulos de interface. Peso 400/600.
- **Mono** (SF Mono, Monaco, Cascadia): código e nomes técnicos.

**Desvio próprio de Sunna:** `letter-spacing: 0.08em` no `<h1>`, ecoando o `S U N N A` espaçado da tapeçaria. É o único lugar onde os dois projetos divergem tipograficamente.

### Escala
| papel | tamanho | entrelinha |
|---|---|---|
| h1 | `clamp(2.6rem, 7vw, 4.5rem)` | 1.05 |
| h2 | `clamp(1.9rem, 3.5vw, 2.6rem)` | 1.2 |
| h3 | 1.35rem | 1.4 |
| corpo | 1rem | 1.7 |
| abertura (lede) | 1.15rem serif | 1.65 |
| código | 0.85rem | 1.75 |

Capitular no primeiro parágrafo de cada aba: 4.2rem, serif, `--sun-500`.

---

## Espaçamento, raio, sombra

Base 8. Tokens `--space-1` (4px) a `--space-24` (96px).
Raio: `--radius-sm` 3px, `--radius-md` 6px, `--radius-lg` 10px.
Sombra: `--shadow-sm`, `--shadow-md`, e `--shadow-sun` (`0 0 24px rgba(240,184,64,0.16)`) para o brilho de ouro em hover.

---

## Movimento

`cubic-bezier(0.4, 0, 0.2, 1)` — 150ms / 250ms / 350ms.

Sem mola, sem salto. A tapeçaria é imóvel por natureza; o movimento aqui só confirma que algo respondeu.

`prefers-reduced-motion: reduce` anula transições, o deslocamento do card e a entrada do painel.

---

## Ornamento

`✺` entre seções, ladeado por filetes de ouro a 28% — eco das rosas-dos-ventos nos cantos da tapeçaria. No Beholder o mesmo lugar leva `❖`; no Dedup, um losango.

---

## Rail — o eixo

As SPECS do produto dizem que *"o índice/rail de navegação é o eixo da tela"*, e que ele foi preservado por ser a única parte boa da versão anterior do painel. A documentação herda o mesmo eixo: **a doc se navega como o app se navega.**

### Comportamento, espelhando `SPECS/07-ui.md`

| largura | forma |
|---|---|
| ≥ 1180px | rail fixo à esquerda, 248px, conteúdo ao centro |
| 860–1180px | rail fixo à esquerda, 208px |
| < 860px | rail vira barra horizontal grudada no topo, rolável na horizontal |

### Estrutura

Dois grupos, rotulados — é o que substitui as abas "para humanos / para agentes" da versão de página única:

```
SUNNA
  guia
    ├ Visão geral      index.html
    ├ Primeiros passos inicio.html
    ├ Coletores        coletores.html
    ├ Achados          achados.html
    └ Arquitetura      arquitetura.html
  referência
    └ Contratos        referencia.html
```

### Estados do item do rail

| estado | tratamento |
|---|---|
| repouso | `--ink-500`, sem filete |
| hover | `--sun-400` |
| foco | contorno `--star-600` 2px, deslocado 3px |
| ativo | `--sun-500` + filete de ouro de 2px à esquerda (vertical no rail, inferior na barra) |
| visitado | sem distinção — é navegação, não hipertexto solto |

O rótulo de grupo (`guia`, `referência`) é caixa-baixa, `letter-spacing` 0.24em, `--stone`/`--star-400`, e nunca é clicável.

---

## Nota sobre a paleta do produto

O aplicativo Sunna **não** usa esta paleta. `SPECS/07-ui.md` define para ele neutros de aço frio com acento teal, tipografia IBM Plex empacotada localmente, e proíbe Google Fonts porque o app roda offline.

Isto aqui é outro objeto: material editorial que abre com a capa do repositório. A tapeçaria é a marca; o aço frio é a ferramenta. Não reconcilie os dois — se um dia a doc precisar exibir uma captura de tela do app, ela entra como imagem, com a moldura da doc ao redor, sem que as paletas se misturem.

---

## Componentes

| componente | repouso | hover | foco | ativo | desabilitado |
|---|---|---|---|---|---|
| **aba** | `--ink-500` | `--sun-400` | contorno `--star-600`, 2px | `--sun-500` | `--ink-700` |
| **card** | borda-esquerda `--sun-500` 2px, sombra sm | sombra md + `--shadow-sun`, sobe 3px | — | — | — |
| **linha de tabela** | transparente | fundo `--navy-800` | — | — | — |
| **nota** | borda-esquerda `--star-600` | — | — | — | — |

Primeira coluna de toda tabela em serif `--sun-400`: é o que dá o ritmo de manuscrito.

---

## Contraste verificado

Todo par de texto do documento foi computado. O menor é 5,0:1; o alvo é 4,5:1 para corpo.

---

## Regras de implementação

1. Nenhum hex fora de `:root`. Todo valor vem de token.
2. A estampa nunca é cortada — `contain`, sempre.
3. Serif em título é inegociável: é a assinatura da coleção.
4. Ouro indica interação; azul estelar indica estrutura (numeração, rótulo).
5. Nada de badge colorido. Severidade é texto.

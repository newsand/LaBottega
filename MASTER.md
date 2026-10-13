# MASTER Design System — La Bottega Caporali de Andrade

> Penumbra de pergaminho queimado, ouro de folha aplicada. O ateliê é a vitrine; as quatro documentações são o acervo. Devem parecer da mesma casa, e não iguais.

---

## Tese visual

Ateliê em penumbra de pergaminho queimado, ouro de folha como único acento, tipografia Garamond de display em escala dramática contra corpo sóbrio, composição de gabinete organizada por filetes finos, e componentes **emoldurados**: cada projeto é uma prancha pendurada na parede, não um cartão flutuante.

## Tese de interação

Movimento de coisa pesada: o emblema se desenha traço a traço na abertura (1,6s), pranchas revelam por rolagem com escalonamento de 90ms, molduras acendem em ouro ao passar o ponteiro (450ms), parallax contido — e **nada de salto, mola ou quique**: a elegância aqui é a de algo que se move devagar e para com firmeza.

---

## Paleta

### Pergaminho queimado — o fundo
| token | hex | papel |
|---|---|---|
| `--ground` | `#241C14` | fundo da página |
| `--ground-2` | `#1C1610` | base do gradiente das pranchas |
| `--surface` | `#332618` | topo do gradiente das pranchas |
| `--surface-2` | `#3F2F1E` | realce raro |

Luminância do fundo: **1,2%**. Penumbra, não preto — a diferença se vê ao lado de um `#000`.

### Ouro de folha — o acento
| token | hex | papel |
|---|---|---|
| `--gold` | `#C9A227` | filetes, emblema, ornamento |
| `--gold-bright` | `#E8C65C` | hover, monograma, nome da peça iluminado |
| `--gold-deep` | `#AD8A27` | numeração romana, traço secundário da gravura |

### Tinta
| token | hex | papel |
|---|---|---|
| `--sepia` | `#C19B63` | subtítulo em itálico, metadados |
| `--ink` | `#EDE3D0` | títulos |
| `--ink-2` | `#CDBFA6` | corpo |
| `--ink-3` | `#A3957E` | descrição secundária |
| `--ink-4` | `#9A8D79` | rodapé de prancha, rótulos |

### Filetes
`--rule` `rgba(201,162,39,.26)` · `--rule-faint` `rgba(201,162,39,.11)`

**Sem semáforo.** Nenhum verde, vermelho ou azul de estado. O único desvio é o carmim de rubrica na gravura do Dedup, e lá ele é conteúdo, não interface.

---

### Véu da gravura
O frontispício tem uma pintura ao fundo. O véu é o mesmo pergaminho em três paradas:
a gravura aparece no alto e já chegou ao fundo sólido antes de o texto começar.

| token | valor | papel |
|---|---|---|
| `--veil-1` | `rgba(36, 28, 20, 0.62)` | topo — a pintura respira |
| `--veil-2` | `rgba(36, 28, 20, 0.88)` | 40% — o título já está sobre pergaminho |
| `--veil-3` | `rgba(36, 28, 20, 0.97)` | 72% — restam vestígios |

Medido com a pintura real em todo o curso do parallax: o pior fundo que cada texto
encontra dá 5,02:1 (kicker), 10,53:1 (título), 8,51:1 (subtítulo), 4,96:1 (metadados)
e 5,04:1 (chamada de rolagem). Mexer nestes três valores obriga a refazer a conta.

## Tipografia

### Display — Cormorant Garamond
Garamond é tipo do século XVI; a Cormorant é um recorte de display dela. Pesos 300 e 400, mais itálico.

Serve: título do frontispício, títulos de seção, nome das peças, numeração romana, legendas, capitular.

**Reserva:** `Georgia, 'Palatino Linotype', Palatino, serif`. Se o Google Fonts não carregar, a página continua inteira — só perde o refinamento do desenho.

### Corpo — pilha do sistema
`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

Serve: parágrafos, descrições, rótulos. A sans sóbria é o que permite ao display ser dramático sem cansar.

### Escala
| papel | tamanho |
|---|---|
| frontispício | `clamp(2.6rem, 8.5vw, 6.4rem)`, peso 300, entrelinha 0.96 |
| nome do ateliê (itálico) | `0.72em` do acima, `--gold-bright` |
| título de seção | `clamp(1.9rem, 4.4vw, 3.1rem)`, peso 300 |
| nome da peça | `2rem`, peso 400 |
| abertura em itálico | `clamp(1.05rem, 2vw, 1.3rem)` |
| corpo | `1rem`, entrelinha 1.75 |
| rótulo versalete | `0.66–0.74rem`, `letter-spacing` 0.17–0.44em, caixa alta |

O `letter-spacing` largo nos versaletes é o que dá o ar de frontispício gravado. Nunca abaixo de 0.16em.

### Numeração
**Romana, em todo lugar**: seções (I, II, III), pranchas (I–IV), preceitos (I–VI), e o ano no colofão (MMXXVI).

---

## Espaçamento

Base 8, com escala estendida para o respiro de frontispício: `--s1` 4px até `--s40` 160px.

Seções usam `--s40` (160px) de respiro vertical em desktop, `--s24` (96px) em telas pequenas. É denso no conteúdo e generoso entre blocos — gabinete organizado, não galeria vazia.

---

## Movimento

| token | valor | uso |
|---|---|---|
| `--ease` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | tudo |
| `--t-hover` | 450ms | moldura, nome, seta |
| `--t-reveal` | 900ms | entrada por rolagem |
| `--t-draw` | 1600ms | emblema se desenhando |
| `--stagger` | 90ms | entre pranchas |
| `--parallax` | 0.90 | fração da rolagem que a gravura do frontispício percorre |

A curva desacelera forte no fim: é o que produz a sensação de peso parando com firmeza. **Proibido**: `cubic-bezier` com sobressalto, `bounce`, `elastic`, rotação, e qualquer coisa abaixo de 300ms — pressa é o oposto da tese.

### Catálogo de animações
1. **Emblema** — 14 traços com `stroke-dasharray`, escalonados de 0 a 1400ms
2. **Frontispício** — subida escalonada do kicker ao bloco de metadados (1200→1660ms)
3. **Filete vertical** — `scaleY` de 0 a 1 a partir do topo
4. **Revelação por rolagem** — `IntersectionObserver`, opacidade e 26px de subida, com `--delay` por elemento
5. **Ornamento** — os dois filetes crescem do centro para fora, `scaleX`
6. **Prancha em hover** — moldura dupla acende, halo do SVG aparece, traço troca para `--gold-bright`, elevação de 5px, seta avança 5px
7. **Capitular** — flutua à esquerda do primeiro parágrafo do ofício
8. **Parallax** — a gravura do frontispício anda `--parallax` da rolagem, em
   `translate3d` dentro de `requestAnimationFrame`. Ancorada no topo: a folga sobra
   embaixo, porque a fresta ficaria acima de `0.18·S` e a janela já passou de `S`
9. **Cartela** — os dois filetes laterais crescem do centro para fora e as volutas
   fecham depois, em `--t-draw`, escalonadas de 0 a 180ms (`--stagger` dobrado)

O escalonamento vem do CSS, pela variável `--delay`. O script só marca `is-in` e para de observar — a cascata continua sendo decisão de estilo, não de código.

---

## Componentes

### Prancha (`.plate`)
Moldura dupla: borda externa no elemento, borda interna recuada em `--s3` via `::before`, como passe-partout de gravura emoldurada. Fundo em gradiente de 170°, de `--surface` a `--ground-2`.

| estado | tratamento |
|---|---|
| repouso | `--rule-faint` nas duas molduras |
| hover / foco | `--rule` nas duas, sombra + halo de ouro, sobe 5px, nome vira `--gold-bright`, seta avança |
| foco visível | contorno `--gold` 2px, deslocado 4px |
| ativo | sobe só 2px — confirma o toque |
| pendente | opacidade 0.74, seta em `--ink-4` |

### Cartela (`.sec__num` + `.illum`)
Iluminura em volta do algarismo da seção: losango central, dois filetes laterais,
quatro volutas e dois pontos nas pontas. 212px de largura, 168px abaixo de 860px.
Traço de 0.9 a 1, `currentColor` herdando `--gold-deep`, volutas em `--gold`.
O algarismo é `.sec__rom`, sobreposto em `grid/place-items:center` — a cartela não
o contém no SVG, para o texto continuar sendo texto.

Só nas três articulações de seção. **Não entra no corpo do texto, nas pranchas nem
nos preceitos**: a iluminura marca junta de estrutura, não decora parágrafo.

### Preceito (`.tenet`)
Grade de duas colunas: numeral romano alinhado à direita em `--gold-deep`, e o par título/descrição. Separados por `--rule-faint`, sem filete no último.

---

## Gravura vetorial

As estampas são **SVG desenhado à mão no documento**, não imagem raster.

> **Uma exceção, deliberada:** a pintura do artífice no frontispício
> (`assets/artifice.webp`) é raster. Ela não é estampa — não marca nem identifica
> peça alguma; é atmosfera atrás do véu. Toda estampa continua sendo SVG. Se um dia
> uma segunda imagem raster aparecer fora do frontispício, esta regra foi quebrada,
> não estendida. A técnica é a certa para o tema — gravura é como o Renascimento reproduzia imagem — e tem três vantagens práticas: escala sem perder traço, pesa quilobytes, e anima.

| peça | motivo |
|---|---|
| Emblema do ateliê | Rosa de oito pontas, sete circunferências de compasso, monograma CA, quatro cravos cardeais |
| Beholder | Olho central de pupila vertical, seis olhos sentinelas nas hastes |
| Sunna | Sol de raios e a rede como constelação de nós e arestas |
| Janus | Duas faces de perfil opostas num medalhão, chaves cruzadas |
| Dedup | Compasso medindo duas folhas idênticas, pilha convergindo no canônico, rubrica em carmim |

Regra: traço fino (0.6–1.8), sem preenchimento sólido exceto em pontos e no campo central do emblema, e `stroke` sempre a partir de token.

---

## Relação com o acervo

O ateliê **não** é a quinta documentação. É a vitrine, e por isso diverge de propósito:

| | ateliê | documentações |
|---|---|---|
| fundo | pergaminho queimado | azul-noite / neutro profundo |
| display | Cormorant Garamond | Georgia |
| movimento | 450–1600ms, farto | 250ms, contido |
| densidade | respiro de frontispício | denso, de referência |

O que mantém a família: serifada nos títulos, ouro como acento, filetes finos, numeração romana, e a recusa a badges coloridos.

---

## Regras de implementação

1. Nenhum hex fora de `:root`.
2. Nenhuma animação abaixo de 300ms, nenhuma com sobressalto.
3. Numeração sempre romana.
4. Toda prancha é `<a>`, nunca `<div>` com manipulador de clique.
5. `prefers-reduced-motion` anula a animação, nunca o conteúdo: a página inteira continua legível e a gravura chega pronta.
6. Sem badge colorido. Estado é palavra.

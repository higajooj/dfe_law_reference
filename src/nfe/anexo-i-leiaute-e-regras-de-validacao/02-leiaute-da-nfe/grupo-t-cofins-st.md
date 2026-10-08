# Grupo T. COFINS ST

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **313** | **COFINSST (T01)** | **G** | **M01** |  | **0-1** |  | **Grupo COFINS Substituição Tributária** |
| **313.1** | **-x- (T01.1)** | **CG** | **T01** |  | **1-1** |  | **Sequência XML<br>Informar os campos T02 e T03 para cálculo da COFINS Substituição Tributária em percentual.** |
| 314 | vBC (T02) | E | T01.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo da COFINS |
| 315 | pCOFINS (T03) | E | T01.1 | N | 1-1 | 3v2-4 | Alíquota da COFINS (em percentual) |
| **315.1** | **-x- (T03.1)** | **CG** | **T01** |  | **1-1** |  | **Sequência XML<br>Informar os campos T04 e T05 para cálculo da COFINS Substituição Tributária em valor.** |
| 316 | qBCProd (T04) | E | T03.1 | N | 1-1 | 12v0-4 | Quantidade Vendida |
| 317 | vAliqProd (T05) | E | T03.1 | N | 1-1 | 11v0-4 | Alíquota da COFINS (em reais) |
| 318 | vCOFINS (T06) | E | T01 | N | 1-1 | 13v2 | Valor da COFINS |

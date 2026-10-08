# Grupo R. PIS ST

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **287** | **PISST (R01)** | **G** | **M01** |  | **0-1** |  | **Grupo PIS Substituição Tributária** |
| **287.1** | **-x- (R01.1)** | **CG** | **R01** |  | **1-1** |  | **Sequência XML<br>Informar os campos R02 e R03 para cálculo do PIS em percentual.** |
| 288 | vBC (R02) | E | R01.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do PIS |
| 289 | pPIS (R03) | E | R01.1 | N | 1-1 | 3v2-4 | Alíquota do PIS (em percentual) |
| **289.1** | **-x- (R03.1)** | **CG** | **R01** |  | **1-1** |  | **Sequência XML<br>Informar os campos R04 e R05 para cálculo do PIS em valor.** |
| 290 | qBCProd (R04) | E | R031. | N | 1-1 | 12v0-4 | Quantidade Vendida |
| 291 | vAliqProd (R05) | E | R03.1 | N | 1-1 | 11v0-4 | Alíquota do PIS (em reais) |
| 292 | vPIS (R06) | E | R01 | N | 1-1 | 13v2 | Valor do PIS |

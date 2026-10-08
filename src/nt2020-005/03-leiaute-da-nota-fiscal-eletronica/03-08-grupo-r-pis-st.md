<!-- p.15 -->
# 3.8. Grupo R. PIS ST

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **287** | **R01** | **PISST** | **Grupo PIS Substituição Tributária** | **G** | **M01** | | **0-1** | | |
| **287.1** | **R01.1** | **-x-** | **Sequência XML** | **CG** | **R01** | | **1-1** | | **Informar os campos R02 e R03 para cálculo do PIS em percentual** |
| 288 | R02 | vBC | Valor da Base de Cálculo do PIS | E | R01.1 | N | 1-1 | 13v2 | |
| 289 | R03 | pPIS | Alíquota do PIS (em percentual) | E | R01.1 | N | 1-1 | 3v2-4 | |
| **289.1** | **R03.1** | **-x-** | **Sequência XML** | **CG** | **R01** | | **1-1** | | **Informar os campos R04 e R05 para cálculo do PIS em valor** |
| 290 | R04 | qBCProd | Quantidade Vendida | E | R031. | N | 1-1 | 12v0-4 | |
| 291 | R05 | vAliqProd | Alíquota do PIS (em reais) | E | R03.1 | N | 1-1 | 11v0-4 | |
| 292 | R06 | vPIS | Valor do PIS | E | R01 | N | 1-1 | 13v2 | |
| 292.01 | R07 | indSomaPISST | Indica se o valor do PISST compõe o valor total da NF-e | E | R01 | N | 0-1 | 1 | 0=Valor do PISST não compõe o valor total da NF-e<br>1=Valor do PISST compõe o valor total da NF-e |

<!-- REVISAR p.15: o campo Pai da linha 290 (R04) está transcrito como "R031." no original; provável "R03.1", a confirmar. -->

<!-- p.15 -->
# 3.9. Grupo T. COFINS ST

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **313** | **T01** | **COFINSST** | **Grupo COFINS Substituição Tributária** | **G** | **M01** | | **0-1** | | |
| **313.1** | **T01.1** | **-x-** | **Sequência XML** | **CG** | **T01** | | **1-1** | | **Informar os campos T02 e T03 para cálculo da COFINS Substituição Tributária em percentual** |
| 314 | T02 | vBC | Valor da Base de Cálculo da COFINS | E | T01.1 | N | 1-1 | 13v2 | |
| 315 | T03 | pCOFINS | Alíquota da COFINS (em percentual) | E | T01.1 | N | 1-1 | 3v2-4 | |
| **315.1** | **T03.1** | **-x-** | **Sequência XML** | **CG** | **T01** | | **1-1** | | **Informar os campos T04 e T05 para cálculo da COFINS Substituição Tributária em valor** |
| 316 | T04 | qBCProd | Quantidade Vendida | E | T03.1 | N | 1-1 | 12v0-4 | |
| 317 | T05 | vAliqProd | Alíquota da COFINS (em reais) | E | T03.1 | N | 1-1 | 11v0-4 | |
| 318 | T06 | vCOFINS | Valor da COFINS | E | T01 | N | 1-1 | 13v2 | |
| 318.01 | T07 | indSomaCOFINSST | Indica se o valor da COFINS ST compõe o valor total da NF-e | E | T01 | N | 0-1 | 1 | 0=Valor da COFINSST não compõe o valor total da NF-e<br>1=Valor da COFINSST compõe o valor total da NF-e |

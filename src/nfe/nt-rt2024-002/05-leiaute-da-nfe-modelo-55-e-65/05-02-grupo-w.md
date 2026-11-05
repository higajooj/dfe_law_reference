<!-- p.21 -->
# 5.2. Grupo W. Total da NF-e

<!-- REVISAR p.21: o item W40 aparece numerado como 355.1 no original (esperado 355.10); transcrito como no original -->
<!-- REVISAR p.22: o item W50 aparece numerado como 355.2 no original (esperado 355.20); transcrito como no original -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **355.1** | **W31** | **IBSCBSSelTot** | **Totais da NF-e com IBS, CBS e IS** | **G** | **A01** |  | **0-1** |  | **O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens. O IBS, a CBS e o IS são por fora, por isso seus valores devem ser adicionados ao valor total da NF.** |
| **355.2** | **W32** | **gSel** | **Grupo total do imposto seletivo** | **G** | **W31** |  | **0-1** |  |  |
| 355.3 | W33 | vBCSel | Total da base de cálculo do imposto seletivo | E | W32 | N | 1-1 | 11v0-4 |  |
| 355.4 | W34 | vImpSel | Total do imposto seletivo | E | W32 | N | 1-1 | 13v2 |  |
| 355.5 | W35 | vBCIBSCBS | Valor total da BC do IBS e da CBS | E | W31 | N | 1-1 | 13v2 |  |
| **355.6** | **W36** | **gIBS** | **Grupo total do IBS** | **G** | **W31** |  | **1-1** |  |  |
| **355.7** | **W37** | **gIBSUFTot** | **Grupo total do IBS da UF** | **G** | **W36** |  | **1-1** |  |  |
| 355.8 | W38 | vCresPres | Valor total do crédito presumido | E | W37 | N | 1-1 | 13v2 |  |
| 355.9 | W39 | vDif | Valor total do diferimento | E | W37 | N | 1-1 | 13v2 |  |
| 355.1 | W40 | vDevTrib | Valor total de devolução de tributos | E | W37 | N | 1-1 | 13v2 |  |
| 355.11 | W41 | vDeson | Valor total de desoneração | E | W37 | N | 1-1 | 13v2 |  |
| 355.12 | W42 | vIBSUF | Valor total do IBS da UF | E | W37 | N | 1-1 | 13v2 |  |
| **355.13** | **W43** | **gIBSMunTot** | **Grupo total do IBS do Município** | **G** | **W36** |  | **1-1** |  |  |
| 355.14 | W44 | vCresPres | Valor total do crédito presumido | E | W43 | N | 1-1 | 13v2 |  |
| 355.15 | W45 | vDif | Valor total do diferimento | E | W43 | N | 1-1 | 13v2 |  |
| 355.16 | W46 | vDevTrib | Valor total de devolução de tributos | E | W43 | N | 1-1 | 13v2 |  |
| 355.17 | W47 | vDeson | Valor total de desoneração | E | W43 | N | 1-1 | 13v2 |  |
| 355.18 | W48 | vIBSMun | Valor total do IBS do Município | E | W43 | N | 1-1 | 13v2 |  |
| 355.19 | W49 | vIBSTot | Valor total do IBS | E | W43 | N | 1-1 | 13v2 |  |

<!-- p.22 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **355.2** | **W50** | **gCBS** | **Grupo total da CBS** | **G** | **W36** |  | **1-1** |  |  |
| 355.21 | W51 | vCresPres | Valor total do crédito presumido | E | W50 | N | 1-1 | 13v2 |  |
| 355.22 | W52 | vDif | Valor total do diferimento | E | W50 | N | 1-1 | 13v2 |  |
| 355.23 | W53 | vDevTrib | Valor total de devolução de tributos | E | W50 | N | 1-1 | 13v2 |  |
| 355.24 | W54 | vDeson | Valor total de desoneração | E | W50 | N | 1-1 | 13v2 |  |
| 355.25 | W55 | vCBS | Valor total da CBS | E | W50 | N | 1-1 | 13v2 |  |
| **355.26** | **W56** | **gMono** | **Grupo total da Monofasia** | **G** | **W36** |  | **0-1** |  |  |
| 355.27 | W57 | vTotIBSMono | Total do IBS monofásico | E | W56 | N | 1-1 | 13v2 |  |
| 355.28 | W58 | vTotCBSMono | Total da CBS monofásica | E | W56 | N | 1-1 | 13v2 |  |
| 355.29 | W59 | vTotNF | Valor total da NF-e com IBS / CBS / IS | E | W56 | N | 1-1 | 13v2 | O IBS, a CBS e o IS são por fora, por isso seus valores devem ser adicionados ao valor total da NF. |

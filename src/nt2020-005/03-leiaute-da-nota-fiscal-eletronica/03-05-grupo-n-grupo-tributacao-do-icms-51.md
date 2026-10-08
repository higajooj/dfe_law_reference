<!-- p.12 -->
# 3.5. Grupo N. Grupo tributação do ICMS=51

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **212.01** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N07** | | **0-1** | | **Grupo Opcional** |
| 212.02 | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.1 | N | 1-1 | 13v2 | Informar a Base de Cálculo do FCP |
| 212.03 | N17b | pFCP | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) |
| 212.04 | N17c | vFCP | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). Valor realmente devido, já considerando o diferimento. ~~Valor como se não houvesse diferimento~~ |
| **212.05** | **N17.2** | **-x-** | **Sequência XML** | **G** | **N07** | | **0-1** | | **Grupo Opcional** |

> **Revogado/Descontinuado:** a expressão “Valor como se não houvesse diferimento” (vFCP – N17c, 212.04) está riscada na NT original.

<!-- p.13 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 212.06 | N17d | pFCPDif | Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.2 | N | 1-1 | 3v2-4 | Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP). No caso de diferimento total, informar o percentual de diferimento "100" |
| 212.07 | N17e | vFCPDif | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido | E | N17.2 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido |
| 212.08 | N17f | vFCPEfet | Valor efetivo do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.2 | N | 0-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) realmente devido. |

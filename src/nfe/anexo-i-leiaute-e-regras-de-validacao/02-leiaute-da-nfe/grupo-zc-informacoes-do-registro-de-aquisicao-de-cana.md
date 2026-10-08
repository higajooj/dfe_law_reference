# Grupo ZC. Informações do Registro de Aquisição de Cana

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **409** | **cana (ZC01)** | **G** | **A01** |  | **0-1** |  | **Grupo Cana<br>Informações de registro aquisições de cana v2.0** |
| 410 | safra (ZC02) | E | ZC01 | C | 1-1 | 4 - 9 | Identificação da safra<br>Informar a safra, no formato: "AAAA" ou "AAAA/AAAA". v2.0 <!-- p.65 --> |
| 411 | ref (ZC03) | E | ZC01 | C | 1-1 | 7 | Mês e ano de referência<br>Informar o mês e ano de referência, no formato: "MM/AAAA". v2.0 |
| **412** | **forDia (ZC04)** | **G** | **ZC01** |  | **1 -31** |  | **Grupo Fornecimento diário de cana<br>Informar os fornecimentos diários de cana v2.0** |
| 427 | dia (ZC05) | A | ZC04 | N | 1-1 | 1 - 2 | Dia<br>v2.0 |
| 414 | qtde (ZC06) | E | ZC04 | N | 1-1 | 11v10 | Quantidade<br>Quantidade em KG v2.0 |
| 415 | qTotMes (ZC07) | E | ZC01 | N | 1-1 | 11v10 | Quantidade Total do Mês<br>v2.0 |
| 416 | qTotAnt (ZC08) | E | ZC01 | N | 1-1 | 11v10 | Quantidade Total Anterior<br>v2.0 |
| 417 | qTotGer (ZC09) | E | ZC01 | N | 1-1 | 11v10 | Quantidade Total Geral<br>v2.0 |
| **418** | **deduc (ZC10)** | **G** | **ZC01** |  | **0-10** |  | **Grupo Deduções – Taxas e Contribuições<br>Informar as Deduções – Taxas e Contribuições v2.0** |
| 419 | xDed (ZC11) | E | ZC10 | C | 1-1 | 1 - 60 | Descrição da Dedução<br>Informar a Descrição da Dedução v2.0 |
| 420 | vDed (ZC12) | E | ZC10 | N | 1-1 | 13v2 | Valor da Dedução<br>v2.0 |
| 421 | vFor (ZC13) | E | ZC01 | N | 1-1 | 13v2 | Valor dos Fornecimentos<br>Valor dos Fornecimentos v2.0 |
| 422 | vTotDed (ZC14) | E | ZC01 | N | 1-1 | 13v2 | Valor Total da Dedução<br>Valor das deduções v2.0 |
| 423 | vLiqFor (ZC15) | E | ZC01 | N | 1-1 | 13v2 | Valor Líquido dos Fornecimentos<br>Valor Líquido dos Fornecimentos v2.0 |

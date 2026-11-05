<!-- p.14 -->
# 5. Leiaute da NF-e (Modelo 55 e 65)

## Grupo B. Identificação da Nota Fiscal eletrônica

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 29 | B25 | finNFe | Finalidade de emissão da NF-e | E | B01 | N | 1-1 | 1 | 1=NF-e normal;<br>2=NF-e complementar;<br>3=NF-e de ajuste;<br>4=Devolução de mercadoria.<br>5=Nota de crédito<br>6=Nota de débito |

## Grupo N01. ICMS Normal e ST

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **164** | **N01** | **ICMS** | **Informações do ICMS da Operação própria e ST** | **CG** | **M01** | | **0-1** | | **Informar apenas um dos grupos de tributação do ICMS (ICMS00, ICMS10, ...) (v2.0)** |

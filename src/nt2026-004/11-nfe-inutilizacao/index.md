<!-- p.14 -->
# 11. Web Service – NfeInutilizacao

## 1.1. Leiaute Mensagem de Entrada

Schema XML: inutNFe_v4.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| DP09 | CNPJ | E | DP03 | C | 1-1 | 14 | CNPJ do emitente |

## 1.2. Leiaute Mensagem de Retorno

Schema XML: retInutNFe_v4.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| DR11 | CNPJ | E | DR03 | C | 0-1 | 14 | CNPJ do emitente |

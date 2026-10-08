<!-- p.13 -->
# 9. Web Service – NFeRecepcaoEvento – EPEC

## 1.1. Leiaute Mensagem de Entrada

Schema XML: envEPEC_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P26** | **dest** | **G** | **P17** | **-** | **1-1** | **-** | |
| P28 | CNPJ | CE | P26 | C | 1-1 | 14 | Informar o CPF ou o CNPJ do destinatário, preenchendo os zeros não significativos. No caso de operação com exterior, ou para comprador estrangeiro, informar a tag “idEstrangeiro”, com o número do passaporte, ou outro documento legal (campo aceita valor Nulo no caso de operação com exterior). |

## 1.2. Leiaute Mensagem de Retorno

Schema XML: retEnvEPEC_v1.00

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| R32 | chNFePend | E | R11 | C | 0-50 | 44 | Relação de Chaves de Acesso de EPEC pendentes de conciliação, existentes no AN. |

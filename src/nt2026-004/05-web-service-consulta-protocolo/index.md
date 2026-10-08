<!-- p.11 -->
# 5. Web Service – NfeConsultaProtocolo

## 1.1. Leiaute Mensagem de Entrada

Schema XML: consSitNFe_4.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **EP01** | **consSitNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| EP05 | chNFe | E | EP01 | C | 1-1 | 44 | Chave de Acesso da NF-e. |

## 1.2. Leiaute Mensagem de Retorno

Schema XML: retConsSitNFe_v4.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **ER01** | **retConsSitNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| ER07b | chNFe | E | ER01 | C | 1-1 | 44 | Chave de Acesso da NF-e consultada. |

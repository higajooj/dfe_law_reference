# 04.3 Leiaute Mensagem de Retorno

Schema XML: retConsGTIN_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retConsGTIN** | **Raiz** | **-** | **-** | **-** | **-** | **Tag Raiz da mensagem de retorno** |
| R02 | versao | A | R01 | N | 1-1 | 2v2 | Idem mensagem de entrada, ou versão mais recente do leiaute |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que atendeu a requisição. |
| R07 | cStat | E | R01 | N | 1-1 | 4 | Código do status da resposta. Se não tiver erro, será retornado: “9490 – Consulta realizada com sucesso“ |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| R09 | dhResp | E | R01 | DH | 1-1 | - | Data e hora da resposta no formato AAAA-MM-DDThh:mm:ssTZD (UTC – Universal Coordinate Time) |
| R10 | GTIN | E | R01 | N | 0-1 | 8-14 | Idem mensagem de entrada |
| R11 | tpGTIN | E | R01 | N | 0-1 | 1-2 | Tipos possíveis: 8, 12, 13, 14 |
| R12 | xProd | E | R01 | C | 0-1 | 1-500 | Descrição do Produto, cadastrada pelo “Dono da Marca” na GS1, para o GTIN consultado |
| R13 | NCM | E | R01 | N | 0-1 | 8 | Código do NCM, cadastrado pelo “Dono da Marca” na GS1, para o GTIN consultado |
| R14 | CEST | E | R01 | N | 0-3 | 7 | Código do CEST, cadastrado pelo “Dono da Marca” na GS1. Normalmente um Produto (definido pelo código do GTIN) está vinculado a somente 1 CEST, mas existem situações pouco frequentes onde um Produto pode estar associado a mais de 1 CEST, conforme a operação. |

# 1.1.2 Leiaute Mensagem de Retorno

**Retorno:** Estrutura XML com a mensagem do resultado do envio da GTVe

**Schema XML: retGTVe_v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **CR01** | **retGTVe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| CR02 | Versão | A | CR01 | N | 1 - 1 | 2v2 | Versão do leiaute |
| CR03 | tpAmb | E | CR01 | N | 1 - 1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| CR04 | cUF | E | CR01 | N | 1 - 1 | 2 | Código da UF que atendeu à solicitação. |
| CR05 | verAplic | E | CR01 | C | 1 - 1 | 1-20 | Versão do Aplicativo que recebeu a GTVe. |
| CR06 | cStat | E | CR01 | N | 1 - 1 | 3 | Código do status da resposta |
| CR07 | xMotivo | E | CR01 | C | 1 - 1 | 1-255 | Descrição literal do status da resposta |
| CR08 | protCTe | E | CR01 | G | 0 - 1 | XML | Resposta ao processamento da GTVe |

<!-- p.51 -->
# 8.2. Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado da transmissão.

Schema XML: retEnvFiscoNFe_v1.0.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Resultado do Envio do Evento** |
| R02 | versao | A | R01 | N | 1-1 | 1-4v2 | Versão do leiaute |
| R03 | idLote | E | R01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial autoincremental único para identificação do Lote. Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| R04 | tpAmb | E | R01 | N | 1-1 | 1 | |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que processou o evento. |
| R06 | cOrgao | E | R01 | N | 1-1 | 2 | Código da UF que registrou o Evento. Utilizar 90 para o Ambiente Nacional. |
| R07 | cStat | E | R01 | N | 1-1 | 3 | Código do status da resposta |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| **R09** | **retEvento** | **G** | **R01** | **-** | **0-20** | **-** | **TAG de grupo do resultado do processamento do Evento** |
| R10 | versao | A | R09 | N | 1-1 | 1-4v2 | Versão do leiaute |
| **R11** | **infEvento** | **G** | **R09** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| R12 | Id | ID | R11 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal “ID” |
| R13 | tpAmb | E | R11 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 – Homologação |
| R14 | verAplic | E | R11 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| R15 | cOrgao | E | R11 | N | 1-1 | 2 | Código da UF que registrou o Evento. Utilizar 90 para o Ambiente Nacional. |
| R16 | cStat | E | R11 | N | 1-1 | 3 | Código do status da resposta. |
| R17 | xMotivo | E | R11 | C | 1-1 | 1-255 | Descrição do status da resposta. |
| R18 | chNFe | E | R11 | N | 0-1 | 44 | Chave de Acesso da NF-e vinculada ao evento. |
| R19 | tpEvento | E | R11 | N | 0-1 | 6 | Código do Tipo do Evento: 411500 - resposta ao pedido de prorrogação 1º prazo; 411501 - resposta ao pedido de prorrogação 2º prazo; 411502 - resposta ao cancelamento de prorrogação de 1º prazo; 411503 - resposta ao cancelamento de prorrogação de 2º prazo |
| R20 | xEvento | E | R11 | C | 0-1 | 5-60 | Descrição do Evento – “Evento do fisco registrado” |

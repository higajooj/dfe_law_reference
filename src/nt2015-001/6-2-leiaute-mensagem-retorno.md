<!-- p.33 -->
# 6.2. Leiaute Mensagem de Retorno

Schema XML: retPProrrogNFe_v1.0.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Resultado do Envio do Evento** |
| R02 | versao | A | R01 | N | 1-1 | 1-4 | Versão do leiaute |
| R03 | idLote | E | R01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial autoincremental único para identificação do Lote. |
| R04 | tpAmb | E | R01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que processou o evento. |
| R06 | cOrgao | E | R01 | N | 1-1 | 2 | Código da UF que registrou o Evento. Utilizar 90 para o Ambiente Nacional. |
| R07 | cStat | E | R01 | N | 1-1 | 3 | Código do status da resposta |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| **R09** | **retEvento** | **G** | **R01** | **-** | **1-20** | **-** | **TAG de grupo do resultado do processamento do Evento** |
| R10 | versao | A | R09 | N | 1-1 | 1-4 | Versão do leiaute |
| **R11** | **infEvento** | **G** | **R09** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| R12 | Id | ID | R11 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal “ID” |
| R13 | tpAmb | E | R11 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 – Homologação |
| R14 | verAplic | E | R11 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| R15 | cOrgao | E | R11 | N | 1-1 | 2 | Código da UF que registrou o Evento. Utilizar 90 para o Ambiente Nacional. |
| R16 | cStat | E | R11 | N | 1-1 | 3 | Código do status da resposta. |
| R17 | xMotivo | E | R11 | C | 1-1 | 1-255 | Descrição do status da resposta. |
| R18 | chNFe | E | R11 | N | 0-1 | 44 | Chave de Acesso da NF-e vinculada ao evento. |
| R19 | tpEvento | E | R11 | N | 0-1 | 6 | Código do Tipo do Evento: 111500 - Pedido de Prorrogação 1º prazo; 111501 - Pedido de Prorrogação 2º prazo |
| R20 | xEvento | E | R11 | C | 0-1 | 5-60 | Descrição do Evento – “Pedido de Prorrogação registrado” |
| R21 | nSeqEvento | E | R11 | N | 0-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento, como é o caso da Carta de Correção, Pedido de Prorrogação e Fisco, o autor do evento deve numerar de forma sequencial. |
| R22 | CNPJDest | E | R11 | N | 0-1 | 14 | Informar o CNPJ do destinatário da NF-e. |
| R23 | emailDest | E | R11 | C | 0-1 | 1-60 | email do destinatário informado na NF-e. |
| R24 | dhRegEvento | E | R11 | D | 1-1 | - | Data e hora de registro do evento no formato AAAA-MM-DDTHH:MM:SSTZD (formato UTC, onde TZD é +HH:MM ou –HH:MM), se o evento for rejeitado informar a data e hora de recebimento do evento. |
| R25 | nProt | E | R11 | N | 0-1 | 15 | Número do Protocolo do Evento: 1 posição (1-Secretaria da Fazenda Estadual, 2-RFB), 2 posições para o código da UF, 2 posições para o ano e 10 posições para o sequencial no ano. |
| R26 | Signature | G | R09 | XML 0-1 | - | - | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério da UF. |

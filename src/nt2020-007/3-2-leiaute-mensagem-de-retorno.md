<!-- p.7 -->
# 03.2 Leiaute Mensagem de Retorno

O Web Service de Registro de Evento possui uma interface genérica, complementada por uma área específica para cada tipo de evento. Segue o leiaute da mensagem de retorno (resposta).

**Schema XML: retEnvEventoNFe_v1.0.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da mensagem de retorno** |
| R02 | versao | A | R01 | N | 1-1 | 2v2 | Versão do leiaute |
| R03 | idLote | E | R01 | N | 1-1 | 1-15 | Idem a mensagem de entrada. |
| R04 | tpAmb | E | R01 | N | 1-1 | 1 | Idem a mensagem de entrada. |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que processou o evento. |
| R06 | cOrgao | E | R01 | N | 1-1 | 2 | Órgão de recepção do Evento, idem a mensagem de entrada. |
| R07 | cStat | E | R01 | N | 1-1 | 3 | Código do status da resposta para o Lote de Eventos. Se não tiver erro, será retornado:<br>“128- Lote de Evento Processado” |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| **R09** | **retEvento** | **G** | **R01** | **-** | **0-20** | **-** | **Grupo do resultado do processamento do para cada Evento** |
| R10 | versao | A | R09 | N | 1-1 | 2v2 | Versão do leiaute |
| **R11** | **infEvento** | **G** | **R09** | | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| R12 | Id | ID | R11 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. No caso de assinatura, preencher com o número do protocolo, precedido pela literal “ID”. |
| R13 | tpAmb | E | R11 | N | 1-1 | 1 | Idem a mensagem de entrada. |
| R14 | verAplic | E | R11 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| R15 | cOrgao | E | R11 | N | 1-1 | 2 | Idem a mensagem de entrada. |
| R16 | cStat | E | R11 | N | 1-1 | 3 | Código do status da resposta. |
| R17 | xMotivo | E | R11 | C | 1-1 | 1-255 | Descrição do status da resposta. |
| R18 | chNFe | E | R11 | N | 0-1 | 44 | Idem a mensagem de entrada. |
| R19 | tpEvento | E | R11 | N | 0-1 | 6 | Idem a mensagem de entrada. |
| R20 | xEvento | E | R11 | C | 0-1 | 5-60 | Idem a mensagem de entrada. |
| R21 | nSeqEvento | E | R11 | N | 0-1 | 1-2 | Idem a mensagem de entrada. |
| R22 | cOrgaoAutor | E | R11 | N | 0-1 | 2 | Idem a mensagem de entrada. |
| R50 | dhRegEvento | E | R11 | D | 1-1 | - | Data e hora de registro do evento no formato AAAA-MM-DDTHH:MM:SS TZD (formato UTC). Se o evento for rejeitado informar a data e hora de recebimento do evento. |
| R51 | nProt | E | R11 | N | 0-1 | 15 | Número Protocolo do Evento 1 posição (1- Secretaria da Fazenda Estadual, 2-RFB), 2 posições para o código da UF, 2 posições para o ano e 10 posições para o sequencial no ano. |
| **R91** | **Signature** | **G** | **R09** | **XML** | **0-1** | **-** | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério da UF.** |

Nota: No caso de evento registrado com sucesso, os campos opcionais serão retornados.

<!-- p.8 -->
# 3.3 Leiaute Mensagem de Retorno

O *Web Service* de Registro de Eventos possui uma interface genérica conhecida, complementada por uma área específica para cada tipo de evento. Segue abaixo a especificação da mensagem de retorno (resposta) para este *Web Service*.

Schema XML: retEventoEPEC_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da mensagem de retorno** |
| R02 | versao | A | R01 | N | 1-1 | 2v2 | Versão do leiaute |
| R03 | idLote | E | R01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada. |
| R04 | tpAmb | E | R01 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção /2=Homologação |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que processou o evento. |
| R06 | cOrgao | E | R01 | N | 1-1 | 2 | Código da UF que registrou o Evento. |
| R07 | cStat | E | R01 | N | 1-1 | 3 | Código do status da resposta |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| **R09** | **retEvento** | **G** | **R01** | **-** | **0-20** | **-** | **TAG de grupo do resultado do processamento do Evento** |
| R10 | versao | A | R09 | N | 1-1 | 2v2 | Versão do leiaute |
| **R11** | **infEvento** | **G** | **R09** |   | **1-1** |   | **Grupo de informações do registro do Evento** |
| R12 | Id | ID | R11 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal “ID” |
| R13 | tpAmb | E | R11 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção /2=Homologação |
| R14 | verAplic | E | R11 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| R15 | cOrgao | E | R11 | N | 1-1 | 2 | Código da UF que registrou o Evento. |
| R16 | cStat | E | R11 | N | 1-1 | 3 | Código do status da resposta. |
| R17 | xMotivo | E | R11 | C | 1-1 | 1-255 | Descrição do status da resposta. |
| R18 | chNFe | E | R11 | N | 0-1 | 44 | Chave de Acesso da NFC-e vinculada ao evento. |
| R19 | tpEvento | E | R11 | N | 0-1 | 6 | 110140 – EPEC |
| R20 | xEvento | E | R11 | C | 0-1 | 5-60 | “EPEC autorizado” |
| R21 | nSeqEvento | E | R11 | N | 0-1 | 1-2 | Sequencial do evento, conforme a mensagem de entrada. |
| R22 | cOrgaoAutor | E | R11 | N | 0-1 | 2 | Idem a mensagem de entrada. |
| R23 | dhRegEvento | E | R11 | D | 1-1 | | Data e hora de registro do evento no formato AAAA-MM-DDTHH:MM:SSTZD (formato UTC, onde TZD é +HH:MM ou –HH:MM). Se o evento for rejeitado informar a data e hora de recebimento do evento. |
| R24 | nProt | E | R11 | N | 0-1 | 15 | Número do Protocolo do Evento. 1 posição (5=Sefaz Estadual Ambiente Contingência), 2 posições para o código da UF, 2 posições para o ano e 10 posições para o sequencial no ano. |
| R25 | chNFePend | E | R11 | N | 0-50 | 44 | Relação de Chaves de Acesso de EPEC pendentes de conciliação. |
| **R91** | **Signature** | **G** | **R09** | **XML** | **0-1** |   | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério da UF.** |

Nota 1: No caso de evento registrado com sucesso, os campos opcionais serão retornados.

Nota 2: A relação de Chaves de Acesso pendentes de conciliação (tag:chNFePend) será disponibilizada sempre que o ambiente de autorização do EPEC estiver bloqueado para o CNPJ do emitente (Rejeição “142-Ambiente de Contingência EPEC bloqueado para o Emitente”).

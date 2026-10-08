<!-- p.11 -->
# 6.3.2 Leiaute Mensagem de Retorno

**Retorno:** Estrutura XML com a mensagem do resultado da transmissão.  
**Schema XML:** retEnvConfRecebto_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **R01** | **retEnvEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Resultado do Envio do Evento** |
| R02 | versao | A | R01 | N | 1-1 | 2v2 | Versão do leiaute |
| R03 | idLote | E | R01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento.<br>Número sequencial autoincremental único para identificação do Lote. A responsabilidade de gerar e controlar o identificador é exclusiva do autor do evento. O Web Service não faz qualquer uso ou controle deste identificador. |
| R04 | tpAmb | E | R01 | N | 1-1 | 1 | Identificação do Ambiente: 1 =Produção /2=Homologação |
| R05 | verAplic | E | R01 | C | 1-1 | 1-20 | Versão da aplicação que processou o evento. |
| R06 | cOrgao | E | R01 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE ou:<br>91 - Ambiente Nacional<br>Informar o código da UF para este evento. |
| R07 | cStat | E | R01 | N | 1-1 | 3 | Código do status da resposta |
| R08 | xMotivo | E | R01 | C | 1-1 | 1-255 | Descrição do status da resposta |
| **R09** | **retEvento** | **G** | **R01** | | **0-20** | | **TAG de grupo do resultado do processamento do Evento** |
| R10 | versao | A | R09 | N | 1-1 | 2v2 | Versão do leiaute |
| **R11** | **infEvento** | **G** | **R09** | | **1-1** | | **Grupo de informações do registro do Evento** |
| R12 | Id | ID | R11 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente deve ser informado se o órgão de registro assinar a resposta. Em caso de assinatura da resposta pelo órgão de registro, preencher com o número do protocolo, precedido pela literal "ID" |
| R13 | tpAmb | E | R11 | N | 1-1 | 1 | Identificação do Ambiente: 1 =Produção /2=Homologação |
| R14 | verAplic | E | R11 | C | 1-1 | 1-20 | Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão. |
| R15 | cOrgao | E | R11 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE ou:<br>91 - Ambiente Nacional<br>Informar o código da UF para este evento. |
| R16 | cStat | E | R11 | N | 1-1 | 3 | Código do status da resposta. |
| R17 | xMotivo | E | R11 | C | 1-1 | 1-255 | Descrição do status da resposta. |
| R18 | chNFe | E | R11 | N | 0-1 | 44 | Chave de Acesso da NF-e vinculada ao evento. |
| R19 | tpEvento | E | R11 | N | 0-1 | 6 | Código do Tipo do Evento:<br>210200 - Confirmação da Operação<br>210210 - Ciência da Operação<br>210220 - Desconhecimento da Operação<br>210240 - Operação não Realizada |
| R20 | xEvento | E | R11 | C | 0-1 | 5-60 | Descrição do Evento:<br>Confirmacao de Operacao registrada<br>Ciencia da Operacao registrada<br>Desconhecimento da Operacao registrada<br>Operacao nao Realizada registrada |
| R21 | nSeqEvento | E | R11 | N | 0-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento.<br>Informar o valor “1” para este evento. |
| R22 | cOrgaoAutor | E | R11 | N | 0-1 | 2 | **Esta tag não é preenchida no evento de manifestação** |
| R23 | CNPJDest | CE | R11 | N | 0-1 | 14 | Informar o CNPJ ou o CPF do destinatário da NF-e. |
| R24 | CPFDest | CE | R11 | N | 0-1 | 11 | **Esta tag não é preenchida no evento de manifestação**<br>Específico para evento: 110111 – Cancelamento |
| R25 | emailDest | E | R11 | C | 0-1 | 1-60 | E-mail do destinatário informado na NF-e.<br>**Esta tag não é preenchida no evento de manifestação**<br>Específico para evento: 110111 – Cancelamento |
| 30 | dhRegEvento | E | R11 | D | 1-1 | | Data e hora de registro do evento no formato AAAA-MMDDTHH:MM:SSTZD (formato UTC). Se o evento for rejeitado informar a data e hora de recebimento do evento. |
| R31 | nProt | E | R11 | N | 0-1 | 15 | Número do Protocolo do Evento 1 posição (1-Secretaria da Fazenda Estadual, 2-RFB), 2 posições para o código da UF, 2 posições para o ano e 10 posições para o sequencial no ano. |
| R32 | chNFePend | E | R11 | N | 0-50 | 44 | Relação de Chaves de Acesso de EPEC pendentes de conciliação, existentes no AN.<br>**Esta tag não é preenchida no evento de manifestação**<br>Específico para evento: 110140 – EPEC |
| **R91** | **Signature** | **G** | **R09** | **XML** | **0-1** | | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento. A decisão de assinar a mensagem fica a critério da UF. |

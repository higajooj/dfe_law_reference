<!-- p.10 -->
# 6.3.1 Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML com o evento Schema  
**XML:** envConfRecebto_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento.<br>Número sequencial autoincremental único para identificação do Lote. A responsabilidade de gerar e controlar o identificador é exclusiva do autor do evento. O Web Service não faz qualquer uso ou controle deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | | **1-1** | | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, a regra de formação do Id é: "ID" + tpEvento + chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE ou:<br>91 - Ambiente Nacional<br>Informar o código da UF para este evento. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção /2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ ou o CPF do autor do Evento |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e vinculada ao Evento |
| P13 | dhEvento | E | P06 | D | 1-1 | | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC – Universal Coordinated Time) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento:<br>210200 - Confirmação da Operação<br>210210 - Ciência da Operação<br>210220 - Desconhecimento da Operação<br>210240 - Operação não Realizada |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento.<br>Informar o valor “1” para este evento. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Identificação da Versão do evento informado em detEvento |
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | | **Detalhes do evento. Insira neste local o XML específico do tipo de evento (ex: cancelamento, carta correção, registro de passagem).** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Versão do evento |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Informar a descrição do evento: Confirmacao da Operacao / Ciencia da Operacao / Desconhecimento da Operacao / Operacao nao Realizada |
| P20 | xJust | E | P17 | C | 0-1 | 15-255 | Informar a justificativa porque a operação não foi realizada, este campo deve ser informado somente no evento de Operação não Realizada. |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** | | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento** |

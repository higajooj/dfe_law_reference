<!-- p.4 -->
# 2.1. Leiaute Mensagem de Entrada

O Web Service de Registro de Evento possui uma interface genérica, complementada por uma área específica para cada tipo de evento. Segue o leiaute da mensagem de entrada deste evento.

**Schema XML:** **envEventoCancNFe_v9.99.xsd (tpEvento=110111)**  
**envEventoCancSubst_v1.0.xsd (tpEvento=110112)**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento.<br>Número sequencial único para identificação do Lote, de uso exclusivo do autor do evento. O Web Service não faz qualquer uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por:<br>“ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE ou:<br>91 - Ambiente Nacional<br>Informar o código da UF para este evento. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção; 2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ/CPF do autor do Evento. |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e à qual o evento será vinculado |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento no formato AAAA-MMDDThh:mm:ssTZD (UTC – Universal Coordinated Time) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento:<br>- 110111 - “Cancelamento”<br>- 110112 - “Cancelamento por substituição” |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento.<br>Informar o valor “1” para este evento. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |
| P17 | detEvento | G | P06 | | 1-1 | - | Detalhes do evento |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Veja a descrição do evento, junto com o Tipo de Evento documentado anteriormente. |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.<br>**Nota**: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente.<br><br>**Valores**: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos;<br>**Nota**: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento.<br>**Nota**: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| P23 | nProt | E | P17 | N | 1-1 | 15 | Informar o número do Protocolo de Autorização da NF-e a ser cancelada. |
| <!-- p.5 -->P30 | xJust | E | P17 | C | 1-1 | 15-255 | Informar a justificativa do cancelamento |
| P31 | chNFeRef | E | P17 | N | 1-1 | 44 | Informa a chave de acesso da NF-e substituta da NF-e a ser cancelada.<br>**Nota**: Campo exclusivo do Evento “110112 – Cancelamento por substituição”. |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** | **-** | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento** |

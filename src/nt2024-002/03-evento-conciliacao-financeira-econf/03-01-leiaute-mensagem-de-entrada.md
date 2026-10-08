<!-- p.4 -->
# 3.1. Leiaute Mensagem de Entrada

O Web Service de Registro de Evento possui uma interface genérica complementada por uma área específica para cada tipo de evento. Segue o leiaute da mensagem de entrada.

**Schema XML: envEventoNFe_v9.99.xsd**

**Schema XML - parte específica: leiauteEventoConciliacaoFinanceira_v1.00.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial único para identificação do Lote, de uso exclusivo do autor do evento. O Web Service não faz uso deste identificador. |
| <!-- p.5 -->**P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por: “ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE.<br>Para a NF-e (modelo 55): Informar o código 92-SVRS, utilizando a URL do WS de Eventos da SVRS para este modelo de Documento Fiscal.<br>Para a NFC-e (modelo 65): Se UF participante da SVRS, informar o código 92-SVRS, utilizando a URL do WS de Eventos da SVRS; se não participante, informar o Código da UF do Emitente, para as SEFAZ com ambiente de autorização próprio. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção; 2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ/CPF do autor do Evento. |
| P11 | CPF | CE | P06 | N | 1-1 | 11 |  |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e que o evento será vinculado. |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento.<br>Formato AAAA-MM-DDThh:mm:ss TZD (UTC) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento: 110750 - “ECONF” |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Valores de 1 a 99. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |
| **P17** | **detEvento** | **G** | **P06** | **-** | **1-1** | **-** | **Detalhes do evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | “ECONF” |
| P20 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| **P21** | **detPag** | **G** | **P17** | **-** | **1-100** | **-** | **Grupo de detalhamento do pagamento.** |
| P22 | indPag | E | P21 | N | 0-1 | 1 | 0= Pagamento à Vista 1= Pagamento à Prazo. |
| P23 | tPag | E | P21 | N | 1-1 | 2 | Meio de Pagamento - Utilizar a Tabela de códigos dos meios de pagamentos publicada no Portal Nacional da Nota Fiscal Eletrônica |
| P24 | xPag | E | P21 | C | 0-1 | 2-60 | Descrição do meio de pagamento. Preencher informando o meio de pagamento utilizado quando o código do meio de pagamento for informado como 99-outros. |
| P25 | vPag | E | P21 | N | 1-1 | 13v2 | Valor do Pagamento |
| P26 | dPag | E | P21 | D | 1-1 | - | Data do Pagamento no formato AAAA-MM-DD. Em caso de pagamentos agendados, informar a data da efetivação. |
| **P27** | **Sequência XML** | **G** | **P21** | **-** | **0-1** | **-** |  |
| P28 | CNPJPag | E | P27 | N | 1-1 | 14 | Preencher informando o CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido quando a emissão do documento fiscal ocorrer em estabelecimento distinto. |
| P29 | UFPag | E | P27 | C | 1-1 | 2 | UF do CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido. |
| P30 | CNPJIF | E | P21 | N | 0-1 | 14 | CNPJ da instituição financeira, de pagamento, adquirente ou subadquirente. |
| <!-- p.6 -->P31 | tBand | E | P21 | N | 0-1 | 2 | Utilizar a Tabela de Códigos das Operadoras de cartão de crédito e/ou débito publicada no Portal Nacional da Nota Fiscal Eletrônica. |
| P32 | cAut | E | P21 | C | 0-1 | 1-128 | Identifica o número da autorização da transação da operação |
| **P33** | **Sequência XML** | **G** | **P21** | **-** | **0-1** | **-** |  |
| P34 | CNPJReceb | E | P33 | N | 1-1 | 14 | Informar o CNPJ do estabelecimento beneficiário do pagamento |
| P35 | UFReceb | E | P33 | C | 1-1 | 2 | UF do CNPJ do estabelecimento beneficiário do pagamento. |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** | **-** | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento.** |

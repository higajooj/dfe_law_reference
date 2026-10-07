<!-- p.7 -->
# 3.2 Leiaute Mensagem de Entrada

O *Web Service* de registro de evento possui uma interface genérica conhecida, complementada por uma área específica para cada tipo de evento. Segue abaixo a especificação da mensagem de entrada deste *Web Service*.

Schema XML: eventoEPEC_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial único para identificação do Lote. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** |   | **1-1** |   | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, a regra de formação do Id é: “ID” + tpEvento + Chave da NFC-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção /2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ / CPF do autor do Evento. |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Para o evento de EPEC, a posição 35 da Chave de Acesso deve ser 4 (tpEmis=4). |
| P13 | dhEvento | E | P06 | D | 1-1 | | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time). |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento: 110140 –EPEC |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Informar o valor “1” para o evento do EPEC. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do detalhe do evento (grupo **detEvento** – P17), informação usada pela SEFAZ para validar o grupo **detEvento**. |
| **P17** | **detEvento** | **G** | **P06** |   | **1-1** |   | **Informações de detalhes do evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag **verEvento** (P16). |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | “EPEC” |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão do Autor do Evento. Nota: Informar o código da UF do Emitente para este evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar "1=Empresa Emitente" para este evento. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| P23 | dhEmi | E | P17 | D | 1-1 | | Data e hora no formato UTC (Universal Coordinated Time): "AAAA-MM-DDThh:mm:ss TZD". |
| P24 | tpNF | E | P17 | N | 1-1 | 1 | Informar 1=Saída. |
| P25 | IE | E | P17 | N | 1-1 | 2-14 | IE do Emitente |
| **P26** | **dest** | **G** | **P17** |   | **0-1** |   |   |
| P27 | UF | E | P26 | C | 1-1 | 2 | Sigla da UF do destinatário. Informar “EX” no caso de operação com o exterior. |
| P28 | CNPJ | CE | P26 | N | 1-1 | 14 | Informar o CPF ou o CNPJ do destinatário, preenchendo os zeros não significativos. No caso de operação com exterior, ou para comprador estrangeiro, informar a tag “idEstrangeiro”, com o número do passaporte, ou outro documento legal. |
| P29 | CPF | CE | P26 | N | 1-1 | 11 | |
| P30 | idEstrangeiro | CE | P26 | C | 1-1 | 5-20 | |
| P31 | vNF | E | P17 | N | 1-1 | 13v2 | Valor total da NFC-e |
| P32 | vICMS | E | P17 | N | 1-1 | 13v2 | Valor total do ICMS |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** |   | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento** |

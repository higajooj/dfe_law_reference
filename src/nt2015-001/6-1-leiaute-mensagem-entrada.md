<!-- p.31 -->
# 6.1. Leiaute Mensagem de Entrada

Schema XML: envPProrrogNFe_v1.0.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial autoincremental único para identificação do Lote. A responsabilidade de gerar e controlar é exclusiva do autor do evento. O Web Service não faz qualquer uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 1-4 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, a regra de formação do Id é: “ID” + tpEvento + chave da NFe + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE, utilizar 90 para identificar o Ambiente Nacional. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção; 2 – Homologação |
| P10 | CNPJ | E | P06 | N | 1-1 | 14 | Informar o CNPJ do autor do Evento |
| P11 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e vinculada ao Evento |
| P12 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time, onde TZD pode ser 02:00 (Fernando de Noronha), -03:00 (Brasília) ou -04:00 (Manaus), no horário de verão serão -01:00, -02:00 e -03:00. Ex.: 2010-08-19T13:00:15-03:00. |
| P13 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento: 111500 - Pedido de Prorrogação 1º prazo; 111501 - Pedido de Prorrogação 2º prazo |
| P14 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, porém, nos casos em que possa existir mais de um evento, como é o caso da Carta de Correção, Pedido de Prorrogação e Fisco, o autor do evento deve numerar de forma sequencial. Ex: tpEvento / nSeqEvento: 111500 / 1; 111501 / 1; 111500 / 2; 111501 / 2 |
| P15 | verEvento | E | P06 | N | 1-1 | 4 | Versão do evento |
| **P16** | **detEvento** | **G** | **P06** | **-** | **1-1** | **-** | **Informações do Pedido de Prorrogação** |
| P17 | versao | A | P16 | - | 1-1 | - | Versão do Pedido de Prorrogação |
| P18 | descEvento | E | P16 | C | 1-1 | 5-60 | “Pedido de Prorrogação” ou “Pedido de Prorrogacao” |
| P19 | nProt | E | P16 | N | 1-1 | 15 | Informar o número do Protocolo de Autorização da NF-e a ser Prorrogada. (vide item 5.6). |
| **P20** | **itemPedido** | **G** | **P16** | **-** | **1-990** | **-** | **Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação** |
| P21 | numItem | A | P20 | N | 1-1 | 1-3 | Número do item da NF-e. O número do item deverá ser o mesmo número do item na NFe |
| P22 | qtdeItem | E | P20 | N | 1-1 | 11v0-4 | Quantidade de comercialização do item que será solicitada a prorrogação de prazo |
| P23 | Signature | G | P04 | XML 1-1 | - | - | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento |

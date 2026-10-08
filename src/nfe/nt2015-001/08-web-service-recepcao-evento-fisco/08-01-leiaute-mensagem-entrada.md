<!-- p.48 -->
# 8.1. Leiaute Mensagem de Entrada

Schema XML: envFiscoNfe_v1.0.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial autoincremental único para identificação do Lote. A responsabilidade de gerar e controlar é exclusiva do autor do evento. O Web Service não faz qualquer uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 4v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, a regra de formação do Id é: “ID” + tpEvento + chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de geração do Evento. Utilizar a Tabela do IBGE, utilizar 90 para identificar o Ambiente Nacional. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção; 2 – Homologação |
| P10 | CNPJ | E | P06 | N | 1-1 | 14 | Informar o CNPJ do autor do Evento |
| P11 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e vinculada ao Evento |
| P12 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time, onde TZD pode ser -02:00 (Fernando de Noronha), -03:00 (Brasília) ou -04:00 (Manaus), no horário de verão serão -01:00, -02:00 e -03:00. Ex.: 2010-08-19T13:00:15-03:00. |
| P13 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento: 411500 - resposta ao pedido de prorrogação 1º prazo; 411501 - resposta ao pedido de prorrogação 2º prazo; 411502 - resposta ao cancelamento de prorrogação de 1º prazo; 411503 - resposta ao cancelamento de prorrogação de 2º prazo |
| P14 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, nos casos em que possa existir mais de um evento, como é o caso da Carta de Correção, Pedido de Prorrogação e Fisco, o autor do evento deve numerar de forma sequencial. |
| P15 | verEvento | E | P06 | N | 1-1 | 4v2 | Versão do evento |
| **P16** | **detEvento** | **G** | **P06** | **-** | **1-1** | **-** | **Informações do Fisco** |
| P17 | versao | A | P16 | - | 1-1 | - | Versão do Fisco |
| P18 | descEvento | E | P16 | C | 1-1 | 5-60 | “Fisco – Prorrogação ICMS remessa para industrialização” |
| P19 | idPedido | E | P16 | C | 1-1 | 54 | Identificador do Pedido de Prorrogação ou Cancelamento de Pedido de Prorrogação que deu origem ao evento do Fisco, a regra de formação do Id é: “ID” + tpEvento + chave da NF-e + nSeqEvento (este campo corresponde ao campo P07 do evento 111500, 111501, 111502 ou 111503) |
| P20 | respPedido | G | P16 | - | 1-1 | - | Resposta a um tpEvento 111500 ou 111501. |
| P21 | statPrazo | E | P20 | N | 1-1 | 1 | Identificador do cumprimento do prazo para solicitação do pedido de prorrogação: 0 – Após o prazo; 1 – Dentro do prazo |
| P22 | itemPedido | G | P20 | - | 1-990 | - | Item do Pedido de Prorrogação |
| P23 | numItem | A | P22 | N | 1-1 | 1-3 | Número do item do Pedido de Prorrogação. O número do item deverá ser o mesmo número do item do Pedido de Prorrogação. |
| P24 | statPedido | E | P22 | N | 1-1 | 1 | Resposta do Fisco ao item do Pedido de Prorrogação: 0 - Deferido; 1 - Indeferido |
| P25 | justStatus | E | P22 | N | 1-1 | 1-2 | Justificativa da resposta do Fisco ao item do Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - Manifestação do Destinatário - desconhece a operação; 3 - Manifestação do Destinatário - operação não realizada; 4 - O item não consta na NF-e; 5 - O item não consta no pedido de prorrogação do 1º prazo; 6 - CFOP não autorizado; 7 - Quantidade inconsistente com a quantidade do item (não se aplica à solicitação completa); 8 - Solicitação de pedido fora do prazo; 9 - Pedido de prorrogação cancelado pelo contribuinte; 10 - Outra |
| P26 | justStaOutra | E | P22 | C | 0-1 | 1000 | Justificativa diferente das opções disponíveis no campo P25 |
| P27 | respCancPedido | G | P16 | - | 1-1 | - | Resposta a um tpEvento 111502 ou 111503. |
| P28 | statCancPedido | E | P27 | N | 1-1 | 1 | Resposta do Fisco ao Cancelamento do Pedido de Prorrogação: 0 - Deferido; 1 - Indeferido |
| P29 | justStatus | E | P27 | N | 1-1 | 1-2 | Justificativa da resposta do Fisco ao Cancelamento de Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - O Pedido de Prorrogação já foi cancelado por outro evento; 3 - Solicitação de pedido fora do prazo; 4 - Tentativa de cancelamento de prorrogação de até 360 dias de um item que foi prorrogado por mais de 360 dias. Cancele a prorrogação por mais de 360 dias previamente; 5 - Outra |
| P30 | justStaOutra | E | P27 | C | 0-1 | 1000 | Justificativa diferente das opções disponíveis no campo P29 |
| P31 | Signature | G | P04 | XML 1-1 | - | - | Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento |

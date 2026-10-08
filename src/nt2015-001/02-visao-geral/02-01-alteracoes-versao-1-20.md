<!-- p.6 -->
# 2.1. Alterações da versão 1.20

## 2.1.1. Alteração na descrição das mensagens

**De:**

- Itens 3.6, 4.6, 5.6
- 242: "Rejeição: Elemento nfeCabecMsg inexistente no SOAP Header"
- Itens 3.7(d), 4.7(d), 5.7(d)
- 298: “Rejeição: Assinatura difere do padrão do Projeto”
- 213: “Rejeição: CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital”

**Para:**

- Itens 3.6, 4.6, 5.6
- 242: "Rejeição: Cabeçalho - Falha no Schema XML"
- Itens 3.7(d), 4.7(d), 5.7(d)
- 298: “Rejeição: Assinatura difere do padrão do Sistema”
- 213: “Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital”

## 2.1.2. Inclusão de validações nos eventos

- 3.7(e)

| Campo | Descrição | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P12 | Data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência se a NF-e existir. | Obrig. | 579 | Rej. |

- 4.7(e)

| Campo | Descrição | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P12 | Data do evento não pode ser menor que a data de emissão da NF-e, se existir | Obrig. | 577 | Rej. |
| P12 | Data do evento não pode ser maior que a data de processamento (aceitar uma tolerância de até 5 minutos) | Obrig. | 578 | Rej. |
| P12 | Data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência se a NF-e existir. | Obrig. | 579 | Rej. |

- 5.7(e)

| Campo | Descrição | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P12 | Data do evento não pode ser menor que a data de emissão da NF-e, se existir | Obrig. | 577 | Rej. |
| P12 | Data do evento não pode ser maior que a data de processamento (aceitar uma tolerância de até 5 minutos) | Obrig. | 578 | Rej. |
| P12 | Data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência se a NF-e existir. | Obrig. | 579 | Rej. |
| P31 | Verificar se o CNPJ do certificado digiral do evento corresponde ao CNPJ da Fazenda, | Obrig. | 808 | Rej. |
| P19 | Verificar se o ID do evento (P19 - idPedido) existe em banco de dados | Obrig. | 809 | Rej |

<!-- p.7 -->

| Campo | Descrição | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| P13, P19 | Os eventos do fisco se relacionam ao evento de pedido de prorrogação ou de cancelamento por meio do campo P19. Verificar se o tpEvento do Evento do Fisco (P13) corresponde ao tpEvento do Pedido de Prorrogação ou de Cancelamento (campo P13 do evento de Pedido de Prorrogação ou campo P13 do evento de Cancelamento) de acordo com as tabelas abaixo: | Obrig. | 810 | Rej. |

| tpEvento Pedido de Prorrogação | tpEvento Fisco |
|---|---|
| 111500 | 411500 |
| 111501 | 411501 |

| tpEvento Cancelamento | tpEvento Fisco |
|---|---|
| 111502 | 411502 |
| 111503 | 411503 |

## 2.1.3. Alteração de validações nos eventos

**De:**

- 4.7(e) — P14: Verificar o sequencial do evento (P14 - nSeqEvento) é um valor válido (=1) — Obrig. 594 — Rej.

**Para:**

- 4.7(e) — P13/P14: Verificar o sequencial do evento (P14 - nSeqEvento) é um valor válido (último + 1) conforme tipo de evento (P13/P14) — Obrig. 594 — Rej.

## 2.1.4. Item 4.1 - Correção no campo P14

**De:**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P14 nSeqEvent | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. |

**Para:**

<!-- p.8 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P14 nSeqEvent | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Para maioria dos eventos será 1, porém, nos casos em que possa existir mais de um evento, como é o caso da Carta de Correção, Pedido de Prorrogação, Cancelamento de Pedido de Prorrogação e Fisco, o autor do evento deve numerar de forma sequencial. Ex: |

| tpEvento | nSeqEvento |
|---|---|
| 111502 | 1 |
| 111503 | 1 |
| 111502 | 2 |
| 111503 | 2 |

## 2.1.5. Item 5.1 - Correção do índice do domínios nos campos P25 e P29

**De:**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P25 justStatus | E | P22 | N | 1-1 | 1-2 | Justificativa da resposta do Fisco ao item do Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - Manifestação de Destinatário - desconhece a operação; 3 - Manifestação de Destinatário - operação não realizada; 4 - O item não consta na NF-e; 5 - O item não consta no pedido de prorrogação do 1º prazo; 6 - CFOP não autorizado; 7 - Quantidade inconsistente com a quantidade do item; 8 - Solicitação de pedido fora do prazo; 9 - Pedido de prorrogação cancelado pelo contribuinte; 10 - Outra |

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P29 justStatus | E | P27 | N | 1-1 | 1-2 | Justificativa da resposta do Fisco ao Cancelamento de Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - O Pedido de Prorrogação já foi cancelado por outro evento; 3 - Solicitação de pedido fora do prazo; 4 - Tentativa de cancelamento de prorrogação de até 360 dias de um item que foi prorrogado por mais de 360 dias. Cancele a prorrogação por mais de 360 dias previamente; 5 - Outra |

**Para:**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P25 justStatus | E | P22 | N | 1 | 1 | Justificativa da resposta do Fisco ao item do Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - Manifestação de Destinatário - desconhece a operação; 3 - Manifestação de Destinatário - operação não realizada; 4 - O item não consta na NF-e; 5 - O item não consta no pedido de prorrogação do 1º prazo; 6 - CFOP não autorizado; 7 - Quantidade inconsistente com a quantidade do item; 8 - Solicitação de pedido fora do prazo; 9 - Pedido de prorrogação cancelado pelo contribuinte; 10 - Outra |

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P29 justStatus | E | P27 | N | 1 | 1 | Justificativa da resposta do Fisco ao Cancelamento de Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - O Pedido de Prorrogação já foi cancelado por outro evento; 3 - Solicitação de pedido fora do prazo; 4 - Tentativa de cancelamento de prorrogação de até 360 dias de um item que foi prorrogado por mais de 360 dias. Cancele a prorrogação por mais de 360 dias previamente; 5 - Outra |

## 2.1.6. Item 5.2 - Descrição do campo R20

**De:** Descrição do Evento – “Fisco registrado”

**Para:** Descrição do Evento – “Evento do fisco registrado”

## 2.1.7. Item 5.11 - Inclusão de mensagens

| CÓDIGO | MOTIVOS DE NÃO ATENDIMENTO DA SOLICITAÇÃO |
|---|---|
| 808 | Rejeição: Evento Fisco emitido por contribuinte |
| 809 | Rejeição: ID do Pedido de Prorrogação ou Cancelamento não existe na base de dados |
| 810 | Rejeição: tpEvento do Evento Fisco não corresponde ao tpEvento do Evento de Pedido de Prorrogação ou de Cancelamento |
| 811 | Rejeição: Pedido de Prorrogação deferido impede o cancelamento da NF-e |

## 2.1.8. Item 6 - Pedido de Cancelamento da NF-e versus Evento de Pedido de Prorrogação de Prazo

## 2.1.9. Item 7 - A tabela do item 2 (Web Service – NFeDistribuicaoDFe) da NT2014.002_v1.01

**De:**

| Documento | Emitente | Destinatário | Transportador | Terceiros |
|---|---|---|---|---|
| Evento de Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento de Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |
| Evento de Cancelamento de Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento de Cancelamento de Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Cancelamento de Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Cancelamento de Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |

**Para:**

| Documento | Emitente | Destinatário | Transportador | Terceiros |
|---|---|---|---|---|
| Evento de Pedido de Prorrogação 1º prazo | Não | Sim | Não | Não |
| Evento de Pedido de Prorrogação 2º prazo | Não | Sim | Não | Não |
| Evento de Cancelamento de Pedido de Prorrogação 1º prazo | Não | Sim | Não | Não |
| Evento de Cancelamento de Pedido de Prorrogação 2º prazo | Não | Sim | Não | Não |
| Evento Fisco de Resposta ao Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Cancelamento de Pedido de Prorrogação 1º prazo | Sim | Sim | Não | Não |
| Evento Fisco de Resposta ao Cancelamento de Pedido de Prorrogação 2º prazo | Sim | Sim | Não | Não |

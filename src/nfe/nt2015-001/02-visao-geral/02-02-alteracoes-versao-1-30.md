<!-- p.13 -->
# 2.2. Alterações da versão 1.30

## 2.2.1. Complementação de texto no item 1.1 e adição de exemplo ilustrativo para que se adequem ao tipo de implementação de solicitação completa.

## 2.2.2. Complementação de texto no item 1.2 para que se adeque ao tipo de implementação de solicitação completa.

## 2.2.3. Complementação de texto no item 1.3 para que se adeque ao tipo de implementação de solicitação completa.

## 2.2.4. Adição de exemplo ilustrativo no item 1.3.2 para o tipo de implementação de solicitação completa.

## 2.2.5. Adição de exemplo ilustrativo no item 1.3.5 para o tipo de implementação de solicitação completa.

## 2.2.6. Adição de exemplo ilustrativo no item 2.2 para o tipo de implementação de solicitação completa.

## 2.2.7. Alteração do texto do item 2.3 para permitir a parametrização das regras de validação P13-14 a critério da UF, de forma que se uma NFe contiver mais que 1 evento autorizado sem resposta pelo fisco, o WebService de recepção de eventos devolva a mensagem de rejeição.

## 2.2.8. Alteração das regras de validação P13-14 para que sejam parametrizáveis a critério da UF e da regra de validação P19 para que se adeque a outras situações:

**De:**

| Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|
| P13-14 Verificar a quantidade de eventos do tipo “1º pedido”. A soma dos pedidos do tipo “1º pedido” sem resposta do Fisco não deverá exceder 20 pedidos. | Obrig. | 638 | Rej. |
| P13-14 Verificar a quantidade de eventos do tipo “2º pedido”. A soma dos pedidos do tipo “2º pedido” sem resposta do Fisco não deverá exceder 20 pedidos. | Obrig. | 809 | Rej. |
| P19 Verificar se o ID do evento (P19 - idPedido) existe em banco de dados. | Obrig. | 809 | Rej. |

**Para:**

| Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|
| P13-14 Verificar a quantidade de eventos do tipo “1º pedido”. A soma dos pedidos do tipo “1º pedido” sem resposta do Fisco não deverá exceder 20 pedidos. Exceção 1: A critério da UF, a soma dos pedidos do tipo “1º pedido” sem resposta do Fisco não deverá exceder 1 pedido. | Obrig. | 638 | Rej. |
| P13-14 Verificar a quantidade de eventos do tipo “2º pedido”. A soma dos pedidos do tipo “2º pedido” sem resposta do Fisco não deverá exceder 20 pedidos. Exceção 1: A critério da UF, a soma dos pedidos do tipo “2º pedido” sem resposta do Fisco não deverá exceder 1 pedido. | Obrig. | 639 | Rej. |
| P19 Verificar se o ID do evento (P19 - idPedido) existe em banco de dados ou se há um pedido de prorrogação deferido para o tipo: [tpEvento] | Obrig. | 809 | Rej |

## 2.2.9. Adição de texto no retorno da regra de validação P19 para que se adequem a outras situações:

**De:**

| Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|
| P13-14 Rejeição: A quantidade de Pedidos de Prorrogação 1° prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco. | Obrig. | 638 | Rej. |
| P13-14 Rejeição: A quantidade de Pedidos de Prorrogação 2° prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco. | Obrig. | 639 | Rej. |
| P19 Rejeição: ID do Pedido de Prorrogação ou Cancelamento não existe na base de dados | Obrig. | 809 | Rej. |

**Para:**

| Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|
| P13-14 Rejeição: A quantidade de Pedidos de Prorrogação 1° prazo excede o valor limite de Pedidos de Prorrogação autorizados e sem resposta do Fisco. | Obrig. | 638 | Rej. |
| P13-14 Rejeição: A quantidade de Pedidos de Prorrogação 2° prazo excede o valor limite de Pedidos de Prorrogação autorizados e sem resposta do Fisco. | Obrig. | 639 | Rej. |
| P19 Rejeição: ID do Pedido de Prorrogação ou Cancelamento não existe na base de dados ou não há um pedido de prorrogação deferido para o tipo: [tpEvento] | Obrig. | 809 | Rej. |

## 2.2.10. Adição de texto de justificativa da resposta do fisco, para indicar que o indeferimento “7 - Quantidade inconsistente com a quantidade do item” não se aplica ao tipo de implementação de solicitação completa.

**De:**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P25 justStatus | E | P22 | N | 1-1 | 1-2 | Justificativa da resposta do Fisco ao item do Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - Manifestação de Destinatário - desconhece a operação; 3 - Manifestação de Destinatário - operação não realizada; 4 - O item não consta na NF-e; 5 - O item não consta no pedido de prorrogação do 1º prazo; 6 - CFOP não autorizado; 7 - Quantidade inconsistente com a quantidade do item; 8 - Solicitação de pedido fora do prazo; 9 - Pedido de prorrogação cancelado pelo contribuinte; 10 - Outra |

**Para:**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | P25 justStatus | E | P22 | N | 1 | 1 | Justificativa da resposta do Fisco ao item do Pedido de Prorrogação: 1 - Autorizado pelo Fisco; 2 - Manifestação de Destinatário - desconhece a operação; 3 - Manifestação de Destinatário - operação não realizada; 4 - O item não consta na NF-e; 5 - O item não consta no pedido de prorrogação do 1º prazo; 6 - CFOP não autorizado; 7 - Quantidade inconsistente com a quantidade do item (não se aplica à solicitação completa); 8 - Solicitação de pedido fora do prazo; 9 - Pedido de prorrogação cancelado pelo contribuinte; 10 - Outra |

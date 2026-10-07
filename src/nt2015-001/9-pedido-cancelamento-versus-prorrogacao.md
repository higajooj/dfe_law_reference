<!-- p.58 -->
# 9. Pedido de Cancelamento da NF-e versus Evento de Pedido de Prorrogação de Prazo

| Regra de validação | Aplic. | Msg | Efeito | Descrição do Erro |
|---|---|---|---|---|
| Pedido de Prorrogação deferido impede o cancelamento da NFe | Obrig. | 811 | Rej. | Rejeição: Pedido de Prorrogação deferido impede o cancelamento da NFe |

Deverá ser impedido o cancelamento da NF-e caso exista pelo menos um item do Pedido de Prorrogação de Prazo deferido pelo Fisco (tpEvento=411500 ou 411501, com statPedido=1).

No caso de rejeição do Pedido de Cancelamento da NF-e recebido pela empresa, o fisco usará o código de rejeição “811-Pedido de Prorrogação deferido impede o cancelamento da NF-e”.

Nota: Como o mesmo Pedido da Empresa (tag:”idPedido”) pode ter diferentes respostas pelo Fisco, deve ser considerada a resposta do Fisco com maior “nSeqEvento” de resposta do Fisco.

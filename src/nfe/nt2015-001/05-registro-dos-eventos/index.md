<!-- p.29 -->
# 5. Registro dos eventos

- As regras aplicadas no deferimento dos pedidos de prorrogação seguem a legislação vigente em cada UF de onde ocorreu a remessa com suspensão. O sistema da NFe apenas recepciona os pedidos de prorrogação de suspensão de ICMS. As regras de rejeição desta NT definem critérios suficientes para o registro de um pedido de prorrogação (ou de cancelamento) pela Sefaz.
- O deferimento dos pedidos dependem de critérios específicos fora do escopo da NFe. O recebimento de uma mensagem de resposta com o registro do evento não significa deferimento pela Sefaz responsável pelo contribuinte emitente da NFe de remessa.
- A resposta do fisco com o deferimento não é síncrona com a recepção do evento de pedido de prorrogação ou cancelamento do contribuinte. Dependendo das regras implementadas por cada Sefaz, alguns eventos podem ser analisados manualmente e dependem de intervenção humana para serem gerados.
- Cada NFe poderá ter até 99 eventos de prorrogação de 1º prazo, 2º. prazo, e cancelamento, em conjunto.
- Se uma NFe contiver mais que 20 eventos autorizados sem resposta pelo fisco, o WebService de recepção de eventos devolverá mensagem de rejeição. Esta medida visa a recepção de eventos em casos de erros no sistema do contribuinte. A critério da UF, a regra de validação poderá ser parametrizada para que se uma NFe contiver mais que 1 evento autorizado sem resposta pelo fisco, o WebService de recepção de eventos devolva a mensagem de rejeição, de forma que o contribuinte só poderá enviar um novo pedido de prorrogação ou cancelamento caso o evento anteriormente enviado já tenha sido processado e possua a devida resposta.
- A geração de eventos do fisco com a resposta para os pedidos pode ser implementada internamente ao sistema da NFe ou por sistema independente que implemente regras específicas para o processamento de prorrogação de prazos para a suspensão de ICMS.
- NFes que tiverem pedidos de prorrogação de prazo com deferimento pelo fisco não poderão ser cancelados.
- As UFs que utilizarem Sefaz Virtual receberão os eventos de pedido de prorrogação através do compartilhamento com o ambiente nacional e emitirão os eventos do fisco para o WebService de recepção de eventos.

Esquema de distribuição da informação:

<!-- p.19 -->
# 3.3. Deferimento dos pedidos de prorrogação e de cancelamento pela Sefaz

Todos os eventos de pedido de prorrogação e cancelamento são síncronos. A obtenção de um protocolo de registro na NFe não implica o deferimento pelo fisco como ocorre no registro de cancelamento de NFe, por exemplo.

O deferimento pela Sefaz depende de um evento (tp – 411500, 411501, 411502 ou 411503) assinado com certificado da Fazenda responsável pela empresa emitente da NFe de remessa. Este evento traz o posicionamento da Sefaz frente o pedido e a motivação no caso de indeferimento.

O evento do fisco está vinculado à NFe de remessa e ao pedido de prorrogação pelo ID do evento e pelo protocolo de registro do evento na NFe.

Para a solicitação parcial, para cada item, a Sefaz defere/indefere o pedido e justifica a resposta. Já para a solicitação completa, como não será possível o pedido parcial, o deferimento e indeferimento será sempre para todos os itens e quantidades da NFe.

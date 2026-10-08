<!-- p.30 -->
# 6. Web Service – RecepcaoEvento – Pedido de Prorrogação

**Função:** serviço destinado à recepção de mensagem de Evento da NF-e.

O Pedido de Prorrogação é um evento para prorrogar o prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS.

O registro de um novo Pedido de Prorrogação não substitui o Pedido de Prorrogação anterior, ou seja, serão eventos cumulativos. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação.

**Processo:** síncrono.

**Método:** nfeRecepcaoEvento

<!-- p.39 -->
# 7. Web Service – RecepcaoEvento – Cancelamento de Pedido de Prorrogação

**Função:** serviço destinado à recepção de mensagem de Evento da NF-e.

O Cancelamento de Pedido de Prorrogação é um evento para cancelar um Pedido de Prorrogação de uma NF-e.

O autor do evento é o emissor da NF-e. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor da NF-e.

O evento será utilizado pelo contribuinte.

O registro de um Cancelamento de Pedido de Prorrogação é único para cada Pedido de Prorrogação.

**Processo:** síncrono.

**Método:** nfeRecepcaoEvento

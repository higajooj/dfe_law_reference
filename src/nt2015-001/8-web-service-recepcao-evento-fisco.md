<!-- p.48 -->
# 8. Web Service – RecepcaoEvento – Fisco – Prorrogação ICMS

**Função:** serviço destinado à recepção de mensagem de Evento da NF-e.

O Fisco é um evento para deferir/indeferir um Pedido de Prorrogação ou Cancelamento de Pedido de prorrogação de uma NF-e.

O autor do evento é a UF que processou os eventos de Pedido de Prorrogação ou Cancelamento de Pedido de Prorrogação. A mensagem XML do evento será assinada com o certificado digital da Secretaria da Fazenda que processou o Pedido de Prorrogação ou Cancelamento de Pedido de Prorrogação.

O registro de um evento Fisco substitui o evento Fisco anterior.

**Processo:** síncrono.

**Método:** nfeRecepcaoEvento

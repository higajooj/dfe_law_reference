<!-- p.14 -->

# 5.1 Validação das Regras de Negócio

A existência de um evento de “Comprovante de Entrega da NF-e”, não cancelado, deve impedir o cancelamento da NF-e. O mesmo para o evento de “Comprovante de Entrega do CT-e”.

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| **\*\*\* Banco de Dados: Evento** | | | | |
| 4P15-30 | Acesso BD de Eventos (Chave: Chave de Acesso)<br>- Existe evento de “Comprovante de Entrega da NF-e”, ou “Comprovante de Entrega do CT-e” não cancelados:<br>- tpEvento=110130 (cancelamento: 110131);<br>- tpEvento=610130 (cancelamento: 610131). | Obrig. | 826 | Rejeição: Pedido de Cancelamento para NF-e com evento de registro de Entrega |

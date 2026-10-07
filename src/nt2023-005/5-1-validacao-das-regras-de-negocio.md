<!-- p.16 -->
# 5.1 Validação das Regras de Negócio

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| | **\*\*\* Banco de Dados: Evento** | | | |
| 4P15-32 | Acesso BD de Eventos (Chave: Chave de Acesso)<br>- Existe evento de “Insucesso na Entrega da NF-e”, ou “Insucesso na Entrega do CT-e” não cancelados:<br>- tpEvento=110192 (Cancelamento: 110193) – NF-e<br>- tpEvento=610190 (Cancelamento 610191) – Eventos propagados do CT-e. <!-- REVISAR p.16: no original, o item 4P15-32 tem travessões e quebras de linha desalinhados ("– NF-e -" e "– para NF-e com evento de Entrega" em colunas distintas); a divisão entre Regra e Descrição foi inferida pela ordem visual --> | Obrig. | 826 | Rejeição: Pedido de Cancelamento para NF-e com evento de Entrega |

<!-- p.22 -->
# 5. Eventos de Cancelamento (NT2018.004)

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| | **\*\*\* Banco de Dados: Evento_2** | | | | |
| 4P15-30 | • Existe evento de Registro de Averbação para Exportação, tpEvento:<br>&nbsp;&nbsp;◦ 790700 – Registro de Averbação para Exportação | Obrig. | 939 | Rej. | Rejeição: Pedido de Cancelamento para NF-e com evento de Averbação para Exportação |
| 4P15-34 | • Existe evento Financeiro, tpEvento:<br>&nbsp;&nbsp;◦ 990100 – Registro de Cessão de Parcela de Fat-e por IMF<br>&nbsp;&nbsp;◦ 900120 – Transferência de Parcela de Fat-e por IMF<br>&nbsp;&nbsp;◦ 900140 – Ativação de monitoramento de parcela de Fat-e informada por ESF<br>&nbsp;&nbsp;◦ 900138 – Envio de Parcela de Fat-e para Cobrança Judicial<br>&nbsp;&nbsp;◦ 900110 – Recebível em Avaliação<br>Exceção: Uma NF-e pode ter vários eventos deste tipo. Permitir o cancelamento se todos os eventos deste tipo tiverem o correspondente evento de cancelamento. | Obrig. | 940 | Rej. | Rejeição: Pedido de Cancelamento para NF-e com evento Financeiro |

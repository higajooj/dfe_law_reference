<!-- p.7 -->
# 5.5. UB. Informações dos tributos IBS / CBS e Imposto Seletivo

<!-- p.8 -->
| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB12-11 | 55 | Se não informada a IE do emitente (tag: emit/IE):<br>- Não informado grupo de imposto IBS e CBS (tag: det/imposto/IBSCBS).<br>**Observação:** Regra de validação exclusiva da SVRS. | Obrig. | 162 | Rej. | Rejeição: Grupo IBS/CBS obrigatório para contribuinte exclusivo do IBS/CBS [nItem:999] |

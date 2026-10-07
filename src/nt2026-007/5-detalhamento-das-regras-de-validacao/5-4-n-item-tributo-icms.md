<!-- p.7 -->
# 5.4. N. Item / Tributo: ICMS

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N01-10 | 55 | Se não informada a IE do emitente (tag: emit/IE):<br>- Proibido informar ICMS (tag: ICMS); e<br>- Proibido informar o ICMS Interestadual (tag: ICMSUFDest)<br>**Exceção 1:** a regra acima não se aplica no caso de finalidade da NF-e igual a devolução (tag: finNFe=4).<br>**Exceção 2:** A regra acima não se aplica no caso Tipo de Nota de Crédito igual a “03=Retorno por Recusa Total na Entrega ou Por Não Localização do Destinatário na Tentativa de Entrega” (tag: tpNFCredito=03).<br>**Observação:** Regra de validação exclusiva da SVRS. | Obrig. | 161 | Rej. | Rejeição: Proibido informar ICMS para contribuinte exclusivo do IBS/CBS. [nItem:999] |

<!-- p.07 -->

# 5 Validações do grupo de Devolução

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 001 | Se informado grupo de Devolução do IBS da UF (gIBSUF/gDevTrib):<br><br>- Grupo de devolução do IBS da UF informado indevidamente<br><br>**Observação:** esse grupo só poderá ser informado em notas fatura (NF3e, NFCom, NFAg e NFGas) | Obrig. | 1017 | **Rej.** | Rejeição: Grupo de devolução não permitido para este modelo de DFe |
| 002 | Se informado grupo de Devolução do IBS do Munícipio (gIBSMun/gDevTrib):<br><br>- Grupo de devolução do IBS de competência do Município informado indevidamente<br><br>**Observação**: esse grupo só poderá ser informado em notas fatura (NF3e, NFCom, NFAg e NFGas) | Obrig. | 1018 | **Rej.** | Rejeição: Grupo de devolução não permitido para este modelo de DFe |
| 003 | Se informado grupo de Devolução da CBS (gCBS/gDevTrib):<br><br>- Grupo de devolução da CBS informado indevidamente<br><br>**Observação**: esse grupo só poderá ser informado em notas fatura (NF3e, NFCom, NFAg e NFGas) | Obrig. | 1019 | **Rej.** | Rejeição: Grupo de devolução não permitido para este modelo de DFe |

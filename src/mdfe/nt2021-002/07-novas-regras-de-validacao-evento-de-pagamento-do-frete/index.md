<!-- p.13 -->
# 7 Novas Regras de Validação Evento de Pagamento do Frete

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| # | O somatório dos componentes (tag: infPag/Comp/vComp) deve ser igual ao valor do contrato (tag: infPag/vContrato)<br><br>**Observação**: tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 746 | Rej. |
| # | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1):<br>O número da parcela deve ser informado com três algarismos, sequenciais e consecutivos entre as parcelas (ex: 001, 002, 003)<br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 735 | Rej. |
| # | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1):<br>Nenhuma parcela pode ser anterior a data de emissão do MDF-e<br><br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 736 | Rej. |
| # | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1):<br>A data informada em cada parcela deve ser posterior a parcela anterior<br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 737 | Rej. |
| # | Se o pagamento estiver informado com pagamento a prazo (tag: indPag=1):<br>O somatório do valor das parcelas (tag: vParcela) + valor do adiantamento (tag: vAdiant) não pode ser diferente do valor do Contrato (tag: vContrato)<br>**Observação**: tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 738 | Rej. |
| # | Se o pagamento estiver informado com pagamento a vista (tag: indPag=0):<br>O valor do adiantamento não pode ser informado (tag: vAdiant) | Obrig. | 739 | Rej. |

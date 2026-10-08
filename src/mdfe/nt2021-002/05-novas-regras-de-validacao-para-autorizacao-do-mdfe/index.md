<!-- p.11 -->
# 5 Novas Regras de validação para Autorização do MDF-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| | **Validações do Tipo de Transportador** | | | |
| # | Se modal rodoviário e informado CPF do proprietário do veículo de tração:<br>A informação do tipo de transportador (tpTransp) deverá ser preenchida com TAC (2). | Obrig. | 743 | Rej. |
| # | Se modal rodoviário e informado CNPJ do proprietário do veículo de tração:<br><br>A informação do tipo de transportador (tpTransp) deverá ser preenchida com ETC (1) ou CTC (3). | Obrig. | 744 | Rej. |
| # | Se modal rodoviário e não informado o grupo proprietário do veículo de tração:<br>A informação do tipo de transportador (tpTransp) não deverá ser preenchida. | Obrig. | 745 | Rej. |
| | **Validações do Pagamento** | | | |
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento:<br>O somatório dos componentes (tag: infPag/Comp/vComp) deve ser igual ao valor do contrato (tag: infPag/vContrato)<br>**Observação**: tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 746 | Rej. |
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento com pagamento a prazo (tag: indPag=1):<br>O número da parcela deve ser informado com três algarismos, sequenciais e consecutivos entre as parcelas (ex: 001, 002, 003)<br><br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 735 | Rej. |
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento com pagamento a prazo (tag: indPag=1):<br>Nenhuma parcela pode ser anterior a data de emissão do MDF-e<br><br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 736 | Rej. |

<!-- p.12 -->

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento com pagamento a prazo (tag: indPag=1):<br>A data informada em cada parcela deve ser posterior a parcela anterior<br>**Observação**: informar o número da parcela com problema [nParcela: 999] | Obrig. | 737 | Rej. |
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento com pagamento a prazo (tag: indPag=1):<br>O somatório do valor das parcelas (tag: vParcela) + valor do adiantamento (tag: vAdiant) não pode ser diferente do valor do Contrato (tag: vContrato)<br>**Observação**: tolerar uma diferença de R$ 0,01 a mais ou a menos | Obrig. | 738 | Rej. |
| # | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou Transportador Próprio que informou o Tipo de Transportador (tpEmit=2 com tag tpTransp informada) e informado grupo de Pagamento com pagamento a vista (tag: indPag=0):<br>O valor do adiantamento não pode ser informado (tag: vAdiant) | Obrig. | 739 | Rej. |
| | **Validações do Proprietário/Possuidor do Veículo** | | | |
| # | Se modal rodoviário e informado proprietário ou possuidor do veículo de tração (CNPJ/CPF) este deve ser diferente do emitente do MDF-e | Obrig. | 740 | Rej. |
| # | Se modal rodoviário e informado proprietário ou possuidor do veículo de tração (CNPJ/CPF), o grupo contratante deverá ser informado com apenas uma ocorrência (infContratante) indicando o CNPJ/CPF do emitente do MDF-e | Obrig. | 741 | Rej. |
| | **Validações do Contratante** | | | |
| # | Se informado o grupo contratante (infContratante), a informação de CNPJ/CPF/idEstrangeiro não poderá estar duplicada dentro do grupo.<br>**Observação**: indicar qual contratante está duplicado no grupo [Contratante: 99999999999] | Obrig. | 742 | Rej. |

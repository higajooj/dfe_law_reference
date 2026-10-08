<!-- p.8 -->
# 3.2. Grupo YA. Informações de Pagamento

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398.01** | **YA01** | **pag** | **Grupo de Informações de Pagamento** | **G** | **A01** | | **1-1** | | **Obrigatório o preenchimento do Grupo Informações de Pagamento para NF-e e NFC-e. Para as notas com finalidade de Ajuste ou Devolução o campo Meio de Pagamento deve ser preenchido com 90=Sem Pagamento.** |
| **398.10** | **YA01a** | **detPag** | **Grupo Detalhamento do Pagamento** | **G** | **YA01** | | **1-100** | | |
| 398.11 | YA01b | indPag | Indicador da Forma de Pagamento | E | YA01a | N | 0-1 | 1 | 0=Pagamento à Vista<br>1= Pagamento a Prazo |
| 398.12 | YA02 | tPag | Meio de pagamento | E | YA01a | N | 1-1 | 2 | Utilizar a Tabela de códigos dos meios de pagamentos publicada no Portal Nacional da Nota Fiscal Eletrônica. |
| 398.12a | YA02a | xPag | Descrição do Meio de Pagamento | E | YA01a | C | 0-1 | 2-60 | Descrição do meio de pagamento. Preencher informando o meio de pagamento utilizado quando o código do meio de pagamento for informado como 99-outros. |
| 398.13 | YA03 | vPag | Valor do Pagamento | E | YA01a | N | 1-1 | 13v2 | |
| **398.20** | **YA04** | **card** | **Grupo de Cartões** | **G** | **YA01a** | | **0-1** | | |
| 398.21 | YA04a | tpIntegra | Tipo de Integração para pagamento | E | YA04 | N | 1-1 | 1 | Tipo de Integração do processo de pagamento com o sistema de automação da empresa:<br>1=Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico)<br>2= Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS) |
| 398.22 | YA05 | CNPJ | CNPJ da instituição de pagamento | E | YA04 | C | 0-1 | 14 | Informar o CNPJ da instituição de pagamento, adquirente ou subadquirente. Caso o pagamento seja processado pelo intermediador da transação, informar o CNPJ do intermediador. |

<!-- p.9 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 398.23 | YA06 | tBand | Código da bandeira da operadora de cartão de crédito e/ou débito | E | YA04 | N | 0-1 | 2 | Utilizar a Tabela de Códigos das Operadoras de cartão de crédito e/ou débito publicada no Portal Nacional da Nota Fiscal Eletrônica. |
| 398.24 | YA07 | cAut | Número de autorização da operação cartão de crédito e/ou débito | E | YA04 | C | 0-1 | 1-20 | Identifica o número da autorização da transação da operação com cartão de crédito e/ou débito |
| 398.25 | YA09 | vTroco | Valor do troco | E | YA01 | N | 0-1 | 13v2 | Valor do troco |

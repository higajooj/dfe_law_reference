<!-- p.11 -->
# 3.7. Grupo YA. Informações de Pagamento

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398.01** | **YA01** | **pag** | **Grupo de Informações de Pagamento** | **G** | **A01** | | **1-1** | | **Obrigatório o preenchimento do Grupo Informações de Pagamento para NF-e e NFC-e. Para as notas com finalidade de Ajuste ou Devolução o campo Meio de Pagamento deve ser preenchido com 90=Sem Pagamento.** |
| **398.10** | **YA01a** | **detPag** | **Grupo Detalhamento do Pagamento** | **G** | **YA01** | | **1-100** | | |
| 398.11 | YA01b | indPag | Indicador da Forma de Pagamento | E | YA01a | N | 0-1 | 1 | 0= Pagamento à Vista<br>1= Pagamento à Prazo (Incluído na NT2016.002) |
| 398.12 | YA02 | tPag | Meio de pagamento | E | YA01a | N | 1-1 | 2 | Utilizar a Tabela de códigos dos meios de pagamentos publicada no Portal Nacional da Nota Fiscal Eletrônica Atualizado na NT 2020.006 |
| 398.12a | YA02a | xPag | Descrição do Meio de Pagamento | E | YA01a | C | 0-1 | 2-60 | Descrição do meio de pagamento. Preencher informando o meio de pagamento utilizado quando o código do meio de pagamento for informado como 99-outros. |
| 398.13 | YA03 | vPag | Valor do Pagamento | E | YA01a | N | 1-1 | 13v2 | |
| 398.13a | YA03a | dPag | Data do Pagamento | E | YA01a | D | 0-1 | | |
| **398.13b** | **YA03b** | **-x-** | **Sequência XML** | **G** | **YA01** | | **0-1** | | **Grupo opcional.** |
| 398.13c | YA03c | CNPJPag | CNPJ transacional do pagamento | E | YA03b | N | 1-1 | 14 | Preencher informando o CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido quando a emissão do documento fiscal ocorrer em estabelecimento distinto. |
| 398.13d | YA03d | UFPag | UF do CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido | E | YA03b | C | 1-1 | 2 | UF do CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido. |
| **398.20** | **YA04** | **card** | **Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos** | **G** | **YA01a** | | **0-1** | | |
| 398.21 | YA04a | tpIntegra | Tipo de Integração para pagamento | E | YA04 | N | 1-1 | 1 | Tipo de Integração do processo de pagamento com o sistema de automação da empresa:<br>1=Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico, POS Integrado)<br>2= Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS Simples) |
| 398.22 | YA05 | CNPJ | CNPJ da instituição de pagamento | E | YA04 | C | 0-1 | 14 | Informar o CNPJ da instituição de pagamento, adquirente ou subadquirente. Caso o pagamento seja processado pelo intermediador da transação, informar o CNPJ do intermediador. |
| 398.23 | YA06 | tBand | Bandeira da operadora de cartão de crédito e/ou débito | E | YA04 | N | 0-1 | 2 | Utilizar a Tabela de Códigos das Operadoras de cartão de crédito e/ou débito publicada no Portal Nacional da Nota Fiscal Eletrônica. |
| 398.24 | YA07 | cAut | Número de autorização da operação com cartões, PIX, boletos e outros pagamentos eletrônicos | E | YA04 | C | 0-1 | 1-128 | Identifica o número da autorização da transação da operação com cartões, PIX, boletos e outros pagamentos eletrônicos |
| 398.24a | YA07a | CNPJReceb | CNPJ do beneficiário do pagamento | E | YA04 | C | 0-1 | 14 | Informar o CNPJ do estabelecimento beneficiário do pagamento |
| 398.24b | YA07b | idTermPag | Identificador do terminal de pagamento | E | YA04 | C | 0-1 | 40 | Identificar o terminal em que foi realizado o pagamento |
| 398.25 | YA09 | vTroco | Valor do troco | E | YA01 | N | 0-1 | 13v2 | Valor do troco (Incluído na NT2016.002) |

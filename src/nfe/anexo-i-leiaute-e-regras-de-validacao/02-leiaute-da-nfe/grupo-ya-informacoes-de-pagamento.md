# Grupo YA. Informações de Pagamento

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **398.01** | **pag (YA01)** | **G** | **A01** |  | **1-1** |  | **Grupo de Informações de Pagamento<br>Obrig.atório o preenchimento do Grupo Informações de Pagamento para NF-e e NFC-e. Para as notas com finalidade de Ajuste ou Devolução o campo Meio de Pagamento deve ser preenchido com 90=Sem Pagamento.** |
| **398.10** | **detPag (YA01a)** | **G** | **YA01** |  | **1-100** |  | **Grupo Detalhamento do Pagamento** |
| 398.11 | indPag (YA01b) | E | YA01a | N | 0-1 | 1 | Indicador da Forma de Pagamento<br>0= Pagamento à Vista 1= Pagamento à Prazo (Incluído na NT2016.002) |
| 398.12 | tPag (YA02) | E | YA01a | N | 1-1 | 2 | Meio de pagamento<br>01=Dinheiro 02=Cheque 03=Cartão de Crédito 04=Cartão de Débito 05=Crédito Loja 10=Vale Alimentação 11=Vale Refeição 12=Vale Presente 13=Vale Combustível 15=Boleto Bancário 16=Depósito Bancário 17=Pagamento Instantâneo (PIX) 18=Transferência bancária, Carteira Digital 19=Programa de fidelidade, Cashback, Crédito Virtual 90= Sem pagamento 99=Outros (Atualizado na NT2016.002, NT2020.006) |
| 398.13 | vPag (YA03) | E | YA01a | N | 1-1 | 13v2 | Valor do Pagamento |
| **398.20** | **card (YA04)** | **G** | **YA01a** |  | **0-1** |  | **Grupo de Cartões** |
| 398.21 | tpIntegra (YA04a) | E | YA04 | N | 1-1 | 1 | Tipo de Integração para pagamento<br>Tipo de Integração do processo de pagamento com o sistema de automação da empresa: 1=Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico); 2= Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS); |
| 398.22 | CNPJ (YA05) | E | YA04 | C | 0-1 | 14 | CNPJ da instituição de pagamento<br>Informar o CNPJ da instituição de pagamento, adquirente ou subadquirente. Caso o pagamento seja processado pelo intermediador da transação, informar o CNPJ deste (Atualizado na NT 2020.006) <!-- p.63 --> |
| 398.23 | tBand (YA06) | E | YA04 | N | 0-1 | 2 | Bandeira da operadora de cartão de crédito e/ou débito<br>01=Visa 02=Mastercard 03=American Express 04=Sorocred 05=Diners Club 06=Elo 07=Hipercard 08=Aura 09=Cabal 99=Outros (Atualizado na NT2016.002) |
| 398.24 | cAut (YA07) | E | YA04 | C | 0-1 | 1-20 | Número de autorização da operação cartão de crédito e/ou débito<br>Identifica o número da autorização da transação da operação com cartão de crédito e/ou débito |
| 398.25 | vTroco (YA09) | E | YA01 | N | 0-1 | 13v2 | Valor do troco<br>Valor do troco (Incluído na NT2016.002) |

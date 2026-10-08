<!-- p.05 -->
# 2 Alterações no Schema do Modal Rodoviário

As tags incluídas e modificadas do modal Rodoviário estão marcadas na tabela abaixo.

| # | Campo | Nível | Descrição | Ele | Tipo | Ocorr. | Tam. | Observações |
|---|---|---|---|---|---|---|---|---|
| 1 | **rodo** | **0** | **Informações do modal Rodoviário** | **G** | | **1-1** | | |
| 2 | **infANTT** | **1** | **Grupo de informações para Agência Reguladora** | **G** | | **0-1** | | |
| 3 | RNTRC | 2 | Registro Nacional de Transportadores Rodoviários de Carga | E | N | 0-1 | 8 | Registro obrigatório do emitente do MDF-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 4 | **infCIOT** | **2** | **Dados do CIOT** | **G** | | **0-n** | | |
| 5 | CIOT | 3 | Código Identificador da Operação de Transporte | E | N | 1-1 | 12 | Também Conhecido como carta frete |
| 6 | CPF | 3 | Número do CPF responsável pela geração do CIOT | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 7 | CNPJ | 3 | Número do CNPJ responsável pela geração do CIOT | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 8 | **valePed** | **2** | **Informações de Vale Pedágio** | **G** | | **0-1** | | Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes. |
| 9 | **disp** | **3** | **Informações dos dispositivos do Vale Pedágio** | **G** | | **1-n** | | |
| 10 | CNPJForn | 4 | CNPJ da empresa fornecedora do Vale-Pedágio | E | N | 1-1 | 14 | CNPJ da Empresa Fornecedora do Vale-Pedágio, ou seja, empresa que fornece ao Responsável pelo Pagamento do Vale-Pedágio os dispositivos do Vale-Pedágio.<br><br>Informar os zeros não significativos. |
| 11 | CNPJPg | 4 | CNPJ do responsável pelo pagamento do Vale-Pedágio | CE | N | 1-1 | 14 | Responsável pelo pagamento do Vale Pedágio. Informar somente quando o responsável não for o emitente do MDF-e.<br><br>Informar os zeros não significativos. |
| 12 | CPFPg | 4 | CNPJ do responsável pelo pagamento do Vale-Pedágio | CE | N | 1-1 | 11 | Informar os zeros não significativos. |

<!-- p.06 -->

| # | Campo | Nível | Descrição | Ele | Tipo | Ocorr. | Tam. | Observações |
|---|---|---|---|---|---|---|---|---|
| 13 | nCompra | 4 | Número do comprovante de compra | E | N | 0-1 | 1-20 | Número de ordem do comprovante de compra do Vale-Pedágio fornecido para cada veículo ou combinação veicular, por viagem. |
| 14 | vValePed | 4 | Valor do Vale Pedágio | E | N | 1-1 | 13, 2 | Valor do Vale-Pedágio obrigatório necessário à livre circulação, desde a origem da operação de transporte até o destino, do transportador contratado. |
| 15 | tpValePed | 4 | Tipo do Vale Pedágio | E | N | 0-1 | 2 | Preencher com:<br>01 - TAG;<br>02 - Cupom;<br>03 - Cartão |
| 16 | categCombVeic | 3 | Categoria de Combinação Veicular | E | N | 0-1 | 2 | Preencher com:<br>02 Veículo Comercial 2 eixos;<br>04 Veículo Comercial 3 eixos;<br>06 Veículo Comercial 4 eixos;<br>07 Veículo Comercial 5 eixos;<br>08 Veículo Comercial 6 eixos;<br>10 Veículo Comercial 7 eixos;<br>11 Veículo Comercial 8 eixos;<br>12 Veículo Comercial 9 eixos;<br>13 Veículo Comercial 10 eixos;<br>14 Veículo Comercial Acima de 10 eixos; |
| 17 | **infContratante** | **2** | **Grupo de informações dos contratantes do serviço de transporte** | **G** | | **0-n** | | |
| 18 | xNome | 3 | Razão social ou Nome do contratante | E | C | 0-1 | 2-60 | |
| 19 | CPF | 3 | Número do CPF do contratante do serviço | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 20 | CNPJ | 3 | Número do CNPJ do contratante do serviço | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 21 | idEstrangeiro | 3 | Identificador do contratante em caso de contratante estrangeiro | CE | C | 1-1 | 2-20 | |
| 22 | **infPag** | **2** | **Informações do Pagamento do Frete** | **G** | | **0-n** | | |
| 23 | xNome | 3 | Razão social ou Nome do responsável pelo pagamento | E | C | 0-1 | 2-60 | |
| 24 | CPF | 3 | Número do CPF do responsável pelo CE pgto | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 25 | CNPJ | 3 | Número do CNPJ do responsável pelo CE pgto | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 26 | idEstrangeiro | 3 | Identificador do responsável pelo pgto CE em caso de ser estrangeiro | CE | C | 1-1 | 2-20 | |
| 27 | **Comp** | **3** | **Componentes do Pagamento do Frete** | **G** | | **1-n** | | |
| 28 | tpComp | 4 | Tipo do Componente | E | N | 1-1 | 2 | Preencher com:<br><br>01 - Vale Pedágio;<br>02 - Impostos, taxas e contribuições;<br>03 - Despesas (bancárias, meios de pagamento, outras)<br>99 - Outros |
| 29 | vComp | 4 | Valor do componente | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |
| 30 | xComp | 4 | Descrição do componente do tipo Outros | E | C | 0-1 | 2-60 | |
| 31 | vContrato | 3 | Valor Total do Contrato | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |

<!-- p.07 -->

| # | Campo | Nível | Descrição | Ele | Tipo | Ocorr. | Tam. | Observações |
|---|---|---|---|---|---|---|---|---|
| 32 | indAltoDesemp | 3 | Indicador de operação de transporte de alto desempenho | E | N | 0-1 | 1 | Operação de transporte com utilização de veículos de frotas dedicadas ou fidelizadas.<br>Preencher com “1” para indicar operação de transporte de alto desempenho, demais casos não informar a tag |
| 33 | indPag | 3 | Indicador da Forma de Pagamento | E | N | 1-1 | 1 | 0-Pagamento à Vista;<br>1-Pagamento à Prazo; |
| 34 | <mark>vAdiant</mark> | <mark>3</mark> | <mark>Valor do Adiantamento</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>13, 2</mark> | <mark>15 posições, sendo 13 inteiras e 2 decimais.<br><br>Utilizar somente no pagamento a prazo</mark> |
| 35 | **infPrazo** | **3** | **Informações do pagamento a prazo.** | **G** | | **0-n** | | Informar somente se indPag for a Prazo |
| 36 | nParcela | 4 | Número da Parcela | E | N | <mark>1-1</mark> | 3 | |
| 37 | dVenc | 4 | Data de vencimento da Parcela (AAAA-MM-DD) | E | D | <mark>1-1</mark> | 10 | |
| 38 | vParcela | 4 | Valor da Parcela | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |
| 39 | **infBanc** | **3** | **Informações bancárias** | **G** | | **1-1** | | |
| # | ----- X ---- | --- | Sequência XML | CE | --- | 1-1 | | |
| 40 | codBanco | 4 | Número do banco | E | C | 1-1 | 3-5 | |
| 41 | codAgencia | 4 | Número da agência bancária | E | C | 1-1 | 1-10 | |
| 42 | CNPJIPEF | 4 | Número do CNPJ da Instituição de Pagamento Eletrônico do Frete | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 43 | PIX | 4 | Chave PIX | CE | C | 1–1 | 2–60 | Informar a chave PIX para recebimento do frete.<br>Pode ser email, CPF/ CNPJ (somente numeros), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |
| 44 | **veicTracao** | **1** | **Dados do Veículo com a Tração** | **G** | | **1-1** | | |
| 45 | cInt | 2 | Código interno do veículo | E | C | 0-1 | 1-10 | |
| 46 | placa | 2 | Placa do veículo | E | C | 1-1 | 4 | |
| 47 | RENAVAM | 2 | RENAVAM do veículo | E | C | 0-1 | 9-11 | |
| 48 | tara | 2 | Tara em KG | E | N | 1-1 | 1-6 | |
| 49 | capKG | 2 | Capacidade em KG | E | N | 0-1 | 1-6 | |
| 50 | capM3 | 2 | Capacidade em M3 | E | N | 0-1 | 1-3 | |
| 51 | **prop** | **2** | **Proprietário ou possuidor do Veículo.** | **G** | | **0-1** | | Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e |
| 52 | CPF | 3 | Número do CPF | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 53 | CNPJ | 3 | Número do CNPJ | CE | N | 1-1 | 14 | Informar os zeros não significativos. |

<!-- p.08 -->

| # | Campo | Nível | Descrição | Ele | Tipo | Ocorr. | Tam. | Observações |
|---|---|---|---|---|---|---|---|---|
| 54 | RNTRC | 3 | Registro Nacional dos Transportadores Rodoviários de Carga | E | N | 1-1 | 8 | Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 55 | xNome | 3 | Razão Social ou Nome do proprietário | E | C | 1-1 | 2-60 | |
| 56 | IE | 3 | Inscrição Estadual | E | C | 1-1 | 0-14 | |
| 57 | UF | 3 | UF | E | C | 1-1 | 2 | |
| 58 | tpProp | 3 | Tipo Proprietário ou possuidor | E | N | 1-1 | 1 | Preencher com:<br>0-TAC Agregado;<br>1-TAC Independente;<br>2 – Outros. |
| 59 | **condutor** | **2** | **Informações do(s) Condutor(es) do veículo** | **G** | | **1-10** | | |
| 60 | xNome | 3 | Nome do Condutor | E | C | 1-1 | 2-60 | |
| 61 | CPF | 3 | CPF do Condutor | E | N | 1-1 | 11 | |
| 62 | tpRod | 2 | Tipo de Rodado | E | N | 1-1 | 2 | Preencher com:<br>01 - Truck;<br>02 - Toco;<br>03 - Cavalo Mecânico;<br>04 - VAN;<br>05 - Utilitário;<br>06 - Outros. |
| 63 | tpCar | 2 | Tipo de Carroceria | E | N | 1-1 | 2 | Preencher com:<br>00 - Não aplicável;<br>01 - Aberta;<br>02 - Fechada/Baú;<br>03 - Granelera;<br>04 - Porta Container;<br>05 - Sider |
| 64 | UF | 2 | UF em que veículo está licenciado | E | C | <mark>0-1</mark> | 2 | Sigla da UF de licenciamento do veículo. |
| 65 | **veicReboque** | **1** | **Dados dos reboques** | **G** | | **0-3** | | |
| 66 | cInt | 2 | Código interno do veículo | E | C | 0-1 | 1-10 | |
| 67 | placa | 2 | Placa do veículo | E | C | 1-1 | 4 | |
| 68 | RENAVAM | 2 | RENAVAM do veículo | E | C | 0-1 | 9-11 | |
| 69 | tara | 2 | Tara em KG | E | N | 1-1 | 1-6 | |
| 70 | capKG | 2 | Capacidade em KG | E | N | 1-1 | 1-6 | |
| 71 | capM3 | 2 | Capacidade em M3 | E | N | 0-1 | 1-3 | |
| 72 | **prop** | **2** | **Proprietário ou possuidor do Veículo.** | **G** | | **0-1** | | Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e |
| 73 | CPF | 3 | Número do CPF | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 74 | CNPJ | 3 | Número do CNPJ | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 75 | RNTRC | 3 | Registro Nacional dos Transportadores Rodoviários de Carga | E | N | 1-1 | 8 | Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 76 | xNome | 3 | Razão Social ou Nome do proprietário | E | C | 1-1 | 1-60 | |
| 77 | IE | 3 | Inscrição Estadual | E | C | 1-1 | 0-14 | |
| 78 | UF | 3 | UF | E | C | 1-1 | 2 | |
| 79 | tpProp | 3 | Tipo Proprietário ou possuidor | E | N | 1-1 | 1 | Preencher com:<br>0-TAC Agregado;<br>1-TAC Independente;<br>2 – Outros. |
| 80 | tpCar | 2 | Tipo de Carroceria | E | N | 1-1 | 2 | Preencher com:<br>00 - Não aplicável;<br>01 - Aberta;<br>02 - Fechada/Baú;<br>03 - Granelera;<br>04 - Porta Container;<br>05 - Sider |
| 81 | UF | 2 | UF em que veículo está licenciado | E | C | <mark>0-1</mark> | 2 | Sigla da UF de licenciamento do veículo. |
| 82 | codAgPorto | 1 | Código de Agendamento no porto | E | C | 0-1 | 0-16 | |
| 83 | **lacRodo** | **1** | **Lacres** | **G** | | **0-n** | | |
| 84 | nLacre | 2 | Número do Lacre | E | C | 1-1 | 1-20 | |

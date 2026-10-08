<!-- p.05 -->

# 3 Alterações no Schema do Modal Rodoviário

As tags incluídas e modificadas do modal Rodoviário estão marcadas na tabela abaixo.

| # | Campo | Nível | Descrição | Ele | Tipo | Ocorr. | Tam. | Observações |
|---|---|---|---|---|---|---|---|---|
| **1** | **rodo** | **0** | **Informações do modal Rodoviário** | **G** |  | **1-1** |  |  |
| **2** | **&emsp;infANTT** | **1** | **Grupo de informações para Agência Reguladora** | **G** |  | **0-1** |  |  |
| 3 | &emsp;&emsp;RNTRC | 2 | Registro Nacional de Transportadores Rodoviários de Carga | E | N | 0-1 | 8 | Registro obrigatório do emitente do MDF-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| <!-- p.06 -->**4** | **&emsp;&emsp;infCIOT** | **2** | **Dados do CIOT** | **G** |  | **0-n** |  |  |
| 5 | &emsp;&emsp;&emsp;CIOT | 3 | Código Identificador da Operação de Transporte | E | N | 1-1 | 12 | Também Conhecido como conta frete |
| 6 | &emsp;&emsp;&emsp;CPF | 3 | Número do CPF responsável pela geração do CIOT | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 7 | &emsp;&emsp;&emsp;CNPJ | 3 | Número do CNPJ responsável pela geração do CIOT | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| **8** | **&emsp;&emsp;valePed** | **2** | **Informações de Vale Pedágio** | **G** |  | **0-1** |  | **Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes.** |
| **9** | **&emsp;&emsp;&emsp;disp** | **3** | **Informações dos dispositivos do Vale Pedágio** | **G** |  | **1-n** |  |  |
| 10 | &emsp;&emsp;&emsp;&emsp;CNPJForn | 4 | CNPJ da empresa fornecedora do Vale-Pedágio | E | N | 1-1 | 14 | CNPJ da Empresa Fornecedora do Vale-Pedágio, ou seja, empresa que fornece ao Responsável pelo Pagamento do Vale-Pedágio os dispositivos do Vale-Pedágio.<br><br>Informar os zeros não significativos. |
| 11 | &emsp;&emsp;&emsp;&emsp;CNPJPg | 4 | CNPJ do responsável pelo pagamento do Vale-Pedágio | CE | N | 1-1 | 14 | Responsável pelo pagamento do Vale Pedágio. Informar somente quando o responsável não for o emitente do MDF-e.<br><br>Informar os zeros não significativos. |
| 12 | &emsp;&emsp;&emsp;&emsp;CPFPg | 4 | CNPJ do responsável pelo pagamento do Vale-Pedágio | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 13 | &emsp;&emsp;&emsp;&emsp;nCompra | 4 | Número do comprovante de compra | E | N | <mark>0</mark> - 1 | 1-20 | Número de ordem do comprovante de compra do Vale-Pedágio fornecido para cada veículo ou combinação veicular, por viagem. |
| 14 | &emsp;&emsp;&emsp;&emsp;vValePed | 4 | Valor do Vale Pedágio | E | N | 1-1 | 13, 2 | Valor do Vale-Pedágio obrigatório necessário à livre circulação, desde a origem da operação de transporte até o destino, do transportador contratado. |
| <mark>15</mark> | &emsp;&emsp;&emsp;&emsp;<mark>tpValePed</mark> | <mark>4</mark> | <mark>Tipo do Vale Pedágio</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>2</mark> | <mark>Preencher com:<br><br>01 - TAG;<br>02 - Cupom;<br>03 - Cartão</mark> |
| <mark>16</mark> | &emsp;&emsp;&emsp;<mark>categCombVeic</mark> | <mark>3</mark> | <mark>Categoria de Combinação Veicular</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>2</mark> | <mark>Preencher com:<br><br>02 Veículo Comercial 2 eixos;<br>04 Veículo Comercial 3 eixos;<br>06 Veículo Comercial 4 eixos;<br>07 Veículo Comercial 5 eixos;<br>08 Veículo Comercial 6 eixos;<br>10 Veículo Comercial 7 eixos;<br>11 Veículo Comercial 8 eixos;<br>12 Veículo Comercial 9 eixos;<br>13 Veículo Comercial 10 eixos;<br>14 Veículo Comercial Acima de 10 eixos;</mark> |
| <!-- p.07 -->**17** | **&emsp;&emsp;infContratante** | **2** | **Grupo de informações dos contratantes do serviço de transporte** | **G** |  | **0-n** |  |  |
| 18 | &emsp;&emsp;&emsp;xNome | 3 | Razão social ou Nome do contratante | E | C | 0-1 | 2-60 |  |
| 19 | &emsp;&emsp;&emsp;CPF | 3 | Número do CPF do contratante do serviço | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 20 | &emsp;&emsp;&emsp;CNPJ | 3 | Número do CNPJ do contratante do serviço | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 21 | &emsp;&emsp;&emsp;idEstrangeiro | 3 | Identificador do contratante em caso de contratante estrangeiro | CE | C | 1-1 | 2-20 |  |
| **22** | **&emsp;&emsp;infPag** | **2** | **Informações do Pagamento do Frete** | **G** |  | **0-n** |  |  |
| 23 | &emsp;&emsp;&emsp;xNome | 3 | Razão social ou Nome do responsável pelo pagamento | E | C | 0-1 | 2-60 |  |
| 24 | &emsp;&emsp;&emsp;CPF | 3 | Número do CPF do responsável pelo pgto | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 25 | &emsp;&emsp;&emsp;CNPJ | 3 | Número do CNPJ do responsável pelo pgto | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 26 | &emsp;&emsp;&emsp;idEstrangeiro | 3 | Identificador do responsável pelo pgto em caso de ser estrangeiro | CE | C | 1-1 | 2-20 |  |
| **27** | **&emsp;&emsp;&emsp;Comp** | **3** | **Componentes do Pagamento do Frete** | **G** |  | **1-n** |  |  |
| 28 | &emsp;&emsp;&emsp;&emsp;tpComp | 4 | Tipo do Componente | E | N | 1-1 | 2 | Preencher com:<br><br>01 - Vale Pedágio;<br>02 - Impostos, taxas e contribuições;<br>03 - Despesas (bancárias, meios de pagamento, outras)<br>99 - Outros |
| 29 | &emsp;&emsp;&emsp;&emsp;vComp | 4 | Valor do componente | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |
| 30 | &emsp;&emsp;&emsp;&emsp;xComp | 4 | Descrição do componente do tipo Outros | E | C | 0-1 | 2-60 |  |
| 31 | &emsp;&emsp;&emsp;vContrato | 3 | Valor Total do Contrato | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |
| <mark>32</mark> | &emsp;&emsp;&emsp;<mark>indAltoDesemp</mark> | <mark>3</mark> | <mark>Indicador de operação de transporte de alto desempenho</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>1</mark> | <mark>Operação de transporte com utilização de veículos de frotas dedicadas ou fidelizadas.<br>Preencher com “1” para indicar operação de transporte de alto desempenho, demais casos não informar a tag</mark> |
| 33 | &emsp;&emsp;&emsp;indPag | 3 | Indicador da Forma de Pagamento:0-Pagamento à Vista;1-Pagamento à Prazo; | E | N | 1-1 | 1 |  |
| **34** | **&emsp;&emsp;&emsp;infPrazo** | **3** | **Informações do pagamento a prazo.** | **G** |  | **0-n** |  | **Informar somente se indPag for a Prazo** |
| 35 | &emsp;&emsp;&emsp;&emsp;nParcela | 4 | Número da Parcela | E | N | 0-1 | 3 |  |
| 36 | &emsp;&emsp;&emsp;&emsp;dVenc | 4 | Data de vencimento da Parcela (AAAA-MM-DD) | E | D | 0-1 | 10 |  |
| 37 | &emsp;&emsp;&emsp;&emsp;vParcela | 4 | Valor da Parcela | E | N | 1-1 | 13, 2 | 15 posições, sendo 13 inteiras e 2 decimais. |
| **38** | **&emsp;&emsp;&emsp;infBanc** | **3** | **Informações bancárias** | **G** |  | **1-1** |  |  |
| # | ----- X ---- | --- | Sequência XML | CE | --- | 1-1 |  |  |
| 39 | &emsp;&emsp;&emsp;&emsp;codBanco | 4 | Número do banco | E | C | 1-1 | 3-5 |  |
| <!-- p.08 -->40 | &emsp;&emsp;&emsp;&emsp;codAgencia | 4 | Número da agência bancária | E | C | 1-1 | 1-10 |  |
| 41 | &emsp;&emsp;&emsp;&emsp;CNPJIPEF | 4 | Número do CNPJ da Instituição de Pagamento Eletrônico do Frete | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| <mark>42</mark> | &emsp;&emsp;&emsp;&emsp;<mark>PIX</mark> | <mark>4</mark> | <mark>Chave PIX</mark> | <mark>CE</mark> | <mark>C</mark> | <mark>1–1</mark> | <mark>2–60</mark> | <mark>Informar a chave PIX para recebimento do frete.<br>Pode ser email, CPF/ CNPJ (somente numeros), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição.</mark> |
| **43** | **&emsp;veicTracao** | **1** | **Dados do Veículo com a Tração** | **G** |  | **1-1** |  |  |
| 44 | &emsp;&emsp;cInt | 2 | Código interno do veículo | E | C | 0-1 | 1-10 |  |
| 45 | &emsp;&emsp;placa | 2 | Placa do veículo | E | C | 1-1 | 4 |  |
| 46 | &emsp;&emsp;RENAVAM | 2 | RENAVAM do veículo | E | C | 0-1 | 9-11 |  |
| 47 | &emsp;&emsp;tara | 2 | Tara em KG | E | N | 1-1 | 1-6 |  |
| 48 | &emsp;&emsp;capKG | 2 | Capacidade em KG | E | N | 0-1 | 1-6 |  |
| 49 | &emsp;&emsp;capM3 | 2 | Capacidade em M3 | E | N | 0-1 | 1-3 |  |
| **50** | **&emsp;&emsp;prop** | **2** | **Proprietário <mark>ou possuidor</mark> do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e** | **G** |  | **0-1** |  |  |
| 51 | &emsp;&emsp;&emsp;CPF | 3 | Número do CPF | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 52 | &emsp;&emsp;&emsp;CNPJ | 3 | Número do CNPJ | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 53 | &emsp;&emsp;&emsp;RNTRC | 3 | Registro Nacional dos Transportadores Rodoviários de Carga | E | N | 1-1 | 8 | Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 54 | &emsp;&emsp;&emsp;xNome | 3 | Razão Social ou Nome do proprietário | E | C | 1-1 | 2-60 |  |
| 55 | &emsp;&emsp;&emsp;IE | 3 | Inscrição Estadual | E | C | 1-1 | 0-14 |  |
| 56 | &emsp;&emsp;&emsp;UF | 3 | UF | E | C | 1-1 | 2 |  |
| 57 | &emsp;&emsp;&emsp;tpProp | 3 | Tipo Proprietário <mark>ou possuidor</mark> | E | N | 1-1 | 1 | Preencher com:<br><br>0-TAC Agregado;<br>1-TAC Independente;<br>2 – Outros. |
| **58** | **&emsp;&emsp;condutor** | **2** | **Informações do(s) Condutor(es) do veículo** | **G** |  | **1-10** |  |  |
| 59 | &emsp;&emsp;&emsp;xNome | 3 | Nome do Condutor | E | C | 1-1 | 2-60 |  |
| 60 | &emsp;&emsp;&emsp;CPF | 3 | CPF do Condutor | E | N | 1-1 | 11 |  |
| 61 | &emsp;&emsp;tpRod | 2 | Tipo de Rodado | E | N | 1-1 | 2 | Preencher com:<br><br>01 - Truck;<br>02 - Toco;<br>03 - Cavalo Mecânico;<br>04 - VAN;<br>05 - Utilitário;<br>06 - Outros. |
| <!-- p.09 -->62 | &emsp;&emsp;tpCar | 2 | Tipo de Carroceria | E | N | 1-1 | 2 | Preencher com:<br><br>00 - Não aplicável;<br>01 - Aberta;<br>02 - Fechada/Baú;<br>03 - Granelera;<br>04 - Porta Container;<br>05 - Sider |
| 63 | &emsp;&emsp;UF | 2 | UF em que veículo está licenciado | E | C | <mark>0</mark> - 1 | 2 | Sigla da UF de licenciamento do veículo. |
| **64** | **&emsp;veicReboque** | **1** | **Dados dos reboques** | **G** |  | **0-3** |  |  |
| 65 | &emsp;&emsp;cInt | 2 | Código interno do veículo | E | C | 0-1 | 1-10 |  |
| 66 | &emsp;&emsp;placa | 2 | Placa do veículo | E | C | 1-1 | 4 |  |
| 67 | &emsp;&emsp;RENAVAM | 2 | RENAVAM do veículo | E | C | 0-1 | 9-11 |  |
| 68 | &emsp;&emsp;tara | 2 | Tara em KG | E | N | 1-1 | 1-6 |  |
| 69 | &emsp;&emsp;capKG | 2 | Capacidade em KG | E | N | 1-1 | 1-6 |  |
| 70 | &emsp;&emsp;capM3 | 2 | Capacidade em M3 | E | N | 0-1 | 1-3 |  |
| **71** | **&emsp;&emsp;prop** | **2** | **Proprietário <mark>ou possuidor</mark> do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e** | **G** |  | **0-1** |  |  |
| 72 | &emsp;&emsp;&emsp;CPF | 3 | Número do CPF | CE | N | 1-1 | 11 | Informar os zeros não significativos. |
| 73 | &emsp;&emsp;&emsp;CNPJ | 3 | Número do CNPJ | CE | N | 1-1 | 14 | Informar os zeros não significativos. |
| 74 | &emsp;&emsp;&emsp;RNTRC | 3 | Registro Nacional dos Transportadores Rodoviários de Carga | E | N | 1-1 | 8 | Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 75 | &emsp;&emsp;&emsp;xNome | 3 | Razão Social ou Nome do proprietário | E | C | 1-1 | 1-60 |  |
| 76 | &emsp;&emsp;&emsp;IE | 3 | Inscrição Estadual | E | C | 1-1 | 0-14 |  |
| 77 | &emsp;&emsp;&emsp;UF | 3 | UF | E | C | 1-1 | 2 |  |
| 78 | &emsp;&emsp;&emsp;tpProp | 3 | Tipo Proprietário <mark>ou possuidor</mark> | E | N | 1-1 | 1 | Preencher com:<br><br>0-TAC Agregado;<br>1-TAC Independente;<br>2 – Outros. |
| 79 | &emsp;&emsp;tpCar | 2 | Tipo de Carroceria | E | N | 1-1 | 2 | Preencher com:<br><br>00 - Não aplicável;<br>01 - Aberta;<br>02 - Fechada/Baú;<br>03 - Granelera;<br>04 - Porta Container;<br>05 - Sider |
| 80 | &emsp;&emsp;UF | 2 | UF em que veículo está licenciado | E | C | <mark>0</mark> - 1 | 2 | Sigla da UF de licenciamento do veículo. |
| 81 | &emsp;codAgPorto | 1 | Código de Agendamento no porto | E | C | 0-1 | 0-16 |  |
| **82** | **&emsp;lacRodo** | **1** | **Lacres** | **G** |  | **0-n** |  |  |
| 83 | &emsp;&emsp;nLacre | 2 | Número do Lacre | E | C | 1-1 | 1-20 |  |

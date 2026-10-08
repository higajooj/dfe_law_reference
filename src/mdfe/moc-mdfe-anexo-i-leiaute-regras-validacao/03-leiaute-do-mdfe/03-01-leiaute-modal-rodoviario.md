# 3.1 Leiaute do Modal Rodoviário

Colunas: # | Campo | Ele | Pai (nível) | Tipo | Ocor. | Tam. | Descrição/Observação. Os códigos de domínio (*Dom.*) e de expressão regular (*ER*) da fonte estão indicados na descrição.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **rodo** | **G** | **0** | | **1 - 1** | | **Informações do modal Rodoviário** <!-- p.34 --> |
| 2 | **infANTT** | **G** | **1** | | **0 - 1** | | **Grupo de informações para Agência Reguladora** |
| 3 | RNTRC | E | 2 | C | 0 - 1 | 8 | Registro Nacional de Transportadores Rodoviários de Carga. *ER:* ER41. Registro obrigatório do emitente do MDFe junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 4 | **infCIOT** | **G** | **2** | | **0 - n** | | **Dados do CIOT** |
| 5 | CIOT | E | 3 | C | 1 - 1 | 12 | Código Identificador da Operação de Transporte. *ER:* ER59. Também conhecido como conta frete |
| 6 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF responsável pela geração do CIOT. *ER:* ER10. Informar os zeros não significativos. |
| 7 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ responsável pela geração do CIOT. *ER:* ER9. Informar os zeros não significativos. |
| 8 | **valePed** | **G** | **2** | | **0 - 1** | | **Informações de Vale Pedágio. Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes.** |
| 9 | **disp** | **G** | **3** | | **1 - n** | | **Informações dos dispositivos do Vale Pedágio** |
| 10 | CNPJForn | E | 4 | C | 1 - 1 | 14 | CNPJ da empresa fornecedora do Vale-Pedágio. *ER:* ER7. CNPJ da empresa fornecedora do Vale-Pedágio, ou seja, empresa que fornece ao Responsável pelo Pagamento do Vale-Pedágio os dispositivos do Vale-Pedágio. Informar os zeros não significativos. |
| 11 | CNPJPg | CE | 4 | C | 1 - 1 | 14 | CNPJ do responsável pelo pagamento do Vale-Pedágio. *ER:* ER9. Responsável pelo pagamento do Vale-Pedágio. Informar somente quando o responsável não for o emitente do MDFe. Informar os zeros não significativos. |
| 12 | CPFPg | CE | 4 | C | 1 - 1 | 11 | CPF do responsável pelo pagamento do Vale-Pedágio. *ER:* ER10. Informar os zeros não significativos. |
| 13 | nCompra | E | 4 | C | 0 - 1 | 1 - 20 | Número do comprovante de compra. *ER:* ER60. Número de ordem do comprovante de compra do Vale-Pedágio fornecido para cada veículo ou combinação veicular, por viagem. <!-- p.35 --> |
| 14 | vValePed | E | 4 | C | 1 - 1 | 13,2 | Valor do Vale-Pedagio. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. Valor do Vale-Pedágio obrigatório necessário à livre circulação, desde a origem da operação de transporte até o destino, do transportador contratado. |
| 15 | tpValePed | E | 4 | N | 0 - 1 | 2 | Tipo do Vale Pedagio. *Dom.:* D15. 01 - TAG; 02 - Cupom; 03 - Cartão |
| 16 | categCombVeic | E | 3 | N | 0 - 1 | 2 | Categoria de Combinação Veicular. *Dom.:* D16. Preencher com: 02 Veículo Comercial 2 eixos; 04 Veículo Comercial 3 eixos; 06 Veículo Comercial 4 eixos; 07 Veículo Comercial 5 eixos; 08 Veículo Comercial 6 eixos; 10 Veículo Comercial 7 eixos; 11 Veículo Comercial 8 eixos; 12 Veículo Comercial 9 eixos; 13 Veículo Comercial 10 eixos; 14 Veículo Comercial Acima de 10 eixos. |
| 17 | **infContratante** | **G** | **2** | | **0 - n** | | **Grupo de informações dos contratantes do serviço de transporte** |
| 18 | xNome | E | 3 | C | 0 - 1 | 2 - 60 | Razão social ou Nome do contratante. *ER:* ER35 |
| 19 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF do contratante do serviço. *ER:* ER10. Informar os zeros não significativos. |
| 20 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ do contratante do serviço. *ER:* ER9. Informar os zeros não significativos. |
| 21 | idEstrangeiro | CE | 3 | C | 1 - 1 | 2 - 20 | Identificador do contratante em caso de contratante estrangeiro. *ER:* ER61 |
| 22 | **infContrato** | **G** | **3** | | **0 - 1** | | **Grupo de informações do contrato entre transportador e contratante** |
| 23 | NroContrato | E | 4 | N | 1 - 1 | 20 | Número do contrato do transportador com o contratante quando este existir para prestações continuadas |
| 24 | vContratoGlobal | E | 4 | N | 1 - 1 | 13,2 | Valor Global do Contrato. 15 posições, sendo 13 inteiras e 2 decimais. |
| 25 | **infPag** | **G** | **2** | | **0 - n** | | **Informações do Pagamento do Frete** <!-- p.36 --> |
| 26 | xNome | E | 3 | C | 0 - 1 | 2 - 60 | Razão social ou Nome do responsável pelo pagamento. *ER:* ER35 |
| 27 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF do responsável pelo pgto. *ER:* ER10. Informar os zeros não significativos. |
| 28 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ do responsável pelo pgto. *ER:* ER9. Informar os zeros não significativos. |
| 29 | idEstrangeiro | CE | 3 | C | 1 - 1 | 2 - 20 | Identificador do responsável pelo pgto em caso de ser estrangeiro. *ER:* ER61 |
| 30 | **Comp** | **G** | **3** | | **1 - n** | | **Componentes do Pagamento do Frete** |
| 31 | tpComp | E | 4 | N | 1 - 1 | 2 | Tipo do Componente. *Dom.:* D17. Preencher com: 01 - Vale Pedágio; 02 - Impostos, taxas e contribuições; 03 - Despesas (bancárias, meios de pagamento, outras); 99 - Outros |
| 32 | vComp | E | 4 | C | 1 - 1 | 13,2 | Valor do componente. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 33 | xComp | E | 4 | C | 0 - 1 | 2 - 60 | Descrição do componente do tipo outros. *ER:* ER35 |
| 34 | vContrato | E | 3 | C | 1 - 1 | 13,2 | Valor Total do Contrato. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 35 | indAltoDesemp | E | 3 | N | 0 - 1 | 1 | Indicador de operação de transporte de alto desempenho. *Dom.:* D10. Operação de transporte com utilização de veículos de frotas dedicadas ou fidelizadas. Preencher com "1" para indicar operação de transporte de alto desempenho, demais casos não informar a tag |
| 36 | indPag | E | 3 | N | 1 - 1 | 1 | Indicador da Forma de Pagamento. *Dom.:* D18. 0 - Pagamento à Vista; 1 - Pagamento à Prazo; |
| 37 | vAdiant | E | 3 | C | 0 - 1 | 13,2 | Valor do Adiantamento (usar apenas em pagamento à Prazo). *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 38 | indAntecipaAdiant | E | 3 | N | 0 - 1 | | Indicador de declaração de concordância em antecipar o adiantamento. *ER:* ER? Informar a tag somente se for autorizado antecipar o adiantamento |
| 39 | **infPrazo** | **G** | **3** | | **0 - n** | | **Informações do pagamento a prazo. Informar somente se indPag for à Prazo** |
| 40 | nParcela | E | 4 | C | 1 - 1 | 3 | Número da Parcela. *ER:* ER6 |
| 41 | dVenc | E | 4 | D | 1 - 1 | 10 | Data de vencimento da Parcela (AAAA-MM-DD). *ER:* ER36 |
| 42 | vParcela | E | 4 | C | 1 - 1 | 13,2 | Valor da Parcela. *ER:* ER28. 15 posições, sendo 13 inteiras e 2 casas decimais. <!-- p.37 --> |
| 43 | tpAntecip | E | 3 | N | 0 - 1 | 1 | Tipo de Permissão em relação a antecipação das parcelas. Preencher com: 0 - Não permite antecipar; 1 - Permite antecipar as parcelas; 2 - Permite antecipar as parcelas mediante confirmação. |
| 44 | **infBanc** | **G** | **3** | | **1 - 1** | | **Informações bancárias** |
| 45 | codBanco | E | 4 | C | 1 - 1 | 3 - 5 | Número do banco. *ER:* ER35 |
| 46 | codAgencia | E | 4 | C | 1 - 1 | 1 - 10 | Número da agência bancária. *ER:* ER35 |
| 47 | CNPJIPEF | CE | 4 | C | 1 - 1 | 14 | Número do CNPJ da Instituição de Pagamento Eletrônico do Frete. *ER:* ER9. Informar os zeros não significativos. |
| 48 | PIX | CE | 4 | C | 1 - 1 | 2 - 60 | Chave PIX. *ER:* ER35. Informar a chave PIX para recebimento do frete. Pode ser email, CPF/CNPJ (somente números), Telefone com a seguinte formatação (+5599999999999) ou a chave aleatória gerada pela instituição. |
| 49 | **veicTracao** | **G** | **1** | | **1 - 1** | | **Dados do Veículo com a Tração** |
| 50 | cInt | E | 2 | C | 0 - 1 | 1 - 10 | Código interno do veículo. *ER:* ER35 |
| 51 | placa | E | 2 | C | 1 - 1 | 4 | Placa do veículo. *ER:* ER40 |
| 52 | RENAVAM | E | 2 | C | 0 - 1 | 9 - 11 | RENAVAM do veículo. *ER:* ER35 |
| 53 | tara | E | 2 | C | 1 - 1 | 1 - 6 | Tara em KG. *ER:* ER62 |
| 54 | capKG | E | 2 | C | 0 - 1 | 1 - 6 | Capacidade em KG. *ER:* ER62 |
| 55 | capM3 | E | 2 | C | 0 - 1 | 1 - 3 | Capacidade em M3. *ER:* ER32 |
| 56 | **prop** | **G** | **2** | | **0 - 1** | | **Proprietário ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDFe** |
| 57 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER10. Informar os zeros não significativos. |
| 58 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER9. Informar os zeros não significativos. |
| 59 | RNTRC | E | 3 | C | 1 - 1 | 8 | Registro Nacional dos Transportadores Rodoviários de Carga. *ER:* ER41. Registro obrigatório do proprietário, coproprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 60 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome do proprietário. *ER:* ER35 |
| – | --- x --- | – | 3 | – | 0 - 1 | | Sequência XML |
| 61 | IE | ES | 3 | C | 1 - 1 | 0 - 14 | Inscrição Estadual. *ER:* ER29 <!-- p.38 --> |
| 62 | UF | ES | 3 | C | 1 - 1 | 2 | UF. *Dom.:* D5 |
| 63 | tpProp | E | 3 | N | 1 - 1 | 1 | Tipo Proprietário ou possuidor. *Dom.:* D19. Preencher com: 0 - TAC Agregado; 1 - TAC Independente; 2 – Outros. |
| 64 | **condutor** | **G** | **2** | | **1 - 10** | | **Informações do(s) Condutor(es) do veículo** |
| 65 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Nome do Condutor. *ER:* ER35 |
| 66 | CPF | E | 3 | C | 1 - 1 | 11 | CPF do Condutor. *ER:* ER10 |
| 67 | tpRod | E | 2 | N | 1 - 1 | 2 | Tipo de Rodado. *Dom.:* D20. Preencher com: 01 - Truck; 02 - Toco; 03 - Cavalo Mecânico; 04 - VAN; 05 - Utilitário; 06 - Outros. |
| 68 | tpCar | E | 2 | N | 1 - 1 | 2 | Tipo de Carroceria. *Dom.:* D21. Preencher com: 00 - não aplicável; 01 - Aberta; 02 - Fechada/Baú; 03 - Granelera; 04 - Porta Container; 05 - Sider |
| 69 | UF | E | 2 | C | 0 - 1 | 2 | UF em que veículo está licenciado. *Dom.:* D5. Sigla da UF de licenciamento do veículo. |
| 70 | **veicReboque** | **G** | **1** | | **0 - 3** | | **Dados dos reboques** |
| 71 | cInt | E | 2 | C | 0 - 1 | 1 - 10 | Código interno do veículo. *ER:* ER35 |
| 72 | placa | E | 2 | C | 1 - 1 | 4 | Placa do veículo. *ER:* ER40 |
| 73 | RENAVAM | E | 2 | C | 0 - 1 | 9 - 11 | RENAVAM do veículo. *ER:* ER35 |
| 74 | tara | E | 2 | C | 1 - 1 | 1 - 6 | Tara em KG. *ER:* ER62 |
| 75 | capKG | E | 2 | C | 1 - 1 | 1 - 6 | Capacidade em KG. *ER:* ER62 |
| 76 | capM3 | E | 2 | C | 0 - 1 | 1 - 3 | Capacidade em M3. *ER:* ER32 |
| 77 | **prop** | **G** | **2** | | **0 - 1** | | **Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDFe** |
| 78 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER10. Informar os zeros não significativos. |
| 79 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER9. Informar os zeros não significativos. |
| 80 | RNTRC | E | 3 | C | 1 - 1 | 8 | Registro Nacional dos Transportadores Rodoviários de Carga. *ER:* ER41. Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração. |
| 81 | xNome | E | 3 | C | 1 - 1 | 1 - 60 | Razão Social ou Nome do proprietário. *ER:* ER35 <!-- p.39 --> |
| – | --- x --- | – | 3 | – | 0 - 1 | | Sequência XML |
| 82 | IE | ES | 3 | C | 1 - 1 | 0 - 14 | Inscrição Estadual. *ER:* ER29 |
| 83 | UF | ES | 3 | C | 1 - 1 | 2 | UF. *Dom.:* D5 |
| 84 | tpProp | E | 3 | N | 1 - 1 | 1 | Tipo Proprietário ou possuidor. *Dom.:* D19. Preencher com: 0 - TAC Agregado; 1 - TAC Independente; 2 – Outros. |
| 85 | tpCar | E | 2 | N | 1 - 1 | 2 | Tipo de Carroceria. *Dom.:* D21. Preencher com: 00 - não aplicável; 01 - Aberta; 02 - Fechada/Baú; 03 - Granelera; 04 - Porta Container; 05 - Sider |
| 86 | UF | E | 2 | C | 0 - 1 | 2 | UF em que veículo está licenciado. *Dom.:* D5. Sigla da UF de licenciamento do veículo. |
| 87 | codAgPorto | E | 1 | C | 0 - 1 | 0 - 16 | Código de Agendamento no porto. *ER:* ER35 |
| 88 | **lacRodo** | **G** | **1** | | **0 - n** | | **Lacres** |
| 89 | nLacre | E | 2 | C | 1 - 1 | 1 - 20 | Número do Lacre. *ER:* ER35 |
